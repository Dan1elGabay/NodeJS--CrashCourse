const http = require('http');
const {
    hostname
} = require('os');

//* Returns a new instance of Server.
//*req = incoming request res= responding 
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        console.log('New request entered');
        res.end('Welcome to our page')
        return
    }

    if (req.url === '/about') {
        console.log('New request entered');
        res.end('Welcome to our page')
        return
    }
    console.log('New request entered');
    res.end('Error page')
    return
})

//!listen is a function and the function inside is the callback!!!!!! OMG
const port = server.listen(5000, () => {
    console.log('our server is running on port 5000')
})
const host = hostname()
console.log(host);

//! Offloading Processing to Asynchronous Tasks = the aSync function get back off the line

// *Offload expensive processing using asynchronous tasks when that processing is secondary to the purpose of the pages. 