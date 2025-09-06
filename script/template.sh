#! /bin/bash

# 脚本文件，运行 npm run ct $NAME 一键创建组件

NAME=$1

# 打印组件目录的完整地址
FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../packages" && pwd)

# 前缀
PREFIX_NAME="I"

# 启动脚本后面是否有写 name
if [ "$#" -ne 1 ] || [ "$NAME" == "" ]; then
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
mkdir -p "$FILENAME/__tests__"

# 标准组件命名
HANDLE_NAME=""
for i in $(echo $NAME | sed 's/[_|-]\([a-z]\)/\ \1/;s/^\([a-z]\)/\ \1/'); do
  C=$(echo "${i:0:1}" | tr "[:lower:]" "[:upper:]")
  HANDLE_NAME="$HANDLE_NAME${C}${i:1}"
done
COM_NAME=$HANDLE_NAME

# 生成文件.vue 并写入模板
cat > $FILENAME/src/${NAME}.vue <<EOF
<script lang="ts" setup>
  import { ${COM_NAME}Props } from './${NAME}';
  defineProps(${COM_NAME}Props);
  defineOptions({
    name: '${PREFIX_NAME}${COM_NAME}',
  });
</script>

<template>
  <div> ${PREFIX_NAME}${COM_NAME} components </div>
</template>

<style scoped></style>
EOF

# 生成类型文件
cat > $FILENAME/src/${NAME}.ts <<EOF
import type { ExtractPropTypes } from 'vue';
import type ${COM_NAME} from './${NAME}.vue';

export const ${COM_NAME}Props = {};

export type ${COM_NAME}PropsType = ExtractPropTypes<typeof ${COM_NAME}Props>;
export type ${COM_NAME}Instance = InstanceType<typeof ${COM_NAME}>;
EOF

# 生成test
cat > $FILENAME/__tests__/${NAME}.test.tsx <<EOF
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import ${COM_NAME} from '../src/${NAME}.vue';

describe('${COM_NAME}.vue', () => {
  it('create', () => {
    const wrapper = mount(() => <${COM_NAME} />);
    expect(wrapper.text()).toContain('${COM_NAME} components');
  });
});
EOF

# 生成导入模板文件 index.ts
cat <<EOF >"$FILENAME/index.ts"
import { withInstall } from '../../utils/install';
import ${COM_NAME} from './src/${NAME}.vue';

export const ${PREFIX_NAME}${COM_NAME} = withInstall(${COM_NAME}); // 增加类型

export default ${PREFIX_NAME}${COM_NAME};
EOF

# 获取example目录路径
DOCS_FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../docs/example" && pwd)

# 生成导入模板文件 \${name}.md
mkdir $DOCS_FILE_PATH/${NAME}
cat <<EOF >"$DOCS_FILE_PATH/${NAME}/basic.vue"
<template>
  <div>
    <${PREFIX_NAME}${COM_NAME}></${PREFIX_NAME}${COM_NAME}>
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