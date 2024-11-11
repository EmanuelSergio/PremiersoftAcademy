/*
Crie uma função que recebe um número e retorna:
- "Positivo e Par" se for positivo e par
- "Positivo e Ímpar" se for positivo e ímpar
- "Negativo" se for negativo
- "Zero" se for zero
*/

function recebeNumero(num) {
  if (num > 0 && num % 2 === 0) {
    return console.log("positivo e par");
  } else if (num > 0 && num % 2 === 1) {
    return console.log("positivo e impar");
  } else if (num < 0) {
    return console.log("negativo");
  }

  console.log("zero");
}

recebeNumero(1);
recebeNumero(2);
recebeNumero(0);
recebeNumero(-3);
