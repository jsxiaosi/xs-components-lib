<template>
	<div class="example">
		<Example :file="path" :demo="formatPathDemos[path]" />
		<div class="op-btns">
			<span @click="showsourec" class="op-btn github">展开</span>
		</div>
		<VTransition>
			<SourceCode v-show="sourceVisible" :source="source" />
		</VTransition>
	</div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import Example from './v-example.vue'
import SourceCode from './v-source-code.vue'
import VTransition from './v-transition.vue'

const props = defineProps<{
	demos: Object
	source: string
	path: string
	rawSource: string
	description?: string
}>()

const formatPathDemos = computed(() => {
	const demos: Object = {}

	Object.keys(props.demos).forEach((key: string) => {
		console.log(props.demos[key])

		demos[key.replace('../example/', '').replace('.vue', '')] =
			props.demos[key].default
	})
	return demos
})

const sourceVisible = ref<boolean>(false)
const showsourec = () => {
	sourceVisible.value = !sourceVisible.value
}

// const formatPathDemos = ref(decodeURIComponent(props.rawSource))
</script>
<style lang="scss">
.example {
	border: 1px solid var(--vp-c-divider-light);
	border-radius: 8px;
	.op-btns {
		padding: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		height: 2.5rem;
		border-top: 1px solid var(--vp-c-divider-light);

		.op-btn {
			margin: 0 0.5rem;
			cursor: pointer;
			color: var(--vp-c-text-2);
			transition: 0.2s;
		}
	}
}
</style>
