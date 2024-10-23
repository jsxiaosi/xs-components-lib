// GlobalComponents for Volar
declare module 'vue' {
  export interface GlobalComponents {
    IButton: (typeof import('xs-components'))['IButton'];
  }
}

export {};
