const http = require("http")

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my metaverse");
  }

  if (req.url === "/about") {
    res.end("Here is our short history");
  }

  res.end(
    `<h1> oops! </h1>
       <p> Error! Page not found.</p>
       `
  );
});

server.listen(5000);
