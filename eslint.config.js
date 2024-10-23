import jsxiaosiConfig from '@jsxiaosi/eslint-config';

export default jsxiaosiConfig(
  {
    vue: true,
    prettier: {
      usePrettierrc: true,
    },
  },
  {
    rules: {
      'no-console': 'off',
    },
    ignores: ['docs/.vitepress/dist/*', 'lib/'],
  },
);
