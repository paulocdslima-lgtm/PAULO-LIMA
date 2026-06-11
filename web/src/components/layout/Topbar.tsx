import { Bell, Menu, Moon, Plus, Search, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { Avatar } from '../Avatar';

interface TopbarProps {
  onOpenSidebar: () => void;
}

export function Topbar({ onOpenSidebar }: TopbarProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-slate-200 bg-white/80 px-4 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 sm:px-6">
      <button
        className="btn-ghost p-2 lg:hidden"
        onClick={onOpenSidebar}
        aria-label="Abrir menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="relative hidden max-w-md flex-1 sm:block">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          className="input pl-9"
          placeholder="Buscar contatos, oportunidades, conversas…"
          aria-label="Busca global"
        />
        <kbd className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded border border-slate-200 bg-slate-50 px-1.5 text-[10px] font-medium text-slate-400 dark:border-slate-700 dark:bg-slate-800 md:block">
          ⌘K
        </kbd>
      </div>

      <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
        <button className="btn-primary hidden sm:inline-flex">
          <Plus className="h-4 w-4" />
          Novo
        </button>

        <button
          className="btn-ghost p-2"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>

        <button className="btn-ghost relative p-2" aria-label="Notificações">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-rose-500" />
        </button>

        <div className="ml-1 flex items-center gap-2">
          <Avatar name="Paulo Lima" size="sm" />
          <div className="hidden leading-tight md:block">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Paulo Lima</p>
            <p className="text-xs text-slate-400">Gerente de Vendas</p>
          </div>
        </div>
      </div>
    </header>
  );
}
