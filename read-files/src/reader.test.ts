/* eslint-disable no-unused-vars */
import { describe, it, expect, vi } from 'vitest';
import { promises as fs } from 'fs';

import read from './reader';

vi.mock('fs', () => {
  const promises = {
    readFile: vi.fn(
      (path, encoding) =>
        new Promise((resolve, reject) => {
          resolve('File content');
        })
    ),
  };

  return { promises };
});
vi.mock('path', () => ({
  default: {
    join: (...args: string[]) => args[args.length - 1],
  },
}));

const filename = 'test.txt';

describe('read', () => {
  it('should execute readFile method', () => {
    read(filename);

    expect(fs.readFile).toBeCalledWith(filename, { encoding: 'utf8' });
  });

  it('should return a promise that resolves to "File content" if called correctly', () => {
    expect(read(filename)).resolves.toBe('File content');
  });
});
