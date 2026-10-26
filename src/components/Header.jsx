import React from 'react';
import { 
  Brain, 
  Clapperboard, 
  Flame, 
  Search, 
  Bookmark
} from 'lucide-react';

export const Header = ({ 
  currentMode, 
  setMode, 
  streakCount, 
  searchQuery, 
  setSearchQuery,
  onStreakClick,
  isLibraryOpen,
  onToggleLibrary,
  libraryCount = 0,
  onLogoClick
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#FAF8F5]/90 border-b border-[#E7E2D8] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-3 sm:gap-4">
        
        {/* Left: Minimalist Branding */}
        <div 
          onClick={onLogoClick}
          className="flex items-center gap-2.5 group cursor-pointer select-none"
        >
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#F2EFF6] border border-[#DDD8E6] text-[#7A6F91] group-hover:bg-[#EAE4F2] transition-colors">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-[#1F262E]">
                PsycheGrow
              </span>
              <span className="px-1.5 py-0.2 text-[10px] font-semibold rounded-md bg-[#F2EFF6] text-[#7A6F91] border border-[#DDD8E6]">
                calm
              </span>
            </div>
            <p className="text-[10px] text-[#7E8B97] font-medium hidden sm:block">
              Psyche & Sophia • Mind & Wisdom Lab
            </p>
          </div>
        </div>

        {/* Center: Clean Mode Switcher Toggle */}
        <div className="flex items-center">
          <div className="p-1 bg-[#EFEBE3]/70 rounded-xl border border-[#E7E2D8] flex items-center gap-1">
            
            {/* Study Mode Button */}
            <button
              id="study-mode-toggle"
              onClick={() => setMode('study')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 ${
                currentMode === 'study'
                  ? 'bg-white text-[#1F262E] shadow-subtle border border-[#E0D9CD]'
                  : 'text-[#7E8B97] hover:text-[#1F262E]'
              }`}
            >
              <Brain className={`w-3.5 h-3.5 ${currentMode === 'study' ? 'text-[#7A6F91]' : 'text-[#A0AAB3]'}`} />
              <span>Study Mode</span>
            </button>

            {/* Content Creation Mode Button */}
            <button
              id="content-mode-toggle"
              onClick={() => setMode('content')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 ${
                currentMode === 'content'
                  ? 'bg-white text-[#1F262E] shadow-subtle border border-[#E0D9CD]'
                  : 'text-[#7E8B97] hover:text-[#1F262E]'
              }`}
            >
              <Clapperboard className={`w-3.5 h-3.5 ${currentMode === 'content' ? 'text-[#A8634F]' : 'text-[#A0AAB3]'}`} />
              <span>Content Studio</span>
            </button>
          </div>
        </div>

        {/* Right: Library, Streaks, and Profile */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          
          {/* Quick Search within branch */}
          <div className="relative hidden md:block">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#A0AAB3]" />
            <input
              type="text"
              placeholder="Search active topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-40 lg:w-44 pl-8 pr-3 py-1.5 text-xs bg-white border border-[#E7E2D8] rounded-xl text-[#1F262E] placeholder-[#A0AAB3] focus:outline-none focus:border-[#7A6F91] transition-all shadow-subtle"
            />
          </div>

          {/* Library Button */}
          <button
            onClick={onToggleLibrary}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
              isLibraryOpen
                ? 'bg-[#7A6F91] text-white border-[#7A6F91] shadow-subtle'
                : 'bg-white border-[#E7E2D8] text-[#596773] hover:text-[#1F262E] hover:border-[#D0C8BC] shadow-subtle'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isLibraryOpen ? 'text-white' : 'text-[#7A6F91]'}`} />
            <span>Library</span>
            <span className={`px-1.5 py-0.2 rounded-md text-[10px] ${
              isLibraryOpen 
                ? 'bg-white/20 text-white' 
                : 'bg-[#F2EFF6] text-[#7A6F91]'
            }`}>
              {libraryCount}
            </span>
          </button>

          {/* Streak Badge in Soft Sand */}
          <button
            onClick={onStreakClick}
            title="Click to view Streak details"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F8F5EC] border border-[#E7DEC9] text-[#7D6638] hover:bg-[#F0EAD6] transition-all text-xs font-bold shadow-subtle cursor-pointer"
          >
            <Flame className="w-3.5 h-3.5 text-[#967C46] fill-[#967C46]" />
            <span>{streakCount}d</span>
          </button>

          {/* User Profile */}
          <div className="flex items-center pl-1 border-l border-[#E7E2D8]">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
              alt="User Profile"
              className="w-8 h-8 rounded-xl object-cover border border-[#E7E2D8]"
            />
          </div>

        </div>

      </div>
    </header>
  );
};
