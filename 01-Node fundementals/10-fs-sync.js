
const fs = require('fs'); //* The File System module provides a way of working with the computer's file system.


console.log('Start');
const first = fs.readFileSync('./content/first.txt','utf-8');
const second = fs.readFileSync('./content/second.txt','utf-8');
const htmlFile = fs.readFileSync('./content/index.html','utf-8');

const write = fs.writeFileSync('./content/result-sync.txt',
`Hello world. this is the result: ${first} & ${second}`,{flag:'a'})//! by default we are overwriting but when we add the flag we say node appendChild = add to the current text.
console.log(first);
console.log(second);

console.log('Done with the task');
console.log('Start the next task');

const third = fs.readFileSync('./content/result-sync.txt','utf-8');
console.log(third);

// console.log(htmlFile);
