import { Link } from 'react-router-dom';
import { ecosystemSystems } from '../data/ecosystem';

const integrationSteps = [
  {
    title: 'Venda nasce no CRM',
    description:
      'O time comercial registra a oportunidade, o histórico do cliente, próximos passos e previsão.',
    tag: 'CRM',
  },
  {
    title: 'ERP confirma a viabilidade',
    description:
      'Pedido, crédito, faturamento e compras entram no mesmo fluxo de decisão.',
    tag: 'ERP',
  },
  {
    title: 'Estoque e Supply Chain garantem disponibilidade',
    description:
      'Saldos, reservas, fornecedores e logística reduzem riscos de atraso.',
    tag: 'Operação',
  },
  {
    title: 'PCP e PDP conectam produção e produto',
    description:
      'Planejamento produtivo e evolução do portfólio retornam feedback para o CRM.',
    tag: 'Indústria',
  },
];

function systemPath(slug: string) {
  return slug === 'crm' ? '/crm' : `/${slug}`;
}

export function EcosystemHomePage() {
  const crm = ecosystemSystems[0];
  const satellites = ecosystemSystems.slice(1);

  return (
    <div id="top" className="min-h-full overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_14%_12%,rgba(79,70,229,0.35),transparent_30rem),radial-gradient(circle_at_86%_18%,rgba(6,182,212,0.24),transparent_28rem),linear-gradient(135deg,#07111f_0%,#101827_54%,#050816_100%)]" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex min-h-20 w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-cyan-500 text-sm font-black shadow-lg shadow-cyan-500/20">
              NX
            </span>
            <span>
              <span className="block text-base font-black tracking-tight">Nexus Ecosystem</span>
              <span className="block text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
                Portal integrado
              </span>
            </span>
          </Link>

          <nav className="flex gap-2 overflow-x-auto pb-1 text-sm font-bold text-slate-300 lg:pb-0">
            <a className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white" href="#sistemas">
              Sistemas
            </a>
            <a className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white" href="#integracao">
              Integração
            </a>
            <Link
              className="rounded-full bg-white px-4 py-2 text-slate-950 transition hover:bg-cyan-100"
              to="/crm"
            >
              Abrir CRM
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
          <div>
            <p className="inline-flex items-center gap-3 rounded-full border border-brand-400/30 bg-brand-500/15 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-brand-100">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_8px_rgba(52,211,153,0.12)]" />
              Ecossistema conectado
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.075em] text-white sm:text-6xl lg:text-7xl">
              Uma página inicial para gerenciar todos os sistemas.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              CRM, ERP, Estoque, Supply Chain, PCP e PDP reunidos em uma interface única. O CRM
              fica no centro para conectar clientes, vendas, operação, produção e gestão.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link className="btn-primary px-5 py-3 text-base" to="/crm">
                Acessar CRM central
              </Link>
              <a
                className="btn border border-white/15 bg-white/10 px-5 py-3 text-base text-white hover:bg-white/15"
                href="#sistemas"
              >
                Ver todos os apps
              </a>
            </div>
          </div>

          <div className="relative min-h-[620px] rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-slate-950/50 backdrop-blur">
            <div className="absolute inset-10 hidden rounded-full border border-dashed border-slate-500/30 lg:block" />
            <div className="absolute inset-28 hidden rounded-full border border-dashed border-slate-500/20 lg:block" />

            <Link
              to="/crm"
              className={`absolute left-1/2 top-1/2 z-10 flex h-56 w-56 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-gradient-to-br ${crm.accentClass} p-8 text-center shadow-[0_0_0_24px_rgba(6,182,212,0.06),0_30px_80px_rgba(6,182,212,0.34)] transition hover:-translate-y-[52%]`}
            >
              <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-lg font-black">
                {crm.shortTitle}
              </span>
              <strong className="text-3xl font-black tracking-tight">{crm.title}</strong>
              <span className="mt-2 text-sm font-medium text-white/80">{crm.role}</span>
            </Link>

            <div className="grid gap-3 lg:block">
              {satellites.map((system, index) => {
                const positions = [
                  'lg:absolute lg:left-10 lg:top-12',
                  'lg:absolute lg:right-10 lg:top-12',
                  'lg:absolute lg:right-4 lg:top-[270px]',
                  'lg:absolute lg:bottom-12 lg:right-14',
                  'lg:absolute lg:bottom-12 lg:left-14',
                ];

                return (
                  <Link
                    key={system.slug}
                    to={systemPath(system.slug)}
                    className={`group flex rounded-3xl border border-white/10 bg-slate-900/90 p-4 shadow-xl shadow-slate-950/30 transition hover:-translate-y-1 hover:border-cyan-300/50 ${positions[index]}`}
                  >
                    <span
                      className={`mr-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${system.accentClass} text-xs font-black`}
                    >
                      {system.shortTitle}
                    </span>
                    <span className="w-44">
                      <strong className="block text-sm font-black">{system.title}</strong>
                      <span className="mt-1 block text-xs leading-5 text-slate-400">{system.role}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-4 px-4 pb-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            ['6', 'sistemas conectados em um único portal operacional'],
            ['360', 'visão de cliente, pedidos, produção e entregas'],
            ['1', 'CRM como centro do relacionamento e das oportunidades'],
            ['24h', 'monitoramento contínuo de processos e prioridades'],
          ].map(([value, label]) => (
            <article key={label} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-slate-950/20">
              <span className="block text-4xl font-black tracking-tight">{value}</span>
              <span className="mt-2 block text-sm leading-6 text-slate-400">{label}</span>
            </article>
          ))}
        </section>

        <section id="sistemas" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-9 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">Acesso rápido</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black leading-none tracking-[-0.055em] sm:text-5xl">
                Escolha o app e continue o trabalho sem perder contexto.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-300">
              Cada sistema representa uma frente da operação. O portal organiza os acessos e mostra
              como as áreas se conectam ao CRM.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {ecosystemSystems.map((system) => (
              <article
                key={system.slug}
                className="flex min-h-[330px] flex-col rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-slate-950/25 transition hover:-translate-y-1 hover:border-cyan-300/40"
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${system.accentClass} text-sm font-black`}
                  >
                    {system.shortTitle}
                  </span>
                  <span className="rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-emerald-200">
                    {system.status}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-black tracking-tight">{system.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{system.summary}</p>
                <ul className="mt-5 grid gap-2 text-sm text-slate-200">
                  {system.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <Link
                  className="mt-auto flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3 font-black transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                  to={systemPath(system.slug)}
                >
                  Abrir módulo
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="integracao" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <article className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 shadow-xl shadow-slate-950/25">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">Fluxo integrado</p>
              <h2 className="mt-3 text-4xl font-black leading-none tracking-[-0.055em]">
                O CRM centraliza a jornada e aciona os demais sistemas.
              </h2>
              <p className="mt-5 leading-7 text-slate-300">
                Uma oportunidade comercial pode atravessar o ecossistema completo, da venda ao
                planejamento, estoque, produção e entrega.
              </p>
              <Link className="btn-primary mt-7 px-5 py-3" to="/crm">
                Entrar no CRM
              </Link>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 shadow-xl shadow-slate-950/25">
              <ol className="grid gap-5">
                {integrationSteps.map((step, index) => (
                  <li key={step.title} className="grid grid-cols-[auto_1fr_auto] items-start gap-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-slate-950">
                      {index + 1}
                    </span>
                    <span>
                      <strong className="block text-lg font-black">{step.title}</strong>
                      <span className="mt-1 block text-sm leading-6 text-slate-300">{step.description}</span>
                    </span>
                    <span className="rounded-full bg-brand-500/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-brand-100">
                      {step.tag}
                    </span>
                  </li>
                ))}
              </ol>
            </article>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <span>Nexus Ecosystem - CRM no centro da operação integrada.</span>
          <a className="font-bold text-slate-200 hover:text-white" href="#top">
            Voltar ao topo
          </a>
        </div>
      </footer>
    </div>
  );
}
