# 07 — Fases do Projeto e Roadmap

> As fases são descritas por **objetivos, entregáveis e critérios de saída** — sem estimativas de
> calendário. A progressão é orientada por valor e prontidão técnica (não por datas fixas).

## Fase 0 — Discovery & Fundamentos

**Objetivos:** alinhar visão, validar requisitos e preparar a base técnica.

**Entregáveis**
- Pesquisa com usuários, personas e *jobs to be done*.
- Backlog priorizado (RICE/MoSCoW) e definição do MVP.
- Protótipo de alta fidelidade (Figma) + Design System inicial.
- Decisões de arquitetura (ADRs), repositório, CI/CD e ambientes.

**Critérios de saída:** escopo do MVP aprovado, protótipo validado, esqueleto de infra no ar.

---

## Fase 1 — MVP (núcleo do CRM)

**Objetivos:** entregar valor essencial de vendas e atendimento.

**Entregáveis**
- Identidade/SSO, RBAC, multi-tenant.
- Contatos/contas, pipeline (Kanban) configurável, tarefas/lembretes.
- Histórico de interações básico e chat interno em tempo real.
- Dashboard inicial com KPIs essenciais.
- Integração de e-mail (envio/recebimento) e 1 marketing automation.
- Segurança: criptografia, auditoria, fluxos LGPD essenciais.

**Critérios de saída:** *win rate* e atividades mensuráveis; uptime ≥ 99,5%; testes core verdes.

---

## Fase 2 — Automação & Integrações

**Objetivos:** reduzir trabalho manual e conectar o ecossistema.

**Entregáveis**
- Construtor visual de workflows, lead scoring, roteamento/atribuição.
- Hub de integrações: ERP (1 sistema), calendário, mais um marketing automation.
- Chat omnichannel com 1 canal social (ex.: WhatsApp) e roteamento/SLA.
- Relatórios avançados, dashboards customizáveis e exportação.

**Critérios de saída:** ≥ 3 integrações ativas; workflows usados por ≥ 50% das equipes.

---

## Fase 3 — Escala & Inteligência

**Objetivos:** performance, BI e recursos assistidos por IA.

**Entregáveis**
- Migração de domínios críticos para microsserviços (chat, automação, analytics).
- Data Warehouse + BI self-service; previsões de vendas.
- IA: sugestões de próxima ação, resumos de conversa, *email drafting*, *lead scoring* preditivo.
- App mobile dedicado (além do PWA) e marketplace de integrações.

**Critérios de saída:** SLOs de performance atingidos; recursos de IA com adoção mensurável.

---

## Fase 4 — Governança & Conformidade contínua

**Objetivos:** maturidade operacional e certificações.

**Entregáveis**
- SOC 2 Type II / ISO 27001 (preparação e auditoria).
- Programa de *bug bounty*, pentests recorrentes.
- Otimização de custos (FinOps) e *capacity planning*.

---

## Organização do time (sugestão)

| Squad | Foco |
|-------|------|
| **Core CRM** | Contatos, pipeline, tarefas, histórico |
| **Realtime & Comms** | Chat, notificações, omnichannel |
| **Automação & Integrações** | Workflows, hub de integrações, API pública |
| **Analytics** | Dashboards, relatórios, BI, IA |
| **Plataforma/SRE** | Infra, segurança, observabilidade, CI/CD |
| **Design/UX** | Design System, pesquisa, usabilidade |

## Gestão e cerimônias

- Metodologia **ágil** (Scrum/Kanban), entregas incrementais e *feature flags*.
- **Definition of Ready/Done**, revisões de código obrigatórias, *trunk-based* com PRs curtos.
- Métricas DORA (lead time, frequência de deploy, MTTR, taxa de falha) para evoluir a entrega.
