import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Button from '../src/button.vue';

describe('Button.vue', () => {
  it('create', () => {
    const wrapper = mount(() => <Button>button</Button>);
    expect(wrapper.text()).toContain('button');
  });

  it('button primary', () => {
    const wrapper = mount(() => <Button type="primary">primary</Button>);
    expect(wrapper.classes()).toContain('primary');
  });

  it('button error', () => {
    const wrapper = mount(() => <Button type="error">error</Button>);
    expect(wrapper.classes()).toContain('error');
  });
});
