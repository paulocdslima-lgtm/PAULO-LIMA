import type { LucideIcon } from 'lucide-react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { classNames } from '../lib/format';

interface StatCardProps {
  label: string;
  value: string;
  delta?: number;
  icon: LucideIcon;
  accent?: string;
}

export function StatCard({ label, value, delta, icon: Icon, accent = 'text-brand-600' }: StatCardProps) {
  const positive = (delta ?? 0) >= 0;
  return (
    <div className="card p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
          <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{value}</p>
        </div>
        <div className={classNames('rounded-xl bg-slate-100 p-2.5 dark:bg-slate-800', accent)}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
      {delta !== undefined && (
        <div className="mt-3 flex items-center gap-1 text-sm">
          <span
            className={classNames(
              'inline-flex items-center gap-0.5 font-semibold',
              positive ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400',
            )}
          >
            {positive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
            {Math.abs(delta)}%
          </span>
          <span className="text-slate-400">vs. mês anterior</span>
        </div>
      )}
    </div>
  );
}
