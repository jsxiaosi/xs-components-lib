import { resolve } from 'path'

export const projRoot = resolve(__dirname, '..', '..')

// Docs
export const docsDirName = 'docs'
export const docRoot = resolve(projRoot, docsDirName)


// dist
export const PKG_NAME = 'xs-components'
export const buildOutput = resolve(projRoot, 'dist')
// dist/xs-components
export const epOutput = resolve(buildOutput, PKG_NAME)
export const pkgRoot = resolve(projRoot, 'packages')
export const epRoot = resolve(pkgRoot, PKG_NAME)