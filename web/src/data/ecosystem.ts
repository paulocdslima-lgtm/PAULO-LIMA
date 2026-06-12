export interface EcosystemSystem {
  slug: string;
  shortTitle: string;
  title: string;
  status: 'Disponível' | 'Integrado';
  role: string;
  summary: string;
  highlights: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  accentClass: string;
}

export const ecosystemSystems: EcosystemSystem[] = [
  {
    slug: 'crm',
    shortTitle: 'CRM',
    title: 'CRM central',
    status: 'Disponível',
    role: 'Centro do ecossistema',
    summary:
      'Gestão de clientes, contatos, pipeline de vendas, tarefas, chat, histórico e relatórios comerciais.',
    highlights: ['Clientes e oportunidades', 'Pipeline de vendas', 'Atendimento integrado'],
    metrics: [
      { label: 'Visao do cliente', value: '360' },
      { label: 'Prioridade', value: 'Core' },
    ],
    accentClass: 'from-brand-600 to-cyan-500',
  },
  {
    slug: 'erp',
    shortTitle: 'ERP',
    title: 'ERP corporativo',
    status: 'Integrado',
    role: 'Gestão administrativa',
    summary:
      'Pedidos, faturamento, compras, financeiro e indicadores executivos conectados ao CRM.',
    highlights: ['Pedidos e contratos', 'Compras e financeiro', 'Relatorios executivos'],
    metrics: [
      { label: 'Processos', value: '12' },
      { label: 'Área', value: 'Gestão' },
    ],
    accentClass: 'from-blue-600 to-indigo-500',
  },
  {
    slug: 'estoque',
    shortTitle: 'EST',
    title: 'Estoque',
    status: 'Integrado',
    role: 'Disponibilidade operacional',
    summary:
      'Controle de entradas, saídas, reservas, saldos e níveis mínimos por produto ou família.',
    highlights: ['Saldos em tempo real', 'Reservas por pedido', 'Alertas de reposição'],
    metrics: [
      { label: 'Movimentos', value: '24h' },
      { label: 'Controle', value: 'SKU' },
    ],
    accentClass: 'from-emerald-600 to-teal-500',
  },
  {
    slug: 'supply-chain',
    shortTitle: 'SCM',
    title: 'Supply Chain',
    status: 'Integrado',
    role: 'Cadeia de suprimentos',
    summary:
      'Fornecedores, demanda, compras, prazos, logística e riscos operacionais em uma visão única.',
    highlights: ['Fornecedores homologados', 'Previsão de demanda', 'Entregas e SLA'],
    metrics: [
      { label: 'Rede', value: 'Full' },
      { label: 'Risco', value: 'SLA' },
    ],
    accentClass: 'from-cyan-600 to-sky-500',
  },
  {
    slug: 'pcp',
    shortTitle: 'PCP',
    title: 'PCP',
    status: 'Integrado',
    role: 'Planejamento da produção',
    summary:
      'Planejamento e controle da produção conectado a vendas, estoque e capacidade produtiva.',
    highlights: ['Ordens de produção', 'Capacidade e prioridades', 'Controle de prazos'],
    metrics: [
      { label: 'Plano', value: 'MRP' },
      { label: 'Execucao', value: 'OP' },
    ],
    accentClass: 'from-amber-500 to-orange-500',
  },
  {
    slug: 'pdp',
    shortTitle: 'PDP',
    title: 'PDP',
    status: 'Integrado',
    role: 'Desenvolvimento de produtos',
    summary:
      'Gestão de ideias, requisitos, etapas, validações e lançamentos de novos produtos.',
    highlights: ['Ideias e requisitos', 'Gates de aprovação', 'Lançamento e feedback'],
    metrics: [
      { label: 'Portfólio', value: 'NPI' },
      { label: 'Ciclo', value: 'Gate' },
    ],
    accentClass: 'from-fuchsia-600 to-purple-500',
  },
];

export function getEcosystemSystem(slug: string) {
  return ecosystemSystems.find((system) => system.slug === slug);
}
