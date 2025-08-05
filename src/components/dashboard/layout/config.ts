import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'AI Agent', title: '', href: paths.dashboard.AiAgent, icon: 'robot' },
  { key: 'Claude', title: '', href: paths.dashboard.Claude, icon: 'ChatCenteredDots' },
  { key: 'C.A.P', title: '', href: paths.dashboard.CAP, icon: 'pencilruler' },
  { key: 'Deepfake', title: '', href: paths.dashboard.Deepfake, icon: 'Smiley' },
  { key: 'Image Generator', title: '', href: paths.dashboard.ImageGenerator, icon: 'palette' },
  { key: 'List Agents', title: '', href: paths.dashboard.ListAgents, icon: 'listDashes' },
  { key: 'Quiz Generator', title: '', href: paths.dashboard.QuizGenerator, icon: 'sealQuestion' },
  { key: 'Quote Image Generator', title: '', href: paths.dashboard.QuoteImageGenerator, icon: 'quotes' },
  { key: 'Statistical Data Analyzer', title: '', href: paths.dashboard.StatisticalDataAnalyzer, icon: 'chartBar' },
  { key: 'Story Telling App', title: '', href: paths.dashboard.StoryTellingApp, icon: 'book' },
  { key: 'To-Do Assistant', title: '', href: paths.dashboard.ToDoAssistant, icon: 'listChecks' },
  { key: 'settings', title: '', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'account', title: '', href: paths.dashboard.account, icon: 'user' },
  { key: 'error', title: '', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];
