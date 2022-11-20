'use strict';
const {readFile} = require('fs');

console.log('Started the first task #1📣 ');


//*readFile() -> Asynchronously reads the entire contents of a file.
//* CHECK file path
console.time();
readFile('../content/first.txt','utf-8',(err,data)=>{
    if (err) {
        console.log(err);
        return;
    } else {
        console.log(data);
        console.log('First task completed!🔔');
    }
})
console.log('Starting the next Task 🎉');
console.timeEnd();

//! The result gets because the readFile function is async! so she offload the callback until it done and keep reading the code.

//! Offloading Processing to Asynchronous Tasks = the aSync function get back off the line

// *Offload expensive processing using asynchronous tasks when that processing is secondary to the purpose of the pages. 
