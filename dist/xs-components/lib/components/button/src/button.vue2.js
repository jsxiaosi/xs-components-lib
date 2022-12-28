'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var lodash = require('lodash');

const __default__ = vue.defineComponent({
  name: "IButton"
});
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: {
    type: { type: String, required: false, default: "primary" }
  },
  setup(__props) {
    console.log(lodash.chunk(["a", "b", "c", "d"], 2));
    ;
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", {
        class: vue.normalizeClass(["mu_Button", __props.type])
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=button.vue2.js.map
