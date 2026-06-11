# Nexus CRM — versão standalone (arquivo único)

`nexus-crm.html` é o protótipo do CRM **completo em um único arquivo**, com todo o código
(JS/CSS) embutido. Não precisa de servidor, Node.js ou internet (exceto fontes, que têm
fallback). Basta **abrir o arquivo no navegador**.

## Como abrir

1. Baixe o arquivo `nexus-crm.html` (no GitHub: botão **"Download raw file"** na página do arquivo).
2. Dê **duplo clique** no arquivo baixado — ele abre no seu navegador padrão.
3. Pronto: navegue pelo Dashboard, Contatos, Pipeline, Tarefas, Chat, Relatórios e Configurações.

> Usa navegação por hash (`.../nexus-crm.html#/pipeline`) para funcionar via `file://`.

## Como regenerar

```bash
cd web
VITE_SINGLEFILE=true VITE_ROUTER=hash npm run build
cp dist/index.html ../standalone/nexus-crm.html
```
