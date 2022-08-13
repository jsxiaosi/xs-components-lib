import fs from 'fs'
import path from 'path'
import glob from 'fast-glob'

import type { Plugin } from 'vite'

type Append = Record<'headers' | 'footers' | 'scriptSetups', string[]>

export function MarkdownTransform(): Plugin {
	return {
		name: 'element-plus-md-transform',
		enforce: 'pre',
		async transform(code, id) {
			if (!id.endsWith('.md')) return

			const componentId = path.basename(id, '.md')

			const append: Append = {
				headers: [],
				footers: [],
				scriptSetups: [
					`const demos = import.meta.globEager('../example/${componentId}/*.vue')`,
				],
			}

			return combineMarkdown(
				code,
				[combineScriptSetup(append.scriptSetups), ...append.headers],
				append.footers
			)
		},
	}
}

const combineMarkdown = (
	code: string,
	headers: string[],
	footers: string[]
) => {
	const frontmatterEnds = code.indexOf('---\n\n') + 4
	const firstSubheader = code.search(/\n## \w/)
	const sliceIndex = firstSubheader < 0 ? frontmatterEnds : firstSubheader

	console.log(firstSubheader, sliceIndex, code)
	if (headers.length > 0)
		code =
			code.slice(0, sliceIndex) + headers.join('\n') + code.slice(sliceIndex)
	code += footers.join('\n')

	console.log(code)

	return `${code}\n`
}

const combineScriptSetup = (codes: string[]) =>
	`\n\n<script setup>
${codes.join('\n')}
</script>
`
