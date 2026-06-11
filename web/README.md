# Nexus CRM — Protótipo Web

Protótipo funcional de alta fidelidade do **Nexus CRM**, construído com a stack de frontend
recomendada na documentação do projeto (ver [`../docs`](../docs)).

## Stack

- **React 18 + TypeScript** · **Vite** · **Tailwind CSS** (tema claro/escuro)
- **React Router** · **Recharts** (gráficos) · **lucide-react** (ícones)
- Dados **simulados (mock)** em memória — sem necessidade de backend.

## Scripts

```bash
npm install      # instala dependências
npm run dev      # ambiente de desenvolvimento (http://localhost:5173)
npm run build    # type-check + build de produção
npm run preview  # pré-visualiza o build
npm run lint     # análise estática (ESLint)
```

## Módulos demonstrados

| Módulo | O que mostra |
|--------|--------------|
| **Dashboard** | KPIs, gráfico de receita vs. meta, origem de leads, atividades, tabela de oportunidades |
| **Contatos** | Lista com busca/filtros por status e painel de detalhe (drawer) |
| **Pipeline** | Kanban com **arrastar-e-soltar** entre estágios e totais por coluna |
| **Tarefas** | Lista com prioridade, prazos, atrasos, conclusão e abas pendentes/concluídas |
| **Chat** | Conversas omnichannel, envio de mensagens, indicador de digitação e resposta simulada |
| **Relatórios** | Funil de conversão, ciclo de vendas, produtividade e KPIs |
| **Configurações** | Integrações (conectar/desconectar), tema e checklist de segurança |

## Estrutura

```
src/
  components/        # UI reutilizável (Avatar, StatCard, layout, ...)
  context/           # ThemeContext (tema claro/escuro)
  data/              # dados simulados (mock)
  lib/               # utilitários (formatação)
  pages/             # uma página por rota
  types.ts           # tipos do domínio
```

> Responsivo (mobile-first), acessível (foco visível, navegação por teclado, ARIA) e com
> tema claro/escuro persistido em `localStorage`.
