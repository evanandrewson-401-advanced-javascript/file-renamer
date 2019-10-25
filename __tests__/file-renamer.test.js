const { getPaths, getContents } = require('../file-renamer');

const path = './files'

describe('File renamer', () => {
  it('gets an array of the file names', () => {
    getPaths(path)
    .then(files => {
      expect(files).toEqual([
        './files/1.txt', './files/10.txt',
        './files/2.txt', './files/3.txt',
        './files/4.txt', './files/5.txt',
        './files/6.txt', './files/7.txt',
        './files/8.txt', './files/9.txt'
      ]);
    });
  });
  it('gets an array of the file contents', () => {
    getPaths(path)
      .then(files => {
        return getContents(files);
      })
      .then(results => {
        expect(results).toEqual([
          'one',
          'ten',
          'two',
          'three',
          'four',
          'five',
          'six',
          'seven',
          'eight',
          'nine'
        ])
      });
  })
})