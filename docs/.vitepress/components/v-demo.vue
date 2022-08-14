<template>
  <ClientOnly>
    <p text="sm" v-html="decodedDescription" />

    <div class="example">
      <Example :file="path" :demo="formatPathDemos[path]" />
      <div class="op-btns">
        <span class="op-btn" @click="copyCode">复制</span>
        <span class="op-btn" @click="toggleSourceVisible">显示源代码</span>
        <!-- <VIcon class="op-btn" name="icon-github"></VIcon>
      <VIcon class="op-btn" name="icon-fuzhi" @click="copyCode"></VIcon>
      <VIcon class="op-btn" name="icon-zitidaima" @click="toggleSourceVisible"></VIcon> -->
      </div>
      <VTransition>
        <SourceCode v-show="sourceVisible" :source="source" />
      </VTransition>
      <Transition name="fade">
        <div v-show="sourceVisible" class="example-float-control" @click="toggleSourceVisible()">
          <!-- <VIcon class="op-btn" name="icon-sanjiao2"></VIcon> -->
          <span>隐藏源代码</span>
        </div>
      </Transition>
    </div>
  </ClientOnly>
</template>
<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { useClipboard } from '@vueuse/core';
  import Example from './v-example.vue';
  import SourceCode from './v-source-code.vue';
  import VTransition from './v-transition.vue';
  // import VIcon from './v-icon.vue';
  import message from './message';

  const props = defineProps<{
    demos: Object;
    source: string;
    path: string;
    rawSource: string;
    description?: string;
  }>();

  const decodedDescription = computed(() => decodeURIComponent(props.description!));

  const formatPathDemos = computed(() => {
    const demos: Object = {};

    Object.keys(props.demos).forEach((key: string) => {
      demos[key.replace('../example/', '').replace('.vue', '')] = props.demos[key].default;
    });
    return demos;
  });

  const { copy, isSupported } = useClipboard({
    source: decodeURIComponent(props.rawSource),
  });

  const copyCode = async () => {
    if (!isSupported) {
      message.error('复制失败');
    }
    try {
      await copy();
      message.info('复制成功');
    } catch (e: any) {
      message.error('复制失败');
    }
  };

  const sourceVisible = ref<boolean>(false);
  const toggleSourceVisible = () => {
    sourceVisible.value = !sourceVisible.value;
  };

  // const formatPathDemos = ref(decodeURIComponent(props.rawSource))
</script>
<style lang="scss">
  .example {
    border: 1px solid var(--vp-c-divider-light);
    border-radius: 8px;
    .op-btns {
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 2.5rem;
      font-size: 14px;
      border-top: 1px solid var(--vp-c-divider-light);

      .op-btn {
        margin: 0 0.5rem;
        cursor: pointer;
        color: var(--vp-c-brand-lighter);
        transition: 0.2s;
        &:hover {
          color: var(--vp-c-brand);
        }
      }
    }
    &-float-control {
      display: flex;
      align-items: center;
      justify-content: center;
      border-top: 1px solid var(--vp-c-divider-light);
      height: 44px;
      box-sizing: border-box;
      // background-color: var(--bg-color, #fff);
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      margin-top: -1px;
      color: var(--vp-c-brand-lighter);
      cursor: pointer;
      position: sticky;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 10;
      font-size: 14px;
      span {
        margin-left: 10px;
      }

      &:hover {
        color: var(--vp-c-brand);
      }
    }
  }
</style>
