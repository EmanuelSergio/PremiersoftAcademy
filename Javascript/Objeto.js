// 1. Notação literal (mais comum)
const pessoa = {
  nome: "João",
  idade: 25,
};

// 2. Construtor Object
const carro = new Object();
carro.marca = "Toyota";
carro.modelo = "Corolla";

// 3. Função construtora
function Animal(especie, nome) {
  this.especie = especie;
  this.nome = nome;
}
const cachorro = new Animal("cachorro", "Rex");

const usuario = {
  nome: "Maria",
  idade: 30,
};

// Adicionando propriedades
usuario.email = "maria@email.com";
usuario["telefone"] = "123456789";

// Modificando propriedades
usuario.idade = 31;

// Removendo propriedades
delete usuario.telefone;

// Verificando se uma propriedade existe
console.log("nome" in usuario); // true
console.log(usuario.hasOwnProperty("email")); // true

const calculadora = {
  valor1: 0,
  valor2: 0,
  // Método tradicional
  somar: function () {
    return this.valor1 + this.valor2;
  },
  // Sintaxe abreviada (ES6+)
  multiplicar() {
    return this.valor1 * this.valor2;
  },
};

calculadora.valor1 = 5;
calculadora.valor2 = 3;
console.log(calculadora.somar()); // 8

const conta = {
  _saldo: 0,

  get saldo() {
    return `R$ ${this._saldo.toFixed(2)}`;
  },

  set saldo(valor) {
    if (valor >= 0) {
      this._saldo = valor;
    } else {
      console.log("Valor inválido");
    }
  },
};

conta.saldo = 150.5;
console.log(conta.saldo); // "R$ 150.50"

const produto = {
  nome: "Notebook",
  preco: 3000,
  especificacoes: {
    ram: "8GB",
    armazenamento: "256GB",
  },
};

// Destructuring simples
const { nome, preco } = produto;
console.log(nome); // "Notebook"

// Renomeando variáveis
const { nome: nomeProduto, preco: precoProduto } = produto;
console.log(nomeProduto); // "Notebook"

// Destructuring aninhado
const {
  especificacoes: { ram, armazenamento },
} = produto;
console.log(ram); // "8GB"

const config = {
  tema: "claro",
};

const { tema, idioma = "pt-BR" } = config;
console.log(idioma); // "pt-BR"
