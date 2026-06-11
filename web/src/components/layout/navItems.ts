import {
  BarChart3,
  CheckSquare,
  KanbanSquare,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Users,
  type LucideIcon,
} from 'lucide-react';

export interface NavItem {
  to: string;
  label: string;
  icon: LucideIcon;
  badge?: number;
}

export const navItems: NavItem[] = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/contatos', label: 'Contatos', icon: Users },
  { to: '/pipeline', label: 'Pipeline', icon: KanbanSquare },
  { to: '/tarefas', label: 'Tarefas', icon: CheckSquare },
  { to: '/chat', label: 'Chat', icon: MessageSquare, badge: 3 },
  { to: '/relatorios', label: 'Relatórios', icon: BarChart3 },
  { to: '/configuracoes', label: 'Configurações', icon: Settings },
];
