import React from 'react';
import { Flame, Calendar, CheckCircle2, X, Award, Sparkles } from 'lucide-react';
import { getWeeklyActivity } from '../utils/streakManager';

export const StreakModal = ({ 
  isOpen, 
  onClose, 
  streakCount = 0,
  streakData = null
}) => {
  if (!isOpen) return null;

  const activityDates = streakData?.activityDates || [];
  const { weekDays, consistencyRate, completedCount } = getWeeklyActivity(activityDates);
  const isActiveToday = streakData?.isActiveToday || false;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-md rounded-2xl bg-white border border-[#E7E2D8] shadow-float p-6 sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-xl text-[#7E8B97] hover:text-[#1F262E] hover:bg-[#FAF8F5] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#F8F5EC] border border-[#E7DEC9] flex items-center justify-center text-[#967C46] mb-3.5 shadow-subtle relative">
            <Flame className="w-7 h-7 fill-[#967C46]" />
            {isActiveToday && (
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#647D61] rounded-full border-2 border-white" />
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-[#1F262E]">
            {streakCount}-Day Mind Streak
          </h3>
          
          <p className="text-xs sm:text-sm text-[#596773] mt-1.5 max-w-xs leading-relaxed">
            {isActiveToday ? (
              <span className="text-[#52684F] font-semibold">
                ✓ You completed a daily cognitive model today! Your daily momentum is locked in.
              </span>
            ) : (
              <span>
                Complete or review any psychology topic today to extend your consecutive learning streak.
              </span>
            )}
          </p>

          {/* Quick Metrics Bar */}
          <div className="flex items-center gap-4 mt-4 px-4 py-2 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] text-xs">
            <div className="flex items-center gap-1.5 text-[#596773]">
              <Award className="w-3.5 h-3.5 text-[#7A6F91]" />
              <span>Mastered: <strong className="text-[#1F262E]">{streakData?.totalMastered || 0}</strong></span>
            </div>
            <div className="w-px h-3 bg-[#D0C8BC]" />
            <div className="flex items-center gap-1.5 text-[#596773]">
              <Sparkles className="w-3.5 h-3.5 text-[#967C46]" />
              <span>Active: <strong className="text-[#1F262E]">{completedCount} days</strong></span>
            </div>
          </div>
        </div>

        {/* 7-Day Consistency Track */}
        <div className="mt-6 p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC]">
          <div className="flex items-center justify-between text-xs text-[#596773] mb-3 font-semibold">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#967C46]" />
              This Week's Calendar Track
            </span>
            <span className={`font-bold ${consistencyRate >= 70 ? 'text-[#52684F]' : 'text-[#7D6638]'}`}>
              {consistencyRate}% Consistency
            </span>
          </div>

          <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
            {weekDays.map((item, idx) => (
              <div 
                key={idx}
                className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg border text-center transition-all ${
                  item.current 
                    ? 'bg-[#F8F5EC] border-[#E7DEC9] text-[#7D6638] ring-1 ring-[#967C46]/30' 
                    : item.completed 
                    ? 'bg-white border-[#D2E0D0] text-[#52684F]' 
                    : 'bg-[#FAF8F5] border-[#EAE5DC] text-[#A0AAB3]'
                }`}
              >
                <span className="text-[10px] font-bold uppercase">{item.day}</span>
                {item.completed ? (
                  <CheckCircle2 className="w-3.5 h-3.5 my-1 text-[#647D61]" />
                ) : (
                  <div className="w-3.5 h-3.5 my-1 rounded-full border border-dashed border-[#C0C8CF]" />
                )}
                <span className="text-[9px] font-medium opacity-80">
                  {item.completed ? '✓' : item.current ? 'Today' : '—'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 py-2.5 rounded-xl bg-[#7A6F91] hover:bg-[#685D7F] text-white text-xs sm:text-sm font-semibold transition-all shadow-subtle"
        >
          Keep Learning
        </button>
      </div>
    </div>
  );
};

