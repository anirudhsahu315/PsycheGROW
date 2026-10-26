import React, { useState } from 'react';
import { 
  Brain, 
  Users, 
  HeartHandshake, 
  Sparkles, 
  Compass, 
  Activity, 
  ArrowRight, 
  Sparkle, 
  BookOpen,
  Scroll,
  Flame,
  Lightbulb,
  Scale,
  Eye,
  Layers
} from 'lucide-react';
import { PSYCHOLOGY_CATEGORIES } from '../data/topics';

const ICON_MAP = {
  Brain,
  Users,
  HeartHandshake,
  Sparkles,
  Compass,
  Activity,
  Scroll,
  Flame,
  Lightbulb,
  Scale,
  Eye,
  Layers,
};

export const CategorySelection = ({ 
  onSelectCategory, 
  selectedCategory, 
  completedCount = 0 
}) => {
  // Domain filter state: 'all' | 'psychology' | 'philosophy'
  const [domainFilter, setDomainFilter] = useState('all');

  const filteredCategories = PSYCHOLOGY_CATEGORIES.filter((cat) => {
    if (domainFilter === 'all') return true;
    return cat.domain === domainFilter;
  });

  return (
    <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-6xl mx-auto">
      
      {/* Calm Header & Prompt */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        
        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EFF6] border border-[#DDD8E6] text-[#655A7B] text-xs font-semibold mb-4">
          <Sparkle className="w-3.5 h-3.5 text-[#7A6F91]" />
          <span>Psyche & Sophia • Cognitive Science Meets Classical Wisdom</span>
          {completedCount > 0 && (
            <>
              <span className="w-1 h-1 rounded-full bg-[#7A6F91]" />
              <span>{completedCount} Mastered</span>
            </>
          )}
        </div>

        {/* Heading Prompt */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1F262E] leading-tight">
          What branch of Mind & Wisdom would you like to explore today?
        </h1>

        <p className="mt-3.5 text-base sm:text-lg text-[#596773] font-normal leading-relaxed">
          Select a psychological science or philosophical school below. The lab will load 4 active mental models, complete with dual-lens dialectic inquiry and endless topic rotation.
        </p>

        {/* Domain Filter Pills */}
        <div className="flex items-center justify-center gap-2 mt-7 flex-wrap">
          <button
            onClick={() => setDomainFilter('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-subtle ${
              domainFilter === 'all'
                ? 'bg-[#1F262E] text-white'
                : 'bg-white border border-[#E7E2D8] text-[#596773] hover:text-[#1F262E] hover:border-[#D0C8BC]'
            }`}
          >
            All Disciplines ({PSYCHOLOGY_CATEGORIES.length})
          </button>

          <button
            onClick={() => setDomainFilter('psychology')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-subtle ${
              domainFilter === 'psychology'
                ? 'bg-[#7A6F91] text-white'
                : 'bg-white border border-[#E7E2D8] text-[#596773] hover:text-[#1F262E] hover:border-[#D0C8BC]'
            }`}
          >
            <Brain className="w-3.5 h-3.5" />
            <span>Psychological Sciences (Psyche)</span>
          </button>

          <button
            onClick={() => setDomainFilter('philosophy')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-subtle ${
              domainFilter === 'philosophy'
                ? 'bg-[#967C46] text-white'
                : 'bg-white border border-[#E7E2D8] text-[#596773] hover:text-[#1F262E] hover:border-[#D0C8BC]'
            }`}
          >
            <Scroll className="w-3.5 h-3.5" />
            <span>Philosophical Schools (Sophia)</span>
          </button>
        </div>

      </div>

      {/* Category Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredCategories.map((cat) => {
          const IconComponent = ICON_MAP[cat.icon] || Brain;
          const isSelected = selectedCategory === cat.name;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.name)}
              className={`group text-left p-6 sm:p-7 rounded-2xl bg-white border transition-all duration-200 flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-[#7A6F91]/30 ${
                isSelected
                  ? 'border-[#7A6F91] ring-2 ring-[#7A6F91]/20 shadow-card'
                  : 'border-[#E7E2D8] hover:border-[#C8C1B4] hover:shadow-card hover:-translate-y-0.5'
              }`}
            >
              <div>
                {/* Category Icon and Domain Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div 
                    className={`w-11 h-11 rounded-xl flex items-center justify-center border ${cat.pastel.bg} ${cat.pastel.text} ${cat.pastel.border} group-hover:scale-105 transition-transform duration-200`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${cat.pastel.badgeBg} ${cat.pastel.text}`}>
                    {cat.tradition || cat.shortName}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-[#1F262E] group-hover:text-[#141A20] transition-colors">
                  {cat.name}
                </h2>

                {/* Tagline */}
                <p className={`text-xs font-semibold mt-1 ${cat.pastel.text}`}>
                  {cat.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#596773] mt-2.5 leading-relaxed line-clamp-3">
                  {cat.description}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-5 mt-5 border-t border-[#F2EEE7] flex items-center justify-between text-xs font-semibold">
                <span className="text-[#7E8B97] font-medium flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#A0AAB3]" />
                  <span>4 active focus modules</span>
                </span>

                <span className={`inline-flex items-center gap-1 font-semibold ${cat.pastel.text} group-hover:translate-x-1 transition-transform duration-200`}>
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Gentle micro-note */}
      <div className="mt-12 text-center text-xs text-[#7E8B97]">
        <span>Calm, low-cognitive-load learning • Toggle between empirical science and classical wisdom at any time</span>
      </div>

    </section>
  );
};

