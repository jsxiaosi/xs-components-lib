import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import IconAdmin from '../src/icon-admin.vue';

describe('IconAdmin.vue', () => {
  it('create', () => {
    const wrapper = mount(() => <IconAdmin />);
    expect(wrapper.text()).toContain('IconAdmin components');
  });
});
