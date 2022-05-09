import {
	defineComponent as n,
	openBlock as t,
	createElementBlock as o,
} from 'vue'
var e = n({ name: 'IButton', props: {}, setup() {} })
const a = { class: 'mu_Button' }
;(e.render = function (n, e, s, u, r, c) {
	return t(), o('button', a, '这个是一个自定义组件来的')
}),
	(e.__file = 'packages/components/button/src/index.vue'),
	(e.install = (n) => {
		n.component(e.name, e)
	})
const s = e,
	u = [s]
var r = {
	install: function (n) {
		u.forEach((t) => n.component(t.name, t))
	},
	...u,
}
export { s as IButton, r as default }
