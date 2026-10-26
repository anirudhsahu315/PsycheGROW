// Curated Topic Bank
// High-yield psychology topics complete with scenario labs, Socratic quizzes, and content angles.

export const CURATED_TOPIC_BANK = [
  // ==========================================
  // COGNITIVE PSYCHOLOGY
  // ==========================================
  {
    id: 'ego-depletion-decision-fatigue',
    title: 'Ego Depletion & Decision Fatigue',
    branch: 'Cognitive Psychology',
    categoryKey: 'cognitive',
    evidenceStatus: 'contested',
    references: [
      {
        title: 'A Multilab Preregistered Replication of the Ego-Depletion Effect',
        authors: 'Hagger, M. S., et al.',
        year: 2016,
        url: 'https://pubmed.ncbi.nlm.nih.gov/27474142/',
        note: 'Multi-lab registered replication report of 23 laboratories finding an effect size indistinguishable from zero.',
      },
      {
        title: 'Ego depletion: Is the active self a limited resource?',
        authors: 'Baumeister, R. F., Bratslavsky, E., Muraven, M., & Tice, D. M.',
        year: 1998,
        url: 'https://pubmed.ncbi.nlm.nih.gov/9599441/',
        note: 'Seminal paper proposing the limited-resource model of self-control.',
      },
    ],
    branchColor: {
      bg: 'bg-[#F2EFF6]',
      text: 'text-[#655A7B]',
      border: 'border-[#DDD8E6]',
      accent: '#7A6F91',
      badge: 'bg-[#EAE4F2]',
    },
    icon: 'Brain',
    tagline: 'Willpower is not a moral virtue; sustained self-control experiences performance decline under heavy load.',
    teaser: 'Why demanding sequential choices lead decision-makers to default toward passive status-quo options.',
    readTime: '4 min read',
    difficulty: 'Intermediate',
    studyTakeaways: [
      'Originally proposed by Roy Baumeister as a limited mental resource model (Baumeister et al., 1998)',
      'Contested status: Multi-lab pre-registered replications (Hagger et al., 2016) found near-zero effects, and the glucose mechanism is largely discredited',
      'Remedy: Automate recurring low-stakes decisions to reduce friction and subjective fatigue',
    ],
    scenarioHook: {
      setting: 'Executive Boardroom at 4:45 PM',
      character: 'Marcus, Operations Director',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
      story: 'After seven consecutive hours of negotiating budget cuts, vendor disputes, and staffing reallocations, Marcus faces a major contract decision worth $450,000.',
      theFriction: 'His analytical mind is drained. Rather than carefully interrogating the ambiguous vendor clauses, an overwhelming urge pushes him to sign whatever requires the least resistance.',
      theReaction: 'He hastily agrees to unfavorable terms just to end the mental effort—regretting the costly oversight the following morning.',
    },
    socraticQuiz: {
      question: 'Why did Marcus accept a high-risk contract at 4:45 PM that he would have rejected at 9:00 AM?',
      options: [
        {
          id: 'opt-1',
          text: 'Prolonged cognitive exertion produced decision fatigue, defaulting to the path of least cognitive resistance.',
          isCorrect: true,
          mechanism: 'Decision fatigue systematically impairs trade-off analysis. When cognitive demands accumulate, decision-makers often default to passive acquiescence, regardless of underlying physiological debates.',
        },
        {
          id: 'opt-2',
          text: 'His overall business intelligence decreased permanently throughout the afternoon.',
          isCorrect: false,
          mechanism: 'Cognitive performance is dynamic, not static. It fluctuates based on task load, rest, and motivational shifts.',
        },
        {
          id: 'opt-3',
          text: 'He was unconsciously attempting to sabotage company finances.',
          isCorrect: false,
          mechanism: 'Decision fatigue is an attentional and motivational response to extended cognitive demand, not an intent to fail.',
        },
      ],
    },
    deepDiveConclusion: {
      headline: 'Conserving Executive Bandwidth',
      corePrinciple: 'Extended cognitive effort and repeated trade-offs frequently bias subsequent choices toward default options, though whether this stems from depleted physical resources or shifting motivation remains contested.',
      mentalModelFormula: 'High Decision Volume ➔ Subjective Fatigue ➔ Defaulting to Passivity or Status Quo',
      everydayRule: 'Schedule high-stakes creative and strategic decisions during your first waking hours; reserve late afternoons for mechanical execution.',
    },
    contentHooks: [
      { format: 'Short Reel / Insight', hook: 'Why you make impulsive choices after 4 PM (and how simplifying routines helps).' },
      { format: 'Carousel Slide', hook: 'The Decision Fatigue Audit: 3 trivial choices draining your focus daily.' },
    ],
    scriptTemplate: 'Have you ever noticed that after a long day of making decisions, you default to whatever takes least effort? While the exact biological mechanisms remain contested in psychology, prolonged decision-making undeniably taxes focus...',
  },
  {
    id: 'the-zeigarnik-effect',
    title: 'The Zeigarnik Effect',
    branch: 'Cognitive Psychology',
    categoryKey: 'cognitive',
    evidenceStatus: 'mixed-evidence',
    references: [
      {
        title: 'Das Behalten erledigter und unerledigter Handlungen',
        authors: 'Zeigarnik, B.',
        year: 1927,
        url: 'https://doi.org/10.1007/BF02409755',
        note: 'Seminal experimental paper demonstrating preferential recall of interrupted tasks in laboratory settings.',
      },
      {
        title: 'A Dynamic Theory of Personality: Selected Papers',
        authors: 'Lewin, K.',
        year: 1935,
        url: 'https://archive.org/details/dynamictheoryofp00lewi',
        note: 'Theoretical foundation outlining the quasi-need and psychic tension systems driving task recall.',
      },
    ],
    branchColor: {
      bg: 'bg-[#F2EFF6]',
      text: 'text-[#655A7B]',
      border: 'border-[#DDD8E6]',
      accent: '#7A6F91',
      badge: 'bg-[#EAE4F2]',
    },
    icon: 'Brain',
    tagline: 'Unresolved goals generate persistent cognitive tension until closure or disengagement occurs.',
    teaser: 'Why unfinished tasks intrude into conscious attention, though replication across modern settings remains mixed.',
    readTime: '3 min read',
    difficulty: 'Beginner',
    studyTakeaways: [
      'Stemmed from Kurt Lewin’s informal observations of waiters, experimentally tested by Bluma Zeigarnik in 1927',
      'Uncompleted tasks can generate intrusive thoughts and background cognitive tension, though empirical replications vary',
      'Antidote: The "Mental Closing Ritual"—writing down the next physical step helps disarm intrusive goal tension',
    ],
    scenarioHook: {
      setting: 'Bedtime at 11:30 PM',
      character: 'Sophie, UX Researcher',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
      story: 'Sophie worked hard all day and completed 8 complex tasks. However, at 5 PM she drafted half an email to a client and left it unsent in her inbox.',
      theFriction: 'As she tries to sleep, her mind completely ignores the 8 major successes and obsessively replays the unsent draft.',
      theReaction: 'She tosses and turns for 90 minutes until she finally gets up, types a 2-minute finish, and instantly falls asleep.',
    },
    socraticQuiz: {
      question: 'Why did Sophie obsess over one minor unsent email rather than feel satisfied by 8 major completed projects?',
      options: [
        {
          id: 'opt-1',
          text: 'The unfinished status keeps a goal representation active in working memory to prevent loss of critical context.',
          isCorrect: true,
          mechanism: 'Lewin and Zeigarnik posited that interrupted intentions create persistent cognitive tension, though modern research emphasizes that intrusive thoughts depend heavily on personal task importance.',
        },
        {
          id: 'opt-2',
          text: 'Unsent drafts hold significantly higher monetary value than completed projects.',
          isCorrect: false,
          mechanism: 'Value is not the sole trigger; unfulfilled completion status maintains cognitive accessibility across various tasks.',
        },
      ],
    },
    deepDiveConclusion: {
      headline: 'Closing the Open Cognitive Tabs',
      corePrinciple: 'Your mind prioritizes active goal representations. Leaving tasks suspended without a clear next action keeps attention tethered, though the strength of this recall effect varies across contexts.',
      mentalModelFormula: 'Incomplete Action ➔ Persistent Cognitive Tension ➔ Attention Intrusion ➔ Closure ➔ Attenuation',
      everydayRule: 'Before finishing work, write down the single next micro-action for any unfinished task. Once the brain knows the next step is secure, the open loop closes.',
    },
    contentHooks: [
      { format: 'Short Reel / Insight', hook: 'Why you cannot stop thinking about that one unfinished project in bed.' },
      { format: 'Carousel Slide', hook: 'How Hollywood cliffhangers leverage tension from unfinished narratives.' },
    ],
    scriptTemplate: 'Ever wonder why cliffhangers make it hard to turn off the TV? In 1927, psychologist Bluma Zeigarnik formalized Kurt Lewin’s observations on how uncompleted tasks stay cognitively accessible...',
  },

  // ==========================================
  // SOCIAL PSYCHOLOGY
  // ==========================================
  {
    id: 'the-pygmalion-effect',
    title: 'The Pygmalion Effect',
    branch: 'Social Psychology',
    categoryKey: 'social',
    evidenceStatus: 'well-supported',
    references: [
      {
        title: 'Pygmalion in the classroom',
        authors: 'Rosenthal, R., & Jacobson, L.',
        year: 1968,
        url: 'https://doi.org/10.1007/BF02322211',
        note: 'Landmark experiment showing that teacher expectations systematically influenced student intellectual growth.',
      },
    ],
    branchColor: {
      bg: 'bg-[#F9F0EC]',
      text: 'text-[#8F5543]',
      border: 'border-[#EAD6CF]',
      accent: '#A8634F',
      badge: 'bg-[#F3E2DB]',
    },
    icon: 'Users',
    tagline: 'Expectations act as self-fulfilling influences on human performance.',
    teaser: 'How a teacher or manager’s belief measurably alters another person’s developmental trajectory.',
    readTime: '4 min read',
    difficulty: 'Intermediate',
    studyTakeaways: [
      'Demonstrated by Robert Rosenthal and Lenore Jacobson in elementary classrooms in 1968',
      'High expectations trigger warmer micro-behaviors, richer feedback, and greater patience',
      'The inverse (The Golem Effect) shows that low expectations can measurably degrade output',
    ],
    scenarioHook: {
      setting: 'Software Startup Engineering Onboarding',
      character: 'Aiden, Junior Developer',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&h=120&q=80',
      story: 'Aiden joined a fast-growing engineering team. The CTO had been told by an executive that Aiden was a rare mathematical genius, although his credentials were actually standard.',
      theFriction: 'When Aiden encountered difficult bugs, the lead engineer did not assume incompetence; instead, she praised his ambition and gave deep architectural context.',
      theReaction: 'Feeling implicitly trusted, Aiden spent evenings experimenting boldly, and within six months became the most productive architect on the team.',
    },
    socraticQuiz: {
      question: 'What was the primary driver of Aiden’s rapid acceleration into an elite performer?',
      options: [
        {
          id: 'opt-1',
          text: 'The leadership’s high expectations manifested as subtle micro-affirmations, challenging assignments, and higher patience, unlocking his full potential.',
          isCorrect: true,
          mechanism: 'Rosenthal found that expectations change how leaders interact: they provide more verbal encouragement, wait longer for answers, and offer richer feedback.',
        },
        {
          id: 'opt-2',
          text: 'He possessed an innate biological genius gene that suddenly activated on his first workday.',
          isCorrect: false,
          mechanism: 'Rosenthal’s research proved children randomly labeled "intellectual bloomers" scored higher gains purely due to teacher behavior, not baseline biology.',
        },
      ],
    },
    deepDiveConclusion: {
      headline: 'The Architecture of Expectation',
      corePrinciple: 'Human beings subconsciously conform to the expectations held by authority figures and peers. Treat people as capable, and they rise to the standard.',
      mentalModelFormula: 'Leader Belief ➔ Subtle Micro-Cues ➔ Subject Internalizes Identity ➔ Elevated Performance ➔ Confirmed Belief',
      everydayRule: 'When coaching anyone, frame difficulties as "unlocked opportunities" rather than "inadequacies"—your belief sets the ceiling of their output.',
    },
    contentHooks: [
      { format: 'Short Reel / Insight', hook: 'How expecting someone to be brilliant actually makes them smarter.' },
      { format: 'Carousel Slide', hook: 'Pygmalion vs Golem: The invisible psychology of leadership expectations.' },
    ],
    scriptTemplate: 'In 1968, researchers lied to elementary teachers, telling them 5 random children were mathematical geniuses. What happened next changed psychology forever...',
  },
  {
    id: 'the-pratfall-effect',
    title: 'The Pratfall Effect',
    branch: 'Social Psychology',
    categoryKey: 'social',
    evidenceStatus: 'well-supported',
    references: [
      {
        title: 'The effect of a pratfall on increasing interpersonal attractiveness',
        authors: 'Aronson, E., Willerman, B., & Floyd, J.',
        year: 1966,
        url: 'https://doi.org/10.3758/BF03342263',
        note: 'Found that an embarrassing blunder increased interpersonal attractiveness when competence was already high.',
      },
    ],
    branchColor: {
      bg: 'bg-[#F9F0EC]',
      text: 'text-[#8F5543]',
      border: 'border-[#EAD6CF]',
      accent: '#A8634F',
      badge: 'bg-[#F3E2DB]',
    },
    icon: 'Users',
    tagline: 'Perfection creates distance; vulnerable competence creates affinity.',
    teaser: 'Why extraordinarily capable individuals become instantly more charming after spilling their coffee.',
    readTime: '3 min read',
    difficulty: 'Beginner',
    studyTakeaways: [
      'Identified by Elliot Aronson in 1966 using quiz bowl recordings and spilled coffee',
      'Crucial condition: The blunder only increases likability if competence is already established',
      'For an average or incompetent performer, making a clumsy error decreases attractiveness',
    ],
    scenarioHook: {
      setting: 'Keynote Stage at a Tech Summit',
      character: 'Dr. Evelyn Vance, AI Pioneer',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80',
      story: 'Dr. Vance delivers a tour-de-force presentation on quantum algorithms. The audience is in awe of her brilliance, but she feels distant and intimidating.',
      theFriction: 'While walking to the podium for Q&A, she accidentally knocks over a water pitcher, drenching her index cards and laughing heartily at herself.',
      theReaction: 'The audience laughs with her, and in the post-talk surveys, her likability and approachable leadership ratings increase significantly.',
    },
    socraticQuiz: {
      question: 'Why did knocking over the water pitcher increase Dr. Vance’s appeal instead of damaging her reputation?',
      options: [
        {
          id: 'opt-1',
          text: 'Her high competence was already established, so the small human blunder made her relatable rather than intimidating.',
          isCorrect: true,
          mechanism: 'Flawless perfection makes others feel inadequate. A small, unscripted blunder humanizes high achievers, rendering them endearing.',
        },
        {
          id: 'opt-2',
          text: 'The audience was thrilled by the destruction of academic index cards.',
          isCorrect: false,
          mechanism: 'It is the psychological contrast between elite intellect and vulnerable humanness that triggers empathy.',
        },
      ],
    },
    deepDiveConclusion: {
      headline: 'Embracing the Human Flaw',
      corePrinciple: 'Nobody connects with a polished marble statue. True charisma balances undeniable competence with genuine, unpretentious vulnerability.',
      mentalModelFormula: 'High Competence + Accidental Flaw ➔ Peak Human Affinity (The Pratfall Sweet Spot)',
      everydayRule: 'Never hide small, benign errors behind defensiveness. Owning a minor mistake with humor demonstrates immense self-assurance.',
    },
    contentHooks: [
      { format: 'Short Reel / Insight', hook: 'Why being too perfect makes people secretly dislike you.' },
      { format: 'Carousel Slide', hook: 'The Pratfall Paradox: How to be competent without being intimidating.' },
    ],
    scriptTemplate: 'Do you ever try so hard to look flawless in meetings that you come across as stiff? Here is why psychology says spilling your coffee might actually be your superpower...',
  },

  // ==========================================
  // CLINICAL & WELLNESS
  // ==========================================
  {
    id: 'the-hedonic-treadmill',
    title: 'The Hedonic Treadmill',
    branch: 'Clinical & Wellness',
    categoryKey: 'clinical',
    evidenceStatus: 'well-supported',
    references: [
      {
        title: 'Lottery winners and accident victims: is happiness relative?',
        authors: 'Brickman, P., Coates, D., & Janoff-Bulman, R.',
        year: 1978,
        url: 'https://pubmed.ncbi.nlm.nih.gov/690806/',
        note: 'Classic study documenting adaptation back toward baseline subjective well-being following major positive and negative life events.',
      },
      {
        title: 'Beyond the hedonic treadmill: revising the adaptation theory of well-being',
        authors: 'Diener, E., Lucas, R. E., & Scollon, C. N.',
        year: 2006,
        url: 'https://pubmed.ncbi.nlm.nih.gov/16719675/',
        note: 'Revises the original theory, showing baselines can shift over time and differ across life domains.',
      },
    ],
    branchColor: {
      bg: 'bg-[#EFF3F6]',
      text: 'text-[#475767]',
      border: 'border-[#D5E0E7]',
      accent: '#596E82',
      badge: 'bg-[#E1EAF0]',
    },
    icon: 'HeartHandshake',
    tagline: 'Today’s luxury becomes tomorrow’s invisible baseline.',
    teaser: 'Why lottery winners and major life changes often return closer to baseline happiness over time.',
    readTime: '4 min read',
    difficulty: 'Intermediate',
    studyTakeaways: [
      'Coined by Brickman and Campbell (1971); empirically investigated by Brickman, Coates, and Janoff-Bulman (1978)',
      'Psychological adaptation habituates emotional intensity toward an individual baseline set-point (Diener et al., 2006)',
      'The antidote: Shifting focus from circumstantial gains (wealth, status) to voluntary intrinsic practices',
    ],
    scenarioHook: {
      setting: 'Luxury Penthouse in Downtown Manhattan',
      character: 'Julian, Fintech Founder',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&h=120&q=80',
      story: 'Julian spent 6 years working 80-hour weeks with one dream: selling his software for $10M so he could never worry again. The sale closed, and euphoria was deafening for 3 weeks.',
      theFriction: 'Six months later, he sits in his panoramic penthouse staring at the ceiling, feeling the exact same morning anxiety and restlessness he felt in his cramped studio apartment.',
      theReaction: 'He immediately considers starting another startup, believing "maybe $50 million will finally provide lasting serenity."',
    },
    socraticQuiz: {
      question: 'Why did Julian’s $10M windfall fail to permanently elevate his daily happiness?',
      options: [
        {
          id: 'opt-1',
          text: 'The nervous system rapidly habituates to positive stimuli, restoring the psychological baseline to maintain evolutionary vigilance.',
          isCorrect: true,
          mechanism: 'If humans remained perpetually euphoric after a single win, evolutionary drive and threat detection would cease. Homeostasis ensures emotional reset.',
        },
        {
          id: 'opt-2',
          text: 'He bought the wrong model of sports car and penthouse view.',
          isCorrect: false,
          mechanism: 'Material possessions universally fall prey to hedonic adaptation; external upgrades never alter internal set-point mechanics.',
        },
      ],
    },
    deepDiveConclusion: {
      headline: 'Escaping the Dopamine Treadmill',
      corePrinciple: 'Happiness is not a destination achieved by reaching a goal; it is a temporary neurochemical delta that promptly decays back to your personal set-point.',
      mentalModelFormula: 'External Event ➔ Dopamine Spike ➔ Habituation ➔ Baseline Reset (Zero Net Long-Term Gain)',
      everydayRule: 'Invest in experiences of flow, meaningful relationships, and deliberate gratitude—these resist adaptation far longer than material trophies.',
    },
    contentHooks: [
      { format: 'Short Reel / Insight', hook: 'Why making millions will not fix your anxiety (The Hedonic Treadmill).' },
      { format: 'Carousel Slide', hook: 'The Happiness Paradox: Why reaching your dream goal always feels anticlimactic.' },
    ],
    scriptTemplate: 'In 1978, psychologists studied lottery winners and accident survivors. Over time, their subjective happiness trended back toward baseline far more than expected. Here is why...',
  },

  // ==========================================
  // CONSUMER PSYCHOLOGY
  // ==========================================
  {
    id: 'the-decoy-effect',
    title: 'The Decoy Effect (Asymmetric Dominance)',
    branch: 'Consumer Psychology',
    categoryKey: 'consumer',
    evidenceStatus: 'well-supported',
    references: [
      {
        title: 'Adding Asymmetrically Dominated Alternatives: Violations of Regularity and the Similarity Hypothesis',
        authors: 'Huber, J., Payne, J. W., & Puto, C.',
        year: 1982,
        url: 'https://doi.org/10.1086/208899',
        note: 'Seminal paper experimentally demonstrating the asymmetric dominance effect in choice sets.',
      },
      {
        title: 'Predictably Irrational: The Hidden Forces That Shape Our Decisions',
        authors: 'Ariely, D.',
        year: 2008,
        url: 'https://archive.org/details/predictablyirrat0000arie',
        note: 'Popularized consumer applications of the decoy effect using subscription tiers.',
      },
    ],
    branchColor: {
      bg: 'bg-[#F8F5EC]',
      text: 'text-[#7D6638]',
      border: 'border-[#E7DEC9]',
      accent: '#967C46',
      badge: 'bg-[#F0E8D4]',
    },
    icon: 'Sparkles',
    tagline: 'Humans lack an absolute value meter; we choose based on engineered comparisons.',
    teaser: 'How an overpriced medium popcorn tricks you into buying the large every single time.',
    readTime: '3 min read',
    difficulty: 'Beginner',
    studyTakeaways: [
      'Documented by Joel Huber et al. (1982) and popularized by Dan Ariely (Predictably Irrational)',
      'Introducing an asymmetrically dominated "decoy" makes the targeted expensive option look like a bargain',
      'Widely utilized in SaaS subscription pricing tiers, movie theaters, and smartphone storage options',
    ],
    scenarioHook: {
      setting: 'Movie Theater Concession Stand',
      character: 'Liam, College Student',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&h=120&q=80',
      story: 'Liam walked up to the counter intending to buy a Small popcorn for $3.50. He notices the menu: Small ($3.50), Medium ($6.50), Large ($7.00).',
      theFriction: 'The Medium popcorn at $6.50 exists purely to make the Large at $7.00 look like an undeniable steal ("For just 50 cents more, I get double the popcorn!").',
      theReaction: 'Liam walks away with a massive Large bucket he cannot finish, congratulating himself on his shrewd financial intelligence.',
    },
    socraticQuiz: {
      question: 'What was the sole economic purpose of offering the Medium popcorn at $6.50?',
      options: [
        {
          id: 'opt-1',
          text: 'It served as an asymmetrically dominated decoy to eliminate pricing friction and drive purchases to the $7.00 Large tier.',
          isCorrect: true,
          mechanism: 'Nobody buys the decoy. Its presence alters the cognitive frame of reference, converting an absolute price into an irresistible relative comparison.',
        },
        {
          id: 'opt-2',
          text: 'The cinema was genuinely attempting to satisfy medium-sized appetite demographics.',
          isCorrect: false,
          mechanism: 'Decoys are engineered with marginal cost advantages to guide choices toward the highest-margin anchor.',
        },
      ],
    },
    deepDiveConclusion: {
      headline: 'The Psychology of Artificial Comparison',
      corePrinciple: 'When given two distinct options (Quality vs Price), the brain experiences friction. Introducing a flawed third option makes the decision effortlessly obvious.',
      mentalModelFormula: 'Target Option A + Alternative B + Decoy C (Inferior to A) ➔ Brain Unanimously Selects A',
      everydayRule: 'Whenever choosing between three tiers, ask: "If Option 2 did not exist, would I still pay the full price for Option 3?"',
    },
    contentHooks: [
      { format: 'Short Reel / Insight', hook: 'How movie theaters trick your brain with the 50-cent popcorn trap.' },
      { format: 'Carousel Slide', hook: 'The Decoy Effect in SaaS: How pricing pages manipulate your subscription.' },
    ],
    scriptTemplate: 'Next time you buy a coffee or popcorn, look at the middle size. You think it is an option for moderate appetites? Think again. It is a psychological trap called the Decoy Effect...',
  },

  // ==========================================
  // BEHAVIORAL PSYCHOLOGY
  // ==========================================
  {
    id: 'implementation-intentions',
    title: 'Implementation Intentions',
    branch: 'Behavioral Psychology',
    categoryKey: 'behavioral',
    evidenceStatus: 'well-supported',
    references: [
      {
        title: 'Implementation intentions: Strong effects of simple plans',
        authors: 'Gollwitzer, P. M.',
        year: 1999,
        url: 'https://doi.org/10.1037/0003-066X.54.7.493',
        note: 'Seminal paper detailing how if-then plans link situational cues directly to goal-directed responses.',
      },
      {
        title: 'Implementation intentions and goal achievement: A meta-analysis of effects and processes',
        authors: 'Gollwitzer, P. M., & Sheeran, P.',
        year: 2006,
        url: 'https://doi.org/10.1016/S0065-2601(06)38002-1',
        note: 'Meta-analysis across 94 independent tests demonstrating a medium-to-large effect size (d = 0.65) on goal attainment.',
      },
    ],
    branchColor: {
      bg: 'bg-[#EFF4EE]',
      text: 'text-[#52684F]',
      border: 'border-[#D2E0D0]',
      accent: '#647D61',
      badge: 'bg-[#E3ECE1]',
    },
    icon: 'Compass',
    tagline: 'Goals tell you where to go; If-Then algorithms tell the nervous system when to act.',
    teaser: 'The structured linguistic plan that dramatically increases the probability of sticking to a habit.',
    readTime: '3 min read',
    difficulty: 'Beginner',
    studyTakeaways: [
      'Pioneered by German psychologist Peter Gollwitzer in 1999 across extensive empirical studies',
      'Pre-deciding "WHEN, WHERE, and HOW" offloads self-control from active deliberation to environmental cues',
      'Meta-analytic evidence (Gollwitzer & Sheeran, 2006) confirms medium-to-large gains in goal execution across domains',
    ],
    scenarioHook: {
      setting: 'Morning Kitchen Counter',
      character: 'Rachel, Medical Resident',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80',
      story: 'Rachel resolved for 8 months to "read research journals daily," but always skipped it because of clinical exhaustion. Then she reframed her intention using Gollwitzer’s formula.',
      theFriction: 'Instead of "I will study more," she programmed: "IF I pour my first cup of coffee at 6:45 AM, THEN I will open PubMed and read exactly one abstract on my phone before sitting down."',
      theReaction: 'Because the trigger (pouring coffee) was unambiguous and immediate, she completed 28 consecutive days without needing intense willpower.',
    },
    socraticQuiz: {
      question: 'Why did the "If-Then" formulation succeed where 8 months of strong motivation failed?',
      options: [
        {
          id: 'opt-1',
          text: 'It created an automated mental association between a pre-existing environmental trigger and the target action, bypassing cognitive deliberation.',
          isCorrect: true,
          mechanism: 'Implementation intentions delegate control to environmental perceptual cues. When cue X occurs, response Y is triggered reflexively.',
        },
        {
          id: 'opt-2',
          text: 'Her coffee became chemically more potent.',
          isCorrect: false,
          mechanism: 'The mechanism is cognitive cue-response wiring, independent of caffeine pharmacology.',
        },
      ],
    },
    deepDiveConclusion: {
      headline: 'Coding Your Habit Algorithm',
      corePrinciple: 'Vague aspirations like "I want to be disciplined" fail because they require conscious decision-making when you are most tired. If-Then rules automate execution.',
      mentalModelFormula: 'IF [Sensory Cue / Time / Place] occurs ➔ THEN [Specific Micro-Action] will be initiated immediately',
      everydayRule: 'Never set a goal without an "If-Then" trigger: "If I close my laptop at 6 PM, then I immediately put on running shoes."',
    },
    contentHooks: [
      { format: 'Short Reel / Insight', hook: 'Why willpower alone fails (and the if-then habit formula that actually works).' },
      { format: 'Carousel Slide', hook: 'How to automate your discipline using Peter Gollwitzer’s If-Then formula.' },
    ],
    scriptTemplate: 'Stop saying "I am going to work out more this month." Research demonstrates that vague intentions frequently fail. Here is the 2-sentence formula that turns habits into automatic responses...',
  },

  // ==========================================
  // NEUROPSYCHOLOGY & EMOTION
  // ==========================================
  {
    id: 'somatic-marker-hypothesis',
    title: 'The Somatic Marker Hypothesis',
    branch: 'Neuropsychology & Emotion',
    categoryKey: 'neuropsychology',
    evidenceStatus: 'well-supported',
    references: [
      {
        title: 'The somatic marker hypothesis and the possible functions of the prefrontal cortex',
        authors: 'Damasio, A. R.',
        year: 1996,
        url: 'https://pubmed.ncbi.nlm.nih.gov/8941953/',
        note: 'Seminal paper detailing how bioregulatory and visceral processes constrain decision-making spaces.',
      },
      {
        title: 'Deciding advantageously before knowing the advantageous strategy',
        authors: 'Bechara, A., Damasio, H., Tranel, D., & Damasio, A. R.',
        year: 1997,
        url: 'https://pubmed.ncbi.nlm.nih.gov/9036851/',
        note: 'Experimental study using the Iowa Gambling Task showing somatic signals guide choices prior to conscious reasoning.',
      },
    ],
    branchColor: {
      bg: 'bg-[#F8F0F2]',
      text: 'text-[#82525C]',
      border: 'border-[#E7D4DA]',
      accent: '#9A636F',
      badge: 'bg-[#F1DEE4]',
    },
    icon: 'Activity',
    tagline: 'Pure logic without visceral valuation leads not to hyper-efficiency, but to decision paralysis.',
    teaser: 'Why patients with ventromedial prefrontal lesions struggle over simple decisions without emotional weights.',
    readTime: '4 min read',
    difficulty: 'Advanced',
    studyTakeaways: [
      'Developed by neuroscientist Antonio Damasio through investigations of ventromedial prefrontal cortex lesions',
      'Emotions generate somatic bodily sensations (autonomic arousal, visceral shifts) that pre-filter behavioral options',
      'Without somatic markers, the brain computes endless analytical permutations without an internal valuation signal',
    ],
    scenarioHook: {
      setting: 'Neurology Clinic Consultation Room',
      character: 'Elliot, Former Corporate Executive',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
      story: 'After surgery removing a brain tumor in his ventromedial prefrontal cortex, Elliot’s IQ, memory, and analytical reasoning remained in the 98th percentile.',
      theFriction: 'However, he lost the ability to feel emotional valences. Asked to schedule his next appointment, he spent 30 minutes listing weather forecasts, traffic probabilities, and ink shades.',
      theReaction: 'Unable to feel which option "felt right", he could not choose a simple calendar date, demonstrating that reason requires gut-level emotional valuation.',
    },
    socraticQuiz: {
      question: 'Why was Elliot, despite a high IQ, unable to schedule an appointment?',
      options: [
        {
          id: 'opt-1',
          text: 'Without somatic emotional signals, all options hold equal analytical weight, creating infinite calculation loops.',
          isCorrect: true,
          mechanism: 'Damasio showed that emotions act as bodily heuristics that rapidly constrain the decision space so conscious thought can finalize action.',
        },
        {
          id: 'opt-2',
          text: 'He forgot how calendars function.',
          isCorrect: false,
          mechanism: 'His factual memory was pristine; only the bodily emotional tagging of outcomes was severed.',
        },
      ],
    },
    deepDiveConclusion: {
      headline: 'The Wisdom of the Visceral Body',
      corePrinciple: 'Intuition and bodily reactions are not irrational flaws to be suppressed; they are rapid somatic summaries of past learning and survival value.',
      mentalModelFormula: 'Perceived Options ➔ Visceral Somatic Flare (Gut Signal) ➔ Filtered Candidate Set ➔ Rapid Decision',
      everydayRule: 'When stuck between two equivalent choices, flip a coin. Notice whether your gut feels relief or disappointment while the coin is in the air: that is your somatic marker.',
    },
    contentHooks: [
      { format: 'Short Reel / Insight', hook: 'Why the smartest man in the world could not pick a pen (The Somatic Marker).' },
      { format: 'Carousel Slide', hook: 'The Neuroscience of Intuition: Why your gut knows before your brain does.' },
    ],
    scriptTemplate: 'We are sometimes taught to ignore our emotions and make decisions with pure cold logic. But when neuroscientist Antonio Damasio studied patients who lost emotional signaling, he discovered surprising decision paralysis...',
  }
];
