;(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined'
		? (module.exports = factory(require('vue')))
		: typeof define === 'function' && define.amd
		? define(['vue'], factory)
		: ((global =
				typeof globalThis !== 'undefined' ? globalThis : global || self),
		  (global.index = factory(global.vue)))
})(this, function (vue) {
	'use strict'

	var script = vue.defineComponent({
		name: 'IButton',
		props: {},
		setup() {},
	})

	function render(_ctx, _cache, $props, $setup, $data, $options) {
		return (
			vue.openBlock(),
			vue.createElementBlock('button', null, '这个是一个自定义组件来的')
		)
	}

	script.render = render
	script.__file = 'packages/components/button/src/index.vue'

	script.install = (app) => {
		app.component(script.name, script)
	}
	const InMeAccordionItem = script

	return InMeAccordionItem
})
