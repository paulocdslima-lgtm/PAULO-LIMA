import { Link, Navigate, useParams } from 'react-router-dom';
import { ecosystemSystems, getEcosystemSystem } from '../data/ecosystem';

const flowItems = [
  'Recebe dados do CRM central',
  'Atualiza indicadores do ecossistema',
  'Sincroniza prioridades com operação',
  'Retorna status para relacionamento com cliente',
];

function crmPath(slug: string) {
  return slug === 'crm' ? '/crm' : `/${slug}`;
}

export function EcosystemModulePage() {
  const { moduleSlug } = useParams();
  const system = getEcosystemSystem(moduleSlug ?? '');

  if (!system || system.slug === 'crm') {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-full bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_14%,rgba(79,70,229,0.28),transparent_28rem),radial-gradient(circle_at_84%_18%,rgba(6,182,212,0.2),transparent_26rem),linear-gradient(135deg,#07111f_0%,#101827_54%,#050816_100%)]" />

      <header className="border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex min-h-20 w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-cyan-500 text-sm font-black">
              NX
            </span>
            <span>
              <span className="block text-base font-black tracking-tight">Nexus Ecosystem</span>
              <span className="block text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
                Portal integrado
              </span>
            </span>
          </Link>

          <nav className="flex gap-2 text-sm font-bold text-slate-300">
            <Link className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white" to="/">
              Portal
            </Link>
            <Link className="rounded-full bg-white px-4 py-2 text-slate-950 transition hover:bg-cyan-100" to="/crm">
              Abrir CRM
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl shadow-slate-950/40">
            <span
              className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${system.accentClass} text-sm font-black`}
            >
              {system.shortTitle}
            </span>
            <p className="mt-8 text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
              {system.role}
            </p>
            <h1 className="mt-3 text-5xl font-black leading-none tracking-[-0.065em]">
              {system.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">{system.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary px-5 py-3" to="/crm">
                Ir para o CRM central
              </Link>
              <Link
                className="btn border border-white/15 bg-white/10 px-5 py-3 text-white hover:bg-white/15"
                to="/"
              >
                Voltar ao portal
              </Link>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              {system.metrics.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-slate-950/20"
                >
                  <span className="block text-4xl font-black tracking-tight">{metric.value}</span>
                  <span className="mt-2 block text-sm leading-6 text-slate-400">{metric.label}</span>
                </article>
              ))}
            </div>

            <article className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 shadow-xl shadow-slate-950/25">
              <h2 className="text-2xl font-black tracking-tight">Funcionalidades do módulo</h2>
              <ul className="mt-5 grid gap-3">
                {system.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-3 rounded-2xl bg-white/[0.05] p-4">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                    <span className="font-bold text-slate-100">{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <article className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 shadow-xl shadow-slate-950/25">
            <h2 className="text-2xl font-black tracking-tight">Como este módulo se conecta</h2>
            <ol className="mt-6 grid gap-4">
              {flowItems.map((item, index) => (
                <li key={item} className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-slate-950">
                    {index + 1}
                  </span>
                  <span className="rounded-2xl bg-white/[0.05] p-4 font-bold text-slate-100">{item}</span>
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 shadow-xl shadow-slate-950/25">
            <h2 className="text-2xl font-black tracking-tight">Outros sistemas</h2>
            <div className="mt-6 grid gap-3">
              {ecosystemSystems
                .filter((item) => item.slug !== system.slug)
                .map((item) => (
                  <Link
                    key={item.slug}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] p-4 font-black transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                    to={crmPath(item.slug)}
                  >
                    {item.title}
                    <span aria-hidden="true">-&gt;</span>
                  </Link>
                ))}
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
