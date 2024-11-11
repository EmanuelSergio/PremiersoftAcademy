// Crie uma função que receba dois números e um operador (+, -, *, /)
// e retorne o resultado da operação

function calculadora(num1, num2, operador) {
  switch (operador) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
    default:
      return "valor invalido";
  }
}

console.log(calculadora(10, 10, "+"));
console.log(calculadora(10, 10, "-"));
console.log(calculadora(10, 10, "*"));
console.log(calculadora(10, 10, "/"));
console.log(calculadora(10, 10, ""));

// Teste: calculadora(10, 5, '+') deve retornar 15
