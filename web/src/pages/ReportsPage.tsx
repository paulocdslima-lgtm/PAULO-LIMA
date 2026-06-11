import {
  Bar,
  BarChart,
  CartesianGrid,
  Funnel,
  FunnelChart,
  LabelList,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Download } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { StatCard } from '../components/StatCard';
import { activitiesByDay, deals, revenueByMonth, STAGES } from '../data/mock';
import { Clock, Percent, Timer, Trophy } from 'lucide-react';

const funnelData = STAGES.filter((s) => s.id !== 'perdido').map((stage, i) => {
  const count = deals.filter((d) => d.stage === stage.id).length + (5 - i) * 2;
  return { name: stage.label, value: count * 8, fill: ['#4f46e5', '#6366f1', '#7c3aed', '#a855f7', '#10b981'][i] };
});

const cycleData = revenueByMonth.map((m) => ({ month: m.month, dias: 40 - m.receita / 20 }));

export function ReportsPage() {
  return (
    <>
      <PageHeader
        title="Relatórios e Analytics"
        subtitle="Indicadores de vendas e atendimento com drill-down e exportação"
        actions={
          <>
            <select className="input w-auto" defaultValue="30">
              <option value="7">Últimos 7 dias</option>
              <option value="30">Últimos 30 dias</option>
              <option value="90">Últimos 90 dias</option>
            </select>
            <button className="btn-outline">
              <Download className="h-4 w-4" /> Exportar
            </button>
          </>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Win rate" value="62%" delta={4} icon={Trophy} accent="text-emerald-600" />
        <StatCard label="Ciclo médio de vendas" value="28 dias" delta={-6} icon={Timer} accent="text-brand-600" />
        <StatCard label="Tempo médio de resposta" value="1m 48s" delta={-12} icon={Clock} accent="text-sky-600" />
        <StatCard label="Cobertura de meta" value="118%" delta={9} icon={Percent} accent="text-violet-600" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <section className="card p-5">
          <h2 className="mb-4 font-semibold text-slate-900 dark:text-white">Funil de conversão</h2>
          <ResponsiveContainer width="100%" height={280}>
            <FunnelChart>
              <Tooltip contentStyle={{ borderRadius: 12, fontSize: 12 }} />
              <Funnel dataKey="value" data={funnelData} isAnimationActive>
                <LabelList position="right" fill="currentColor" stroke="none" dataKey="name" className="text-xs" />
              </Funnel>
            </FunnelChart>
          </ResponsiveContainer>
        </section>

        <section className="card p-5">
          <h2 className="mb-4 font-semibold text-slate-900 dark:text-white">Evolução do ciclo de vendas</h2>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={cycleData} margin={{ left: -16, right: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="text-slate-200 dark:text-slate-800" vertical={false} />
              <XAxis dataKey="month" stroke="currentColor" className="text-xs text-slate-400" tickLine={false} axisLine={false} />
              <YAxis stroke="currentColor" className="text-xs text-slate-400" tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ borderRadius: 12, fontSize: 12 }} formatter={(v: number) => [`${Math.round(v)} dias`, 'Ciclo']} />
              <Line type="monotone" dataKey="dias" stroke="#4f46e5" strokeWidth={2.5} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </section>
      </div>

      <section className="card mt-6 p-5">
        <h2 className="mb-4 font-semibold text-slate-900 dark:text-white">Produtividade por dia</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={activitiesByDay} margin={{ left: -16, right: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="text-slate-200 dark:text-slate-800" vertical={false} />
            <XAxis dataKey="day" stroke="currentColor" className="text-xs text-slate-400" tickLine={false} axisLine={false} />
            <YAxis stroke="currentColor" className="text-xs text-slate-400" tickLine={false} axisLine={false} />
            <Tooltip contentStyle={{ borderRadius: 12, fontSize: 12 }} cursor={{ fill: 'rgba(148,163,184,0.1)' }} />
            <Bar dataKey="ligacoes" fill="#4f46e5" name="Ligações" radius={[4, 4, 0, 0]} />
            <Bar dataKey="emails" fill="#7c3aed" name="E-mails" radius={[4, 4, 0, 0]} />
            <Bar dataKey="reunioes" fill="#0ea5e9" name="Reuniões" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </section>
    </>
  );
}
