const withInstall = (main) => {
  main.install = (app) => {
    const comp = main;
    app.component(comp.name, comp);
  };
  return main;
};

export { withInstall };
//# sourceMappingURL=install.mjs.map
