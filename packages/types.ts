import type { AppContext, Plugin } from 'vue';

export type SFCWithInstall<T> = T & Plugin;

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null;
};

export type PublicProps<T, U = {}> = Readonly<T> & U; // vue 的公共 props
