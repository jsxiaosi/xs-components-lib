<script setup lang="ts">
  // import { IButton } from '@xs-components/index';
  import { useDeveloper } from '@xs-components/hooks/useDeveloper';
  import { developFn } from '@xs-components/utils/myDevelop';

  const { num } = useDeveloper();

  function add() {
    developFn();
    num.value = num.value + 1;
  }

  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div>
    组件实例：
    <IButton @click="add">按钮</IButton>
    {{ num }}
  </div>
</template>

<style>
  #app {
    margin-top: 60px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
