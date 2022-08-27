<script lang="ts" setup>
  defineOptions({
    name: 'IButton',
  });

  defineProps<{
    type: 'primary' | 'success' | 'error';
  }>();
</script>
<template>
  <button class="mu_Button" :class="type">
    <slot></slot>
  </button>
</template>

<style scoped></style>
