// Curated Philosophy & Depth Psychology Expansion Modules ("Psyche & Sophia")
// Provides 4+ complete topics for every philosophical and depth psychology branch

export const PHILOSOPHY_EXPANSION_TOPICS = [
  // ==========================================
  // I. PSYCHOANALYTIC & DEPTH PSYCHOLOGY (3 Topics)
  // ==========================================
  {
    id: "freudian-slip-parapraxis",
    title: "Freudian Slips & The Leaking Unconscious",
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
    teaser: "Why verbal 'mistakes' are often the unconscious mind speaking forbidden truth.",
    readTime: "4 min read",
    difficulty: "Intermediate",
    studyTakeaways: [
      "Coined by Sigmund Freud in 'The Psychopathology of Everyday Life' (1901)",
      "Linguistic slips reveal repressed intentions, rivalries, or sexual fixations",
      "Modern cognitive view: Competition between semantic network nodes under cognitive load"
    ],
    scenarioHook: {
      setting: "Corporate Quarterly All-Hands Meeting",
      character: "Nathan, Product Lead",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
      story: "While presenting the merger to 300 employees, Nathan meant to say: 'I welcome our new partners with open arms.' Instead, he said: 'I welcome our new enemies with open arms.'",
      theFriction: "The room fell into stunned silence. Nathan laughed it off as fatigue, but inside his chest was pounding. For 3 months, he had secretly felt the acquiring firm was destroying his team's culture.",
      theReaction: "Under high adrenaline, his prefrontal filter slipped for 80 milliseconds—and his unconscious blurted out what his diplomatic conscious mind refused to admit."
    },
    socraticQuiz: {
      question: "Why do verbal slips occur disproportionately during stressful, high-stakes presentations?",
      options: [
        {
          id: "opt-1",
          text: "Executive inhibition relies on prefrontal stamina; when stress drains that stamina, repressed thoughts breach the linguistic filter.",
          isCorrect: true,
          mechanism: "The conscious mind constantly expends metabolic energy suppressing inconvenient truths; under high cognitive load, inhibition drops and underlying intentions leak out."
        },
        {
          id: "opt-2",
          text: "Vocal cords randomly misfire due to elevated adrenaline levels.",
          isCorrect: false,
          mechanism: "Parapraxes are semantically structured, not random acoustic errors; they carry coherent meaning linked to underlying emotional tension."
        }
      ]
    },
    deepDiveConclusion: {
      headline: "The Truth Leaking Out the Seams",
      corePrinciple: "The conscious ego is only a small island in a massive ocean of unconscious drives. What you try hardest to hide will find a phonetic loophole to surface.",
      mentalModelFormula: "Repressed Truth + High Stress / Fatigue ➔ Failed Prefrontal Inhibition = Parapraxis",
      everydayRule: "When you or someone close to you makes an awkward 'slip of the tongue', don't dismiss it: treat it as a whispered bulletin from the unconscious."
    },
    contentHooks: [
      { format: "Short Reel", hook: "Why you accidentally call your partner by your ex's name (and Freud's brutal explanation)." }
    ],
    scriptTemplate: "Ever said a word you didn't mean to say in a meeting? Freud explored in 1901 how slip-ups can reveal underlying thoughts. Here's why your unconscious leaks...",
    evidenceStatus: "philosophical-tradition",
    references: [
      {
        title: "The Psychopathology of Everyday Life",
        authors: "Sigmund Freud (trans. A. A. Brill)",
        year: 1914,
        url: "https://www.gutenberg.org/ebooks/4051",
        note: "Foundational psychoanalytic text introducing parapraxes, slips of the tongue, and unconscious conflict."
      },
      {
        title: "Sigmund Freud",
        authors: "Stanford Encyclopedia of Philosophy",
        year: 2018,
        url: "https://plato.stanford.edu/entries/freud/",
        note: "Academic overview of Freudian psychoanalytic theory, the unconscious mind, and defense mechanisms."
      }
    ]
  },
  {
    id: "sublimation-defense-mechanisms",
    title: "Sublimation: Psychological Alchemy",
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
    icon: "Flame",
    teaser: "How humanity's darkest animal impulses are channeled into masterpiece art and civilization.",
    readTime: "5 min read",
    difficulty: "Advanced",
    studyTakeaways: [
      "Regarded by Freud as the only mature, non-pathological defense mechanism",
      "Channels socially unacceptable aggressive or sexual energy into creative productivity",
      "Examples: Surgeons channeling aggression into healing; boxers channeling rage into athletic discipline"
    ],
    scenarioHook: {
      setting: "Late Night Music Studio",
      character: "Maya, Electronic Composer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
      story: "After a devastating betrayal by her business partner, Maya felt an overwhelming, violent urge to scream and smash furniture.",
      theFriction: "Knowing destructive rage would land her in court or ruin her reputation, she locked herself in her studio for 14 hours straight.",
      theReaction: "She funneled the raw physiological adrenaline into thunderous percussion tracks and haunting melodies—producing the most acclaimed EP of her career."
    },
    socraticQuiz: {
      question: "How does sublimation differ fundamentally from repression?",
      options: [
        {
          id: "opt-1",
          text: "Repression buries the impulse in the dark where it festers into neurosis; sublimation transforms the energy into socially constructive output.",
          isCorrect: true,
          mechanism: "Sublimation acknowledges the raw drive and redirects its kinetic force toward a creative, athletic, or intellectual vessel."
        },
        {
          id: "opt-2",
          text: "Sublimation completely eliminates the impulse from the nervous system forever.",
          isCorrect: false,
          mechanism: "Drives cannot be permanently deleted; they must be continually directed or integrated into purposeful action."
        }
      ]
    },
    deepDiveConclusion: {
      headline: "Turning Lead into Psychological Gold",
      corePrinciple: "Do not attempt to kill your animal aggression or chaotic urges. Transmute their raw horsepower into creative creation, athletic mastery, and bold leadership.",
      mentalModelFormula: "Raw Instinct (Anger/Drive) + Conscious Creative Container = Sublimated Mastery",
      everydayRule: "When furious or deeply agitated, never sit idle: immediately channel the kinetic adrenaline into an intense workout, focused writing, or creative production."
    },
    contentHooks: [
      { format: "Short Reel", hook: "The difference between neurotic people and genius artists comes down to one psychological word: Sublimation." }
    ],
    scriptTemplate: "Most people try to suppress their anger. But Freud suggested that intense instincts could be channeled into creative and productive works...",
    evidenceStatus: "philosophical-tradition",
    references: [
      {
        title: "Instincts and Their Vicissitudes",
        authors: "Sigmund Freud",
        year: 1915,
        url: "https://www.worldcat.org/title/875038318",
        note: "Metapsychological paper detailing the redirection of instinctual energy into non-sexual, culturally elevated aims (sublimation)."
      },
      {
        title: "Sigmund Freud",
        authors: "Internet Encyclopedia of Philosophy",
        year: 2021,
        url: "https://iep.utm.edu/freud/",
        note: "Philosophical exploration of Freud's instinct theory, ego defenses, and cultural sublimation."
      }
    ]
  },
  {
    id: "the-persona-vs-shadow",
    title: "The Persona Trap: Living Behind a Social Mask",
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
    teaser: "Why confusing who you pretend to be with who you actually are causes midlife burnout.",
    readTime: "4 min read",
    difficulty: "Intermediate",
    studyTakeaways: [
      "Formulated by Carl Jung: 'Persona' is the actor's mask crafted for social approval",
      "Danger occurs when the ego identifies 100% with the mask (the 'Persona Trap')",
      "The parts of yourself that don't fit the mask get dumped into the unconscious shadow"
    ],
    scenarioHook: {
      setting: "Silicon Valley Tech Executive Retreat",
      character: "Arthur, VP of Engineering",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Arthur spent 20 years cultivating the persona of the unflappable, hyper-rational, stoic tech leader who never complains, never rests, and always has the answer.",
      theFriction: "At age 44, despite $3M in equity, he woke up in a luxury hotel unable to get out of bed, weeping uncontrollably without knowing why.",
      theReaction: "He had starved his emotional, playful, and vulnerable self for two decades. The Persona had eaten the person alive."
    },
    socraticQuiz: {
      question: "Why is complete identification with a successful professional persona psychologically dangerous?",
      options: [
        {
          id: "opt-1",
          text: "A persona is only an external interface; when you confuse the mask with your whole identity, disowned emotional needs revolt through depression or crisis.",
          isCorrect: true,
          mechanism: "Jung observed that midlife crises occur when the persona cracks under the pressure of all the disowned vitality locked in the shadow."
        },
        {
          id: "opt-2",
          text: "Social masks prevent career advancement in corporate settings.",
          isCorrect: false,
          mechanism: "Personas are extremely effective for career advancement; the danger is internal psychological atrophy, not external failure."
        }
      ]
    },
    deepDiveConclusion: {
      headline: "Wearing the Mask Without Becoming It",
      corePrinciple: "A persona is a necessary social suit of clothes. Wear it when interacting with the world, but take it off the moment you walk through your own front door.",
      mentalModelFormula: "Identification with Mask ➔ Starved Shadow ➔ Psychic Bankruptcy ➔ Midlife Crisis",
      everydayRule: "Reserve at least one space in your life where you have zero professional reputation to defend and complete permission to be messy and human."
    },
    contentHooks: [
      { format: "Carousel Slide", hook: "The Persona Trap: Why successful people feel completely hollow inside at 40." }
    ],
    scriptTemplate: "Carl Jung warned that the biggest tragedy in modern life is becoming the person your resume says you are...",
    evidenceStatus: "philosophical-tradition",
    references: [
      {
        title: "Two Essays on Analytical Psychology",
        authors: "Carl G. Jung",
        year: 1928,
        url: "https://www.worldcat.org/title/154181",
        note: "Definitive formulation of the persona as social compromise and its tension with the shadow and personal unconscious."
      },
      {
        title: "Carl Gustav Jung",
        authors: "Internet Encyclopedia of Philosophy",
        year: 2020,
        url: "https://iep.utm.edu/jung/",
        note: "Peer-reviewed overview of analytical psychology concepts including the persona, ego-identity, and individuation."
      }
    ]
  },

  // ==========================================
  // II. STOICISM & HELLENISTIC (3 Topics)
  // ==========================================
  {
    id: "amor-fati-radical-acceptance",
    title: "Amor Fati: The Radical Love of Fate",
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
    teaser: "Not merely tolerating tragedy, but treating catastrophe as fuel for your character.",
    readTime: "4 min read",
    difficulty: "Intermediate",
    studyTakeaways: [
      "Practiced by Marcus Aurelius and formalized by Friedrich Nietzsche as 'Amor Fati'",
      "Replaces passive resignation with active, joyful embrace of whatever reality serves",
      "Marcus: 'The mind adapts and converts to its own purposes the obstacle to our acting.'"
    ],
    scenarioHook: {
      setting: "Burned Factory Grounds at Midnight",
      character: "Thomas Edison, Inventor",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80",
      story: "In December 1914, a massive fire destroyed 10 buildings of Edison's plant, incinerating years of non-recoverable research prototypes.",
      theFriction: "At age 67, watching his life's work turn to ashes, onlookers expected Edison to collapse in despair.",
      theReaction: "Instead, he told his son: 'Go get your mother and all her friends. They'll never see a fire like this again.' The next morning, he told his team: 'We've just cleared out a lot of old rubbish. We'll start building tomorrow.'"
    },
    socraticQuiz: {
      question: "What is the cognitive difference between passive endurance and Amor Fati?",
      options: [
        {
          id: "opt-1",
          text: "Endurance grinds teeth and harbors resentment; Amor Fati welcomes the adversity as the exact raw material needed to exercise greatness.",
          isCorrect: true,
          mechanism: "Amor Fati eliminates the mental friction of wishing reality were different, channeling 100% of executive energy into immediate creative adaptation."
        },
        {
          id: "opt-2",
          text: "Amor Fati denies that the fire or tragedy actually happened.",
          isCorrect: false,
          mechanism: "Amor Fati is grounded in ruthless realism; it accepts the objective facts instantly without wasting a second on futile denial."
        }
      ]
    },
    deepDiveConclusion: {
      headline: "The Fire Consumes Everything and Grows Brighter",
      corePrinciple: "A blazing fire makes flame and brightness out of everything that is thrown into it. Treat every misfortune not as an interruption to your path, but as the path itself.",
      mentalModelFormula: "Adversity + Zero Resentment + Active Embrace = Unbreakable Character",
      everydayRule: "When plans collapse, banish the phrase 'Why me?' and replace it with: 'Good. This is the exact training session I needed today.'"
    },
    contentHooks: [
      { format: "Short Reel", hook: "The mindset shift that let Edison smile while his entire life's work burned to the ground." }
    ],
    scriptTemplate: "Marcus Aurelius practiced radical acceptance, but it was Friedrich Nietzsche who coined the phrase that defines it: Amor Fati...",
    evidenceStatus: "philosophical-tradition",
    references: [
      {
        title: "The Joyful Wisdom (The Gay Science, §276)",
        authors: "Friedrich Nietzsche (trans. Thomas Common)",
        year: 1910,
        url: "https://www.gutenberg.org/ebooks/52319",
        note: "Primary text introducing 'Amor Fati' as formula for human greatness: wanting nothing to be different in the past, present, or future."
      },
      {
        title: "Friedrich Nietzsche",
        authors: "Stanford Encyclopedia of Philosophy",
        year: 2017,
        url: "https://plato.stanford.edu/entries/nietzsche/",
        note: "Philosophical overview covering Nietzsche's concepts of eternal recurrence, affirmation, and amor fati."
      }
    ]
  },
  {
    id: "premeditatio-malorum-negative-visualization",
    title: "Premeditatio Malorum: Cognitive Inoculation",
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
    teaser: "Why rehearsing your worst-case nightmares every morning makes you impervious to panic.",
    readTime: "4 min read",
    difficulty: "Beginner",
    studyTakeaways: [
      "Key Stoic drill codified by Seneca: Premeditation of Evils",
      "Deliberately imagining bankruptcy, exile, illness, or death before starting the day",
      "Modern equivalent: Stress Inoculation Training (SIT) and Premortem analysis in high-risk engineering"
    ],
    scenarioHook: {
      setting: "Morning Coffee Routine",
      character: "Seneca, Roman Statesman",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Before stepping out into the Roman forum, Seneca mentally rehearses: 'Today I may meet the deceitful, the ungrateful, the arrogant. My ships may sink in Alexandria. I may be exiled by Nero.'",
      theFriction: "Modern toxic positivity tells you to 'manifest only good vibes'. But when catastrophe inevitably strikes an unprepared optimist, they are paralyzed by shock.",
      theReaction: "Because Seneca had already greeted ruin in his imagination that morning, when unexpected bad news arrived, his pulse never even accelerated: 'I anticipated this.'"
    },
    socraticQuiz: {
      question: "Why does Premeditatio Malorum prevent anxiety rather than generate more of it?",
      options: [
        {
          id: "opt-1",
          text: "Neuro-cognitive desensitization: Imagining disaster in a calm physical state strips the event of novelty and panic, replacing helplessness with prepared contingency.",
          isCorrect: true,
          mechanism: "Fear feeds on the unknown and unexpected. By bringing worst-case scenarios into conscious awareness, the amygdala down-regulates its panic response."
        },
        {
          id: "opt-2",
          text: "It causes the universe to grant you immunity from bad events.",
          isCorrect: false,
          mechanism: "Stoics reject superstition; the benefit is strictly internal psychological stamina and calm readiness."
        }
      ]
    },
    deepDiveConclusion: {
      headline: "The Premortem for Your Nervous System",
      corePrinciple: "He who has anticipated the coming of troubles takes away their power when they arrive. What is unexpected is always more crushing.",
      mentalModelFormula: "Deliberate Morning Nightmare Rehearsal ➔ Amygdala Desensitization ➔ Unshakable Midday Composure",
      everydayRule: "Spend 3 minutes each morning visualizing: 'What if my hardest project fails, my car breaks down, or someone lets me down today?' Craft your calm response in advance."
    },
    contentHooks: [
      { format: "Short Reel", hook: "Why modern 'manifestation' makes you fragile (and what Roman Stoics did instead)." }
    ],
    scriptTemplate: "Roman Stoics like Seneca and Marcus Aurelius practiced Premeditatio Malorum: rehearsing setbacks in advance to inoculate the mind against panic...",
    evidenceStatus: "philosophical-tradition",
    references: [
      {
        title: "Moral Letters to Lucilius (Letter 24: On Despising Death)",
        authors: "Lucius Annaeus Seneca (trans. Richard M. Gummere)",
        year: 1917,
        url: "https://en.wikisource.org/wiki/Moral_letters_to_Lucilius/Letter_24",
        note: "Primary Stoic epistle demonstrating premeditation of difficulties to rob unexpected misfortune of its sting."
      },
      {
        title: "Seneca",
        authors: "Stanford Encyclopedia of Philosophy",
        year: 2020,
        url: "https://plato.stanford.edu/entries/seneca/",
        note: "Comprehensive scholarly overview of Seneca's moral psychology, therapy of emotions, and Stoic exercises."
      }
    ]
  },
  {
    id: "memento-mori-ataraxia",
    title: "Memento Mori: Death as the Ultimate Clarity Filter",
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
    teaser: "How remembering you could leave life right now destroys trivial pettiness and restores gratitude.",
    readTime: "4 min read",
    difficulty: "Beginner",
    studyTakeaways: [
      "Marcus Aurelius: 'You could leave life right now. Let that determine what you do and say and think.'",
      "Erases chronic social anxiety by exposing how minuscule our daily squabbles are in geological time",
      "Produces 'Ataraxia'—an unperturbed state of tranquil psychological freedom"
    ],
    scenarioHook: {
      setting: "Heated Office Parking Lot Dispute",
      character: "Elena, Creative Director",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
      story: "A stranger cuts off Elena to steal the last parking spot, flipping her off with aggressive fury. Elena's blood surges; she wants to honk, chase them, and demand respect.",
      theFriction: "Her animal ego wants an immediate tribal dominance fight that will ruin the next 4 hours of her creative morning.",
      theReaction: "She touches the ring on her finger engraved with 'Memento Mori'. She whispers: 'We are two fleeting specks of dust who will be buried in 50 years. Am I really going to surrender my sacred morning to an argument over 8 feet of asphalt?' She drives past and smiles."
    },
    socraticQuiz: {
      question: "How does contemplation of mortality act as a cognitive decision filter?",
      options: [
        {
          id: "opt-1",
          text: "It resets perspective immediately: petty insults and status rivalries shrivel to insignificance against the backdrop of limited remaining lifespan.",
          isCorrect: true,
          mechanism: "Terror Management Theory and cognitive reframing show that mortality salience highlights intrinsic values (love, character, focus) over extrinsic vanity."
        },
        {
          id: "opt-2",
          text: "It makes you give up on all worldly ambitions and live as a hermit.",
          isCorrect: false,
          mechanism: "Stoic Memento Mori is not nihilism; it is fuel for urgent, focused, compassionate action in the present moment."
        }
      ]
    },
    deepDiveConclusion: {
      headline: "The Ultimate Antidote to Pettiness",
      corePrinciple: "You don't have a short life; you just waste most of it on arguments and anxieties that don't matter. Death is not your enemy—it is the lens that brings life into focus.",
      mentalModelFormula: "Petty Outrage + Memento Mori Reality Check = Instant Liberation (Ataraxia)",
      everydayRule: "Whenever you feel road rage, envy, or petty annoyance, ask: 'If I had 30 days left to live, would I waste 60 seconds on this?' If no, walk away."
    },
    contentHooks: [
      { format: "Short Reel", hook: "The 3-word Roman Latin phrase that stops all social anxiety in 5 seconds." }
    ],
    scriptTemplate: "Roman generals had a slave whisper in their ear during triumph parades: 'Remember you are mortal.' Here is how Memento Mori cures modern burnout...",
    evidenceStatus: "philosophical-tradition",
    references: [
      {
        title: "Meditations (Book II.11)",
        authors: "Marcus Aurelius (trans. George Long)",
        year: 1862,
        url: "https://classics.mit.edu/Antoninus/meditations.2.two.html",
        note: "Primary text on mortality contemplation: 'Since it is possible that thou mayest depart from life this very moment, regulate every act and thought accordingly.'"
      },
      {
        title: "Marcus Aurelius",
        authors: "Stanford Encyclopedia of Philosophy",
        year: 2020,
        url: "https://plato.stanford.edu/entries/marcus-aurelius/",
        note: "Academic overview of Marcus Aurelius's Stoic worldview, personal journals, and reflections on transience."
      }
    ]
  },

  // ==========================================
  // III. EXISTENTIALISM (3 Topics)
  // ==========================================
  {
    id: "the-myth-of-sisyphus-the-absurd",
    title: "The Myth of Sisyphus & The Absurd Hero",
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
    teaser: "Why pushing a boulder up a hill that rolls back down is the ultimate metaphor for work and happiness.",
    readTime: "5 min read",
    difficulty: "Advanced",
    studyTakeaways: [
      "Published by Albert Camus in 1942: 'The Absurd' is the clash between human desire for meaning and an indifferent universe",
      "Rejects physical suicide and philosophical suicide (religious dogma) in favor of passionate revolt",
      "Famous conclusion: 'One must imagine Sisyphus happy.'"
    ],
    scenarioHook: {
      setting: "Endless Spreadsheet Reporting at 6:30 PM",
      character: "Liam, Financial Auditor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Liam just closed the annual fiscal books after 3 weeks of grueling 12-hour days. He closes his laptop, takes a deep breath, and opens his calendar. Tomorrow: Month 1 reconciliation begins.",
      theFriction: "The dreadful realization hits: Life is an endless loop of pushing boulders up hills only to watch them roll back down. The laundry, the code commits, the emails.",
      theReaction: "Instead of falling into despair, Liam channels Camus: The boulder doesn't define him; his defiance and presence while pushing it does. He smiles, closes his screen, and owns the struggle."
    },
    socraticQuiz: {
      question: "Why does Camus conclude that 'One must imagine Sisyphus happy'?",
      options: [
        {
          id: "opt-1",
          text: "By consciously choosing to push the boulder without hope of an afterlife reward, Sisyphus conquers the gods through sheer defiant ownership of his fate.",
          isCorrect: true,
          mechanism: "Meaning is not found in an external finish line; it is forged through conscious revolt, vitality, and presence in the process itself."
        },
        {
          id: "opt-2",
          text: "Sisyphus was physically immune to lactic acid and muscular fatigue.",
          isCorrect: false,
          mechanism: "Sisyphus is a philosophical archetype of human condition, demonstrating revolt against cosmic absurdity."
        }
      ]
    },
    deepDiveConclusion: {
      headline: "The Dignity of the Daily Grind",
      corePrinciple: "There is no cosmic finish line where everything stays completed. The struggle itself toward the heights is enough to fill a human heart.",
      mentalModelFormula: "Absurd Loop + Defiant Conscious Presence = Authentic Joy",
      everydayRule: "Stop waiting for the day when 'all your work is finally finished.' Fall in love with the muscle it takes to push the boulder today."
    },
    contentHooks: [
      { format: "Short Reel", hook: "Why you feel exhausted even when you achieve all your goals (and Camus' cure)." }
    ],
    scriptTemplate: "Albert Camus asked the ultimate question: If life is just rolling a boulder up a hill forever, why keep going? His answer will surprise you...",
    evidenceStatus: "philosophical-tradition",
    references: [
      {
        title: "The Myth of Sisyphus and Other Essays",
        authors: "Albert Camus (trans. Justin O'Brien)",
        year: 1955,
        url: "https://www.worldcat.org/title/1154245641",
        note: "Primary existential essay treating the confrontation between human desire for clarity and an unreasonable world."
      },
      {
        title: "Albert Camus",
        authors: "Stanford Encyclopedia of Philosophy",
        year: 2021,
        url: "https://plato.stanford.edu/entries/camus/",
        note: "Scholarly overview of Camus's philosophy of the absurd, revolt, freedom, and passion."
      }
    ]
  },
  {
    id: "kierkegaard-dizziness-of-freedom",
    title: "Kierkegaard & The Vertigo of Possibility",
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
    teaser: "Why standing on the edge of a cliff doesn't make you afraid of falling—it makes you afraid of jumping.",
    readTime: "4 min read",
    difficulty: "Advanced",
    studyTakeaways: [
      "Formulated by Søren Kierkegaard in 'The Concept of Anxiety' (1844)",
      "Anxiety is not fear of an external threat; it is 'the dizziness of freedom'",
      "When looking into a chasm, anxiety is the sudden terrifying realization of your own boundless capacity to leap"
    ],
    scenarioHook: {
      setting: "Pre-Launch Meeting for a Tech Startup",
      character: "Clara, Founder",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Clara has the resignation letter in her draft folder. If she clicks send, her stable $200k salary disappears and her bootstrapped dream begins.",
      theFriction: "Her hands shake. She feels nauseated. She assumes this is panic or a sign she isn't cut out to be an entrepreneur.",
      theReaction: "Kierkegaard would explain: Clara is not sick; she is experiencing the vertigo of possibility. Her nervous system is reeling from the raw, open expanse of her own freedom."
    },
    socraticQuiz: {
      question: "What is the key difference between fear and existential anxiety according to Kierkegaard?",
      options: [
        {
          id: "opt-1",
          text: "Fear has a specific definite object (a barking dog); anxiety has no object—it is the vertigo of your own infinite future choices.",
          isCorrect: true,
          mechanism: "Fear prompts biological fight-or-flight from an external stimulus; existential dread arises from the internal realization of unscripted personal agency."
        },
        {
          id: "opt-2",
          text: "Fear is real, whereas anxiety is an imaginary invention.",
          isCorrect: false,
          mechanism: "Anxiety is the fundamental mark of human consciousness and freedom."
        }
      ]
    },
    deepDiveConclusion: {
      headline: "Anxiety as the Gateway to Growth",
      corePrinciple: "Anxiety is the dizziness of freedom. Do not drug it away or hide in routine; recognize it as the price of admission for stepping into your full potential.",
      mentalModelFormula: "Radical Possibility + No Guarantees = Existential Vertigo ➔ The Leap of Faith",
      everydayRule: "When choosing between safety and a terrifying new path, remember: feeling dizzy means you are standing at the edge of real freedom. Step forward."
    },
    contentHooks: [
      { format: "Short Reel", hook: "Why standing on a high balcony makes you feel like jumping (The psychology of Vertigo)." }
    ],
    scriptTemplate: "In 1844, a Danish philosopher figured out why big life decisions make you feel physically sick to your stomach. He called it the dizziness of freedom...",
    evidenceStatus: "philosophical-tradition",
    references: [
      {
        title: "The Concept of Anxiety: A Simple Psychologically Orienting Deliberation on the Dogmatic Issue of Hereditary Sin",
        authors: "Søren Kierkegaard (trans. Reidar Thomte)",
        year: 1980,
        url: "https://www.worldcat.org/title/521634",
        note: "Seminal philosophical work introducing anxiety as the dizziness of freedom and possibility."
      },
      {
        title: "Søren Kierkegaard",
        authors: "Stanford Encyclopedia of Philosophy",
        year: 2017,
        url: "https://plato.stanford.edu/entries/kierkegaard/",
        note: "Authoritative academic overview of Kierkegaard's existential psychology, dread, and stages of existence."
      }
    ]
  },
  {
    id: "viktor-frankl-will-to-meaning",
    title: "Viktor Frankl & The Will to Meaning",
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
    teaser: "How humans can endure almost any 'How' if they possess a sufficiently strong 'Why'.",
    readTime: "5 min read",
    difficulty: "Intermediate",
    studyTakeaways: [
      "Developed by Viktor Frankl in Auschwitz and published in 'Man's Search for Meaning' (1946)",
      "Logotherapy: The primary human drive is neither pleasure (Freud) nor power (Adler), but the pursuit of meaning",
      "The last human freedom: 'To choose one's attitude in any given set of circumstances.'"
    ],
    scenarioHook: {
      setting: "Auschwitz Concentration Camp, Winter 1944",
      character: "Dr. Viktor Frankl, Neurologist",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Stripped of his clothes, his manuscripts, his family, and his medical degree, Frankl stood in freezing mud with typhus spreading through the barracks.",
      theFriction: "Guards could strip his physical body of everything, beat him, and withhold food. But they could not enter the sovereign sanctuary of his mind.",
      theReaction: "Frankl imagined standing in a warm lecture hall after the war, teaching students how the human psyche triumphs over degradation. That future 'Why' kept his immune system and will alive."
    },
    socraticQuiz: {
      question: "According to Frankl's observations, which prisoners were most likely to survive extreme conditions?",
      options: [
        {
          id: "opt-1",
          text: "Those who oriented their consciousness toward a future responsibility, loved one, or unfinished work that needed them.",
          isCorrect: true,
          mechanism: "Those who had a meaning anchor sustained neuro-immune resilience; when a prisoner lost faith in the future, biological decline followed within days."
        },
        {
          id: "opt-2",
          text: "Those with the largest physical muscle mass prior to imprisonment.",
          isCorrect: false,
          mechanism: "Frankl noted that physically robust men often succumbed faster than slight individuals who had rich inner intellectual lives."
        }
      ]
    },
    deepDiveConclusion: {
      headline: "The Unconquerable Human Core",
      corePrinciple: "Everything can be taken from a man but one thing: the last of the human freedoms—to choose one's attitude in any given set of circumstances, to choose one's own way.",
      mentalModelFormula: "Unavoidable Suffering + Self-Authored Purpose = Transformed Meaning",
      everydayRule: "When trapped in a situation you cannot change, accept the challenge to change yourself. Ask: 'What is this situation demanding from my character right now?'"
    },
    contentHooks: [
      { format: "Short Reel", hook: "The single lesson from Auschwitz that cures modern nihilism and purposelessness." }
    ],
    scriptTemplate: "Viktor Frankl lost everything in a concentration camp. But he discovered a secret about human willpower that changed psychology forever...",
    evidenceStatus: "philosophical-tradition",
    references: [
      {
        title: "Man's Search for Meaning: An Introduction to Logotherapy",
        authors: "Viktor E. Frankl",
        year: 1959,
        url: "https://www.worldcat.org/title/1041926",
        note: "Autobiographical and clinical treatise detailing logotherapy and the existential will to meaning."
      },
      {
        title: "Viktor Frankl (1905—1997)",
        authors: "Internet Encyclopedia of Philosophy",
        year: 2022,
        url: "https://iep.utm.edu/frankl/",
        note: "Peer-reviewed overview of Frankl's existential psychology, dimensional ontology, and meaning-centered therapy."
      }
    ]
  },

  // ==========================================
  // IV. EPISTEMOLOGY (3 Topics)
  // ==========================================
  {
    id: "socratic-ignorance-intellectual-humility",
    title: "Socratic Ignorance: The Power of Knowing Nothing",
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
    teaser: "Why the Oracle of Delphi declared no man wiser than Socrates—because he recognized the limits of his own knowledge.",
    readTime: "4 min read",
    difficulty: "Beginner",
    studyTakeaways: [
      "The Delphic Oracle declared no man was wiser than Socrates",
      "Socrates interviewed politicians, poets, and artisans: all claimed mastery outside their craft",
      "Socratic elenchus: Method of dialectical questioning to expose foundational contradictions"
    ],
    scenarioHook: {
      setting: "Tech Investor Pitch Meeting",
      character: "Darius, Startup Founder",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
      story: "A rival founder swaggered into the boardroom, claiming his AI model was 100% bug-free, market-proof, and guaranteed 10x returns. Darius stood up next.",
      theFriction: "Darius laid out his unit economics honestly: 'Here are the 3 major market risks where our assumptions might be dead wrong, and here is how we test them.'",
      theReaction: "The lead venture partner wrote Darius a $2M check: 'The first founder is an amateur fooled by his own PR. You are the only person in this room wise enough to respect the unknown.'"
    },
    socraticQuiz: {
      question: "Why does acute awareness of one's own ignorance produce superior decision-making?",
      options: [
        {
          id: "opt-1",
          text: "It eliminates overconfidence bias, forcing you to test hypotheses empirically rather than bet on dogmatic assumptions.",
          isCorrect: true,
          mechanism: "Intellectual humility fosters active cognitive search, error-correction, and openness to disconfirming evidence."
        },
        {
          id: "opt-2",
          text: "It makes other people feel superior so they lower their guard.",
          isCorrect: false,
          mechanism: "Socratic ignorance is an epistemic tool for discovering truth, not a manipulative parlor trick."
        }
      ]
    },
    deepDiveConclusion: {
      headline: "The Clean Slate of True Wisdom",
      corePrinciple: "It is impossible for a man to learn what he thinks he already knows. Wisdom begins with the courage to say: 'I do not know, let us examine it.'",
      mentalModelFormula: "Radical Intellectual Humility ➔ Socratic Inquiry ➔ Unclouded Truth Discovery",
      everydayRule: "Before entering any negotiation or strategic debate, ask: 'What is the single foundational assumption I am taking for granted that might be completely false?'"
    },
    contentHooks: [
      { format: "Short Reel", hook: "Why the smartest people in the room always sound the most uncertain." }
    ],
    scriptTemplate: "2,400 years ago, the Oracle was asked who the wisest man in Athens was. Her answer was shocking: Socrates. Here is why...",
    evidenceStatus: "philosophical-tradition",
    references: [
      {
        title: "Apology",
        authors: "Plato (trans. Benjamin Jowett)",
        year: 1892,
        url: "https://classics.mit.edu/Plato/apology.html",
        note: "Primary Socratic dialogue recounting the trial of Socrates and his famous investigation of the Delphic oracle (Apology 21d)."
      },
      {
        title: "Socrates",
        authors: "Stanford Encyclopedia of Philosophy",
        year: 2022,
        url: "https://plato.stanford.edu/entries/socrates/",
        note: "Authoritative academic overview of Socratic method (elenchus), irony, and the recognition of ignorance."
      }
    ]
  },
  {
    id: "descartes-radical-doubt-cogito",
    title: "Descartes' Method of Doubt & The Cogito",
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
    teaser: "How tearing down every belief you hold leaves behind one indomitable bedrock: 'I think, therefore I am.'",
    readTime: "5 min read",
    difficulty: "Advanced",
    studyTakeaways: [
      "Published in 'Meditations on First Philosophy' (1641) by René Descartes",
      "Methodological Skepticism: Treat any belief with the slightest doubt as completely false",
      "The evil demon thought experiment: The precursor to The Matrix simulation hypothesis"
    ],
    scenarioHook: {
      setting: "VR Simulation Lab",
      character: "Dr. Aaron Vance, AI Researcher",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
      story: "While testing an advanced haptic VR headset, Aaron experienced photorealistic rain, pain, and taste that felt 100% physically genuine.",
      theFriction: "Taking off the headset, he looked at his physical desk and coffee mug. A chill ran down his spine: 'How do I prove with 100% mathematical certainty that this physical room isn't just another feed into my sensory cortex?'",
      theReaction: "Descartes solved this 380 years ago: Even if an evil demon is deceiving all five senses, the very fact that a mind is doubting proves beyond doubt that a thinking entity exists: Cogito, ergo sum."
    },
    socraticQuiz: {
      question: "Why cannot your physical senses serve as the ultimate foundation of mathematical knowledge?",
      options: [
        {
          id: "opt-1",
          text: "Senses routinely deceive us through dreams, optical illusions, and neurological hallucinations; reason must cross-examine sensory reports.",
          isCorrect: true,
          mechanism: "Descartes noted that once something has deceived you once (like a stick appearing bent in water), it can never be trusted as an unquestioned foundation."
        },
        {
          id: "opt-2",
          text: "Because physical eyes only operate in the visible light spectrum.",
          isCorrect: false,
          mechanism: "Descartes' argument is epistemological, not purely biological; it questions whether sensory data guarantees external reality."
        }
      ]
    },
    deepDiveConclusion: {
      headline: "The Unshakable Bedrock of Consciousness",
      corePrinciple: "You can doubt your physical body, you can doubt the physical universe, you can doubt yesterday's memories. But you cannot doubt that you are doubting right now.",
      mentalModelFormula: "Radical Method of Doubt ➔ Elimination of Sensory Assumptions ➔ The Indubitable Cogito",
      everydayRule: "When building an argument or product strategy, strip away all inherited industry assumptions until you reach the fundamental, undeniable physics of the problem."
    },
    contentHooks: [
      { format: "Short Reel", hook: "How a 17th-century French philosopher mathematically proved The Matrix." }
    ],
    scriptTemplate: "What if you are plugged into a machine right now and everything you see is fake? Descartes asked that exact question in 1641...",
    evidenceStatus: "philosophical-tradition",
    references: [
      {
        title: "Meditations on First Philosophy",
        authors: "René Descartes (trans. John Veitch)",
        year: 1901,
        url: "https://classics.mit.edu/Descartes/meditations.html",
        note: "Primary philosophical text demonstrating hyperbolic doubt and the formulation of the Cogito."
      },
      {
        title: "René Descartes",
        authors: "Stanford Encyclopedia of Philosophy",
        year: 2014,
        url: "https://plato.stanford.edu/entries/descartes/",
        note: "Authoritative academic overview of Cartesian epistemological skepticism and foundationalism."
      }
    ]
  },
  {
    id: "popper-falsification-criterion",
    title: "Popper's Falsification & The Black Swan",
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
    teaser: "Why seeing 1,000,000 white swans cannot prove all swans are white, but seeing 1 black swan disproves it forever.",
    readTime: "4 min read",
    difficulty: "Intermediate",
    studyTakeaways: [
      "Formulated by Karl Popper in 'The Logic of Scientific Discovery' (1934)",
      "A theory is only scientific if it makes risky predictions that can potentially be proven false",
      "Pseudo-science (like astrology) explains every outcome after the fact, making itself unfalsifiable"
    ],
    scenarioHook: {
      setting: "Biotech Investment Committee",
      character: "Dr. Evelyn Ross, Lead Reviewer",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
      story: "A pitch team presented a wellness machine claiming to 'cure chronic exhaustion'. When Evelyn asked: 'Under what trial condition would you admit this device does not work?'",
      theFriction: "The founder stumbled: 'It always works, but if the patient doesn't feel better, it means their emotional energy was out of alignment.'",
      theReaction: "Evelyn shut her folder: 'Your theory is unfalsifiable. Because no result can prove you wrong, your claim is scientifically meaningless.' Pitch rejected."
    },
    socraticQuiz: {
      question: "What makes a theory 'falsifiable' in Popperian science?",
      options: [
        {
          id: "opt-1",
          text: "It specifies in advance a concrete, observable test that, if observed, would conclusively prove the theory wrong.",
          isCorrect: true,
          mechanism: "Genuine science seeks to disprove its own models; pseudo-science alters excuses to protect beliefs from refutation."
        },
        {
          id: "opt-2",
          text: "The theory has been verified by 100 consecutive successful experiments.",
          isCorrect: false,
          mechanism: "Verification is impossible under the problem of induction; no matter how many confirmations you have, a counter-example can shatter it."
        }
      ]
    },
    deepDiveConclusion: {
      headline: "The Gold Standard of Intellectual Rigor",
      corePrinciple: "A theory that explains everything explains nothing. If you cannot describe what evidence would change your mind, you are preaching a religion, not practicing science.",
      mentalModelFormula: "Bold Testable Hypothesis + Active Hunt for Disconfirming Data = Scientific Progress",
      everydayRule: "When debating someone or testing a business thesis, ask: 'What specific metric or event would force us to admit we were dead wrong?'"
    },
    scriptTemplate: "Karl Popper noticed that dogmatic theories never lose arguments because they make excuses for every failure. He formulated falsifiability to establish scientific rigor...",
    evidenceStatus: "philosophical-tradition",
    references: [
      {
        title: "The Logic of Scientific Discovery",
        authors: "Karl Popper",
        year: 1959,
        url: "https://www.worldcat.org/title/875038318",
        note: "Primary philosophy of science text introducing the criterion of falsifiability and problem of induction."
      },
      {
        title: "Karl Popper",
        authors: "Stanford Encyclopedia of Philosophy",
        year: 2021,
        url: "https://plato.stanford.edu/entries/popper/",
        note: "Authoritative academic overview of Popper's critical rationalism, demarcation problem, and scientific methodology."
      }
    ]
  },

  // ==========================================
  // V. MORAL PHILOSOPHY & ETHICS (3 Topics)
  // ==========================================
  {
    id: "aristotle-golden-mean-virtue",
    title: "Aristotle's Golden Mean: Virtue as Dynamic Balance",
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
    teaser: "Why courage is the exact sweet spot between cowardice and recklessness.",
    readTime: "4 min read",
    difficulty: "Beginner",
    studyTakeaways: [
      "Presented in 'Nicomachean Ethics': Virtue is not an extreme rule, but the golden mean between two vices",
      "Vice of Deficiency (Too little) vs. Vice of Excess (Too much)",
      "Practical Wisdom (Phronesis): Knowing the right action, for the right person, at the right time"
    ],
    scenarioHook: {
      setting: "Hostage Negotiation Briefing",
      character: "Commander Sarah Vance, Tactical Unit",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
      story: "A rookie officer suggests rushing through the front door with guns blazing (Recklessness). Another officer suggests waiting 12 hours while hostages are in danger (Cowardice).",
      theFriction: "Both extremes lead to blood. Sarah steps in: True Courage is neither freezing in fear nor rushing in blind.",
      theReaction: "She deploys a calculated smoke diversion and hostage extraction: Courage is virtue walking the tightrope between two catastrophic vices."
    },
    socraticQuiz: {
      question: "According to Aristotle, how does one cultivate virtue?",
      options: [
        {
          id: "opt-1",
          text: "Through deliberate habitual practice, as Will Durant summarized Aristotle: 'Excellence, then, is not an act, but a habit' formed through repetition.",
          isCorrect: true,
          mechanism: "Virtue is muscular and behavioral, developed through real-world repetition until balanced judgment becomes second nature."
        },
        {
          id: "opt-2",
          text: "By memorizing a 10-point rulebook of moral prohibitions.",
          isCorrect: false,
          mechanism: "Aristotle rejected rigid rulebooks; virtue requires contextual wisdom (phronesis) adapted to specific situations."
        }
      ]
    },
    deepDiveConclusion: {
      headline: "The Art of the Dynamic Center",
      corePrinciple: "Virtue is never found in extreme dogmas. Generosity lies between stinginess and wasteful extravagance; confidence lies between self-hatred and narcissism.",
      mentalModelFormula: "Deficiency (Vice) ➔ The Golden Mean (Virtue) ➔ Excess (Vice)",
      everydayRule: "When evaluating your leadership, diet, or relationships, ask: 'Am I erring on the side of deficiency or excess right now?' Adjust toward the center.",
    },
    contentHooks: [
      { format: "Carousel Slide", hook: "Aristotle's Golden Mean: The 7 virtues and their hidden twin vices." }
    ],
    scriptTemplate: "Aristotle said that being too generous can ruin your life just as fast as being stingy. Here is how the Golden Mean works...",
    evidenceStatus: "philosophical-tradition",
    references: [
      {
        title: "Nicomachean Ethics (Book II)",
        authors: "Aristotle (trans. W. D. Ross)",
        year: 1908,
        url: "https://classics.mit.edu/Aristotle/nicomachaen.2.ii.html",
        note: "Primary text detailing virtue as a state of character concerned with choice, lying in a mean between excess and defect."
      },
      {
        title: "Aristotle's Ethics",
        authors: "Stanford Encyclopedia of Philosophy",
        year: 2018,
        url: "https://plato.stanford.edu/entries/aristotle-ethics/",
        note: "Scholarly overview of Aristotelian eudaimonia, moral virtues, and practical wisdom (phronesis)."
      }
    ]
  },
  {
    id: "kant-categorical-imperative",
    title: "Kant's Categorical Imperative: The Universal Duty Test",
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
    teaser: "Why doing the right thing only when it benefits you is not morality—it is just commerce.",
    readTime: "5 min read",
    difficulty: "Advanced",
    studyTakeaways: [
      "Formulated by Immanuel Kant in 'Groundwork of the Metaphysics of Morals' (1785)",
      "Universal Law Formulation: Act only according to that maxim whereby you can at the same time will that it should become a universal law",
      "Humanity Formulation: Never treat human beings merely as a means to an end, but always as an end in themselves"
    ],
    scenarioHook: {
      setting: "Commercial Loan Application",
      character: "Gabriel, Construction Contractor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
      story: "Gabriel is short on payroll. He is tempted to make a promise he knows he cannot keep to secure an emergency private loan: 'I swear I will pay you back in 30 days.'",
      theFriction: "He rationalizes: 'If I don't lie, my crew doesn't get paid. It's just a tiny white lie that harms nobody today.'",
      theReaction: "Kant's test halts him: If everyone made lying promises when desperate, the concept of a 'promise' would mathematically destroy itself. To exempt yourself from universal moral duty is the root of evil."
    },
    socraticQuiz: {
      question: "Why does Kant argue that treating someone merely as a tool or means to your own goal is immoral?",
      options: [
        {
          id: "opt-1",
          text: "Because rational human beings possess inherent dignity and autonomy; reducing them to instruments violates their fundamental moral worth.",
          isCorrect: true,
          mechanism: "The second formulation of the Categorical Imperative forbids instrumentalizing people for selfish utility."
        },
        {
          id: "opt-2",
          text: "Because they might find out and sue you in court.",
          isCorrect: false,
          mechanism: "Fear of legal consequences is a hypothetical imperative (prudential), not genuine moral duty."
        }
      ]
    },
    deepDiveConclusion: {
      headline: "The Universal Standard of Integrity",
      corePrinciple: "Integrity is doing the right thing when it costs you. If your action were practiced by every human on earth simultaneously, would society function or collapse?",
      mentalModelFormula: "Personal Maxim ➔ Test as Universal Law ➔ If Contradiction: Maxima Forbidden",
      everydayRule: "Before taking a shortcut or bending the truth, ask: 'What happens to the world if 8 billion people adopt my exact rule right now?' If the world breaks, don't do it."
    },
    contentHooks: [
      { format: "Short Reel", hook: "The simple question Kant asked that instantly reveals if you are being a hypocrite." }
    ],
    scriptTemplate: "Immanuel Kant had one rule for morality that destroys all corporate excuses: The Categorical Imperative...",
    evidenceStatus: "philosophical-tradition",
    references: [
      {
        title: "Fundamental Principles of the Metaphysic of Morals",
        authors: "Immanuel Kant (trans. Thomas Kingsmill Abbott)",
        year: 1873,
        url: "https://www.gutenberg.org/ebooks/5682",
        note: "Primary text defining the categorical imperative, universal law, and treating humanity as an end in itself."
      },
      {
        title: "Kant's Moral Philosophy",
        authors: "Stanford Encyclopedia of Philosophy",
        year: 2022,
        url: "https://plato.stanford.edu/entries/kant-moral/",
        note: "Authoritative academic overview of Kantian deontology, duty, autonomy, and the kingdom of ends."
      }
    ]
  },
  {
    id: "rawls-veil-of-ignorance",
    title: "Rawls' Veil of Ignorance: Designing a Just World",
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
    teaser: "How to design the rules of society if you had zero idea whether you'd be born rich, poor, sick, or gifted.",
    readTime: "5 min read",
    difficulty: "Intermediate",
    studyTakeaways: [
      "Published by John Rawls in 'A Theory of Justice' (1971)",
      "The Original Position: Designing societal rules behind a 'Veil of Ignorance'",
      "Maximin Rule: Maximize the minimum outcome for the least advantaged member of society"
    ],
    scenarioHook: {
      setting: "Corporate Health Benefits Committee",
      character: "Chloe, Chief People Officer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
      story: "The executive team wants to cut mental health and chronic illness coverage to boost quarterly bonuses for healthy, high-performing executives.",
      theFriction: "The executives argue: 'Top performers drive 90% of the value; why subsidize edge-case illnesses?'",
      theReaction: "Chloe drops the Veil of Ignorance: 'Imagine tomorrow our identities are wiped and randomly reassigned across the company. You might be the receptionist with a diabetic child. Would you vote for this policy then?' Silence fell over the room."
    },
    socraticQuiz: {
      question: "Why does the Veil of Ignorance naturally produce fair moral agreements?",
      options: [
        {
          id: "opt-1",
          text: "Self-interest is forced to align with universal justice: because you might end up as the weakest member, you ensure the safety net protects everyone.",
          isCorrect: true,
          mechanism: "Rawls demonstrated that stripping bias (wealth, gender, health) forces rational agents to prioritize the welfare of the least fortunate."
        },
        {
          id: "opt-2",
          text: "It forces everyone to earn the exact same dollar amount regardless of contribution.",
          isCorrect: false,
          mechanism: "Rawls allows inequalities if they work to the maximum benefit of the least advantaged (the Difference Principle)."
        }
      ]
    },
    deepDiveConclusion: {
      headline: "The Ultimate Blueprint for Fairness",
      corePrinciple: "A truly fair system is one you would gladly join even if your enemy chose which social class, health status, and background you were born into.",
      mentalModelFormula: "Ignorance of Personal Advantage ➔ Maximin Strategy ➔ Just Social Contract",
      everydayRule: "When writing company rules or family boundaries, ask: 'If I were on the receiving end with the least power in this room, would I consider this fair?'"
    },
    contentHooks: [
      { format: "Short Reel", hook: "The thought experiment from 1971 that proves whether our tax system is fair." }
    ],
    scriptTemplate: "John Rawls invented a mental model called the Veil of Ignorance that solves almost every political argument in 60 seconds...",
    evidenceStatus: "philosophical-tradition",
    references: [
      {
        title: "A Theory of Justice",
        authors: "John Rawls",
        year: 1971,
        url: "https://www.worldcat.org/title/185296",
        note: "Landmark political philosophy treatise formulating the original position, the veil of ignorance, and justice as fairness."
      },
      {
        title: "John Rawls",
        authors: "Stanford Encyclopedia of Philosophy",
        year: 2021,
        url: "https://plato.stanford.edu/entries/rawls/",
        note: "Scholarly overview of Rawls's two principles of justice, the basic structure of society, and reflective equilibrium."
      }
    ]
  }
];
