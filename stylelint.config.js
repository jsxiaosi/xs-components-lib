export default {
  root: true,
  extends: ['stylelint-config-standard', 'stylelint-config-property-sort-order-smacss'],
  plugins: ['stylelint-order'],
  overrides: [
    {
      files: ['**/*.(css|html|vue)'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['*.scss', '**/*.scss'],
      extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue/scss'],
      customSyntax: 'postcss-scss',
      rule: {
        'scss/percent-placeholder-pattern': null,
      },
    },
  ],
  rules: {
    'keyframes-name-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep', 'global'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
      },
    ],
    // BEM 命名规范
    'selector-class-pattern': '^.[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$',
    'no-descending-specificity': null,
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
