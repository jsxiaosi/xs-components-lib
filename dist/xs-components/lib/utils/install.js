'use strict';

const withInstall = (main) => {
  main.install = (app) => {
    const comp = main;
    app.component(comp.name, comp);
  };
  return main;
};

exports.withInstall = withInstall;
//# sourceMappingURL=install.js.map
