# 开始

## 开发环境

首先得有 node，并确保 node 版本是 v16 或以上。

``` sh
node -v
# v16+
```

## 代码拉取

``` sh
# （https or ssh）
git clone https://github.com/jsxiaosi/xs-components-lib.git

git clone git@github.com:jsxiaosi/xs-components-lib.git
```

## 使用

- 安装依赖

``` sh
npm install
```

### Develop

- 运行文档

``` sh
npm run docs:dev
```

- 运行组件开发调试模板

``` sh
npm run dev
```

### Production

- 文档

``` sh
npm run docs:build
```

- 组件打包

``` sh
npm run build
```
