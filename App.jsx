import React, { useState, useMemo, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Header } from './components/Header';
import { CategorySelection } from './components/CategorySelection';
import { TopicGrid } from './components/TopicGrid';
import { StreakModal } from './components/StreakModal';
import { InteractiveStudySession } from './components/InteractiveStudySession';
import { ContentCreationStudio } from './components/ContentCreationStudio';
import { MyLibrary } from './components/MyLibrary';
import { Toast } from './components/Toast';
import { Footer } from './components/Footer';
import { PSYCHOLOGY_TOPICS } from './data/topics';
import { 
  loadStreakData, 
  recordStreakActivity,
  getTodayString 
} from './utils/streakManager';
// Migration: remove old fake generated topics from localStorage
try {
  localStorage.removeItem('psychegrow_generated_topics');
} catch {}

const COMPLETED_STORAGE_KEY = 'psychegrow_completed_topic_ids';
const SAVED_SCRIPTS_STORAGE_KEY = 'psychegrow_saved_scripts';
const ACTIVE_MAP_STORAGE_KEY = 'psychegrow_active_topics_map';
const MASTERED_TODAY_STORAGE_KEY = 'psychegrow_mastered_today_ids';

export function App() {
  // Mode Switcher state: 'study' (🧠 Study Mode) or 'content' (🎬 Content Studio)
  const [currentMode, setCurrentMode] = useState('study');

  // Category navigation state: null = Category Selection Screen, or category name string
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Active 4 topics map per category: { [categoryName]: [topicId1, topicId2, topicId3, topicId4] }
  const [activeTopicsMap, setActiveTopicsMap] = useState(() => {
    try {
      const stored = localStorage.getItem(ACTIVE_MAP_STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  // Streak state management with date verification and local storage persistence
  const [streakData, setStreakData] = useState(() => loadStreakData());

  // Merged pool of all available topics (curated bank)
  const allTopicsPool = useMemo(() => PSYCHOLOGY_TOPICS, []);

  // Mastered & completed topic IDs
  const [completedTopicIds, setCompletedTopicIds] = useState(() => {
    try {
      const stored = localStorage.getItem(COMPLETED_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed;
      }
      return [];
    } catch {
      return [];
    }
  });

  // Saved Content Scripts in user's Library vault
  const [savedScripts, setSavedScripts] = useState(() => {
    try {
      const stored = localStorage.getItem(SAVED_SCRIPTS_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed;
      }
      return [];
    } catch {
      return [];
    }
  });

  // Topics mastered today: prevents re-marking from re-triggering confetti or double-counting activity
  const [masteredTodayIds, setMasteredTodayIds] = useState(() => {
    try {
      const stored = localStorage.getItem(MASTERED_TODAY_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed?.date === getTodayString() && Array.isArray(parsed?.ids)) {
          return parsed.ids;
        }
      }
      return [];
    } catch {
      return [];
    }
  });

  const saveMasteredToday = (ids) => {
    try {
      localStorage.setItem(MASTERED_TODAY_STORAGE_KEY, JSON.stringify({
        date: getTodayString(),
        ids
      }));
    } catch {}
  };

  // Detailed view states: study session, content studio, or library
  const [studyTopic, setStudyTopic] = useState(null);
  const [contentTopic, setContentTopic] = useState(null);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);

  // Header, search, streak modal & other UI states
  const [isStreakModalOpen, setIsStreakModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [isRotating, setIsRotating] = useState(false);
  const toastTimeoutRef = useRef(null);

  // Confetti celebration helper
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#7A6F91', '#A8634F', '#647D61', '#967C46', '#596E82'],
      });
    } catch {
      // Graceful fallback
    }
  };

  const showToast = (msg) => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setToastMessage(msg);
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage('');
      toastTimeoutRef.current = null;
    }, 3600);
  };

  const handleCloseToast = () => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
      toastTimeoutRef.current = null;
    }
    setToastMessage('');
  };

  // Helper to persist activeTopicsMap
  const persistActiveMap = (mapObj) => {
    try {
      localStorage.setItem(ACTIVE_MAP_STORAGE_KEY, JSON.stringify(mapObj));
    } catch {
      // Fallback
    }
  };

  // Select Category from the Category Selection screen
  const handleSelectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
    setIsLibraryOpen(false);
    setStudyTopic(null);
    setContentTopic(null);

    // Helper to match topic to category flexibly
    const matchCategory = (t, catName) => {
      if (!t || !catName) return false;
      const c = catName.toLowerCase();
      const b = t.branch?.toLowerCase() || '';
      const k = t.categoryKey?.toLowerCase() || '';
      return b === c || k === c || b.includes(c) || c.includes(b);
    };

    // Filter available topics in this category
    const categoryTopics = allTopicsPool.filter((t) => matchCategory(t, categoryName));

    const existingIds = activeTopicsMap[categoryName];
    let needsInit = !existingIds || existingIds.length !== 4;

    if (!needsInit) {
      // Verify IDs exist in pool
      const validCount = existingIds.filter((id) => allTopicsPool.some((t) => t.id === id)).length;
      if (validCount !== 4) needsInit = true;
    }

    if (needsInit) {
      const uncompleted = categoryTopics.filter((t) => !completedTopicIds.includes(t.id));
      const completed = categoryTopics.filter((t) => completedTopicIds.includes(t.id));
      let initial4 = [...uncompleted, ...completed].slice(0, 4);

      // If category has fewer than 4 items, fill with remaining pool to always provide 4 active cards
      if (initial4.length < 4) {
        const fillers = allTopicsPool.filter((t) => !initial4.some((item) => item.id === t.id));
        initial4 = [...initial4, ...fillers.slice(0, 4 - initial4.length)];
      }

      setActiveTopicsMap((prev) => {
        const nextMap = {
          ...prev,
          [categoryName]: initial4.map((t) => t.id),
        };
        persistActiveMap(nextMap);
        return nextMap;
      });
    }

    showToast(`Loaded 4 active models for ${categoryName}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Change Category (back to Category Selection Screen)
  const handleChangeCategory = () => {
    setSelectedCategory(null);
    setStudyTopic(null);
    setContentTopic(null);
    setIsLibraryOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper to match topic to category
  const matchCategory = (t, catName) => {
    if (!t || !catName) return false;
    const c = catName.toLowerCase();
    const b = t.branch?.toLowerCase() || '';
    const k = t.categoryKey?.toLowerCase() || '';
    return b === c || k === c || b.includes(c) || c.includes(b);
  };

  // All topics in the currently selected category (including dynamically generated)
  const allCategoryTopics = useMemo(() => {
    if (!selectedCategory) return [];
    const matched = allTopicsPool.filter((t) => matchCategory(t, selectedCategory));
    return matched.length > 0 ? matched : allTopicsPool.slice(0, 4);
  }, [selectedCategory, allTopicsPool]);

  // Exactly 4 active topics currently on the dashboard for this category
  const activeTopics = useMemo(() => {
    if (!selectedCategory) return [];
    const activeIds = activeTopicsMap[selectedCategory];

    if (activeIds && activeIds.length === 4) {
      const mapped = activeIds
        .map((id) => allTopicsPool.find((t) => t.id === id))
        .filter(Boolean);
      if (mapped.length === 4) return mapped;
    }

    // Fallback: pick from allCategoryTopics, and if fewer than 4, fill with pool
    const uncompleted = allCategoryTopics.filter((t) => !completedTopicIds.includes(t.id));
    const completed = allCategoryTopics.filter((t) => completedTopicIds.includes(t.id));
    let fallback4 = [...uncompleted, ...completed].slice(0, 4);

    if (fallback4.length < 4) {
      const fillers = allTopicsPool.filter((t) => !fallback4.some((item) => item.id === t.id));
      fallback4 = [...fallback4, ...fillers.slice(0, 4 - fallback4.length)];
    }

    return fallback4;
  }, [selectedCategory, activeTopicsMap, allTopicsPool, allCategoryTopics, completedTopicIds]);



  // Auto-rotation & Lifecycle Logic:
  // Completing a topic records daily streak, archives to Vault, and auto-replaces with fresh topic
  const handleToggleComplete = async (topicId) => {
    const isCurrentlyCompleted = completedTopicIds.includes(topicId);

    if (isCurrentlyCompleted) {
      // Unmarking topic
      const updatedCompleted = completedTopicIds.filter((id) => id !== topicId);
      setCompletedTopicIds(() => {
        try {
          localStorage.setItem(COMPLETED_STORAGE_KEY, JSON.stringify(updatedCompleted));
        } catch {}
        return updatedCompleted;
      });
      showToast('Topic status updated to in-progress');
      return;
    }

    // 1. Topic is being mastered: compute updatedCompleted first!
    const updatedCompleted = [...completedTopicIds, topicId];
    setCompletedTopicIds(() => {
      try {
        localStorage.setItem(COMPLETED_STORAGE_KEY, JSON.stringify(updatedCompleted));
      } catch {}
      return updatedCompleted;
    });

    // 2. Re-marking a topic that was already mastered once today must not trigger confetti again or double-count activity
    const wasAlreadyMasteredToday = masteredTodayIds.includes(topicId);

    if (!wasAlreadyMasteredToday) {
      const updatedStreak = recordStreakActivity('complete_topic');
      setStreakData(updatedStreak);
      triggerConfetti();

      setMasteredTodayIds((prev) => {
        const next = [...prev, topicId];
        saveMasteredToday(next);
        return next;
      });
    }

    // 3. Rotation logic using updatedCompleted (not reading completedTopicIds after setter)
    const completedTopic = allTopicsPool.find((t) => t.id === topicId);
    const catName = completedTopic?.branch || selectedCategory;

    if (catName) {
      const categoryAll = allTopicsPool.filter((t) => matchCategory(t, catName));

      setActiveTopicsMap((prevMap) => {
        const currentActiveIds = prevMap[catName] || activeTopics.map((t) => t.id);

        // Find next unmastered candidate topic in the same category (not active, not in updatedCompleted)
        const candidate = categoryAll.find(
          (t) => !currentActiveIds.includes(t.id) && !updatedCompleted.includes(t.id)
        );

        if (candidate) {
          // Replace completed topic card with the candidate
          const newActiveIds = currentActiveIds.map((id) => (id === topicId ? candidate.id : id));
          const nextMap = { ...prevMap, [catName]: newActiveIds };
          persistActiveMap(nextMap);
          showToast(`Mastered! "${candidate.title}" rotated in • Finished topic transferred to Library`);
          return nextMap;
        } else {
          // If none remain, leave the mastered card in place and show the toast
          showToast("You've finished every topic in this category.");
          return prevMap;
        }
      });
    } else {
      showToast('Mastered! Topic transferred to your Library archive.');
    }
  };

  // Manual rotation of fresh topics within current branch
  const handleManualRotate = () => {
    if (!selectedCategory) return;
    setIsRotating(true);

    setActiveTopicsMap((prevMap) => {
      const currentIds = prevMap[selectedCategory] || activeTopics.map((t) => t.id);

      // Candidates in same category not currently in the 4 active
      const candidates = allCategoryTopics.filter((t) => !currentIds.includes(t.id));

      // Find unused (not completed) candidate
      const unusedCandidate = candidates.find((t) => !completedTopicIds.includes(t.id));

      if (!unusedCandidate) {
        showToast("You've finished every topic in this category.");
        return prevMap;
      }

      // Never drop an unmastered topic from the active list; swap out a mastered one first
      const masteredIndex = currentIds.findIndex((id) => completedTopicIds.includes(id));

      if (masteredIndex === -1) {
        showToast("All active topics are in-progress. Master a topic first to rotate.");
        return prevMap;
      }

      const nextActive = [...currentIds];
      nextActive[masteredIndex] = unusedCandidate.id;
      const nextMap = { ...prevMap, [selectedCategory]: nextActive };
      persistActiveMap(nextMap);
      showToast(`Rotated in fresh module: "${unusedCandidate.title}"`);
      return nextMap;
    });

    setTimeout(() => setIsRotating(false), 250);
  };

  const handleModeChange = (newMode) => {
    setCurrentMode(newMode);
    setIsLibraryOpen(false);

    if (newMode === 'content' && studyTopic) {
      const topicToPreload = studyTopic;
      setStudyTopic(null);
      setContentTopic(topicToPreload);
      showToast(`Switched to Content Studio for ${topicToPreload.title}`);
    } else if (newMode === 'study' && contentTopic) {
      const topicToStudy = contentTopic;
      setContentTopic(null);
      setStudyTopic(topicToStudy);
      showToast(`Switched to Study Mode for ${topicToStudy.title}`);
    } else {
      showToast(
        newMode === 'study'
          ? 'Switched to Study Mode'
          : 'Switched to Content Studio'
      );
    }
  };

  // Called when user selects a card from the 4-topic grid
  const handleSelectTopicFromGrid = (topic, modeOverride) => {
    setIsLibraryOpen(false);
    const targetMode = modeOverride || currentMode;
    if (targetMode === 'study') {
      setStudyTopic(topic);
      setContentTopic(null);
    } else {
      setContentTopic(topic);
      setStudyTopic(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Called from inside Study Session when clicking "Turn into Content"
  const handleTurnIntoContent = (topic) => {
    setStudyTopic(null);
    setIsLibraryOpen(false);
    setCurrentMode('content');
    setContentTopic(topic);
    triggerConfetti();
    showToast(`Switched to Content Studio for ${topic?.title || 'topic'}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Return to the current Category Dashboard
  const handleBackToDashboard = () => {
    setStudyTopic(null);
    setContentTopic(null);
    setIsLibraryOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Save generated script into Library
  const handleSaveScript = (scriptItem) => {
    setSavedScripts((prev) => {
      const updated = [scriptItem, ...prev];
      try {
        localStorage.setItem(SAVED_SCRIPTS_STORAGE_KEY, JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  // Delete script from Library
  const handleDeleteScript = (scriptId) => {
    setSavedScripts((prev) => {
      const updated = prev.filter((s) => s.id !== scriptId);
      try {
        localStorage.setItem(SAVED_SCRIPTS_STORAGE_KEY, JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  // Completed topic objects for the Library view (pulling from allTopicsPool)
  const completedTopicsList = useMemo(() => {
    return allTopicsPool.filter((t) => completedTopicIds.includes(t.id));
  }, [allTopicsPool, completedTopicIds]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F262E] flex flex-col font-sans selection:bg-[#DDD8E6] selection:text-[#1F262E]">
      
      {/* 1. Minimalist Top Header */}
      <Header
        currentMode={currentMode}
        setMode={handleModeChange}
        streakCount={streakData?.streakCount || 0}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onStreakClick={() => setIsStreakModalOpen(true)}
        isLibraryOpen={isLibraryOpen}
        onToggleLibrary={() => {
          setIsLibraryOpen(!isLibraryOpen);
          setStudyTopic(null);
          setContentTopic(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        libraryCount={completedTopicsList.length + savedScripts.length}
        onLogoClick={handleChangeCategory}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {isLibraryOpen ? (
          // View: My Library & Transferred Topics Archive
          <MyLibrary
            completedTopics={completedTopicsList}
            savedScripts={savedScripts}
            onReviewTopic={(t) => {
              setIsLibraryOpen(false);
              setStudyTopic(t);
              setContentTopic(null);
            }}
            onTurnIntoContent={(t) => {
              setIsLibraryOpen(false);
              handleTurnIntoContent(t);
            }}
            onUnmasterTopic={handleToggleComplete}
            onDeleteScript={handleDeleteScript}
            onBackToDashboard={handleBackToDashboard}
            onShowToast={showToast}
            onTriggerConfetti={triggerConfetti}
          />
        ) : studyTopic ? (
          // View: Interactive Study Session View
          <InteractiveStudySession
            key={studyTopic.id}
            topic={studyTopic}
            onBackToGrid={handleBackToDashboard}
            onTurnIntoContent={handleTurnIntoContent}
            onMarkMastered={handleToggleComplete}
            isMastered={completedTopicIds.includes(studyTopic.id)}
            onTriggerConfetti={triggerConfetti}
            onShowToast={showToast}
            onStreakUpdate={setStreakData}
          />
        ) : contentTopic ? (
          // View: Content Creation Studio View
          <ContentCreationStudio
            key={contentTopic.id}
            topic={contentTopic}
            allTopics={allCategoryTopics.length > 0 ? allCategoryTopics : allTopicsPool}
            onSelectTopic={(t) => setContentTopic(t)}
            onBackToDashboard={handleBackToDashboard}
            onShowToast={showToast}
            onTriggerConfetti={triggerConfetti}
            onSaveScript={handleSaveScript}
          />
        ) : !selectedCategory ? (
          // Category Selection Screen: Loads directly at start
          <CategorySelection
            onSelectCategory={handleSelectCategory}
            selectedCategory={selectedCategory}
            completedCount={completedTopicsList.length}
          />
        ) : (
          // Category-Driven Dashboard (Exactly 4 Active Topics with Endless Loop)
          <TopicGrid
            currentMode={currentMode}
            selectedCategory={selectedCategory}
            onChangeCategory={handleChangeCategory}
            activeTopics={activeTopics}
            allCategoryTopics={allCategoryTopics}
            onSelectTopic={handleSelectTopicFromGrid}
            completedTopicIds={completedTopicIds}
            searchQuery={searchQuery}
            onRotateTopics={handleManualRotate}
            isRotating={isRotating}
          />
        )}

      </main>

      {/* Footer (shown when on category selection or category dashboard) */}
      {!studyTopic && !contentTopic && !isLibraryOpen && <Footer />}

      {/* Streak Details Modal with Dynamic Calendar Tracking */}
      <StreakModal
        isOpen={isStreakModalOpen}
        onClose={() => setIsStreakModalOpen(false)}
        streakCount={streakData?.streakCount || 0}
        streakData={streakData}
        totalMastered={completedTopicIds.length}
      />

      {/* Feedback Toast */}
      <Toast
        message={toastMessage}
        onClose={handleCloseToast}
      />

    </div>
  );
}

export default App;
