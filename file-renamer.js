const fs = require('file-system').promises;

// .map(entry => './files/' + entry)

const getPaths = path => {
  return fs.readdir(path)
    .then(files => {
      return files.map(entry => './files/' + entry)
    });
}

const readFile = path => {
  return fs.readFileSync(path);
}

getPaths('./files').then(files => {
  console.log(files);
})

module.exports = { getPaths, readFile }