/* 
Crie um programa que:
1. Declare uma constante com o ano atual
2. Declare uma variável com o ano de nascimento
3. Calcule a idade
4. Converta a idade para string e mostre no console
*/

// Sua solução aqui

const anoAtual = new Date().getFullYear();
const anoNascimento = 2005;
let idade = anoAtual - anoNascimento;
console.log(idade.toString());
