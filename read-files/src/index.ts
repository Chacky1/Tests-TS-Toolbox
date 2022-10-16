import read from './reader';
import log from './logger';

const filename = 'test.txt';

const main = async () => {
  try {
    const fileContent = await read(filename);
    log(fileContent);
  } catch (error: any) {
    log(error.message);
  }
};

main();
