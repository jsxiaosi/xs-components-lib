module.exports = {
	root: true,
	globals: {
		defineProps: 'readonly',
		defineEmits: 'readonly',
		defineExpose: 'readonly',
		withDefaults: 'readonly',
	},
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
	},
	extends: [
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:prettier/recommended',
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 2016,
		parser: '@typescript-eslint/parser',
		// 对Babel解析器的包装使其与 ESLint 兼容。
		// parser: 'babel-eslint',
		// 代码是 ECMAScript 模块
		sourceType: 'module',
	},
	plugins: ['vue'],
	rules: {
		// 'prettier/prettier': 'error',
		// 是否禁止使用any类型
		'@typescript-eslint/no-explicit-any': 'off',
		// 是否开启函数必须要指定类型
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		// 是否禁止使用 @ts-ignore 注解
		'@typescript-eslint/ban-ts-comment': 'off',
		// 是否禁止空函数
		'@typescript-eslint/no-empty-function': 'off',
		// 是否禁止使用特定类型
		'@typescript-eslint/ban-types': 'off',
		'vue/no-multiple-template-root': 'off',
		camelcase: 0,
		'vue/component-tags-order': [
			'error',
			{
				order: ['template', 'script', 'style'],
			},
		],
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
			},
		],
		'no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
			},
		],
	},
}
