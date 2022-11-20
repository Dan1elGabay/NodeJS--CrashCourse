const { readFileSync, createReadStream } = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
    // const text = readFileSync('./content/big-dataFile.txt','utf-8')
    // res.end(text)
    const fileStream = createReadStream('./content/big-dataFile.txt','utf-8')
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        res.end(err)
    })
})

const port = server.listen(5000, () => {
    console.log(`\n =======${new Date().toDateString()}=======`);
    console.log('Server is running on port http://localhost:5000 ⚽');
})