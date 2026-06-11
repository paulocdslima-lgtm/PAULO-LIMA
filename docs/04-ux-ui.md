# 04 — UX/UI e Design System

## 4.1. Princípios de design

1. **Clareza acima de tudo** — hierarquia visual evidente, menos é mais.
2. **Eficiência** — fluxos curtos, atalhos, *bulk actions* e edição inline.
3. **Consistência** — mesmos padrões em todos os módulos (Design System).
4. **Feedback imediato** — estados de carregamento, sucesso, erro e *optimistic UI*.
5. **Acessível por padrão** — WCAG 2.2 AA, navegação por teclado e leitores de tela.
6. **Responsivo e adaptativo** — desktop, tablet e smartphone com a mesma qualidade.

## 4.2. Design tokens

| Token | Valor (exemplo) | Uso |
|-------|-----------------|-----|
| Cor primária | `#4f46e5` (indigo 600) | Ações, links, marca |
| Cor de sucesso | `#16a34a` | Ganhos, confirmações |
| Cor de alerta | `#f59e0b` | Avisos, SLAs próximos |
| Cor de erro | `#dc2626` | Erros, perdas |
| Neutros | escala de cinza `50→900` | Texto, superfícies, bordas |
| Raio de borda | `8px` / `12px` / `16px` | Cartões, inputs, modais |
| Sombra | `sm` / `md` / `lg` | Elevação |
| Tipografia | Inter / system-ui | UI |
| Espaçamento | escala 4px (4,8,12,16,24,32) | Grid e *padding* |

> Os tokens são implementados como **CSS variables** + configuração do Tailwind, garantindo
> **tema claro/escuro** e *white-label* (cores da marca por tenant).

## 4.3. Grid e layout responsivo

- **Breakpoints:** `sm 640`, `md 768`, `lg 1024`, `xl 1280`, `2xl 1536`.
- **Desktop (≥1024px):** sidebar fixa + topbar + área de conteúdo com grid de 12 colunas.
- **Tablet (768–1023px):** sidebar colapsável (ícones), conteúdo fluido.
- **Smartphone (<768px):** sidebar vira *drawer*/bottom-nav; tabelas viram cartões; ações em
  *bottom sheet*.
- **Mobile-first:** estilos base para mobile e *progressive enhancement* para telas maiores.

## 4.4. Biblioteca de componentes

Botões, inputs, selects, *combobox*, tabelas com ordenação/filtragem, *data grid*, cartões de
KPI, gráficos, *toasts*, modais, *drawers*, *tabs*, *tooltips*, *badges*, avatares, *empty
states*, *skeletons* e paleta de comandos (`⌘K`). Construídos sobre **Radix UI** (acessibilidade)
e estilizados com **Tailwind** (abordagem shadcn/ui).

## 4.5. Padrões de interação

- **Optimistic UI** em ações de baixo risco (mover card, marcar tarefa).
- **Undo** (desfazer) em exclusões e ações destrutivas (snackbar com timer).
- **Edição inline** em tabelas e na ficha do contato.
- **Drag-and-drop** acessível no Kanban (com alternativa por teclado).
- **Estados vazios** com orientação ("crie sua primeira oportunidade").

## 4.6. Acessibilidade (A11y)

- Contraste mínimo 4.5:1 (texto); foco visível; *landmarks* ARIA.
- Todos os fluxos operáveis por teclado; *focus trap* em modais.
- Suporte a *prefers-reduced-motion* e *prefers-color-scheme*.
- Rótulos e *aria-live* para atualizações em tempo real (chat/notificações).

## 4.7. Performance percebida

- *Skeletons* e *suspense* durante carregamento; *code splitting* por rota.
- Virtualização de listas longas; *debounce* em buscas; *prefetch* de rotas prováveis.
- Metas: LCP < 2,5s, INP < 200ms, CLS < 0,1 (Core Web Vitals).

## 4.8. Conteúdo e tom

- Linguagem objetiva e cordial; *microcopy* orientado à ação.
- Mensagens de erro úteis (o que aconteceu + como resolver).
- Internacionalização (i18n) com pt-BR padrão e suporte a en/es.

## 4.9. Processo de design

1. **Pesquisa** (entrevistas, *jobs to be done*) → 2. **Fluxos & wireframes** →
3. **Protótipo de alta fidelidade** (Figma) → 4. **Testes de usabilidade** →
5. **Handoff** com tokens e specs → 6. **QA visual** e revisão de A11y.

> Veja o protótipo funcional em [`../web`](../web), que implementa estes princípios.
