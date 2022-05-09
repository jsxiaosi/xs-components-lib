import { defineComponent, openBlock, createElementBlock } from 'vue'

var script = defineComponent({
	name: 'IButton',
	props: {},
	setup() {},
})

const _hoisted_1 = { class: 'mu_Button' }

function render(_ctx, _cache, $props, $setup, $data, $options) {
	return (
		openBlock(),
		createElementBlock('button', _hoisted_1, '这个是一个自定义组件来的')
	)
}

script.render = render
script.__file = 'packages/components/button/src/index.vue'

script.install = (app) => {
	app.component(script.name, script)
}
const InMeAccordionItem = script

export { InMeAccordionItem as default }
