import React from 'react';
import { TopicCard } from './TopicCard';
import { 
  ArrowLeft, 
  RotateCw, 
  Sparkle, 
  Sparkles,
  CheckCircle2, 
  Layers,
  AlertCircle
} from 'lucide-react';
import { PSYCHOLOGY_CATEGORIES } from '../data/topics';

export const TopicGrid = ({ 
  currentMode, 
  selectedCategory,
  onChangeCategory,
  activeTopics = [],
  allCategoryTopics = [],
  onSelectTopic, 
  completedTopicIds = [], 
  onToggleComplete,
  searchQuery,
  onTriggerConfetti,
  onRotateTopics,
  isRotating = false,
  onTriggerAgentResearch,
  isAgentResearching = false,
  researchStageText = ''
}) => {
  // Find category metadata
  const currentCategoryObj = PSYCHOLOGY_CATEGORIES.find(
    (c) => c.name.toLowerCase() === selectedCategory?.toLowerCase()
  ) || PSYCHOLOGY_CATEGORIES[0];

  const categoryCompletedCount = allCategoryTopics.filter((t) =>
    completedTopicIds.includes(t.id)
  ).length;

  // Filter active topics by search if search term entered
  const displayedTopics = activeTopics.filter((t) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      t.title.toLowerCase().includes(q) ||
      t.teaser.toLowerCase().includes(q) ||
      t.difficulty.toLowerCase().includes(q)
    );
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      
      {/* Category Dashboard Navigation & Quick Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#EAE5DC]">
        
        {/* Left: Quick "Change Category" + Category Information */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          
          {/* Quick Change Category Button */}
          <button
            onClick={onChangeCategory}
            className="self-start inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E7E2D8] hover:border-[#D0C8BC] text-[#1F262E] text-xs font-semibold shadow-subtle hover:bg-[#FAF8F5] transition-all group"
            title="Switch to a different psychology branch"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#7E8B97] group-hover:-translate-x-0.5 transition-transform" />
            <span>Change Category</span>
          </button>

          {/* Active Branch Pill & Title */}
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${currentCategoryObj.pastel.bg} ${currentCategoryObj.pastel.text} ${currentCategoryObj.pastel.border}`}>
                <Layers className="w-3 h-3" />
                <span>{selectedCategory}</span>
              </span>

              {currentCategoryObj.tradition && (
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white border border-[#E7E2D8] text-[#596773]">
                  {currentCategoryObj.tradition}
                </span>
              )}

              <span className="text-xs font-medium text-[#7E8B97]">
                • 4 Active Focus Modules
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#596773] mt-1 font-normal">
              {currentCategoryObj.tagline || 'Curated foundational models for today.'}
            </p>
          </div>

        </div>

        {/* Right: Rotation status, Deep Research Agent, and Refresh */}
        <div className="flex items-center gap-2 flex-wrap self-start md:self-auto">
          
          {/* Completed in this branch indicator */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#EFF4EE] border border-[#D2E0D0] text-[#52684F] text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#647D61]" />
            <span>
              {categoryCompletedCount} of {allCategoryTopics.length} Mastered
            </span>
          </div>

          {/* Deep Research Topic Agent Trigger Button */}
          <button
            onClick={onTriggerAgentResearch}
            disabled={isAgentResearching}
            title="Trigger Perplexity-style Deep Research Agent to synthesize a brand-new peer-reviewed topic"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F2EFF6] border border-[#DDD8E6] text-[#655A7B] hover:bg-[#EAE4F2] text-xs font-semibold transition-all disabled:opacity-50 shadow-subtle"
          >
            <Sparkles className={`w-3.5 h-3.5 ${isAgentResearching ? 'animate-spin text-[#7A6F91]' : 'text-[#7A6F91]'}`} />
            <span className="hidden sm:inline">
              {isAgentResearching ? 'Researching...' : 'Deep Research Topic'}
            </span>
          </button>

          {/* Manual fresh topic rotation button */}
          <button
            onClick={onRotateTopics}
            disabled={isRotating}
            title="Rotate in fresh topic from this category"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E7E2D8] text-[#596773] hover:text-[#1F262E] hover:border-[#D0C8BC] text-xs font-semibold transition-all disabled:opacity-50 shadow-subtle"
          >
            <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin text-[#7A6F91]' : ''}`} />
            <span className="hidden sm:inline">Rotate Fresh</span>
          </button>

        </div>

      </div>

      {/* Live Deep Research Agent Progress Banner */}
      {isAgentResearching && (
        <div className="mb-6 p-4 rounded-xl bg-[#F2EFF6] border border-[#DDD8E6] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#655A7B] animate-pulse">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-[#7A6F91] text-white flex items-center justify-center font-bold text-xs shadow-subtle">
              ⚡
            </div>
            <div>
              <div className="font-bold text-[#1F262E]">Deep Research Synthesis in Progress</div>
              <div className="text-[#655A7B] mt-0.5">{researchStageText || 'Scanning psychological literature archives...'}</div>
            </div>
          </div>
          <span className="self-start sm:self-auto px-2.5 py-1 rounded-full bg-white/70 text-[#7A6F91] font-semibold text-[11px] border border-[#DDD8E6]">
            Perplexity-Style Agent Pipeline
          </span>
        </div>
      )}

      {/* Notice on Auto-Rotation Logic */}
      <div className="mb-6 px-4 py-2.5 rounded-xl bg-[#F8F6F1] border border-[#EAE4D9] flex items-center justify-between text-xs text-[#596773]">
        <div className="flex items-center gap-2">
          <Sparkle className="w-3.5 h-3.5 text-[#7A6F91]" />
          <span>
            <strong className="text-[#1F262E] font-semibold">Endless Learning Loop:</strong> When you complete any topic, it transfers directly to your library vault and a fresh topic rotates in.
          </span>
        </div>
        <span className="text-[11px] text-[#7E8B97] hidden md:inline">
          Showing 4 of {allCategoryTopics.length} available modules
        </span>
      </div>

      {/* Grid Display: Exactly 4 Active Topics */}
      {displayedTopics.length === 0 ? (
        <div className="py-16 text-center rounded-2xl bg-white border border-[#E7E2D8] p-8">
          <AlertCircle className="w-10 h-10 text-[#A0AAB3] mx-auto mb-3" />
          <h3 className="text-lg font-bold text-[#1F262E]">No topics match your search</h3>
          <p className="text-sm text-[#596773] mt-1">Try clearing your search query to view active modules.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {displayedTopics.map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              currentMode={currentMode}
              isCompleted={completedTopicIds.includes(topic.id)}
              onSelect={onSelectTopic}
              onToggleComplete={(id) => {
                onToggleComplete(id);
                if (!completedTopicIds.includes(id)) {
                  onTriggerConfetti();
                }
              }}
            />
          ))}
        </div>
      )}

      {/* All Mastered Celebratory Footer Bar if applicable */}
      {categoryCompletedCount === allCategoryTopics.length && allCategoryTopics.length > 0 && (
        <div className="mt-10 p-5 rounded-2xl bg-[#EFF4EE] border border-[#D2E0D0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#647D61] text-white flex items-center justify-center font-bold">
              ✓
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#2D3F2B]">
                All modules in {selectedCategory} mastered!
              </h4>
              <p className="text-xs text-[#52684F] mt-0.5">
                All finished topics are archived in your Library. Ready to explore another domain?
              </p>
            </div>
          </div>

          <button
            onClick={onChangeCategory}
            className="px-4 py-2 rounded-xl bg-[#647D61] hover:bg-[#536950] text-white text-xs font-semibold transition-all shadow-subtle"
          >
            Explore Next Branch →
          </button>
        </div>
      )}

    </section>
  );
};
