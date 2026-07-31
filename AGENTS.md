# AGENTS.md — Especificação do Projeto

Guia para agentes de IA (opencode) continuarem a edição deste repositório.
Leia este arquivo inteiro antes de fazer qualquer alteração.

## Visão geral

Portfólio pessoal do **Gabriel Mendonça** — Desenvolvedor Fullstack.
O repositório contém **3 subprojetos independentes** (o mesmo portfólio em 3 stacks):

| Pasta | Stack | Publicado? |
|-------|-------|------------|
| `novoSite/` | HTML + Tailwind CSS (CDN) + JavaScript ES6 | ✅ **SIM — é o site ao vivo** |
| `react/` | React 18 + React Bootstrap (CRA) | ❌ Não publicado |
| `nextjs/` | Next.js 14 + TypeScript + SCSS Modules | ❌ Não publicado |

**Regra nº 1: o site publicado é `novoSite/`.** Toda edição "visível" acontece lá.
`react/` e `nextjs/` são versões alternativas mantidas no repo, mas não em produção.

## Site publicado

- **URL:** https://gabrielmendonca.com.br
- **Domínio:** definido pelo arquivo `CNAME` (na raiz) → `gabrielmendonca.com.br`
- **Hospedagem:** GitHub Pages (usuário/organização `brunoom1`)
- **Remote:** `git@github.com:brunoom1/brunoom1.github.com.git`
- **Deploy:** workflow `.github/workflows/static.yml`, disparado **apenas no push para `master`**

### Como o deploy funciona
1. Push na branch `master`
2. Action executa `cd novoSite && npx parcel build index.html`
3. Publica a pasta gerada `novoSite/dist/` no GitHub Pages

> ⚠️ A branch `feature/withComponents` contém a refatoração em componentes do `novoSite`
> (ainda **não publicada**). O que está no ar hoje é a versão monolítica de `master`.

## Estrutura de `novoSite/` (o site ao vivo)

```
novoSite/
├── index.html          ← Home (hero, stack, serviços, projetos, sobre, contato)
├── portfolio.html      ← Portfólio (skills + projetos)
├── projetos.html       ← Repositórios do GitHub (dinâmico via GitHub API)
├── js/
│   ├── app.js          ← Init da home (renderiza componentes)
│   ├── portfolio.js    ← Init do portfolio
│   ├── projetos.js     ← Busca repositórios na GitHub API
│   └── components/     ← Componentes reutilizáveis (na branch feature/withComponents)
│       ├── Navigation.js
│       ├── Hero.js
│       ├── ServiceCard.js
│       ├── ProjectCard.js
│       ├── RepositoryCard.js
│       ├── ProfileCard.js
│       ├── SkillTag.js
│       └── Footer.js
├── *-backup.html       ← Cópias originais pré-refatoração (referência)
└── main.js             ← Vazio (resquício)
```

### Versão de `master` (publicada)
Os 3 HTML são **monolíticos** (conteúdo inline no HTML, sem JS de componentes).
Ao editar, mexa direto no HTML das seções.

### Versão de `feature/withComponents` (em andamento)
Os HTML ficam enxutos com `<div id="...">` contêineres e o conteúdo é renderizado
pelos arquivos `js/*.js` + componentes. Padrão de cada componente:

```js
export class Hero {
  constructor(options = {}) { this.options = { ...defaults, ...options }; }
  render() { return `<html...>`; }
  mount(selector) { document.querySelector(selector).innerHTML = this.render(); }
}
```

## Stack e estilo do `novoSite/`

- **Tailwind CSS** via CDN (`https://cdn.tailwindcss.com`) com `tailwind.config` customizado no `<head>` do `index.html` (cores `brand`, `bg`, `text`, sombras `soft`/`hover`, animação `float`)
- **Google Font Inter** (fonte padrão via `fontFamily.sans`)
- **Phosphor Icons** via CDN (`https://unpkg.com/@phosphor-icons/web`) — ícones `ph ph-nome-icone`
- **Sem build de CSS** — os `*-backup.html` e os `.html` já vêm prontos; o Parcel só empacota JS/HTML

### Onde editar o conteúdo
- **Textos/hero/serviços/projetos da home:** seções do `index.html` (master) ou arrays em `js/app.js` (feature)
- **WhatsApp:** `https://api.whatsapp.com/send/?phone=5511953884206&text...` (em `index.html`)
- **E-mail:** `contato@gabrielmendonca.com.br`
- **GitHub:** usuário `brunoom1` — também usado em `js/projetos.js` na API
- **Workana:** link de freelancer usado em `js/portfolio.js` (feature)
- **Formulário de contato:** usa [formsubmit.co](https://formsubmit.co) com `action="https://formsubmit.co/SEU_EMAIL_AQUI"` — ⚠️ ainda contém o placeholder `SEU_EMAIL_AQUI`; para o e-mail chegar, precisa trocar pelo e-mail real

## Git

- Branch padrão de deploy: `master`
- Branch atual de trabalho: `feature/withComponents`
- Convenção de commits: mensagens curtas, mistura de PT/EN (ex.: "Add new site", "Ajustar css", "Add news componentes")

## Comandos úteis

```bash
# Build local do site publicado (gera novoSite/dist)
cd novoSite && npx parcel build index.html

# Dev server local do novoSite
cd novoSite && npx parcel index.html

# React (não publicado)
cd react && npm start

# Next.js (não publicado)
cd nextjs && npm run dev
```

> ⚠️ O `package.json` do `novoSite` lista a dependência errada `parceljs` (não é o pacote
> real). O build funciona via `npx parcel` (baixa o pacote correto na hora). Não confie
> em `npm install`/`npm test` desse subprojeto — `npm test` só imprime um placeholder.

## Notas importantes

- O `README.md` do `nextjs/` e os `.md` da raiz (`INDEX.md`, `MAPA.md`, etc.) são
  documentação da refatoração de dez/2024 — descrevem os 3 subprojetos, mas não alteram o site.
- Formulário usa honeypot (`_honey`) e `_captcha=false` do formsubmit.
- `portfolio.html` e `projetos.html` de `master` são estáticos; a versão dinâmica
  (GitHub API) existe apenas na `feature/withComponents`.
