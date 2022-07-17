## 简介

基于`Vue3`,`VitePress`,`ElementPush`, `Rollup`等主流技术开发的组件库模板

## 特性

- **最新技术栈**：使用 Vue3/vite2 等前端前沿技术开发
- **组件文档**：使用 VitePress 内置文档
- **支持**：支持 TypeScript，支持按需引入
- **模板**： 内置指令一键生成开发模板

## 准备

- [node](http://nodejs.org/) 和 [git](https://git-scm.com/) -项目开发环境
- [Vite](https://cn.vitejs.dev/) - 熟悉 vite 特性
- [Vue3](https://v3.cn.vuejs.org/) - 熟悉 Vue 基础语法
- [Es6+](http://es6.ruanyifeng.com/) - 熟悉 es6 基本语法
- [VitePress](https://vuepress.vuejs.org/) - 熟悉 VitePress 基本使用
- [element-push](https://element-plus.gitee.io/#/zh-CN/) - ui 基本使用

## 安装使用

- 获取项目代码（https or ssh）

```bash
git clone https://github.com/jsxiaosi/xiaosiCommitLib.git

git clone git@github.com:jsxiaosi/xiaosiCommitLib.git
```

- 安装依赖

```bash
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
# 如果下载依赖慢可以使用淘宝镜像源安装依赖
npm install --registry=https://registry.npm.taobao.org
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

  - `feature` 增加新功能
  - `fixbug` 修复问题/BUG
  - `style` 不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等

- 或使用指令提交

```bash
npm run commit
```

### 规范相关

- [esLint](https://eslint.org/) - js 语法检测
- [styleLint](https://stylelint.io/) - 样式语法检测
- [commitLint](https://commitlint.js.org/#/) - git commit 提交规范检测

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

## 维护者

[@jsxiaosi](https://github.com/jsxiaosi)

## License

[MIT © 2022](./LICENSE)
