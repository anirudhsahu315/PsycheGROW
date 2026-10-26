import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  Smartphone, 
  Layers, 
  FileText, 
  Copy, 
  Check, 
  Sparkles, 
  RefreshCw, 
  Clock, 
  ChevronDown,
  Bookmark
} from 'lucide-react';
import { 
  CONTENT_FORMATS, 
  CONTENT_TONES, 
  generatePsychologyContent 
} from '../data/contentGenerator';

export const ContentCreationStudio = ({ 
  topic, 
  allTopics = [],
  onSelectTopic, 
  onBackToDashboard, 
  onShowToast,
  onTriggerConfetti,
  onSaveScript
}) => {
  // Format selector state: 'reel' | 'carousel' | 'blog'
  const [selectedFormat, setSelectedFormat] = useState('reel');

  // Tone selector state: 'viral' | 'educational' | 'storytelling'
  const [selectedTone, setSelectedTone] = useState('viral');

  // UI states
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [_variationSeed, setVariationSeed] = useState(1);

  // Generate output dynamically based on current topic, format, and tone
  const content = useMemo(() => {
    return generatePsychologyContent(topic, selectedFormat, selectedTone);
  }, [topic, selectedFormat, selectedTone]);

  if (!topic) return null;

  // Convert content to plain text for clean clipboard copying
  const getPlainTextRepresentation = () => {
    if (!content) return '';

    if (selectedFormat === 'reel') {
      let text = `🎬 VIRAL VOICEOVER SCRIPT: ${content.title}\n`;
      text += `⏱ Duration: ${content.duration} | Platform: ${content.targetPlatform}\n\n`;
      content.sections.forEach((sec) => {
        text += `=== ${sec.part} ===\n`;
        if (sec.deliveryCue) text += `🎬 Composition & Delivery Cues: ${sec.deliveryCue}\n`;
        if (sec.pronunciation) text += `🗣️ Pronunciation Guide: ${sec.pronunciation}\n`;
        text += `👀 Visual Cue: ${sec.visual}\n`;
        text += `📱 On-Screen Text: ${sec.ost}\n`;
        text += `🎙️ Spoken Audio: "${sec.script}"\n\n`;
      });
      return text;
    }

    if (selectedFormat === 'carousel') {
      let text = `📊 CAROUSEL DECK: ${content.title}\n`;
      text += `Format: ${content.formatName}\n\n`;
      content.slides.forEach((s) => {
        text += `--- SLIDE ${s.slideNumber}: ${s.headline} ---\n`;
        text += `Subtitle: ${s.subtitle}\n`;
        text += `Layout Direction: ${s.layout}\n`;
        text += `Visual Design: ${s.visualPrompt}\n\n`;
      });
      return text;
    }

    if (selectedFormat === 'blog') {
      let text = `📝 ${content.title}\n`;
      text += `Reading Time: ${content.readingTime} | Author: ${content.author}\n\n`;
      content.sections.forEach((sec) => {
        text += `## ${sec.heading}\n\n${sec.content}\n\n`;
      });
      return text;
    }

    return '';
  };

  const handleCopyToClipboard = () => {
    const textToCopy = getPlainTextRepresentation();
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    onShowToast("📋 Content script copied to clipboard!");
    onTriggerConfetti();
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSaveToLibrary = () => {
    if (!content) return;
    const formatObj = CONTENT_FORMATS.find((f) => f.id === selectedFormat);
    const activeTone = CONTENT_TONES.find((t) => t.id === selectedTone);

    let excerpt = "";
    if (selectedFormat === 'reel') {
      excerpt = content.sections?.[0]?.script || "";
    } else if (selectedFormat === 'carousel') {
      excerpt = content.slides?.[0]?.headline || "";
    } else {
      excerpt = content.sections?.[0]?.content?.slice(0, 160) + "..." || "";
    }

    const scriptItem = {
      id: `script-${Date.now()}`,
      topicId: topic.id,
      topicTitle: topic.title,
      branch: topic.branch,
      format: selectedFormat,
      formatLabel: formatObj?.label || selectedFormat,
      tone: selectedTone,
      toneLabel: activeTone?.label || 'Viral',
      title: content.title,
      previewText: excerpt,
      fullContent: getPlainTextRepresentation(),
      savedAt: 'Today'
    };

    if (onSaveScript) {
      onSaveScript(scriptItem);
    }
    setSaved(true);
    onTriggerConfetti();
    onShowToast("💾 Saved script to your Library!");
    setTimeout(() => setSaved(false), 2500);
  };

  const handleRegenerate = () => {
    setIsRegenerating(true);
    setTimeout(() => {
      setVariationSeed((prev) => prev + 1);
      setIsRegenerating(false);
      onShowToast("✨ Generated fresh psychological variation!");
    }, 300);
  };

  const activeToneObj = CONTENT_TONES.find((t) => t.id === selectedTone) || CONTENT_TONES[0];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F262E] pb-28">
      
      {/* Top Header & Breadcrumbs */}
      <div className="sticky top-0 z-30 w-full backdrop-blur-md bg-[#FAF8F5]/90 border-b border-[#E7E2D8] px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          
          <button
            onClick={onBackToDashboard}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#596773] hover:text-[#1F262E] transition-colors group p-1 -ml-1 rounded-xl hover:bg-[#F4F0E8]"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Dashboard</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F9F0EC] text-[#8F5543] border border-[#EAD6CF]">
              <Sparkles className="w-3.5 h-3.5 text-[#A8634F]" />
              <span>Content Creation Studio</span>
            </span>
          </div>

        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-7">
        
        {/* 1. INPUT / SELECTED TOPIC HEADER */}
        <section className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E7E2D8] shadow-card">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Active Topic Information */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${topic.branchColor?.bg || 'bg-[#F9F0EC]'} ${topic.branchColor?.text || 'text-[#8F5543]'} ${topic.branchColor?.border || 'border-[#EAD6CF]'}`}>
                  {topic.branch}
                </span>
                <span className="text-xs text-[#7E8B97] flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#A0AAB3]" />
                  <span>{topic.readTime}</span>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1F262E] tracking-tight">
                  {topic.title}
                </h1>
              </div>

              <p className="text-xs sm:text-sm text-[#596773] italic">
                "{topic.teaser}"
              </p>
            </div>

            {/* Switch Topic Selector */}
            {allTopics.length > 0 && (
              <div className="flex flex-col gap-1.5 min-w-[200px]">
                <label className="text-xs font-semibold text-[#7E8B97]">
                  Change Topic:
                </label>
                <div className="relative">
                  <select
                    value={topic.id}
                    onChange={(e) => {
                      const newTopic = allTopics.find((t) => t.id === e.target.value);
                      if (newTopic) onSelectTopic(newTopic);
                    }}
                    className="w-full appearance-none bg-[#FAF8F5] border border-[#E7E2D8] rounded-xl px-3 py-2 pr-8 text-xs sm:text-sm font-semibold text-[#1F262E] focus:outline-none focus:border-[#7A6F91] cursor-pointer"
                  >
                    {allTopics.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.title} ({t.branch})
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-[#7E8B97] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            )}

          </div>
        </section>

        {/* 2. FORMAT & TONE SELECTORS */}
        <section className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E7E2D8] shadow-card space-y-5">
          
          {/* Format Tabs */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#7E8B97] block mb-2.5">
              1. Choose Content Format
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {CONTENT_FORMATS.map((fmt) => {
                const isSelected = selectedFormat === fmt.id;
                return (
                  <button
                    key={fmt.id}
                    onClick={() => setSelectedFormat(fmt.id)}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-[#F9F0EC] border-[#A8634F] text-[#8F5543] ring-1 ring-[#A8634F]/30 shadow-subtle'
                        : 'bg-[#FAF8F5] border-[#E7E2D8] text-[#596773] hover:border-[#D0C8BC] hover:bg-white'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-white text-[#A8634F]' : 'bg-white text-[#7E8B97] border border-[#E7E2D8]'}`}>
                      {fmt.id === 'reel' && <Smartphone className="w-4 h-4" />}
                      {fmt.id === 'carousel' && <Layers className="w-4 h-4" />}
                      {fmt.id === 'blog' && <FileText className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-[#1F262E]">
                        {fmt.label}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tone Selector */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#7E8B97] block mb-2.5">
              2. Select Hook Tone
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {CONTENT_TONES.map((tone) => {
                const isSelected = selectedTone === tone.id;
                return (
                  <button
                    key={tone.id}
                    onClick={() => setSelectedTone(tone.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-[#F2EFF6] border-[#7A6F91] text-[#655A7B] ring-1 ring-[#7A6F91]/30 shadow-subtle'
                        : 'bg-[#FAF8F5] border-[#E7E2D8] text-[#596773] hover:border-[#D0C8BC] hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs sm:text-sm font-bold text-[#1F262E]">
                        {tone.label}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-white text-[#7E8B97] border border-[#E7E2D8]">
                        {tone.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#596773] line-clamp-2">
                      {tone.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

        </section>

        {/* 3. GENERATED OUTPUT BOX */}
        <section className="rounded-2xl bg-white border border-[#E7E2D8] shadow-card overflow-hidden">
          
          {/* Header Bar */}
          <div className="p-5 sm:p-6 border-b border-[#F0ECE4] bg-[#FAF8F5] flex flex-wrap items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-white border border-[#E7E2D8] text-[#7A6F91]">
                {selectedFormat === 'reel' && <Smartphone className="w-5 h-5" />}
                {selectedFormat === 'carousel' && <Layers className="w-5 h-5" />}
                {selectedFormat === 'blog' && <FileText className="w-5 h-5" />}
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-[#1F262E]">
                  {content?.title}
                </h2>
                <div className="flex items-center gap-2 text-xs text-[#7E8B97] mt-0.5">
                  <span className="text-[#655A7B] font-medium">{activeToneObj.label} Tone</span>
                  <span>•</span>
                  <span>{activeToneObj.desc}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleRegenerate}
                disabled={isRegenerating}
                title="Generate another variation"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-[#FAF8F5] border border-[#E7E2D8] text-[#596773] text-xs font-semibold transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isRegenerating ? 'animate-spin text-[#7A6F91]' : ''}`} />
                <span>Re-roll</span>
              </button>

              <button
                onClick={handleSaveToLibrary}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all ${
                  saved 
                    ? 'bg-[#EFF4EE] text-[#52684F] border-[#C2D6C0]'
                    : 'bg-white hover:bg-[#FAF8F5] border-[#E7E2D8] text-[#596773]'
                }`}
              >
                {saved ? <Check className="w-3.5 h-3.5 text-[#647D61]" /> : <Bookmark className="w-3.5 h-3.5 text-[#7A6F91]" />}
                <span>{saved ? "Saved!" : "Save"}</span>
              </button>

              <button
                onClick={handleCopyToClipboard}
                id="copy-to-clipboard-btn"
                className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl font-semibold text-xs sm:text-sm bg-[#7A6F91] hover:bg-[#685D7F] text-white transition-all shadow-subtle"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Copied! 📋</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Script</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Body Content Preview Box */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* FORMAT 1: REEL SCRIPT */}
            {selectedFormat === 'reel' && (
              <div className="space-y-4">
                
                <div className="flex flex-wrap items-center gap-4 p-3 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] text-xs text-[#596773]">
                  <div className="flex items-center gap-1.5 text-[#7D6638] font-semibold">
                    <Clock className="w-3.5 h-3.5 text-[#967C46]" />
                    <span>Duration: {content?.duration}</span>
                  </div>
                  <span className="text-[#D0C8BC]">•</span>
                  <span className="text-[#596773]">Word Count: {content?.metrics?.words} words</span>
                </div>

                {content?.sections?.map((sec, idx) => (
                  <div 
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl bg-white border border-[#E7E2D8] space-y-3"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#8F5543] bg-[#F9F0EC] px-2.5 py-0.5 rounded-md border border-[#EAD6CF]">
                        {sec.part}
                      </span>
                      <span className="text-[11px] font-mono text-[#A0AAB3]">Section 0{idx + 1}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EAE5DC] text-[#475767]">
                        <span className="font-semibold text-[#7E8B97] block text-[10px] uppercase">👀 Visual Cue</span>
                        {sec.visual}
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#F8F5EC] border border-[#E7DEC9] text-[#7D6638]">
                        <span className="font-semibold text-[#967C46] block text-[10px] uppercase">📱 On-Screen Text</span>
                        {sec.ost}
                      </div>
                    </div>

                    {/* Composition & Delivery Cues + Pronunciation Guide */}
                    {(sec.deliveryCue || sec.pronunciation) && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {sec.deliveryCue && (
                          <div className="p-2.5 rounded-lg bg-[#F2EFF6] border border-[#DDD8E6] text-[#655A7B]">
                            <span className="font-bold text-[#7A6F91] block text-[10px] uppercase tracking-wider mb-0.5">
                              🎬 Composition & Delivery Cues
                            </span>
                            <span className="font-mono text-[11px] leading-relaxed block">{sec.deliveryCue}</span>
                          </div>
                        )}
                        {sec.pronunciation && (
                          <div className="p-2.5 rounded-lg bg-[#EFF4EE] border border-[#D2E0D0] text-[#52684F]">
                            <span className="font-bold text-[#647D61] block text-[10px] uppercase tracking-wider mb-0.5">
                              🗣️ Pronunciation Guide
                            </span>
                            <span className="font-mono text-[11px] font-semibold leading-relaxed block">{sec.pronunciation}</span>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="p-3.5 rounded-lg bg-[#FAF8F5] border border-[#EAE5DC]">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-[#7A6F91] block mb-1">
                        🎙️ Spoken Audio (Voiceover Script)
                      </span>
                      <p className="text-sm sm:text-base text-[#1F262E] font-medium leading-relaxed">
                        "{sec.script}"
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            )}

            {/* FORMAT 2: CAROUSEL */}
            {selectedFormat === 'carousel' && (
              <div className="space-y-4">
                
                <div className="flex flex-wrap items-center gap-4 p-3 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] text-xs text-[#596773]">
                  <span className="font-bold text-[#655A7B]">{content?.formatName}</span>
                  <span className="text-[#D0C8BC]">•</span>
                  <span className="text-[#52684F] font-semibold">{content?.slides?.length || 5} Slides</span>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {content?.slides?.map((slide) => (
                    <div 
                      key={slide.slideNumber}
                      className="p-5 rounded-xl bg-white border border-[#E7E2D8] flex flex-col sm:flex-row gap-5"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#F2EFF6] border border-[#DDD8E6] flex flex-col items-center justify-center flex-shrink-0 text-[#7A6F91]">
                        <span className="text-[10px] font-bold uppercase">Slide</span>
                        <span className="text-2xl font-black">{slide.slideNumber}</span>
                      </div>

                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="text-base sm:text-lg font-bold text-[#1F262E]">
                            {slide.headline}
                          </h3>
                          <span className="text-[10px] uppercase font-bold text-[#7E8B97] bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#E7E2D8]">
                            {slide.title}
                          </span>
                        </div>

                        <p className="text-sm text-[#596773] font-normal">
                          {slide.subtitle}
                        </p>

                        <div className="pt-2 text-xs text-[#7E8B97] border-t border-[#F2EEE7] flex flex-col gap-1">
                          <div>
                            <strong className="text-[#7A6F91]">Layout:</strong> {slide.layout}
                          </div>
                          <div>
                            <strong className="text-[#A8634F]">Visual:</strong> {slide.visualPrompt}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            )}

            {/* FORMAT 3: BLOG */}
            {selectedFormat === 'blog' && (
              <div className="space-y-6">
                
                <div className="flex flex-wrap items-center gap-4 p-3 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] text-xs text-[#596773]">
                  <span className="text-[#52684F] font-semibold">Reading Time: {content?.readingTime}</span>
                  <span className="text-[#D0C8BC]">•</span>
                  <span>Word Count: ~{content?.metrics?.wordCount} words</span>
                </div>


                <article className="space-y-5">
                  {content?.sections?.map((section, idx) => (
                    <div key={idx} className="p-5 rounded-xl bg-white border border-[#E7E2D8] space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-[#655A7B]">
                        {section.heading}
                      </h3>
                      <div className="text-sm sm:text-base text-[#1F262E] leading-relaxed font-normal whitespace-pre-line">
                        {section.content}
                      </div>
                    </div>
                  ))}
                </article>

              </div>
            )}

          </div>

        </section>

      </div>

    </div>
  );
};
