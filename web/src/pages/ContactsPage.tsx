import { useMemo, useState } from 'react';
import { Download, Filter, Mail, Phone, Plus, Search } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Avatar } from '../components/Avatar';
import { StatusBadge } from '../components/StatusBadge';
import { contacts as allContacts } from '../data/mock';
import { formatCompactCurrency, formatDate } from '../lib/format';
import type { Contact } from '../types';

const FILTERS: { id: Contact['status'] | 'todos'; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'lead', label: 'Leads' },
  { id: 'qualificado', label: 'Qualificados' },
  { id: 'cliente', label: 'Clientes' },
  { id: 'inativo', label: 'Inativos' },
];

export function ContactsPage() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Contact['status'] | 'todos'>('todos');
  const [selected, setSelected] = useState<Contact | null>(null);

  const filtered = useMemo(() => {
    return allContacts.filter((c) => {
      const matchesFilter = filter === 'todos' || c.status === filter;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.company.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [query, filter]);

  return (
    <>
      <PageHeader
        title="Contatos"
        subtitle={`${allContacts.length} contatos · visão 360º de pessoas e contas`}
        actions={
          <>
            <button className="btn-outline">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Exportar</span>
            </button>
            <button className="btn-primary">
              <Plus className="h-4 w-4" />
              Novo contato
            </button>
          </>
        }
      />

      <div className="card overflow-hidden">
        <div className="flex flex-col gap-3 border-b border-slate-200 p-4 dark:border-slate-800 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              className="input pl-9"
              placeholder="Buscar por nome, empresa ou e-mail…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-1 overflow-x-auto">
            <Filter className="mr-1 hidden h-4 w-4 text-slate-400 sm:block" />
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={
                  filter === f.id
                    ? 'whitespace-nowrap rounded-lg bg-brand-600 px-3 py-1.5 text-sm font-medium text-white'
                    : 'whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                }
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-xs uppercase tracking-wide text-slate-400 dark:border-slate-800">
                <th className="px-4 py-3 font-medium">Contato</th>
                <th className="px-4 py-3 font-medium">Empresa</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Valor</th>
                <th className="px-4 py-3 font-medium">Última interação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filtered.map((c) => (
                <tr
                  key={c.id}
                  className="cursor-pointer transition hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  onClick={() => setSelected(c)}
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <Avatar name={c.name} color={c.avatarColor} size="sm" />
                      <div className="min-w-0">
                        <p className="font-medium text-slate-800 dark:text-slate-100">{c.name}</p>
                        <p className="truncate text-xs text-slate-400">{c.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                    <p>{c.company}</p>
                    <p className="text-xs text-slate-400">{c.role}</p>
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={c.status} />
                  </td>
                  <td className="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">
                    {c.value ? formatCompactCurrency(c.value) : '—'}
                  </td>
                  <td className="px-4 py-3 text-slate-500 dark:text-slate-400">{formatDate(c.lastInteraction)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="p-10 text-center text-sm text-slate-400">
              Nenhum contato encontrado para os filtros atuais.
            </div>
          )}
        </div>
      </div>

      {selected && <ContactDrawer contact={selected} onClose={() => setSelected(null)} />}
    </>
  );
}

function ContactDrawer({ contact, onClose }: { contact: Contact; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-slate-900/40" onClick={onClose} />
      <div className="relative flex h-full w-full max-w-md flex-col overflow-y-auto bg-white p-6 shadow-2xl dark:bg-slate-900">
        <div className="flex items-start gap-4">
          <Avatar name={contact.name} color={contact.avatarColor} size="lg" />
          <div className="flex-1">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">{contact.name}</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {contact.role} · {contact.company}
            </p>
            <div className="mt-2">
              <StatusBadge status={contact.status} />
            </div>
          </div>
          <button className="btn-ghost p-2" onClick={onClose} aria-label="Fechar">
            ✕
          </button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <a href={`mailto:${contact.email}`} className="btn-outline justify-start">
            <Mail className="h-4 w-4" /> E-mail
          </a>
          <a href={`tel:${contact.phone}`} className="btn-outline justify-start">
            <Phone className="h-4 w-4" /> Ligar
          </a>
        </div>

        <dl className="mt-6 space-y-3 text-sm">
          <Field label="E-mail" value={contact.email} />
          <Field label="Telefone" value={contact.phone} />
          <Field label="Empresa" value={contact.company} />
          <Field label="Valor potencial / LTV" value={contact.value ? formatCompactCurrency(contact.value) : '—'} />
        </dl>

        <div className="mt-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Tags</p>
          <div className="flex flex-wrap gap-2">
            {contact.tags.map((tag) => (
              <span key={tag} className="badge bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
      <dt className="text-slate-400">{label}</dt>
      <dd className="font-medium text-slate-700 dark:text-slate-200">{value}</dd>
    </div>
  );
}
