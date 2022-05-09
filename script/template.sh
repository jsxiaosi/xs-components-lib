#! /bin/bash

# 脚本文件，运行 npm run ct $NAME 一键创建组件

NAME=$1

# 打印组件目录的完整地址
FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../packages" && pwd)

# 启动脚本后面是否有写 name
if [ "$#" -ne 1 ] || [[ $NAME =~ $re ]] || [ "$NAME" == "" ]; then
  echo -e "\033[0;31m[ERROR] npm run ct \${name} 输入的字符错误 \033[0m"
  exit 1
fi

# 拼接组件存放路径
FILENAME="$FILE_PATH/components/$NAME"

# 判断此路径是否有想同的组件
if [ -d "$FILENAME" ]; then
  echo -e "\033[0;31m[ERROR] $NAME 已经存在相同的组件 \033[0m"
  exit 1
fi

# 生成组件目录
mkdir -p "$FILENAME"
mkdir -p "$FILENAME/src"

# 生成文件.vue 并写入模板
cat > $FILENAME/src/index.vue <<EOF
<template>
  <div>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: '${NAME}',
  props: { },
  setup(props) {
    // init here
  },
})
</script>
<style>
</style>
EOF

# 生成导入模板文件 index.ts
cat <<EOF >"$FILENAME/index.ts"
import type { App } from 'vue'
import ${NAME} from './src/index.vue'
import type { SFCWithInstall } from "../../types";

${NAME}.install = (app: App) => {
	app.component(${NAME}.name, ${NAME})
}

const _${NAME}: SFCWithInstall<typeof ${NAME}> = ${NAME} // 增加类型
export default _${NAME}
EOF

# 获取docs目录路径
DOCS_FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../docs/components" && pwd)

# 生成导入模板文件 \${name}.md
cat <<EOF >"$DOCS_FILE_PATH/${NAME}.md"
# ${NAME} 文档

<script setup>
import ${NAME} from '../../packages/components/${NAME}'

</script>
<${NAME}/>
这个是一个${NAME}组件
EOF