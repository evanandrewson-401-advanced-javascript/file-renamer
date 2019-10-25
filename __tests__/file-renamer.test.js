const { getPaths, getContents, getTimestamps } = require('../file-renamer');

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
  });
  it('gets an array of the timestamps', () => {
    getPaths(path)
      .then(files => {
        return getTimestamps(files);
      })
      .then(results => {
        expect(results).toEqual([
          '2019-10-24T22:43:19.602Z',
          '2019-10-24T22:43:51.901Z',
          '2019-10-24T22:43:22.466Z',
          '2019-10-24T22:43:25.670Z',
          '2019-10-24T22:43:27.766Z',
          '2019-10-24T22:43:30.170Z',
          '2019-10-24T22:43:32.542Z',
          '2019-10-24T22:43:39.233Z',
          '2019-10-24T22:43:44.137Z',
          '2019-10-24T22:43:48.297Z'
        ])
      })
  })
})