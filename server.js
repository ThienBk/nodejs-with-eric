const http = require("http");

const server = http.createServer((req, res) => {
  console.log("run reques ...");
  res.setHeader("Content-Type", "text/html");
  res.write("<h3>Hello world! </h3>");
  res.write("<h2>from ThienBk</h2>");
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("NodeJs server is running on port: 3000");
});
