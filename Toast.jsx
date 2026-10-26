import React from 'react';
import { Sparkle, X } from 'lucide-react';

export const Toast = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-white text-[#1F262E] rounded-xl border border-[#E7E2D8] shadow-float animate-in fade-in slide-in-from-bottom-2 duration-200">
      <div className="p-1 rounded-lg bg-[#F2EFF6] text-[#7A6F91]">
        <Sparkle className="w-4 h-4" />
      </div>
      <span className="text-xs sm:text-sm font-medium">{message}</span>
      <button
        onClick={onClose}
        className="p-1 rounded-md text-[#7E8B97] hover:text-[#1F262E] hover:bg-[#FAF8F5] transition-colors ml-1.5"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
