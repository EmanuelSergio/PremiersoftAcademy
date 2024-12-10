/* 
Crie um programa que:
1. Declare uma string com seu nome completo
2. Separe o nome do sobrenome
3. Conte quantas letras tem cada um
4. Converta o nome para maiúsculas e o sobrenome para minúsculas
*/

// Sua solução aqui
const nome = "Emanuel Girardi";
const primeiroNome = nome.split(" ").at(0).toUpperCase();
const sobreNome = nome.split(" ").at(1).toLowerCase();

console.log(`O nome ${primeiroNome} e o sobrenome ${sobreNome}`);
