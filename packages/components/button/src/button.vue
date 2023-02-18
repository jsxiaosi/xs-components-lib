<script lang="ts" setup>
  withDefaults(
    defineProps<{
      type?: 'primary' | 'success' | 'error';
    }>(),
    {
      type: 'primary',
    },
  );
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
