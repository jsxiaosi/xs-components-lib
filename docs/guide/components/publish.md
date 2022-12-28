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
