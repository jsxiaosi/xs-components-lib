import { defineComponent, openBlock, createElementBlock, normalizeClass, renderSlot } from 'vue';
import lodash from 'lodash';

const __default__ = defineComponent({
  name: "IButton"
});
var _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    type: { type: String, required: false, default: "primary" }
  },
  setup(__props) {
    console.log(lodash.chunk(["a", "b", "c", "d"], 2));
    ;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["mu_Button", __props.type])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=button.vue2.mjs.map
