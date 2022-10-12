import { it, expect } from 'vitest';

import testEmail from './testEmail';

it('should return true for valid emails', () => {
  const validEmail = 'th.alban@outlook.fr';

  expect(testEmail(validEmail)).toBe(true);
});

it('should return false for invalid emails', () => {
  const noAtEmail = 'th.albanoutlook.fr';
  const noDotEmail = 'th.alban@outlookfr';
  const noDomainEmail = 'th.alban@outlook';
  const noNameEmail = '@outlook.fr';

  expect(testEmail(noAtEmail)).toBe(false);
  expect(testEmail(noDotEmail)).toBe(false);
  expect(testEmail(noDomainEmail)).toBe(false);
  expect(testEmail(noNameEmail)).toBe(false);
});
