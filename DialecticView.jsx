import React, { useState } from 'react';
import { 
  Brain, 
  Scroll, 
  Scale, 
  Sparkles, 
  CheckCircle2, 
  Quote, 
  Layers, 
  Split, 
  BookOpen, 
  Compass, 
  Microscope
} from 'lucide-react';

export const DialecticView = ({ 
  topic, 
  dialecticData,
  onShowToast,
  onTriggerConfetti
}) => {
  // View mode: 'scientific' | 'philosophical' | 'synthesis' | 'split'
  const [activeLens, setActiveLens] = useState('scientific');
  const [isSplitView, setIsSplitView] = useState(false);

  if (!topic) return null;

  // Use passed dialecticData or fallback to topic.dialectic
  const dialectic = dialecticData || topic.dialectic;

  if (!dialectic) {
    return (
      <div className="p-6 rounded-2xl bg-white border border-[#E7E2D8] text-center text-xs text-[#7E8B97]">
        Dialectic analysis is not available for this topic.
      </div>
    );
  }

  const { scientificLens, philosophicalLens, dialecticSynthesis, synthesisQuestion } = dialectic;

  const handleCopyInsight = (text, label) => {
    navigator.clipboard.writeText(text);
    if (onShowToast) onShowToast(`📋 ${label} copied to clipboard!`);
    if (onTriggerConfetti) onTriggerConfetti();
  };

  return (
    <div className="rounded-2xl bg-white border border-[#E7E2D8] shadow-card overflow-hidden transition-all duration-200">
      
      {/* Top Banner: Psyche & Sophia Dialectic Header */}
      <div className="px-5 sm:px-7 py-5 bg-[#FAF8F5] border-b border-[#EAE5DC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 flex-wrap mb-1.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase bg-[#F2EFF6] text-[#655A7B] border border-[#DDD8E6]">
              <Sparkles className="w-3 h-3 text-[#7A6F91]" />
              <span>Psyche & Sophia</span>
            </span>
            <span className="text-xs text-[#7E8B97] font-medium">
              • Competing Perspectives & Dialectic Synthesis
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-extrabold text-[#1F262E] tracking-tight">
            Scientific Mechanism vs. Philosophical Inquiry
          </h3>
          
          {synthesisQuestion && (
            <p className="mt-1 text-xs sm:text-sm text-[#596773] italic">
              "{synthesisQuestion}"
            </p>
          )}
        </div>

        {/* View Switchers */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto bg-[#EFEBE3]/80 p-1 rounded-xl border border-[#E7E2D8]">
          <button
            onClick={() => {
              setIsSplitView(false);
              setActiveLens('scientific');
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              !isSplitView && activeLens === 'scientific'
                ? 'bg-white text-[#1F262E] shadow-subtle border border-[#E0D9CD]'
                : 'text-[#7E8B97] hover:text-[#1F262E]'
            }`}
          >
            <Microscope className="w-3.5 h-3.5 text-[#596E82]" />
            <span>Science</span>
          </button>

          <button
            onClick={() => {
              setIsSplitView(false);
              setActiveLens('philosophical');
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              !isSplitView && activeLens === 'philosophical'
                ? 'bg-white text-[#1F262E] shadow-subtle border border-[#E0D9CD]'
                : 'text-[#7E8B97] hover:text-[#1F262E]'
            }`}
          >
            <Scroll className="w-3.5 h-3.5 text-[#967C46]" />
            <span>Philosophy</span>
          </button>

          <button
            onClick={() => {
              setIsSplitView(false);
              setActiveLens('synthesis');
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              !isSplitView && activeLens === 'synthesis'
                ? 'bg-white text-[#1F262E] shadow-subtle border border-[#E0D9CD]'
                : 'text-[#7E8B97] hover:text-[#1F262E]'
            }`}
          >
            <Scale className="w-3.5 h-3.5 text-[#7A6F91]" />
            <span>Synthesis</span>
          </button>

          <div className="w-px h-4 bg-[#D0C8BC] mx-0.5 hidden md:block" />

          {/* Comparative Split View Toggle (Desktop) */}
          <button
            onClick={() => setIsSplitView(!isSplitView)}
            title="Compare Science and Philosophy side-by-side"
            className={`hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              isSplitView
                ? 'bg-[#7A6F91] text-white shadow-subtle'
                : 'text-[#7E8B97] hover:text-[#1F262E]'
            }`}
          >
            <Split className="w-3.5 h-3.5" />
            <span>Side-by-Side</span>
          </button>
        </div>
      </div>

      {/* Main Dialectic Body */}
      <div className="p-5 sm:p-7">
        
        {/* CONDITIONAL RENDER: SPLIT COMPARISON VIEW */}
        {isSplitView ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left Column: Scientific Lens */}
            <div className="flex flex-col justify-between p-5 rounded-2xl bg-[#EFF3F6]/50 border border-[#D5E0E7]">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-[#EFF3F6] text-[#475767] border border-[#D5E0E7]">
                    <Microscope className="w-3.5 h-3.5 text-[#596E82]" />
                    <span>Scientific Lens (Descriptive)</span>
                  </span>
                  <span className="text-[11px] font-medium text-[#7E8B97]">Empirical Evidence</span>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-[#7E8B97] mb-1">School & Tradition</div>
                <h4 className="text-base font-bold text-[#1F262E] mb-2">{scientificLens.school}</h4>

                {/* Thinkers */}
                <div className="flex items-center gap-1.5 flex-wrap mb-4">
                  {scientificLens.thinkers?.map((thinker, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-white border border-[#D5E0E7] text-[#475767]">
                      {thinker}
                    </span>
                  ))}
                </div>

                {/* Core Thesis */}
                <div className="p-3.5 rounded-xl bg-white border border-[#E0E7EC] mb-4">
                  <div className="text-[11px] font-bold text-[#596E82] uppercase tracking-wider mb-1">Core Hypothesis</div>
                  <p className="text-xs sm:text-sm text-[#1F262E] leading-relaxed italic">
                    "{scientificLens.coreThesis}"
                  </p>
                </div>

                {/* Mechanism */}
                <div className="text-xs text-[#333F48] leading-relaxed mb-4">
                  <strong className="text-[#1F262E] block mb-1">Biological / Cognitive Mechanism:</strong>
                  {scientificLens.mechanism}
                </div>

                {/* Evidence */}
                <div className="text-xs text-[#596773] leading-relaxed p-3 rounded-lg bg-[#FAF8F5] border border-[#EAE5DC]">
                  <strong className="text-[#1F262E] block text-[11px] uppercase tracking-wider mb-0.5">Empirical Study / Evidence:</strong>
                  {scientificLens.keyExperimentOrEvidence}
                </div>
              </div>

              {scientificLens.limitations && (
                <div className="mt-4 pt-3 border-t border-[#D5E0E7] text-[11px] text-[#7E8B97]">
                  <strong>Limitation:</strong> {scientificLens.limitations}
                </div>
              )}
            </div>

            {/* Right Column: Philosophical Lens */}
            <div className="flex flex-col justify-between p-5 rounded-2xl bg-[#F8F5EC]/50 border border-[#E7DEC9]">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-[#F8F5EC] text-[#7D6638] border border-[#E7DEC9]">
                    <Scroll className="w-3.5 h-3.5 text-[#967C46]" />
                    <span>Philosophical Lens (Normative)</span>
                  </span>
                  <span className="text-[11px] font-medium text-[#7E8B97]">Classical Wisdom</span>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-[#7E8B97] mb-1">Philosophical School</div>
                <h4 className="text-base font-bold text-[#1F262E] mb-2">{philosophicalLens.school}</h4>

                {/* Thinkers */}
                <div className="flex items-center gap-1.5 flex-wrap mb-4">
                  {philosophicalLens.thinkers?.map((thinker, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-white border border-[#E7DEC9] text-[#7D6638]">
                      {thinker}
                    </span>
                  ))}
                </div>

                {/* Core Thesis */}
                <div className="p-3.5 rounded-xl bg-white border border-[#EBE3D3] mb-4">
                  <div className="text-[11px] font-bold text-[#967C46] uppercase tracking-wider mb-1">Philosophical Proposition</div>
                  <p className="text-xs sm:text-sm text-[#1F262E] leading-relaxed italic">
                    "{philosophicalLens.coreThesis}"
                  </p>
                </div>

                {/* Framework */}
                <div className="text-xs text-[#333F48] leading-relaxed mb-4">
                  <strong className="text-[#1F262E] block mb-1">Foundational Framework:</strong>
                  {philosophicalLens.framework}
                </div>

                {/* Classical Aphorism */}
                <div className="text-xs text-[#596773] leading-relaxed p-3 rounded-lg bg-[#FAF8F5] border border-[#EAE5DC]">
                  <strong className="text-[#1F262E] block text-[11px] uppercase tracking-wider mb-0.5">Classical Text / Aphorism:</strong>
                  "{philosophicalLens.aphorismOrText}"
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E7DEC9] text-[11px] text-[#7D6638]">
                <strong>Practical Wisdom:</strong> {philosophicalLens.practicalWisdom}
              </div>
            </div>

          </div>
        ) : activeLens === 'scientific' ? (
          
          /* LENS 1: SCIENTIFIC LENS (Detailed Single-Focus) */
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#EAE5DC]">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#EFF3F6] text-[#475767] border border-[#D5E0E7] mb-2">
                  <Microscope className="w-3.5 h-3.5 text-[#596E82]" />
                  <span>The Empirical Scientific Lens</span>
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-[#1F262E]">
                  {scientificLens.school}
                </h4>
              </div>

              {/* Thinkers Badges */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-xs text-[#7E8B97] font-semibold mr-1">Foundational Thinkers:</span>
                {scientificLens.thinkers?.map((thinker, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#FAF8F5] border border-[#E7E2D8] text-[#1F262E]">
                    {thinker}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Hypothesis Block */}
            <div className="p-5 rounded-2xl bg-[#EFF3F6]/60 border border-[#D5E0E7]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#596E82] mb-2">
                <Brain className="w-4 h-4" />
                <span>Empirical Proposition</span>
              </div>
              <p className="text-base sm:text-lg text-[#1F262E] font-medium leading-relaxed italic">
                "{scientificLens.coreThesis}"
              </p>
            </div>

            {/* Mechanism & Evidence Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              <div className="p-5 rounded-xl bg-white border border-[#E7E2D8]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7E8B97] mb-2">
                  <Layers className="w-4 h-4 text-[#7A6F91]" />
                  <span>Neurobiological Mechanism</span>
                </div>
                <p className="text-xs sm:text-sm text-[#333F48] leading-relaxed">
                  {scientificLens.mechanism}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E7E2D8]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7E8B97] mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#647D61]" />
                  <span>Key Experiment & Empirical Evidence</span>
                </div>
                <p className="text-xs sm:text-sm text-[#333F48] leading-relaxed">
                  {scientificLens.keyExperimentOrEvidence}
                </p>
              </div>

            </div>

            {scientificLens.limitations && (
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] text-xs text-[#596773]">
                <strong className="text-[#1F262E]">Scientific Limitation / Boundary Condition:</strong> {scientificLens.limitations}
              </div>
            )}
          </div>

        ) : activeLens === 'philosophical' ? (
          
          /* LENS 2: PHILOSOPHICAL LENS (Detailed Single-Focus) */
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#EAE5DC]">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#F8F5EC] text-[#7D6638] border border-[#E7DEC9] mb-2">
                  <Scroll className="w-3.5 h-3.5 text-[#967C46]" />
                  <span>The Classical Philosophical Lens</span>
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-[#1F262E]">
                  {philosophicalLens.school}
                </h4>
              </div>

              {/* Thinkers Badges */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-xs text-[#7E8B97] font-semibold mr-1">Key Philosophers:</span>
                {philosophicalLens.thinkers?.map((thinker, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#FAF8F5] border border-[#E7E2D8] text-[#1F262E]">
                    {thinker}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Philosophical Thesis */}
            <div className="p-5 rounded-2xl bg-[#F8F5EC]/70 border border-[#E7DEC9]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#967C46] mb-2">
                <Quote className="w-4 h-4" />
                <span>Philosophical Thesis</span>
              </div>
              <p className="text-base sm:text-lg text-[#1F262E] font-medium leading-relaxed italic">
                "{philosophicalLens.coreThesis}"
              </p>
            </div>

            {/* Framework & Aphorism Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              <div className="p-5 rounded-xl bg-white border border-[#E7E2D8]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7E8B97] mb-2">
                  <Compass className="w-4 h-4 text-[#A8634F]" />
                  <span>Conceptual Framework</span>
                </div>
                <p className="text-xs sm:text-sm text-[#333F48] leading-relaxed">
                  {philosophicalLens.framework}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E7E2D8]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7E8B97] mb-2">
                  <BookOpen className="w-4 h-4 text-[#967C46]" />
                  <span>Classical Text / Aphorism</span>
                </div>
                <p className="text-xs sm:text-sm text-[#1F262E] italic leading-relaxed">
                  "{philosophicalLens.aphorismOrText}"
                </p>
              </div>

            </div>

            {/* Practical Wisdom */}
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] text-xs sm:text-sm text-[#52684F]">
              <strong className="text-[#2D3F2B] font-semibold">Practical Wisdom for Daily Life:</strong> {philosophicalLens.practicalWisdom}
            </div>
          </div>

        ) : (

          /* LENS 3: DIALECTIC SYNTHESIS (Integration of Science & Philosophy) */
          <div className="space-y-6 animate-in fade-in duration-200">
            
            <div className="pb-4 border-b border-[#EAE5DC]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#F2EFF6] text-[#655A7B] border border-[#DDD8E6] mb-2">
                <Scale className="w-3.5 h-3.5 text-[#7A6F91]" />
                <span>The Dialectic Convergence</span>
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-[#1F262E]">
                {dialecticSynthesis.synthesisTitle || 'Bridging Descriptive Brain & Normative Mind'}
              </h4>
              <p className="text-xs sm:text-sm text-[#596773] mt-1">
                How combining the empirical "How" of psychology with the normative "Why" of philosophy produces complete mental clarity.
              </p>
            </div>

            {/* Main Integration Prose */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F2EFF6]/60 border border-[#DDD8E6] space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#7A6F91] flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Integration Insight</span>
              </div>
              <p className="text-sm sm:text-base text-[#1F262E] leading-relaxed font-normal">
                {dialecticSynthesis.integrationInsight}
              </p>
            </div>

            {/* Actionable Paradox Card */}
            <div className="p-5 rounded-2xl bg-[#F8F5EC] border border-[#E7DEC9]">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7D6638] flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#967C46]" />
                  <span>The Actionable Paradox</span>
                </span>
                <button
                  onClick={() => handleCopyInsight(dialecticSynthesis.actionableParadox, 'Actionable Paradox')}
                  className="text-xs font-semibold text-[#967C46] hover:text-[#7D6638] underline"
                >
                  Copy Rule
                </button>
              </div>
              <p className="text-sm sm:text-base text-[#1F262E] font-medium leading-relaxed">
                "{dialecticSynthesis.actionableParadox}"
              </p>
            </div>

            {/* Comparative Breakdown Table */}
            <div className="overflow-x-auto rounded-xl border border-[#E7E2D8]">
              <table className="w-full text-xs text-left text-[#1F262E]">
                <thead className="bg-[#FAF8F5] text-[#596773] border-b border-[#E7E2D8] uppercase text-[10px] tracking-wider font-bold">
                  <tr>
                    <th className="py-2.5 px-4">Dimension</th>
                    <th className="py-2.5 px-4 text-[#596E82]">Scientific Psychology (Psyche)</th>
                    <th className="py-2.5 px-4 text-[#967C46]">Classical Philosophy (Sophia)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE5DC] bg-white">
                  <tr>
                    <td className="py-2.5 px-4 font-bold text-[#596773]">Primary Goal</td>
                    <td className="py-2.5 px-4 text-[#333F48]">Descriptive explanation of neural & cognitive mechanisms</td>
                    <td className="py-2.5 px-4 text-[#333F48]">Normative inquiry into virtue, wisdom, and eudaimonia</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-bold text-[#596773]">Core Question</td>
                    <td className="py-2.5 px-4 text-[#333F48]">"Why does the human nervous system react this way?"</td>
                    <td className="py-2.5 px-4 text-[#333F48]">"How ought a conscious agent to judge and act?"</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-bold text-[#596773]">Applied Remedy</td>
                    <td className="py-2.5 px-4 text-[#333F48]">Behavioral nudges, environmental design & debiasing</td>
                    <td className="py-2.5 px-4 text-[#333F48]">Self-interrogation, virtue cultivation & rational acceptance</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        )}

      </div>

    </div>
  );
};
