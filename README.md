# Nexus CRM — CRM Profissional e Corporativo

Projeto completo (documentação de engenharia + protótipo funcional) para a construção de um
**CRM corporativo moderno, responsivo e altamente funcional**, com chat integrado em tempo real,
integrações com plataformas externas (e-mail, ERP, marketing automation, redes sociais),
automação de processos, dashboards interativos e segurança de alta prioridade.

Este repositório contém dois entregáveis:

1. **`docs/`** — O **projeto detalhado** de engenharia: visão, arquitetura, funcionalidades,
   UX/UI, integrações, segurança, fases do projeto, estratégia de testes, manutenção e stack
   tecnológico recomendado.
2. **`web/`** — Um **protótipo funcional** do front-end (React + TypeScript + Vite + Tailwind)
   que materializa o design e os módulos principais: Dashboard, Contatos, Pipeline de Vendas
   (Kanban), Tarefas/Lembretes, Histórico de Interações, Relatórios e Chat integrado.

---

## Índice da documentação

| # | Documento | Conteúdo |
|---|-----------|----------|
| 00 | [Visão geral do projeto](docs/PROJETO.md) | Sumário executivo e índice navegável |
| 01 | [Visão, objetivos e escopo](docs/01-visao-e-objetivos.md) | Problema, personas, objetivos, KPIs, escopo |
| 02 | [Arquitetura técnica](docs/02-arquitetura.md) | Topologia, microsserviços, dados, tempo real |
| 03 | [Funcionalidades](docs/03-funcionalidades.md) | Contatos, pipeline, tarefas, automação, etc. |
| 04 | [UX/UI e Design System](docs/04-ux-ui.md) | Princípios, design tokens, responsividade, A11y |
| 05 | [Integrações](docs/05-integracoes.md) | E-mail, ERP, marketing, redes sociais, webhooks |
| 06 | [Segurança e conformidade](docs/06-seguranca.md) | AuthN/Z, criptografia, LGPD/GDPR, auditoria |
| 07 | [Fases do projeto e roadmap](docs/07-fases-do-projeto.md) | Discovery, MVP, escala, governança |
| 08 | [Estratégia de testes e QA](docs/08-testes.md) | Pirâmide de testes, performance, segurança |
| 09 | [Operação e manutenção](docs/09-manutencao.md) | Observabilidade, SRE, SLAs, suporte |
| 10 | [Stack tecnológico](docs/10-stack-tecnologico.md) | Tecnologias recomendadas e justificativas |

---

## Protótipo funcional (web)

```bash
cd web
npm install
npm run dev      # ambiente de desenvolvimento (http://localhost:5173)
npm run build    # build de produção
npm run preview  # pré-visualiza o build
npm run lint     # análise estática
```

O protótipo usa dados simulados (mock) em memória e demonstra layout responsivo, tema
claro/escuro, navegação completa entre módulos e interações como arrastar cartões no pipeline,
filtrar contatos e enviar mensagens no chat.

> **Status:** o `web/` é um protótipo de alta fidelidade (frontend) que ilustra o produto-alvo
> descrito na documentação. O backend, integrações reais e infraestrutura estão especificados em
> `docs/` como guia de implementação para a evolução até produção.
