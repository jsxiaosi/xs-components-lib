<script lang="ts" setup>
  defineProps<{
    name: string;
  }>();
</script>

<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>

<style scoped lang="scss">
  .icon {
    width: 1em;
    height: 1em;
    overflow: hidden;
    fill: currentcolor;
    vertical-align: -0.15em;
  }
</style>
