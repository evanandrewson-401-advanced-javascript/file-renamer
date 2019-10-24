const { getPaths, readFile } = require('../file-renamer');

const path = './files'

describe('File renamer', () => {
  it('gets an array of the file names', () => {
    expect(getPaths(path)).toEqual([
      './files/1.txt', './files/10.txt',
      './files/2.txt', './files/3.txt',
      './files/4.txt', './files/5.txt',
      './files/6.txt', './files/7.txt',
      './files/8.txt', './files/9.txt'
    ]);
  });
  // it('gets an array of the file contents', () => {
  //   const files = readDir(path);
  //   expect(files.map(readFile)).toEqual
  // })
})