const http = require("http");

let compras = [];

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("content-type", "application/json");

  //GET
  if (req.method === "GET" && req.url === "/compras") {
    res.writeHead(200);
    res.end(JSON.stringify(compras));
    return;
  }
  //POST
  if (req.method === "POST" && req.url === "/compras") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const novaCompra = JSON.parse(body);
      novaCompra.id = compras.length + 1;
      compras.push(novaCompra);

      res.writeHead(201);
      res.end(JSON.stringify(novaCompra));
    });
    return;
  }

  if (req.method === "PUT" && req.url.startsWith("/compras/")) {
    const id = parseInt(req.url.split("/")[2]);

    console.log(id);

    compras.find((compra) => {
      if (compra.id == id) {
        compra.vendido = true;
      }
    });

    res.writeHead(200);
    res.end(JSON.stringify(compras));

    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: "rota não encontrada" }));
});

server.listen(3000, () => {
  console.log("server rodando na 3000");
});
