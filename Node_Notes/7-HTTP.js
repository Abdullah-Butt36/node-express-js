const http = require('http');

const server = http.createServer((req , res) => {
  if (req.url === '/'){
    res.end("Welcome to our home page")
  }
  if(req.url === '/about'){
    res.end("Here is our short history")
  }
  res.end(
    `<h1>OoPs!!</h1>
    <p>You are not able to access this page</p>  `
  )
});

server.listen(5000);