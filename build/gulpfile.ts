import { series, parallel, TaskFunction } from 'gulp'
import path from 'path'

// 基础方法
import { buildModules } from './tasks/modules'
import { buildOutput } from './utils/paths'
import { generateTypesDefinitions } from './tasks/types-definitions'
import { buildConfig, Module } from './utils/build-info'
import { copy } from 'fs-extra'
import { buildTheme } from './tasks/theme/gulpfile.prod'
import { deleteSync } from 'del'

export const withTaskName = <T extends TaskFunction>(name: string, fn: T) =>
  Object.assign(fn, { displayName: name })

export const copyTypesDefinitions: TaskFunction = (done) => {
  const src = path.resolve(buildOutput, 'types', 'packages')
  const copyTypes = (module: Module) =>
    withTaskName(`copyTypes:${module}`, () =>
      copy(src, buildConfig[module].output.path, { recursive: true })
    )

  return parallel(copyTypes('esm'), copyTypes('cjs'))(done)
}

export const clean: TaskFunction = (done) => {
	deleteSync(
		buildOutput,
		{ force: true }
	)
	done()
}

export default series(clean, buildTheme, parallel(buildModules, generateTypesDefinitions), parallel(copyTypesDefinitions))
