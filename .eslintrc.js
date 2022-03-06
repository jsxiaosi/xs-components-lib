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
		ecmaVersion: 2020,
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	// plugins: ['vue'],
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
		// 是否不允许向模板添加多个根节点
		'vue/no-multiple-template-root': 'off',
		camelcase: 0,
		'vue/component-tags-order': [
			'error',
			{
				order: ['template', 'script', 'style'],
			},
		],
		// 是否要求组件名称始终为多字
		'vue/multi-word-component-names': [
			'error',
			{
				ignores: ['index'],
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
