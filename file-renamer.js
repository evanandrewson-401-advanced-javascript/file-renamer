const fs = require('file-system').promises;

// .map(entry => './files/' + entry)

const getPaths = path => {
  return fs.readdir(path)
    .then(files => {
      return files.map(entry => './files/' + entry)
    });
}

const getContents = pathArray => {
  return Promise.all(pathArray.map(path => fs.readFile(path, { encoding: 'utf8' })));
}

const getTimestamps = pathArray => {
  return Promise.all(pathArray.map(path => {
    return fs.stat(path)
      .then(stats => {
        return stats.mtime;
      });
  }));
}

// getPaths('./files')
//       .then(files => {
//         console.log(files);
//         return getTimestamps(files);
//       })
//       .then((timestamps) => {
//         console.log(timestamps);
//       });

// getPaths('./files')
//       .then(files => {
//         console.log(files);
//         return getContents(files);
//       })
//       .then((contents) => {
//         console.log(contents);
//       });
      

module.exports = { getPaths, getContents, getTimestamps };