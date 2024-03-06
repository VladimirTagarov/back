const http = require("http");

const hostname = "127.0.0.1";
const port = 3003;
const server = http.createServer((req, res) => {
  const ipAddress = "http://127.0.0.1";
  const url = new URL(req.url, ipAddress);
  const userName = url.searchParams.get("hello");
  if (userName) {
    res.statusCode = 200;
    res.statusMessage = "OK";
    res.setHeader("Content-Type", "text/plain");
    res.write(`Hello, ${userName}`);
    res.end();
    return;
  }

  if (req.url === "/users") {
    res.statusCode = 200;
    res.statusMessage = "OK";
    res.setHeader("Content-type", "application/json");
    res.write(`Hello, ${userName}`);
    res.end();
  } else if (req.url === "/?hello") {
    res.statusCode = 400;
    res.statusMessage = "Bad request";
    res.setHeader("Content-type", "text/plain");
    res.write("Enter a name");
    res.end();
  } else if (req.url === "/") {
    res.statusCode = 200;
    res.statusMessage = "OK";
    res.setHeader("Content-type", "text/plain");
    res.write("Hello");
    res.end();
  } else {
    res.statusCode = 500;
    res.statusMessage = "Internal Server Error";
    res.setHeader("Content-type", "text/plain");
    res.write("Hello");
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Сервер запущен по адресу http://${hostname}:${port}/`);
});
