<div align='center' ><h2>组件库模版</h2></div>

<div align='left' >
基于<code>Vue3</code>,<code>VitePress</code>, <code>Rollup</code>，<code>Gulp</code>等主流技术开发的组件库模板。<br/>
内置打包组件、Hooks、Utils，可按需引入，支持TypeScript，让所有注意力都能放在文档编写和组件开发上。<br/>
内置VitePress主题，免去写样式的烦恼，自带夜间模式，可自定义主题。
</div>
<br/>

<p align='center'>
  <b>简体中文</b> | 
  <a href="https://github.com/jsxiaosi/xs-components-lib/blob/main/README.md">English</a>
</p>

## 文档

<https://xs-com-lib.netlify.app>

## 特性

- **🚀 最新技术栈**：使用 Vue3/Rollup/Gulp 等前端前沿技术开发.
- **📦 开箱即用**：内置打包可按需引入，支持TypeScript，让所有注意力都能放在文档编写和组件开发上.
- **🔗 支持CDN引入**：支持打包输出小巧的CDN模块，可同时支持UnPkg、JsDelivr CDN引入方式.
- **⚡️ VitePress**： Vue官方文档主题：VitePress，免去写样式的烦恼，自带夜间模式，可自定义主题.
- **💻 一键生成模版命令**： 告别机器式手动创建开发模版的烦恼，一条命令即可简单快速生成开发模版.
- **🚧 规范检查**：内置Eslint、Prettier、CommitLint工具更好统一你的代码风格，提交检查规范.

## 准备

- [Node](http://nodejs.org/) 和 [Git](https://git-scm.com/) -项目开发环境
- [Vite](https://cn.vitejs.dev/) - 熟悉 Vite 特性
- [Vue3](https://v3.cn.vuejs.org/) - 熟悉 Vue 基础语法
- [Es6+](http://es6.ruanyifeng.com/) - 熟悉 Es6 基本语法
- [VitePress](https://vuepress.vuejs.org/) - 熟悉 VitePress 基本使用

## 安装使用

- 获取项目代码（https or ssh）

```bash
git clone https://github.com/jsxiaosi/xs-components-lib.git

git clone git@github.com:jsxiaosi/xs-components-lib.git
```

或者通过[`xs-cli`](https://github.com/jsxiaosi/xs-cli)快速创建

```bash
npx @jsxiaosi/xs-cli create [project-name]
```

- 安装依赖

```bash
pnpm install
```

### Developer

- 运行内置模板调试组件

```bash
npm run dev
```

- 运行 VitePress 文档

```bash
npm run docs:dev
```

- 创建组件模板

```bash
npm run ct '组件名称'
```

### Production

- 打包组件库

```bash
npm run build
```

- 打包 VitePress 文档

```bash
npm run docs:build
```

## Git 提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范

  - `feat` 新增功能
  - `fix` 修复缺陷
  - `docs` 文档变更
  - `style` 代码格式
  - `refactor` 代码重构
  - `perf` 性能优化
  - `test` 添加疏漏测试或已有测试改动
  - `build` 构建流程、外部依赖变更 (如升级 npm 包、修改打包配置等)
  - `ci` 修改 CI 配置、脚本
  - `revert` 回滚 commit
  - `chore` 对构建过程或辅助工具和库的更改 (不影响源文件)
  - `wip` 正在开发中
  - `types` 类型定义文件修改

- 或使用指令提交

```bash
npm run cz
```

### 规范相关

- [EsLint](https://eslint.org/) - js 语法检测
- [StyleLint](https://stylelint.io/) - 样式语法检测
- [CommitLint](https://commitlint.js.org/#/) - git commit 提交规范检测

## 目录

```bash
.
├── LICENSE
├── README.md
├── build
├── commitlint.config.js
├── docs                                # vitepress文档目录
├── effect                              # 调试模板
├── lib
├── node_modules
├── package-lock.json
├── package.json
├── packages                            # 公共组件目录
│   ├── components                      # 组件存放目录
│   ├── hooks                           # hooks存放目录
│   ├── theme-default                   # 组件样式存放目录
│   ├── utils                           # 公共方法存放目录
├── postcss.config.js
├── prettier.config.js
├── script
├── stylelint.config.js
├── tsconfig.json
└── typings
```

## 感谢以下优秀的项目提供帮助

- [Element-Plus](https://github.com/element-plus/element-plus)
- [Naive-UI](https://github.com/tusen-ai/naive-ui)

## 维护者

[@jsxiaosi](https://github.com/jsxiaosi)

## License

[MIT © 2022](./LICENSE)
