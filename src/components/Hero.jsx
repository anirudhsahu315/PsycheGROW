import React from 'react';
import { 
  Flame, 
  Trophy, 
  Sparkles, 
  Brain, 
  Clapperboard, 
  TrendingUp,
  Target
} from 'lucide-react';

export const Hero = ({ 
  currentMode, 
  streakCount, 
  completedCount = 3, 
  totalCount = 4,
  onStreakClick,
  _onQuickStart
}) => {
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <section className="relative pt-8 pb-10 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-64 bg-gradient-to-b from-violet-600/15 via-indigo-600/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          
          {/* Streak & Daily Progress Counter Badge */}
          <div 
            onClick={onStreakClick}
            className="inline-flex items-center gap-3 p-1.5 pr-4 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-lg shadow-violet-950/20 backdrop-blur-md cursor-pointer hover:border-amber-500/50 hover:bg-slate-850 transition-all duration-300 group"
          >
            {/* Fire icon with animated glow */}
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-950 font-bold shadow-md shadow-orange-500/30 group-hover:scale-110 transition-transform">
              <Flame className="w-5 h-5 fill-slate-950" />
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <span className="font-bold text-amber-400">
                {streakCount}-Day Mind Streak!
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 font-medium">
                Daily Goal: <span className="text-emerald-400 font-semibold">{completedCount}/{totalCount} Completed ({progressPercent}%)</span>
              </span>
            </div>

            {/* Mini Progress Ring / Bar */}
            <div className="w-16 h-2 bg-slate-800 rounded-full overflow-hidden hidden sm:block">
              <div 
                className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Mode Indicator Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-violet-500/10 border border-violet-500/25 text-violet-300 shadow-sm">
            {currentMode === 'study' ? (
              <>
                <Brain className="w-3.5 h-3.5 text-indigo-400" />
                <span>Active Mode: Cognitive Study & Deep Retention</span>
              </>
            ) : (
              <>
                <Clapperboard className="w-3.5 h-3.5 text-violet-400" />
                <span>Active Mode: Viral Content Studio & Script Engine</span>
              </>
            )}
          </div>

        </div>

        {/* Main Title & Subtitle */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Master Psychology &{' '}
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
              Create Content
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            {currentMode === 'study' ? (
              <>
                Unpack the hidden cognitive biases, emotional drivers, and behavioral paradoxes that govern human decision making. Explore today's 4 core mental models.
              </>
            ) : (
              <>
                Transform behavioral science into high-retention video hooks, carousels, and viral storytelling frameworks. Turn complex human psychology into magnetic content.
              </>
            )}
          </p>
        </div>

        {/* Feature / Stats Quick Strip */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          
          <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Today's Topics</span>
              <Target className="w-4 h-4 text-violet-400" />
            </div>
            <div className="text-xl font-bold text-white">4 Curated</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Cognitive, Social & Behavioral</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Retention Rate</span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-xl font-bold text-emerald-400">94.8%</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Based on active recall</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Viral Hooks Ready</span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-xl font-bold text-amber-300">8 Formats</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Reels, Shorts & Carousels</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Mind Rank</span>
              <Trophy className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-xl font-bold text-indigo-300">Tier III • Sage</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Top 5% of content creators</div>
          </div>

        </div>

      </div>
    </section>
  );
};
