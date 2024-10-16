import { describe, expect, it } from 'vitest';

import { useDeveloper } from '..';

describe('useDeveloper', () => {
  it('create', () => {
    const { num } = useDeveloper();
    expect(num.value).toBe(0);
  });
});
