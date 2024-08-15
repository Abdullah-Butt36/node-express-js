const http = require("http");
const fs = require("fs");

const homepage = fs.readFileSync("index.html", "utf8");
const logopage = fs.readFileSync("/logo.svg", "utf8");
const stylepage = fs.readFileSync("/styles.css", "utf8");
const logicpage = fs.readFileSync("/browser-app.js", "utf8");

const server = http.createServer((req, res) => {
  const url = req.url;
  // Home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homepage);
    res.end();
  } 
  // Styling page
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(stylepage);
    res.end();
  }
  // Logo page
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(logopage);
    res.end();
  } 
  // logic page
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(logicpage);
    res.end();
  }
  // About page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1>");
    res.end("Hello world");
  }
  // Error page
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end("No page Exist");
  }
});

server.listen(5000);
