# 10 — Stack Tecnológico Recomendado

> Recomendações pragmáticas, com alternativas. O critério é **maturidade, ecossistema,
> produtividade e custo total de propriedade**.

## 10.1. Frontend

| Camada | Recomendado | Alternativas | Por quê |
|--------|-------------|--------------|---------|
| Framework | **React 18 + TypeScript** | Vue 3, Angular | Ecossistema e *type-safety* |
| Build | **Vite** | Next.js (SSR), Turbopack | DX rápido; Next se precisar SSR/SEO |
| Estilo | **Tailwind CSS** + CSS vars | CSS Modules, Styled | Velocidade + tema/white-label |
| Componentes | **Radix UI / shadcn-style** | MUI, Chakra | Acessibilidade + customização |
| Estado servidor | **TanStack Query** | RTK Query, SWR | Cache, *retry*, *invalidation* |
| Estado cliente | **Zustand** | Redux Toolkit, Jotai | Simples e performático |
| Formulários | **React Hook Form + Zod** | Formik + Yup | Performance + validação tipada |
| Gráficos | **Recharts / ECharts** | Visx, Chart.js | Dashboards interativos |
| Tempo real | **socket.io-client / WS nativo** | Ably, Pusher | Chat e atualizações |
| Roteamento | **React Router** | TanStack Router | Maturidade |
| i18n | **i18next** | FormatJS | pt-BR/en/es |
| Testes | **Vitest + Testing Library + Playwright** | Jest, Cypress | Unit + E2E |

## 10.2. Backend

| Camada | Recomendado | Alternativas | Por quê |
|--------|-------------|--------------|---------|
| Runtime/Linguagem | **Node.js (NestJS, TS)** | Go, Java/Spring, .NET | Produtividade e mesma linguagem do front |
| API | **REST (OpenAPI) + GraphQL (BFF)** | gRPC interno | Flexibilidade e contratos |
| ORM | **Prisma** | TypeORM, Drizzle | DX e migrações tipadas |
| Realtime | **WebSocket Gateway** + Redis | NATS, Centrifugo | *Fan-out* horizontal |
| Mensageria | **Kafka** | RabbitMQ, NATS JetStream | Eventos e *replay* |
| Automação | **Temporal** (workflows) | BullMQ, Camunda | Orquestração resiliente |
| Busca | **OpenSearch** | Elasticsearch, Typesense | *Full-text* e filtros |

> Para domínios de altíssima performance/concorrência (ex.: gateway de chat), **Go** é uma forte
> alternativa ao Node.

## 10.3. Dados

| Função | Recomendado | Alternativas |
|--------|-------------|--------------|
| OLTP | **PostgreSQL** (RLS, `jsonb`) | MySQL, CockroachDB |
| Cache / Pub-Sub | **Redis** | KeyDB, Valkey |
| Data Warehouse | **BigQuery / Redshift / Snowflake** | ClickHouse |
| Object Storage | **S3 / GCS** | MinIO |
| Vetorial (IA) | **pgvector / Pinecone** | Weaviate, Qdrant |

## 10.4. Infraestrutura & DevOps

| Função | Recomendado |
|--------|-------------|
| Containers/Orquestração | Docker + **Kubernetes** (Helm) |
| IaC | **Terraform** |
| CI/CD | **GitHub Actions** (lint→test→SAST→deploy) |
| Cloud | AWS / GCP / Azure (multi-AZ) |
| Borda | CDN + **WAF** |
| Segredos | Vault / AWS Secrets Manager |
| Observabilidade | Prometheus + Grafana + OpenTelemetry + Sentry |
| Filas/Erro | Dead-letter queues, Renovate/Dependabot |

## 10.5. IA / Assistência (evolução)

- **LLMs** para resumo de conversas, *email drafting*, sugestões de próxima ação.
- **RAG** com `pgvector` sobre histórico do cliente; *lead scoring* preditivo (ML).
- Guardrails de privacidade: dados sensíveis nunca enviados sem anonimização/consentimento.

## 10.6. Justificativa do protótipo (`/web`)

O protótipo neste repositório usa **React 18 + TypeScript + Vite + Tailwind + Recharts +
React Router**, refletindo a stack de frontend recomendada acima, com dados simulados para
demonstrar UX, responsividade e os módulos principais sem necessidade de backend.
