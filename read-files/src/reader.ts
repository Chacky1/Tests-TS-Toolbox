import path from 'path';
import { promises as fs } from 'fs';

const read = (filename: string) => {
  const storagePath = path.join(process.cwd(), 'data', filename);
  return fs.readFile(storagePath, { encoding: 'utf8' });
};

export default read;
