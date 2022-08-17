import type { vShow } from 'vue';

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      class?: any;
      style?: any;
    }
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Component: (props: { is: Component | string }) => void;
  }

  export interface ComponentCustomProperties {
    vShow: typeof vShow;
  }
}

export {};
