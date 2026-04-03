const http = require("http");
const sum = require("./App");

const server = http.createServer((req, res) => {
  res.write(`Sum of 1 + 2 = ${sum(1, 2)}`);
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
