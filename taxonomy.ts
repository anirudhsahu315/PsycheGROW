// Type Definitions for PsycheGrow ("Psyche & Sophia")
// Blends empirical psychological sciences with classical philosophical schools

export type DomainType = 'psychology' | 'philosophy' | 'synthesis';

export type PsychologyBranchId = 
  | 'cognitive'
  | 'behavioral'
  | 'social'
  | 'psychoanalytic'
  | 'clinical'
  | 'consumer'
  | 'neuropsychology';

export type PhilosophySchoolId = 
  | 'stoicism'
  | 'existentialism'
  | 'epistemology'
  | 'ethics';

export type CategoryId = PsychologyBranchId | PhilosophySchoolId;

export interface CategoryPastelTheme {
  bg: string;
  text: string;
  border: string;
  badgeBg: string;
  hoverBg: string;
  dot: string;
}

export interface TopicCategory {
  id: CategoryId;
  name: string;
  shortName: string;
  domain: DomainType;
  tradition: string; // e.g. "Empirical Science" or "Philosophical School"
  tagline: string;
  description: string;
  icon: string;
  accent: string;
  pastel: CategoryPastelTheme;
  topicCount: number;
}

export interface ScientificLens {
  school: string;
  thinkers: string[];
  coreThesis: string;
  mechanism: string;
  keyExperimentOrEvidence: string;
  limitations?: string;
}

export interface PhilosophicalLens {
  school: string;
  thinkers: string[];
  coreThesis: string;
  framework: string;
  aphorismOrText: string;
  practicalWisdom: string;
}

export interface DialecticSynthesis {
  synthesisTitle: string;
  integrationInsight: string;
  actionableParadox: string;
}

export interface DialecticPerspective {
  synthesisQuestion: string;
  scientificLens: ScientificLens;
  philosophicalLens: PhilosophicalLens;
  dialecticSynthesis: DialecticSynthesis;
}

export interface ScenarioHook {
  setting: string;
  character: string;
  avatar: string;
  story: string;
  theFriction: string;
  theReaction: string;
}

export interface SocraticQuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
  mechanism: string;
}

export interface SocraticQuiz {
  question: string;
  options: SocraticQuizOption[];
}

export interface DeepDiveConclusion {
  headline: string;
  corePrinciple: string;
  mentalModelFormula: string;
  everydayRule: string;
}

export interface ContentHook {
  format: string;
  hook: string;
}

// 4-Step "Top 1%" High-Retention Micro-Learning Framework
export interface VisualBlueprintStep {
  step: number;
  phase: string;
  label: string;
  action: string;
  subtext: string;
}

export interface TopOnePercentFramework {
  // Step 1: The Real-World Hook (The "Why Should I Care?")
  realWorldHook: {
    hookHeadline: string;
    manipulationScenario: string;
    whyYouShouldCare: string;
    relatableTrigger: string;
    punchySummary: string;
  };
  // Step 2: The 30-Second Core Mechanism (No Jargon)
  coreMechanism: {
    headline: string;
    underTheHoodBullets: string[];
    plainEnglishTakeaway: string;
  };
  // Step 3: The Visual Blueprint / Mental Sandbox
  visualBlueprint: {
    title: string;
    steps: VisualBlueprintStep[];
    mentalEquation: string;
    sandboxTakeaway: string;
  };
  // Step 4: The Real-World Armor (Actionable Counter-Move)
  realWorldArmor: {
    counterMoveTitle: string;
    spotTheTrap: string;
    actionableCounterMove: string[];
    psychologicalShieldMnemonic: string;
  };
}

export interface TopicReference {
  title: string;
  authors: string;
  year: number;
  url: string;
  note?: string;
}

export type EvidenceStatus = 'well-supported' | 'mixed-evidence' | 'contested' | 'philosophical-tradition';

export interface PsychologyTopic {
  id: string;
  title: string;
  branch: string;
  categoryKey: CategoryId;
  domain?: DomainType;
  branchColor: {
    bg: string;
    text: string;
    border: string;
    accent: string;
    badge: string;
  };
  icon: string;
  teaser: string;
  tagline?: string;
  readTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  studyTakeaways: string[];
  scenarioHook: ScenarioHook;
  socraticQuiz: SocraticQuiz;
  deepDiveConclusion: DeepDiveConclusion;
  topOnePercentFramework?: TopOnePercentFramework;
  contentHooks: ContentHook[];
  scriptTemplate?: string;
  dialectic?: DialecticPerspective;
  references?: TopicReference[];
  evidenceStatus?: EvidenceStatus;
}
