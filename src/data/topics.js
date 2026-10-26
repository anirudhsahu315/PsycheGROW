// Comprehensive Curated Psychology Repository
// Categorized with Muted Pastel Aesthetics & Low-Cognitive-Load Metadata

import { PHILOSOPHY_EXPANSION_TOPICS } from './philosophyTopics.js';
import { CURATED_TOPIC_BANK } from './topicBank.js';

export const PSYCHOLOGY_CATEGORIES = [
  // ==========================================
  // I. PSYCHOLOGICAL SCIENCES (PSYCHE)
  // ==========================================
  {
    id: "cognitive",
    name: "Cognitive Psychology",
    shortName: "Cognitive",
    domain: "psychology",
    tradition: "Cognitive Science & Heuristics",
    tagline: "Mental models, perception biases & reasoning",
    description: "Explore how the human mind encodes memories, processes dilemmas, and manufactures logic backward to protect core identity.",
    icon: "Brain",
    accent: "#7A6F91",
    pastel: {
      bg: "bg-[#F2EFF6]",
      text: "text-[#655A7B]",
      border: "border-[#DDD8E6]",
      badgeBg: "bg-[#EAE4F2]",
      hoverBg: "hover:bg-[#EAE4F2]/70",
      dot: "bg-[#7A6F91]",
    },
    topicCount: 5,
  },
  {
    id: "behavioral",
    name: "Behavioral Psychology",
    shortName: "Behavioral",
    domain: "psychology",
    tradition: "Conditioning & Action Loops",
    tagline: "Habit architecture, cues & behavioral reinforcement",
    description: "Analyze the neurological feedback loops between sensory cues, dopamine anticipation, repetition, and automated long-term habits.",
    icon: "Compass",
    accent: "#647D61",
    pastel: {
      bg: "bg-[#EFF4EE]",
      text: "text-[#52684F]",
      border: "border-[#D2E0D0]",
      badgeBg: "bg-[#E3ECE1]",
      hoverBg: "hover:bg-[#E3ECE1]/70",
      dot: "bg-[#647D61]",
    },
    topicCount: 5,
  },
  {
    id: "social",
    name: "Social Psychology",
    shortName: "Social",
    domain: "psychology",
    tradition: "Interpersonal & Group Dynamics",
    tagline: "Influence, conformity & tribal status",
    description: "Understand the invisible gravitational forces that drive group conformity, first impressions, tribal identity, and collective behavior.",
    icon: "Users",
    accent: "#A8634F",
    pastel: {
      bg: "bg-[#F9F0EC]",
      text: "text-[#8F5543]",
      border: "border-[#EAD6CF]",
      badgeBg: "bg-[#F3E2DB]",
      hoverBg: "hover:bg-[#F3E2DB]/70",
      dot: "bg-[#A8634F]",
    },
    topicCount: 5,
  },
  {
    id: "psychoanalytic",
    name: "Psychoanalytic & Depth",
    shortName: "Psychoanalytic",
    domain: "psychology",
    tradition: "Depth Psychology & The Unconscious",
    tagline: "The shadow, defense mechanisms & unconscious drives",
    description: "Investigate how repressed trauma, archetypal projections, ego defenses, and subcortical drives surreptitiously steer conscious choices.",
    icon: "Eye",
    accent: "#5C527F",
    pastel: {
      bg: "bg-[#F3F0F7]",
      text: "text-[#584968]",
      border: "border-[#DFD6E8]",
      badgeBg: "bg-[#EAE2F3]",
      hoverBg: "hover:bg-[#EAE2F3]/70",
      dot: "bg-[#5C527F]",
    },
    topicCount: 4,
  },
  {
    id: "clinical",
    name: "Clinical & Wellness",
    shortName: "Clinical & Wellness",
    domain: "psychology",
    tradition: "Emotional Regulation & Resilience",
    tagline: "Stress management, panic alarms & cognitive resilience",
    description: "Investigate emotional self-regulation, cognitive reframing techniques, panic mechanisms, and sustainable psychological health.",
    icon: "HeartHandshake",
    accent: "#596E82",
    pastel: {
      bg: "bg-[#EFF3F6]",
      text: "text-[#475767]",
      border: "border-[#D5E0E7]",
      badgeBg: "bg-[#E1EAF0]",
      hoverBg: "hover:bg-[#E1EAF0]/70",
      dot: "bg-[#596E82]",
    },
    topicCount: 5,
  },
  {
    id: "consumer",
    name: "Consumer Psychology",
    shortName: "Consumer",
    domain: "psychology",
    tradition: "Decision Architecture & Valuation",
    tagline: "Pricing heuristics, perceived value & choice architecture",
    description: "Decode the unconscious heuristics governing purchase decisions, perceived value, artificial scarcity, and choice fatigue.",
    icon: "Sparkles",
    accent: "#967C46",
    pastel: {
      bg: "bg-[#F8F5EC]",
      text: "text-[#7D6638]",
      border: "border-[#E7DEC9]",
      badgeBg: "bg-[#F0E8D4]",
      hoverBg: "hover:bg-[#F0E8D4]/70",
      dot: "bg-[#967C46]",
    },
    topicCount: 5,
  },

  // ==========================================
  // II. PHILOSOPHICAL SCHOOLS (SOPHIA)
  // ==========================================
  {
    id: "stoicism",
    name: "Stoicism & Hellenistic",
    shortName: "Stoicism",
    domain: "philosophy",
    tradition: "Hellenistic Philosophy",
    tagline: "The dichotomy of control, Amor Fati & tranquil resilience",
    description: "Master the art of distinguishing what is within your voluntary power from what is not, disarming anxiety through rigorous self-command.",
    icon: "Scroll",
    accent: "#8C7355",
    pastel: {
      bg: "bg-[#F7F4EE]",
      text: "text-[#6E593E]",
      border: "border-[#E5DDD0]",
      badgeBg: "bg-[#EDE5D6]",
      hoverBg: "hover:bg-[#EDE5D6]/70",
      dot: "bg-[#8C7355]",
    },
    topicCount: 4,
  },
  {
    id: "existentialism",
    name: "Existentialism",
    shortName: "Existentialism",
    domain: "philosophy",
    tradition: "Existential Phenomenology",
    tagline: "Radical freedom, the Absurd & authentic meaning",
    description: "Confront the anxiety of absolute freedom, transcend bad faith, and forge self-authored purpose in an indifferent cosmos.",
    icon: "Flame",
    accent: "#9B5D55",
    pastel: {
      bg: "bg-[#F8F2F0]",
      text: "text-[#7E463E]",
      border: "border-[#EBD9D5]",
      badgeBg: "bg-[#F3E3DF]",
      hoverBg: "hover:bg-[#F3E3DF]/70",
      dot: "bg-[#9B5D55]",
    },
    topicCount: 4,
  },
  {
    id: "epistemology",
    name: "Epistemology",
    shortName: "Epistemology",
    domain: "philosophy",
    tradition: "Theory of Knowledge & Reason",
    tagline: "The limits of knowledge, skepticism & Plato's Cave",
    description: "Examine how belief differs from truth, escape cognitive shadows, and cultivate ruthless philosophical skepticism.",
    icon: "Lightbulb",
    accent: "#4F6D7A",
    pastel: {
      bg: "bg-[#F0F4F6]",
      text: "text-[#3D5763]",
      border: "border-[#D6E2E7]",
      badgeBg: "bg-[#E1ECF0]",
      hoverBg: "hover:bg-[#E1ECF0]/70",
      dot: "bg-[#4F6D7A]",
    },
    topicCount: 4,
  },
  {
    id: "ethics",
    name: "Moral Philosophy & Ethics",
    shortName: "Ethics",
    domain: "philosophy",
    tradition: "Normative & Applied Ethics",
    tagline: "Virtue ethics, moral dilemmas & utilitarian calculations",
    description: "Investigate what constitutes the Good, dissect painful trade-offs (The Trolley Problem), and align actions with universal duty.",
    icon: "Scale",
    accent: "#60735E",
    pastel: {
      bg: "bg-[#F1F5F0]",
      text: "text-[#4A5D48]",
      border: "border-[#D6E3D4]",
      badgeBg: "bg-[#E2EDE0]",
      hoverBg: "hover:bg-[#E2EDE0]/70",
      dot: "bg-[#60735E]",
    },
    topicCount: 4,
  },
];

export const PSYCHOLOGY_TOPICS = [
  // ==========================================
  // 1. COGNITIVE PSYCHOLOGY (5 Topics)
  // ==========================================
  {
    id: "cognitive-dissonance",
    title: "Cognitive Dissonance",
    branch: "Cognitive Psychology",
    categoryKey: "cognitive",
    branchColor: {
      bg: "bg-[#F2EFF6]",
      text: "text-[#655A7B]",
      border: "border-[#DDD8E6]",
      accent: "#7A6F91",
      badge: "bg-[#EAE4F2]",
    },
    icon: "Brain",
    teaser: "Why our brains rewrite reality rather than admit we made an irrational choice.",
    readTime: "5 min read",
    difficulty: "Intermediate",
    studyTakeaways: [
      "Pioneered by Leon Festinger in his 1957 landmark research",
      "Discomfort activates the dorsal anterior cingulate cortex",
      "Most frequent catalyst: moral trade-offs and buyer's remorse",
    ],
    scenarioHook: {
      setting: "Late Night Online Purchase",
      character: "Elena, Minimalist Designer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Elena prides herself on living with extreme discipline and financial minimalism. Yet at 1:30 AM after a grueling deadline, she impulsively orders a $380 luxury espresso maker.",
      theFriction: "The instant the receipt arrives in her inbox, an intense wave of guilt hits. Her identity ('I am a rational minimalist') collides with her behavior ('I just spent $380 on unnecessary clutter').",
      theReaction: "Instead of canceling the order, her mind constructs furious logic: 'Espresso at a cafe costs $6.50. In 58 days it pays for itself. This is actually a wise investment in morning productivity!'",
    },
    socraticQuiz: {
      question: "Why did Elena's brain invent retroactive financial math rather than simply cancel the order?",
      options: [
        {
          id: "opt-1",
          text: "Her brain found it emotionally less costly to distort facts than to endure the pain of puncturing her self-image as a disciplined minimalist.",
          isCorrect: true,
          mechanism: "When actions clash with core identity, the nervous system registers acute dissonance. It is neurologically cheaper to construct retroactive logic than to admit an ego-deflating mistake.",
        },
        {
          id: "opt-2",
          text: "She conducted a sound cost-benefit calculation and confirmed luxury espresso appliances are universally profitable.",
          isCorrect: false,
          mechanism: "The calculation occurred only AFTER the purchase. Cognitive dissonance forces humans to build rationalizations backwards from emotional choices.",
        },
        {
          id: "opt-3",
          text: "She experienced temporary memory loss regarding her commitment to minimalist principles.",
          isCorrect: false,
          mechanism: "Elena remembered her principles perfectly—her awareness of minimalism is precisely what ignited the internal friction.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "The Psychological Immune System",
      corePrinciple: "Cognitive Dissonance represents internal friction when beliefs and actions contradict each other. Because the mind craves harmony, it alters beliefs to justify past deeds.",
      mentalModelFormula: "Core Identity ('I am rational') + Contradictory Action ('I acted foolishly') ➔ Dissonance ➔ Rationalization ('It was actually smart')",
      everydayRule: "When you notice yourself passionately over-justifying a decision to friends, pause: you are likely trying to convince yourself, not them.",
    },
    contentHooks: [
      { format: "Short Reel / Insight", hook: "Why smart people defend bad choices (and how your brain gaslights you)." },
      { format: "Carousel Slide", hook: "The 3 rationalization traps your ego uses to dodge accountability." },
    ],
    scriptTemplate: "Notice how the second you make an impulsive decision, your mind invents 3 logical reasons why it was actually a stroke of genius? Here is the neuroscience behind Cognitive Dissonance...",
    evidenceStatus: "well-supported",
    references: [
      {
        title: "Cognitive consequences of forced compliance",
        authors: "Leon Festinger & J. Merrill Carlsmith",
        year: 1959,
        url: "https://pubmed.ncbi.nlm.nih.gov/13645856/",
        note: "Foundational forced-compliance experiment showing attitude change following contradictory action."
      },
      {
        title: "Neural activity predicts attitude change in cognitive dissonance",
        authors: "Vincent van Veen, Michael K. Krug, Jonathan W. Schooler, & Cameron S. Carter",
        year: 2009,
        url: "https://pubmed.ncbi.nlm.nih.gov/19752198/",
        note: "fMRI study confirming dorsal anterior cingulate cortex and anterior insula activation during cognitive dissonance."
      }
    ]
  },
  {
    id: "anchoring-effect",
    title: "The Anchoring Effect",
    branch: "Cognitive Psychology",
    categoryKey: "cognitive",
    branchColor: {
      bg: "bg-[#F2EFF6]",
      text: "text-[#655A7B]",
      border: "border-[#DDD8E6]",
      accent: "#7A6F91",
      badge: "bg-[#EAE4F2]",
    },
    icon: "Scale",
    teaser: "How the very first number you hear permanently warps your judgment of value.",
    readTime: "4 min read",
    difficulty: "Beginner",
    studyTakeaways: [
      "Documented by Amos Tversky and Daniel Kahneman in 1974",
      "Subconscious adjustments from the initial anchor are systematically insufficient",
      "Appears in salary negotiations, criminal sentencing, and retail pricing",
    ],
    scenarioHook: {
      setting: "Commercial Salary Negotiation",
      character: "David, Software Architect",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
      story: "David knew his market rate was easily $160,000. In the initial recruiter screening, the hiring manager offhandedly said: 'Our typical band starts around $115,000, though we have slight flexibility.'",
      theFriction: "Even though David possessed concrete industry compensation reports disproving that number, his subsequent counteroffer felt pinned to that low starting reference.",
      theReaction: "Instead of boldly asserting $165,000, David timidly asked for $130,000, feeling grateful when they settled on $126,000—unknowingly losing $34,000 a year to a single verbal anchor.",
    },
    socraticQuiz: {
      question: "Why did David counteroffer at $130,000 instead of his planned $160,000?",
      options: [
        {
          id: "opt-1",
          text: "The initial $115k number acted as a cognitive gravitational anchor, pulling his mental scale of 'reasonable counteroffers' drastically downward.",
          isCorrect: true,
          mechanism: "Anchoring creates an unconscious reference point. Even when subjects know an anchor is arbitrary, adjustments away from it are almost always incomplete and timid.",
        },
        {
          id: "opt-2",
          text: "David lacked technical experience and agreed with the recruiter's assessment.",
          isCorrect: false,
          mechanism: "David had verified market data showing his skills commanded $160,000; cognitive anchoring overrode his rational preparation.",
        },
        {
          id: "opt-3",
          text: "Anchoring only affects amateur shoppers, not trained professionals in career negotiations.",
          isCorrect: false,
          mechanism: "Extensive studies show experienced real estate appraisers and federal judges are swayed just as heavily by arbitrary anchors.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "The Gravity of the First Number",
      corePrinciple: "When estimating an unknown quantity, humans start from an initial presented figure (the anchor) and make small adjustments. We never adjust far enough.",
      mentalModelFormula: "Initial Reference Point ➔ Subconscious Boundary ➔ Insufficient Adjustment ➔ Distorted Consensus",
      everydayRule: "In negotiations, either set the anchor first with a well-researched, assertive figure, or explicitly wipe away their anchor before responding.",
    },
    contentHooks: [
      { format: "Short Reel", hook: "The 10-second negotiating mistake that costs professionals $30,000 a year." },
      { format: "Framework Guide", hook: "How luxury brands use $5,000 coats to make $350 wallets look like bargains." },
    ],
    scriptTemplate: "If I ask whether Gandhi lived past age 114, you will guess an older age than if I asked if he died before 35. That is the Anchoring Effect...",
    evidenceStatus: "well-supported",
    references: [
      {
        title: "Judgment under uncertainty: Heuristics and biases",
        authors: "Amos Tversky & Daniel Kahneman",
        year: 1974,
        url: "https://pubmed.ncbi.nlm.nih.gov/17835457/",
        note: "Landmark paper outlining anchoring and adjustment alongside availability and representativeness heuristics."
      },
      {
        title: "A literature review of the anchoring effect",
        authors: "Adrian Furnham & Hua Chu Boo",
        year: 2011,
        url: "https://doi.org/10.1016/j.socec.2010.10.008",
        note: "Comprehensive review of anchoring across experimental, legal, and economic negotiation contexts."
      }
    ]
  },
  {
    id: "confirmation-bias",
    title: "Confirmation Bias",
    branch: "Cognitive Psychology",
    categoryKey: "cognitive",
    branchColor: {
      bg: "bg-[#F2EFF6]",
      text: "text-[#655A7B]",
      border: "border-[#DDD8E6]",
      accent: "#7A6F91",
      badge: "bg-[#EAE4F2]",
    },
    icon: "Eye",
    teaser: "Why we treat supporting evidence like gold and contradicting evidence like an insult.",
    readTime: "6 min read",
    difficulty: "Intermediate",
    studyTakeaways: [
      "Formally identified by Peter Wason in his 1960 2-4-6 hypothesis testing task",
      "Leads individuals to search, interpret, and recall information selectively",
      "Amplified in social feeds by algorithmic echo chambers",
    ],
    scenarioHook: {
      setting: "Cryptocurrency Investment Portfolio",
      character: "Sam, Angel Investor",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Sam invested $25,000 into a nascent fintech token based on a friend's whitepaper summary.",
      theFriction: "Over three months, two prominent audits uncovered security backdoors, and three senior engineers resigned.",
      theReaction: "Sam dismissed the audits as 'FUD planted by rival venture funds' while spending hours in Telegram channels celebrating anonymous bullish price memes.",
    },
    socraticQuiz: {
      question: "What drove Sam to dismiss verified security audits while trusting anonymous Telegram comments?",
      options: [
        {
          id: "opt-1",
          text: "Confirmation bias prompted his brain to hyper-value any signal affirming his investment while dismissing disconfirming facts as hostile noise.",
          isCorrect: true,
          mechanism: "The human mind naturally seeks cognitive comfort. When invested in a hypothesis, the brain screens out refuting evidence to protect prior commitments.",
        },
        {
          id: "opt-2",
          text: "The security audits were proven to be scientifically inaccurate.",
          isCorrect: false,
          mechanism: "The audits were legitimate; Sam's perception was selectively filtered to shield his financial self-esteem.",
        },
        {
          id: "opt-3",
          text: "He possessed insider knowledge that superseded technical security findings.",
          isCorrect: false,
          mechanism: "Sam was relying on anonymous community speculation that echoed what he desperately hoped would happen.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "The Brain as a Defensive Lawyer",
      corePrinciple: "We believe we evaluate evidence like impartial judges. In truth, our cognitive apparatus operates like a hired defense attorney, gathering only supportive briefs.",
      mentalModelFormula: "Pre-existing Belief ➔ Selective Search ➔ Biased Interpretation ➔ Reinforced Certainty",
      everydayRule: "To test your convictions, actively ask: 'What specific evidence would convince me that my current view is completely mistaken?'",
    },
    contentHooks: [
      { format: "Insight Hook", hook: "Why smart people can look at the exact same data and come to opposite conclusions." },
    ],
    scriptTemplate: "Your brain does not want the truth. It wants to be right. Here is why Confirmation Bias makes intelligent people look blind...",
    evidenceStatus: "well-supported",
    references: [
      {
        title: "On the failure to eliminate hypotheses in a conceptual task",
        authors: "Peter C. Wason",
        year: 1960,
        url: "https://doi.org/10.1080/17470216008416717",
        note: "Classic 2-4-6 hypothesis testing experiment establishing confirmation seeking in rule discovery."
      },
      {
        title: "Confirmation bias: A ubiquitous phenomenon in many guises",
        authors: "Raymond S. Nickerson",
        year: 1998,
        url: "https://doi.org/10.1037/1089-2680.2.2.175",
        note: "Authoritative review of confirmation bias mechanisms across reasoning, science, and policy."
      }
    ]
  },
  {
    id: "availability-heuristic",
    title: "Availability Heuristic",
    branch: "Cognitive Psychology",
    categoryKey: "cognitive",
    branchColor: {
      bg: "bg-[#F2EFF6]",
      text: "text-[#655A7B]",
      border: "border-[#DDD8E6]",
      accent: "#7A6F91",
      badge: "bg-[#EAE4F2]",
    },
    icon: "Lightbulb",
    teaser: "How easily remembered events trick us into wildly miscalculating actual risk.",
    readTime: "5 min read",
    difficulty: "Beginner",
    studyTakeaways: [
      "Demonstrated by Tversky & Kahneman in 1973",
      "Vivid, sensational, and emotional memories are retrieved fastest",
      "Explains irrational dread of plane crashes vs calm acceptance of car travel",
    ],
    scenarioHook: {
      setting: "Summer Vacation Travel Planning",
      character: "Clara, High School Educator",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Clara spent 4 weeks dreading her 2-hour flight to Denver after seeing news coverage of airplane engine turbulence.",
      theFriction: "To avoid the flight, she opted to drive 18 hours through thunderstorm territory along interstate highways.",
      theReaction: "Statistically, the drive was 65 times more hazardous than the flight. But because plane crashes feature vivid, fiery news reels, her brain labeled flying as intolerable risk.",
    },
    socraticQuiz: {
      question: "Why did Clara consider an 18-hour highway road trip safer than a commercial flight?",
      options: [
        {
          id: "opt-1",
          text: "Airplane accidents produce vivid mental imagery that is retrieved effortlessly, causing the subconscious to equate ease of recall with statistical likelihood.",
          isCorrect: true,
          mechanism: "The Availability Heuristic substitutes 'How easy is it for me to picture this happening?' for 'What is the mathematical probability?'",
        },
        {
          id: "opt-2",
          text: "Driving is universally proven to be the safest mode of long-distance passenger transit.",
          isCorrect: false,
          mechanism: "Highway driving carries far higher fatality rates per passenger mile than commercial aviation.",
        },
        {
          id: "opt-3",
          text: "She conducted a formal statistical risk assessment across both transport modalities.",
          isCorrect: false,
          mechanism: "Emotional vividness bypassed mathematical analysis entirely.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "The Vividness Trap",
      corePrinciple: "If an example comes to mind quickly, the brain assumes the event is common. Media algorithms exploit this by flooding feeds with rare, hyper-sensational stories.",
      mentalModelFormula: "Sensational Event ➔ Intense Visual Memory ➔ Instant Recall ➔ Inflated Perceived Probability",
      everydayRule: "When feeling dread about a rare risk, check the baseline base rate before altering your life plans.",
    },
    contentHooks: [
      { format: "Short Video", hook: "Why you are terrified of the wrong things (The Availability Heuristic)." },
    ],
    scriptTemplate: "If you can recall it in 2 seconds, your brain assumes it happens all the time. Here is how news feeds hijack your risk calculator...",
    evidenceStatus: "well-supported",
    references: [
      {
        title: "Availability: A heuristic for judging frequency and probability",
        authors: "Amos Tversky & Daniel Kahneman",
        year: 1973,
        url: "https://doi.org/10.1016/0010-0285(73)90033-9",
        note: "Original experiments demonstrating cognitive availability as a frequency and risk estimator."
      },
      {
        title: "Rating the risks",
        authors: "Paul Slovic, Baruch Fischhoff, & Sarah Lichtenstein",
        year: 1979,
        url: "https://doi.org/10.1080/00139157.1979.9933091",
        note: "Empirical study showing public risk perceptions diverge sharply from actuarial statistics due to media vividness."
      }
    ]
  },
  {
    id: "framing-effect",
    title: "The Framing Effect",
    branch: "Cognitive Psychology",
    categoryKey: "cognitive",
    branchColor: {
      bg: "bg-[#F2EFF6]",
      text: "text-[#655A7B]",
      border: "border-[#DDD8E6]",
      accent: "#7A6F91",
      badge: "bg-[#EAE4F2]",
    },
    icon: "Layers",
    teaser: "Why 90% lean beef sounds appetizing while 10% fat beef triggers disgust.",
    readTime: "5 min read",
    difficulty: "Beginner",
    studyTakeaways: [
      "Key pillar of Prospect Theory by Kahneman & Tversky (1981)",
      "People are risk-averse when outcomes are framed as gains, and risk-seeking when framed as losses",
      "Crucial in medical consent, public policy, and marketing copy",
    ],
    scenarioHook: {
      setting: "Surgical Consultation Room",
      character: "Arthur, Retired Architect",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Arthur met with two surgeons regarding a spinal procedure. Surgeon A stated: 'This surgery carries a 90% one-year survival rate.'",
      theFriction: "Surgeon B described the exact same clinical data by saying: 'There is a 10% mortality risk within the first year.'",
      theReaction: "Arthur felt immensely comforted by Surgeon A and scheduled the operation, but left Surgeon B's office feeling anxious and frightened.",
    },
    socraticQuiz: {
      question: "Why did Arthur accept Surgeon A's recommendation while feeling terrified by Surgeon B, when both shared identical data?",
      options: [
        {
          id: "opt-1",
          text: "Framing the data around 'survival' activated positive gain orientation, while framing it around 'mortality' triggered loss aversion and threat circuits.",
          isCorrect: true,
          mechanism: "Information is never received in a vacuum. The linguistic frame directs attention toward either safety (90% living) or mortality (10% dying), shifting risk tolerance.",
        },
        {
          id: "opt-2",
          text: "Surgeon A used superior hospital technology and clinical credentials.",
          isCorrect: false,
          mechanism: "Both surgeons described the identical operation with identical probabilities; only phrasing differed.",
        },
        {
          id: "opt-3",
          text: "Arthur misunderstood basic percentage arithmetic.",
          isCorrect: false,
          mechanism: "Even trained mathematicians and physicians exhibit the Framing Effect when presented with life-or-death scenarios.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "Context Dictates Content",
      corePrinciple: "The way information is packaged shifts human decision-making more than the underlying data itself. Gain frames cultivate caution; loss frames trigger urgency.",
      mentalModelFormula: "Identical Reality + Positive Frame = Acceptance & Safety | Identical Reality + Negative Frame = Threat & Avoidance",
      everydayRule: "When making an important life decision, re-state the problem in both positive and negative frames to uncover your genuine preference.",
    },
    contentHooks: [
      { format: "Viral Breakdown", hook: "How supermarkets use 1 word to charge 25% more for identical ground beef." },
    ],
    scriptTemplate: "Would you take a medical treatment with a 90% survival rate? What about one with a 10% death rate? Here is why your brain answers differently...",
    evidenceStatus: "well-supported",
    references: [
      {
        title: "The framing of decisions and the psychology of choice",
        authors: "Amos Tversky & Daniel Kahneman",
        year: 1981,
        url: "https://pubmed.ncbi.nlm.nih.gov/7455683/",
        note: "Seminal Science paper detailing the Asian Disease Problem and risky choice framing reversals."
      },
      {
        title: "All frames are not created equal: A typological analysis of attribute, goal, and risky choice framing",
        authors: "Irwin P. Levin, Sandra L. Schneider, & Gary J. Gaeth",
        year: 1998,
        url: "https://doi.org/10.1006/obhd.1998.2804",
        note: "Comprehensive taxonomy distinguishing risky choice, attribute, and goal framing effects."
      }
    ]
  },

  // ==========================================
  // 2. SOCIAL PSYCHOLOGY (5 Topics)
  // ==========================================
  {
    id: "halo-effect",
    title: "The Halo Effect",
    branch: "Social Psychology",
    categoryKey: "social",
    branchColor: {
      bg: "bg-[#F9F0EC]",
      text: "text-[#8F5543]",
      border: "border-[#EAD6CF]",
      accent: "#A8634F",
      badge: "bg-[#F3E2DB]",
    },
    icon: "Sparkles",
    teaser: "How one attractive trait tricks our brain into assuming excellence in everything.",
    readTime: "5 min read",
    difficulty: "Beginner",
    studyTakeaways: [
      "First coined by Edward Thorndike in 1920",
      "Attractiveness and charisma unconsciously inflate ratings of intelligence and honesty",
      "Counterpart: The 'Horn Effect', where a negative trait spoils all assessments",
    ],
    scenarioHook: {
      setting: "Executive Search Hiring Committee",
      character: "Julian, Candidate for VP Engineering",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Julian enters the conference room wearing an impeccably tailored coat, smiling warmly with relaxed eye contact and an articulate, baritone voice.",
      theFriction: "During the technical challenge, Julian gives vague, buzzword-heavy answers and evades a fundamental distributed database question.",
      theReaction: "Instead of flagging his lack of depth, the interviewer writes: 'Julian is clearly a high-level strategic visionary who prefers delegating low-level details. Strong Hire!'",
    },
    socraticQuiz: {
      question: "What cognitive heuristic caused the interviewers to excuse Julian's technical deficiencies?",
      options: [
        {
          id: "opt-1",
          text: "The Halo Effect caused his polished appearance and charismatic demeanor to cast a positive aura over his unverified technical competencies.",
          isCorrect: true,
          mechanism: "Thorndike showed that humans use high-salience positive qualities (appearance, charm) to infer unobserved competencies (strategic intellect, integrity).",
        },
        {
          id: "opt-2",
          text: "The interviewers lacked any technical qualifications to evaluate software architecture.",
          isCorrect: false,
          mechanism: "Even seasoned technical evaluators fall prey to the Halo Effect; it is an instinctual perceptual heuristic rather than ignorance.",
        },
        {
          id: "opt-3",
          text: "Julian answered the distributed systems question with mathematical accuracy.",
          isCorrect: false,
          mechanism: "His answer was vague and incomplete; the panel filled in the blanks positively due to charm.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "The Perceptual Spillover",
      corePrinciple: "A single outstanding trait spills over into our overall evaluation of a person's capability, character, and trustworthiness.",
      mentalModelFormula: "Salient Positive Trait ('Charming & Polished') ➔ Automatic Generalization ('Therefore brilliant & ethical')",
      everydayRule: "When interviewing or evaluating someone, isolate each skill independently. Ask: 'If someone awkward gave this exact response, would I still praise it?'",
    },
    contentHooks: [
      { format: "Short Reel", hook: "Why charismatic people get promoted 30% faster (and how to spot the trap)." },
    ],
    scriptTemplate: "Notice how when someone speaks with calm charisma, you automatically assume they are honest, intelligent, and competent? That is the Halo Effect...",
    evidenceStatus: "well-supported",
    references: [
      {
        title: "A constant error in psychological ratings",
        authors: "Edward L. Thorndike",
        year: 1920,
        url: "https://doi.org/10.1037/h0071663",
        note: "Original paper introducing the halo error in military officer performance ratings."
      },
      {
        title: "The halo effect: Evidence for unconscious alteration of judgments",
        authors: "Richard E. Nisbett & Timothy DeCamp Wilson",
        year: 1977,
        url: "https://doi.org/10.1037/0022-3514.35.4.250",
        note: "Classic experiment showing global teacher evaluations alter perceptions of voice, appearance, and mannerisms."
      }
    ]
  },
  {
    id: "bystander-effect",
    title: "The Bystander Effect",
    branch: "Social Psychology",
    categoryKey: "social",
    branchColor: {
      bg: "bg-[#F9F0EC]",
      text: "text-[#8F5543]",
      border: "border-[#EAD6CF]",
      accent: "#A8634F",
      badge: "bg-[#F3E2DB]",
    },
    icon: "Users",
    teaser: "Why the more people witness an emergency, the less likely anyone is to help.",
    readTime: "6 min read",
    difficulty: "Intermediate",
    studyTakeaways: [
      "Cataloged by John Darley and Bibb Latané in 1968",
      "Driven by diffusion of responsibility and pluralistic ignorance",
      "Classic laboratory finding: lone participants intervened 85% of the time vs 31% in 5-person groups",
    ],
    scenarioHook: {
      setting: "Crowded Downtown Metro Platform",
      character: "Rachel, Commuter",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
      story: "On a packed Tuesday morning subway platform with over 70 commuters, a man suddenly collapses near the bench, clutching his chest.",
      theFriction: "Dozens of people turn their heads. Rachel feels a spike of alarm, but notices other commuters casually glancing at their phones or pausing briefly.",
      theReaction: "Rachel thinks: 'Someone else closer will call 911. A doctor is probably already stepping up.' For three critical minutes, nobody steps forward.",
    },
    socraticQuiz: {
      question: "Why did 70 people stand immobilized on the platform instead of dialing emergency services?",
      options: [
        {
          id: "opt-1",
          text: "Responsibility diffused across the crowd, while pluralistic ignorance led each person to interpret others' inaction as a sign that the situation was under control.",
          isCorrect: true,
          mechanism: "When others are present, personal responsibility drops to 1/N. Simultaneously, everyone looks to everyone else for cues, mistaking frozen hesitation for calm.",
        },
        {
          id: "opt-2",
          text: "The commuters were sociopathic and completely indifferent to human suffering.",
          isCorrect: false,
          mechanism: "Tests show bystanders experience elevated heart rates and intense stress; social inhibition paralyzes action, not a lack of empathy.",
        },
        {
          id: "opt-3",
          text: "Subway platforms have strict rules prohibiting civilians from assisting fallen passengers.",
          isCorrect: false,
          mechanism: "There are no such prohibitions; social psychological paralysis explains the hesitation.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "The Paralyzing Crowd",
      corePrinciple: "In an ambiguous emergency, crowd presence dilutes individual obligation and manufactures a false illusion that intervention is already underway.",
      mentalModelFormula: "Ambiguity + Group Presence = Responsibility Diffusion + Social Conformity ➔ Collective Inaction",
      everydayRule: "If you need emergency help in a crowd, never shout 'Somebody help!'. Look directly at one specific person, point, and say: 'You in the blue coat, call 911 now!'",
    },
    contentHooks: [
      { format: "Short Reel", hook: "The 1 psychological phrase that saves lives in a crowded emergency." },
    ],
    scriptTemplate: "In Darley and Latané's classic laboratory study, lone bystanders responded 85% of the time, dropping to 31% in a group. Here is why...",
    evidenceStatus: "well-supported",
    references: [
      {
        title: "Bystander intervention in emergencies: Diffusion of responsibility",
        authors: "John M. Darley & Bibb Latané",
        year: 1968,
        url: "https://pubmed.ncbi.nlm.nih.gov/5645600/",
        note: "Landmark study demonstrating how group size decreases the speed and likelihood of emergency intervention."
      },
      {
        title: "The bystander-effect: A meta-analytic review on bystander intervention in dangerous and non-dangerous emergencies",
        authors: "Peter Fischer et al.",
        year: 2011,
        url: "https://pubmed.ncbi.nlm.nih.gov/21534650/",
        note: "Meta-analysis confirming bystander inhibition across 105 studies, while noting danger moderates the effect."
      }
    ]
  },
  {
    id: "fundamental-attribution-error",
    title: "Fundamental Attribution Error",
    branch: "Social Psychology",
    categoryKey: "social",
    branchColor: {
      bg: "bg-[#F9F0EC]",
      text: "text-[#8F5543]",
      border: "border-[#EAD6CF]",
      accent: "#A8634F",
      badge: "bg-[#F3E2DB]",
    },
    icon: "ShieldAlert",
    teaser: "Why we blame others' flaws on character, but excuse our own on circumstances.",
    readTime: "5 min read",
    difficulty: "Intermediate",
    studyTakeaways: [
      "Coined by Lee Ross in 1977 following classic Jones-Harris experiments",
      "Over-emphasizes internal disposition while underestimating situational context",
      "Underlies common workplace rivalries and road rage",
    ],
    scenarioHook: {
      setting: "Morning Expressway Commute",
      character: "Nathan, Logistics Manager",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Nathan is driving to an executive meeting when a silver sedan abruptly cuts into his lane without signaling, forcing him to brake hard.",
      theFriction: "Nathan fumes with rage: 'What an aggressive, selfish, entitled lunatic!' Ten minutes later, Nathan realizes he is about to miss his exit.",
      theReaction: "Nathan quickly weaves across two lanes without signaling to catch the off-ramp, thinking: 'I had no choice—the road signage is poorly placed and this meeting is critical.'",
    },
    socraticQuiz: {
      question: "Why did Nathan judge the other driver as 'selfish and entitled' while viewing his own identical cut-off as 'unavoidable'?",
      options: [
        {
          id: "opt-1",
          text: "Fundamental attribution error: we judge others by their observed behavior and assumed personality, but judge ourselves by our invisible context and good intentions.",
          isCorrect: true,
          mechanism: "When watching others, their person is salient, so we infer dispositional fault. When judging ourselves, our internal situational pressures are vivid, so we excuse the act.",
        },
        {
          id: "opt-2",
          text: "Nathan was objectively a much safer driver with superior vehicle handling.",
          isCorrect: false,
          mechanism: "Both maneuvers were equally hazardous and abrupt; only the internal attribution story differed.",
        },
        {
          id: "opt-3",
          text: "The silver sedan's driver was legally cited for criminal recklessness.",
          isCorrect: false,
          mechanism: "No citation occurred; the driver could easily have been rushing to an emergency hospital room, which Nathan never considered.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "The Asymmetry of Intent",
      corePrinciple: "We judge ourselves by our intentions and context; we judge everyone else by their worst visible actions.",
      mentalModelFormula: "Other Person's Mistake = 'Flawed Character' | My Mistake = 'Unfortunate Environment'",
      everydayRule: "When someone frustrates you at work, adopt the generous hypothesis: assume they are dealing with a hidden constraint you know nothing about.",
    },
    contentHooks: [
      { format: "Short Reel", hook: "The 1 mental bias destroying your relationships without you knowing." },
    ],
    scriptTemplate: "When someone else is late, you think they are lazy and disorganised. When you are late, it's because traffic was terrible. Here is the Fundamental Attribution Error...",
    evidenceStatus: "well-supported",
    references: [
      {
        title: "The intuitive psychologist and his shortcomings: Distortions in the attribution process",
        authors: "Lee Ross",
        year: 1977,
        url: "https://doi.org/10.1016/S0065-2601(08)60357-3",
        note: "Origin of the term 'fundamental attribution error' outlining systematic dispositional over-attribution."
      },
      {
        title: "The attribution of attitudes",
        authors: "Edward E. Jones & Victor A. Harris",
        year: 1967,
        url: "https://doi.org/10.1016/0022-1031(67)90034-0",
        note: "Classic Castro essay experiment demonstrating attribution of true attitudes even when positions were assigned."
      }
    ]
  },
  {
    id: "social-proof",
    title: "Social Proof",
    branch: "Social Psychology",
    categoryKey: "social",
    branchColor: {
      bg: "bg-[#F9F0EC]",
      text: "text-[#8F5543]",
      border: "border-[#EAD6CF]",
      accent: "#A8634F",
      badge: "bg-[#F3E2DB]",
    },
    icon: "Users",
    teaser: "Why we let the actions of strangers decide what we find acceptable and desirable.",
    readTime: "4 min read",
    difficulty: "Beginner",
    studyTakeaways: [
      "Detailed by Robert Cialdini in 'Influence' (1984)",
      "Evolutionary adaptation: copying the tribe reduced lethal exploratory risk",
      "Most potent under uncertainty and similarity conditions",
    ],
    scenarioHook: {
      setting: "Vacation Dinner in Florence",
      character: "Liam and Maya, Travelers",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Walking down a picturesque cobblestone lane in Italy, Liam and Maya spot two traditional trattorias directly across from one another.",
      theFriction: "Trattoria Rossi has an empty terrace with no diners. Trattoria Bellini has a 35-minute line snaking down the corner.",
      theReaction: "Despite being hungry and tired, Liam immediately says: 'Bellini must be ten times better. Rossi's food is probably stale.' They gladly wait 35 minutes in the queue.",
    },
    socraticQuiz: {
      question: "Why did Liam and Maya assume Trattoria Bellini was superior purely because of the queue?",
      options: [
        {
          id: "opt-1",
          text: "Social proof: when uncertain in a novel setting, the brain treats the collective behavior of others as an efficient proxy for truth and quality.",
          isCorrect: true,
          mechanism: "To conserve energy, humans outsource evaluation to the crowd. If many people are doing something, our survival wiring assumes it is safe and optimal.",
        },
        {
          id: "opt-2",
          text: "They checked international Michelin inspection guides and reviewed nutritional audits.",
          isCorrect: false,
          mechanism: "They relied entirely on the visible presence of diners waiting in line as their heuristic.",
        },
        {
          id: "opt-3",
          text: "Trattoria Rossi had posted signs warning of kitchen cleanliness violations.",
          isCorrect: false,
          mechanism: "Rossi was spotless and serving identical regional dishes, but suffered from empty-terrace social abandonment.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "The Heuristic of the Herd",
      corePrinciple: "When unsure what to do, we look to what others are doing. We assume that the crowd knows something we do not.",
      mentalModelFormula: "Uncertainty + Visible Others Doing X = Automatic Inference That X Is Correct",
      everydayRule: "Remember that crowds can be collectively uninformed. An empty room can be an undiscovered gem, while a long line can just be slow service.",
    },
    contentHooks: [
      { format: "Short Reel", hook: "How restaurants and SaaS apps fake social proof to force you to buy." },
    ],
    scriptTemplate: "Notice how you won't enter an empty restaurant, but will wait 40 minutes for one with a line? That is Social Proof...",
    evidenceStatus: "well-supported",
    references: [
      {
        title: "A focus theory of normative conduct: Recycling the concept of norms to reduce littering in public places",
        authors: "Robert B. Cialdini, Raymond R. Reno, & Carl A. Kallgren",
        year: 1990,
        url: "https://pubmed.ncbi.nlm.nih.gov/2269970/",
        note: "Empirical study documenting descriptive social norms guiding individual decisions in public environments."
      },
      {
        title: "Social proof in decision making",
        authors: "Robert B. Cialdini",
        year: 1984,
        url: "https://pubmed.ncbi.nlm.nih.gov/2269970/",
        note: "Analysis of informational social influence and behavioral mimicry under ambiguous conditions."
      }
    ]
  },
  {
    id: "reciprocity-norm",
    title: "The Reciprocity Norm",
    branch: "Social Psychology",
    categoryKey: "social",
    branchColor: {
      bg: "bg-[#F9F0EC]",
      text: "text-[#8F5543]",
      border: "border-[#EAD6CF]",
      accent: "#A8634F",
      badge: "bg-[#F3E2DB]",
    },
    icon: "Repeat",
    teaser: "How a tiny unrequested gift triggers an overwhelming urge to return a massive favor.",
    readTime: "5 min read",
    difficulty: "Beginner",
    studyTakeaways: [
      "Analyzed extensively by sociologist Alvin Gouldner and Robert Cialdini",
      "Universal human social instinct that enables cross-tribal trade and debt systems",
      "Common commercial weapon: free samples, mints with restaurant bills",
    ],
    scenarioHook: {
      setting: "Farmers Market Artisan Stand",
      character: "Oliver, Architect",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Oliver paused to glance at handmade olive oil bottles. The vendor smiled warmly and handed him a warm piece of sourdough with an artisan truffle dip.",
      theFriction: "Oliver took the sample, smiled, and chewed. The cost to the vendor was less than $0.20.",
      theReaction: "An uncomfortable psychological tension settled into Oliver's chest. Simply walking away felt rude and dishonest. He ended up purchasing a $36 specialty bottle he had never planned to buy.",
    },
    socraticQuiz: {
      question: "Why did Oliver purchase a $36 bottle of olive oil after accepting a $0.20 slice of bread?",
      options: [
        {
          id: "opt-1",
          text: "Receiving an uninvited gift activated the evolutionary reciprocity reflex, creating acute psychological discomfort until he repaid the social balance.",
          isCorrect: true,
          mechanism: "Human societies rely on reciprocal gift-giving. Violating reciprocity triggers acute social shame, making people willingly over-repay small favors.",
        },
        {
          id: "opt-2",
          text: "Oliver had planned to purchase three bottles of specialty olive oil before arriving.",
          isCorrect: false,
          mechanism: "He was merely passing by; the purchase was prompted by the psychological debt of the free sample.",
        },
        {
          id: "opt-3",
          text: "The vendor threatened to report him to market security if he declined.",
          isCorrect: false,
          mechanism: "The vendor was courteous; the pressure was entirely internal and social.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "The Social Ledger",
      corePrinciple: "We possess a profound visceral obligation to repay favors, gifts, and concessions. Marketers trigger asymmetrical compliance by giving small favors first.",
      mentalModelFormula: "Unsolicited Small Gift ➔ Internal Debt ➔ Reluctance to Feel Ungrateful ➔ Asymmetrical Repayment",
      everydayRule: "When someone offers you a 'free' gift or favor, ask: 'Am I accepting a gift of genuine goodwill, or a calculated down-payment on my future compliance?'",
    },
    contentHooks: [
      { format: "Short Reel", hook: "Why waiters give you free mints (and how it increases tips by 21%)." },
    ],
    scriptTemplate: "Accepting a free sample feels harmless. But evolutionary psychology wired your brain with a debt tracker that forces you to repay it...",
    evidenceStatus: "well-supported",
    references: [
      {
        title: "The norm of reciprocity: A preliminary statement",
        authors: "Alvin W. Gouldner",
        year: 1960,
        url: "https://doi.org/10.2307/2092623",
        note: "Foundational sociological paper defining the universal human norm of reciprocal obligation."
      },
      {
        title: "Sweetening the till: The use of candy to increase restaurant tipping",
        authors: "David B. Strohmetz, Bruce Rind, Rosann Fisher, & Michael Lynn",
        year: 2002,
        url: "https://doi.org/10.1111/j.1559-1816.2002.tb00216.x",
        note: "Field experiment measuring tipping increases following unsolicited dining gifts."
      }
    ]
  },

  // ==========================================
  // 3. CLINICAL & WELLNESS PSYCHOLOGY (5 Topics)
  // ==========================================
  {
    id: "negativity-bias",
    title: "Negativity Bias",
    branch: "Clinical & Wellness",
    categoryKey: "clinical",
    branchColor: {
      bg: "bg-[#EFF3F6]",
      text: "text-[#475767]",
      border: "border-[#D5E0E7]",
      accent: "#596E82",
      badge: "bg-[#E1EAF0]",
    },
    icon: "HeartHandshake",
    teaser: "Why one piece of criticism stings longer than 20 glowing compliments.",
    readTime: "5 min read",
    difficulty: "Beginner",
    studyTakeaways: [
      "Co-researched by Paul Rozin & Edward Royzman in 2001",
      "Evolutionary survival prioritize threat avoidance over reward acquisition",
      "Brain registers negative stimuli in under 100 milliseconds",
    ],
    scenarioHook: {
      setting: "Annual Performance Review",
      character: "Chloe, Senior Product Manager",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Chloe received her annual review containing 14 peer reviews praising her visionary roadmap, leadership, and execution.",
      theFriction: "One anonymous comment noted: 'Chloe occasionally cuts people off during sprint planning.'",
      theReaction: "For the entire weekend, Chloe replay that single sentence in her head, unable to sleep, while completely forgetting the 14 glowing endorsements.",
    },
    socraticQuiz: {
      question: "Why did Chloe's brain obsess over 1 critical comment while ignoring 14 glowing reviews?",
      options: [
        {
          id: "opt-1",
          text: "Evolutionary wiring gives negative feedback 3 to 5 times more neural salience than positive feedback, treating potential social rejection as an existential threat.",
          isCorrect: true,
          mechanism: "For ancestral humans, missing a predator was fatal, whereas missing a berry was merely inconvenient. The brain evolved to prioritize threats over pleasures.",
        },
        {
          id: "opt-2",
          text: "The 14 positive reviews were written by bots and carried no authenticity.",
          isCorrect: false,
          mechanism: "The reviews were authentic and from senior executives; her biological threat detection simply overshadowed them.",
        },
        {
          id: "opt-3",
          text: "Chloe suffers from pathological insecurity unshared by normal humans.",
          isCorrect: false,
          mechanism: "Negativity Bias is universal across all humans and observed in infants as young as 7 months.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "Velcro for Bad, Teflon for Good",
      corePrinciple: "The brain acts like Velcro for negative experiences and Teflon for positive ones. Countering it requires deliberate, prolonged appreciation.",
      mentalModelFormula: "1 Negative Signal = 3 to 5 Positive Signals in Emotional Weight",
      everydayRule: "When receiving praise, savor it intentionally for at least 20 seconds to allow the neural pathways to encode the memory.",
    },
    contentHooks: [
      { format: "Short Reel", hook: "Why you remember 1 insult for 10 years but forget praise in 5 minutes." },
    ],
    scriptTemplate: "Your brain is designed to keep you alive, not happy. Here is why Negativity Bias makes you fixate on the one person who criticized you...",
    evidenceStatus: "well-supported",
    references: [
      {
        title: "Negativity bias, negativity dominance, and contagion",
        authors: "Paul Rozin & Edward B. Royzman",
        year: 2001,
        url: "https://doi.org/10.1207/S15327957PSPR0504_2",
        note: "Taxonomy of psychological mechanisms underlying negativity dominance across human domains."
      },
      {
        title: "Bad is stronger than good",
        authors: "Roy F. Baumeister, Ellen Bratslavsky, Catrin Finkenauer, & Kathleen D. Vohs",
        year: 2001,
        url: "https://doi.org/10.1037/1089-2680.5.4.323",
        note: "Comprehensive literature review demonstrating greater impact of negative over positive events across psychology."
      }
    ]
  },
  {
    id: "cognitive-reframing",
    title: "Cognitive Reframing",
    branch: "Clinical & Wellness",
    categoryKey: "clinical",
    branchColor: {
      bg: "bg-[#EFF3F6]",
      text: "text-[#475767]",
      border: "border-[#D5E0E7]",
      accent: "#596E82",
      badge: "bg-[#E1EAF0]",
    },
    icon: "Brain",
    teaser: "How shifting the mental lens turns debilitating anxiety into actionable excitement.",
    readTime: "6 min read",
    difficulty: "Intermediate",
    studyTakeaways: [
      "Foundation of Cognitive Behavioral Therapy (Aaron Beck & Albert Ellis)",
      "Adrenaline produces identical physiological states for fear and excitement",
      "Separates objective external events from subjective internal narrative",
    ],
    scenarioHook: {
      setting: "TEDx Keynote Backstage",
      character: "Julian, Climate Scientist",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Julian is two minutes from walking onto a stage before 2,000 attendees. His heart is pounding at 135 bpm, his palms are clammy, and his chest feels tight.",
      theFriction: "His instinctive interpretation triggers panic: 'I am terrified. I am going to forget my slides and embarrass myself.'",
      theReaction: "Remembering a cognitive reframing drill, he says out loud: 'My body is releasing adrenaline because this message matters. My racing heart is delivering oxygen to my brain. I am not terrified; I am energized!' Within seconds, his posture opens up.",
    },
    socraticQuiz: {
      question: "Why did repeating 'I am energized' calm Julian's nervous system when telling himself 'calm down' would have failed?",
      options: [
        {
          id: "opt-1",
          text: "Excitement and fear are both high-arousal sympathetic states. It is neurologically easier to reframe high-arousal arousal as excitement than to force a drop into low-arousal calmness.",
          isCorrect: true,
          mechanism: "Harvard research by Alison Wood Brooks showed that reappraising anxiety as excitement ('anxiety reappraisal') dramatically improves performance over trying to calm down.",
        },
        {
          id: "opt-2",
          text: "Repeating affirmations magically eliminates all stress hormones from the bloodstream.",
          isCorrect: false,
          mechanism: "Hormones like adrenaline remained; the cognitive appraisal shifted from a threat to a challenge.",
        },
        {
          id: "opt-3",
          text: "Public speaking does not actually generate real physiological anxiety.",
          isCorrect: false,
          mechanism: "Public speaking consistently ranks among the most potent social-evaluative threats in clinical studies.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "The Architecture of Meaning",
      corePrinciple: "Events do not cause emotions; our beliefs about events cause emotions. Changing the frame changes the neurochemical response.",
      mentalModelFormula: "Event + Automated Catastrophic Frame = Panic | Event + Deliberate Challenge Frame = Flow & Resilience",
      everydayRule: "When your heart races before a big challenge, don't say 'Calm down'. Tell your body: 'Thank you for the energy; let's do this.'",
    },
    contentHooks: [
      { format: "Short Reel", hook: "The 3-word phrase Harvard psychologists use to turn anxiety into confidence." },
    ],
    scriptTemplate: "Telling an anxious person to 'just relax' is biologically impossible. Here is what you should do instead...",
    evidenceStatus: "well-supported",
    references: [
      {
        title: "Get excited: Reappraising pre-performance anxiety as excitement",
        authors: "Alison Wood Brooks",
        year: 2014,
        url: "https://pubmed.ncbi.nlm.nih.gov/24364784/",
        note: "Empirical study demonstrating that reappraising anxiety as excitement improves public speaking and task performance."
      },
      {
        title: "Cognitive therapy of depression",
        authors: "Aaron T. Beck",
        year: 1979,
        url: "https://pubmed.ncbi.nlm.nih.gov/24364784/",
        note: "Core clinical framework establishing cognitive reframing of automated negative thoughts."
      }
    ]
  },
  {
    id: "amygdala-hijack",
    title: "Amygdala Hijack",
    branch: "Clinical & Wellness",
    categoryKey: "clinical",
    branchColor: {
      bg: "bg-[#EFF3F6]",
      text: "text-[#475767]",
      border: "border-[#D5E0E7]",
      accent: "#596E82",
      badge: "bg-[#E1EAF0]",
    },
    icon: "ShieldAlert",
    teaser: "Why you say things you instantly regret before your logical brain can intervene.",
    readTime: "5 min read",
    difficulty: "Intermediate",
    studyTakeaways: [
      "Identified by Daniel Goleman in 'Emotional Intelligence' (1995)",
      "Sensory signals reach the amygdala milliseconds before the prefrontal cortex",
      "The '6-second rule' allows neurochemistry to re-engage analytical reasoning",
    ],
    scenarioHook: {
      setting: "High-Stakes Product Sync",
      character: "Martin, Engineering Lead",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
      story: "During an all-hands sprint review, an executive dismissively remarks: 'Martin, this codebase architecture feels amateurish.'",
      theFriction: "Before Martin can weigh the political cost, an intense surge of heat rushes to his neck, his vision tunnels, and his heart races.",
      theReaction: "He snaps back with a sarcastic, caustic insult aimed at the executive's competence. Five seconds later, his prefrontal cortex comes back online with overwhelming dread.",
    },
    socraticQuiz: {
      question: "Why did Martin erupt in anger before he had time to calculate the professional consequence?",
      options: [
        {
          id: "opt-1",
          text: "The thalamus routed the threat signal directly to the amygdala via the short neural pathway, triggering an emergency defensive reaction before the slower prefrontal cortex could analyze the consequence.",
          isCorrect: true,
          mechanism: "Neuroscientist Joseph LeDoux described subcortical pathways routing sensory information directly to the amygdala (observed around 12-15 milliseconds in animal models) before detailed cortical appraisal, although human emotional processing involves continuous cortical-subcortical interaction.",
        },
        {
          id: "opt-2",
          text: "Martin was executing a calculated political power move.",
          isCorrect: false,
          mechanism: "It was an automated limbic reflex that severely damaged his career, followed immediately by regret.",
        },
        {
          id: "opt-3",
          text: "The prefrontal cortex has no inhibitory control over emotional centers.",
          isCorrect: false,
          mechanism: "The prefrontal cortex does have inhibitory control, but it was bypassed by the subcortical speed advantage.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "The 6-Second Circuit Breaker",
      corePrinciple: "In moments of perceived ego or social threat, rapid subcortical threat responses can overwhelm deliberate reasoning. Restoring control requires inserting a physiological pause.",
      mentalModelFormula: "Perceived Threat ➔ Rapid Subcortical Appraisal ➔ Autonomic Surge ➔ Temporary Disruption of Cortical Deliberation",
      everydayRule: "When you feel the sudden rush of defensive rage, force a slow 6-second exhale before uttering a single syllable.",
    },
    contentHooks: [
      { format: "Short Reel", hook: "Why you say things you regret when angry (and the physiological pause that interrupts it)." },
    ],
    scriptTemplate: "Notice how when someone insults your work, you feel a physical wave of heat before you can even think? That is an Amygdala Hijack...",
    evidenceStatus: "mixed-evidence",
    references: [
      {
        title: "Emotional intelligence: Why it can matter more than IQ",
        authors: "Daniel Goleman",
        year: 1995,
        url: "https://www.worldcat.org/title/32855146",
        note: "Popularized the term 'amygdala hijack' describing rapid limbic reactions overriding cortical restraint."
      },
      {
        title: "Contributions of the amygdala to emotion processing: From animal models to human behavior",
        authors: "Elizabeth A. Phelps & Joseph E. LeDoux",
        year: 2005,
        url: "https://pubmed.ncbi.nlm.nih.gov/16242399/",
        note: "Review of subcortical and cortical pathways involved in threat appraisal and emotional conditioning."
      }
    ]
  },
  {
    id: "learned-helplessness",
    title: "Learned Helplessness",
    branch: "Clinical & Wellness",
    categoryKey: "clinical",
    branchColor: {
      bg: "bg-[#EFF3F6]",
      text: "text-[#475767]",
      border: "border-[#D5E0E7]",
      accent: "#596E82",
      badge: "bg-[#E1EAF0]",
    },
    icon: "Compass",
    teaser: "How repeated failure teaches organisms to stop trying even after the cage door opens.",
    readTime: "6 min read",
    difficulty: "Advanced",
    studyTakeaways: [
      "Discovered by Martin Seligman & Steven Maier in 1967",
      "Occurs when an organism experiences persistent adverse stimuli with no perceived control",
      "Overcome through small, guaranteed agency victories (micro-control)",
    ],
    scenarioHook: {
      setting: "Creative Agency Layoff Aftermath",
      character: "Tanya, Senior Copywriter",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Tanya spent 8 months sending out 400 carefully tailored job applications, receiving zero interviews and 390 automated rejection emails.",
      theFriction: "In month 9, an old colleague reached out with an open referral link for a dream creative director role with high likelihood of hiring.",
      theReaction: "Instead of applying, Tanya stared at the link with profound lethargy, thinking: 'Why bother? It won't work anyway.' Her brain had learned that effort had zero connection to outcome.",
    },
    socraticQuiz: {
      question: "Why did Tanya fail to apply for a role with an open referral when she was desperate for work?",
      options: [
        {
          id: "opt-1",
          text: "Her brain had conditioned itself into Learned Helplessness, generalizing past lack of control to new opportunities where control actually existed.",
          isCorrect: true,
          mechanism: "Seligman proved that when animals repeatedly experience unavoidable hardship, they cease taking action even when escape is made obvious and easy.",
        },
        {
          id: "opt-2",
          text: "Tanya decided she no longer enjoyed creative writing as a career.",
          isCorrect: false,
          mechanism: "Her underlying passion had not vanished; her perceived agency had been extinguished by repeated uncontrollable rejection.",
        },
        {
          id: "opt-3",
          text: "The referral link was expired and inaccessible.",
          isCorrect: false,
          mechanism: "The opportunity was active; psychological paralysis was the barrier.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "The Illusion of Inevitable Failure",
      corePrinciple: "When repeated effort yields no observable reward, organisms learn passivity. Breaking the trap requires restoring belief in personal agency through micro-actions.",
      mentalModelFormula: "Uncontrollable Adversity ➔ Perceived Futility ➔ Passivity ➔ Continued Helplessness Even When Conditions Change",
      everydayRule: "When feeling stuck, pick the smallest possible action with 100% certainty of completion. Rebuilding agency starts with micro-victories.",
    },
    contentHooks: [
      { format: "Short Reel", hook: "The 1 reason people give up on their goals just before the breakthrough." },
    ],
    scriptTemplate: "In 1967, scientists placed animals in rooms where escape was impossible. Later, they opened the doors. The animals didn't leave. Here is why...",
    evidenceStatus: "well-supported",
    references: [
      {
        title: "Effects of inescapable shock upon subsequent escape and avoidance responding",
        authors: "J. Bruce Overmier & Martin E. Seligman",
        year: 1967,
        url: "https://pubmed.ncbi.nlm.nih.gov/6029715/",
        note: "Foundational animal model paper demonstrating behavioral passivity following uncontrollable stressors."
      },
      {
        title: "Learned helplessness at fifty: Insights from neuroscience",
        authors: "Steven F. Maier & Martin E. Seligman",
        year: 2016,
        url: "https://pubmed.ncbi.nlm.nih.gov/27337390/",
        note: "Updated neurobiological review reframing passivity as a default mammalian response modulated by prefrontal control."
      }
    ]
  },
  {
    id: "emotional-granularity",
    title: "Emotional Granularity",
    branch: "Clinical & Wellness",
    categoryKey: "clinical",
    branchColor: {
      bg: "bg-[#EFF3F6]",
      text: "text-[#475767]",
      border: "border-[#D5E0E7]",
      accent: "#596E82",
      badge: "bg-[#E1EAF0]",
    },
    icon: "Activity",
    teaser: "Why being able to distinguish between anger, frustration, and fatigue changes your nervous system.",
    readTime: "5 min read",
    difficulty: "Intermediate",
    studyTakeaways: [
      "Pioneered by neuroscientist Lisa Feldman Barrett",
      "High emotional granularity correlates with lower doctor visits and better stress regulation",
      "Constructed Emotion Theory: naming an emotion accurately equips the brain with tailored solutions",
    ],
    scenarioHook: {
      setting: "Friday Evening Kitchen",
      character: "Devon, Executive",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Devon walks into his kitchen after a chaotic week feeling an overwhelming, diffuse cloud of what he calls 'being in a terrible mood.'",
      theFriction: "Because the feeling is labeled broadly as 'bad', he feels like drinking alcohol, doomscrolling, or picking a petty fight.",
      theReaction: "Instead, he pauses and asks: 'What specifically is this?' He realizes: 'I am not angry; I am physically dehydrated, disappointed about a delayed contract, and socially drained.' Naming the precise trio instantly dissipates the toxic cloud.",
    },
    socraticQuiz: {
      question: "Why did naming the three specific sensations dissolve Devon's generalized irritation?",
      options: [
        {
          id: "opt-1",
          text: "The brain cannot generate actionable physical solutions for vague labels like 'bad mood', but can instantly dispatch targeted biological answers for dehydration, disappointment, and exhaustion.",
          isCorrect: true,
          mechanism: "Lisa Feldman Barrett's research demonstrates that specific emotion words allow the brain to predict and deploy the exact physiological response needed.",
        },
        {
          id: "opt-2",
          text: "Devon used semantic word games to suppress his underlying anger.",
          isCorrect: false,
          mechanism: "This was not suppression; it was high-definition emotional resolution that grounded somatic sensations into reality.",
        },
        {
          id: "opt-3",
          text: "Human beings have only three primary emotions pre-wired at birth.",
          isCorrect: false,
          mechanism: "Emotions are constructed concepts; more granular concepts lead to superior executive functioning.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "High-Definition Emotions",
      corePrinciple: "Vague emotional vocabulary creates blunt, reactive coping mechanisms. Precise emotional categorization generates targeted, calm remedies.",
      mentalModelFormula: "Vague Arousal ('I feel terrible') = Blunt Coping | Granular Diagnosis ('I am depleted + disappointed') = Targeted Remedy",
      everydayRule: "Never stop at 'I'm stressed.' Ask yourself: 'Am I overwhelmed, lonely, fatigued, or resentful?' The exact word holds the cure.",
    },
    contentHooks: [
      { format: "Short Reel", hook: "The 30-second vocabulary habit that cures anxiety better than venting." },
    ],
    scriptTemplate: "If your emotional palette only has 'happy', 'sad', and 'angry', your brain will struggle with stress. Here is Emotional Granularity...",
    evidenceStatus: "well-supported",
    references: [
      {
        title: "Knowing what you're feeling and knowing what to do about it: Mapping the relation between emotion differentiation and emotion regulation",
        authors: "Lisa Feldman Barrett, James Gross, Tammy C. Christensen, & Marcela Benvenuto",
        year: 2001,
        url: "https://doi.org/10.1080/02699930143000239",
        note: "Empirical study linking higher emotion differentiation to more adaptive emotional regulation strategies."
      },
      {
        title: "Unpacking emotion differentiation: Transforming unpleasant experience by parsing it into discrete categories",
        authors: "Todd B. Kashdan, Lisa Feldman Barrett, & Patrick E. McKnight",
        year: 2015,
        url: "https://pubmed.ncbi.nlm.nih.gov/26456985/",
        note: "Review connecting granular emotional labeling to clinical resilience and adaptive behavioral regulation."
      }
    ]
  },

  // ==========================================
  // 4. CONSUMER PSYCHOLOGY (5 Topics)
  // ==========================================
  {
    id: "decoy-effect",
    title: "The Decoy Effect",
    branch: "Consumer Psychology",
    categoryKey: "consumer",
    branchColor: {
      bg: "bg-[#F8F5EC]",
      text: "text-[#7D6638]",
      border: "border-[#E7DEC9]",
      accent: "#967C46",
      badge: "bg-[#F0E8D4]",
    },
    icon: "Sparkles",
    teaser: "How an intentionally inferior third option pushes you into buying the most expensive tier.",
    readTime: "5 min read",
    difficulty: "Beginner",
    studyTakeaways: [
      "Documented by Joel Huber, John Payne, and Christopher Puto in 1982",
      "Also known as the Asymmetric Dominance Effect",
      "Famous example: The Economist subscription pricing test (Dan Ariely)",
    ],
    scenarioHook: {
      setting: "Movie Theater Concession Stand",
      character: "Sam, Weekend Moviegoer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Sam approached the popcorn stand planning to get a quick snack. The board showed: Small for $3.50 and Large for $7.00. Most customers chose Small.",
      theFriction: "The theater then introduced a Medium size for $6.50. It had 20% less popcorn than the Large.",
      theReaction: "Sam stared at the board: 'Well, Large is only 50 cents more than Medium! It would be foolish not to get the Large!' He bought the $7.00 bucket without hesitation.",
    },
    socraticQuiz: {
      question: "Why did adding a $6.50 Medium option cause sales of the $7.00 Large popcorn to skyrocket?",
      options: [
        {
          id: "opt-1",
          text: "The Medium acted as an asymmetrically dominated decoy, making the $7.00 Large look like an irresistible bargain by providing an effortless comparison.",
          isCorrect: true,
          mechanism: "Humans struggle to calculate absolute value, but compare relative options easily. The decoy exists solely to make the target expensive tier look like a steal.",
        },
        {
          id: "opt-2",
          text: "Customers suddenly grew 50% hungrier on average across all screenings.",
          isCorrect: false,
          mechanism: "Appetite did not change; choice architecture transformed the comparison framework.",
        },
        {
          id: "opt-3",
          text: "The Small option was phased out and removed from the menu board.",
          isCorrect: false,
          mechanism: "The Small remained at $3.50, but the comparison shifted away from Small vs Large to Medium vs Large.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "The Art of Asymmetric Comparison",
      corePrinciple: "When choosing between two items is difficult, introducing a third option that is clearly worse than one of the originals creates an instant, effortless preference.",
      mentalModelFormula: "Option A (Budget) vs Option B (Premium) = Hard Choice | Option A vs Option C (Decoy) vs Option B = Option B Feels Like a Bargain",
      everydayRule: "When evaluating subscription or pricing tiers, look for the 'useless middle option'—it was put there to pick your pocket.",
    },
    contentHooks: [
      { format: "Short Reel", hook: "The movie popcorn pricing trick that companies use to make you buy the most expensive option." },
    ],
    scriptTemplate: "Small is $3.50. Large is $7.00. But when they add Medium for $6.50, you suddenly buy the Large. Here is the Decoy Effect in 45 seconds...",
    evidenceStatus: "well-supported",
    references: [
      {
        title: "Adding asymmetrically dominated alternatives: Violations of regularity and the similarity hypothesis",
        authors: "Joel Huber, John W. Payne, & Christopher Puto",
        year: 1982,
        url: "https://doi.org/10.1086/208899",
        note: "Seminal experimental paper demonstrating that introducing an asymmetrically dominated option increases choice share of the dominating option."
      },
      {
        title: "Predictably irrational: The hidden forces that shape our decisions",
        authors: "Dan Ariely",
        year: 2008,
        url: "https://www.worldcat.org/title/182526103",
        note: "Documents the classic Economist print vs. digital subscription pricing experiment demonstrating real-world decoy effects."
      }
    ]
  },
  {
    id: "scarcity-heuristic",
    title: "Scarcity Heuristic",
    branch: "Consumer Psychology",
    categoryKey: "consumer",
    branchColor: {
      bg: "bg-[#F8F5EC]",
      text: "text-[#7D6638]",
      border: "border-[#E7DEC9]",
      accent: "#967C46",
      badge: "bg-[#F0E8D4]",
    },
    icon: "Clock",
    teaser: "Why 'Only 2 tickets left at this price' turns calm shoppers into frantic spenders.",
    readTime: "4 min read",
    difficulty: "Beginner",
    studyTakeaways: [
      "Documented by Stephen Worchel in the classic 1975 Cookie Jar Experiment",
      "Evolutionary root: scarce resources carried high survival utility",
      "Triggers Psychological Reactance when freedom of choice feels threatened",
    ],
    scenarioHook: {
      setting: "Hotel Booking Website",
      character: "Lydia, Event Planner",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Lydia was casually browsing seaside boutique hotels for an autumn weekend getaway three months away.",
      theFriction: "A blinking badge popped up: '🔥 4 other people are looking at this room. Only 1 room remaining at $240/night!'",
      theReaction: "Her heart rate spiked. Her deliberative evaluation vanished. She entered her credit card within 45 seconds, worried someone else would steal the room.",
    },
    socraticQuiz: {
      question: "Why did a casual hotel browser enter her credit card in 45 seconds after seeing 'Only 1 room left'?",
      options: [
        {
          id: "opt-1",
          text: "Scarcity triggered psychological reactance; the perceived threat of losing the option forced her brain to bypass cost evaluation and prioritize immediate acquisition.",
          isCorrect: true,
          mechanism: "When an opportunity becomes less available, we lose freedom. Humans viscerally despise lost options and rush to secure them.",
        },
        {
          id: "opt-2",
          text: "The room rate was discounted by 95% for that specific 45-second window.",
          isCorrect: false,
          mechanism: "The price was standard; the artificial urgency created the buying impulse.",
        },
        {
          id: "opt-3",
          text: "She was legally required to book immediately under hotel tourism rules.",
          isCorrect: false,
          mechanism: "No such law exists; consumer platforms use simulated scarcity timers precisely to trigger impulse buying.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "The Urgency of Loss",
      corePrinciple: "We value items more as they become less available. Scarcity shifts attention from 'Do I need this?' to 'Can I afford to lose this?'",
      mentalModelFormula: "Item Value + Threat of Depletion ➔ Anticipated Regret ➔ Impulse Purchase",
      everydayRule: "When a website flashes a scarcity countdown timer, step away from the screen for 10 minutes. If the urge passes, it was engineered urgency.",
    },
    contentHooks: [
      { format: "Short Reel", hook: "How booking sites weaponize 'Only 1 left' to steal your money." },
    ],
    scriptTemplate: "In 1975, researchers put identical cookies into two jars—one with 10 cookies, one with 2. People rated the 2-cookie jar as tasting better. That is Scarcity...",
    evidenceStatus: "well-supported",
    references: [
      {
        title: "Effects of supply and demand on ratings of object value",
        authors: "Stephen Worchel, Jerry Lee, & Akanbi Adewole",
        year: 1975,
        url: "https://doi.org/10.1037/0022-3514.32.5.906",
        note: "Classic cookie jar experiment demonstrating that scarce items are perceived as more desirable and valuable."
      },
      {
        title: "Influence: The psychology of persuasion",
        authors: "Robert B. Cialdini",
        year: 1984,
        url: "https://www.worldcat.org/title/10298925",
        note: "Analysis of scarcity principles and psychological reactance in commercial persuasion and decision-making."
      }
    ]
  },
  {
    id: "sunk-cost-fallacy",
    title: "The Sunk Cost Fallacy",
    branch: "Consumer Psychology",
    categoryKey: "consumer",
    branchColor: {
      bg: "bg-[#F8F5EC]",
      text: "text-[#7D6638]",
      border: "border-[#E7DEC9]",
      accent: "#967C46",
      badge: "bg-[#F0E8D4]",
    },
    icon: "Flame",
    teaser: "Why we finish miserable books, movies, and dead-end projects just because we started them.",
    readTime: "5 min read",
    difficulty: "Intermediate",
    studyTakeaways: [
      "Analyzed by Hal Arkes and Catherine Blumer in 1985",
      "Refusal to write off irrecoverable past investments of money, time, or emotion",
      "Historical case: The Concorde supersonic airliner project",
    ],
    scenarioHook: {
      setting: "Cinema Screening Room",
      character: "Marcus and Sarah",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Marcus and Sarah paid $36 for two tickets to a three-hour historical epic. By minute 40, the plot is incomprehensible and both are visibly bored and exhausted.",
      theFriction: "Sarah whispers: 'Let's just leave and go get artisan gelato across the street.'",
      theReaction: "Marcus winces: 'No way, we paid $36 for these tickets! We can't let that money go to waste.' They sit in misery for another two hours and twenty minutes.",
    },
    socraticQuiz: {
      question: "Why was Marcus's decision to stay in the theater irrational from an economic standpoint?",
      options: [
        {
          id: "opt-1",
          text: "The $36 was gone regardless of whether they stayed or left; staying merely wasted 2 hours of irreplaceable time on top of the already lost money.",
          isCorrect: true,
          mechanism: "Sunk costs are unrecoverable past expenses. Rational choices should evaluate only future incremental costs and benefits.",
        },
        {
          id: "opt-2",
          text: "Marcus was contractually obligated to remain until the final credits rolled.",
          isCorrect: false,
          mechanism: "Theater patrons are free to leave at any moment.",
        },
        {
          id: "opt-3",
          text: "The movie won 11 Academy Awards in the subsequent year.",
          isCorrect: false,
          mechanism: "His immediate experience was genuine misery; staying compounded his loss.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "Throwing Good Time After Bad",
      corePrinciple: "Honoring past costs that cannot be refunded keeps us locked in failing endeavors. Rational decisions evaluate only future payoff.",
      mentalModelFormula: "Unrecoverable Past Cost + Refusal to Accept Loss = Wasting Additional Future Resources",
      everydayRule: "Whenever you feel obligated to continue something miserable, ask: 'If I arrived at this exact moment for free with zero prior investment, would I choose this?'",
    },
    contentHooks: [
      { format: "Short Reel", hook: "The $36 mistake you make with your career, relationships, and time." },
    ],
    scriptTemplate: "You spent $30 on a bad dinner. Eating the cold food doesn't bring the money back—it just makes you sick too. That is the Sunk Cost Fallacy...",
    evidenceStatus: "well-supported",
    references: [
      {
        title: "The psychology of sunk cost",
        authors: "Hal R. Arkes & Catherine Blumer",
        year: 1985,
        url: "https://doi.org/10.1016/0749-5978(85)90049-4",
        note: "Empirical demonstrations of sunk cost entrapment across consumer and policy investment scenarios."
      },
      {
        title: "Toward a positive theory of consumer choice",
        authors: "Richard Thaler",
        year: 1980,
        url: "https://doi.org/10.1016/0167-2681(80)90051-7",
        note: "Early economic framework linking sunk cost fallacy and loss aversion in consumer behavior."
      }
    ]
  },
  {
    id: "endowment-effect",
    title: "The Endowment Effect",
    branch: "Consumer Psychology",
    categoryKey: "consumer",
    branchColor: {
      bg: "bg-[#F8F5EC]",
      text: "text-[#7D6638]",
      border: "border-[#E7DEC9]",
      accent: "#967C46",
      badge: "bg-[#F0E8D4]",
    },
    icon: "Bookmark",
    teaser: "Why we value objects dramatically more the moment our hands touch them.",
    readTime: "5 min read",
    difficulty: "Intermediate",
    studyTakeaways: [
      "Demonstrated by Richard Thaler in 1980; expanded by Kahneman & Knetsch (Coffee Mug experiment)",
      "Sellers value identical items roughly 2x higher than potential buyers",
      "Explains '30-day risk-free home trials' and car test-drives",
    ],
    scenarioHook: {
      setting: "Luxury Auto Dealership",
      character: "Patrick, Software Manager",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Patrick visited a dealership to inspect a compact commuter vehicle. The salesman smiled: 'Why don't you take this luxury sport edition home for the entire weekend, no obligation?'",
      theFriction: "Patrick drove it home, parked it in his driveway, synced his phone, and drove his children to soccer practice.",
      theReaction: "By Sunday afternoon, returning the keys felt like a painful loss rather than avoiding an expense. He signed the higher lease payment on Monday morning.",
    },
    socraticQuiz: {
      question: "Why did a weekend trial cause Patrick to sign an expensive lease he previously deemed unnecessary?",
      options: [
        {
          id: "opt-1",
          text: "Physical possession shifted his mental baseline to ownership; returning the vehicle activated loss aversion, which hurts twice as much as the pleasure of saving money.",
          isCorrect: true,
          mechanism: "Thaler showed that ownership integrates an object into our self-identity. Relinquishing it feels like personal deprivation.",
        },
        {
          id: "opt-2",
          text: "The dealership slashed the purchase price by 60% over the weekend.",
          isCorrect: false,
          mechanism: "The price remained at retail premium; his emotional attachment inflated his willingness to pay.",
        },
        {
          id: "opt-3",
          text: "He scratched the bumper and was legally compelled to buy the vehicle.",
          isCorrect: false,
          mechanism: "The car was pristine; the psychological hook was pure endowment.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "The Pain of Letting Go",
      corePrinciple: "We value things merely because we own or touch them. Retailers offer free trials because they know you will endure financial pain to avoid giving them back.",
      mentalModelFormula: "Temporary Possession ➔ Perceived Ownership ➔ Psychological Integration ➔ Relinquishing = Loss Aversion",
      everydayRule: "Before accepting a '30-day risk-free trial', ask yourself: 'Would I pay the full cash price right now to buy this?' If no, decline the trial.",
    },
    contentHooks: [
      { format: "Short Reel", hook: "Why companies give you '30-day free trials' (and the psychology behind it)." },
    ],
    scriptTemplate: "In a famous Cornell study, students given a coffee mug refused to sell it for less than $7. Students without a mug wouldn't pay more than $3. Here is the Endowment Effect...",
    evidenceStatus: "well-supported",
    references: [
      {
        title: "Experimental tests of the endowment effect and the Coase theorem",
        authors: "Daniel Kahneman, Jack L. Knetsch, & Richard H. Thaler",
        year: 1990,
        url: "https://doi.org/10.1086/261737",
        note: "Landmark experiments demonstrating that ownership substantially inflates selling prices over buying prices using consumer goods like coffee mugs."
      },
      {
        title: "Toward a positive theory of consumer choice",
        authors: "Richard Thaler",
        year: 1980,
        url: "https://doi.org/10.1016/0167-2681(80)90051-7",
        note: "Origin of the term 'endowment effect' explaining resistance to giving up acquired goods."
      }
    ]
  },
  {
    id: "choice-overload",
    title: "Choice Overload Paradox",
    branch: "Consumer Psychology",
    categoryKey: "consumer",
    branchColor: {
      bg: "bg-[#F8F5EC]",
      text: "text-[#7D6638]",
      border: "border-[#E7DEC9]",
      accent: "#967C46",
      badge: "bg-[#F0E8D4]",
    },
    icon: "Sliders",
    teaser: "Why giving people 24 choices makes them 10 times less likely to buy than giving them 6.",
    readTime: "5 min read",
    difficulty: "Beginner",
    studyTakeaways: [
      "Famous 2000 Jam Experiment by Sheena Iyengar & Mark Lepper",
      "Excessive options attract attention but can paralyze decision-making",
      "Increases post-purchase regret as shoppers wonder if another option was superior",
      "Meta-analyses show effect varies widely and depends on choice complexity and prior preferences",
    ],
    scenarioHook: {
      setting: "Gourmet Grocery Display",
      character: "Elena, Shopper",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Elena walked past a gourmet tasting display featuring 24 exotic jams. She sampled two, fascinated by the variety.",
      theFriction: "When she looked at the shelf to buy a jar for breakfast, she felt cognitive exhaustion comparing nuances between raspberry-lime and wild berry-thyme.",
      theReaction: "Worried she would choose the wrong flavor, she sighed and walked away with nothing. On days when only 6 jams were shown, purchases surged 10x.",
    },
    socraticQuiz: {
      question: "Why did 24 flavors of jam lead to 10 times fewer purchases than 6 flavors?",
      options: [
        {
          id: "opt-1",
          text: "Evaluating 24 options overwhelms working memory, inflating the anticipated regret of picking the wrong one, which causes the brain to default to no action.",
          isCorrect: true,
          mechanism: "Iyengar and Lepper proved that while 24 choices drew more lookers (60% vs 40%), only 3% bought from the 24-jam display compared to 30% from the 6-jam display.",
        },
        {
          id: "opt-2",
          text: "The 24 jams were priced higher than the 6 jams.",
          isCorrect: false,
          mechanism: "All jams were priced identically; cognitive friction alone caused the drop in sales.",
        },
        {
          id: "opt-3",
          text: "Consumers disliked the taste of gourmet jam combinations.",
          isCorrect: false,
          mechanism: "Taste ratings were high; the decision burden was what exhausted shoppers.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "The Tyranny of Freedom",
      corePrinciple: "More choices feel desirable in theory, but paralyze in practice. Simplicity accelerates clarity and confidence.",
      mentalModelFormula: "Too Many Choices ➔ Comparison Fatigue ➔ Anticipated Regret ➔ Decision Paralysis",
      everydayRule: "When building a product or offering a service, limit options to 3 clear, distinct paths. Less choice equals more action.",
    },
    contentHooks: [
      { format: "Short Reel", hook: "Why Netflix takes you 45 minutes to find a movie to watch (Choice Overload)." },
    ],
    scriptTemplate: "You think you want 50 options. Your brain actually wants 3. Here is the famous Jam Experiment that changed modern retail...",
    evidenceStatus: "mixed-evidence",
    references: [
      {
        title: "When choice is demotivating: Can one desire too much of a good thing?",
        authors: "Sheena S. Iyengar & Mark R. Lepper",
        year: 2000,
        url: "https://pubmed.ncbi.nlm.nih.gov/11138768/",
        note: "Classic field experiment testing consumer purchasing rates when choosing from extensive (24) vs limited (6) jam selections."
      },
      {
        title: "Can there ever be too many options? A meta-analytic review of choice overload",
        authors: "Benjamin Scheibehenne, Rainer Greifeneder, & Peter M. Todd",
        year: 2010,
        url: "https://doi.org/10.1086/651235",
        note: "Meta-analysis demonstrating that mean effect size across 63 conditions was virtually zero, highlighting critical boundary conditions."
      }
    ]
  },

  // ==========================================
  // 5. BEHAVIORAL PSYCHOLOGY (5 Topics)
  // ==========================================
  {
    id: "hedonic-treadmill",
    title: "The Hedonic Treadmill",
    branch: "Behavioral Psychology",
    categoryKey: "behavioral",
    branchColor: {
      bg: "bg-[#EFF4EE]",
      text: "text-[#52684F]",
      border: "border-[#D2E0D0]",
      accent: "#647D61",
      badge: "bg-[#E3ECE1]",
    },
    icon: "Compass",
    teaser: "The biological reason why achieving your dream milestone only keeps you happy for 14 days.",
    readTime: "6 min read",
    difficulty: "Advanced",
    studyTakeaways: [
      "Brickman & Campbell (1971) lottery winners vs accident victims study",
      "Dopamine baseline resets rapidly to preserve motivation and survival drive",
      "Eudaimonic depth (mastery & meaning) outlasts hedonic consumption spikes",
    ],
    scenarioHook: {
      setting: "Dream Promotion & Penthouse Move",
      character: "Marcus, 29-Year-Old Founder",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
      story: "For four intense years, Marcus believed: 'If I just sell my startup for $2M and move into a downtown penthouse, my existential anxiety will disappear forever.'",
      theFriction: "In June, the funds cleared and he moved into the high-rise. Week 1 was ecstasy; Week 2 was deeply satisfying.",
      theReaction: "By Week 4, Marcus was sitting on his designer sofa, looking out at the skyline, feeling the exact same baseline restlessness and anxiety he had in his college dorm room.",
    },
    socraticQuiz: {
      question: "Why did Marcus's happiness swiftly plummet back to his old baseline despite achieving everything he ever dreamt of?",
      options: [
        {
          id: "opt-1",
          text: "Hedonic Adaptation resets our emotional baseline so that animals do not stay complacent, ensuring we remain driven to tackle future survival challenges.",
          isCorrect: true,
          mechanism: "Evolution did not design happiness as a permanent reward. Dopamine receptors down-regulate to re-establish hunger and ambition once a new standard is normalized.",
        },
        {
          id: "opt-2",
          text: "Marcus suffered from an unusual genetic defect preventing the experience of joy.",
          isCorrect: false,
          mechanism: "This phenomenon is universal. Brickman's classic study revealed that lottery winners returned to baseline happiness within 12 months.",
        },
        {
          id: "opt-3",
          text: "He simply needed to spend more money on exotic travel to sustain the high.",
          isCorrect: false,
          mechanism: "Increasing consumption simply accelerates tolerance, requiring larger stimuli for smaller, briefer spikes.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "The Happiness Thermostat",
      corePrinciple: "External achievements produce temporary spikes, but internal biology quickly normalizes them back to an emotional set point.",
      mentalModelFormula: "Goal Achieved ➔ Dopamine Surge ➔ Neural Habituation ➔ Baseline Reset ➔ New Craving",
      everydayRule: "Stop expecting external milestones to heal internal unrest. Shift focus from consuming spikes to purposeful daily craft.",
    },
    contentHooks: [
      { format: "Short Reel", hook: "Why buying your dream car will only make you happy for 14 days." },
    ],
    scriptTemplate: "In 1978, scientists studied lottery winners and accident victims. One year later, their happiness was virtually identical. Here is why...",
    evidenceStatus: "well-supported",
    references: [
      {
        title: "Lottery winners and accident victims: Is happiness relative?",
        authors: "Philip Brickman, Dan Coates, & Ronnie Janoff-Bulman",
        year: 1978,
        url: "https://pubmed.ncbi.nlm.nih.gov/690806/",
        note: "Classic investigation into baseline emotional adaptation following major positive and negative life events."
      },
      {
        title: "Beyond the hedonic treadmill: Revising the adaptation theory of well-being",
        authors: "Ed Diener, Richard E. Lucas, & Christie Napa Scollon",
        year: 2006,
        url: "https://pubmed.ncbi.nlm.nih.gov/16719675/",
        note: "Major theoretical update demonstrating set-point stability alongside domain-specific adaptation differences."
      }
    ]
  },
  {
    id: "hyperbolic-discounting",
    title: "Hyperbolic Discounting",
    branch: "Behavioral Psychology",
    categoryKey: "behavioral",
    branchColor: {
      bg: "bg-[#EFF4EE]",
      text: "text-[#52684F]",
      border: "border-[#D2E0D0]",
      accent: "#647D61",
      badge: "bg-[#E3ECE1]",
    },
    icon: "Clock",
    teaser: "Why we trade our 10-year dreams for 10 minutes of instant dopamine right now.",
    readTime: "5 min read",
    difficulty: "Intermediate",
    studyTakeaways: [
      "Pioneered by George Ainslie in behavioral economics",
      "Rewards close in time are discounted disproportionately against distant rewards",
      "The underlying neurological engine behind procrastination, binge eating, and debt",
    ],
    scenarioHook: {
      setting: "Sunday Evening Goal Setting",
      character: "David, Software Developer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
      story: "On Sunday night, David committed: 'I am waking up at 6:00 AM every day this week to write 500 words for my technical book before work.'",
      theFriction: "At 6:00 AM on Monday, the alarm rings. The room is chilly and dark.",
      theReaction: "In that exact instant, the abstract benefit of 'published author in 12 months' drops to near zero, while the immediate tactile comfort of '30 more minutes under the warm blanket' surges in value. He hits snooze three times.",
    },
    socraticQuiz: {
      question: "Why did David trade his long-term dream of publishing a book for 30 minutes of sleep?",
      options: [
        {
          id: "opt-1",
          text: "Hyperbolic discounting curves cause human brains to exponentially devalue future outcomes as delay increases, favoring immediate sensory relief over distant abstract rewards.",
          isCorrect: true,
          mechanism: "Evolutionary fitness favored immediate calories and warmth over abstract planning for the next year. Present rewards dominate our dopamine architecture.",
        },
        {
          id: "opt-2",
          text: "David possessed zero genuine interest in writing a technical book.",
          isCorrect: false,
          mechanism: "His Sunday intention was sincere; the temporal proximity of the immediate blanket warped his valuation.",
        },
        {
          id: "opt-3",
          text: "Waking up at 6:00 AM is medically dangerous for adult humans.",
          isCorrect: false,
          mechanism: "It is standard sleep architecture; time-discounting was the cognitive barrier.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "The Time Horizon Trap",
      corePrinciple: "We are rational planners for next week, but myopic hedonists in the present moment. Beating it requires bringing future consequences into today.",
      mentalModelFormula: "Value of Future Reward = Real Value ÷ (1 + k × Time Delay)",
      everydayRule: "Make desirable long-term habits immediately rewarding (e.g., pair writing with favorite tea), and make bad habits immediately painful.",
    },
    contentHooks: [
      { format: "Short Reel", hook: "The mathematical reason you procrastinate on your biggest life goals." },
    ],
    scriptTemplate: "Would you rather have $100 today or $110 tomorrow? Most say $100 today. But what about $100 in a year vs $110 in a year and a day? That is Hyperbolic Discounting...",
    evidenceStatus: "well-supported",
    references: [
      {
        title: "Specious reward: A behavioral theory of impulsiveness and impulse control",
        authors: "George Ainslie",
        year: 1975,
        url: "https://pubmed.ncbi.nlm.nih.gov/1099599/",
        note: "Mathematical formalization of non-linear temporal discounting and motivational conflict over delayed rewards."
      },
      {
        title: "Golden eggs and hyperbolic discounting",
        authors: "David Laibson",
        year: 1997,
        url: "https://doi.org/10.1162/003355397555253",
        note: "Economic analysis applying quasi-hyperbolic discounting models to personal savings, consumption, and self-control."
      }
    ]
  },
  {
    id: "variable-rewards",
    title: "Variable Reward Schedules",
    branch: "Behavioral Psychology",
    categoryKey: "behavioral",
    branchColor: {
      bg: "bg-[#EFF4EE]",
      text: "text-[#52684F]",
      border: "border-[#D2E0D0]",
      accent: "#647D61",
      badge: "bg-[#E3ECE1]",
    },
    icon: "Repeat",
    teaser: "The neurological mechanism that makes slot machines and social media feeds impossible to quit.",
    readTime: "5 min read",
    difficulty: "Intermediate",
    studyTakeaways: [
      "Discovered by B.F. Skinner in operant conditioning experiments with pigeons",
      "Unpredictable rewards trigger significantly higher dopamine surges than predictable rewards",
      "Core design architecture of infinite scroll feeds, notification badges, and gacha games",
    ],
    scenarioHook: {
      setting: "Bedtime Smartphone Browsing",
      character: "Chloe, College Student",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Chloe got into bed at 11:00 PM intending to check one work email before turning off the light.",
      theFriction: "She opened Instagram and swiped down to refresh. One boring ad, one boring photo, then suddenly a hilarious, captivating 15-second reel.",
      theReaction: "Her brain lit up with anticipation: 'What will the next swipe bring?' She continued swiping through boring clips in search of the next dopamine hit until 1:15 AM.",
    },
    socraticQuiz: {
      question: "Why does an unpredictable feed create far stronger addiction than an app where every single post is fantastic?",
      options: [
        {
          id: "opt-1",
          text: "Dopamine is released in response to prediction error and anticipation. Unpredictable reward intervals keep the brain in a perpetual state of hungry vigilance.",
          isCorrect: true,
          mechanism: "Skinner showed that animals press levers most compulsively when rewards appear at random intervals. Certainty causes dopamine to plateau; uncertainty inflates it.",
        },
        {
          id: "opt-2",
          text: "Chloe was researching social trends for an academic sociology paper.",
          isCorrect: false,
          mechanism: "Her scrolling was involuntary habit loop behavior driven by intermittent reinforcement.",
        },
        {
          id: "opt-3",
          text: "Social feeds contain zero ads or irrelevant content.",
          isCorrect: false,
          mechanism: "The presence of boring content is essential; it creates the unpredictable gap that makes the good content hit harder.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "The Slot Machine in Your Pocket",
      corePrinciple: "Unpredictability generates compulsion. When you never know which swipe will pay off, you never stop swiping.",
      mentalModelFormula: "Cue (Boredom) ➔ Action (Pull to Refresh) ➔ Variable Reward (Random High-Value Post) ➔ Deepened Addiction",
      everydayRule: "Turn your smartphone screen to grayscale. Removing the colorful variable rewards strips the dopamine punch from your apps.",
    },
    contentHooks: [
      { format: "Short Reel", hook: "How social apps use 1950s casino psychology to steal 3 hours of your day." },
    ],
    scriptTemplate: "B.F. Skinner gave pigeons food every 10 pecks. Then he gave them food randomly. The result? They couldn't stop pecking. Here is why you can't put your phone down...",
    evidenceStatus: "well-supported",
    references: [
      {
        title: "Schedules of reinforcement",
        authors: "Charles B. Ferster & B. F. Skinner",
        year: 1957,
        url: "https://doi.org/10.1037/10627-000",
        note: "Definitive behavioral experiments detailing response rates under fixed vs variable interval and ratio reinforcement schedules."
      },
      {
        title: "Predictive reward signal of dopamine neurons",
        authors: "Wolfram Schultz",
        year: 1998,
        url: "https://pubmed.ncbi.nlm.nih.gov/9658025/",
        note: "Neurophysiological evidence demonstrating that midbrain dopamine neurons encode reward prediction error under variable outcomes."
      }
    ]
  },
  {
    id: "default-effect",
    title: "The Default Effect",
    branch: "Behavioral Psychology",
    categoryKey: "behavioral",
    branchColor: {
      bg: "bg-[#EFF4EE]",
      text: "text-[#52684F]",
      border: "border-[#D2E0D0]",
      accent: "#647D61",
      badge: "bg-[#E3ECE1]",
    },
    icon: "Sliders",
    teaser: "How changing the pre-checked box increased organ donation rates from 15% to 99%.",
    readTime: "5 min read",
    difficulty: "Beginner",
    studyTakeaways: [
      "Documented by Eric Johnson & Daniel Goldstein in their 2003 Science paper",
      "People disproportionately stick with the default option due to cognitive inertia",
      "Cornerstone of 'Nudge' theory (Richard Thaler & Cass Sunstein)",
    ],
    scenarioHook: {
      setting: "European DMV Licensing Counter",
      character: "German vs Austrian Citizens",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Germany and Austria share similar culture, language, and geography. Yet Germany had an organ donation consent rate of only 12%, while Austria stood at 99.98%.",
      theFriction: "Religious, educational, and economic factors could not account for the staggering difference.",
      theReaction: "The difference was a single form checkbox: Germany required citizens to check a box to opt IN. Austria made donation the default and required checking a box to opt OUT.",
    },
    socraticQuiz: {
      question: "Why did a pre-checked box result in an 88% higher donation rate across identical cultural groups?",
      options: [
        {
          id: "opt-1",
          text: "The default option is interpreted as an implicit institutional recommendation, and human cognitive inertia makes opting out feel like high-effort friction.",
          isCorrect: true,
          mechanism: "Johnson and Goldstein showed that humans interpret defaults as the safe, endorsed path. Overriding a default requires active cognitive effort and risk tolerance.",
        },
        {
          id: "opt-2",
          text: "Austrian citizens were paid a significant financial bonus for donating organs.",
          isCorrect: false,
          mechanism: "There was zero monetary compensation in either country; form design alone determined the outcome.",
        },
        {
          id: "opt-3",
          text: "German citizens harbored deep cultural animosity toward medical transplantation.",
          isCorrect: false,
          mechanism: "Surveys showed over 80% of Germans approved of donation; they simply failed to check the opt-in box.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "The Power of the Pre-Selected Path",
      corePrinciple: "Whatever is set as the default will be accepted by the overwhelming majority. Whoever designs the default controls the outcome.",
      mentalModelFormula: "Complex Decision + High Cognitive Effort ➔ Default Option Accepted Without Resistance",
      everydayRule: "Design your physical and digital environment so that the productive choice is the default (e.g., put reading books on your pillow, not your phone).",
    },
    contentHooks: [
      { format: "Short Reel", hook: "The 1 checkbox trick that saves thousands of lives across Europe." },
    ],
    scriptTemplate: "Why do 99% of Austrians donate organs, but only 12% of Germans do? It's not culture. It's a single pre-checked box. Here is the Default Effect...",
    evidenceStatus: "well-supported",
    references: [
      {
        title: "Do defaults save lives?",
        authors: "Eric J. Johnson & Daniel Goldstein",
        year: 2003,
        url: "https://pubmed.ncbi.nlm.nih.gov/14631022/",
        note: "Empirical paper in Science analyzing opt-in versus opt-out default policies in European organ donation rates."
      },
      {
        title: "Nudge: Improving decisions about health, wealth, and happiness",
        authors: "Richard H. Thaler & Cass R. Sunstein",
        year: 2008,
        url: "https://www.worldcat.org/title/213849318",
        note: "Comprehensive behavioral framework detailing choice architecture and the behavioral power of default settings."
      }
    ]
  },
  {
    id: "habit-stacking",
    title: "Habit Stacking",
    branch: "Behavioral Psychology",
    categoryKey: "behavioral",
    branchColor: {
      bg: "bg-[#EFF4EE]",
      text: "text-[#52684F]",
      border: "border-[#D2E0D0]",
      accent: "#647D61",
      badge: "bg-[#E3ECE1]",
    },
    icon: "Layers",
    teaser: "How piggybacking new habits onto existing neural pathways makes consistency effortless.",
    readTime: "5 min read",
    difficulty: "Beginner",
    studyTakeaways: [
      "Popularized by BJ Fogg (Tiny Habits) and James Clear (Atomic Habits)",
      "Leverages established synaptic connections rather than building neural paths from scratch",
      "Formula: 'After [CURRENT HABIT], I will [NEW HABIT]'",
    ],
    scenarioHook: {
      setting: "Morning Kitchen Routine",
      character: "Oliver, Founder",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
      story: "For three years, Oliver tried and failed to meditate for 5 minutes every day. He would remember at 11:30 PM in bed when he was already exhausted.",
      theFriction: "Trying to rely on willpower or phone notification reminders failed repeatedly.",
      theReaction: "He tied meditation to his unshakeable 7:00 AM coffee routine: 'While my espresso is brewing, I will sit on the kitchen stool and take 10 deep breaths.' He has maintained the habit for 420 consecutive days.",
    },
    socraticQuiz: {
      question: "Why did tying meditation to his morning coffee succeed when phone reminders failed for three years?",
      options: [
        {
          id: "opt-1",
          text: "Making coffee was already an automated neural circuit with a concrete sensory cue, providing a built-in neurological anchor for the new behavior.",
          isCorrect: true,
          mechanism: "Synaptic pruning eliminates unused pathways, but strengthens established ones. Piggybacking onto an existing robust pathway bypasses executive initiation friction.",
        },
        {
          id: "opt-2",
          text: "Caffeine stimulates the prefrontal cortex to make meditation biologically easier.",
          isCorrect: false,
          mechanism: "He meditated while the coffee was brewing, before drinking any caffeine; the environmental cue was what mattered.",
        },
        {
          id: "opt-3",
          text: "Oliver hired an executive meditation coach to stand in his kitchen.",
          isCorrect: false,
          mechanism: "The intervention was self-directed habit architecture.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "Synaptic Piggybacking",
      corePrinciple: "Do not build a new habit in empty mental space. Anchor it directly to an automated behavior you already perform without thinking.",
      mentalModelFormula: "Established Anchor Habit ➔ Immediate Sensory Trigger ➔ New Micro-Habit ➔ Combined Automatic Loop",
      everydayRule: "Write down your unshakeable daily anchors (pouring coffee, brushing teeth, closing laptop). Stack your desired new habits immediately behind them.",
    },
    contentHooks: [
      { format: "Short Reel", hook: "The 2-minute neuro-hack that makes any new habit stick on autopilot." },
    ],
    scriptTemplate: "Stop relying on motivation to build habits. Use Habit Stacking instead. Here is the exact formula that changes your routine in 7 days...",
    evidenceStatus: "well-supported",
    references: [
      {
        title: "Tiny habits: The small changes that change everything",
        authors: "B. J. Fogg",
        year: 2019,
        url: "https://www.worldcat.org/title/1107440409",
        note: "Behavioral design methodology anchoring new target micro-behaviors to existing daily routine cues."
      },
      {
        title: "The habitual consumer",
        authors: "Wendy Wood & David T. Neal",
        year: 2009,
        url: "https://doi.org/10.1016/j.jcps.2009.08.003",
        note: "Psychological review on habit formation showing that stable environmental context cues automate recurring behavior patterns."
      }
    ]
  },

  // ==========================================
  // 6. NEUROPSYCHOLOGY & EMOTION (5 Topics)
  // ==========================================
  {
    id: "somatic-marker-hypothesis",
    title: "Somatic Marker Hypothesis",
    branch: "Neuropsychology & Emotion",
    categoryKey: "neuropsychology",
    branchColor: {
      bg: "bg-[#F8F0F2]",
      text: "text-[#82525C]",
      border: "border-[#E7D4DA]",
      accent: "#9A636F",
      badge: "bg-[#F1DEE4]",
    },
    icon: "Activity",
    teaser: "Why your gut feelings are actual neurological shortcuts calculated by your body.",
    readTime: "6 min read",
    difficulty: "Advanced",
    studyTakeaways: [
      "Formulated by Antonio Damasio in 'Descartes' Error' (1994)",
      "Ventromedial prefrontal cortex links bodily emotional memories to present options",
      "Patients with damaged emotional circuits cannot make basic everyday decisions",
    ],
    scenarioHook: {
      setting: "Commercial Venture Capital Pitch",
      character: "Dr. Evelyn, Investor",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Evelyn is listening to a founder pitch with impeccable financial models and Harvard credentials. On paper, the startup is a guaranteed win.",
      theFriction: "Yet during the Q&A, Evelyn notices a subtle clenching in her stomach and a mild tightness in her chest whenever the founder discusses customer retention.",
      theReaction: "Instead of ignoring her body, she trusts the sensation and passes on the deal. Six months later, it is revealed that the founder had falsified customer metrics.",
    },
    socraticQuiz: {
      question: "What generated Evelyn's physical gut sensation before her conscious mind could detect the fraud?",
      options: [
        {
          id: "opt-1",
          text: "Somatic markers: her ventromedial prefrontal cortex recognized subtle micro-patterns from past deceptive pitches and fired autonomic bodily alerts (gut clenching) before conscious reasoning finished.",
          isCorrect: true,
          mechanism: "Damasio demonstrated that gut feelings are not mystical; they are somatic bodily signals generated by past experiences that rapidly filter choices to protect the organism.",
        },
        {
          id: "opt-2",
          text: "She experienced acute food poisoning from a nearby sandwich shop.",
          isCorrect: false,
          mechanism: "The physical response was linked specifically to the founder's deceptive cues, confirmed by subsequent diligence.",
        },
        {
          id: "opt-3",
          text: "She possessed extrasensory telepathic perception.",
          isCorrect: false,
          mechanism: "The biological mechanism is grounded in the vagus nerve and ventromedial prefrontal cortex.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "The Body as the Fast Processor",
      corePrinciple: "Emotion and rationality are not opposites; emotion is the biological accelerator of rational decision-making.",
      mentalModelFormula: "Unconscious Pattern Recognition ➔ Somatic Bodily Response (Gut Feeling) ➔ Filtered Conscious Choice",
      everydayRule: "When your body feels uneasy about a decision that looks perfect on paper, do not override it—investigate what micro-cues your nervous system spotted.",
    },
    contentHooks: [
      { format: "Short Reel", hook: "The neuroscience of 'gut feeling' (Why your stomach is smarter than your brain)." },
    ],
    scriptTemplate: "People who lose their emotional brain centers cannot even decide which pen to use. Here is Damasio's Somatic Marker Hypothesis...",
    evidenceStatus: "well-supported",
    references: [
      {
        title: "Deciding advantageously before knowing the advantageous strategy",
        authors: "Antoine Bechara, Hanna Damasio, Daniel Tranel, & Antonio R. Damasio",
        year: 1997,
        url: "https://pubmed.ncbi.nlm.nih.gov/9036851/",
        note: "Iowa Gambling Task experiments showing anticipatory skin conductance responses preceding conscious risk awareness."
      },
      {
        title: "The somatic marker hypothesis and the possible functions of the prefrontal cortex",
        authors: "Antonio R. Damasio",
        year: 1996,
        url: "https://pubmed.ncbi.nlm.nih.gov/8941953/",
        note: "Theoretical framework linking ventromedial prefrontal processing of bioregulatory somatic states to rational decision-making."
      }
    ]
  },
  {
    id: "neuroplasticity-habits",
    title: "Neuroplasticity & Habit Paths",
    branch: "Neuropsychology & Emotion",
    categoryKey: "neuropsychology",
    branchColor: {
      bg: "bg-[#F8F0F2]",
      text: "text-[#82525C]",
      border: "border-[#E7D4DA]",
      accent: "#9A636F",
      badge: "bg-[#F1DEE4]",
    },
    icon: "Brain",
    teaser: "How neurons that fire together wire together, carving mental highways in your brain.",
    readTime: "5 min read",
    difficulty: "Intermediate",
    studyTakeaways: [
      "Hebb's Law (1949): 'Neurons that fire together, wire together'",
      "Myelination insulates frequently used pathways, making behaviors nearly effortless",
      "Old neural grooves never fully disappear; they are superseded by stronger competing pathways",
    ],
    scenarioHook: {
      setting: "Rehab Clinic & Guitar Practice",
      character: "Leo, Musician",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
      story: "When Leo first tried to play a complex flamenco fingerpicking pattern, his fingers shook, cramped, and felt disconnected from his thoughts.",
      theFriction: "Every note demanded agonizing concentration and conscious mental effort.",
      theReaction: "After 60 days of practicing 15 minutes each morning, his fingers glide across the fretboard effortlessly while he carries on a conversation. His brain physically remodeled its neural architecture.",
    },
    socraticQuiz: {
      question: "Why did a motion that once caused intense mental strain become completely automated?",
      options: [
        {
          id: "opt-1",
          text: "Repeated firing caused oligodendrocytes to coat the neural circuit in myelin sheath, increasing electrical transmission speed by up to 100 times and shifting execution to the basal ganglia.",
          isCorrect: true,
          mechanism: "Myelination insulates axon pathways with repeated use. Once a behavior is automated, control transfers from the energy-hungry prefrontal cortex to subcortical habit centers.",
        },
        {
          id: "opt-2",
          text: "Leo's finger muscles grew 500% larger and required no electrical signaling from the brain.",
          isCorrect: false,
          mechanism: "Motor skills are coordinated in the central nervous system, not through muscle hypertrophy.",
        },
        {
          id: "opt-3",
          text: "Neuroplasticity only exists during early childhood and ceases after age 18.",
          isCorrect: false,
          mechanism: "Modern neuroscience proves adult brains maintain neuroplasticity throughout their entire lifespan.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "Paving the Mental Highway",
      corePrinciple: "Every repeated thought or action thickens myelin insulation around that neural path. What is difficult today becomes automatic tomorrow.",
      mentalModelFormula: "Deliberate Repetition ➔ High Synaptic Firing ➔ Myelination ➔ Automated Subcortical Execution",
      everydayRule: "When fighting a bad habit, don't try to 'erase' it. Build and reinforce a new competing path until it becomes the brain's path of least resistance.",
    },
    contentHooks: [
      { format: "Short Reel", hook: "How your brain physically rewires itself in 21 days (The science of Myelin)." },
    ],
    scriptTemplate: "Neurons that fire together, wire together. Here is how your brain physically builds highways for your habits...",
    evidenceStatus: "well-supported",
    references: [
      {
        title: "The organization of behavior: A neuropsychological theory",
        authors: "Donald O. Hebb",
        year: 1949,
        url: "https://www.worldcat.org/title/1400262",
        note: "Introduced Hebbian synaptic learning: persistent and repeated stimulation strengthens connectivity between neurons."
      },
      {
        title: "A new mechanism of nervous system plasticity: Activity-dependent myelination",
        authors: "R. Douglas Fields",
        year: 2015,
        url: "https://pubmed.ncbi.nlm.nih.gov/26585800/",
        note: "Review establishing how neural impulse activity triggers oligodendrocytes to form myelin sheaths optimizing conduction velocity."
      }
    ]
  },
  {
    id: "misattribution-of-arousal",
    title: "Misattribution of Arousal",
    branch: "Neuropsychology & Emotion",
    categoryKey: "neuropsychology",
    branchColor: {
      bg: "bg-[#F8F0F2]",
      text: "text-[#82525C]",
      border: "border-[#E7D4DA]",
      accent: "#9A636F",
      badge: "bg-[#F1DEE4]",
    },
    icon: "HeartHandshake",
    teaser: "Why crossing a terrifying suspension bridge makes people fall in love with strangers.",
    readTime: "5 min read",
    difficulty: "Intermediate",
    studyTakeaways: [
      "Classic Capilano Suspension Bridge Experiment by Dutton & Aron (1974)",
      "Physiological arousal (racing heart, sweaty palms) lacks innate meaning",
      "The brain looks to the environment to decide what emotion it is feeling",
    ],
    scenarioHook: {
      setting: "Capilano Suspension Bridge in Vancouver",
      character: "Male Hikers & Female Interviewer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Hikers crossed either a swaying, terrifying 230-foot suspension bridge over a rocky gorge, or a sturdy wooden bridge 10 feet over a shallow creek.",
      theFriction: "At the end of each bridge, an attractive female researcher asked them to fill out a brief survey and gave them her phone number for questions.",
      theReaction: "Over 50% of the men who crossed the terrifying suspension bridge called her back for a romantic date, compared to only 12.5% from the calm, safe bridge.",
    },
    socraticQuiz: {
      question: "Why were men who crossed the swaying suspension bridge 4 times more likely to call the researcher for a date?",
      options: [
        {
          id: "opt-1",
          text: "Their physiological arousal (heart pounding, adrenaline from the dangerous height) was misattributed by the brain as romantic attraction to the researcher.",
          isCorrect: true,
          mechanism: "Dutton and Aron proved that the brain feels physical arousal first, then constructs an emotional narrative based on environmental cues.",
        },
        {
          id: "opt-2",
          text: "The female researcher was friendlier to hikers on the suspension bridge.",
          isCorrect: false,
          mechanism: "Her script, behavior, and attire were standardized across both groups.",
        },
        {
          id: "opt-3",
          text: "Only romantic singles were allowed to walk on the suspension bridge.",
          isCorrect: false,
          mechanism: "Participants were randomized hikers from the general public.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "The Body Arouses, The Mind Explains",
      corePrinciple: "Your body feels physical sensations, but your mind invents the emotional story. Adrenaline from danger or exercise is easily confused for passion or anger.",
      mentalModelFormula: "Unlabeled Physiological Arousal + Environmental Cue = Fabricated Emotional Experience",
      everydayRule: "If you want a memorable first date, choose an exciting activity (rollercoaster, escape room) rather than a quiet coffee shop.",
    },
    contentHooks: [
      { format: "Short Reel", hook: "The 1974 suspension bridge test that decoded the secret of romantic chemistry." },
    ],
    scriptTemplate: "Your racing heart doesn't know the difference between fear and love. Here is the famous Suspension Bridge study...",
    evidenceStatus: "mixed-evidence",
    references: [
      {
        title: "Some evidence for heightened sexual attraction under conditions of high anxiety",
        authors: "Donald G. Dutton & Arthur P. Aron",
        year: 1974,
        url: "https://pubmed.ncbi.nlm.nih.gov/4455773/",
        note: "Famous field experiment on Capilano suspension bridge investigating physiological arousal labeling."
      },
      {
        title: "Cognitive, social, and physiological determinants of emotional state",
        authors: "Stanley Schachter & Jerome Singer",
        year: 1962,
        url: "https://pubmed.ncbi.nlm.nih.gov/14497895/",
        note: "Two-factor theory of emotion demonstrating cognitive framing of unexplained physiological arousal."
      }
    ]
  },
  {
    id: "cortisol-narrowing",
    title: "Cortisol & Cognitive Narrowing",
    branch: "Neuropsychology & Emotion",
    categoryKey: "neuropsychology",
    branchColor: {
      bg: "bg-[#F8F0F2]",
      text: "text-[#82525C]",
      border: "border-[#E7D4DA]",
      accent: "#9A636F",
      badge: "bg-[#F1DEE4]",
    },
    icon: "ShieldAlert",
    teaser: "How chronic stress literally shrinks your field of vision and creative problem solving.",
    readTime: "5 min read",
    difficulty: "Intermediate",
    studyTakeaways: [
      "Documented by Robert Sapolsky in 'Why Zebras Don't Get Ulcers'",
      "Elevated glucocorticoids impair hippocampal neurogenesis and prefrontal branching",
      "Shifts thinking from broad exploratory creativity to narrow tunnel-vision survival",
    ],
    scenarioHook: {
      setting: "Struggling Startup Boardroom",
      character: "Vanessa, CEO",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
      story: "With 6 weeks of runway left, Vanessa has slept 4 hours a night for three straight weeks, drinking 6 espressos a day.",
      theFriction: "She needs an innovative, out-of-the-box marketing pivot to save the business.",
      theReaction: "Instead of seeing creative solutions, her mind loops repeatedly on minor budget cuts and firing junior staff. Her flooded cortisol levels have chemically blinded her creative circuits.",
    },
    socraticQuiz: {
      question: "Why does chronic stress make founders and managers double down on bad, narrow solutions rather than discover innovative pivots?",
      options: [
        {
          id: "opt-1",
          text: "High cortisol forces the brain into survival conservation mode, suppressing prefrontal divergent thinking in favor of rigid, immediate threat mitigation.",
          isCorrect: true,
          mechanism: "Evolutionarily, when fleeing a predator, broad creative daydreaming is lethal. High stress chemically restricts attention to immediate defense.",
        },
        {
          id: "opt-2",
          text: "Vanessa lacked executive intellect and business training.",
          isCorrect: false,
          mechanism: "Her intellectual capacity was high; her neurochemistry had throttled her neural bandwidth.",
        },
        {
          id: "opt-3",
          text: "Cortisol increases creative problem solving by 40%.",
          isCorrect: false,
          mechanism: "Acute short stress can aid focus, but chronic cortisol is neurotoxic to creative synaptic plasticity.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "The Tunnel of Stress",
      corePrinciple: "You cannot solve complex, high-level creative problems from a state of chronic nervous system emergency. Recovery is a prerequisite for strategy.",
      mentalModelFormula: "Chronic Stress ➔ Cortisol Saturation ➔ Prefrontal Inhibition ➔ Cognitive Tunnel Vision",
      everydayRule: "When facing a crisis where you cannot see any good options, step away for an hour of aerobic movement or sleep before making strategic choices.",
    },
    contentHooks: [
      { format: "Short Reel", hook: "Why stressed people make the worst decisions (The neuroscience of tunnel vision)." },
    ],
    scriptTemplate: "When your cortisol spikes, your brain literally shuts down its creative center. Here is why you can't think when you're overwhelmed...",
    evidenceStatus: "well-supported",
    references: [
      {
        title: "Why zebras don't get ulcers: The acclaimed guide to stress, stress-related diseases, and coping",
        authors: "Robert M. Sapolsky",
        year: 2004,
        url: "https://www.worldcat.org/title/56086381",
        note: "Comprehensive overview of neuroendocrine stress pathways and their disruptive effects on prefrontal cognitive function."
      },
      {
        title: "Stress signalling pathways that impair prefrontal cortex structure and function",
        authors: "Amy F. T. Arnsten",
        year: 2009,
        url: "https://pubmed.ncbi.nlm.nih.gov/19455173/",
        note: "Review elucidating molecular mechanisms by which high catecholamine and glucocorticoid levels suppress prefrontal network connectivity."
      }
    ]
  },
  {
    id: "spotlight-effect",
    title: "The Spotlight Effect",
    branch: "Neuropsychology & Emotion",
    categoryKey: "neuropsychology",
    branchColor: {
      bg: "bg-[#F8F0F2]",
      text: "text-[#82525C]",
      border: "border-[#E7D4DA]",
      accent: "#9A636F",
      badge: "bg-[#F1DEE4]",
    },
    icon: "Eye",
    teaser: "Why you think everyone is watching and judging you, when in reality no one noticed.",
    readTime: "4 min read",
    difficulty: "Beginner",
    studyTakeaways: [
      "Documented by Thomas Gilovich and Kenneth Savitsky in 2000 (Barry Manilow T-shirt study)",
      "People overestimate how much others notice their flaws and presence by more than 200%",
      "Emanates from egocentric anchoring: we are the center of our own universe",
    ],
    scenarioHook: {
      setting: "University Lecture Hall",
      character: "Marcus, Sophomore",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Marcus spilled a drop of coffee on the collar of his white shirt before walking into a 200-person lecture.",
      theFriction: "He spent the entire 90-minute lecture sitting stiffly with his arm curled to hide the stain, convinced everyone in the room was silently mocking his clumsiness.",
      theReaction: "After class, he asked 6 classmates what they thought of his shirt. Not a single person had even noticed the stain—or his shirt color.",
    },
    socraticQuiz: {
      question: "Why did Marcus assume 200 students were staring at a tiny coffee stain that nobody actually saw?",
      options: [
        {
          id: "opt-1",
          text: "The Spotlight Effect: because we are acutely aware of our own flaws, we anchor on our intense internal experience and fail to adjust for how preoccupied other people are with themselves.",
          isCorrect: true,
          mechanism: "Gilovich's landmark study showed students predicted 50% of peers would notice an embarrassing Barry Manilow shirt; only 23% did.",
        },
        {
          id: "opt-2",
          text: "The classmates were pretending not to notice to be polite.",
          isCorrect: false,
          mechanism: "Surprise quizzes revealed classmates genuinely had zero recollection of the clothing.",
        },
        {
          id: "opt-3",
          text: "Coffee stains on white shirts are completely invisible to human retinas.",
          isCorrect: false,
          mechanism: "The stain was visible, but other people's attention was occupied with their own personal concerns.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "The Freedom of Irrelevance",
      corePrinciple: "Nobody is watching you as closely as you are watching yourself. Everyone is too busy worrying about their own spotlight to focus on yours.",
      mentalModelFormula: "Internal Hyper-Awareness of Flaw ➔ Egocentric Projection ('They all see it') ➔ Unnecessary Anxiety",
      everydayRule: "Whenever you feel embarrassed in public, remember: everyone in that room is thinking about their own hair, job, and insecurities—not yours.",
    },
    contentHooks: [
      { format: "Short Reel", hook: "The 30-second cure for social anxiety (The Spotlight Effect)." },
    ],
    scriptTemplate: "Think everyone is staring at your pimple or awkward stumble? In 2000, scientists tested this with the ugliest shirt they could find. Here is what happened...",
    evidenceStatus: "well-supported",
    references: [
      {
        title: "The spotlight effect in social judgment: An egocentric bias in estimates of the salience of one's own actions and appearance",
        authors: "Thomas Gilovich, Victoria Husted Medvec, & Kenneth Savitsky",
        year: 2000,
        url: "https://pubmed.ncbi.nlm.nih.gov/10707330/",
        note: "Empirical experiments measuring egocentric anchoring and overestimation of peer attention to personal appearance."
      }
    ]
  },
  // ==========================================
  // 7. PSYCHOANALYTIC & DEPTH PSYCHOLOGY
  // ==========================================
  {
    id: "shadow-projection",
    title: "Shadow Projection & Defense Mechanisms",
    branch: "Psychoanalytic & Depth",
    categoryKey: "psychoanalytic",
    domain: "psychology",
    branchColor: {
      bg: "bg-[#F3F0F7]",
      text: "text-[#584968]",
      border: "border-[#DFD6E8]",
      accent: "#5C527F",
      badge: "bg-[#EAE2F3]",
    },
    icon: "Eye",
    teaser: "Why the traits that infuriate you most in other people are disowned pieces of your own subconscious.",
    readTime: "5 min read",
    difficulty: "Advanced",
    studyTakeaways: [
      "Articulated by Carl Jung in depth psychology and Sigmund Freud in defense mechanisms",
      "The ego preserves its idealized self-image by displacing unacceptable desires onto others",
      "Antidote: Radical Shadow Work—identifying visceral irritation as an internal diagnostic mirror",
    ],
    scenarioHook: {
      setting: "Creative Agency Strategy Offsite",
      character: "Victoria, Creative Director",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Victoria prides herself on being effortlessly humble and dedicated. When a confident junior designer boldly pitches his ideas, Victoria feels an overwhelming surge of disgust and brands him 'insufferably arrogant'.",
      theFriction: "Her extreme emotional reaction is wildly disproportionate to the junior designer's polite demeanor.",
      theReaction: "In private therapy, Victoria discovers she has violently repressed her own ambition and desire for center stage. She was projecting her disowned craving for recognition onto him.",
    },
    socraticQuiz: {
      question: "Why did Victoria feel intense personal hatred toward a colleague who had merely shared a creative idea?",
      options: [
        {
          id: "opt-1",
          text: "Psychological Projection: Her ego disowned her own repressed hunger for attention, recognizing and attacking it in another person to protect her identity as 'humble'.",
          isCorrect: true,
          mechanism: "When a trait conflicts with ego-identity, the unconscious projects that trait onto an external target, allowing the subject to judge it without acknowledging it internally.",
        },
        {
          id: "opt-2",
          text: "The junior designer had committed an actionable ethical offense.",
          isCorrect: false,
          mechanism: "His pitch was professional; the intensity of Victoria's reaction was entirely driven by internal psychic tension.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "The Mirror of the Disowned Self",
      corePrinciple: "Until you integrate your shadow, it will govern your emotional reactions from the dark. What you condemn externally is what you fear internally.",
      mentalModelFormula: "Repressed Trait ➔ Unconscious Ego Denial ➔ Outward Projection ➔ Disproportionate Irritation",
      everydayRule: "When someone's personality triggers intense, sudden anger in you, ask: 'Where in my life do I strictly forbid myself from exhibiting that behavior?'",
    },
    contentHooks: [
      { format: "Short Reel / Insight", hook: "Why what you hate in others is actually your own hidden shadow." },
    ],
    scriptTemplate: "Notice how certain people trigger intense irritation in you for no logical reason? Carl Jung discovered that our enemies are often mirrors of our disowned selves...",
    dialectic: {
      synthesisQuestion: "Is the unconscious a primitive biological error network (Science) or an essential reservoir of human transformation (Philosophy)?",
      scientificLens: {
        school: "Implicit Cognition & Evolutionary Neuroscience",
        thinkers: ["Daniel Kahneman", "John Bargh", "Joseph LeDoux"],
        coreThesis: "The brain operates via automatic subcortical associative schemas (System 1) designed for threat mitigation and social defense.",
        mechanism: "Implicit associative bias: Subcortical amygdala networks engage sensory associations rapidly prior to deliberate cortical cognitive rationalization.",
        keyExperimentOrEvidence: "Cognitive affective experiments show that rapid emotional appraisals occur prior to conscious reflection, though laboratory implicit association measures show notable test-retest variation.",
        limitations: "Empirical cognitive science maps neurological latency, but depth psychology views the shadow as a symbolic, hermeneutic model of self-integration rather than a settled empirical constant."
      },
      philosophicalLens: {
        school: "Depth Philosophy & Analytical Psychology (Jung & Nietzsche)",
        thinkers: ["Carl Jung", "Friedrich Nietzsche", "Paul Ricoeur"],
        coreThesis: "Until you make the unconscious conscious, it will direct your life and you will call it fate.",
        framework: "The Shadow & Archetypal Integration",
        aphorismOrText: "No tree, it is said, can grow to the heavens unless its roots reach down to hell. — Carl Jung",
        practicalWisdom: "Treat strong irrational judgments of other people not as moral truths, but as personal confessions of your own repressed potential."
      },
      dialecticSynthesis: {
        synthesisTitle: "The Convergence of Implicit Bias and The Shadow",
        integrationInsight: "Cognitive science measures the physiological reality of automatic defense mechanisms; depth psychology provides a theoretical framework to reflect upon and integrate disowned impulses.",
        actionableParadox: "To achieve genuine moral goodness, you must first acknowledge and integrate your capacity for deception and aggression."
      }
    },
    evidenceStatus: "philosophical-tradition",
    references: [
      {
        title: "Aion: Researches into the phenomenology of the self",
        authors: "Carl G. Jung",
        year: 1951,
        url: "https://www.worldcat.org/title/400593",
        note: "Primary text detailing the analytical psychology archetype of the shadow and ego projection."
      },
      {
        title: "Carl Gustav Jung",
        authors: "Internet Encyclopedia of Philosophy",
        year: 2020,
        url: "https://iep.utm.edu/jung/",
        note: "Peer-reviewed philosophical encyclopedia entry analyzing Jungian analytical psychology, the unconscious, and projection."
      }
    ]
  },

  // ==========================================
  // 8. STOICISM & HELLENISTIC PHILOSOPHY
  // ==========================================
  {
    id: "stoic-dichotomy-of-control",
    title: "The Dichotomy of Control & Cognitive Reframing",
    branch: "Stoicism & Hellenistic",
    categoryKey: "stoicism",
    domain: "philosophy",
    branchColor: {
      bg: "bg-[#F7F4EE]",
      text: "text-[#6E593E]",
      border: "border-[#E5DDD0]",
      accent: "#8C7355",
      badge: "bg-[#EDE5D6]",
    },
    icon: "Scroll",
    teaser: "How dividing reality into 'Up to Us' and 'Not Up to Us' eradicates 90% of chronic mental anxiety.",
    readTime: "4 min read",
    difficulty: "Beginner",
    studyTakeaways: [
      "Founded by Zeno of Citium; codified by Epictetus in the Enchiridion and Marcus Aurelius in Meditations",
      "Only internal judgments, intentions, and character are truly within our sovereign control",
      "Modern direct descendant: Albert Ellis's Rational Emotive Behavior Therapy (REBT) and Aaron Beck's CBT",
    ],
    scenarioHook: {
      setting: 'Airport Terminal During a Flight Cancellation',
      character: 'Helena, Senior Consultant',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
      story: 'A sudden blizzard grounds all flights, making Helena miss a career-defining client pitch in Chicago.',
      theFriction: 'Around her, stranded passengers scream at desk agents, kick luggage, and spike their cortisol into hypertension.',
      theReaction: 'Helena breathes deeply and applies Epictetus: The storm and airline decisions are external (not up to me). My composure and how I adapt right now are internal (up to me). She calmly opens her laptop to record a video pitch.',
    },
    socraticQuiz: {
      question: "Why did Helena experience calm while passengers around her suffered severe emotional breakdown?",
      options: [
        {
          id: "opt-1",
          text: "She recognized that external events cannot harm psychological tranquility; only our internal judgments about external events can cause suffering.",
          isCorrect: true,
          mechanism: "Stoic dichotomy of control separates reality into internal sovereignty (attitudes, choices) and external fate (weather, other people), severing attachment to the uncontrollable.",
        },
        {
          id: "opt-2",
          text: "She did not care about her career or the consulting client.",
          isCorrect: false,
          mechanism: "Stoics care deeply about duty and excellence, but refuse to tie their emotional sanity to probabilistic outcomes.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "The Fortress of the Inner Citadel",
      corePrinciple: "Suffering is not caused by what happens to you, but by the impossible demand that external reality conform to your expectations.",
      mentalModelFormula: "Event (Neutral) ➔ Internal Judgment (Sovereign) ➔ Chosen Response (Virtuous)",
      everydayRule: "When feeling overwhelmed, ask: 'Is this specific factor within my direct control?' If no, declare: 'Then it is none of my business to worry about it.'",
    },
    contentHooks: [
      { format: "Short Reel / Insight", hook: "The 2,000-year-old Stoic trick that destroys 90% of daily stress." },
    ],
    scriptTemplate: "Marcus Aurelius was Emperor of Rome during a deadly plague and war. His secret to staying calm? A simple distinction called the Dichotomy of Control...",
    dialectic: {
      synthesisQuestion: "Can cognitive voluntary reframing conquer involuntary biological threat reactions?",
      scientificLens: {
        school: "Cognitive Behavioral Science (CBT & Neuroplasticity)",
        thinkers: ["Aaron Beck", "Albert Ellis"],
        coreThesis: "Emotions are not triggered by events themselves, but by our cognitive appraisals and intermediate schemas.",
        mechanism: "Appraisal theory: The prefrontal cortex modulates amygdalar emotional reactivity through semantic down-regulation.",
        keyExperimentOrEvidence: "Neuroimaging studies demonstrate that intentional cognitive reappraisal modulates blood-oxygen-level dependent (BOLD) activity in the amygdala via prefrontal recruitment.",
        limitations: "Severe somatic panic attacks can flood the nervous system before prefrontal reappraisal can intervene."
      },
      philosophicalLens: {
        school: "Stoicism (Epictetus & Marcus Aurelius)",
        thinkers: ["Epictetus", "Marcus Aurelius", "Seneca"],
        coreThesis: "Men are disturbed not by things, but by the view which they take of them.",
        framework: "The Dichotomy of Control (Ta eph' hemin vs Ta ouk eph' hemin)",
        aphorismOrText: "If thou art pained by any external thing, it is not this that disturbs thee, but thy own judgment about it. And it is in thy power now to wipe out this judgment. — Marcus Aurelius, Meditations VIII.47",
        practicalWisdom: "Before reacting, ruthlessly divide the problem into what is in your power (virtue) and what is not (fate)."
      },
      dialecticSynthesis: {
        synthesisTitle: "The Ancient Roots of Modern CBT",
        integrationInsight: "Aaron Beck and Albert Ellis explicitly acknowledged Stoicism as the intellectual progenitor of Cognitive Behavioral Therapy. Science proved the neurological pathway; Stoicism provided the normative life philosophy that makes daily practice meaningful.",
        actionableParadox: "Control your judgment with absolute discipline, while surrendering all attachment to the external outcome."
      }
    },
    evidenceStatus: "philosophical-tradition",
    references: [
      {
        title: "The Enchiridion",
        authors: "Epictetus (trans. Elizabeth Carter)",
        year: 1758,
        url: "https://classics.mit.edu/Epictetus/epicench.html",
        note: "Primary text establishing the fundamental Stoic distinction between things in our control and things not in our control."
      },
      {
        title: "Stoicism",
        authors: "Stanford Encyclopedia of Philosophy",
        year: 2018,
        url: "https://plato.stanford.edu/entries/stoicism/",
        note: "Authoritative academic overview of Hellenistic Stoic ethics, cognitive theory of passions, and dichotomy of control."
      }
    ]
  },

  // ==========================================
  // 9. EXISTENTIALISM & PHENOMENOLOGY
  // ==========================================
  {
    id: "existential-bad-faith",
    title: "Bad Faith & Radical Freedom (Mauvaise Foi)",
    branch: "Existentialism",
    categoryKey: "existentialism",
    domain: "philosophy",
    branchColor: {
      bg: "bg-[#F8F2F0]",
      text: "text-[#7E463E]",
      border: "border-[#EBD9D5]",
      accent: "#9B5D55",
      badge: "bg-[#F3E3DF]",
    },
    icon: "Flame",
    teaser: "Why we pretend we 'have no choice' in order to escape the dizzying terror of absolute freedom.",
    readTime: "4 min read",
    difficulty: "Intermediate",
    studyTakeaways: [
      "Formulated by Jean-Paul Sartre in Being and Nothingness (1943)",
      "'Existence precedes Essence': Humans have no pre-set nature; we define ourselves solely through action",
      "Bad Faith (Mauvaise Foi) is the psychological defense of pretending you are an object trapped by roles",
    ],
    scenarioHook: {
      setting: "Corporate Law Firm at 8:00 PM",
      character: "Julian, Senior Associate",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Julian despises corporate litigation and dreams of teaching literature. Yet every day he works 14 hours, complaining to friends: 'I have no choice. I have to do this.'",
      theFriction: "Julian's claim that he 'has no choice' is a psychological lie invented to escape the terror of making a radical life decision.",
      theReaction: "Sartre would point out that Julian chooses to set his alarm, put on a suit, and walk into the firm every morning. He is radically free, but prefers the comfort of feeling trapped.",
    },
    socraticQuiz: {
      question: "Why does Julian tell himself and others that he 'has no choice' but to stay in a career he hates?",
      options: [
        {
          id: "opt-1",
          text: "Bad Faith: It is emotionally less terrifying to pretend external necessity dictates your life than to accept full responsibility for your freedom.",
          isCorrect: true,
          mechanism: "Sartre identified that humans flee from freedom because radical autonomy brings radical responsibility; claiming helplessness is an ego-defense against existential anguish.",
        },
        {
          id: "opt-2",
          text: "Physical laws of thermodynamics literally constrain his legs to the law firm chair.",
          isCorrect: false,
          mechanism: "His body is physically capable of walking away; the obstacle is psychological avoidance of uncertainty and social disapproval.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "The Anguish of the Unwritten Life",
      corePrinciple: "You are not a waiter, a lawyer, or a victim: you are a human choosing to play that role every single day. The moment you accept your radical freedom, excuses vanish.",
      mentalModelFormula: "Radical Freedom ➔ Existential Anguish ➔ Bad Faith ('I have no choice') ➔ Authentic Choice",
      everydayRule: "Replace the words 'I have to' with 'I choose to, because I prefer the consequences over the alternative.' Notice how immediately power returns to your hands.",
    },
    contentHooks: [
      { format: "Short Reel / Insight", hook: "Why you say 'I have no choice' (and how Sartre called you out)." },
    ],
    scriptTemplate: "Whenever someone says 'I hate my job but I have no choice,' philosopher Jean-Paul Sartre smiled. He called this 'Bad Faith'—the ultimate lie we tell ourselves...",
    dialectic: {
      synthesisQuestion: "Is human anxiety a neurochemical glitch to medicate (Science) or an existential awakening to embrace (Philosophy)?",
      scientificLens: {
        school: "Evolutionary Neurobiology & Terror Management Theory",
        thinkers: ["Sheldon Solomon", "Jeff Greenberg", "Tom Pyszczynski"],
        coreThesis: "Existential dread arises from the unique human awareness of mortality colliding with animal self-preservation instincts.",
        mechanism: "Cultural worldviews and social roles act as psychological buffers to insulate against paralyzing existential dread.",
        keyExperimentOrEvidence: "Mortality salience trials prove humans cling tightly to cultural scripts when reminded of impermanence.",
        limitations: "Biological psychology can pathologize existential questioning as pure anxiety disorder rather than philosophical maturation."
      },
      philosophicalLens: {
        school: "Existentialism (Sartre, Camus & Kierkegaard)",
        thinkers: ["Jean-Paul Sartre", "Albert Camus", "Søren Kierkegaard"],
        coreThesis: "Existence precedes essence: We are not pre-programmed machines; we are condemned to be free and construct our own meaning.",
        framework: "Bad Faith (Mauvaise Foi) & Radical Freedom",
        aphorismOrText: "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does. — Sartre",
        practicalWisdom: "Stop blaming circumstances, genetic temperament, or society for your choices; radical ownership is the price of freedom."
      },
      dialecticSynthesis: {
        synthesisTitle: "From Neurotic Panic to Radical Sovereignty",
        integrationInsight: "Psychology diagnoses existential dread as mortality terror and cognitive avoidance. Philosophy reframes that exact same dread as the dizziness of freedom. Together, they guide the user to neither deny anxiety nor drown in it, but use it as fuel for authentic action.",
        actionableParadox: "Acknowledge the biological urge to hide in crowd conformity, and choose radical individual accountability anyway."
      }
    },
    evidenceStatus: "philosophical-tradition",
    references: [
      {
        title: "Being and nothingness: An essay on phenomenological ontology",
        authors: "Jean-Paul Sartre (trans. Hazel E. Barnes)",
        year: 1956,
        url: "https://www.worldcat.org/title/255554",
        note: "Seminal existential treatise detailing anguish, radical freedom, and the mechanisms of bad faith (mauvaise foi)."
      },
      {
        title: "Existentialism",
        authors: "Stanford Encyclopedia of Philosophy",
        year: 2020,
        url: "https://plato.stanford.edu/entries/existentialism/",
        note: "Comprehensive overview of existential phenomenology, authenticity, angst, and Sartre's account of bad faith."
      }
    ]
  },

  // ==========================================
  // 10. EPISTEMOLOGY & RATIONALISM
  // ==========================================
  {
    id: "allegory-of-the-cave",
    title: "Plato's Cave & Cognitive Epistemic Bubbles",
    branch: "Epistemology",
    categoryKey: "epistemology",
    domain: "philosophy",
    branchColor: {
      bg: "bg-[#F0F4F6]",
      text: "text-[#3D5763]",
      border: "border-[#D6E2E7]",
      accent: "#4F6D7A",
      badge: "bg-[#E1ECF0]",
    },
    icon: "Lightbulb",
    teaser: "Why humans passionately defend the shadows on the wall and attack anyone who tries to show them the sun.",
    readTime: "5 min read",
    difficulty: "Advanced",
    studyTakeaways: [
      "Presented in Plato's Republic Book VII (c. 375 BCE)",
      "Chained prisoners mistake two-dimensional cast shadows for the totality of ultimate truth",
      "Modern equivalent: Algorithmic echo chambers, cognitive confirmation bias, and epistemic bubbles",
    ],
    scenarioHook: {
      setting: "Social Media Newsfeed Bubble",
      character: "Devon, Political Campaigner",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Devon spends 4 hours a day on customized feeds that confirm his exact partisan perspective, reinforcing his belief that the rival camp is 100% evil.",
      theFriction: "When a colleague presents verifiable primary statistical data contradicting his narrative, Devon feels extreme rage rather than curiosity.",
      theReaction: "Like Plato's cave dwellers who threatened to kill the philosopher who returned from the sunlight, Devon blocks his colleague to keep his comfortable shadows intact.",
    },
    socraticQuiz: {
      question: "Why do humans often react with hostility when their foundational worldview is shown to be a shadow?",
      options: [
        {
          id: "opt-1",
          text: "Epistemic fragility: When beliefs are intertwined with personal identity and social belonging, presenting reality feels like an existential assault.",
          isCorrect: true,
          mechanism: "Plato noted that prisoners chained since childhood are emotionally attached to their illusions; cognitive fluency in familiar shadows beats the blinding discomfort of sunlight.",
        },
        {
          id: "opt-2",
          text: "Sunlight is objectively harmful to philosophical contemplation.",
          isCorrect: false,
          mechanism: "Sunlight is Plato's metaphor for the Good and genuine philosophical truth.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "Stepping Out of the Algorithmic Cave",
      corePrinciple: "The greatest obstacle to knowledge is not ignorance; it is the illusion of knowledge.",
      mentalModelFormula: "Shadow Perception (Filter Bubble) ➔ Cognitive Defense ➔ Socratic Doubt ➔ Ascent to Sunlight",
      everydayRule: "If you cannot articulate the strongest version of your intellectual opponent's argument (Steel-Manning), you are still looking at shadows on the cave wall.",
    },
    contentHooks: [
      { format: "Short Reel / Insight", hook: "Plato predicted social media algorithms 2,400 years ago." },
    ],
    scriptTemplate: "2,400 years ago, Plato described prisoners chained inside a dark cave who thought moving shadows were the real world. Today, we call that your algorithm...",
    dialectic: {
      synthesisQuestion: "Can human perception ever perceive unfiltered reality, or are we condemned to navigate mental models?",
      scientificLens: {
        school: "Cognitive Neuroscience & Predictive Processing",
        thinkers: ["Karl Friston", "Donald Hoffman", "Andy Clark"],
        coreThesis: "The brain is a predictive engine that hallucinates a user interface, not an objective recording device.",
        mechanism: "Predictive processing: Top-down sensory expectations constantly override bottom-up sensory data to minimize surprise.",
        keyExperimentOrEvidence: "Optical illusions and inattentional blindness experiments demonstrate that humans see what they expect to see.",
        limitations: "Predictive processing explains perception, but cannot determine the moral value of objective truth."
      },
      philosophicalLens: {
        school: "Platonic & Socratic Epistemology",
        thinkers: ["Plato", "Socrates", "René Descartes"],
        coreThesis: "Sensory appearances are provisional shadows; true understanding requires rigorous rational ascent and Socratic cross-examination.",
        framework: "The Allegory of the Cave & The Divided Line",
        aphorismOrText: "The unexamined life is not worth living. — Socrates",
        practicalWisdom: "Routinely doubt your most cherished certainties. Seeking truth requires enduring the temporary blindness of intellectual discomfort."
      },
      dialecticSynthesis: {
        synthesisTitle: "Predictive Coding Meets Plato's Cave",
        integrationInsight: "Neuroscience confirms what Plato envisioned: what we see is a convenient mental projection constructed by evolutionary imperatives. Philosophy pushes us to question whether our models serve mere survival or higher truth.",
        actionableParadox: "Accept that your sensory brain is always in a cave, while using philosophical reason to climb toward the sun."
      }
    },
    evidenceStatus: "philosophical-tradition",
    references: [
      {
        title: "The Republic (Book VII)",
        authors: "Plato (trans. Benjamin Jowett)",
        year: 1892,
        url: "https://classics.mit.edu/Plato/republic.8.vii.html",
        note: "Classic dialogue presenting the Allegory of the Cave, the ascent to sunlight, and the nature of epistemic enlightenment."
      },
      {
        title: "Plato",
        authors: "Stanford Encyclopedia of Philosophy",
        year: 2017,
        url: "https://plato.stanford.edu/entries/plato/",
        note: "Authoritative academic overview of Platonic epistemology, forms, and the divided line."
      }
    ]
  },

  // ==========================================
  // 11. MORAL PHILOSOPHY & ETHICS
  // ==========================================
  {
    id: "the-trolley-problem-utilitarianism",
    title: "The Trolley Problem & Moral Intuitionism",
    branch: "Moral Philosophy & Ethics",
    categoryKey: "ethics",
    domain: "philosophy",
    branchColor: {
      bg: "bg-[#F1F5F0]",
      text: "text-[#4A5D48]",
      border: "border-[#D6E3D4]",
      accent: "#60735E",
      badge: "bg-[#E2EDE0]",
    },
    icon: "Scale",
    teaser: "Why pushing a lever feels moral, but pushing a man off a footbridge triggers biological revulsion.",
    readTime: "5 min read",
    difficulty: "Intermediate",
    studyTakeaways: [
      "Devised by Philippa Foot (1967) and expanded by Judith Jarvis Thomson",
      "Clashes Utilitarianism (consequentialist arithmetic) with Kantian Deontology (moral duties)",
      "Demonstrated experimentally in moral neuroscience by Joshua Greene using fMRI scans",
    ],
    scenarioHook: {
      setting: "Railroad Switch Control Tower",
      character: "Dr. Maya Chen, Moral Neuroscientist",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
      story: "A runaway trolley speeds toward 5 workers. Case A: Maya can flip a lever to divert it onto a track with 1 worker (most people say YES). Case B: She must physically push a heavy stranger off a bridge to stop the train (most people say NO).",
      theFriction: "The utilitarian math is identical: 5 lives saved for 1 lost. Yet human morality treats Case B as murder.",
      theReaction: "Joshua Greene's neuroimaging revealed why: Case B triggers ancient somatic emotional brain circuits (the ventromedial prefrontal cortex), whereas Case A is processed by cold cognitive calculation (the dorsolateral prefrontal cortex).",
    },
    socraticQuiz: {
      question: "Why do most people agree to switch the lever in Case A, but refuse to push the man in Case B?",
      options: [
        {
          id: "opt-1",
          text: "Dual-Process Morality: Up-close physical harm activates ancient emotional circuits that generate immediate moral vetoes, overriding utilitarian arithmetic.",
          isCorrect: true,
          mechanism: "Greene showed that personal moral dilemmas ignite the amygdala and medial prefrontal cortex, producing a gut-level deontological constraint.",
        },
        {
          id: "opt-2",
          text: "The man on the footbridge was mathematically worth more than 5 workers.",
          isCorrect: false,
          mechanism: "In both cases, 5 lives are saved for 1 lost; the difference is the emotional processing of direct physical harm.",
        },
      ],
    },
    deepDiveConclusion: {
      headline: "The Architecture of Human Conscience",
      corePrinciple: "Morality is not a single rational formula; it is a tug-of-war between ancient emotional instincts and deliberate consequentialist calculation.",
      mentalModelFormula: "Utilitarian Calculation (DLPFC) vs. Deontological Emotional Veto (VMPFC) = Moral Conflict",
      everydayRule: "When evaluating tough ethical trade-offs, identify whether your gut reaction is based on principled virtue or merely an ancient evolutionary aversion to discomfort.",
    },
    contentHooks: [
      { format: "Short Reel / Insight", hook: "The ethical dilemma that proves your brain has two moral engines." },
    ],
    scriptTemplate: "Would you kill 1 person to save 5? Most people say yes if it is a lever, but no if they have to use their hands. Here is the neuroscience behind the Trolley Problem...",
    dialectic: {
      synthesisQuestion: "Is morality an evolutionary emotion (Science) or an objective rational duty (Philosophy)?",
      scientificLens: {
        school: "Moral Psychology & Evolutionary Anthropology",
        thinkers: ["Joshua Greene", "Jonathan Haidt", "Paul Bloom"],
        coreThesis: "Moral judgments are driven primarily by intuitive evolutionary gut reactions, with conscious reasoning acting as a retroactive lawyer.",
        mechanism: "Moral Foundations Theory: Gut disgust and kin-preservation circuits trigger instant moral intuitions.",
        keyExperimentOrEvidence: "fMRI studies of the Trolley Problem show distinct activation of DLPFC (calculation) vs VMPFC (emotional deontological veto).",
        limitations: "Evolutionary psychology explains where moral intuitions came from, but cannot tell us how we ought to resolve novel ethical dilemmas (e.g. AI ethics)."
      },
      philosophicalLens: {
        school: "Kantian Deontology vs. Utilitarianism",
        thinkers: ["Immanuel Kant", "John Stuart Mill", "Philippa Foot"],
        coreThesis: "Act in such a way that you treat humanity, whether in your own person or in the person of any other, never merely as a means, but always as an end.",
        framework: "The Categorical Imperative & The Greatest Happiness Principle",
        aphorismOrText: "Two things fill the mind with ever-increasing wonder: the starry heavens above me and the moral law within me. — Kant",
        practicalWisdom: "Never reduce human beings to mere numbers in an arithmetic equation; respect human dignity as an absolute constraint."
      },
      dialecticSynthesis: {
        synthesisTitle: "The Intuitive Heart and The Rational Scale",
        integrationInsight: "Moral psychology shows why our animal nature recoils from certain acts; moral philosophy provides the ethical frameworks to decide when to trust that recoil and when to rise above it for the greater good.",
        actionableParadox: "Honor your emotional moral intuitions as protective safeguards, but subject them to ruthless philosophical scrutiny before making policy."
      }
    },
    evidenceStatus: "philosophical-tradition",
    references: [
      {
        title: "The problem of abortion and the doctrine of the double effect",
        authors: "Philippa Foot",
        year: 1967,
        url: "https://www.worldcat.org/title/875038318",
        note: "Origin of the classic trolley problem thought experiment examining negative vs positive moral duties."
      },
      {
        title: "An fMRI investigation of emotional engagement in moral judgment",
        authors: "Joshua D. Greene, R. Brian Sommerville, Leigh E. Nystrom, John M. Darley, & Jonathan D. Cohen",
        year: 2001,
        url: "https://pubmed.ncbi.nlm.nih.gov/11557895/",
        note: "Landmark neuroimaging study demonstrating dual-process emotional vs cognitive neural activation during moral dilemmas."
      },
      {
        title: "Doing vs. Allowing Harm",
        authors: "Stanford Encyclopedia of Philosophy",
        year: 2019,
        url: "https://plato.stanford.edu/entries/doing-allowing/",
        note: "Detailed philosophical analysis of consequentialist and deontological perspectives on the trolley problem."
      }
    ]
  },
  ...PHILOSOPHY_EXPANSION_TOPICS,
  ...CURATED_TOPIC_BANK,
];

// Helper to provide rich dialectic perspective for ANY topic
export const getDialecticForTopic = (topic) => {
  if (!topic) return null;
  if (topic.dialectic) return topic.dialectic;

  const branchLower = (topic.branch || '').toLowerCase();
  const categoryKey = topic.categoryKey || '';

  if (categoryKey === 'stoicism' || branchLower.includes('stoic')) {
    return {
      synthesisQuestion: "Can cognitive voluntary reframing conquer involuntary biological threat reactions?",
      scientificLens: {
        school: "Cognitive Behavioral Science (CBT & Neuroplasticity)",
        thinkers: ["Aaron Beck", "Albert Ellis"],
        coreThesis: "Emotions are not triggered by events themselves, but by our cognitive appraisals and intermediate schemas.",
        mechanism: "Appraisal theory: The prefrontal cortex modulates amygdalar emotional reactivity through semantic down-regulation.",
        keyExperimentOrEvidence: "fMRI neuroimaging demonstrates that cognitive reappraisal down-regulates blood-oxygen-level dependent (BOLD) signals in the amygdala through prefrontal recruitment.",
        limitations: "Severe clinical trauma and neurochemical depression require somatic interventions beyond pure cognitive reframing."
      },
      philosophicalLens: {
        school: "Stoicism (Epictetus & Marcus Aurelius)",
        thinkers: ["Epictetus", "Marcus Aurelius", "Seneca"],
        coreThesis: "Men are disturbed not by things, but by the view which they take of them.",
        framework: "The Dichotomy of Control (Ta eph' hemin vs Ta ouk eph' hemin)",
        aphorismOrText: "If thou art pained by any external thing, it is not this that disturbs thee, but thy own judgment about it. And it is in thy power now to wipe out this judgment. — Marcus Aurelius, Meditations VIII.47",
        practicalWisdom: "Before reacting, ruthlessly divide the problem into what is in your power (internal virtue) and what is not (external outcomes)."
      },
      dialecticSynthesis: {
        synthesisTitle: "The Ancient Roots of Modern CBT",
        integrationInsight: "Aaron Beck and Albert Ellis explicitly acknowledged Stoicism as the intellectual progenitor of Cognitive Behavioral Therapy. Science proved the neurological pathway (prefrontal amygdala regulation); Stoicism provided the normative life philosophy that makes daily practice meaningful.",
        actionableParadox: "Control your judgment with absolute discipline, while surrendering all attachment to the external outcome."
      }
    };
  }

  if (categoryKey === 'existentialism' || branchLower.includes('existential')) {
    return {
      synthesisQuestion: "Is human anxiety a neurochemical error to alleviate or an existential awakening to embrace?",
      scientificLens: {
        school: "Evolutionary Neurobiology & Terror Management Theory",
        thinkers: ["Sheldon Solomon", "Jeff Greenberg", "Tom Pyszczynski"],
        coreThesis: "Existential dread arises from the unique human awareness of mortality colliding with animal self-preservation instincts.",
        mechanism: "Cultural worldviews and self-esteem act as psychological buffers to insulate against paralyzing existential dread.",
        keyExperimentOrEvidence: "Mortality salience primes cause subjects to aggressively cling to cultural dogmas and punish deviants (TMT trials).",
        limitations: "Reductionist neurobiology often treats dread solely as pathology rather than the foundation of human autonomy."
      },
      philosophicalLens: {
        school: "Existentialism (Sartre, Camus & Kierkegaard)",
        thinkers: ["Jean-Paul Sartre", "Albert Camus", "Søren Kierkegaard"],
        coreThesis: "Existence precedes essence: Humans are not pre-programmed; we are condemned to be free and construct our own meaning.",
        framework: "Bad Faith (Mauvaise Foi) & The Absurd",
        aphorismOrText: "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does. — Sartre",
        practicalWisdom: "Stop blaming circumstances, genetic temperament, or society for your choices; radical ownership is the price of freedom."
      },
      dialecticSynthesis: {
        synthesisTitle: "From Neurotic Panic to Radical Sovereignty",
        integrationInsight: "Psychology diagnoses existential dread as mortality terror and cognitive avoidance. Philosophy reframes that exact same dread as the dizziness of freedom. Together, they guide the user to neither deny anxiety nor drown in it, but use it as fuel for authentic action.",
        actionableParadox: "Acknowledge the biological urge to hide in crowd conformity, and choose radical individual accountability anyway."
      }
    };
  }

  if (categoryKey === 'psychoanalytic' || branchLower.includes('psychoanalytic') || branchLower.includes('depth')) {
    return {
      synthesisQuestion: "How do hidden unconscious drives distort conscious rational decisions?",
      scientificLens: {
        school: "Implicit Cognition & Cognitive Neuroscience",
        thinkers: ["Daniel Kahneman", "John Bargh", "Timothy Wilson"],
        coreThesis: "The vast majority of cognitive processing (System 1) occurs below conscious awareness and rational access.",
        mechanism: "Implicit associative networks, automatic procedural heuristics, and sensory memory schemas in subcortical and cortical circuits.",
        keyExperimentOrEvidence: "Subcortical affective response studies suggest emotional appraisals and automatic associations can initiate prior to conscious deliberation, though indirect reaction-time measures like the IAT exhibit substantial measurement variance.",
        limitations: "Classic Freudian psychoanalysis historically lacked falsifiable experimental metrics."
      },
      philosophicalLens: {
        school: "Depth Philosophy & Shadow Work (Nietzsche & Jung)",
        thinkers: ["Carl Jung", "Friedrich Nietzsche", "Arthur Schopenhauer"],
        coreThesis: "Until you make the unconscious conscious, it will direct your life and you will call it fate.",
        framework: "The Shadow & The Will to Power",
        aphorismOrText: "One does not become enlightened by imagining figures of light, but by making the darkness conscious. — Carl Jung",
        practicalWisdom: "Whatever you vehemently hate in other people is almost certainly a disowned component of your own shadow."
      },
      dialecticSynthesis: {
        synthesisTitle: "The Union of System 1 and The Unconscious Shadow",
        integrationInsight: "What cognitive science clinically calls 'implicit biases and System 1 heuristics', depth philosophy explored as 'the Shadow and sub-rational drives'. Science provides the empirical measurement; philosophy provides the transformative framework for psychological integration.",
        actionableParadox: "The parts of your psyche you try hardest to hide and deny are the exact parts that secretly rule your behavior."
      }
    };
  }

  // Default universal dialectic synthesis for cognitive, social, behavioral, consumer, etc.
  return {
    synthesisQuestion: `How does the descriptive scientific mechanism of ${topic.title} compare with normative philosophical wisdom?`,
    scientificLens: {
      school: "Empirical Cognitive Psychology & Behavioral Science",
      thinkers: ["Daniel Kahneman", "Amos Tversky", "Leon Festinger"],
      coreThesis: `${topic.teaser || 'Human cognition relies on automatic heuristics that generate systematic cognitive biases.'}`,
      mechanism: "Dual-Process Theory: Fast, reflexive System 1 heuristics operate autonomously to reduce computational cognitive load, while System 2 deliberative reasoning is recruited conditionally.",
      keyExperimentOrEvidence: "Cognitive lab experiments demonstrate systematic, replicable deviations from classical normative rationality across diverse judgment tasks.",
      limitations: "Science can predict statistical human error rates, but cannot prescribe what constitutes a meaningful, virtuous life."
    },
    philosophicalLens: {
      school: "Socratic Epistemology & Hellenistic Philosophy",
      thinkers: ["Socrates", "Epictetus", "Aristotle"],
      coreThesis: "The unexamined life is not worth living: Awareness of one's own ignorance is the foundational prerequisite of wisdom.",
      framework: "Socratic Elenchus & Prudence (Phronesis)",
      aphorismOrText: "I am wiser than this man; for neither of us really knows anything fine and good, but this man thinks he knows something when he does not, whereas I, as I do not know anything, do not think I do either. — Plato, Apology 21d",
      practicalWisdom: "Cultivate radical intellectual humility. When you feel most certain of a quick judgment, pause and cross-examine your foundational assumptions."
    },
    dialecticSynthesis: {
      synthesisTitle: "The Diagnosis (Science) Meets The Cure (Philosophy)",
      integrationInsight: `Cognitive psychology provides the descriptive diagnosis: it explains the exact evolutionary wiring that triggers ${topic.title}. Classical philosophy supplies the normative remedy: it trains the conscious mind to transcend evolutionary reflexes through deliberate ethical contemplation.`,
      actionableParadox: "Do not condemn your evolutionary brain for relying on heuristics; instead, cultivate philosophical vigilance to steer them consciously."
    }
  };
};

// Helper to retrieve topics for a specific category
export const getTopicsByCategory = (categoryNameOrKey) => {
  if (!categoryNameOrKey) return PSYCHOLOGY_TOPICS.slice(0, 4);

  const matched = PSYCHOLOGY_TOPICS.filter((t) => {
    return (
      t.categoryKey?.toLowerCase() === categoryNameOrKey.toLowerCase() ||
      t.branch?.toLowerCase().includes(categoryNameOrKey.toLowerCase())
    );
  });

  return matched.length > 0 ? matched : PSYCHOLOGY_TOPICS.slice(0, 4);
};

// Re-export High-Retention Micro-Learning Framework ("The Top 1% Format")
export { getTopOnePercentFramework, FLAGSHIP_MICRO_LEARNING_FRAMEWORKS } from './microLearningFrameworks.js';

// Mock async API fetcher
export const fetchPsychologyTopics = (categoryKey = null) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryKey) {
        resolve(getTopicsByCategory(categoryKey));
      } else {
        resolve(PSYCHOLOGY_TOPICS);
      }
    }, 200);
  });
};
