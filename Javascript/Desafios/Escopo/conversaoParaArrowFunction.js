// Converta as seguintes funções para arrow functions
function multiplicar(a, b) {
  return a * b;
}

function parOuImpar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  }
  return "Ímpar";
}

const mult = (a, b) => a * b;

const parOuImp = (a) => {
  if (a % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
};

console.log(mult(3, 3));
console.log(parOuImp(3));
