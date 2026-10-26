import React, { useState } from 'react';
import { 
  Brain, 
  Sparkles, 
  Compass, 
  ShieldAlert, 
  ArrowRight, 
  Clock, 
  BookOpen, 
  Clapperboard, 
  Check, 
  Bookmark, 
  Layers,
  Scale,
  Eye,
  Lightbulb,
  Repeat,
  HeartHandshake,
  Activity,
  Sliders,
  Flame,
  Scroll
} from 'lucide-react';

const ICON_MAP = {
  Brain,
  Sparkles,
  Compass,
  ShieldAlert,
  Layers,
  Scale,
  Eye,
  Lightbulb,
  Repeat,
  HeartHandshake,
  Activity,
  Sliders,
  Flame,
  Scroll,
};

export const TopicCard = ({ 
  topic, 
  currentMode, 
  isCompleted, 
  onSelect,
  onToggleComplete 
}) => {
  const [bookmarked, setBookmarked] = useState(false);
  const IconComponent = ICON_MAP[topic.icon] || Brain;
  const colors = topic.branchColor || {
    bg: 'bg-[#F2EFF6]',
    text: 'text-[#655A7B]',
    border: 'border-[#DDD8E6]',
    badge: 'bg-[#EAE4F2]',
  };

  return (
    <div 
      role="button"
      tabIndex={0}
      onClick={() => onSelect(topic)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(topic);
        }
      }}
      className={`group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white border transition-all duration-200 cursor-pointer text-left select-none ${
        isCompleted 
          ? 'bg-[#F8FAF7] border-[#C8D7C6] shadow-subtle' 
          : 'border-[#E7E2D8] hover:border-[#D0C8BC] hover:shadow-card hover:-translate-y-0.5'
      }`}
    >
      <div>
        {/* Top Meta Row */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          {/* Branch Pill & Deep Research Badge */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span 
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${colors.bg} ${colors.text} ${colors.border}`}
            >
              <Layers className="w-3 h-3" />
              <span>{topic.branch}</span>
            </span>

            {topic.isAgentSynthesized && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#F2EFF6] text-[#655A7B] border border-[#DDD8E6]">
                <Sparkles className="w-2.5 h-2.5 text-[#7A6F91]" />
                <span>Deep Research</span>
              </span>
            )}
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setBookmarked(!bookmarked);
              }}
              title={bookmarked ? "Saved to study list" : "Bookmark topic"}
              className={`p-1.5 rounded-lg transition-colors ${
                bookmarked 
                  ? 'text-[#967C46] bg-[#F8F5EC]' 
                  : 'text-[#A0AAB3] hover:text-[#475767] hover:bg-[#F4F0E8]'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-[#967C46]' : ''}`} />
            </button>

            {isCompleted && (
              <span 
                title="Mastered & Archived to Library" 
                className="flex items-center justify-center w-5 h-5 rounded-full bg-[#EFF4EE] text-[#52684F] border border-[#D2E0D0]"
              >
                <Check className="w-3 h-3" />
              </span>
            )}
          </div>
        </div>

        {/* Topic Title & Icon */}
        <div className="flex items-start gap-3 mb-3">
          <div 
            className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl border ${colors.bg} ${colors.text} ${colors.border} group-hover:scale-105 transition-transform duration-200`}
          >
            <IconComponent className="w-5 h-5" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-bold text-[#1F262E] group-hover:text-[#11161B] transition-colors leading-snug line-clamp-1">
              {topic.title}
            </h3>
            <div className="flex items-center gap-2 mt-1 text-[11px] text-[#7E8B97]">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#A0AAB3]" />
                {topic.readTime}
              </span>
              <span>•</span>
              <span className="font-medium text-[#596773]">
                {topic.difficulty}
              </span>
            </div>
          </div>
        </div>

        {/* Minimalist Teaser Box */}
        <div className="my-3.5 p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEBE3]">
          <p className="text-xs sm:text-sm text-[#4E5B67] leading-relaxed italic">
            "{topic.teaser}"
          </p>
        </div>

        {/* Dynamic Mode Preview Pill */}
        <div className="mb-4 text-[11px]">
          {currentMode === 'study' ? (
            <div className="flex items-center gap-1.5 text-[#655A7B] font-medium">
              <Brain className="w-3.5 h-3.5 text-[#7A6F91]" />
              <span>3 cognitive takeaways & quiz</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-[#8F5543] font-medium">
              <Clapperboard className="w-3.5 h-3.5 text-[#A8634F]" />
              <span>Viral hook & script ready</span>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons Row */}
      <div className="pt-3 border-t border-[#F2EEE7] flex items-center gap-2">
        <button
          onClick={() => onSelect(topic)}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 shadow-subtle ${
            currentMode === 'study'
              ? 'bg-[#7A6F91] hover:bg-[#685D7F] text-white'
              : 'bg-[#A8634F] hover:bg-[#935442] text-white'
          }`}
        >
          {currentMode === 'study' ? (
            <>
              <BookOpen className="w-3.5 h-3.5" />
              <span>Explore Module</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5" />
              <span>Create Content</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </>
          )}
        </button>

        {/* Toggle completed button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleComplete(topic.id);
          }}
          title={isCompleted ? "Transferred to Library (Click to reset)" : "Mark as Mastered & Transfer to Library"}
          className={`p-2.5 rounded-xl border transition-all ${
            isCompleted 
              ? 'bg-[#EFF4EE] border-[#C2D6C0] text-[#52684F] hover:bg-[#E3ECE1]' 
              : 'bg-[#FAF8F5] border-[#E7E2D8] text-[#7E8B97] hover:text-[#1F262E] hover:border-[#D0C8BC]'
          }`}
        >
          <Check className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
