const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use("/", (req, res) => {
  res.render("index.html");
});

let messages = [];

io.on("upload", (fileData) => {
  const { name, data } = fileData;
  const writeStream = fs.createWriteStream(`uploads/${name}`);
  writeStream.write(Buffer.from(data));
  writeStream.end();

  io.emit("fileUploaded", { name, url: `/uploads/${name}` });
});

io.on("connection", (socket) => {
  console.log(`socket conectado: ${socket.id}`);

  socket.on("sendMessage", (data) => {
    messages.push(data);
    console.log(messages);
    io.emit("messages", messages);
  });
});

server.listen(3000);
