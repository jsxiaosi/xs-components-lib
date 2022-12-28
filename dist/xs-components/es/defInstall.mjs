import { IButton } from './components/button/index.mjs';

const component = [IButton];
function install(app) {
  component.forEach((i) => app.use(i));
}

export { install as default };
//# sourceMappingURL=defInstall.mjs.map
