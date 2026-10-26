import React, { useState } from 'react';
import { 
  ArrowLeft, 
  BookOpen, 
  Bookmark, 
  Trash2, 
  Copy, 
  Check, 
  Eye, 
  Smartphone, 
  Layers, 
  FileText, 
  Calendar, 
  CheckCircle2, 
  RotateCw, 
  Clapperboard, 
  X, 
  FolderX, 
  Award
} from 'lucide-react';

export const MyLibrary = ({ 
  completedTopics = [], 
  savedScripts = [], 
  onReviewTopic, 
  onTurnIntoContent, 
  onUnmasterTopic,
  onDeleteScript, 
  onBackToDashboard, 
  onShowToast, 
  onTriggerConfetti 
}) => {
  // Tab state: 'completed' | 'scripts'
  const [activeTab, setActiveTab] = useState('completed');

  // Preview modal for a saved script
  const [previewScript, setPreviewScript] = useState(null);
  const [copiedScriptId, setCopiedScriptId] = useState(null);

  const handleCopyScript = (script) => {
    navigator.clipboard.writeText(script.fullContent || script.previewText);
    setCopiedScriptId(script.id);
    onShowToast("📋 Script copied to clipboard from Library!");
    onTriggerConfetti();
    setTimeout(() => setCopiedScriptId(null), 2200);
  };

  const getFormatIcon = (format) => {
    switch (format) {
      case 'reel':
        return <Smartphone className="w-3.5 h-3.5 text-[#7A6F91]" />;
      case 'carousel':
        return <Layers className="w-3.5 h-3.5 text-[#A8634F]" />;
      case 'blog':
        return <FileText className="w-3.5 h-3.5 text-[#647D61]" />;
      default:
        return <Clapperboard className="w-3.5 h-3.5 text-[#7A6F91]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F262E] pb-28">
      
      {/* Top Sticky Header */}
      <div className="sticky top-0 z-30 w-full backdrop-blur-md bg-[#FAF8F5]/90 border-b border-[#E7E2D8] px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          
          <button
            onClick={onBackToDashboard}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#596773] hover:text-[#1F262E] transition-colors group p-1 -ml-1 rounded-xl hover:bg-[#F4F0E8]"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Dashboard</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F2EFF6] text-[#655A7B] border border-[#DDD8E6]">
              <Bookmark className="w-3.5 h-3.5 text-[#7A6F91]" />
              <span>Personal Knowledge Vault</span>
            </span>
          </div>

        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-7">
        
        {/* Page Hero Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1F262E] tracking-tight flex items-center gap-3">
              <BookOpen className="w-7 h-7 text-[#7A6F91]" />
              <span>My Library & Archive</span>
            </h1>
            <p className="mt-1.5 text-sm sm:text-base text-[#596773] max-w-2xl">
              Completed psychology modules automatically transfer here to make room for fresh active topics on your dashboard.
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="flex items-center gap-3 bg-white border border-[#E7E2D8] p-3 rounded-2xl shadow-subtle self-start sm:self-auto">
            <div className="text-center px-3 border-r border-[#EAE5DC]">
              <div className="text-xl font-bold text-[#52684F]">{completedTopics.length}</div>
              <div className="text-[10px] uppercase font-bold text-[#7E8B97]">Transferred</div>
            </div>
            <div className="text-center px-3">
              <div className="text-xl font-bold text-[#8F5543]">{savedScripts.length}</div>
              <div className="text-[10px] uppercase font-bold text-[#7E8B97]">Scripts</div>
            </div>
          </div>
        </div>

        {/* 1. TABBED VIEW SELECTOR */}
        <div className="flex border-b border-[#EAE5DC] gap-4">
          
          {/* Tab 1: Completed Topics */}
          <button
            onClick={() => setActiveTab('completed')}
            className={`flex items-center gap-2 pb-3.5 px-3 font-bold text-sm border-b-2 transition-all ${
              activeTab === 'completed'
                ? 'border-[#7A6F91] text-[#1F262E]'
                : 'border-transparent text-[#7E8B97] hover:text-[#1F262E]'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Transferred Topics</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              activeTab === 'completed' 
                ? 'bg-[#F2EFF6] text-[#655A7B]' 
                : 'bg-[#F4F0E8] text-[#7E8B97]'
            }`}>
              {completedTopics.length}
            </span>
          </button>

          {/* Tab 2: Saved Content Scripts */}
          <button
            onClick={() => setActiveTab('scripts')}
            className={`flex items-center gap-2 pb-3.5 px-3 font-bold text-sm border-b-2 transition-all ${
              activeTab === 'scripts'
                ? 'border-[#A8634F] text-[#1F262E]'
                : 'border-transparent text-[#7E8B97] hover:text-[#1F262E]'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span>Saved Scripts</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              activeTab === 'scripts' 
                ? 'bg-[#F9F0EC] text-[#8F5543]' 
                : 'bg-[#F4F0E8] text-[#7E8B97]'
            }`}>
              {savedScripts.length}
            </span>
          </button>

        </div>

        {/* 2. COMPLETED TOPICS TAB */}
        {activeTab === 'completed' && (
          <div>
            {completedTopics.length === 0 ? (
              <div className="py-20 text-center rounded-2xl bg-white border border-[#E7E2D8] p-8 space-y-4 shadow-subtle">
                <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] border border-[#E7E2D8] text-[#A0AAB3] flex items-center justify-center mx-auto">
                  <FolderX className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-[#1F262E]">No completed topics transferred yet</h3>
                <p className="text-sm text-[#596773] max-w-md mx-auto">
                  Complete any active module on your category dashboard. Once finished, it moves directly to this archive, and a fresh topic rotates into its place.
                </p>
                <button
                  onClick={onBackToDashboard}
                  className="mt-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-[#7A6F91] hover:bg-[#685D7F] text-white transition-all shadow-subtle"
                >
                  Explore Active Modules
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {completedTopics.map((topic) => (
                  <div
                    key={topic.id}
                    className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E7E2D8] shadow-card flex flex-col justify-between space-y-4"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${topic.branchColor?.bg || 'bg-[#F2EFF6]'} ${topic.branchColor?.text || 'text-[#655A7B]'} ${topic.branchColor?.border || 'border-[#DDD8E6]'}`}>
                          {topic.branch}
                        </span>

                        <div className="flex items-center gap-1.5">
                          <span className="flex items-center gap-1 text-[11px] font-bold text-[#52684F] bg-[#EFF4EE] px-2 py-0.5 rounded-md border border-[#D2E0D0]">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Mastered
                          </span>
                          {onUnmasterTopic && (
                            <button
                              onClick={() => onUnmasterTopic(topic.id)}
                              title="Unmark as mastered"
                              className="p-1 rounded-md text-[#7E8B97] hover:text-[#9E473D] hover:bg-[#FDF2F2] transition-colors"
                              aria-label="Unmark as mastered"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Topic Title */}
                      <h3 className="text-lg font-bold text-[#1F262E] mb-1">
                        {topic.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#596773] italic mb-4 line-clamp-2">
                        "{topic.teaser}"
                      </p>

                      {/* Completion Card */}
                      <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] space-y-1.5 text-xs text-[#596773]">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-[#7E8B97]">
                            <Calendar className="w-3.5 h-3.5 text-[#967C46]" />
                            Status:
                          </span>
                          <span className="text-[#1F262E] font-medium">
                            Transferred to Library
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-[#7E8B97]">
                            <Award className="w-3.5 h-3.5 text-[#647D61]" />
                            Difficulty:
                          </span>
                          <span className="text-[#1F262E] font-medium capitalize">
                            {topic.difficulty || 'Intermediate'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Review & Content Action Buttons */}
                    <div className="pt-3 border-t border-[#F2EEE7] flex items-center gap-2">
                      <button
                        onClick={() => onReviewTopic(topic)}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-[#1F262E] bg-[#FAF8F5] hover:bg-[#F4F0E8] border border-[#E7E2D8] transition-colors"
                      >
                        <RotateCw className="w-3.5 h-3.5 text-[#7A6F91]" />
                        <span>Review</span>
                      </button>

                      <button
                        onClick={() => onTurnIntoContent(topic)}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-[#7A6F91] hover:bg-[#685D7F] transition-colors shadow-subtle"
                      >
                        <Clapperboard className="w-3.5 h-3.5" />
                        <span>Create Script</span>
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 3. SAVED CONTENT SCRIPTS TAB */}
        {activeTab === 'scripts' && (
          <div>
            {savedScripts.length === 0 ? (
              <div className="py-20 text-center rounded-2xl bg-white border border-[#E7E2D8] p-8 space-y-4 shadow-subtle">
                <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] border border-[#E7E2D8] text-[#A0AAB3] flex items-center justify-center mx-auto">
                  <Bookmark className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-[#1F262E]">No saved scripts yet</h3>
                <p className="text-sm text-[#596773] max-w-md mx-auto">
                  Generate Reels, Carousels, or Blog drafts in the Content Creation Studio and save them here.
                </p>
                <button
                  onClick={() => onTurnIntoContent(completedTopics[0] || null)}
                  className="mt-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-[#A8634F] hover:bg-[#935442] text-white transition-all shadow-subtle"
                >
                  Open Content Studio
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {savedScripts.map((script) => (
                  <div
                    key={script.id}
                    className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E7E2D8] shadow-card flex flex-col justify-between space-y-4"
                  >
                    <div>
                      {/* Format & Tone */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#FAF8F5] text-[#1F262E] border border-[#E7E2D8]">
                            {getFormatIcon(script.format)}
                            <span>{script.formatLabel}</span>
                          </span>
                          <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-[#F9F0EC] text-[#8F5543] border border-[#EAD6CF]">
                            {script.toneLabel}
                          </span>
                        </div>

                        <span className="text-[11px] text-[#A0AAB3]">
                          {script.savedAt}
                        </span>
                      </div>

                      {/* Script Title */}
                      <h3 className="text-base sm:text-lg font-bold text-[#1F262E] mb-1">
                        {script.title}
                      </h3>

                      <div className="text-xs text-[#7A6F91] font-medium mb-3">
                        Topic: {script.topicTitle} ({script.branch})
                      </div>

                      {/* Preview Snippet */}
                      <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] text-xs sm:text-sm text-[#4E5B67] leading-relaxed line-clamp-3">
                        "{script.previewText}"
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-3 border-t border-[#F2EEE7] flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setPreviewScript(script)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-[#1F262E] bg-[#FAF8F5] hover:bg-[#F4F0E8] border border-[#E7E2D8] transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#7A6F91]" />
                          <span>View Full</span>
                        </button>

                        <button
                          onClick={() => handleCopyScript(script)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                            copiedScriptId === script.id
                              ? 'bg-[#EFF4EE] text-[#52684F] border border-[#C2D6C0]'
                              : 'bg-[#F2EFF6] text-[#655A7B] hover:bg-[#EAE4F2] border border-[#DDD8E6]'
                          }`}
                        >
                          {copiedScriptId === script.id ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>

                      <button
                        onClick={() => {
                          onDeleteScript(script.id);
                          onShowToast("🗑️ Script removed from library");
                        }}
                        title="Delete saved script"
                        className="p-2 rounded-xl text-[#A0AAB3] hover:text-[#D98282] hover:bg-[#FDF2F2] transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>

      {/* VIEW FULL SCRIPT MODAL */}
      {previewScript && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm animate-in fade-in duration-150">
          <div 
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white border border-[#E7E2D8] shadow-float p-6 sm:p-7 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewScript(null)}
              className="absolute top-5 right-5 p-1.5 rounded-xl text-[#7E8B97] hover:text-[#1F262E] hover:bg-[#FAF8F5] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-[#FAF8F5] text-[#596773] border border-[#E7E2D8]">
                {previewScript.formatLabel}
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-[#F9F0EC] text-[#8F5543] border border-[#EAD6CF]">
                {previewScript.toneLabel}
              </span>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1F262E]">
                {previewScript.title}
              </h2>
              <div className="text-xs text-[#7E8B97] mt-1">
                Psychology Topic: <strong className="text-[#655A7B] font-semibold">{previewScript.topicTitle}</strong>
              </div>
            </div>

            {/* Content text */}
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] font-mono text-xs sm:text-sm text-[#1F262E] whitespace-pre-wrap leading-relaxed max-h-96 overflow-y-auto">
              {previewScript.fullContent || previewScript.previewText}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[#F2EEE7]">
              <span className="text-xs text-[#7E8B97]">
                Ready to paste into your camera teleprompter or scheduling app.
              </span>

              <button
                onClick={() => handleCopyScript(previewScript)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#7A6F91] hover:bg-[#685D7F] text-white transition-all shadow-subtle"
              >
                <Copy className="w-4 h-4" />
                <span>Copy Script</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
