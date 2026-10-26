import React, { useState } from 'react';
import { 
  X, 
  Brain, 
  Clapperboard, 
  Copy, 
  Check, 
  CheckCircle2, 
  Clock,
  Scale,
  Shield,
  Zap,
  Layers
} from 'lucide-react';
import { DialecticView } from './DialecticView';
import { getDialecticForTopic, getTopOnePercentFramework } from '../data/topics';

export const TopicModal = ({ 
  topic, 
  currentMode, 
  onClose, 
  onMarkComplete, 
  isCompleted,
  onShowToast,
  onTriggerConfetti
}) => {
  const [activeTab, setActiveTab] = useState(currentMode === 'study' ? 'study' : 'content');
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [copiedScript, setCopiedScript] = useState(false);

  if (!topic) return null;

  const framework = getTopOnePercentFramework(topic);

  const copyToClipboard = (text, idx = null) => {
    navigator.clipboard.writeText(text);
    if (idx !== null) {
      setCopiedIndex(idx);
      setTimeout(() => setCopiedIndex(null), 2000);
      onShowToast("Hook copied to clipboard! 📋");
    } else {
      setCopiedScript(true);
      setTimeout(() => setCopiedScript(false), 2000);
      onShowToast("Script template copied! 🎬");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/40 backdrop-blur-sm animate-in fade-in duration-150">
      
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-[#E7E2D8] shadow-float p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-xl text-[#7E8B97] hover:text-[#1F262E] hover:bg-[#FAF8F5] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Branch Tag & Difficulty */}
        <div className="flex items-center gap-2 mb-2.5">
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${topic.branchColor?.bg || 'bg-[#F2EFF6]'} ${topic.branchColor?.text || 'text-[#655A7B]'} ${topic.branchColor?.border || 'border-[#DDD8E6]'}`}>
            {topic.branch}
          </span>
          <span className="text-xs text-[#7E8B97] flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#A0AAB3]" />
            <span>{topic.readTime} • {topic.difficulty}</span>
          </span>
        </div>

        {/* Topic Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F262E] tracking-tight">
          {topic.title}
        </h2>

        {/* Teaser Highlight */}
        <p className="mt-2 text-sm sm:text-base text-[#596773] italic font-normal border-l-2 border-[#7A6F91] pl-3 py-0.5">
          "{topic.teaser}"
        </p>

        {/* Modal Tab Switcher */}
        <div className="mt-6 flex border-b border-[#EAE5DC]">
          <button
            onClick={() => setActiveTab('study')}
            className={`flex items-center gap-2 pb-3 px-4 font-semibold text-xs sm:text-sm border-b-2 transition-all ${
              activeTab === 'study'
                ? 'border-[#7A6F91] text-[#1F262E]'
                : 'border-transparent text-[#7E8B97] hover:text-[#1F262E]'
            }`}
          >
            <Brain className="w-4 h-4 text-[#7A6F91]" />
            <span>Core Principles</span>
          </button>

          <button
            onClick={() => setActiveTab('content')}
            className={`flex items-center gap-2 pb-3 px-4 font-semibold text-xs sm:text-sm border-b-2 transition-all ${
              activeTab === 'content'
                ? 'border-[#A8634F] text-[#1F262E]'
                : 'border-transparent text-[#7E8B97] hover:text-[#1F262E]'
            }`}
          >
            <Clapperboard className="w-4 h-4 text-[#A8634F]" />
            <span>Content Hooks</span>
          </button>

          <button
            onClick={() => setActiveTab('dialectic')}
            className={`flex items-center gap-2 pb-3 px-4 font-semibold text-xs sm:text-sm border-b-2 transition-all ${
              activeTab === 'dialectic'
                ? 'border-[#967C46] text-[#1F262E]'
                : 'border-transparent text-[#7E8B97] hover:text-[#1F262E]'
            }`}
          >
            <Scale className="w-4 h-4 text-[#967C46]" />
            <span>Dialectic View</span>
          </button>
        </div>

        {/* Tab 1: Study Mode Content (Top 1% Micro-Learning Format) */}
        {activeTab === 'study' && (
          <div className="mt-6 space-y-4">
            
            {/* Step 1: Real-World Hook */}
            <div className="p-3.5 rounded-xl bg-[#F9F0EC] border border-[#EAD6CF]">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#8F5543] mb-1 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#A8634F]" />
                <span>1. Real-World Hook (Why Should I Care?)</span>
              </div>
              <p className="text-xs sm:text-sm text-[#472217] leading-relaxed">
                {framework?.realWorldHook?.manipulationScenario || topic.scenarioHook?.story}
              </p>
            </div>

            {/* Step 2: 30s Core Mechanism */}
            <div className="p-3.5 rounded-xl bg-[#F2EFF6] border border-[#DDD8E6]">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#655A7B] mb-1.5 flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-[#7A6F91]" />
                <span>2. 30-Second Core Mechanism (No Jargon)</span>
              </div>
              <ul className="space-y-1">
                {(framework?.coreMechanism?.underTheHoodBullets || topic.studyTakeaways || []).slice(0, 3).map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#1F262E]">
                    <span className="text-[#7A6F91] font-bold">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 3: Visual Blueprint Equation */}
            <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC]">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#7E8B97] mb-1 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#967C46]" />
                <span>3. Visual Blueprint Equation</span>
              </div>
              <div className="font-mono text-[11px] sm:text-xs text-[#4E4166] font-medium bg-white p-2 rounded-lg border border-[#EAE5DC]">
                {framework?.visualBlueprint?.mentalEquation || topic.deepDiveConclusion?.mentalModelFormula}
              </div>
            </div>

            {/* Step 4: Real-World Armor */}
            <div className="p-3.5 rounded-xl bg-[#EFF4EE] border border-[#C2D6C0]">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#52684F] mb-1 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#647D61]" />
                <span>4. Real-World Armor & Defense Rule</span>
              </div>
              <p className="text-xs sm:text-sm text-[#1F262E] font-medium leading-relaxed italic">
                "{framework?.realWorldArmor?.psychologicalShieldMnemonic || topic.deepDiveConclusion?.everydayRule}"
              </p>
            </div>

          </div>
        )}

        {/* Tab 2: Content Mode Hooks */}
        {activeTab === 'content' && (
          <div className="mt-6 space-y-5">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#7E8B97] mb-3">
                High-Retention Hooks
              </h4>
              <div className="space-y-2.5">
                {topic.contentHooks?.map((hookItem, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] flex items-center justify-between gap-3"
                  >
                    <div>
                      <div className="text-[11px] font-semibold text-[#8F5543]">
                        {hookItem.format}
                      </div>
                      <p className="text-xs sm:text-sm text-[#1F262E] font-medium mt-0.5">
                        "{hookItem.hook}"
                      </p>
                    </div>

                    <button
                      onClick={() => copyToClipboard(hookItem.hook, idx)}
                      className="p-2 rounded-lg bg-white border border-[#E7E2D8] hover:border-[#D0C8BC] text-[#596773] hover:text-[#1F262E] transition-all flex-shrink-0"
                    >
                      {copiedIndex === idx ? <Check className="w-3.5 h-3.5 text-[#647D61]" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Script Template */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#7E8B97]">
                  Script Starter Template
                </h4>
                <button
                  onClick={() => copyToClipboard(topic.scriptTemplate)}
                  className="text-xs font-semibold text-[#7A6F91] hover:underline flex items-center gap-1"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copiedScript ? "Copied!" : "Copy"}</span>
                </button>
              </div>
              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] text-xs sm:text-sm text-[#475767] font-mono leading-relaxed">
                "{topic.scriptTemplate}"
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Dialectic View Content */}
        {activeTab === 'dialectic' && (
          <div className="mt-6">
            <DialecticView 
              topic={topic}
              dialecticData={getDialecticForTopic(topic)}
              onShowToast={onShowToast}
              onTriggerConfetti={onTriggerConfetti}
            />
          </div>
        )}

        {/* Modal Bottom Actions */}
        <div className="mt-8 pt-4 border-t border-[#F2EEE7] flex items-center justify-between gap-3">
          <button
            onClick={() => {
              onMarkComplete(topic.id);
              if (!isCompleted) {
                onTriggerConfetti();
              }
            }}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
              isCompleted 
                ? 'bg-[#EFF4EE] text-[#52684F] border-[#C2D6C0]' 
                : 'bg-white text-[#596773] border-[#E7E2D8] hover:border-[#D0C8BC]'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isCompleted ? "Transferred to Library" : "Mark Mastered"}</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#FAF8F5] hover:bg-[#F4F0E8] border border-[#E7E2D8] text-[#1F262E] transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
