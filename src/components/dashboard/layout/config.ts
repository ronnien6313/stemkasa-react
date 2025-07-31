import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'AI Agent', title: 'Overview', href: paths.dashboard.AiAgent, icon: 'chart-pie' },
  { key: 'Claude', title: 'Claude', href: paths.dashboard.Claude, icon: 'users' },
  { key: 'C.A.P', title: 'C.A.P', href: paths.dashboard.CAP, icon: 'plugs-connected' },
  { key: 'Deepfake', title: 'Deepfake', href: paths.dashboard.Deepfake, icon: 'chart-pie' },
  { key: 'Image Generator', title: 'Image Generator', href: paths.dashboard.ImageGenerator, icon: 'users' },
  { key: 'List Agents', title: 'List Agents', href: paths.dashboard.ListAgents, icon: 'plugs-connected' },
  { key: 'Quiz Generator', title: 'Quiz Generator', href: paths.dashboard.QuizGenerator, icon: 'users' },
  { key: 'Quote Image Generator', title: 'Quote Image Generator', href: paths.dashboard.QuoteImageGenerator, icon: 'plugs-connected' },
  { key: 'Statistical Data Analyzer', title: 'Statistical Data Analyzer', href: paths.dashboard.StatisticalDataAnalyzer, icon: 'chart-pie' },
  { key: 'Story Telling App', title: 'Story Telling App', href: paths.dashboard.StoryTellingApp, icon: 'users' },
  { key: 'To-Do Assistant', title: 'To-Do Assistant', href: paths.dashboard.ToDoAssistant, icon: 'plugs-connected' },
  { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user' },
  { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];
