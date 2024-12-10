const http = require("http");

let tarefas = [
  { id: 1, descricao: "Estudar NodeJS", concluida: false },
  { id: 2, descricao: "Fazer exercícios", concluida: true },
];

const server = http.createServer((req, res) => {
  //configurando CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  //GET
  if (req.method === "GET" && req.url === "/tarefas") {
    res.writeHead(200);
    res.end(JSON.stringify(tarefas));
    return;
  }

  if (req.method === "POST" && req.url === "/tarefas") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const novaTarefa = JSON.parse(body);
      novaTarefa.id = tarefas.length + 1;
      tarefas.push(novaTarefa);

      res.writeHead(201);
      res.end(JSON.stringify(novaTarefa));
    });
    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: "rota nao encontrada" }));
});

server.listen(3000, () => {
  console.log("server rodando");
});
