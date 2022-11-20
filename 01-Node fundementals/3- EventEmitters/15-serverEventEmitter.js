const http = require('http');

//* Returns a new instance of Server.
//*req = incoming request res= responding 

const server = http.createServer()

//* the server is listen to the event called request.
//! once the request been emitted the callback function fires 

 server.on('request', (req, res) => {
    if (req.url === '/') {
        console.log('New request entered');
        res.end('Welcome to our home page');
        return;
    }
    if (req.url === '/about') {
        console.log('New request entered');
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

server.listen(5000, () => {
    console.log('our server is running on port 5000')
})

