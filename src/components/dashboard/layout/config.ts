import type { NavItemConfig } from '@/types/nav';

export const navItems = [
  { key: 'aiAgent', title: 'AI Agent', icon: 'robot' },
  { key: 'claude', title: 'Claude', icon: 'ChatCenteredDots' },
  { key: 'cap', title: 'C.A.P', icon: 'pencilruler' },
  { key: 'deepfake', title: 'Deepfake', icon: 'Smiley' },
  { key: 'imageGenerator', title: 'Image Generator', icon: 'palette' },
  { key: 'listAgents', title: 'List Agents', icon: 'listDashes' },
  { key: 'quizGenerator', title: 'Quiz Generator', icon: 'sealQuestion' },
  { key: 'quoteImageGenerator', title: 'Quote Image Generator', icon: 'quotes' },
  { key: 'statisticalDataAnalyzer', title: 'Statistical Data Analyzer', icon: 'chartBar' },
  { key: 'storyTellingApp', title: 'Story Telling App', icon: 'book' },
  { key: 'todoAssistant', title: 'To-Do Assistant', icon: 'listChecks' },
  { key: 'settings', title: 'Settings', icon: 'gear-six' },
] satisfies NavItemConfig[];
