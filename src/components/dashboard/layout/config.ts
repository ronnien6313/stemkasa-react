import type { NavItemConfig } from '@/types/nav';

export const navItems = [
  { key: 'AIAgent', title: 'AI Agent', icon: 'robot' },
  { key: 'Claude', title: 'Claude', icon: 'ChatCenteredDots' },
  { key: 'ConversationalAppCreator', title: 'Conversational App Creator', icon: 'pencilruler' },
  { key: 'Deepfake', title: 'Deepfake', icon: 'Smiley' },
  { key: 'ImageGenerator', title: 'Image Generator', icon: 'palette' },
  { key: 'ListAgents', title: 'List Agents', icon: 'listDashes' },
  { key: 'QuizGenerator', title: 'Quiz Generator', icon: 'sealQuestion' },
  { key: 'QuoteImageGenerator', title: 'Quote Image Generator', icon: 'quotes' },
  { key: 'StatisticalDataAnalyzer', title: 'Statistical Data Analyzer', icon: 'chartBar' },
  { key: 'StoryTellingApp', title: 'Story Telling App', icon: 'book' },
  { key: 'TodoAssistant', title: 'To-Do Assistant', icon: 'listChecks' },
  { key: 'Settings', title: 'Settings', icon: 'gear-six' },
] satisfies NavItemConfig[];
