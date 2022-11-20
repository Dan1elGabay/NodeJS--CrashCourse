const path = require('path');

console.log(path.sep);
const filePath = path.join('/content','subfolder','test.txt') //*create a path code line
//! Often join all arguments together and normalize the resulting path.
console.log(filePath);
const base = path.basename(filePath) //* returns the last transferred path.
//!  Often used to extract the file name from a fully qualified path
console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);