import { defineComponent, openBlock, createElementBlock } from 'vue'

var script = defineComponent({
	name: 'IButton',
	props: {},
	setup() {},
})

function render(_ctx, _cache, $props, $setup, $data, $options) {
	return (
		openBlock(), createElementBlock('button', null, '这个是一个自定义组件来的')
	)
}

script.render = render
script.__file = 'packages/button/src/index.vue'

script.install = (app) => {
	app.component(script.name, script)
}
const InMeAccordionItem = script

export { InMeAccordionItem as default }
