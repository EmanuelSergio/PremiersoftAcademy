/* 
Crie um objeto chamado 'biblioteca' que contenha os seguintes dados:
- nome
- livros (array de objetos com título, autor e ano)
- adicionarLivro (método para adicionar novo livro)
- listarLivros (método para listar todos os livros)
*/

// Solução

/*
const biblioteca = {
  nome: "dasda",
  livros: [],

  adicionarLivro: function (tituloLivro, autorLivro, anoLivro) {
    const novoLivro = new livro(tituloLivro, autorLivro, anoLivro);
    this.livros.push(novoLivro);
  },

  listarLivros: function () {
    for (const livro of livros) {
      console.log(livro.titulo);
    }
  },
};

function livro(titulo, autor, ano) {
  (this.titulo = titulo), (this.autor = autor), (this.ano = ano);
}

const novoLivro = livro("livro do ano", "romero brito", 2005);

biblioteca.nome = "furb brbr";
biblioteca.adicionarLivro(novoLivro);

console.log(biblioteca.livros.forEach((livro) => livro.titulo));
console.log(biblioteca);
*/

const biblioteca = {
  nome: "biblioteca Furb",
  livros: [],

  adicionarLivro: function (titulo, autor, ano) {
    this.livros.push({ titulo, autor, ano });
  },

  listarLivros: function () {
    this.livros.forEach((a) => {
      console.log(a);
    });
  },
};

biblioteca.adicionarLivro("sadas", "jade", 2005);
biblioteca.listarLivros();
