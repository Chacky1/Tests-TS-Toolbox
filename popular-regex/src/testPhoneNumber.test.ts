import { it, expect } from 'vitest';

import testPhoneNumber from './testPhoneNumber';

it('should return true for valid french phone numbers', () => {
  expect(testPhoneNumber('+33 6 12 34 56 78')).toBe(true);
});

it('should return false for invalid phone numbers', () => {
  const testphoneNumber1 = '123456789';
  const testphoneNumber2 = '';

  expect(testPhoneNumber(testphoneNumber1)).toBe(false);
  expect(testPhoneNumber(testphoneNumber2)).toBe(false);
});
