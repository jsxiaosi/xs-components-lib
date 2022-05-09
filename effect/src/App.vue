<template>
	<div>
		组件实例：
		<IButton @click="add"></IButton>
		{{ num }}
	</div>
</template>

<script setup>
import { IButton } from '../../lib/index'
import { useDeveloper } from '../../lib/hooks/useDeveloper'
import { developFn } from '../../lib/utils/myDevelop'

const { num } = useDeveloper()

function add() {
	developFn()
	num.value = num.value + 1
}

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<style>
@import '../../lib/theme-default/button.css';

#app {
	margin-top: 60px;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	color: #2c3e50;
	text-align: center;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
