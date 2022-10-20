/* eslint-disable @typescript-eslint/no-var-requires */
// CommonJS
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const scopes = fs.readdirSync(path.resolve(__dirname, 'packages'));

const gitStatus = execSync('git status --porcelain || true').toString().trim().split('\n');

const scopeComplete = gitStatus
  .find((r) => ~r.indexOf('M  packages'))
  ?.replace(/(\/)/g, '%%')
  ?.match(/packages%%((\w|-)*)/)?.[1];

const subjectComplete = gitStatus
  .find((r) => ~r.indexOf('M  packages'))
  ?.replace(/\//g, '%%')
  ?.match(/packages%%((\w|-)*)/)?.[1];

module.exports = {
  extends: ['@jsxiaosi/commitlint-config'],
  prompt: {
    // 范围设置
    scopes: [...scopes, 'mock'],
    // 范围是否可以多选
    enableMultipleScopes: true,
    // 多选范围后用标识符隔开
    scopeEnumSeparator: ',',
    //  设置 选择范围 中 为空选项(empty) 和 自定义选项(custom) 的 位置
    customScopesAlign: !scopeComplete ? 'top' : 'bottom',
    // 如果 defaultScope 与在选择范围列表项中的 value 相匹配就会进行星标置顶操作。
    defaultScope: scopeComplete,
    // 描述预设值
    defaultSubject: subjectComplete && `[${subjectComplete}] `,
  },
};
