import {
	defineComponent as n,
	openBlock as t,
	createElementBlock as o,
} from 'vue'
var e = n({ name: 'IButton', props: {}, setup() {} })
;(e.render = function (n, e, a, r, u, s) {
	return t(), o('button', null, '这个是一个自定义组件来的')
}),
	(e.__file = 'packages/components/button/src/index.vue'),
	(e.install = (n) => {
		n.component(e.name, e)
	})
const a = e,
	r = [a]
var u = {
	install: function (n) {
		r.forEach((t) => n.component(t.name, t))
	},
	...r,
}
export { a as IButton, u as default }
