import { useMemo, useState } from 'react';
import { GripVertical, Plus } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Avatar } from '../components/Avatar';
import { deals as initialDeals, STAGES } from '../data/mock';
import { classNames, formatCompactCurrency, formatDate } from '../lib/format';
import type { Deal, DealStageId } from '../types';

export function PipelinePage() {
  const [deals, setDeals] = useState<Deal[]>(initialDeals);
  const [dragId, setDragId] = useState<string | null>(null);
  const [overStage, setOverStage] = useState<DealStageId | null>(null);

  const totals = useMemo(() => {
    const map: Record<string, { count: number; value: number }> = {};
    for (const stage of STAGES) map[stage.id] = { count: 0, value: 0 };
    for (const deal of deals) {
      map[deal.stage].count += 1;
      map[deal.stage].value += deal.value;
    }
    return map;
  }, [deals]);

  function handleDrop(stage: DealStageId) {
    if (dragId) {
      setDeals((prev) =>
        prev.map((d) => (d.id === dragId ? { ...d, stage } : d)),
      );
    }
    setDragId(null);
    setOverStage(null);
  }

  return (
    <>
      <PageHeader
        title="Pipeline de Vendas"
        subtitle="Arraste as oportunidades entre os estágios — atualização instantânea"
        actions={
          <button className="btn-primary">
            <Plus className="h-4 w-4" /> Nova oportunidade
          </button>
        }
      />

      <div className="flex gap-4 overflow-x-auto pb-4">
        {STAGES.map((stage) => {
          const stageDeals = deals.filter((d) => d.stage === stage.id);
          return (
            <div
              key={stage.id}
              className={classNames(
                'flex w-72 shrink-0 flex-col rounded-2xl border bg-slate-100/60 p-2 transition dark:bg-slate-900/40',
                overStage === stage.id
                  ? 'border-brand-400 bg-brand-50/60 dark:border-brand-500/60'
                  : 'border-transparent',
              )}
              onDragOver={(e) => {
                e.preventDefault();
                setOverStage(stage.id);
              }}
              onDragLeave={() => setOverStage((s) => (s === stage.id ? null : s))}
              onDrop={() => handleDrop(stage.id)}
            >
              <div className="flex items-center justify-between px-2 py-2">
                <div className="flex items-center gap-2">
                  <span className={classNames('h-2.5 w-2.5 rounded-full', stage.color)} />
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{stage.label}</span>
                  <span className="rounded-full bg-slate-200 px-1.5 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                    {totals[stage.id].count}
                  </span>
                </div>
              </div>
              <p className="px-2 pb-2 text-xs font-medium text-slate-400">
                {formatCompactCurrency(totals[stage.id].value)}
              </p>

              <div className="flex flex-1 flex-col gap-2 overflow-y-auto px-1">
                {stageDeals.map((deal) => (
                  <article
                    key={deal.id}
                    draggable
                    onDragStart={() => setDragId(deal.id)}
                    onDragEnd={() => {
                      setDragId(null);
                      setOverStage(null);
                    }}
                    className={classNames(
                      'group cursor-grab rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition active:cursor-grabbing dark:border-slate-700 dark:bg-slate-800',
                      dragId === deal.id && 'opacity-50',
                    )}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{deal.title}</p>
                      <GripVertical className="h-4 w-4 shrink-0 text-slate-300 group-hover:text-slate-400" />
                    </div>
                    <p className="mt-0.5 text-xs text-slate-400">{deal.company}</p>
                    <p className="mt-2 text-sm font-bold text-slate-900 dark:text-white">
                      {formatCompactCurrency(deal.value)}
                    </p>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
                      <div className="h-full rounded-full bg-brand-500" style={{ width: `${deal.probability}%` }} />
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <Avatar name={deal.owner === 'Você' ? 'Paulo Lima' : deal.owner} size="sm" />
                      <span className="text-xs text-slate-400">{formatDate(deal.expectedClose)}</span>
                    </div>
                  </article>
                ))}
                {stageDeals.length === 0 && (
                  <div className="rounded-xl border border-dashed border-slate-300 p-4 text-center text-xs text-slate-400 dark:border-slate-700">
                    Solte uma oportunidade aqui
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
