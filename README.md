# SmartGestão

Sistema de gestão para assistências técnicas (React, sem etapa de build).
Modo atual: **demonstração** — dados fictícios salvos no navegador (localStorage). Nenhum banco conectado.

## Arquivos
- `index.html` — carrega as bibliotecas e os scripts, nesta ordem
- `styles.css` — visual
- `config.js` — modo e (futuramente) URL e chave pública do Supabase
- `utils.js` — formatação, datas e constantes
- `data-seed.js` — dados demonstrativos
- `data-repo-local.js` — repositório do modo demonstração
- `data-repo.js` — escolhe o repositório em uso
- `data-repo-supabase.js` — placeholder (ainda não carregado)
- `ui-common.jsx`, `ui-form.jsx`, `ui-crud.jsx` — componentes
- `screen-dashboard.jsx` — painel
- `app.jsx` — menu, telas e inicialização

## Publicar no GitHub Pages
Settings → Pages → Deploy from a branch → `main` / `(root)`.

## Segurança
Nunca coloque chave `service_role` nem senha de banco neste repositório.
