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

::: tip 组件命名

默认生成的组件模版组件名称前面都会自带一个大写的`I`，如果你们有自己独特的命名风格想要修改可以在script/template.sh修改`PREFIX_NAME`字段

``` bash
PREFIX_NAME="I"
```

:::

此命令会在packages/components、docs/example、docs/components中创建组件和示例代码以及组件Markdown

以下是通过`npm run ct button`生成组件的目录结构

``` bash
.
├── docs
│   ├── components
│   │   └── button.md
│   └── example
│       └── button
│           └── basic.vue
└── packages  
    └── components
        └── button
            ├── __tests__
            │   └── button.test.tsx
            ├── index.ts
            └── src
                ├── button.ts
                └── button.vue
```

### docs/components/button.md

组件文档markdown 详情：[编写第一个docs](./../docs/add-page.md) or [vitePress](https://vitepress.vuejs.org/guide/markdown)

::: warning 注意
生成的组件Markdown不会自动在sidebar和nav添加配置，需要手动在navigation添加配置
:::

### docs/example/button

组件示例文件 详情：[组件示例](./../docs/components.md)

### packages/components/button

组件目录，主要有`__tests__`、`src`、`index.ts`组成，下面将介绍目录以及文件的使用

#### `__tests__`

测试文件存放目录，里面内置了一个测试模版

#### `src`

- button.vue
  默认生成的模版是三段式写法以及typescript setup的vue文件，这个并不固定，如果你习惯其他写法可以自己更改或者使用`defineComponent`
- button.ts  
  组件类型声明文件

  ``` ts
  import type { ExtractPropTypes, PropType } from 'vue';

  import type button from './button.vue';

  export type Type = 'primary' | 'success' | 'error';

  // 组件的props
  /**
   * 为何不使用纯类型声明编写组件props？当然是为了更好的组件类型提示
     因为我发现当使用纯类型声明写组件props的时候，打包出来的类型默认
     会把type转译成string 而不是字面量类型，如果需要定义复杂类型的
     时候，vue提供了PropType属性为prop 标注更复杂的类型定义
   */
  export const ButtonProps = {
    type: {
      type: String as PropType<Type>,
      default: 'default',
    },
  };

  // 把组件props导出类型
  export type ButtonPropsType = ExtractPropTypes<typeof ButtonProps>;
  // 组件模板引用标注类型
  export type ButtonInstanceType = InstanceType<typeof button>;
  ```

  ::: warning 手动引入
  生成的模版还是需要自己在`packages/defInstall.ts`、`packages/components/index.ts`、`packages/global.d.ts`引入组件
  :::

## 单元测试

模版内置了vitest，通过`npm run ct`创建的组件默认会在组件的目录下创建一个名为`__tests__`的目录，里面有一个简单的测试模版

测试命令：

``` bash
# 运行test测试
npm run test
# 覆盖率输出
npm run test:coverage
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
