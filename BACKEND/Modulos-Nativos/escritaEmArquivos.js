const fs = require("fs");

//escrita síncrona
fs.writeFileSync("./novo-arquivo.txt", "Conteúdo do arquivo");

// Escrita assíncrona
fs.writeFile("./novo-arquivo.txt", "Conteúdo do arquivo", (erro) => {
  if (erro) {
    console.error("Erro ao escrever:", erro);
    return;
  }
  console.log("Arquivo criado com sucesso!");
});

// Adicionar conteúdo ao final do arquivo
fs.appendFileSync("./log.txt", "\nNova linha de log");
