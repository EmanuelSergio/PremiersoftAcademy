const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("ola, esse é meu servidor");
});

server.listen(3000, () => {
  console.log("servidor rodando");
});
