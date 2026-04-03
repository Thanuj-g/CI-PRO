const http = require("http");
const sum = require("./App");

const server = http.createServer((req, res) => {
  res.write(`Sum of 1 + 5= ${sum(1, 5)}`);
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
