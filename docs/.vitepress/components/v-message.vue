<script lang="ts" setup>
  import { ref } from 'vue';

  let seed = 0;
  function getUuid() {
    return 'message_' + seed++;
  }

  const messages = ref<{ name: string; type: string; content: string }[]>([]);

  function add(props) {
    const name = getUuid();

    const _message = { name, ...props };

    messages.value.push(_message);

    // 定时移除，单位：秒
    const duration = props.duration;
    setTimeout(() => {
      remove(name);
    }, duration * 1000);
  }

  function remove(name) {
    for (const [i, v] of messages.value.entries()) {
      if (v.name === name) {
        messages.value.splice(i, 1);
        break;
      }
    }
  }

  defineExpose({
    add,
    remove,
  });
</script>

<template>
  <transition-group name="demoblock-fade" tag="div" class="demoblock-message-wrap">
    <div
      v-for="item in messages"
      :key="item.name"
      :class="['demoblock-message', item.type ? `demoblock-message-${item.type}` : '']"
    >
      <div class="demoblock-message-content">{{ item.content }}</div>
    </div>
  </transition-group>
</template>

<style scoped>
  .demoblock-message-wrap {
    display: flex;
    position: fixed;
    z-index: 1000;
    top: 16px;
    flex-direction: column;
    align-items: center;
    width: 100%;
    pointer-events: none;
  }

  .demoblock-message-content {
    display: inline-block;
    margin-bottom: 8px;
    padding: 8px 16px;
    border-radius: 2px;
    border-color: var(--vp-c-bg);
    background: var(--vp-c-bg);
    box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
    color: var(--vp-c-green);
  }

  .demoblock-message-error .demoblock-message-content {
    color: var(--vp-c-red);
  }

  .demoblock-message {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-size: 14px;
  }

  .demoblock-fade-enter-from {
    transform: scale(0.8);
    opacity: 0;
  }

  .demoblock-fade-leave-active {
    position: absolute;
  }

  .demoblock-fade-leave-to {
    transform: translateY(-100%);
    opacity: 0;
  }
</style>
