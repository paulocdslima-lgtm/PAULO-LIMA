# 09 — Operação e Manutenção

## 9.1. Observabilidade

- **Logs** estruturados (JSON) centralizados (ELK/Loki) com correlação por `trace_id`.
- **Métricas** (Prometheus): técnicas (latência, erro, saturação) e de negócio (deals/dia,
  TMR do chat). Dashboards no **Grafana**.
- **Tracing distribuído** (OpenTelemetry) ponta a ponta (BFF → serviços → DB/filas).
- **Alertas** (Alertmanager/PagerDuty) com *on-call* e *runbooks* por alerta.
- **RUM** (Real User Monitoring) para Core Web Vitals e erros de frontend (Sentry).

## 9.2. SLOs / SLAs

| Indicador | Alvo |
|-----------|------|
| Disponibilidade | 99,9% mensal |
| Latência API (p95) | < 300 ms |
| Latência de entrega no chat (p95) | < 500 ms |
| Erro 5xx | < 0,1% das requisições |
| RTO (recuperação) | < 1 h |
| RPO (perda de dados) | < 5 min (PITR) |

## 9.3. Confiabilidade (SRE)

- **Error budgets** atrelados aos SLOs; releases pausam se o orçamento estourar.
- **Capacidade/escalonamento** automático (HPA) por CPU/memória/conexões.
- **Resiliência:** *circuit breakers*, *retries* idempotentes, *bulkheads*, *graceful
  degradation* (ex.: chat cai → CRM segue funcionando).
- **DR (Disaster Recovery):** backups multi-região, testes de restauração e *failover*
  documentados e ensaiados.

## 9.4. Gestão de releases

- *Trunk-based* + *feature flags*; deploys **blue-green/canário** com *rollback* automático.
- **Versionamento semântico** das APIs e *deprecation policy* (avisos + janela de migração).
- **Changelog** público e notas de versão por release.

## 9.5. Manutenção contínua

- **Patches de segurança** priorizados (SLA por severidade CVSS).
- **Atualização de dependências** (Renovate/Dependabot) com testes automáticos.
- **Gestão de dívida técnica** com orçamento fixo por ciclo.
- **Manutenção de dados:** rotinas de deduplicação, limpeza e *archiving*.
- **Otimização de banco:** índices, *vacuum*, particionamento e revisão de *slow queries*.

## 9.6. Suporte ao cliente

- Níveis L1/L2/L3, base de conhecimento, *status page* pública e SLAs de suporte por plano.
- Telemetria de produto (analytics de uso) para priorização orientada a dados.
- Canais: chat de suporte (dogfooding do próprio produto), e-mail e portal.

## 9.7. FinOps

- *Tagging* de recursos por serviço/tenant, monitoramento de custos e *rightsizing*.
- Estratégias de cache e *data lifecycle* (hot/warm/cold) para reduzir custo de storage.

## 9.8. Runbooks (exemplos)

- **Fila de eventos acumulando:** verificar consumidores, escalar workers, inspecionar DLQ.
- **WebSocket com alta latência:** checar Redis/backplane, conexões por nó, *autoscaling*.
- **Pico de erros 5xx:** *rollback* do último deploy, abrir incidente, comunicar status page.
- **Integração falhando:** validar credenciais/quotas, reprocessar DLQ, abrir ticket no parceiro.
