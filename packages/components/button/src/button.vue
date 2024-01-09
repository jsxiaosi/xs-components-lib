<script lang="ts" setup>
  import { ButtonProps } from './button';

  defineProps(ButtonProps);

  defineOptions({
    name: 'IButton',
  });
</script>

<template>
  <button class="mu-button" :class="type">
    <slot></slot>
  </button>
</template>
