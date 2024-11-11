//jeito antigo - é possível alterar
var coisa = "1";

//jeito novo - é possivel alterar
let outraCoisa = "dad";

//não é possível alterar
const pi = Math.PI;

console.log(pi);

// let (permite reatribuição)
let nome = "Maria";
nome = "João"; // permitido

// const (não permite reatribuição)
const PI = 3.14159;
// PI = 3.14; // Erro!

let idade2 = 25; // número inteiro
let altura = 1.75; // número decimal
let infinito = Infinity; // infinito
let naoNumero = NaN; // Not a Number

let nome2 = "Maria";
let sobrenome = "Silva";
let nomeCompleto = `${nome} ${sobrenome}`; // template string

// Métodos comuns de string
console.log(nome2.length); // 5
console.log(nome2.toUpperCase()); // MARIA
console.log(nome2.toLowerCase()); // maria

let estaChovendo = true;
let temSol = false;

// Operadores lógicos
let guardaChuva = estaChovendo && !temSol; // AND
let diaAgradavel = estaChovendo || temSol; // OR

// undefined - valor não atribuído
let variavelNaoDefinida;
console.log(variavelNaoDefinida); // undefined

// null - ausência intencional de valor
let variavelNula = null;

// String para Number
let numeroTexto = "123";
let numero = Number(numeroTexto); // 123
let numeroFloat = parseFloat("3.14"); // 3.14
let numeroInt = parseInt("3.14"); // 3

// Number para String
let idade = 25;
let idadeTexto = idade.toString(); // "25"
let idadeTexto2 = String(idade); // "25"

// Para Boolean
let booleano = Boolean(1); // true
let booleano2 = Boolean(""); // false
