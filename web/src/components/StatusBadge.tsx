import type { Contact } from '../types';
import { classNames } from '../lib/format';

const styles: Record<Contact['status'], string> = {
  lead: 'bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300',
  qualificado: 'bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300',
  cliente: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
  inativo: 'bg-slate-100 text-slate-600 dark:bg-slate-700/40 dark:text-slate-300',
};

const labels: Record<Contact['status'], string> = {
  lead: 'Lead',
  qualificado: 'Qualificado',
  cliente: 'Cliente',
  inativo: 'Inativo',
};

export function StatusBadge({ status }: { status: Contact['status'] }) {
  return <span className={classNames('badge', styles[status])}>{labels[status]}</span>;
}
