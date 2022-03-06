/**
 * feature
 * fixbug 修复
 * refactor：重构代码(既没有新增功能，也没有修复 bug)
 * docs：文档更新
 * style：不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
 * perf：性能, 体验优化
 * chore：不属于以上类型的其他类型，比如构建流程, 依赖管理
 * revert：回滚某个更早之前的提交
 */

module.exports = {
	// 可选类型
	types: [
		{ emoji: '🚀', value: 'feature', name: 'feature:   新功能' },
		{ emoji: '🐛', value: 'fixbug', name: 'fixbug:    修复' },
		{ emoji: '📝', value: 'docs', name: 'docs:      文档变更' },
		{
			emoji: '💅',
			value: 'style',
			name: 'style:     不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)',
		},
		{
			emoji: '🔍',
			value: 'refactor',
			name: 'refactor:  重构（既不是增加feature）,也不是修复bug',
		},
		{ emoji: '💡', value: 'pref', name: 'pref:      性能优化' },
		{
			emoji: '🤖',
			value: 'chore',
			name: 'chore:     不属于以上类型的其他类型，比如构建流程, 依赖管理',
		},
		{ emoji: '⏪', value: 'revert', name: 'revert:    回退' },
	],

	// 步骤
	messages: {
		type: '请选择提交的类型；',
		customScope: '请输入修改的范围（可选）',
		subject: '请简要描述提交（必填）',
		body: '请输入详细描述（可选）',
		footer: '请选择要关闭的issue（可选）',
		confirmCommit: '确认要使用以上信息提交？（y/n）',
	},

	// 跳过步骤
	skipQuestions: ['scope', 'customScope', 'body', 'footer'],

	// 默认长度
	subjectLimit: 100,
}
