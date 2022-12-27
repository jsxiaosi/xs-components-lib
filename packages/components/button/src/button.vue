<script lang="ts" setup>
  import lodash from 'lodash';

  withDefaults(
    defineProps<{
      type?: 'primary' | 'success' | 'error';
    }>(),
    {
      type: 'primary',
    },
  );
  console.log(lodash.chunk(['a', 'b', 'c', 'd'], 2));
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
