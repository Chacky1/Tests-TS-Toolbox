import { it, expect } from 'vitest';

import testPassword from './testPassword';

it('should return true for valid passwords', () => {
  const testPassword1 = 'Abcd1234!';
  const testPassword2 = 'aA1!aA1!';

  expect(testPassword(testPassword1)).toBe(true);
  expect(testPassword(testPassword2)).toBe(true);
});

it('should return false for invalid passwords', () => {
  const smallLength = 'aA1!';
  const noUppercase = 'abcd1234!';
  const noLowercase = 'ABCD1234!';
  const noNumber = 'Abcdefg!';

  expect(testPassword(smallLength)).toBe(false);
  expect(testPassword(noUppercase)).toBe(false);
  expect(testPassword(noLowercase)).toBe(false);
  expect(testPassword(noNumber)).toBe(false);
});
