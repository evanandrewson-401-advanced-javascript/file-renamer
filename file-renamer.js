const fs = require('file-system').promises;

const getFileNumbers = directory => {
  return fs.readdir(directory)
    .then(files => {
      return files.map(entry => entry.slice(0, entry.length - 4))
    });
}

const getPaths = directory => {
  return fs.readdir(directory)
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

const rename = (pathArray, fileNumberArray, contentsArray, timestampsArray) => {
  return Promise.all(pathArray.forEach((file, index) => {
    fs.rename(file, `./files/${contentsArray[index]}-${fileNumberArray[index]}-${timestampsArray[index]}`, err => {
      if(err) {
        throw err;
      }
    });
  }));
}

const fileRenamer = directory => {
  return getFileNumbers(directory)
    .then(fileNumbers => {
      console.log(fileNumbers);
      return getPaths(directory)
        .then(filePaths => {
          console.log(filePaths);
          return getContents(filePaths)
            .then(fileContents => {
              console.log(fileContents);
              return getTimestamps(filePaths)
                .then(timestamps => {
                  console.log(timestamps)
                  return rename(filePaths, fileNumbers, fileContents, timestamps)
                })
            })
        })
    });
}

fileRenamer('./files');

// getFileNumbers('./files').then(filenumbers => console.log(filenumbers));

// getPaths('./files')
//       .then(files => {
//         console.log(files);
//         return rename(files);
//       })
//       .then((indices) => {
//         console.log(indices);
//       });

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
      

module.exports = { getFileNumbers, getPaths, getContents, getTimestamps };