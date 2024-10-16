<script lang="ts" setup>
  import { ButtonProps } from './button';

  defineOptions({
    name: 'IButton',
  });

  defineProps(ButtonProps);
</script>

<template>
  <button class="mu-button" :class="type">
    <slot />
  </button>
</template>
