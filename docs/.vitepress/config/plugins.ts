import path from 'path';
import fs from 'fs';
import MarkdownIt from 'markdown-it';
import mdContainer from 'markdown-it-container';
import type Token from 'markdown-it/lib/token';
import type Renderer from 'markdown-it/lib/renderer';
import { projRoot } from '../utils/paths';
import { red } from 'kolorist';
import { highlight } from '../utils/highlight';

const localMd = MarkdownIt();

interface ContainerOpts {
  marker?: string | undefined;
  validate?(params: string): boolean;
  render?(tokens: Token[], index: number, options: any, env: any, self: Renderer): string;
}

export const mdPlugin = (md: markdownit) => {
  // markdown-it-container 解析自定义容器 https://github.com/markdown-it/markdown-it-container#readme
  md.use(mdContainer, 'demo', {
    // 匹配markdown是否包含容器
    validate(params: string) {
      return !!params.trim().match(/^demo\s*(.*)$/);
    },
    // 容器渲染处理
    render(tokens, idx) {
      if (tokens[idx].nesting === 1) {
        // 匹配demo字符串，并截取demo后面的描述
        const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
        const description = m && m.length > 1 ? m[1] : '';

        // 从token流获取容器内容块
        const sourceFileToken = tokens[idx + 2];
        let source = '';
        const sourceFile = sourceFileToken.children?.[0].content ?? '';

        // 判断是否是内容块是否是inline类型
        if (sourceFileToken.type === 'inline') {
          // 查找示例文件
          try {
            // 如果查找不到文件抛出异常
            source = fs.readFileSync(
              path.resolve(projRoot, 'example', `${sourceFile}.vue`),
              'utf-8',
            );
          } catch (error) {
            console.error(red((error as Error).message));
            throw new Error(`example目录不存在: ${sourceFile} 目录或者文件`);
          }
        }

        /**
         * 渲染自定义内容
         * @param source
         * @param path 文件路径
         * @param rawSource 文件内容
         * @param description 描述 localMd.render 按照原始Markdown去处理内容转换标签
         */
        return `<Demo :demos="demos" source="${encodeURIComponent(
          highlight(source, 'vue'),
        )}" path="${sourceFile}" raw-source="${encodeURIComponent(
          source,
        )}" description="${encodeURIComponent(localMd.render(description))}">`;
      }

      return '</Demo>';
    },
  } as ContainerOpts);
};
