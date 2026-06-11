# 01 — Visão, Objetivos e Escopo

## 1.1. Problema

Empresas de médio e grande porte sofrem com dados de clientes fragmentados entre planilhas,
caixas de e-mail, ERPs e ferramentas de marketing. Isso gera:

- **Perda de oportunidades** por falta de acompanhamento (follow-up) estruturado.
- **Visão incompleta do cliente**, prejudicando atendimento e upsell/cross-sell.
- **Retrabalho e tarefas manuais** que poderiam ser automatizadas.
- **Dificuldade de medir desempenho** comercial e de atendimento.
- **Riscos de compliance** (LGPD/GDPR) por dados dispersos e sem governança.

## 1.2. Visão

> Ser a **plataforma única de relacionamento com o cliente** da empresa, conectando vendas,
> atendimento e marketing em tempo real, com automação inteligente e segurança corporativa.

## 1.3. Objetivos (SMART) e KPIs

| Objetivo | Métrica-alvo (12 meses) |
|----------|--------------------------|
| Aumentar a taxa de conversão do funil | +20% na conversão lead→cliente |
| Reduzir tempo de resposta ao cliente | TMR (tempo médio de resposta) < 2 min no chat |
| Aumentar produtividade comercial | +30% de atividades registradas/vendedor |
| Adoção da plataforma | DAU/MAU ≥ 60% entre usuários internos |
| Confiabilidade | Disponibilidade ≥ 99,9% (uptime) |
| Conformidade | 100% das solicitações LGPD atendidas em < 15 dias |

## 1.4. Personas

| Persona | Necessidades principais |
|---------|--------------------------|
| **Vendedor (SDR/Closer)** | Pipeline claro, lembretes, registro rápido de atividades, mobile. |
| **Gerente de Vendas** | Forecast, dashboards de equipe, metas, gargalos do funil. |
| **Agente de Atendimento** | Chat omnichannel, histórico do cliente, SLAs. |
| **Analista de Marketing** | Segmentação, campanhas, lead scoring, integração com automation. |
| **Administrador / TI** | Permissões, integrações, auditoria, configuração e segurança. |
| **Executivo (C-level)** | Visão consolidada de receita, retenção e satisfação. |

## 1.5. Jornadas-chave

1. **Captura de lead** (formulário/redes sociais/e-mail) → enriquecimento → atribuição.
2. **Qualificação** → criação de oportunidade no pipeline → atividades e lembretes.
3. **Negociação** → propostas, histórico, chat e e-mail centralizados.
4. **Fechamento** → ganho/perda → sincronização com ERP (pedido/faturamento).
5. **Pós-venda** → atendimento via chat, NPS, automação de retenção e expansão.

## 1.6. Escopo

### Dentro do escopo (MVP → v1)
- Gestão de contatos/contas, pipeline configurável, tarefas/lembretes, histórico unificado.
- Chat interno e omnichannel (e-mail + um canal social no MVP).
- Automação por regras e gatilhos, dashboards e relatórios.
- Integrações: e-mail (IMAP/SMTP + APIs), ERP (via API/conector), 1 marketing automation.
- Segurança: SSO, RBAC, criptografia, auditoria, LGPD.

### Fora do escopo (inicialmente)
- Telefonia/CTI completa (apenas integração futura).
- Faturamento/cobrança nativos (responsabilidade do ERP).
- BI avançado sob medida (entregamos dashboards + exportação para ferramentas externas).

## 1.7. Premissas e restrições

- Multi-tenant com isolamento lógico por organização.
- Residência de dados configurável (região) para atender requisitos regulatórios.
- Web responsiva como canal primário; apps mobile como evolução (PWA no MVP).

## 1.8. Riscos e mitigação

| Risco | Impacto | Mitigação |
|-------|---------|-----------|
| Baixa adoção pelos vendedores | Alto | UX simples, import de dados, treinamento e automação que reduz digitação. |
| Integrações instáveis | Médio | Hub de integração com retries, *dead-letter queue* e monitoramento. |
| Vazamento de dados | Crítico | Criptografia, RBAC/ABAC, auditoria, testes de segurança contínuos. |
| Escopo inflado | Médio | Roadmap por fases, MVP enxuto e priorização orientada a valor. |
