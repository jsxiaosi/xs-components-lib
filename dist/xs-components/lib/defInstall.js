'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./components/button/index.js');

const component = [index.IButton];
function install(app) {
  component.forEach((i) => app.use(i));
}

exports.default = install;
//# sourceMappingURL=defInstall.js.map
