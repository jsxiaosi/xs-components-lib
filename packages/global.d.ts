// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    IButton: typeof import('xs-components')['IButton'];
  }
}

export {};
