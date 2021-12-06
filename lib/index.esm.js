import {
	defineComponent as n,
	openBlock as t,
	createElementBlock as e,
} from 'vue'
var o = n({ name: 'IButton', props: {}, setup() {} })
;(o.render = function (n, o, a, r, u, s) {
	return t(), e('button', null, '这个是一个自定义组件来的')
}),
	(o.__file = 'packages/button/src/index.vue'),
	(o.install = (n) => {
		n.component(o.name, o)
	})
const a = o,
	r = [a]
var u = {
	install: function (n) {
		r.forEach((t) => n.component(t.name, t))
	},
	...r,
}
export { a as IButton, u as default }
