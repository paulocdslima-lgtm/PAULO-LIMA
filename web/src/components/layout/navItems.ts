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
  { to: '/', label: 'Portal', icon: LayoutDashboard },
  { to: '/crm', label: 'Dashboard CRM', icon: LayoutDashboard },
  { to: '/crm/contatos', label: 'Contatos', icon: Users },
  { to: '/crm/pipeline', label: 'Pipeline', icon: KanbanSquare },
  { to: '/crm/tarefas', label: 'Tarefas', icon: CheckSquare },
  { to: '/crm/chat', label: 'Chat', icon: MessageSquare, badge: 3 },
  { to: '/crm/relatorios', label: 'Relatórios', icon: BarChart3 },
  { to: '/crm/configuracoes', label: 'Configurações', icon: Settings },
];
