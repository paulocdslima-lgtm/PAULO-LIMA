import { Link } from 'react-router-dom';
import { ecosystemSystems } from '../data/ecosystem';

const widgets = [
  {
    title: 'Hoje',
    value: '24',
    description: 'tarefas e alertas operacionais',
  },
  {
    title: 'Clientes',
    value: '360',
    description: 'visão integrada no CRM',
  },
  {
    title: 'Sistemas',
    value: '6',
    description: 'apps conectados',
  },
];

const dockApps = ['crm', 'erp', 'estoque', 'supply-chain'];

function systemPath(slug: string) {
  return slug === 'crm' ? '/crm' : `/${slug}`;
}

function appInitials(shortTitle: string) {
  return shortTitle.slice(0, 3).toUpperCase();
}

export function EcosystemHomePage() {
  const dockSystems = ecosystemSystems.filter((system) => dockApps.includes(system.slug));

  return (
    <div id="top" className="min-h-full overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(99,102,241,0.35),transparent_28rem),radial-gradient(circle_at_82%_18%,rgba(6,182,212,0.26),transparent_30rem),radial-gradient(circle_at_50%_90%,rgba(34,197,94,0.14),transparent_30rem),linear-gradient(135deg,#050816_0%,#111827_50%,#020617_100%)]" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex min-h-20 w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-[1.35rem] bg-gradient-to-br from-brand-500 to-cyan-400 text-sm font-black shadow-lg shadow-cyan-500/20">
              NX
            </span>
            <span>
              <span className="block text-base font-black tracking-tight">Nexus Ecosystem</span>
              <span className="block text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
                Tela inicial de apps
              </span>
            </span>
          </Link>

          <nav className="flex gap-2 overflow-x-auto pb-1 text-sm font-bold text-slate-300 lg:pb-0">
            <a className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white" href="#iphone">
              iPhone
            </a>
            <a className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white" href="#sistemas">
              Apps
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
        <section className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
          <div>
            <p className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-100 shadow-xl shadow-slate-950/20">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_8px_rgba(52,211,153,0.12)]" />
              Interface tipo iPhone
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.075em] text-white sm:text-6xl lg:text-7xl">
              Todos os sistemas como aplicativos em uma tela inicial.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              O portal agora funciona como um celular corporativo: toque no app de CRM, ERP,
              Estoque, Supply Chain, PCP ou PDP para abrir cada módulo do ecossistema integrado.
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

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              {widgets.map((widget) => (
                <article
                  key={widget.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.08] p-5 shadow-xl shadow-slate-950/25 backdrop-blur"
                >
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                    {widget.title}
                  </span>
                  <strong className="mt-3 block text-4xl font-black tracking-tight">{widget.value}</strong>
                  <span className="mt-2 block text-sm leading-5 text-slate-300">{widget.description}</span>
                </article>
              ))}
            </div>
          </div>

          <section id="iphone" className="relative mx-auto w-full max-w-[430px]" aria-label="Tela inicial estilo iPhone">
            <div className="absolute -inset-6 rounded-[4rem] bg-cyan-400/20 blur-3xl" />
            <div className="relative rounded-[3.2rem] border border-white/20 bg-slate-900 p-3 shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
              <div className="rounded-[2.7rem] border border-white/10 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.24),transparent_16rem),linear-gradient(145deg,#172554_0%,#581c87_42%,#0f172a_100%)] p-5">
                <div className="mx-auto mb-4 h-7 w-32 rounded-full bg-slate-950/85 shadow-inner" />

                <div className="flex items-center justify-between text-sm font-black">
                  <span>09:41</span>
                  <span className="flex items-center gap-1 text-xs">
                    <span className="h-2.5 w-4 rounded-sm border border-white/80" />
                    5G
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <article className="rounded-[1.7rem] bg-white/18 p-4 shadow-lg shadow-slate-950/20 backdrop-blur">
                    <span className="text-xs font-bold text-white/75">Resumo CRM</span>
                    <strong className="mt-2 block text-3xl font-black">R$ 1.2M</strong>
                    <span className="mt-1 block text-xs leading-5 text-white/75">pipeline previsto</span>
                  </article>
                  <article className="rounded-[1.7rem] bg-white/18 p-4 shadow-lg shadow-slate-950/20 backdrop-blur">
                    <span className="text-xs font-bold text-white/75">Operação</span>
                    <strong className="mt-2 block text-3xl font-black">98%</strong>
                    <span className="mt-1 block text-xs leading-5 text-white/75">SLA dos módulos</span>
                  </article>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-5">
                  {ecosystemSystems.map((system) => (
                    <Link
                      key={system.slug}
                      to={systemPath(system.slug)}
                      className="group flex flex-col items-center text-center focus:outline-none"
                      aria-label={`Abrir ${system.title}`}
                    >
                      <span
                        className={`relative flex h-20 w-20 items-center justify-center rounded-[1.65rem] bg-gradient-to-br ${system.accentClass} text-lg font-black shadow-xl shadow-slate-950/30 ring-1 ring-white/20 transition group-hover:-translate-y-1 group-hover:scale-105`}
                      >
                        {appInitials(system.shortTitle)}
                        {system.slug === 'crm' ? (
                          <span className="absolute -right-1.5 -top-1.5 flex h-6 min-w-6 items-center justify-center rounded-full bg-rose-500 px-1 text-xs font-black text-white ring-2 ring-white">
                            3
                          </span>
                        ) : null}
                      </span>
                      <span className="mt-2 max-w-[5rem] text-xs font-bold leading-4 text-white drop-shadow">
                        {system.title}
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="mt-8 rounded-[2rem] bg-white/20 p-3 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
                  <div className="grid grid-cols-4 gap-3">
                    {dockSystems.map((system) => (
                      <Link
                        key={system.slug}
                        to={systemPath(system.slug)}
                        className={`flex h-16 items-center justify-center rounded-[1.35rem] bg-gradient-to-br ${system.accentClass} text-sm font-black shadow-lg ring-1 ring-white/20 transition hover:-translate-y-1`}
                        aria-label={`Abrir ${system.title}`}
                      >
                        {appInitials(system.shortTitle)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section id="sistemas" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-9 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">Apps do ecossistema</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black leading-none tracking-[-0.055em] sm:text-5xl">
                Acesse cada módulo como se fosse um aplicativo no celular.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-300">
              A navegação fica simples para equipes comerciais, administrativas e industriais. O CRM
              continua sendo o centro da operação.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {ecosystemSystems.map((system) => (
              <Link
                key={system.slug}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-slate-950/25 transition hover:-translate-y-1 hover:border-cyan-300/40"
                to={systemPath(system.slug)}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-20 w-20 items-center justify-center rounded-[1.65rem] bg-gradient-to-br ${system.accentClass} text-lg font-black shadow-xl shadow-slate-950/30 transition group-hover:scale-105`}
                  >
                    {appInitials(system.shortTitle)}
                  </span>
                  <span>
                    <span className="rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-emerald-200">
                      {system.status}
                    </span>
                    <strong className="mt-3 block text-2xl font-black tracking-tight">{system.title}</strong>
                  </span>
                </div>
                <p className="mt-5 text-sm leading-6 text-slate-300">{system.summary}</p>
                <ul className="mt-5 grid gap-2 text-sm text-slate-200">
                  {system.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3 font-black transition group-hover:border-cyan-300/40 group-hover:bg-cyan-300/10">
                  Abrir aplicativo
                  <span aria-hidden="true">-&gt;</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-xl shadow-slate-950/25">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">Fluxo integrado</p>
            <div className="mt-5 grid gap-5 lg:grid-cols-4">
              {['CRM registra', 'ERP valida', 'Estoque entrega', 'PCP/PDP evoluem'].map((step, index) => (
                <article key={step} className="rounded-[1.5rem] bg-white/[0.06] p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-slate-950">
                    {index + 1}
                  </span>
                  <strong className="mt-4 block text-lg font-black">{step}</strong>
                  <span className="mt-2 block text-sm leading-6 text-slate-300">
                    Processo conectado ao CRM para manter cliente, operação e gestão na mesma tela.
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <span>Nexus Ecosystem - interface de aplicativos para sistemas integrados.</span>
          <a className="font-bold text-slate-200 hover:text-white" href="#top">
            Voltar ao topo
          </a>
        </div>
      </footer>
    </div>
  );
}
