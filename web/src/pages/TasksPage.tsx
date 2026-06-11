import { useMemo, useState } from 'react';
import {
  CalendarClock,
  CheckSquare,
  Mail,
  Phone,
  Plus,
  Users,
  Video,
  type LucideIcon,
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { tasks as initialTasks } from '../data/mock';
import { classNames, formatDate, formatTime } from '../lib/format';
import type { Task } from '../types';

const TYPE_ICON: Record<Task['type'], LucideIcon> = {
  ligacao: Phone,
  email: Mail,
  reuniao: Video,
  'follow-up': Users,
  tarefa: CheckSquare,
};

const PRIORITY_STYLE: Record<Task['priority'], string> = {
  alta: 'bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300',
  media: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
  baixa: 'bg-slate-100 text-slate-600 dark:bg-slate-700/40 dark:text-slate-300',
};

export function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [tab, setTab] = useState<'pendentes' | 'concluidas'>('pendentes');

  const visible = useMemo(
    () => tasks.filter((t) => (tab === 'pendentes' ? !t.done : t.done)),
    [tasks, tab],
  );

  function toggle(id: string) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  const pendingCount = tasks.filter((t) => !t.done).length;
  const doneCount = tasks.length - pendingCount;

  return (
    <>
      <PageHeader
        title="Tarefas e Lembretes"
        subtitle="Organize follow-ups, ligações e reuniões com lembretes automáticos"
        actions={
          <button className="btn-primary">
            <Plus className="h-4 w-4" /> Nova tarefa
          </button>
        }
      />

      <div className="mb-4 flex w-fit rounded-xl border border-slate-200 bg-white p-1 dark:border-slate-800 dark:bg-slate-900">
        {(['pendentes', 'concluidas'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={classNames(
              'rounded-lg px-4 py-1.5 text-sm font-medium capitalize transition',
              tab === t
                ? 'bg-brand-600 text-white'
                : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white',
            )}
          >
            {t} ({t === 'pendentes' ? pendingCount : doneCount})
          </button>
        ))}
      </div>

      <div className="card divide-y divide-slate-100 dark:divide-slate-800">
        {visible.map((task) => {
          const Icon = TYPE_ICON[task.type];
          const overdue = !task.done && new Date(task.due).getTime() < Date.now();
          return (
            <div key={task.id} className="flex items-center gap-4 p-4">
              <button
                onClick={() => toggle(task.id)}
                className={classNames(
                  'flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition',
                  task.done
                    ? 'border-brand-600 bg-brand-600 text-white'
                    : 'border-slate-300 hover:border-brand-500 dark:border-slate-600',
                )}
                aria-label={task.done ? 'Marcar como pendente' : 'Concluir tarefa'}
              >
                {task.done && <CheckSquare className="h-3.5 w-3.5" />}
              </button>

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                <Icon className="h-4.5 w-4.5" />
              </div>

              <div className="min-w-0 flex-1">
                <p
                  className={classNames(
                    'truncate text-sm font-medium',
                    task.done
                      ? 'text-slate-400 line-through'
                      : 'text-slate-800 dark:text-slate-100',
                  )}
                >
                  {task.title}
                </p>
                <div className="mt-0.5 flex items-center gap-2 text-xs text-slate-400">
                  <CalendarClock className="h-3.5 w-3.5" />
                  <span className={overdue ? 'font-semibold text-rose-500' : ''}>
                    {formatDate(task.due)} · {formatTime(task.due)}
                    {overdue && ' · atrasada'}
                  </span>
                  {task.relatedTo && <span>· {task.relatedTo}</span>}
                </div>
              </div>

              <span className={classNames('badge capitalize', PRIORITY_STYLE[task.priority])}>
                {task.priority}
              </span>
            </div>
          );
        })}
        {visible.length === 0 && (
          <div className="p-10 text-center text-sm text-slate-400">
            {tab === 'pendentes' ? 'Tudo em dia! Nenhuma tarefa pendente.' : 'Nenhuma tarefa concluída ainda.'}
          </div>
        )}
      </div>
    </>
  );
}
