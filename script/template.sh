#! /bin/bash

# 脚本文件，运行 npm run ct $NAME 一键创建组件

NAME=$1

# 打印组件目录的完整地址
FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../packages" && pwd)

# 前缀
PREFIX_NAME="I"

# 启动脚本后面是否有写 name
if [ "$#" -ne 1 ] || [ $NAME =~ $re ] || [ "$NAME" == "" ]; then
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
cat > $FILENAME/src/${NAME}.vue <<EOF
<script lang="ts" setup>
  defineOptions({
    name: '${NAME}',
  });

  defineProps<{}>();
</script>
<template>
  <div>
    ${PREFIX_NAME}${NAME} components
  </div>
</template>

<style scoped></style>
EOF

# 生成导入模板文件 index.ts
cat <<EOF >"$FILENAME/index.ts"
import ${NAME} from './src/${NAME}.vue';
import { withInstall } from '../../utils/install';

export const ${PREFIX_NAME}${NAME} = withInstall(${NAME}); // 增加类型

export default ${PREFIX_NAME}${NAME};
EOF

# 获取example目录路径
DOCS_FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../docs/example" && pwd)

# 生成导入模板文件 \${name}.md
mkdir $DOCS_FILE_PATH/${NAME}
cat <<EOF >"$DOCS_FILE_PATH/${NAME}/basic.vue"
<template>
  <div>
    <${PREFIX_NAME}${NAME}></${PREFIX_NAME}${NAME}>
  </div>
</template>
EOF

# 获取docs目录路径
DOCS_FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../docs/components" && pwd)

# 生成导入模板文件 \${name}.md
cat <<EOF >"$DOCS_FILE_PATH/${NAME}.md"
# ${NAME} 文档

:::docs ${PREFIX_NAME}${NAME}组件

${NAME}/basic

:::
EOF