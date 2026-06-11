import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';
import { navItems } from './navItems';
import { classNames } from '../../lib/format';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

function Brand() {
  return (
    <div className="flex items-center gap-2.5 px-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-card">
        <svg viewBox="0 0 64 64" className="h-5 w-5" fill="none" aria-hidden>
          <path
            d="M18 44V20l14 16 14-16v24"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <p className="text-base font-bold leading-tight text-slate-900 dark:text-white">Nexus CRM</p>
        <p className="text-[11px] font-medium leading-tight text-slate-400">Corporate Suite</p>
      </div>
    </div>
  );
}

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="mt-6 flex-1 space-y-1 px-2">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === '/'}
          onClick={onNavigate}
          className={({ isActive }) =>
            classNames('nav-link', isActive && 'nav-link-active')
          }
        >
          <item.icon className="h-5 w-5 shrink-0" />
          <span className="flex-1">{item.label}</span>
          {item.badge ? (
            <span className="badge bg-brand-600 text-white">{item.badge}</span>
          ) : null}
        </NavLink>
      ))}
    </nav>
  );
}

function PlanCard() {
  return (
    <div className="m-3 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-4 text-white">
      <p className="text-sm font-semibold">Plano Enterprise</p>
      <p className="mt-1 text-xs text-brand-100">
        Integrações ilimitadas, automação e suporte prioritário.
      </p>
      <button className="mt-3 w-full rounded-lg bg-white/15 py-1.5 text-xs font-semibold backdrop-blur transition hover:bg-white/25">
        Gerenciar plano
      </button>
    </div>
  );
}

export function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {/* Desktop */}
      <aside className="hidden w-64 shrink-0 flex-col border-r border-slate-200 bg-white pt-5 dark:border-slate-800 dark:bg-slate-900 lg:flex">
        <Brand />
        <NavList />
        <PlanCard />
      </aside>

      {/* Mobile drawer */}
      <div
        className={classNames(
          'fixed inset-0 z-40 lg:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        )}
        aria-hidden={!open}
      >
        <div
          className={classNames(
            'absolute inset-0 bg-slate-900/50 transition-opacity',
            open ? 'opacity-100' : 'opacity-0',
          )}
          onClick={onClose}
        />
        <aside
          className={classNames(
            'absolute left-0 top-0 flex h-full w-72 flex-col bg-white pt-5 shadow-xl transition-transform dark:bg-slate-900',
            open ? 'translate-x-0' : '-translate-x-full',
          )}
        >
          <div className="flex items-center justify-between pr-3">
            <Brand />
            <button className="btn-ghost p-2" onClick={onClose} aria-label="Fechar menu">
              <X className="h-5 w-5" />
            </button>
          </div>
          <NavList onNavigate={onClose} />
          <PlanCard />
        </aside>
      </div>
    </>
  );
}
