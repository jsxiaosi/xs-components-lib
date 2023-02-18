<script lang="ts" setup>
  import { ButtonProps } from './button';

  defineProps(ButtonProps);

  defineOptions({
    name: 'IButton',
  });
</script>

<template>
  <button class="mu_Button" :class="type">
    <slot></slot>
  </button>
</template>

<style scoped></style>
