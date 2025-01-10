const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*", // Em produção, especifique o domínio correto
    methods: ["GET", "POST"],
  },
});

// Configuração do Express
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

// Certifique-se que a pasta uploads existe
const uploadsDir = path.join(__dirname, "public", "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Rota principal deve vir depois das configurações do static
app.get("/", (req, res) => {
  res.render("index.html");
});

let messages = [];

// Configuração do Socket.IO
io.on("connection", (socket) => {
  console.log(`Socket conectado: ${socket.id}`);

  // Envia mensagens existentes para novos usuários
  socket.emit("messages", messages);

  socket.on("sendMessage", (data) => {
    messages.push(data);
    console.log("Nova mensagem:", data);
    io.emit("messages", messages);
  });

  socket.on("upload", (fileData) => {
    try {
      const { name, data } = fileData;
      const fileName = Date.now() + "-" + name; // Evita conflito de nomes
      const filePath = path.join(uploadsDir, fileName);

      fs.writeFileSync(filePath, Buffer.from(data));

      io.emit("fileUploaded", {
        name: name,
        url: `/uploads/${fileName}`,
      });

      console.log("Arquivo salvo:", fileName);
    } catch (error) {
      console.error("Erro no upload:", error);
      socket.emit("uploadError", "Erro ao fazer upload do arquivo");
    }
  });

  socket.on("disconnect", () => {
    console.log(`Socket desconectado: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
