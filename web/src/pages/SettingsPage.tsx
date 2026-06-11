import { useState } from 'react';
import {
  Building2,
  Check,
  Mail,
  Megaphone,
  MessageCircle,
  Plug,
  ShieldCheck,
  Sun,
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { useTheme } from '../context/ThemeContext';
import { classNames } from '../lib/format';

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: typeof Mail;
  connected: boolean;
  accent: string;
}

const INITIAL_INTEGRATIONS: Integration[] = [
  { id: 'email', name: 'E-mail (Gmail / Outlook)', description: 'Sincronize e-mails e registre interações automaticamente.', icon: Mail, connected: true, accent: 'text-rose-500' },
  { id: 'erp', name: 'ERP (SAP / TOTVS)', description: 'Sincronize clientes, pedidos e faturamento.', icon: Building2, connected: true, accent: 'text-sky-500' },
  { id: 'mkt', name: 'Marketing Automation', description: 'Leads, campanhas e lead scoring (HubSpot, RD Station).', icon: Megaphone, connected: false, accent: 'text-amber-500' },
  { id: 'whatsapp', name: 'WhatsApp Business', description: 'Atendimento omnichannel no chat integrado.', icon: MessageCircle, connected: true, accent: 'text-emerald-500' },
];

const SECURITY = [
  'Single Sign-On (SSO) via OIDC/SAML',
  'Autenticação multifator (MFA) obrigatória para administradores',
  'Criptografia em trânsito (TLS 1.3) e em repouso (AES-256)',
  'Controle de acesso por papéis e atributos (RBAC/ABAC)',
  'Trilha de auditoria imutável e conformidade com a LGPD',
];

export function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  const [integrations, setIntegrations] = useState(INITIAL_INTEGRATIONS);

  function toggleIntegration(id: string) {
    setIntegrations((prev) =>
      prev.map((i) => (i.id === id ? { ...i, connected: !i.connected } : i)),
    );
  }

  return (
    <>
      <PageHeader
        title="Configurações"
        subtitle="Personalização, integrações e segurança do workspace"
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <section className="card p-5">
          <div className="mb-4 flex items-center gap-2">
            <Plug className="h-5 w-5 text-brand-600" />
            <h2 className="font-semibold text-slate-900 dark:text-white">Integrações</h2>
          </div>
          <div className="space-y-3">
            {integrations.map((i) => (
              <div
                key={i.id}
                className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 dark:border-slate-800"
              >
                <div className={classNames('rounded-lg bg-slate-100 p-2 dark:bg-slate-800', i.accent)}>
                  <i.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{i.name}</p>
                  <p className="text-xs text-slate-400">{i.description}</p>
                </div>
                <button
                  onClick={() => toggleIntegration(i.id)}
                  className={
                    i.connected
                      ? 'badge bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300'
                      : 'btn-outline px-3 py-1 text-xs'
                  }
                >
                  {i.connected ? (
                    <>
                      <Check className="h-3.5 w-3.5" /> Conectado
                    </>
                  ) : (
                    'Conectar'
                  )}
                </button>
              </div>
            ))}
          </div>
        </section>

        <div className="space-y-6">
          <section className="card p-5">
            <div className="mb-4 flex items-center gap-2">
              <Sun className="h-5 w-5 text-brand-600" />
              <h2 className="font-semibold text-slate-900 dark:text-white">Aparência</h2>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-slate-200 p-3 dark:border-slate-800">
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">Tema escuro</p>
                <p className="text-xs text-slate-400">Alterne entre tema claro e escuro</p>
              </div>
              <button
                onClick={toggleTheme}
                className={classNames(
                  'relative h-6 w-11 rounded-full transition',
                  theme === 'dark' ? 'bg-brand-600' : 'bg-slate-300',
                )}
                aria-label="Alternar tema"
              >
                <span
                  className={classNames(
                    'absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform',
                    theme === 'dark' ? 'translate-x-5' : 'translate-x-0.5',
                  )}
                />
              </button>
            </div>
          </section>

          <section className="card p-5">
            <div className="mb-4 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
              <h2 className="font-semibold text-slate-900 dark:text-white">Segurança</h2>
            </div>
            <ul className="space-y-2.5">
              {SECURITY.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
