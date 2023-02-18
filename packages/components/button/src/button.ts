import type { ExtractPropTypes, PropType } from 'vue';
import type button from './button.vue';

export type Type = 'primary' | 'success' | 'error';

export const ButtonProps = {
  type: {
    type: String as PropType<Type>,
    default: 'default',
  },
};

export type ButtonPropsType = ExtractPropTypes<typeof ButtonProps>;
export type ButtonInstanceType = InstanceType<typeof button>;
