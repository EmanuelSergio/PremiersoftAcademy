/* 
Crie um programa que:
1. Declare variáveis com diferentes tipos de dados
2. Crie uma função que recebe um valor e retorna seu tipo
3. Teste a função com todos os tipos que aprendemos
*/

// Sua solução aqui

function findType(tipo) {
  return console.log(typeof tipo);
}

let idade = 25;
let nome = "manu";
let falso = false;
const pessoa = {};

findType(idade);
findType(nome);
findType(falso);
findType(pessoa);
