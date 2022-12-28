# 编写你的一个组件

组件目录存放在packages中，里面有components(组件)、hooks、theme-default(样式)、utils(公共方法)

各类模块的开发在相应的目录下都有示例，可以参考示例进行编写，这里就不一一介绍，只挑重点部分讲解

## 注册组件

组件注册方法在utils中有install.ts 文件，如果你有更好的方式，可以自行编写。添加组件后需要再global.d.ts 添加组件引入，此处是为了让你的组件库添加volar支持，后期在使用组件的时候在tsconfig.json types添加xs-components/global就可以在你的编译器上代码提示

## 创建组件

通过命令行创建组件

``` bash
npm run ct '组件名称'
```

此命令会在components、example、docs/components中创建组件和示例代码以及组件Markdown

::: warning
生成的模版还是需要自己在`packages/defInstall.ts`、`packages/components/index.ts`、`packages/global.d.ts`引入组件
:::

::: warning
生成的组件Markdown不会自动在sidebar和nav添加配置，需要自行navigation添加配置
:::

默认生成的组件模版组件名称前面都会自带一个大写的`I`，如果你们有自己独特的命名风格想要修改可以在script/template.sh修改`PREFIX_NAME`字段

``` bash
PREFIX_NAME="I"
```

## 内置项目调试组件

为了方便开发组件，在effect目录下有简单的调试项目，在里面你可以非常简单的调试你的组件，可以调试正在开发中和打包后的组件

``` vue
<script setup lang="ts">
  // 引用打包的目录
  import { IButton } from '@xs-components/index';
  // 引用packages的目录
  import { IButton } from '@packages/index';
 </script>
```

## 项目调试组件库

``` bash
# 打包组件库
npm run build
# 进入打包后目录
cd dist/xs-components
# 将当前目录链接到全局环境下的 node_modules 目录下
pnpm link --global xs-components

# 进入你的项目目录将全局环境下的 node_modules 目录中的指定的软件包，链接到当前工作目录下
pnpm link --global xs-components
```

## 依赖第三方库

### 开发环境

开发环境下，在根目录下直接通过 `pnpm` 安装第三方库可以直接在开发组件库中调试

或者

进入packages里面使用 `pnpm` 安装

### 生产环境

正常开发组件中，我们在项目的根目录使用第三方库，调试时可以正常运行，但是我们并不需要在此直接把第三库和组件一起打包，只是需要保留引入关系就好，这里就需要将第三方库在packages目录package.json添加依赖项！

rollup组件打包配置中，通过packages目录package.json里面的`peerDependencies`、`dependencies`配置来过滤只需要保留引入关系不需要打包的第三方库

所以在打包组件库时需要把依赖的第三库添加到packages -> package.json文件里面的`peerDependencies`、`dependencies`

举例：

``` json
{
  "peerDependencies": {
    "vue": "^3.2.0"
  },
  "dependencies": {
    "@types/lodash": "^4.14.191",
    "@vueuse/core": "^9.9.0",
    "lodash": "^4.17.21"
  },
}
```
