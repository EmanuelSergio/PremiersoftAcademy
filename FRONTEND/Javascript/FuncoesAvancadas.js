// Função tradicional
function soma(a, b) {
  return a + b;
}

// Arrow function equivalente
//const soma = (a, b) => a + b;

// USO PRATICO

const produtos = [
  { nome: "Notebook", preco: 3000 },
  { nome: "Smartphone", preco: 1500 },
  { nome: "Tablet", preco: 800 },
];

// Usando arrow function para filtrar produtos
const produtosCaros = produtos.filter((produto) => produto.preco > 1000);

// Usando arrow function para formatar preços
const precosFormatados = produtos.map((produto) => `R$ ${produto.preco},00`);

//calback

/*Descrição:
Crie uma função chamada processarNumeros que recebe um array de números e uma função de callback como parâmetros. A função de callback será aplicada a cada número do array.

Tarefa:
Implemente a função processarNumeros que deve aplicar a função de callback a cada número do array.
Crie funções de callback que:
Dobrem o número.
Verifiquem se o número é par.
Teste a função processarNumeros com diferentes callbacks*/

function processarNumeros(arrayNumeros, callback) {
  return callback(arrayNumeros);
}

function dobrarNumero(numeros) {
  return numeros.map((a) => {
    return a * 2;
  });
}

const isPar = (a) =>
  a.filter((a) => {
    return a % 2 == 0;
  });

const numeros = [9, 5, 2, 1, 5];

console.log(processarNumeros(numeros, dobrarNumero));
console.log(processarNumeros(numeros, isPar));

function criarContadorVisitas() {
  let visitas = 0;

  return {
    registrarVisita: function () {
      visitas++;
      return visitas;
    },
    obterTotalVisitas: function () {
      return visitas;
    },
  };
}

const contadorBlog = criarContadorVisitas();
console.log(contadorBlog.registrarVisita()); // 1
console.log(contadorBlog.registrarVisita()); // 2
console.log(contadorBlog.obterTotalVisitas()); // 2

function funcaoComMuitasFuncoes() {
  return {
    darOla: function () {
      console.log("ola");
    },
    darBomDia: function () {
      console.log("bom dia");
    },
  };
}

const variasFuncoes = funcaoComMuitasFuncoes();
variasFuncoes.darBomDia();
variasFuncoes.darOla();
