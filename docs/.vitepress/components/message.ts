import { createApp, h } from 'vue';
import VMessage from './v-message.vue';

// newInstance
VMessage.newInstance = (props = {}) => {
  const container = document.createElement('div');

  const app = createApp({
    render() {
      return h(VMessage, {
        ...props,
        ref: 'messageRef',
      });
    },
  });

  const instance = app.mount(container);
  const messageRef = instance.$refs.messageRef as Record<string, any>;
  document.body.appendChild(container.firstElementChild as Element);

  return {
    add(messageProps) {
      messageRef.add(messageProps);
    },
    remove(name) {
      messageRef.remove(name);
    },
  };
};

// message
let messageInstance;

function getMessageInstance() {
  messageInstance = messageInstance || VMessage.newInstance();
  return messageInstance;
}

function message(content, { duration = 3, type = '' }) {
  const instance = getMessageInstance();

  instance.add({ content, duration, type });
}

export default {
  info(content, options?) {
    return message(content, { ...options });
  },
  error(content, options?) {
    return message(content, { ...options, type: 'error' });
  },
};
