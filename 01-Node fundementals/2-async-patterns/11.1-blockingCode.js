const http = require('http');

//* Returns a new instance of Server.
//*req = incoming request res= responding 
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        console.log('New request entered');
        res.end('Welcome to our home page');
        return;
    }
    if (req.url === '/about') {
        console.log('New request entered');
        //! BLOCKING CODE: if another user will send a new request it won't get any response until the blocking code will finished
        for (let i = 0; i < 100; i++) {
            for (let j = 0; j < 100; j++) {
                console.log(`${i} ${j}`);
            }
        }
        res.end('Welcome to our about page');
        return;
    }else{
        res.end(
            `<h1>Oops</h1>
        <p> Seems you trying to get a page that not exist</p>
        <a href='/'> Back to Home page</a>`
        )
    }
})

const port = server.listen(5000, () => {
    console.log('our server is running on port 5000')
})

module.exports = {http,server,port}