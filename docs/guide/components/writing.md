# 编写你的一个组件
组件目录存放在packages中，里面有components(组件)、hooks、theme-default(样式)、utils(公共方法)

各类模块的开发在相应的目录下都有示例，可以参考示例进行编写，这里就不一一介绍，只挑重点部分讲解

## 组件引用
组件注册方法在utils中有install.ts 文件，如果你有更好的方式，可以自行编写。添加组件后需要再global.d.ts 添加组件引入，此处是为了让你的组件库添加volar支持，后期在使用组件的时候在tsconfig.json types添加xs-components/global就可以在你的编译器上代码提示

## 创建组件
通过命令行创建组件
``` bash
npm run ct '组件名称'
```
此命令会在components、example、docs/components中创建组件和示例代码以及组件Markdown

::: warning
生成的模版还是需要自己在`packages/index.ts`、`packages/global.d.ts`引入组件
:::

::: warning
生成的组件Markdown不会自动在sidebar和nav添加配置，需要自行navigation添加配置
:::

默认生成的组件模版组件名称前面都会自带一个大写的`I`，如果你们有自己独特的命名风格想要修改可以在script/template.sh修改`PREFIX_NAME`字段
``` bash
PREFIX_NAME="I"
```

## 调试组件
为了方便开发组件，在effect目录下有简单的调试项目，在里面你可以非常简单的调试你的组件，可以调试正在开发中和打包后的组件
``` vue
<script setup lang="ts">
  // 引用打包的目录
  import { IButton } from '@xs-components/index';
  // 引用packages的目录
  import { IButton } from '@packages/index';
 </script>
```