const fs = require("fs");

//leitura sincrona
const conteudo = fs.readFileSync("./arquivo.txt", "utf-8");
console.log(conteudo);

//leitura assincrona
fs.readFile("./arquivo.txt", "utf-8", (erro, conteudo) => {
  if (erro) {
    console.log("erro ao ler o arquivo", erro);
    return;
  }
  console.log(conteudo);
});

//usando promises

const fsPromises = require("fs").promises;
async function lerArquivo() {
  try {
    const conteudo = await fsPromises.readFile("arquivo.txt", "utf-8");
    console.log(conteudo);
  } catch (error) {
    console.error("erro pae", error);
  }
}

lerArquivo();
