# 发布

## 为组件库添加版本

多包管理的模版中，在子包下都是有独立的package.json文件，发布的时候也是子包单独发布，但是这样就需要繁琐的在package.json中修改version。

因此模版提供了工具可以一键同步更改所有子包的package.json中version

``` bash
# 运行命令选择版本号
npm run release
```

::: warning
打包组件后的package.json（dist/xs-components/package.json）是在打包完成后从packages目录复制到打包后的目录下，所以需要在打包之前先修改package.json中version
:::

## 发布组件

为了能让你的组件在项目中能够通过npm的方式安装使用，有以下几种方式：

### 1、发布到npm

登录npm

``` bash
npm run login 
```

使用`npm publish` 发布到npm

```bash
# 进入打包后组件目录
cd dist/xs-components
# 发布到npm
npm publish
```

### 2、组件是内部使用，可以通过Git地址

::: warning
使用Git下载方式需要把dist/xs-components一并提交到Git仓库
:::
