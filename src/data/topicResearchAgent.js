// Topic Generation & Deep Research Agent
// Simulates an asynchronous Perplexity-style deep research workflow
// Synthesizes high-yield, peer-reviewed psychology topics complete with hooks, scenario labs, Socratic quizzes, and content angles.

import { PSYCHOLOGY_CATEGORIES, getDialecticForTopic, getTopOnePercentFramework } from './topics.js';

const GENERATED_TOPICS_STORAGE_KEY = 'psychegrow_generated_topics';

// Pre-curated empirical research database across categories
const EMPIRICAL_RESEARCH_TOPIC_BANK = [
  // ==========================================
  // COGNITIVE PSYCHOLOGY
  // ==========================================
  {
    id: 'ego-depletion-decision-fatigue',
    title: 'Ego Depletion & Decision Fatigue',
    branch: 'Cognitive Psychology',
    categoryKey: 'cognitive',
    branchColor: {
      bg: 'bg-[#F2EFF6]',
      text: 'text-[#655A7B]',
      border: 'border-[#DDD8E6]',
      accent: '#7A6F91',
      badge: 'bg-[#EAE4F2]',
    },
    icon: 'Brain',
    tagline: 'Willpower is not a moral virtue; it is a depleting biological battery.',
    teaser: 'Why judges grant 65% parole in the early morning, and near 0% right before lunch.',
    readTime: '4 min read',
    difficulty: 'Intermediate',
    studyTakeaways: [
      'Documented by Roy Baumeister in controlled cognitive stamina experiments',
      'Executive function relies on glucose utilization in the prefrontal cortex',
      'Remedy: Automate low-stakes decisions (e.g. wardrobe, meals) to protect peak bandwidth',
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
          text: 'His prefrontal cortex experienced ego depletion, defaulting to the path of least cognitive resistance to conserve remaining glucose.',
          isCorrect: true,
          mechanism: 'Decision fatigue systematically impairs risk assessment. When cognitive resources run low, the brain avoids trade-off analysis and defaults to passive acquiescence or impulsive closure.',
        },
        {
          id: 'opt-2',
          text: 'His overall business intelligence decreased permanently throughout the afternoon.',
          isCorrect: false,
          mechanism: 'Cognitive capacity is dynamic, not static. It fluctuates based on task load, rest, and metabolic recovery.',
        },
        {
          id: 'opt-3',
          text: 'He was unconsciously attempting to sabotage company finances.',
          isCorrect: false,
          mechanism: 'Ego depletion is a physiological limitation of executive attention, not a conscious or subconscious desire for failure.',
        },
      ],
    },
    deepDiveConclusion: {
      headline: 'Conserving the Executive Fuel Tank',
      corePrinciple: 'Every single choice—from picking an email subject line to resolving conflict—draws from the exact same finite pool of executive self-control.',
      mentalModelFormula: 'High Decision Volume ➔ Prefrontal Fatigue ➔ Defaulting to Passivity or Impulsive Surrender',
      everydayRule: 'Schedule high-stakes creative and strategic decisions during your first two waking hours; reserve late afternoons for mechanical execution.',
    },
    contentHooks: [
      { format: 'Short Reel / Insight', hook: 'Why you make terrible choices after 4 PM (and how Steve Jobs beat it).', engagementRate: '94% completion' },
      { format: 'Carousel Slide', hook: 'The Decision Fatigue Audit: 3 trivial choices draining your willpower daily.', engagementRate: '91% saves' },
    ],
    scriptTemplate: 'Have you ever noticed that after a long day of making decisions, you eat junk food you swore you would avoid? That is not lack of discipline. It is called Ego Depletion...',
    stats: { learners: '11.8k', createdContent: '1,940 clips', viralityScore: 95 },
  },
  {
    id: 'the-zeigarnik-effect',
    title: 'The Zeigarnik Effect',
    branch: 'Cognitive Psychology',
    categoryKey: 'cognitive',
    branchColor: {
      bg: 'bg-[#F2EFF6]',
      text: 'text-[#655A7B]',
      border: 'border-[#DDD8E6]',
      accent: '#7A6F91',
      badge: 'bg-[#EAE4F2]',
    },
    icon: 'Brain',
    tagline: 'The human brain cannot archive what is left unresolved.',
    teaser: 'Why unfinished tasks obsessively hijack your attention while completed ones vanish from memory.',
    readTime: '3 min read',
    difficulty: 'Beginner',
    studyTakeaways: [
      'Discovered by Soviet psychologist Bluma Zeigarnik in 1927 observing restaurant waiters',
      'Uncompleted tasks generate persistent intrusive thoughts and background cognitive load',
      'Antidote: The "Mental Closing Ritual"—writing down the next physical step disarms the brain loop',
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
          text: 'The unfinished status keeps a neural loop actively open in working memory to prevent loss of critical context.',
          isCorrect: true,
          mechanism: 'The brain treats unresolved obligations as active threats to status or goals. The Zeigarnik effect forces intrusive thoughts until cognitive closure is achieved.',
        },
        {
          id: 'opt-2',
          text: 'Unsent drafts hold significantly higher monetary value than completed projects.',
          isCorrect: false,
          mechanism: 'Value is irrelevant; completion status is the trigger. Even trivial unfinished puzzles trigger the exact same intrusive memory retention.',
        },
      ],
    },
    deepDiveConclusion: {
      headline: 'Closing the Open Cognitive Tabs',
      corePrinciple: 'Your mind is a processor, not an open warehouse. Leaving tasks suspended without a clear next action keeps neural background bandwidth permanently consumed.',
      mentalModelFormula: 'Incomplete Action ➔ Persistent Cognitive Tension ➔ Attention Hijack ➔ Closure ➔ Memory Purge',
      everydayRule: 'Before finishing work, write down the single next micro-action for any unfinished task. Once the brain knows the next step is secure, the open loop closes.',
    },
    contentHooks: [
      { format: 'Short Reel / Insight', hook: 'Why you cannot stop thinking about that one unfinished project in bed.', engagementRate: '96% completion' },
      { format: 'Carousel Slide', hook: 'How Hollywood cliffhangers weaponize the Zeigarnik Effect against your brain.', engagementRate: '93% saves' },
    ],
    scriptTemplate: 'Ever wonder why Netflix episode endings make it physically painful to turn off the TV? In 1927, psychologist Bluma Zeigarnik discovered something shocking about unfinished loops...',
    stats: { learners: '15.4k', createdContent: '2,630 clips', viralityScore: 98 },
  },

  // ==========================================
  // SOCIAL PSYCHOLOGY
  // ==========================================
  {
    id: 'the-pygmalion-effect',
    title: 'The Pygmalion Effect',
    branch: 'Social Psychology',
    categoryKey: 'social',
    branchColor: {
      bg: 'bg-[#F9F0EC]',
      text: 'text-[#8F5543]',
      border: 'border-[#EAD6CF]',
      accent: '#A8634F',
      badge: 'bg-[#F3E2DB]',
    },
    icon: 'Users',
    tagline: 'Expectations act as self-fulfilling gravitational forces on human performance.',
    teaser: 'How a teacher or manager’s unspoken belief literally alters another person’s IQ score.',
    readTime: '4 min read',
    difficulty: 'Intermediate',
    studyTakeaways: [
      'Demonstrated by Robert Rosenthal and Lenore Jacobson in elementary schools in 1968',
      'High expectations trigger warmer micro-behaviors, richer feedback, and greater patience',
      'The inverse (The Golem Effect) causes low expectations to produce measurably degraded output',
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
      { format: 'Short Reel / Insight', hook: 'How expecting someone to be brilliant actually makes them smarter.', engagementRate: '92% completion' },
      { format: 'Carousel Slide', hook: 'Pygmalion vs Golem: The invisible psychology of leadership expectations.', engagementRate: '88% saves' },
    ],
    scriptTemplate: 'In 1968, researchers lied to elementary teachers, telling them 5 random children were mathematical geniuses. What happened next changed psychology forever...',
    stats: { learners: '13.1k', createdContent: '1,890 clips', viralityScore: 94 },
  },
  {
    id: 'the-pratfall-effect',
    title: 'The Pratfall Effect',
    branch: 'Social Psychology',
    categoryKey: 'social',
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
      theReaction: 'The audience laughs with her, and in the post-talk surveys, her likability and approachable leadership ratings spike by 42%.',
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
      { format: 'Short Reel / Insight', hook: 'Why being too perfect makes people secretly dislike you.', engagementRate: '95% completion' },
      { format: 'Carousel Slide', hook: 'The Pratfall Paradox: How to be competent without being intimidating.', engagementRate: '90% saves' },
    ],
    scriptTemplate: 'Do you ever try so hard to look flawless in meetings that you come across as stiff? Here is why psychology says spilling your coffee might actually be your superpower...',
    stats: { learners: '9.7k', createdContent: '1,420 clips', viralityScore: 91 },
  },

  // ==========================================
  // CLINICAL & WELLNESS
  // ==========================================
  {
    id: 'the-hedonic-treadmill',
    title: 'The Hedonic Treadmill',
    branch: 'Clinical & Wellness',
    categoryKey: 'clinical',
    branchColor: {
      bg: 'bg-[#EFF3F6]',
      text: 'text-[#475767]',
      border: 'border-[#D5E0E7]',
      accent: '#596E82',
      badge: 'bg-[#E1EAF0]',
    },
    icon: 'HeartHandshake',
    tagline: 'Today’s luxury becomes tomorrow’s invisible baseline.',
    teaser: 'Why lottery winners and major accident survivors return to the same baseline happiness within one year.',
    readTime: '4 min read',
    difficulty: 'Intermediate',
    studyTakeaways: [
      'Coined by Brickman and Campbell (1971); verified by Philip Brickman’s lottery study',
      'Neurochemical adaptation resets dopamine receptors back to set-point homeostasis',
      'The antidote: Shifting focus from circumstantial gains (money, status) to voluntary intrinsic practices',
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
      { format: 'Short Reel / Insight', hook: 'Why making millions will not fix your anxiety (The Hedonic Treadmill).', engagementRate: '97% completion' },
      { format: 'Carousel Slide', hook: 'The Happiness Paradox: Why reaching your dream goal always feels anticlimactic.', engagementRate: '94% saves' },
    ],
    scriptTemplate: 'In 1978, psychologists studied 22 lottery winners who won millions. One year later, their happiness was identical to people who won nothing. Here is why...',
    stats: { learners: '16.9k', createdContent: '3,100 clips', viralityScore: 99 },
  },

  // ==========================================
  // CONSUMER PSYCHOLOGY
  // ==========================================
  {
    id: 'the-decoy-effect',
    title: 'The Decoy Effect (Asymmetric Dominance)',
    branch: 'Consumer Psychology',
    categoryKey: 'consumer',
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
      { format: 'Short Reel / Insight', hook: 'How movie theaters trick your brain with the 50-cent popcorn trap.', engagementRate: '98% completion' },
      { format: 'Carousel Slide', hook: 'The Decoy Effect in SaaS: How pricing pages manipulate your subscription.', engagementRate: '95% saves' },
    ],
    scriptTemplate: 'Next time you buy a coffee or popcorn, look at the middle size. You think it is an option for moderate appetites? Think again. It is a psychological trap called the Decoy Effect...',
    stats: { learners: '21.5k', createdContent: '4,120 clips', viralityScore: 99 },
  },

  // ==========================================
  // BEHAVIORAL PSYCHOLOGY
  // ==========================================
  {
    id: 'implementation-intentions',
    title: 'Implementation Intentions',
    branch: 'Behavioral Psychology',
    categoryKey: 'behavioral',
    branchColor: {
      bg: 'bg-[#EFF4EE]',
      text: 'text-[#52684F]',
      border: 'border-[#D2E0D0]',
      accent: '#647D61',
      badge: 'bg-[#E3ECE1]',
    },
    icon: 'Compass',
    tagline: 'Goals tell you where to go; If-Then algorithms tell the nervous system when to act.',
    teaser: 'The 2-sentence linguistic structure that triples your statistical probability of sticking to any habit.',
    readTime: '3 min read',
    difficulty: 'Beginner',
    studyTakeaways: [
      'Pioneered by German psychologist Peter Gollwitzer in 1999 across over 90 empirical studies',
      'Pre-deciding "WHEN, WHERE, and HOW" offloads self-control from executive thought to environmental cues',
      'Raises habit execution rates from 35% up to 91% for difficult wellness and study behaviors',
    ],
    scenarioHook: {
      setting: 'Morning Kitchen Counter',
      character: 'Rachel, Medical Resident',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80',
      story: 'Rachel resolved for 8 months to "read research journals daily," but always skipped it because of clinical exhaustion. Then she reframed her intention using Gollwitzer’s formula.',
      theFriction: 'Instead of "I will study more," she programmed: "IF I pour my first cup of coffee at 6:45 AM, THEN I will open PubMed and read exactly one abstract on my phone before sitting down."',
      theReaction: 'Because the trigger (pouring coffee) was unambiguous and immediate, she completed 28 consecutive days without needing any willpower.',
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
      { format: 'Short Reel / Insight', hook: 'Why willpower is a scam (and the 2-sentence habit hack that actually works).', engagementRate: '96% completion' },
      { format: 'Carousel Slide', hook: 'How to automate your discipline using Peter Gollwitzer’s If-Then formula.', engagementRate: '92% saves' },
    ],
    scriptTemplate: 'Stop saying "I am going to work out more this month." Psychology proves that phrase has a 65% failure rate. Here is the 2-sentence formula that turns habits into automatic reflexes...',
    stats: { learners: '18.3k', createdContent: '3,450 clips', viralityScore: 97 },
  },

  // ==========================================
  // NEUROPSYCHOLOGY & EMOTION
  // ==========================================
  {
    id: 'somatic-marker-hypothesis',
    title: 'The Somatic Marker Hypothesis',
    branch: 'Neuropsychology & Emotion',
    categoryKey: 'neuropsychology',
    branchColor: {
      bg: 'bg-[#F8F0F2]',
      text: 'text-[#82525C]',
      border: 'border-[#E7D4DA]',
      accent: '#9A636F',
      badge: 'bg-[#F1DEE4]',
    },
    icon: 'Activity',
    tagline: 'Pure logic without gut feelings leads not to hyper-efficiency, but to total paralysis.',
    teaser: 'Why patients with damaged emotional centers take 45 minutes to pick between a blue or black pen.',
    readTime: '4 min read',
    difficulty: 'Advanced',
    studyTakeaways: [
      'Developed by neuroscientist Antonio Damasio through studies of ventromedial prefrontal cortex damage',
      'Emotions generate physical "gut" bodily sensations (heart rate, gut tension) that pre-filter options',
      'Without somatic markers, the brain must compute infinite permutations, resulting in decision deadlock',
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
      question: 'Why was Elliot, despite a genius-level IQ, unable to schedule an appointment?',
      options: [
        {
          id: 'opt-1',
          text: 'Without somatic emotional signals, all options hold equal analytical weight, creating infinite calculation loops.',
          isCorrect: true,
          mechanism: 'Damasio proved emotions act as cognitive heuristics that instantly discard millions of irrelevant options so conscious thought can finalize action.',
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
      corePrinciple: 'Intuition and bodily reactions are not irrational flaws to be suppressed; they are lightning-fast somatic summaries of millions of past experiences.',
      mentalModelFormula: 'Perceived Options ➔ Visceral Somatic Flare (Gut Signal) ➔ Filtered Candidate Set ➔ Rapid Decision',
      everydayRule: 'When stuck between two equivalent choices, flip a coin. Notice whether your gut feels relief or disappointment while the coin is in the air: that is your somatic marker.',
    },
    contentHooks: [
      { format: 'Short Reel / Insight', hook: 'Why the smartest man in the world could not pick a pen (The Somatic Marker).', engagementRate: '94% completion' },
      { format: 'Carousel Slide', hook: 'The Neuroscience of Intuition: Why your gut knows before your brain does.', engagementRate: '91% saves' },
    ],
    scriptTemplate: 'We are taught to ignore our emotions and make decisions with pure cold logic. But when neuroscientist Antonio Damasio studied a man who lost all emotions, he discovered something terrifying...',
    stats: { learners: '12.4k', createdContent: '2,150 clips', viralityScore: 93 },
  }
];

/**
 * Load all generated topics from localStorage
 */
export const loadGeneratedTopics = () => {
  try {
    const raw = localStorage.getItem(GENERATED_TOPICS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

/**
 * Save a newly synthesized topic into localStorage cache
 */
export const saveGeneratedTopic = (topic) => {
  try {
    const existing = loadGeneratedTopics();
    const updated = [topic, ...existing.filter((t) => t.id !== topic.id)];
    localStorage.setItem(GENERATED_TOPICS_STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
};

/**
 * Fallback procedural synthesis when all pre-curated topics in bank are exhausted
 */
const synthesizeProceduralTopic = (categoryName) => {
  const catObj = PSYCHOLOGY_CATEGORIES.find(
    (c) => c.name.toLowerCase() === categoryName?.toLowerCase()
  ) || PSYCHOLOGY_CATEGORIES[0];

  const uniqueId = `agent-${catObj.id}-${Date.now().toString(36)}`;
  
  const proceduralConcepts = [
    {
      title: 'Attention Fragmentation & Context Collapse',
      teaser: 'Why multi-tab task switching costs up to 40% of productive mental bandwidth.',
      takeaways: ['Documented by Gloria Mark at UC Irvine', 'Resuming an interrupted deep task takes 23 minutes on average', 'Batch communications into discrete time blocks'],
      hook: 'Why switching windows for 3 seconds destroys 20 minutes of focus.'
    },
    {
      title: 'The Spotlight Effect',
      teaser: 'Why you overestimate how much other people notice your clothes, mistakes, and nervousness.',
      takeaways: ['Discovered by Thomas Gilovich (2000)', 'People are trapped in their own egocentric perspective', 'Your perceived flaws are nearly invisible to onlookers'],
      hook: 'Nobody is looking at your mistake: The psychology of the Spotlight Effect.'
    },
    {
      title: 'The Illusory Truth Effect',
      teaser: 'Why repeating any false claim enough times makes the brain accept it as undeniable fact.',
      takeaways: ['Demonstrated by Hasher, Goldstein, and Toppino (1977)', 'Cognitive fluency is mistaken for factual truth', 'The antidote is radical source auditing'],
      hook: 'How your brain confuses familiarity with truth.'
    }
  ];

  const randomConcept = proceduralConcepts[Math.floor(Math.random() * proceduralConcepts.length)];

  return {
    id: uniqueId,
    title: `${randomConcept.title}`,
    branch: catObj.name,
    categoryKey: catObj.id,
    branchColor: {
      bg: catObj.pastel.bg,
      text: catObj.pastel.text,
      border: catObj.pastel.border,
      accent: catObj.accent,
      badge: catObj.pastel.badgeBg,
    },
    icon: catObj.icon || 'Brain',
    tagline: 'Deep research synthesized topic from peer-reviewed cognitive archives.',
    teaser: randomConcept.teaser,
    readTime: '4 min read',
    difficulty: 'Intermediate',
    studyTakeaways: randomConcept.takeaways,
    scenarioHook: {
      setting: 'Modern Digital Workspace',
      character: 'Alex, Knowledge Strategist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
      story: 'Alex assumed that juggling multiple communication channels simultaneously was a sign of high executive throughput.',
      theFriction: 'By 2 PM, an overwhelming cognitive fog settled in despite having executed zero physically strenuous tasks.',
      theReaction: 'Upon auditing his cognitive switching penalty, he realized micro-interruptions were depleting his prefrontal stamina.',
    },
    socraticQuiz: {
      question: `What is the core cognitive mechanism underlying ${randomConcept.title}?`,
      options: [
        {
          id: 'opt-1',
          text: 'Cognitive switching costs force the brain to purge working memory and reload attentional schemas repeatedly.',
          isCorrect: true,
          mechanism: 'The human executive control network cannot process parallel complex linguistic inputs without measurable latency.',
        },
        {
          id: 'opt-2',
          text: 'The brain simply ran out of electrical voltage.',
          isCorrect: false,
          mechanism: 'Metabolic attention allocation, not raw bio-voltage, governs executive throughput.',
        },
      ],
    },
    deepDiveConclusion: {
      headline: 'Architecting Attentional Sovereignty',
      corePrinciple: 'Human attention is an ultra-scarce singular spotlight. Guard your mental focus by removing ambient distractions.',
      mentalModelFormula: 'Deep Focus Duration × Zero Distractions = Exponential Cognitive Compounding',
      everydayRule: 'Single-task with ruthless boundary control. When engaged in deep work, close every unessential channel.',
    },
    contentHooks: [
      { format: 'Short Reel / Insight', hook: randomConcept.hook, engagementRate: '96% completion' },
      { format: 'Carousel Slide', hook: `3 ways ${randomConcept.title} impacts your daily productivity.`, engagementRate: '93% saves' },
    ],
    scriptTemplate: `Did you know that every time you glance at a notification, your brain takes 23 minutes to recover peak focus? Here is what science reveals about ${randomConcept.title}...`,
    stats: { learners: '8.4k', createdContent: '1,120 clips', viralityScore: 92 },
    isAgentSynthesized: true,
    synthesizedAt: new Date().toISOString()
  };
};

/**
 * Main Dynamic Research Agent function
 * Simulates a Perplexity-style deep research synthesis workflow:
 * 1. Scans empirical psychological archives
 * 2. Extracts mental model heuristics
 * 3. Synthesizes scenario hook, socratic quiz, and content creation studio angles
 * 4. Returns a high-quality, fully structured topic object
 */
export const researchNewPsychologyTopic = async ({
  categoryName,
  existingTopicIds = [],
  onProgress = null
}) => {
  const steps = [
    `🔍 Deep Research Agent: Querying APA & empirical archives for "${categoryName}"...`,
    `🧠 Synthesizing mental model dynamics and behavioral heuristics...`,
    `✍️ Generating practical scenario, Socratic lab, and social content hooks...`,
    `✨ Finalizing peer-reviewed mental model...`
  ];

  for (let i = 0; i < steps.length; i++) {
    if (onProgress) onProgress(steps[i], i + 1, steps.length);
    // Realistic micro-delay to simulate agentic deep research (180ms per step)
    await new Promise((resolve) => setTimeout(resolve, 180));
  }

  // 1. Check if ungenerated topic exists in the pre-curated bank for this category
  const candidatesInBank = EMPIRICAL_RESEARCH_TOPIC_BANK.filter((t) => {
    const matchesCategory = !categoryName || t.branch.toLowerCase() === categoryName.toLowerCase();
    const notUsed = !existingTopicIds.includes(t.id);
    return matchesCategory && notUsed;
  });

  let chosenTopic;

  if (candidatesInBank.length > 0) {
    chosenTopic = {
      ...candidatesInBank[0],
      isAgentSynthesized: true,
      synthesizedAt: new Date().toISOString()
    };
  } else {
    // 2. Synthesize via procedural generator if bank is fully exhausted
    chosenTopic = synthesizeProceduralTopic(categoryName);
  }

  // Ensure Dialectic perspective (Scientific vs. Philosophical) is attached
  if (!chosenTopic.dialectic) {
    chosenTopic.dialectic = getDialecticForTopic(chosenTopic);
  }

  // Ensure 4-Step Top 1% Micro-Learning Framework is attached
  if (!chosenTopic.topOnePercentFramework) {
    chosenTopic.topOnePercentFramework = getTopOnePercentFramework(chosenTopic);
  }

  // Persist to local storage
  saveGeneratedTopic(chosenTopic);

  return chosenTopic;
};
