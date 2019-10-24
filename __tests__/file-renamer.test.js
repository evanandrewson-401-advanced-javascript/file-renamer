const { readDir } = require('../file-renamer');

describe('File renamer', () => {
  it('gets an array of the file names', () => {
    const path = './files'
    expect(readDir(path)).toEqual([
      '1.txt', '10.txt',
      '2.txt', '3.txt',
      '4.txt', '5.txt',
      '6.txt', '7.txt',
      '8.txt', '9.txt'
    ]);
  });
})