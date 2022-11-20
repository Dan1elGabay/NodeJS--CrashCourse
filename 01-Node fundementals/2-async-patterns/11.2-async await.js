const {
    readFile,
    writeFile
} = require('fs').promises;
const path = require('path');
const util = require('util')

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);


//* A function that return a promise
const getText = (path) => {
    return new Promise((reslove, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
                return
            } else {
                reslove(data)
            }
        })

    })
}
//* instead using .than .catch > use a sync await inside try-catch
// getText('./content/first.txt')
//     .then((result) => console.log('the result:', result))
//     .catch((err) => console.log(err))

const start = async () => {
    try {
        //* the await will complete only after when the promise in the function will be resolved
        const first = await getText('./content/first.txt')
        console.log(first);
        const second = await fetchSomeData
        console.log(second);
        
        //* i can short the returned promise (on getText's Function()) syntax by using NodeJS existing modules > util.promisefy(readfile/writefile)
        const third = await readFilePromise('./content/second.txt','utf-8')
        console.log(third);
        await writeFilePromise('./content/result-async.txt', `Here is the result: ${first}, ${third},${JSON.stringify(second)}`)
        
        //*i can to fs module .promises and it will be the same as util module promisefy
        const forth = await readFilePromise('./content/forth.txt','utf-8')
        console.log(third);
        await writeFile('./content/result-async.txt', `Here is the result: ${forth}}`) //! i can add {flag:a} if i want to append on default it overwrite the document.

    } catch (error) {
        console.log(error);

    }
}
start()

let allGood = true;

// Define a Promise
// A Promise can be in one of three states:
// - Pending     | hasn't settled to a value yet
// - Fulfilled   | settled successfully  (calling resolve())
// - Rejected    | settled unsuccessfully (calling reject())
let fetchSomeData = new Promise((resolve, reject) => {
    if (!allGood) {
        reject("error fetching data!")
    } else {
        resolve({
            id: 1,
            message: 'nice work!'
        })
    }
})

