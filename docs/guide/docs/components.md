# 组件示例

组件示例参考了Element-Plus引用方式，内置独立的代码块解析器，目前解析器支持Vue,Ts解析。

packages中开发的组件默认都是全部引入到VitePress里面，你在编写你的示例时完全不需要担心组件引入问题。

组件示例存放在example目录中，像正常编写vue页面那样编写你的组件示例，运行时mdPlugin插件会自动在md文档流中查找代码块容器内容自动去example目录查找你示例代码文件，所以在Markdown中添加示例代码时你只要在容器中添加示例代码的路径即可

## 编写示例

在example目录下创建一个button目录，里面编写vue组件

### 目录结构

``` bash
.
└── example         # 代码示例存放目录
    └── button
        └── basic.vue
```

### 内容

``` vue
<template>
  <IButton class="button" type="primary">按钮实例</IButton>
  <IButton class="button" type="success">按钮实例</IButton>
  <IButton class="button" type="error">按钮实例</IButton>
</template>

<style scoped>
  .button {
    margin-right: 20px;
  }
</style>
```

## Markdown中添加示例

``` md
<!-- :::demo固定写法并以:::作为末尾结束，这里标志着容器范围 -->
:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

<!-- 你的example目录下的示例文件目录与文件名 -->
button/basic

:::
```

示例代码中的路径是默认从example开始查找，所以容器中填写的路径是example开始以下的目录到文件名路径地址

::: danger
注意：demo 后面的内容为示例组件的描述，单行识别，换行后会被识别为示例代码路径
:::

[查看示例](../../components/button.md)
