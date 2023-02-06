module.exports = {
  plugins: ['stylelint-scss', 'stylelint-order'],
  customSyntax: 'postcss-html',
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    indentation: 2, // 缩进2个空格
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['mixin', 'extend', 'content', 'include'],
      },
    ],
    'no-descending-specificity': null, // 禁止特异性较低的选择器在特异性较高的选择器之后重写
    'no-empty-source': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export'],
      },
    ],
    // 关闭禁用位置属性，这个对scss导出变量有问题
    'property-no-unknown': null,
    // https://github.com/kristerkari/stylelint-scss scsslint规范配置
    'scss/comment-no-loud': true, // 禁止使用/*注释
    'scss/comment-no-empty': true, // 禁止空注释
  },
  ignoreFiles: ['**/*.js', '**/*.ts'],
};
