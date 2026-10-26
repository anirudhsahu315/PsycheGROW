import React from 'react';
import { Brain } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-[#E7E2D8] bg-[#FAF8F5] py-10 text-[#7E8B97]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#F2EFF6] text-[#7A6F91] border border-[#DDD8E6]">
            <Brain className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="font-bold text-[#1F262E]">PsycheGrow</span>
            <span className="text-[#A0AAB3] ml-2">Minimalist Cognitive Science Lab</span>
          </div>
        </div>

        <div className="flex items-center gap-5 text-[#596773]">
          <span className="hover:text-[#1F262E] cursor-pointer transition-colors">Cognitive Catalog</span>
          <span className="hover:text-[#1F262E] cursor-pointer transition-colors">Mental Models</span>
          <span className="hover:text-[#1F262E] cursor-pointer transition-colors">Content Studio</span>
          <span className="hover:text-[#1F262E] cursor-pointer transition-colors">My Library</span>
        </div>

        <div className="text-[#A0AAB3]">
          <span>Low-friction learning for thinkers & creators</span>
        </div>

      </div>
    </footer>
  );
};
