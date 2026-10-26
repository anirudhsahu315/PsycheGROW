import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { Header } from './components/Header';
import { CategorySelection } from './components/CategorySelection';
import { TopicGrid } from './components/TopicGrid';
import { TopicModal } from './components/TopicModal';
import { StreakModal } from './components/StreakModal';
import { InteractiveStudySession } from './components/InteractiveStudySession';
import { ContentCreationStudio } from './components/ContentCreationStudio';
import { MyLibrary } from './components/MyLibrary';
import { Toast } from './components/Toast';
import { Footer } from './components/Footer';
import { PSYCHOLOGY_TOPICS } from './data/topics';
import { 
  loadStreakData, 
  recordStreakActivity 
} from './utils/streakManager';
import { 
  loadGeneratedTopics, 
  researchNewPsychologyTopic 
} from './data/topicResearchAgent';

const COMPLETED_STORAGE_KEY = 'psychegrow_completed_topic_ids';
const SAVED_SCRIPTS_STORAGE_KEY = 'psychegrow_saved_scripts';
const ACTIVE_MAP_STORAGE_KEY = 'psychegrow_active_topics_map';

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

  // Dynamic Topic Generation Agent state
  const [generatedTopics, setGeneratedTopics] = useState(() => loadGeneratedTopics());
  const [isAgentResearching, setIsAgentResearching] = useState(false);
  const [researchStageText, setResearchStageText] = useState('');

  // Merged pool of all available topics (curated static + agent-synthesized)
  const allTopicsPool = useMemo(() => {
    const map = new Map();
    // Add static topics
    PSYCHOLOGY_TOPICS.forEach((t) => map.set(t.id, t));
    // Add dynamically synthesized topics
    generatedTopics.forEach((t) => map.set(t.id, t));
    return Array.from(map.values());
  }, [generatedTopics]);

  // Mastered & completed topic IDs
  const [completedTopicIds, setCompletedTopicIds] = useState(() => {
    try {
      const stored = localStorage.getItem(COMPLETED_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed;
      }
      return ['anchoring-effect'];
    } catch {
      return ['anchoring-effect'];
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
      return [
        {
          id: 'saved-1',
          topicId: 'cognitive-dissonance',
          topicTitle: 'Cognitive Dissonance',
          branch: 'Cognitive Psychology',
          format: 'reel',
          formatLabel: 'Reel / Short Script',
          tone: 'viral',
          toneLabel: 'Viral & Catchy',
          title: 'Reel Script: Why Your Brain Gaslights You',
          previewText: "Your brain would rather lie to your face than admit you made a stupid decision. Here's why...",
          savedAt: 'Oct 24, 2026',
          fullContent: `🎬 REEL / SHORT SCRIPT: Why Your Brain Gaslights You\n⏱ Duration: 45-55 seconds | Platform: Instagram Reels / TikTok / YouTube Shorts\n\n[HOOK (0 - 3s)]\n👀 Visual Cue: Close-up on face, leaning in, pointing at camera.\n📱 On-Screen Text: YOUR BRAIN IS GASLIGHTING YOU 🧠🚨\n🎙️ Voiceover: "Your brain would rather lie to your face than admit you made a stupid decision. Here's why."\n\n[THE FRICTION (3 - 15s)]\n👀 Visual Cue: Fast cut scrolling online store late at night.\n📱 On-Screen Text: Late Night Regret vs Mental Math 🛒\n🎙️ Voiceover: "Ever buy something expensive you swore you didn't need? The second the receipt pings, you feel intense guilt. But within 30 seconds, your brain invents 4 ridiculous reasons why it was actually an 'investment in your productivity'."`
        }
      ];
    } catch {
      return [];
    }
  });

  // Detailed view states: study session, content studio, or library
  const [studyTopic, setStudyTopic] = useState(null);
  const [contentTopic, setContentTopic] = useState(null);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);

  // Quick preview modal topic & other states
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isStreakModalOpen, setIsStreakModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [isRotating, setIsRotating] = useState(false);

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
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? '' : prev));
    }, 3600);
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

  // Dynamic Topic Generation Agent trigger (Simulates Perplexity-style deep research)
  const handleTriggerAgentResearch = async (targetCategory = selectedCategory) => {
    if (!targetCategory || isAgentResearching) return;

    setIsAgentResearching(true);
    setResearchStageText(`Querying APA archives for "${targetCategory}"...`);

    try {
      const existingIds = allTopicsPool.map((t) => t.id);
      const newTopic = await researchNewPsychologyTopic({
        categoryName: targetCategory,
        existingTopicIds: existingIds,
        onProgress: (stageMsg) => {
          setResearchStageText(stageMsg);
        }
      });

      // 1. Add to generated topics pool
      setGeneratedTopics((prev) => [newTopic, ...prev]);

      // 2. Automatically slot newly synthesized topic into the active 4 topics
      setActiveTopicsMap((prev) => {
        const currentIds = prev[targetCategory] || activeTopics.map((t) => t.id);
        let updatedIds;
        
        if (currentIds.length >= 4) {
          // If any completed card is currently displayed on dashboard, replace that first
          const completedIdx = currentIds.findIndex((id) => completedTopicIds.includes(id));
          if (completedIdx !== -1) {
            updatedIds = [...currentIds];
            updatedIds[completedIdx] = newTopic.id;
          } else {
            // Otherwise, shift along
            updatedIds = [...currentIds.slice(1), newTopic.id];
          }
        } else {
          updatedIds = [...currentIds, newTopic.id];
        }

        const nextMap = { ...prev, [targetCategory]: updatedIds };
        persistActiveMap(nextMap);
        return nextMap;
      });

      triggerConfetti();
      showToast(`✨ Deep Research Synthesized: "${newTopic.title}" • Added to dashboard!`);
    } catch {
      showToast('Deep research synthesis timed out. Please try again.');
    } finally {
      setIsAgentResearching(false);
      setResearchStageText('');
    }
  };

  // Auto-rotation & Lifecycle Logic:
  // Completing a topic records daily streak, archives to Vault, and auto-replaces with fresh topic
  const handleToggleComplete = async (topicId) => {
    const isCurrentlyCompleted = completedTopicIds.includes(topicId);

    if (isCurrentlyCompleted) {
      // Unmarking topic
      const updated = completedTopicIds.filter((id) => id !== topicId);
      setCompletedTopicIds(updated);
      try {
        localStorage.setItem(COMPLETED_STORAGE_KEY, JSON.stringify(updated));
      } catch {}
      showToast('Topic status updated to in-progress');
    } else {
      // 1. Update daily streak with calendar date validation
      const updatedStreak = recordStreakActivity('complete_topic');
      setStreakData(updatedStreak);

      // 2. Mark completed and persist to library vault
      const updatedCompleted = [...completedTopicIds, topicId];
      setCompletedTopicIds(updatedCompleted);
      try {
        localStorage.setItem(COMPLETED_STORAGE_KEY, JSON.stringify(updatedCompleted));
      } catch {}

      triggerConfetti();

      // Find topic object to identify branch
      const completedTopic = allTopicsPool.find((t) => t.id === topicId);
      const catName = completedTopic?.branch || selectedCategory;

      if (catName) {
        const currentActiveIds = activeTopicsMap[catName] || activeTopics.map((t) => t.id);

        // Find candidate fresh topic in same category (not active and not yet completed)
        const categoryAll = allTopicsPool.filter(
          (t) => t.branch.toLowerCase() === catName.toLowerCase()
        );

        let candidate = categoryAll.find(
          (t) => !currentActiveIds.includes(t.id) && !updatedCompleted.includes(t.id)
        );

        if (candidate) {
          // Replace completed topic card with the candidate
          const newActiveIds = currentActiveIds.map((id) => (id === topicId ? candidate.id : id));
          setActiveTopicsMap((prev) => {
            const nextMap = { ...prev, [catName]: newActiveIds };
            persistActiveMap(nextMap);
            return nextMap;
          });
          showToast(`Mastered! "${candidate.title}" rotated in • Finished topic transferred to Library`);
        } else {
          // If all static modules are completed, automatically invoke Deep Research Agent!
          showToast(`Mastered! Finished topic archived. Synthesizing fresh module via Deep Research...`);
          handleTriggerAgentResearch(catName);
        }
      } else {
        showToast('Mastered! Topic transferred to your Library archive.');
      }
    }
  };

  // Manual rotation of fresh topics within current branch
  const handleManualRotate = () => {
    if (!selectedCategory) return;
    setIsRotating(true);
    const currentIds = activeTopicsMap[selectedCategory] || activeTopics.map((t) => t.id);

    // Candidates in same category not currently in the 4 active
    const candidates = allCategoryTopics.filter((t) => !currentIds.includes(t.id));

    if (candidates.length > 0) {
      // Prioritize uncompleted candidate if available
      const uncompletedCandidate = candidates.find((t) => !completedTopicIds.includes(t.id));
      const freshOne = uncompletedCandidate || candidates[0];

      const nextActive = [...currentIds.slice(1), freshOne.id];
      setActiveTopicsMap((prev) => {
        const nextMap = { ...prev, [selectedCategory]: nextActive };
        persistActiveMap(nextMap);
        return nextMap;
      });
      showToast(`Rotated in fresh module: "${freshOne.title}"`);
    } else {
      // If all category topics are active, trigger Deep Research for a brand-new concept!
      showToast('All category topics active! Triggering Deep Research Agent for fresh topic...');
      handleTriggerAgentResearch(selectedCategory);
    }

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
  const handleSelectTopicFromGrid = (topic) => {
    setIsLibraryOpen(false);
    if (currentMode === 'study') {
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
        libraryCount={completedTopicIds.length + savedScripts.length}
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
            completedCount={completedTopicIds.length}
          />
        ) : (
          // Category-Driven Dashboard (Exactly 4 Active Topics with Endless Loop & Deep Research)
          <TopicGrid
            currentMode={currentMode}
            selectedCategory={selectedCategory}
            onChangeCategory={handleChangeCategory}
            activeTopics={activeTopics}
            allCategoryTopics={allCategoryTopics}
            onSelectTopic={handleSelectTopicFromGrid}
            completedTopicIds={completedTopicIds}
            onToggleComplete={handleToggleComplete}
            searchQuery={searchQuery}
            onTriggerConfetti={triggerConfetti}
            onRotateTopics={handleManualRotate}
            isRotating={isRotating}
            onTriggerAgentResearch={() => handleTriggerAgentResearch(selectedCategory)}
            isAgentResearching={isAgentResearching}
            researchStageText={researchStageText}
          />
        )}

      </main>

      {/* Footer (shown when on category selection or category dashboard) */}
      {!studyTopic && !contentTopic && !isLibraryOpen && <Footer />}

      {/* Quick Topic Modal */}
      <TopicModal
        topic={selectedTopic}
        currentMode={currentMode}
        onClose={() => setSelectedTopic(null)}
        isCompleted={selectedTopic ? completedTopicIds.includes(selectedTopic.id) : false}
        onMarkComplete={handleToggleComplete}
        onShowToast={showToast}
        onTriggerConfetti={triggerConfetti}
      />

      {/* Streak Details Modal with Dynamic Calendar Tracking */}
      <StreakModal
        isOpen={isStreakModalOpen}
        onClose={() => setIsStreakModalOpen(false)}
        streakCount={streakData?.streakCount || 0}
        streakData={streakData}
      />

      {/* Feedback Toast */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />

    </div>
  );
}

export default App;
