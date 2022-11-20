'use strict';
const {
    readFile,
    writeFile
} = require('fs'); //* The File System module provides a way of working with the computer's file system.

console.log('Start');

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log(result);
        const first = result;
        readFile('./content/second.txt', 'utf-8', (err, result) => {
            if (err) {
                console.log(err);
                return;
            } else {
                console.log(result);
                const second = result;
                writeFile('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, 'utf-8', (err, result) => {
                    if (err) {
                        console.log(err);
                        return;
                    } else {
                        console.log('Done the task');
                    }
                })
            }
        })
    }
})
console.log('Starting the next task');