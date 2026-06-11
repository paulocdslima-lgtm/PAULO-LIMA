# 06 — Segurança e Conformidade

> Segurança é **requisito de alta prioridade** e tratada *by design* e *by default*.

## 6.1. Autenticação (AuthN)

- **SSO corporativo:** OIDC/OAuth2 e SAML 2.0 (Google Workspace, Microsoft Entra, Okta).
- **MFA obrigatório** para administradores; TOTP/WebAuthn (chaves de segurança/passkeys).
- **Senhas** (quando aplicável): hashing com **Argon2id**, política de complexidade e bloqueio
  por tentativas; verificação contra listas de senhas vazadas.
- **Tokens:** JWT de acesso de curta duração + *refresh tokens* rotativos; revogação por sessão.

## 6.2. Autorização (AuthZ)

- **RBAC** (papéis: Admin, Gerente, Vendedor, Agente, Somente leitura) + **ABAC** para regras
  por atributo (território, equipe, dono do registro).
- **Row-Level Security** no PostgreSQL por `tenant_id` e por escopo de visibilidade.
- Princípio do **menor privilégio** e *separation of duties*.

## 6.3. Criptografia

- **Em trânsito:** TLS 1.2+ (preferência 1.3) em todas as conexões (HTTPS/WSS).
- **Em repouso:** criptografia de disco/coluna (AES-256) para dados sensíveis (PII).
- **Gestão de chaves:** KMS/HSM com rotação; segredos em *vault* (nunca no código).
- **Campos sensíveis** com criptografia em nível de aplicação e mascaramento na UI.

## 6.4. Proteção de aplicação

- Mitigação de **OWASP Top 10**: validação/sanitização de entrada, *prepared statements*
  (anti-SQLi), *output encoding* (anti-XSS), proteção CSRF, *security headers* (CSP, HSTS,
  X-Frame-Options).
- **Rate limiting**, proteção contra *brute force* e *bot* (WAF + CAPTCHA quando necessário).
- **Upload seguro** (verificação de tipo/tamanho, *antivirus scan*, *signed URLs*).
- **Dependências:** SCA (ex.: Dependabot/Snyk), SBOM e atualização contínua.

## 6.5. Privacidade e conformidade (LGPD/GDPR)

- **Base legal** e **consentimento** registrados; finalidade explícita por tratamento.
- **Direitos do titular:** acesso, correção, portabilidade e **exclusão** (*right to be
  forgotten*) com fluxo auditável.
- **Minimização** e **retenção** configuráveis; anonimização/pseudonimização para analytics.
- **DPA** com subprocessadores; **residência de dados** por região.
- **Registro de atividades de tratamento (ROPA)** e relatório de impacto (DPIA) quando aplicável.

## 6.6. Auditoria e *logging*

- **Audit log** imutável: quem, o quê, quando, de onde (IP), antes/depois.
- Logs de segurança (login, falhas, mudanças de permissão) com retenção definida.
- Trilhas exportáveis para SIEM; alertas de comportamento anômalo.

## 6.7. Multi-tenancy seguro

- Isolamento lógico por `tenant_id` com RLS; testes automatizados anti-vazamento entre tenants.
- Limites de cota e *throttling* por tenant.

## 6.8. Operação segura

- **Backups** criptografados com testes de restauração periódicos; PITR.
- **Plano de resposta a incidentes** (detecção, contenção, erradicação, comunicação, lições).
- **Pentests** periódicos e *bug bounty* (evolução).
- **Hardening** de infraestrutura (CIS Benchmarks), *secrets scanning* no CI.

## 6.9. Conformidades-alvo

- **SOC 2 Type II**, **ISO/IEC 27001** (roadmap), **LGPD/GDPR** desde o MVP.

## 6.10. Checklist de segurança (resumo)

- [ ] TLS em tudo, HSTS habilitado
- [ ] MFA para admins; SSO disponível
- [ ] RBAC/ABAC + RLS por tenant
- [ ] Criptografia em repouso para PII
- [ ] Segredos em vault, rotação de chaves
- [ ] SAST/DAST/SCA no pipeline CI/CD
- [ ] Audit log imutável e alertas
- [ ] Fluxos LGPD (consentimento, exclusão, portabilidade)
- [ ] Backups testados + plano de incidentes
