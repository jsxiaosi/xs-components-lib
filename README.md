<div align='center' ><h2>Component library template</h2></div>

<div align='left' >
Component library template developed based on <code>Vue3</code>, <code>VitePress</code>, <code>Rollup</code>, <code>Gulp</code> and other mainstream technologies<br/>
Built-in packaging components, Hooks, Utils, which can be introduced on demand, support TypeScript, and enable all attention to focus on document writing and component development.<br/>
Built-in VitePress theme eliminates the trouble of writing style, with its own night mode, and can customize the theme.
</div>
<br/>

<p align='center'>
  <b>English</b> | 
  <a href="https://github.com/jsxiaosi/xs-components-lib/blob/main/README.zh-CN.md">简体中文</a>
</p>

## Docs

<https://xs-com-lib.netlify.app>

## Features

- **🚀 Latest technology stack**<br/>
  It is developed using front-end cutting-edge technologies such as Vue3/Rollup/Gulp
- **📦 Out of the box**<br/>
  Built-in packaging can be introduced on demand, and TypeScript is supported, so that all attention can be focused on document writing and component development.
- **🔗 Support CDN introduction**<br/>
  Support the packaging and output of compact CDN modules, and simultaneously support UnPkg and JsDelivr CDN introduction methods.
- **⚡️ VitePress**<br/>
  Vue official document theme, free of the trouble of writing style, with its own night mode, customizable theme.
- **💻 One-click template generation command**<br/>
  Say goodbye to the trouble of manually creating development templates by machine, and generate development templates quickly and easily with one command.
- **🚧 Specification inspection**<br/>
  Built-in Eslint, Prettier and CommitLint tools can better unify your code style and submit inspection specifications.

## Prepare

- [Node](http://nodejs.org/) and [Git](https://git-scm.com/) - project development environment
- [Vite](https://cn.vitejs.dev/) - Familiar with Vite features
- [Vue3](https://v3.cn.vuejs.org/) - Familiar with Vue basic syntax
- [Es6+](http://es6.ruanyifeng.com/) - familiar with Es6 basic syntax
- [VitePress](https://vuepress.vuejs.org/) - familiar with the basic use of VitePress

## Installation and use

- Get project code (Https or SSH)

```bash
git clone https://github.com/jsxiaosi/xs-components-lib.git

git clone git@github.com:jsxiaosi/xs-components-lib.git
```

Alternatively, you can use the [`xs-cli`](https://github.com/jsxiaosi/xs-cli)to quickly create one

```bash
npx @jsxiaosi/xs-cli create [project-name]
```

- Installation Dependencies

```bash
pnpm install
```

### Developer

- Run built-in template debugging component

```bash
npm run dev
```

- Run the VitePress document

```bash
npm run docs:dev
```

- Create component template

```bash
npm run ct 'Component name'
```

### Production

- Package Component Library

```bash
npm run build
```

- Packaging a VitePress document

```bash
npm run docs:build
```

## Git Contribution submission specification

- Refer to [Vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) specification

  - `feat` New Features
  - `fix` Repair defects
  - `docs` Document change
  - `style` Code format
  - `refactor` Code refactoring
  - `perf` Performance optimization
  - `test` Add neglected tests or changes to existing tests
  - `build` Build processes, external dependency changes (such as upgrading npm packages, modifying packaging configurations, etc.)
  - `ci` Modify CI configuration and scripts
  - `revert` Roll back the commit
  - `chore` Changes to the build process or tools and libraries (do not affect source files)
  - `wip` Under development
  - `types` Type definition file modification

- Or submit with instructions

```bash
npm run cz
```

### Specification related

- [EsLint](https://eslint.org/) - Js syntax detection
- [StyleLint](https://stylelint.io/) - Style syntax detection
- [CommitLint](https://commitlint.js.org/#/) - Git commit commit specification detection

## Catalogue

```bash
.
├── LICENSE
├── README.md
├── build
├── commitlint.config.js
├── docs                                # Vitepress document directory
├── effect                              # Commissioning template
├── lib
├── node_modules
├── package-lock.json
├── package.json
├── packages                            # Common component directory
│   ├── components                      # Component storage directory
│   ├── hooks                           # Hooks storage directory
│   ├── theme-default                   # Component style storage directory
│   ├── utils                           # Public method storage directory
├── postcss.config.js
├── prettier.config.js
├── script
├── stylelint.config.js
├── tsconfig.json
└── typings
```

## Thanks for the help of the following excellent projects

- [Element-Plus](https://github.com/element-plus/element-plus)
- [Naive-UI](https://github.com/tusen-ai/naive-ui)

## maintainers

[@jsxiaosi](https://github.com/jsxiaosi)

## License

[MIT © 2022](./LICENSE)
