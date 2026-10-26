import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Brain, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Lightbulb, 
  RefreshCw, 
  Clapperboard, 
  Layers, 
  Clock, 
  Award,
  Zap,
  BookOpen,
  Shield,
  ShieldAlert,
  ArrowRight,
  Eye,
  Copy,
  Check,
  Target
} from 'lucide-react';
import { DialecticView } from './DialecticView';
import { getDialecticForTopic, getTopOnePercentFramework } from '../data/topics';
import { recordStreakActivity } from '../utils/streakManager';

const EVIDENCE_CONFIG = {
  'well-supported': {
    label: 'Well supported',
    classes: 'bg-[#EFF4EE] text-[#244C20] border-[#C8DEC5]',
    tooltip: 'Well supported: Supported by robust empirical evidence and replicated findings.',
  },
  'mixed-evidence': {
    label: 'Mixed evidence',
    classes: 'bg-[#FDF6E2] text-[#634C00] border-[#EADBB6]',
    tooltip: 'Mixed evidence: Empirical findings show mixed results or depend heavily on specific contexts.',
  },
  'contested': {
    label: 'Contested',
    classes: 'bg-[#F8EEEC] text-[#743530] border-[#E5CECB]',
    tooltip: 'Contested: Central effects or proposed mechanisms have failed to replicate or remain debated.',
  },
  'philosophical-tradition': {
    label: 'Philosophical tradition',
    classes: 'bg-[#F2EFF6] text-[#473A5E] border-[#DCD6E6]',
    tooltip: 'Philosophical tradition: Rooted in philosophical texts, ethical theory, or psychodynamic tradition.',
  },
};

export const InteractiveStudySession = ({ 
  topic, 
  onBackToGrid, 
  onTurnIntoContent, 
  onMarkMastered,
  isMastered,
  onTriggerConfetti,
  onShowToast,
  onStreakUpdate
}) => {
  // Quiz state
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
  const [copiedArmor, setCopiedArmor] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [topic?.id]);

  if (!topic) return null;

  const evidence = topic.evidenceStatus ? EVIDENCE_CONFIG[topic.evidenceStatus] : null;
  const dialecticData = getDialecticForTopic(topic);
  const framework = getTopOnePercentFramework(topic);
  const { scenarioHook, socraticQuiz } = topic;
  const selectedOption = socraticQuiz?.options?.find(opt => opt.id === selectedOptionId);
  const canMaster = isMastered || answeredCorrectly || Boolean(selectedOption?.isCorrect);

  const handleSelectOption = (option) => {
    setSelectedOptionId(option.id);

    // Call recordStreakActivity('study') on quiz completion (correct or not)
    const updatedStreak = recordStreakActivity('study');
    onStreakUpdate?.(updatedStreak);

    if (option.isCorrect) {
      setAnsweredCorrectly(true);
      onTriggerConfetti();
      onShowToast("🎯 Correct answer! You can now mark this topic as Mastered.");
    } else {
      onShowToast("💡 Review the cognitive mechanism below.");
    }
  };

  const handleToggleMastered = () => {
    if (!isMastered && !canMaster) {
      onShowToast("Answer the quiz correctly to master this topic");
      return;
    }
    onMarkMastered(topic.id);
  };

  const copyArmorMnemonic = (text) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedArmor(true);
    setTimeout(() => setCopiedArmor(false), 2200);
    onShowToast("🛡️ Real-World Armor copied to clipboard!");
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F262E] pb-36">
      
      {/* Top Sticky Navigation Bar */}
      <div className="sticky top-0 z-30 w-full backdrop-blur-md bg-[#FAF8F5]/90 border-b border-[#E7E2D8] px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          
          <button
            onClick={onBackToGrid}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#596773] hover:text-[#1F262E] transition-colors group p-1 -ml-1 rounded-xl hover:bg-[#F4F0E8]"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Dashboard</span>
          </button>

          {/* Quick Step Jump Pills (Desktop/Tablet) */}
          <div className="hidden md:flex items-center gap-1 bg-white/70 p-1 rounded-full border border-[#E7E2D8] text-[11px] font-semibold text-[#596773]">
            <button
              onClick={() => scrollToSection('step-1-hook')}
              className="px-2.5 py-1 rounded-full hover:bg-[#FAF8F5] hover:text-[#1F262E] transition-all"
            >
              1. Real Hook
            </button>
            <button
              onClick={() => scrollToSection('step-2-mechanism')}
              className="px-2.5 py-1 rounded-full hover:bg-[#FAF8F5] hover:text-[#1F262E] transition-all"
            >
              2. 30s Mechanism
            </button>
            <button
              onClick={() => scrollToSection('step-3-blueprint')}
              className="px-2.5 py-1 rounded-full hover:bg-[#FAF8F5] hover:text-[#1F262E] transition-all"
            >
              3. Visual Blueprint
            </button>
            <button
              onClick={() => scrollToSection('step-quiz')}
              className="px-2.5 py-1 rounded-full hover:bg-[#FAF8F5] hover:text-[#1F262E] transition-all"
            >
              Quiz Challenge
            </button>
            <button
              onClick={() => scrollToSection('step-4-armor')}
              className="px-2.5 py-1 rounded-full hover:bg-[#FAF8F5] hover:text-[#1F262E] transition-all"
            >
              4. Real Armor
            </button>
            <button
              onClick={() => scrollToSection('step-dialectic')}
              className="px-2.5 py-1 rounded-full hover:bg-[#FAF8F5] hover:text-[#1F262E] transition-all"
            >
              Dialectic Lab
            </button>
            {topic.references && topic.references.length > 0 && (
              <button
                onClick={() => scrollToSection('step-sources')}
                className="px-2.5 py-1 rounded-full hover:bg-[#FAF8F5] hover:text-[#1F262E] transition-all"
              >
                Sources
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${topic.branchColor?.bg || 'bg-[#F2EFF6]'} ${topic.branchColor?.text || 'text-[#655A7B]'} ${topic.branchColor?.border || 'border-[#DDD8E6]'}`}>
              {topic.branch}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-xs text-[#7E8B97]">
              <Clock className="w-3.5 h-3.5 text-[#A0AAB3]" />
              {topic.readTime}
            </span>
          </div>

        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8 sm:space-y-10">
        
        {/* Header Hero Title */}
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#F2EFF6] text-[#655A7B] border border-[#DDD8E6]">
              <Brain className="w-3.5 h-3.5 text-[#7A6F91]" />
              <span>Top 1% Micro-Learning Blueprint</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#FAF8F5] text-[#596773] border border-[#E7E2D8]">
              <Zap className="w-3 h-3 text-[#967C46]" />
              <span>Zero Jargon • 100% Intuitive</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F262E] tracking-tight">
              {topic.title}
            </h1>
            {evidence && (
              <span 
                title={evidence.tooltip}
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border ${evidence.classes}`}
              >
                {evidence.label}
              </span>
            )}
          </div>

          <p className="mt-3 text-base sm:text-lg text-[#596773] italic border-l-2 border-[#7A6F91] pl-4 py-1 leading-relaxed">
            "{topic.teaser}"
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 1. THE REAL-WORLD HOOK (THE "WHY SHOULD I CARE?") */}
        {/* ========================================================================= */}
        <section id="step-1-hook" className="scroll-mt-20 rounded-2xl bg-white border border-[#E7E2D8] shadow-card overflow-hidden">
          
          {/* Section Step Header */}
          <div className="p-5 sm:p-6 border-b border-[#F0ECE4] bg-[#FAF8F5] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#A8634F] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                01
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#A8634F] uppercase tracking-wider">
                  Step 1 • The Real-World Hook
                </div>
                <div className="text-base font-bold text-[#1F262E]">
                  The "Why Should I Care?" Reality Check
                </div>
              </div>
            </div>

            <div className="px-3 py-1 rounded-full bg-white border border-[#EAD6CF] text-xs font-semibold text-[#8F5543]">
              ⚡ How It Manipulates Everyday Life
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* The Relatable Scenario Case */}
            {scenarioHook && (
              <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <img
                    src={scenarioHook.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"}
                    alt={scenarioHook.character}
                    className="w-12 h-12 rounded-xl object-cover border border-[#E7E2D8] flex-shrink-0"
                  />
                  <div>
                    <div className="text-[11px] font-semibold text-[#7E8B97] uppercase tracking-wider">
                      Relatable Case Study
                    </div>
                    <div className="text-base font-bold text-[#1F262E]">
                      {scenarioHook.character}
                    </div>
                  </div>
                </div>

                <div className="px-3 py-1 rounded-xl bg-white border border-[#E7E2D8] text-xs font-medium text-[#596773] self-start sm:self-auto">
                  📍 {scenarioHook.setting}
                </div>
              </div>
            )}

            {/* The Hook Narrative */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#8F5543] flex items-center gap-1.5 mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>The Everyday Scenario</span>
              </h3>
              <p className="text-base text-[#1F262E] leading-relaxed font-normal">
                {framework?.realWorldHook?.manipulationScenario || scenarioHook?.story}
              </p>
            </div>

            {/* Friction & Why You Should Care */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#F9F0EC] border border-[#EAD6CF] space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#8F5543] flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#A8634F]" />
                <span>Why You Should Care: The Hidden Cost</span>
              </div>
              <p className="text-sm sm:text-base text-[#472217] leading-relaxed">
                {framework?.realWorldHook?.whyYouShouldCare || scenarioHook?.theFriction}
              </p>
            </div>

            {/* Punchline Takeaway */}
            <div className="p-4 rounded-xl bg-[#FAF8F5] border-l-4 border-[#A8634F] text-xs sm:text-sm font-semibold text-[#1F262E] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#A8634F] flex-shrink-0" />
              <span>{framework?.realWorldHook?.punchySummary || `Notice how your brain defaults to this automatic habit without asking your permission.`}</span>
            </div>

          </div>

        </section>

        {/* ========================================================================= */}
        {/* 2. THE 30-SECOND CORE MECHANISM */}
        {/* ========================================================================= */}
        <section id="step-2-mechanism" className="scroll-mt-20 rounded-2xl bg-white border border-[#DDD8E6] shadow-card overflow-hidden">
          
          {/* Section Step Header */}
          <div className="p-5 sm:p-6 border-b border-[#F0ECE4] bg-[#FAF8F5] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#7A6F91] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                02
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#655A7B] uppercase tracking-wider">
                  Step 2 • The 30-Second Core Mechanism
                </div>
                <div className="text-base font-bold text-[#1F262E]">
                  How It Operates Under the Hood
                </div>
              </div>
            </div>

            <div className="px-3 py-1 rounded-full bg-[#F2EFF6] border border-[#DDD8E6] text-xs font-semibold text-[#655A7B]">
              ⏱️ 30-Second Zero-Jargon Breakdown
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            
            <h3 className="text-xl sm:text-2xl font-bold text-[#1F262E] tracking-tight">
              {framework?.coreMechanism?.headline || topic.deepDiveConclusion?.headline || "The Brain's Energy-Saving Shortcut"}
            </h3>

            {/* 3 Bullet Points with Zero Fluff */}
            <div className="space-y-3">
              {(framework?.coreMechanism?.underTheHoodBullets || topic.studyTakeaways || []).map((bullet, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] hover:border-[#D9D2C5] transition-colors"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#F2EFF6] text-[#7A6F91] border border-[#DDD8E6] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-sm sm:text-base text-[#1F262E] leading-relaxed">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>

            {/* Plain English Translation Box */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#F2EFF6] border border-[#DDD8E6]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#655A7B] mb-1.5 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-[#7A6F91]" />
                <span>Plain English Translation</span>
              </div>
              <p className="text-sm sm:text-base text-[#3E344F] font-medium leading-relaxed">
                "{framework?.coreMechanism?.plainEnglishTakeaway || topic.deepDiveConclusion?.corePrinciple}"
              </p>
            </div>

          </div>

        </section>

        {/* ========================================================================= */}
        {/* 3. THE VISUAL BLUEPRINT / MENTAL SANDBOX */}
        {/* ========================================================================= */}
        <section id="step-3-blueprint" className="scroll-mt-20 rounded-2xl bg-white border border-[#E7DEC9] shadow-card overflow-hidden">
          
          {/* Section Step Header */}
          <div className="p-5 sm:p-6 border-b border-[#F0ECE4] bg-[#FAF8F5] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#967C46] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                03
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#7D6638] uppercase tracking-wider">
                  Step 3 • The Visual Blueprint
                </div>
                <div className="text-base font-bold text-[#1F262E]">
                  Mental Sandbox & Flowchart Architecture
                </div>
              </div>
            </div>

            <div className="px-3 py-1 rounded-full bg-[#F8F5EC] border border-[#E7DEC9] text-xs font-semibold text-[#7D6638]">
              🗺️ Cognitive Pipeline Map
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-bold text-[#1F262E]">
                {framework?.visualBlueprint?.title || `${topic.title} Process Flow`}
              </h3>
              <span className="text-xs text-[#7E8B97] font-medium">
                Step-by-step cognitive chain
              </span>
            </div>

            {/* Visual Flowcard Chain */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {(framework?.visualBlueprint?.steps || [
                { step: 1, phase: "Trigger", label: "Initial Stimulus", action: "Environmental input received.", subtext: "Input" },
                { step: 2, phase: "Glitch", label: "Cognitive Shortcut", action: "System 1 applies bias.", subtext: "Heuristic" },
                { step: 3, phase: "Distortion", label: "Biased Choice", action: "Distorted judgment forms.", subtext: "Friction" },
                { step: 4, phase: "Outcome", label: "Reinforcement", action: "Action locks into memory.", subtext: "Result" }
              ]).map((stepItem, idx) => (
                <div 
                  key={idx}
                  className="relative p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] flex flex-col justify-between hover:bg-white hover:border-[#967C46] hover:shadow-subtle transition-all duration-150"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#F8F5EC] text-[#7D6638] border border-[#E7DEC9]">
                        Stage 0{stepItem.step}
                      </span>
                      <span className="text-[10px] text-[#A0AAB3] font-medium">
                        {stepItem.subtext}
                      </span>
                    </div>

                    <div className="text-xs font-bold text-[#1F262E] mb-1">
                      {stepItem.label}
                    </div>

                    <p className="text-xs text-[#596773] leading-relaxed">
                      {stepItem.action}
                    </p>
                  </div>

                  {idx < 3 && (
                    <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 rounded-full bg-white border border-[#E7DEC9] text-[#967C46] flex items-center justify-center text-[10px]">
                      ➔
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* The Mental Equation Formula Box */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#E7E2D8]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#7E8B97] mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#967C46]" />
                <span>The Mental Model Equation</span>
              </div>
              <div className="font-mono text-xs sm:text-sm text-[#4A3B18] font-semibold leading-relaxed bg-white p-3.5 rounded-lg border border-[#E7DEC9] overflow-x-auto">
                {framework?.visualBlueprint?.mentalEquation || topic.deepDiveConclusion?.mentalModelFormula}
              </div>
            </div>

            {/* Sandbox Takeaway Insight */}
            <div className="p-4 rounded-xl bg-[#F8F5EC] border border-[#E7DEC9] text-xs sm:text-sm text-[#4A3B18] flex items-center gap-2.5">
              <Eye className="w-4 h-4 text-[#967C46] flex-shrink-0" />
              <span><strong>Mental Sandbox Rule:</strong> {framework?.visualBlueprint?.sandboxTakeaway || "Once you see the blueprint, you can predict the trap before your brain steps into it."}</span>
            </div>

          </div>

        </section>

        {/* ========================================================================= */}
        {/* INTERACTIVE SOCRATIC CHALLENGE (INTUITION CHECKPOINT) */}
        {/* ========================================================================= */}
        {socraticQuiz && (
          <section id="step-quiz" className="scroll-mt-20 rounded-2xl bg-white border border-[#E7E2D8] shadow-card p-6 sm:p-8">
            
            {/* Quiz Header */}
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#F8F5EC] text-[#7D6638] border border-[#E7DEC9]">
                <HelpCircle className="w-3.5 h-3.5 text-[#967C46]" />
                <span>Intuition Checkpoint • Prove Your Understanding</span>
              </div>
              <span className="text-xs text-[#7E8B97] font-medium">
                Test yourself before unlocking armor
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#1F262E] tracking-tight leading-snug mb-6">
              {socraticQuiz.question}
            </h3>

            {/* Options List */}
            <div className="space-y-3">
              {socraticQuiz.options.map((option, idx) => {
                const isSelected = selectedOptionId === option.id;
                const letter = String.fromCharCode(65 + idx); // A, B, C

                let borderStyle = 'border-[#E7E2D8] hover:border-[#C8C1B4] bg-[#FAF8F5] hover:bg-white';
                let letterStyle = 'bg-white border border-[#E7E2D8] text-[#596773]';

                if (selectedOptionId !== null) {
                  if (option.isCorrect) {
                    borderStyle = isSelected 
                      ? 'border-[#647D61] bg-[#EFF4EE] shadow-subtle' 
                      : 'border-[#647D61]/60 bg-[#EFF4EE]/50';
                    letterStyle = 'bg-[#647D61] text-white font-bold';
                  } else if (isSelected && !option.isCorrect) {
                    borderStyle = 'border-[#D98282] bg-[#FDF2F2] shadow-subtle';
                    letterStyle = 'bg-[#D98282] text-white font-bold';
                  }
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectOption(option)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-start gap-3.5 group cursor-pointer ${borderStyle}`}
                  >
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 transition-colors ${letterStyle}`}>
                      {letter}
                    </div>

                    <div className="flex-1 text-sm sm:text-base font-medium text-[#1F262E] leading-relaxed">
                      {option.text}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Instant Feedback Card */}
            {selectedOption && (
              <div 
                className={`mt-6 p-5 sm:p-6 rounded-xl border animate-in fade-in duration-200 ${
                  selectedOption.isCorrect 
                    ? 'bg-[#EFF4EE] border-[#C2D6C0]' 
                    : 'bg-[#FDF6EE] border-[#EAD5BA]'
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  {selectedOption.isCorrect ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-[#647D61] flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-[#2D3F2B] uppercase tracking-wide">
                        Correct Insight • Cognitive Mechanism Mastered
                      </span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-[#967C46] flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-[#7D6638] uppercase tracking-wide">
                        Interesting Guess • Here is the Underlying Science
                      </span>
                    </>
                  )}
                </div>

                <p className="text-sm sm:text-base text-[#1F262E] leading-relaxed font-normal">
                  {selectedOption.mechanism}
                </p>

                <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-xs text-[#596773]">
                  <span className="flex items-center gap-1.5 font-medium text-[#647D61]">
                    <Shield className="w-3.5 h-3.5" />
                    Step 4: Real-World Armor unlocked below
                  </span>
                  <button 
                    onClick={() => scrollToSection('step-4-armor')}
                    className="font-bold text-[#647D61] hover:underline flex items-center gap-1"
                  >
                    <span>View Armor</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}

          </section>
        )}

        {/* ========================================================================= */}
        {/* 4. THE REAL-WORLD ARMOR (ACTIONABLE COUNTER-MOVE) */}
        {/* ========================================================================= */}
        <section id="step-4-armor" className="scroll-mt-20 rounded-2xl bg-white border border-[#D2E0D0] shadow-card overflow-hidden">
          
          {/* Section Step Header */}
          <div className="p-5 sm:p-6 border-b border-[#F0ECE4] bg-[#FAF8F5] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#647D61] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                04
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#52684F] uppercase tracking-wider">
                  Step 4 • The Real-World Armor
                </div>
                <div className="text-base font-bold text-[#1F262E]">
                  Concrete Defense Mechanism & Counter-Move
                </div>
              </div>
            </div>

            <div className="px-3 py-1 rounded-full bg-[#EFF4EE] border border-[#D2E0D0] text-xs font-semibold text-[#52684F] flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#647D61]" />
              <span>Psychological Shield</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Spot the Trap Alert */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#FDF6EE] border border-[#EAD5BA] flex items-start gap-3.5">
              <ShieldAlert className="w-5 h-5 text-[#967C46] flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#7D6638] mb-1">
                  How to Spot the Trap in the Wild
                </div>
                <p className="text-sm sm:text-base text-[#4A3B18] leading-relaxed">
                  {framework?.realWorldArmor?.spotTheTrap || `Notice the moment you feel rushed, defensive, or emotionally certain without hard empirical data.`}
                </p>
              </div>
            </div>

            {/* Actionable Counter-Moves */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#52684F] flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-[#647D61]" />
                  <span>{framework?.realWorldArmor?.counterMoveTitle || "The Tactical Counter-Move"}</span>
                </h4>
                <span className="text-[11px] text-[#7E8B97]">Action steps</span>
              </div>

              <div className="space-y-2.5">
                {(framework?.realWorldArmor?.actionableCounterMove || [
                  "Pause the automated reflex: Enforce a mandatory 60-second breathing pause.",
                  "Name the distortion out loud to strip its unconscious power.",
                  topic.deepDiveConclusion?.everydayRule || "Apply the counter-measure before confirming any irreversible decision."
                ]).map((move, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] text-xs sm:text-sm text-[#1F262E]"
                  >
                    <div className="w-5 h-5 rounded-md bg-[#EFF4EE] text-[#647D61] border border-[#D2E0D0] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span className="leading-relaxed">{move}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The Psychological Shield Mnemonic Banner with Quick Copy */}
            <div className="p-5 rounded-2xl bg-[#EFF4EE] border border-[#C2D6C0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-[11px] font-bold text-[#52684F] uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#647D61]" />
                  <span>The Psychological Shield Rule (Mnemonic)</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-[#1F262E] italic">
                  "{framework?.realWorldArmor?.psychologicalShieldMnemonic || topic.deepDiveConclusion?.everydayRule}"
                </div>
              </div>

              <button
                onClick={() => copyArmorMnemonic(framework?.realWorldArmor?.psychologicalShieldMnemonic || topic.deepDiveConclusion?.everydayRule)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white text-[#52684F] border border-[#C2D6C0] hover:bg-[#FAF8F5] transition-all shadow-subtle flex-shrink-0"
              >
                {copiedArmor ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#647D61]" />
                    <span>Copied Armor!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#7E8B97]" />
                    <span>Copy Rule</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </section>

        {/* ========================================================================= */}
        {/* 5. THE DIALECTIC VIEW: COMPETING PERSPECTIVES (PSYCHE & SOPHIA) */}
        {/* ========================================================================= */}
        {dialecticData && (
          <section id="step-dialectic" className="scroll-mt-20 space-y-4 pt-2">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7A6F91]" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#7E8B97]">
                  The Dialectic Lab • Competing Perspectives
                </h2>
              </div>
              <span className="text-[11px] font-semibold text-[#7A6F91] bg-[#F2EFF6] px-2.5 py-0.5 rounded-full border border-[#DDD8E6]">
                Science vs. Philosophy
              </span>
            </div>

            <DialecticView 
              topic={topic}
              dialecticData={dialecticData}
              onShowToast={onShowToast}
              onTriggerConfetti={onTriggerConfetti}
            />
          </section>
        )}

        {/* ========================================================================= */}
        {/* 6. SOURCES & ACADEMIC REFERENCES */}
        {/* ========================================================================= */}
        {topic.references && topic.references.length > 0 && (
          <section id="step-sources" className="scroll-mt-20 rounded-2xl bg-white border border-[#E7E2D8] p-5 sm:p-7 shadow-card">
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#F0ECE4]">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#F2EFF6] text-[#7A6F91] flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h2 className="text-base sm:text-lg font-bold text-[#1F262E]">
                  Sources & References
                </h2>
              </div>
              {evidence && (
                <span 
                  title={evidence.tooltip}
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${evidence.classes}`}
                >
                  {evidence.label}
                </span>
              )}
            </div>

            <ul className="space-y-3.5">
              {topic.references.map((ref, idx) => (
                <li key={idx} className="flex flex-col gap-1 text-xs sm:text-sm text-[#4E5B67]">
                  <div>
                    <span className="font-semibold text-[#1F262E]">{ref.authors} ({ref.year}). </span>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#7A6F91] hover:text-[#594E70] underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-[#7A6F91] focus:ring-offset-1 rounded transition-colors"
                    >
                      {ref.title}
                    </a>
                  </div>
                  {ref.note && (
                    <p className="text-xs text-[#7E8B97] italic pl-2 border-l-2 border-[#DDD8E6]">
                      {ref.note}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Educational Content Disclaimer */}
        <div className="pt-2 pb-6 text-center text-xs text-[#8C98A4]">
          <p>Educational content, not professional advice.</p>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 6. ACTION FOOTER (Sticky at bottom) */}
      {/* ========================================================================= */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 border-t border-[#E7E2D8] backdrop-blur-md px-4 sm:px-6 lg:px-8 py-3.5 shadow-float">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* Status info */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#596773]">
            <span className="font-semibold text-[#1F262E] flex items-center gap-1.5">
              <Brain className="w-4 h-4 text-[#7A6F91]" />
              <span>{topic.title}</span>
            </span>
            <span className="text-[#A0AAB3]">•</span>
            <span>
              {isMastered ? (
                <span className="text-[#52684F] font-semibold inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#647D61]" /> Mastered & in Library
                </span>
              ) : canMaster ? (
                <span className="text-[#244C20] font-semibold inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#244C20]" /> Quiz passed • Ready to master
                </span>
              ) : (
                <span className="text-[#7D6638] font-medium" title="Answer the quiz correctly to master this topic">
                  Answer the quiz correctly to master this topic
                </span>
              )}
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            
            <button
              onClick={onBackToGrid}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#1F262E] bg-white border border-[#E7E2D8] hover:border-[#D0C8BC] hover:bg-[#FAF8F5] transition-all shadow-subtle"
            >
              <RefreshCw className="w-3.5 h-3.5 text-[#7E8B97]" />
              <span>Back to Dashboard</span>
            </button>

            {/* Mark as mastered / Mastered button */}
            {isMastered ? (
              <button
                onClick={handleToggleMastered}
                title="Mastered (Click to unmaster)"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#EFF4EE] hover:bg-[#E3ECE1] border border-[#C2D6C0] text-[#244C20] transition-all shadow-subtle cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-[#244C20]" />
                <span>Mastered</span>
              </button>
            ) : (
              <button
                onClick={handleToggleMastered}
                disabled={!canMaster}
                title={canMaster ? "Mark this topic as mastered" : "Answer the quiz correctly to master this topic"}
                className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all shadow-subtle ${
                  canMaster
                    ? 'bg-[#244C20] hover:bg-[#1B3A18] text-white border-transparent cursor-pointer'
                    : 'bg-[#F4F1EA] text-[#A0AAB3] border-[#E2DDD3] cursor-not-allowed opacity-75'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Mark as mastered</span>
              </button>
            )}

            <button
              onClick={() => onTurnIntoContent(topic)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#7A6F91] hover:bg-[#685D7F] transition-all shadow-subtle"
            >
              <Clapperboard className="w-3.5 h-3.5" />
              <span>Turn into Content</span>
            </button>

          </div>

        </div>
      </div>

    </div>
  );
};
