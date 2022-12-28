'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defInstall = require('./defInstall.js');
require('./components/index.js');
require('./hooks/index.js');
require('./utils/index.js');
var index = require('./components/button/index.js');
var index$1 = require('./hooks/useDeveloper/index.js');
var install = require('./utils/install.js');
var myDevelop = require('./utils/myDevelop.js');



exports.default = defInstall.default;
exports.IButton = index.IButton;
exports.useDeveloper = index$1.useDeveloper;
exports.withInstall = install.withInstall;
exports.developFn = myDevelop.developFn;
//# sourceMappingURL=index.js.map
