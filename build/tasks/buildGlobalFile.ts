import fs from 'fs';
import path from 'path';
import { transformString } from '@jsxiaosi/utils';
import { epOutput, PKG_NAME, pkgRoot } from '../utils/paths';

const excludeComponents: string[] = [];

export async function buildGlobalTypeFile() {
  const componentsDir = path.join(pkgRoot, 'components');
  const components = fs.readdirSync(componentsDir);

  const componentDeclarations = components
    .filter(componentName => !componentName.endsWith('.ts') && !excludeComponents.includes(componentName))
    .map(
      componentName =>
        `I${transformString(
          componentName,
          'upperCamelCase',
        )}: typeof import('${PKG_NAME}')['I${transformString(componentName, 'upperCamelCase')}'];`,
    )
    .join('\n    ');
  console.log('componentDeclarations', componentDeclarations);
  const content = `
// GlobalComponents for Volar
declare module 'vue' {
  export interface GlobalComponents {
    ${componentDeclarations}
  }
}

export {};
  `;

  fs.writeFileSync(path.resolve(epOutput, 'global.d.ts'), content);
}
