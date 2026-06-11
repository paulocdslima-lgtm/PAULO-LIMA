import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  ArrowRight,
  CircleDollarSign,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { StatCard } from '../components/StatCard';
import { Avatar } from '../components/Avatar';
import {
  activitiesByDay,
  contacts,
  deals,
  leadsBySource,
  revenueByMonth,
  tasks,
} from '../data/mock';
import { formatCompactCurrency, formatCurrency, formatTime } from '../lib/format';

const PIE_COLORS = ['#4f46e5', '#7c3aed', '#0ea5e9', '#f59e0b', '#10b981'];

export function DashboardPage() {
  const stats = useMemo(() => {
    const open = deals.filter((d) => d.stage !== 'ganho' && d.stage !== 'perdido');
    const won = deals.filter((d) => d.stage === 'ganho');
    const pipelineValue = open.reduce((sum, d) => sum + d.value, 0);
    const wonValue = won.reduce((sum, d) => sum + d.value, 0);
    const closed = deals.filter((d) => d.stage === 'ganho' || d.stage === 'perdido');
    const winRate = closed.length ? Math.round((won.length / closed.length) * 100) : 0;
    return { pipelineValue, wonValue, winRate, openCount: open.length };
  }, []);

  const pendingTasks = tasks.filter((t) => !t.done);

  return (
    <>
      <PageHeader
        title="Dashboard"
        subtitle="Visão geral do seu desempenho comercial em tempo real"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Receita fechada (mês)"
          value={formatCurrency(stats.wonValue)}
          delta={12}
          icon={CircleDollarSign}
          accent="text-emerald-600"
        />
        <StatCard
          label="Pipeline em aberto"
          value={formatCurrency(stats.pipelineValue)}
          delta={8}
          icon={TrendingUp}
          accent="text-brand-600"
        />
        <StatCard
          label="Taxa de conversão"
          value={`${stats.winRate}%`}
          delta={-3}
          icon={Target}
          accent="text-violet-600"
        />
        <StatCard
          label="Contatos ativos"
          value={String(contacts.filter((c) => c.status !== 'inativo').length)}
          delta={5}
          icon={Users}
          accent="text-sky-600"
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <section className="card p-5 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-slate-900 dark:text-white">Receita vs. Meta</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Últimos 6 meses (em milhares)</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={revenueByMonth} margin={{ left: -16, right: 8, top: 8 }}>
              <defs>
                <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="text-slate-200 dark:text-slate-800" />
              <XAxis dataKey="month" stroke="currentColor" className="text-xs text-slate-400" tickLine={false} axisLine={false} />
              <YAxis stroke="currentColor" className="text-xs text-slate-400" tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  borderRadius: 12,
                  border: '1px solid rgb(226 232 240)',
                  fontSize: 12,
                }}
                formatter={(value: number) => [`R$ ${value}k`, '']}
              />
              <Area type="monotone" dataKey="meta" stroke="#94a3b8" strokeDasharray="4 4" fill="transparent" name="Meta" />
              <Area type="monotone" dataKey="receita" stroke="#4f46e5" strokeWidth={2.5} fill="url(#rev)" name="Receita" />
            </AreaChart>
          </ResponsiveContainer>
        </section>

        <section className="card p-5">
          <h2 className="mb-4 font-semibold text-slate-900 dark:text-white">Origem dos leads</h2>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={leadsBySource}
                dataKey="value"
                nameKey="name"
                innerRadius={55}
                outerRadius={85}
                paddingAngle={3}
              >
                {leadsBySource.map((_, index) => (
                  <Cell key={index} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => [`${value}%`, '']} contentStyle={{ borderRadius: 12, fontSize: 12 }} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
            </PieChart>
          </ResponsiveContainer>
        </section>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <section className="card p-5 lg:col-span-2">
          <h2 className="mb-4 font-semibold text-slate-900 dark:text-white">Atividades da semana</h2>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={activitiesByDay} margin={{ left: -16, right: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="text-slate-200 dark:text-slate-800" vertical={false} />
              <XAxis dataKey="day" stroke="currentColor" className="text-xs text-slate-400" tickLine={false} axisLine={false} />
              <YAxis stroke="currentColor" className="text-xs text-slate-400" tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ borderRadius: 12, fontSize: 12 }} cursor={{ fill: 'rgba(148,163,184,0.1)' }} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="ligacoes" stackId="a" fill="#4f46e5" name="Ligações" radius={[0, 0, 0, 0]} />
              <Bar dataKey="emails" stackId="a" fill="#7c3aed" name="E-mails" />
              <Bar dataKey="reunioes" stackId="a" fill="#0ea5e9" name="Reuniões" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </section>

        <section className="card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-semibold text-slate-900 dark:text-white">Tarefas de hoje</h2>
            <Link to="/tarefas" className="text-sm font-medium text-brand-600 hover:underline">
              Ver todas
            </Link>
          </div>
          <ul className="space-y-3">
            {pendingTasks.slice(0, 4).map((task) => (
              <li key={task.id} className="flex items-start gap-3">
                <span
                  className={
                    task.priority === 'alta'
                      ? 'mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-rose-500'
                      : task.priority === 'media'
                        ? 'mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500'
                        : 'mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-slate-400'
                  }
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-slate-800 dark:text-slate-100">{task.title}</p>
                  <p className="text-xs text-slate-400">
                    {task.relatedTo} · {formatTime(task.due)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="card mt-6 p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-semibold text-slate-900 dark:text-white">Oportunidades em destaque</h2>
          <Link to="/pipeline" className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:underline">
            Abrir pipeline <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="-mx-5 overflow-x-auto px-5">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-xs uppercase tracking-wide text-slate-400 dark:border-slate-800">
                <th className="pb-3 font-medium">Oportunidade</th>
                <th className="pb-3 font-medium">Empresa</th>
                <th className="pb-3 font-medium">Valor</th>
                <th className="pb-3 font-medium">Prob.</th>
                <th className="pb-3 font-medium">Responsável</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {deals
                .filter((d) => d.stage !== 'perdido')
                .sort((a, b) => b.value - a.value)
                .slice(0, 5)
                .map((deal) => (
                  <tr key={deal.id} className="text-slate-700 dark:text-slate-200">
                    <td className="py-3 font-medium">{deal.title}</td>
                    <td className="py-3 text-slate-500 dark:text-slate-400">{deal.company}</td>
                    <td className="py-3 font-semibold">{formatCompactCurrency(deal.value)}</td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-16 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                          <div className="h-full rounded-full bg-brand-500" style={{ width: `${deal.probability}%` }} />
                        </div>
                        <span className="text-xs text-slate-400">{deal.probability}%</span>
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <Avatar name={deal.owner === 'Você' ? 'Paulo Lima' : deal.owner} size="sm" />
                        <span className="text-slate-500 dark:text-slate-400">{deal.owner}</span>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
