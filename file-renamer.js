const fs = require('file-system');

const readDir = path => {
  return fs.readdirSync(path);
}

// const readFile = path => {

// }

console.log(readDir('./files'));

module.exports = { readDir }