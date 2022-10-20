<script lang="ts" setup>
  defineProps<{
    type: 'primary' | 'success' | 'error';
  }>();

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
