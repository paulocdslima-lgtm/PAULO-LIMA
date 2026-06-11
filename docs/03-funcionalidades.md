# 03 — Funcionalidades Detalhadas

> Convenção: cada módulo descreve **objetivo**, **funcionalidades**, **regras de negócio** e
> **critérios de aceite** (formato Gherkin onde aplicável).

---

## 1. Gestão de Contatos e Contas

**Objetivo:** manter uma visão 360º de pessoas (contatos) e organizações (contas).

**Funcionalidades**
- Cadastro completo: dados pessoais, empresa, cargo, canais de contato, tags e campos
  customizados (texto, número, data, lista, booleano).
- **Deduplicação** automática (e *merge* assistido) por e-mail/telefone/domínio.
- **Enriquecimento** de dados via integrações (ex.: dados de empresa por CNPJ/domínio).
- **Segmentação** dinâmica por filtros salvos (ex.: "clientes SP com ticket > R$10k").
- Importação/exportação (CSV/XLSX) com mapeamento de colunas e validação.
- Relacionamentos: contato↔conta, hierarquia de contas (matriz/filiais).
- Linha do tempo do contato com todas as interações (ver módulo 4).

**Regras de negócio**
- E-mail é único por tenant (quando informado) — conflitos disparam *merge*.
- Exclusão é *soft delete*; dados sensíveis seguem política de retenção (LGPD).

**Critérios de aceite**
```gherkin
Funcionalidade: Deduplicação de contatos
  Cenário: Importar contato com e-mail já existente
    Dado um contato existente com e-mail "ana@empresa.com"
    Quando eu importar um registro com o mesmo e-mail
    Então o sistema deve sinalizar duplicidade
    E oferecer mesclar os dados preservando o histórico
```

---

## 2. Pipeline de Vendas

**Objetivo:** gerenciar oportunidades em um funil visual e prever receita.

**Funcionalidades**
- **Kanban** com estágios configuráveis por pipeline (múltiplos pipelines por equipe/produto).
- Arrastar-e-soltar de oportunidades entre estágios, com **atualização em tempo real**.
- Campos por oportunidade: valor, moeda, probabilidade, previsão de fechamento, responsável.
- **Forecast** (previsão ponderada por probabilidade) e metas por período.
- Motivos de ganho/perda, *aging* (tempo no estágio) e alertas de estagnação.
- Visões: Kanban, lista, tabela e linha do tempo.

**Regras de negócio**
- Mudança de estágio publica evento (`deal.stage_changed`) que pode disparar automações.
- Probabilidade pode ser herdada do estágio ou ajustada manualmente.

**Critérios de aceite**
```gherkin
Funcionalidade: Mover oportunidade no pipeline
  Cenário: Avançar deal para "Proposta"
    Dado uma oportunidade no estágio "Qualificação"
    Quando eu arrasto a oportunidade para "Proposta"
    Então o estágio é atualizado para "Proposta"
    E todos os usuários veem a mudança em tempo real
    E uma tarefa de follow-up é criada automaticamente (se configurado)
```

---

## 3. Tarefas, Lembretes e Agenda

**Objetivo:** organizar o trabalho operacional e garantir follow-ups.

**Funcionalidades**
- Tarefas com título, descrição, prioridade, prazo (`vence_em`), responsável e vínculo
  (contato/conta/oportunidade).
- **Lembretes** e notificações (in-app, e-mail, push) configuráveis.
- Recorrência (diária/semanal/mensal) e subtarefas/checklists.
- Visões: lista, calendário e "Meu dia" (agenda priorizada).
- **SLA** por tipo de tarefa/atendimento com escalonamento automático.

**Critérios de aceite**
```gherkin
Funcionalidade: Lembrete de tarefa
  Cenário: Notificar antes do vencimento
    Dada uma tarefa com vencimento em 1 hora e lembrete configurado
    Quando faltar o tempo definido para o vencimento
    Então o responsável recebe notificação in-app e e-mail
```

---

## 4. Histórico de Interações

**Objetivo:** consolidar todas as interações (omnichannel) em uma linha do tempo única.

**Funcionalidades**
- Registro automático de e-mails, mensagens de chat, ligações (via integração), reuniões,
  mudanças de oportunidade e notas manuais.
- Filtro por tipo, canal, usuário e período.
- Anexos e *previews* de documentos (armazenados em object storage).
- Citações e menções (`@usuário`) com notificação.

---

## 5. Chat Integrado em Tempo Real

**Objetivo:** comunicação interna entre a equipe e omnichannel com clientes.

**Funcionalidades**
- **Chat interno** (1:1 e canais por equipe/oportunidade).
- **Chat omnichannel** com clientes (widget no site, e-mail, WhatsApp/Instagram via integração).
- Recursos: indicador de digitação, presença (online/ausente), *read receipts*, anexos,
  emojis, busca em mensagens, threads.
- Roteamento e fila de atendimento, com transferência entre agentes e SLAs.
- Histórico de conversa vinculado ao contato (alimenta o módulo 4).
- **Respostas rápidas** (snippets) e sugestões assistidas por IA (evolução).

**Regras de negócio**
- Toda mensagem é idempotente por `message_id`; entrega *at-least-once*.
- Conversas com clientes geram automaticamente uma entrada no histórico do contato.

**Critérios de aceite**
```gherkin
Funcionalidade: Mensagem em tempo real
  Cenário: Enviar mensagem em conversa ativa
    Dado dois usuários na mesma conversa
    Quando o usuário A envia uma mensagem
    Então o usuário B recebe a mensagem em tempo real
    E vê o indicador de "digitando..." enquanto A escreve
```

---

## 6. Automação de Processos

**Objetivo:** reduzir trabalho manual com workflows orientados a eventos.

**Funcionalidades**
- **Construtor visual** de workflows (gatilho → condições → ações).
- Gatilhos: criação/edição de registro, mudança de estágio, prazo de tarefa, evento de chat.
- Ações: criar tarefa, enviar e-mail/notificação, atualizar campo, mover deal, chamar webhook,
  iniciar campanha no marketing automation.
- **Lead scoring** baseado em regras e comportamento.
- **Roteamento/atribuição** automática (round-robin, por território, por carga).
- Agendamentos (cron) e *sequences* (cadências de e-mail).

**Critérios de aceite**
```gherkin
Funcionalidade: Workflow por mudança de estágio
  Cenário: Criar follow-up ao mover para "Proposta"
    Dado um workflow com gatilho "deal.stage_changed = Proposta"
    Quando uma oportunidade entra em "Proposta"
    Então uma tarefa de follow-up é criada em 2 dias
    E o gerente da conta é notificado
```

---

## 7. Relatórios e Dashboards

**Objetivo:** transformar dados em decisão.

**Funcionalidades**
- **Dashboards interativos** com widgets arrastáveis: KPIs, gráficos de linha/barra/funil/pizza.
- Métricas: receita por período, conversão por estágio, *win rate*, ciclo de vendas, atividades
  por vendedor, TMR/TMA do atendimento, NPS.
- **Drill-down** e filtros globais (período, equipe, produto, região).
- Relatórios agendados (envio por e-mail) e exportação (CSV/XLSX/PDF).
- BI self-service com construtor de relatórios e *saved views*.

**Critérios de aceite**
```gherkin
Funcionalidade: Filtro global do dashboard
  Cenário: Filtrar por período
    Dado um dashboard com múltiplos widgets
    Quando eu seleciono o período "Últimos 30 dias"
    Então todos os widgets atualizam para refletir o período
```

---

## 8. Personalização e Administração

**Objetivo:** adaptar o CRM ao processo de cada empresa sem código.

**Funcionalidades**
- **Campos customizados** por entidade e **layouts** por papel/perfil.
- Pipelines, estágios, motivos de perda e tipos de atividade configuráveis.
- **Permissões granulares** (RBAC/ABAC): visibilidade por equipe/território/registro.
- **Temas** (claro/escuro, cores da marca) e localização (i18n: pt-BR, en, es).
- Gestão de usuários, equipes, metas e cotas.
- **Auditoria** de configurações e dados (quem mudou o quê e quando).

---

## 9. Busca e navegação global

- Busca unificada (contatos, contas, deals, conversas, documentos) com *full-text* (OpenSearch).
- Atalhos de teclado (paleta de comandos `⌘K`), favoritos e itens recentes.

## 10. Mobile / PWA

- PWA responsiva instalável; foco em pipeline, tarefas, chat e ficha do contato.
- Notificações push e modo offline básico (cache de leitura) como evolução.
