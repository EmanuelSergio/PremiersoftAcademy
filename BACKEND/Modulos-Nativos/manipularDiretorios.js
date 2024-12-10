const fs = require("fs");

// Criar diretório
fs.mkdirSync("./nova-pasta");

// Ler conteúdo do diretório
const arquivos = fs.readdirSync("./");
console.log("Arquivos:", arquivos);

// Verificar se arquivo/diretório existe
const existe = fs.existsSync("./arquivo.txt");
console.log("Arquivo existe:", existe);
