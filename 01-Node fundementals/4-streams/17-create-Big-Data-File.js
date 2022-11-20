const fs = require('fs');
for (let i = 0; i < 100000; i++) {
    fs.writeFileSync('./content/big-dataFile.txt',
`Hello world. this is the result: ${i} & ${i}\n`,{flag:'a'})
}