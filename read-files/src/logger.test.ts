import { describe, it, expect } from 'vitest';

import log from './logger';

describe('log', () => {
  it('should log a message', () => {
    const message = 'hello';

    expect(log(message)).toBeUndefined();
  });
});
