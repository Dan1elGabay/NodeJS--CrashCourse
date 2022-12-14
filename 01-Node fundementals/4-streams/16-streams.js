//*What are streams?
//*Streams are one of the fundamental concepts that power Node.js applications. They are data-handling method and are used to read or write input into output sequentially.
//*Streams are a way to handle reading/writing files, network communications, or any kind of end-to-end information exchange in an efficient way.
//*What makes streams unique, is that instead of a program reading a file into memory all at once like in the traditional way, streams read chunks of data piece by piece, processing its content without keeping it all in memory.
//*This makes streams really powerful when working with large amounts of data, for example, a file size can be larger than your free memory space, making it impossible to read the whole file into the memory in order to process it. That’s where streams come to the rescue!
//*Using streams to process smaller chunks of data, makes it possible to read larger files.
//*Let’s take a “streaming” services such as YouTube or Netflix for example: these services don’t make you download the video and audio feed all at once. Instead, your browser receives the video as a continuous flow of chunks, allowing the recipients to start watching and/or listening almost immediately.
//*However, streams are not only about working with media or big data. They also give us the power of ‘composability’ in our code. Designing with composability in mind means several components can be combined in a certain way to produce the same type of result. In Node.js it’s possible to compose powerful pieces of code by piping data to and from other smaller pieces of code, using streams

const {createReadStream} = require('fs');
// const stream = createReadStream('./content/big-dataFile.txt')

//* default 64kb
//* last buffer- remainder
//* highWaterMark - control the size of the chunks
//* encoding - convert bytes into characters
const stream = createReadStream('./content/big-dataFile.txt',{highWaterMark:9000, encoding:'utf8'})
//* 



stream.on('data',(result)=>{
    console.log(result);
})

stream.on('error',(err)=>{
    console.log(err);
})
