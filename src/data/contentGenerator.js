// Content Generation Engine tailored for Psychology Topics
// Generates content across 3 formats: 'reel', 'carousel', 'blog'
// and 3 tones: 'viral', 'educational', 'storytelling'

export const CONTENT_FORMATS = [
  { id: 'reel', label: 'Instagram Reel / YouTube Short Script', icon: 'Smartphone' },
  { id: 'carousel', label: 'Carousel Post (Slide 1-5)', icon: 'Layers' },
  { id: 'blog', label: 'Blog / Long-form Post', icon: 'FileText' },
];

export const CONTENT_TONES = [
  { id: 'viral', label: 'Viral & Catchy', badge: 'High Engagement', desc: 'Punchy hooks, high curiosity loops, and conversational rhythm.' },
  { id: 'educational', label: 'Educational & Professional', badge: 'Research-Backed', desc: 'Authoritative, clear scientific framing, and analytical takeaways.' },
  { id: 'storytelling', label: 'Storytelling', badge: 'Narrative-Driven', desc: 'Immersive character setup, emotional tension, and relatable resolution.' },
];

export function generatePsychologyContent(topic, format, tone) {
  if (!topic) return null;

  switch (format) {
    case 'reel':
      return generateReelScript(topic, tone);
    case 'carousel':
      return generateCarouselPost(topic, tone);
    case 'blog':
      return generateBlogPost(topic, tone);
    default:
      return generateReelScript(topic, tone);
  }
}

// Phonetic Pronunciation Lexicon for Psychology & Philosophy
export const PHONETIC_DICTIONARY = {
  "Leon Festinger": "[LAY-on FESS-tin-jer]",
  "Epictetus": "[eh-pik-TEE-tus]",
  "Enchiridion": "[en-kye-RID-ee-on]",
  "Ataraxia": "[at-uh-RAK-see-uh]",
  "Amor Fati": "[AH-mor FAH-tee]",
  "Carl Jung": "[Karl YOONG]",
  "Daniel Kahneman": "[DAN-yul KAH-nuh-mun]",
  "Amos Tversky": "[AY-mus TVUR-skee]",
  "Peter Wason": "[PEE-ter WAY-sun]",
  "Jean-Paul Sartre": "[ZHAHN-POHL SAR-truh]",
  "Mauvaise foi": "[moh-VEZ FWAH]",
  "Friedrich Nietzsche": "[FREE-drish NEE-chuh]",
  "Sigmund Freud": "[SIG-mund FROYD]",
  "Marcus Aurelius": "[MAR-kus aw-REE-lee-us]",
  "Seneca": "[SEN-eh-kuh]",
  "Dorsal anterior cingulate cortex": "[DOR-sul an-TEER-ee-er SING-gyuh-lit KOR-teks]",
  "Prefrontal cortex": "[pree-FRUN-tul KOR-teks]",
  "Amygdala": "[uh-MIG-duh-luh]",
  "Heuristic": "[hyoo-RISS-tik]",
  "Cognitive Dissonance": "[KOG-nih-tiv DISS-uh-nuns]",
  "Dialectic": "[dye-uh-LEK-tik]",
  "Epistemology": "[ih-pis-tuh-MOL-uh-jee]",
  "Stoicism": "[STOH-ih-siz-um]",
  "Solipsism": "[SOH-lip-siz-um]",
  "Hedonic Adaptation": "[heh-DAH-nik ad-ap-TAY-shun]"
};

function lookupPhoneticsForTopic(topic) {
  const matches = [];
  const text = `${topic.title} ${topic.teaser || ''} ${topic.tradition || ''} ${topic.branch || ''} ${topic.deepDiveConclusion?.corePrinciple || ''}`;
  for (const [term, phonetic] of Object.entries(PHONETIC_DICTIONARY)) {
    if (text.toLowerCase().includes(term.toLowerCase())) {
      matches.push(`${term} -> ${phonetic}`);
    }
  }
  return matches.length > 0 ? matches.join(" • ") : null;
}

function computeReelMetrics(sections) {
  const fullText = sections.map((s) => s.script || '').join(' ');
  const words = fullText.trim().split(/\s+/).filter(Boolean).length;
  const seconds = Math.round((words / 130) * 60);
  return {
    words,
    readingTime: `${seconds}s`
  };
}

// 1. REEL / SHORT SCRIPT GENERATOR
function generateReelScript(topic, tone) {
  // Flagship 1: Cognitive Dissonance
  if (topic.id === 'cognitive-dissonance') {
    const sections = [
      {
        part: "HOOK (0 - 4s)",
        deliveryCue: "[Heavy sub-bass hit / direct eye contact / fast, lean-in delivery / 140 WPM]",
        pronunciation: "Cognitive Dissonance -> [KOG-nih-tiv DISS-uh-nuns]",
        visual: "Extreme close-up on face leaning into lens, sudden snap-zoom, glitch sound effect.",
        ost: "YOUR BRAIN IS GASLIGHTING YOU 🧠🚨",
        script: "Your brain would literally rather lie straight to your face than admit you made an irrational choice. Here is the neurological proof."
      },
      {
        part: "THE CORE CONFLICT (4 - 18s)",
        deliveryCue: "[B-roll beat drops / conversational, relatable cadence / slight sarcastic smirk / 130 WPM]",
        pronunciation: null,
        visual: "Rapid cut to night-time POV scrolling an online store, receipt pop-up with red strobe vignette.",
        ost: "The 1:30 AM Buyer's Remorse 🛒",
        script: "Ever drop $400 on something you swore you wouldn't buy? The exact millisecond that receipt hits your inbox, a knot forms in your stomach. But within thirty seconds, your mind invents four ridiculous excuses why it was actually an 'investment in your future self'. That isn't logic. That's your ego going into panic mode."
      },
      {
        part: "THE NEURO/PSYCH MECHANISM (18 - 40s)",
        deliveryCue: "[Music thins to steady pulsing synth / authoritative, rhythmic, clear emphasis / 125 WPM]",
        pronunciation: "Leon Festinger -> [LAY-on FESS-tin-jer] • Dorsal anterior cingulate cortex -> [DOR-sul an-TEER-ee-er SING-gyuh-lit KOR-teks]",
        visual: "Kinetic motion graphic showing split brain: 'I am disciplined' vs 'I acted reckless' clashing in red lightning.",
        ost: "Leon Festinger (1957) • dACC Activation",
        script: "In 1957, social psychologist Leon Festinger [LAY-on FESS-tin-jer] proved this is Cognitive Dissonance. When your self-identity—'I am smart and disciplined'—collides with your actual behavior, your dorsal anterior cingulate cortex [DOR-sul an-TEER-ee-er SING-gyuh-lit KOR-teks] fires the exact distress signal as physical pain. Admitting a mistake literally hurts. So to stop the pain, your brain rewrites reality backwards."
      },
      {
        part: "THE ANTIDOTE & CTA (40 - 50s)",
        deliveryCue: "[Beat cuts out completely / intimate whisper into camera / slow deliberate punch / 115 WPM]",
        pronunciation: null,
        visual: "Slow push-in on presenter, calm and grounded, hand on chest.",
        ost: "THE 5-SECOND TRUTH AUDIT 🛡️",
        script: "Here is your armor: if you find yourself over-explaining a decision to everyone around you, you're not convincing them—you're convincing yourself. Pause and catch the lie. Save this script for your next big decision, and follow for daily mental models."
      }
    ];

    return {
      title: "Voiceover Script: Why Your Brain Gaslights You (Cognitive Dissonance)",
      duration: "45-55 seconds",
      targetPlatform: "TikTok / Instagram Reels / YouTube Shorts",
      metrics: computeReelMetrics(sections),
      sections
    };
  }

  // Flagship 2: Stoic Dichotomy of Control
  if (topic.id === 'stoic-dichotomy-of-control' || topic.id === 'dichotomy-of-control') {
    const sections = [
      {
        part: "HOOK (0 - 4s)",
        deliveryCue: "[Sudden silence / deep atmospheric rumble / intense eye contact / 135 WPM]",
        pronunciation: "Epictetus -> [eh-pik-TEE-tus]",
        visual: "Presenter staring unblinking into lens, marble Roman bust flashing behind them.",
        ost: "YOU ARE ANXIOUS ABOUT GHOSTS 🏛️⚡",
        script: "Ninety-nine percent of what is ruining your sleep right now isn't real. It is a ghost your mind invented."
      },
      {
        part: "THE CORE CONFLICT (4 - 18s)",
        deliveryCue: "[Lo-fi hip-hop groove enters / rapid conversational storytelling / 130 WPM]",
        pronunciation: null,
        visual: "Split-screen: refreshing sent email vs spiraling thoughts text clouds ('Did I offend them? What if I get fired?').",
        ost: "The Waiting-for-a-Reply Spiral 📩",
        script: "Think about the last text or email you sent. The second you hit send, your blood pressure spikes. You analyze every punctuation mark. You imagine worst-case scenarios. You are burning raw dopamine trying to control another human being's thumbs."
      },
      {
        part: "THE NEURO/PSYCH MECHANISM (18 - 40s)",
        deliveryCue: "[Steady percussive pulse / crisp philosophical authority / 125 WPM]",
        pronunciation: "Epictetus -> [eh-pik-TEE-tus] • Enchiridion -> [en-kye-RID-ee-on] • Ataraxia -> [at-uh-RAK-see-uh]",
        visual: "Kinetic graphic: Two concentric circles—'Things in your power' vs 'Things outside your power'.",
        ost: "Epictetus • The Enchiridion (c. 108 AD)",
        script: "Two thousand years ago, the Greek slave Epictetus [eh-pik-TEE-tus] wrote the Enchiridion [en-kye-RID-ee-on]. His law: reality has two buckets. Inside your control: your effort, your intentions, your reactions. Outside your control: literally everything else. When you confuse the two, your amygdala floods your veins with cortisol because you're fighting gravity."
      },
      {
        part: "THE ANTIDOTE & CTA (40 - 50s)",
        deliveryCue: "[Acoustic drop / calm, grounding whisper / deliberate pause on final question / 115 WPM]",
        pronunciation: "Ataraxia -> [at-uh-RAK-see-uh]",
        visual: "Presenter raises hands, palms open, releasing tension with deep breath.",
        ost: "THE STOIC RAZOR: 'IS THIS IN MY CONTROL?'",
        script: "Next time anxiety grips you, demand: 'Is this in my control?' If no, say: 'Then it is nothing to me.' That state of unshakable peace is called Ataraxia [at-uh-RAK-see-uh]. Share this with an overthinker."
      }
    ];

    return {
      title: "Voiceover Script: The Roman Slave Who Cured Anxiety (Dichotomy of Control)",
      duration: "45-52 seconds",
      targetPlatform: "TikTok / Instagram Reels / YouTube Shorts",
      metrics: computeReelMetrics(sections),
      sections
    };
  }

  // Flagship 3: Shadow Projection
  if (topic.id === 'shadow-projection' || topic.title.toLowerCase().includes('shadow')) {
    const sections = [
      {
        part: "HOOK (0 - 4s)",
        deliveryCue: "[Subtle binaural tone / whisper-hook leaning into microphone / 135 WPM]",
        pronunciation: "Carl Jung -> [Karl YOONG]",
        visual: "Mirror effect: presenter looking at reflection that doesn't blink.",
        ost: "THE PERSON WHO TRIGGERS YOU IS A MIRROR 🪞👁️",
        script: "The person in your life who drives you completely insane? Carl Jung [Karl YOONG] theorized they are actually a psychological mirror."
      },
      {
        part: "THE CORE CONFLICT (4 - 18s)",
        deliveryCue: "[Upbeat acoustic rhythm enters / sarcastic, conspiratorial cadence / 130 WPM]",
        pronunciation: null,
        visual: "Montage of eye-rolling in an office meeting or scrolling social media in disdain.",
        ost: "Why Does That One Co-Worker Trigger You? 😤",
        script: "Notice how someone being overly loud, selfish, or seeking attention doesn't just annoy you—it triggers visceral rage. You talk about them for hours. You pick apart their flaws. But ask yourself: why does their behavior have such extreme power over your emotional state?"
      },
      {
        part: "THE NEURO/PSYCH MECHANISM (18 - 40s)",
        deliveryCue: "[Dark ambient pad swells / deep clinical cadence / 122 WPM]",
        pronunciation: "Amygdala -> [uh-MIG-duh-luh]",
        visual: "3D animation of a silhouette holding a glowing repressed box under the surface.",
        ost: "Carl Jung • Shadow Projection Mechanism",
        script: "In psychodynamic theory, this is called Shadow Projection. Jung argued that we exile parts of ourselves we were told were unacceptable—our ambition, our anger, our need to be seen. When we spot that exact repressed trait in someone else, our unconscious projection attacks them to keep our own disowned shadow buried."
      },
      {
        part: "THE ANTIDOTE & CTA (40 - 50s)",
        deliveryCue: "[Beat cuts to silence / piercing, empathetic gaze into lens / 110 WPM]",
        pronunciation: null,
        visual: "Presenter holds up small mirror or points directly at lens.",
        ost: "THE SHADOW INQUIRY: 'WHAT AM I DENYING?'",
        script: "The rule: irritation is an unread diagnostic report. Ask: 'What part of myself did I bury that this person has the audacity to express?' Comment the trait that triggers you most, and hit follow."
      }
    ];

    return {
      title: "Voiceover Script: Why What You Hate in Others is Actually You (Shadow Projection)",
      duration: "45-50 seconds",
      targetPlatform: "TikTok / Instagram Reels / YouTube Shorts",
      metrics: computeReelMetrics(sections),
      sections
    };
  }

  // Flagship 4: Anchoring Effect
  if (topic.id === 'anchoring-effect') {
    const sections = [
      {
        part: "HOOK (0 - 4s)",
        deliveryCue: "[Cash register ding / fast snappy punchline / direct camera point / 140 WPM]",
        pronunciation: "Heuristic -> [hyoo-RISS-tik]",
        visual: "Presenter holds up a price tag showing $1,200 crossed out to $399 with neon strike-through.",
        ost: "YOU NEVER ACTUALLY CHOSE THAT PRICE 🏷️💸",
        script: "You have never bought anything at its actual value in your entire life. Here is the mental trap stores use on you every single day."
      },
      {
        part: "THE CORE CONFLICT (4 - 18s)",
        deliveryCue: "[Upbeat funk groove / lively storytelling delivery / 132 WPM]",
        pronunciation: null,
        visual: "Restaurant menu close-up showing a $120 dry-aged steak at the very top.",
        ost: "The $120 Steak Trap 🥩🍽️",
        script: "You sit down at a high-end restaurant. At the top of the menu is a $120 Tomahawk steak. You scoff and say, 'Who would pay that?' Then you order the $48 pasta and feel proud of your self-discipline. Congratulations: you just took the bait."
      },
      {
        part: "THE NEURO/PSYCH MECHANISM (18 - 40s)",
        deliveryCue: "[Synth pulse / authoritative, rhythmic breakdown / 125 WPM]",
        pronunciation: "Daniel Kahneman -> [DAN-yul KAH-nuh-mun] • Amos Tversky -> [AY-mus TVUR-skee] • Heuristic -> [hyoo-RISS-tik]",
        visual: "Animated mental scale tipping heavily to the first number entered into memory.",
        ost: "Kahneman & Tversky (1974) • Anchoring Heuristic",
        script: "Nobel laureates Daniel Kahneman [DAN-yul KAH-nuh-mun] and Amos Tversky [AY-mus TVUR-skee] named this the Anchoring Heuristic [hyoo-RISS-tik]. The human brain has zero ability to measure absolute value in a vacuum. It latches onto the very first number introduced into the room, and measures everything relative to that anchor. The $120 steak was never meant to sell—it was an anchor to make $48 look reasonable."
      },
      {
        part: "THE ANTIDOTE & CTA (40 - 50s)",
        deliveryCue: "[Beat drop to sub-bass / slow, conspiratorial smile / 115 WPM]",
        pronunciation: null,
        visual: "Presenter winks and gestures to swipe left/bookmark.",
        ost: "DISARM THE ANCHOR: 'WHAT IS THE STANDALONE UTILITY?'",
        script: "Before buying anything on sale, ask: 'If this was full price with no discounts shown, would I hand over this exact cash today?' Save this before your next shopping trip, and follow for daily cognitive armor."
      }
    ];

    return {
      title: "Voiceover Script: How Supermarkets & Menus Steal Your Money (Anchoring Effect)",
      duration: "45-52 seconds",
      targetPlatform: "TikTok / Instagram Reels / YouTube Shorts",
      metrics: computeReelMetrics(sections),
      sections
    };
  }

  // Dynamic Generator for all other topics (50+ topics supported with full 4-step voiceover production specs)
  const phoneticGuide = lookupPhoneticsForTopic(topic) || `${topic.branch} -> [${topic.branch.split(' ')[0].toLowerCase()}]`;
  const toneHeaders = {
    viral: { 
      hook: `Your brain has been lying to you about ${topic.title.toLowerCase()}, and it is secretly dictating your daily choices. Here is what is actually going on.`,
      cue: "[Hard sub-bass riser / lean in close to lens / rapid delivery / 138 WPM]",
      cta: "Hit save so you catch yourself next time, and follow for daily mental frameworks."
    },
    educational: { 
      hook: `In behavioral neuroscience, ${topic.title} explains one of the most counterintuitive flaws in human decision-making.`,
      cue: "[Clean presenter framing / authoritative, measured cadence / 125 WPM]",
      cta: "Bookmark this framework for your cognitive toolkit, and share with someone who loves psychology."
    },
    storytelling: { 
      hook: `Imagine thinking you made a completely rational choice, only to realize your subconscious brain set a trap for you hours ago...`,
      cue: "[Soft ambient synth / cinematic storytelling whisper / 128 WPM]",
      cta: "Have you noticed this pattern in your own life? Tell me in the comments below."
    }
  };

  const selectedTone = toneHeaders[tone] || toneHeaders.viral;

  const dynamicSections = [
    {
      part: "HOOK (0 - 4s)",
      deliveryCue: selectedTone.cue,
      pronunciation: `${topic.title} -> [${topic.title.replace(/\s+/g, '-').toLowerCase()}]`,
      visual: `High-energy presenter opening, punchy kinetic typography overlay: '${topic.title.toUpperCase()}' with glitch transition.`,
      ost: `THE UNTOLD TRUTH ABOUT ${topic.title.toUpperCase()} 🚨`,
      script: selectedTone.hook
    },
    {
      part: "THE CORE CONFLICT (4 - 18s)",
      deliveryCue: "[Beat drops / conversational, relatable cadence / slight ironic pause / 130 WPM]",
      pronunciation: null,
      visual: `Real-world B-roll showing relatable scenario illustrating: '${topic.teaser}'.`,
      ost: `"${topic.teaser}"`,
      script: `Here is the trap: "${topic.teaser}" Most people go through their entire day completely blind to this, assuming their gut instincts are always acting in their best interest.`
    },
    {
      part: "THE NEURO/PSYCH MECHANISM (18 - 40s)",
      deliveryCue: "[Music thins to steady pulsing synth / authoritative, rhythmic breakdown / 125 WPM]",
      pronunciation: phoneticGuide,
      visual: `Clean motion graphic animation illustrating the core psychological mechanism of ${topic.branch}.`,
      ost: `${topic.branch} • Under The Hood`,
      script: `Rooted in ${topic.branch}, your nervous system evolved shortcuts to conserve cognitive energy. When triggered, your subconscious brain reaches a conclusion in milliseconds—before your conscious prefrontal cortex [pree-FRUN-tul KOR-teks] can even evaluate the facts.`
    },
    {
      part: "THE ANTIDOTE & CTA (40 - 50s)",
      deliveryCue: "[Beat cuts to silence / calm, intimate direct address / 115 WPM]",
      pronunciation: null,
      visual: "Close-up direct eye contact, presenter displays 1 actionable takeaway graphic.",
      ost: "THE COUNTER-MOVE 🛡️",
      script: `The counter-move? Pause the instant you feel this impulse. Ask what outcome you are actually defending. ${selectedTone.cta}`
    }
  ];

  return {
    title: `Voiceover Script: ${topic.title} Deconstructed`,
    duration: "45-55 seconds",
    targetPlatform: "TikTok / Instagram Reels / YouTube Shorts",
    metrics: computeReelMetrics(dynamicSections),
    sections: dynamicSections
  };
}

// 2. CAROUSEL POST GENERATOR (5 SLIDES)
function generateCarouselPost(topic, tone) {
  const _toneLabels = {
    viral: "🔥 3 Ways Your Mind Tricks You (Slide by Slide)",
    educational: "📘 Framework Deep Dive: The Science of Decision Making",
    storytelling: "📖 A 60-Second Story on Why We Self-Sabotage"
  };

  return {
    title: `Carousel Post: ${topic.title} (5-Slide Breakdown)`,
    formatName: "LinkedIn & Instagram 1080x1350 Carousel Deck",
    metrics: { slides: 5 },
    slides: [
      {
        slideNumber: 1,
        title: "Slide 1: The Cover Hook",
        layout: "High-contrast dark background with bold center headline",
        headline: tone === 'viral' 
          ? `Why You Defend Bad Decisions Even When You Know You're Wrong`
          : `The Cognitive Architecture of ${topic.title}`,
        subtitle: `"${topic.teaser}"`,
        visualPrompt: "Large glowing brain illustration with subtle arrows pointing to swipe right (👉 Swipe)."
      },
      {
        slideNumber: 2,
        title: "Slide 2: The Relatable Dilemma",
        layout: "Split comparison layout (Expectation vs Reality)",
        headline: "The Everyday Situation",
        subtitle: "Notice how often this happens in real life:",
        visualPrompt: "Box 1: What we believe we are doing (Objective, logical choices). Box 2: What our brain actually does (Emotional choice + post-hoc rationalization)."
      },
      {
        slideNumber: 3,
        title: "Slide 3: The Mechanism Under the Hood",
        layout: "Diagram with 3 key pillars",
        headline: "The Science: What's Really Happening",
        subtitle: `Rooted in ${topic.branch}`,
        visualPrompt: "Flowchart showing: Trigger Event ➔ Internal Friction ➔ Subconscious Bias ➔ Manufactured Logic."
      },
      {
        slideNumber: 4,
        title: "Slide 4: The 3-Step Antidote",
        layout: "Numbered checklist with high-contrast badge icons",
        headline: "How to Override the Bias",
        subtitle: "Apply this 3-step cognitive filter:",
        visualPrompt: "Step 1: Notice the emotional discomfort. Step 2: Separate identity from the event. Step 3: Audit evidence before defending."
      },
      {
        slideNumber: 5,
        title: "Slide 5: Summary & Save CTA",
        layout: "Summary card with bookmark icon and profile signature",
        headline: "Save This For Your Next Big Decision",
        subtitle: `"Self-awareness isn't having no biases; it's catching yourself in the act."`,
        visualPrompt: "Prominent bookmark icon: 'Save this post to review before important life or career decisions. Share with a friend who loves psychology.'"
      }
    ]
  };
}

// 3. BLOG / LONG-FORM POST GENERATOR
function generateBlogPost(topic, tone) {
  const introHook = tone === 'viral'
    ? "We like to think of ourselves as calculating, objective observers of reality. But modern cognitive science reveals an uncomfortable truth: our brains are lawyers, not scientists."
    : tone === 'storytelling'
    ? "Late on a rainy Thursday night, Elena sat in the blue glare of her laptop screen. The email subject read 'Order Confirmed: $380.00'. And with that single click, a fascinating psychological drama began to unfold."
    : "Human decision-making is characterized by a persistent pursuit of internal equilibrium. When beliefs and empirical realities diverge, cognitive systems deploy sophisticated defense mechanisms.";

  const sections = [
    {
      heading: "Introduction: The Great Mental Fiction",
      content: `${introHook}\n\n${topic.teaser} In the realm of ${topic.branch}, few phenomena demonstrate the fragility of human rationalization as clearly as ${topic.title}.`
    },
    {
      heading: "1. The Anatomy of the Cognitive Friction",
      content: `When our behavior directly contradicts our internal narrative, our brain registers an acute threat state. The dorsal anterior cingulate cortex—the same neurological region that registers physical pain—ignites with alarm.\n\nFaced with this discomfort, our psychology has two choices: endure the painful realization that our self-image was flawed, or rewrite the narrative. Almost without exception, the ego chooses revision.`
    },
    {
      heading: "2. Why High Performers Fall for It the Most",
      content: `Intriguingly, intelligence offers no immunity. In fact, research demonstrates that highly articulate individuals are frequently MORE adept at rationalization, because their superior verbal and analytical skills allow them to construct more convincing post-hoc justifications.`
    },
    {
      heading: "3. The 3-Question Cognitive Audit",
      content: `To build genuine mental clarity, practice asking yourself these three audit questions whenever you feel the urge to over-explain a choice:\n\n• Am I evaluating the facts, or am I defending my ego?\n• If my closest friend took this exact action, would I find their excuses reasonable?\n• What is the uncomfortable truth I am currently avoiding?`
    },
    {
      heading: "Conclusion: Cultivating Intellectual Humility",
      content: `Mastery over human psychology begins not by pretending we are immune to bias, but by developing the humility to catch our rationalizations in real time. When you learn to spot ${topic.title}, you stop being a passenger to your instincts and begin thinking clearly.`
    }
  ];

  const fullText = sections.map((s) => `${s.heading} ${s.content}`).join(' ');
  const wordCount = fullText.trim().split(/\s+/).filter(Boolean).length;
  const readMinutes = Math.max(1, Math.ceil(wordCount / 200));
  const readTimeStr = `${readMinutes} min read`;

  return {
    title: `The Hidden Architecture of ${topic.title}: Why We Think What We Think`,
    readingTime: readTimeStr,
    author: "PsycheGrow",
    tags: [topic.branch, "Cognitive Science", "Mental Models", "Creator Economy"],
    metrics: { wordCount, readTime: readTimeStr },
    sections
  };
}

