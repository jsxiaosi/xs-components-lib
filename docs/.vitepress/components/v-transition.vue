<template>
	<transition name="collapse-transition" v-on="on">
		<slot />
	</transition>
</template>
<script lang="ts" setup>
import type { RendererElement } from '@vue/runtime-core'

const on = {
	beforeEnter(el: RendererElement) {
		if (!el.dataset) el.dataset = {}

		el.dataset.oldPaddingTop = el.style.paddingTop
		el.dataset.oldPaddingBottom = el.style.paddingBottom

		el.style.maxHeight = 0
		el.style.paddingTop = 0
		el.style.paddingBottom = 0
	},

	enter(el: RendererElement) {
		el.dataset.oldOverflow = el.style.overflow
		if (el.scrollHeight !== 0) {
			el.style.maxHeight = `${el.scrollHeight}px`
			el.style.paddingTop = el.dataset.oldPaddingTop
			el.style.paddingBottom = el.dataset.oldPaddingBottom
		} else {
			el.style.maxHeight = 0
			el.style.paddingTop = el.dataset.oldPaddingTop
			el.style.paddingBottom = el.dataset.oldPaddingBottom
		}

		el.style.overflow = 'hidden'
	},

	afterEnter(el: RendererElement) {
		el.style.maxHeight = ''
		el.style.overflow = el.dataset.oldOverflow
	},

	beforeLeave(el: RendererElement) {
		if (!el.dataset) el.dataset = {}
		el.dataset.oldPaddingTop = el.style.paddingTop
		el.dataset.oldPaddingBottom = el.style.paddingBottom
		el.dataset.oldOverflow = el.style.overflow

		el.style.maxHeight = `${el.scrollHeight}px`
		el.style.overflow = 'hidden'
	},

	leave(el: RendererElement) {
		if (el.scrollHeight !== 0) {
			el.style.maxHeight = 0
			el.style.paddingTop = 0
			el.style.paddingBottom = 0
		}
	},

	afterLeave(el: RendererElement) {
		el.style.maxHeight = ''
		el.style.overflow = el.dataset.oldOverflow
		el.style.paddingTop = el.dataset.oldPaddingTop
		el.style.paddingBottom = el.dataset.oldPaddingBottom
	},
}
</script>

<style lang="scss">
.collapse-transition-enter-active,
.collapse-transition-leave-active {
	transition: height 0.3s ease-in-out, padding 0.3s ease-in-out,
		max-height 0.3s ease-in-out;
}
</style>
