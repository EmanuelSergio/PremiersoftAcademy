const path = require("path");

// Juntar caminhos
const caminhoCompleto = path.join("/pasta", "subpasta", "arquivo.txt");
console.log(caminhoCompleto); // /pasta/subpasta/arquivo.txt

// Resolver caminho absoluto
const caminhoAbsoluto = path.resolve("pasta", "arquivo.txt");
console.log(caminhoAbsoluto);

// Extensão do arquivo
const extensao = path.extname("arquivo.txt");
console.log(extensao); // .txt
