const http = require("http");

const hostname = "127.0.0.1";
const port = 3003;
const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://127.0.0.1");
  const userName = url.searchParams.get("hello");
  if (userName) {
    response.statusCode = 200;
    response.statusMessage = "OK";
    response.setHeader("Content-Type", "text/plain");
    response.write(`Hello, my friend ${userName}`);
    response.end();
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
    res.write("Write your name");
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
