/* 
Crie uma função chamada 'calculadora' que recebe três parâmetros:
- numero1 (number)
- numero2 (number)
- operacao (string: 'soma', 'subtracao', 'multiplicacao' ou 'divisao')
A função deve retornar o resultado da operação escolhida.
*/

// Sua solução aqui

function calculadora(numero1, numero2, operacao) {
  switch (operacao) {
    case "soma":
      return numero1 + numero2;
      break;
    case "subtracao":
      return numero1 - numero2;
      break;
    case "multiplicacao":
      return numero1 * numero2;
      break;
    case "divisao":
      return numero1 / numero2;
      break;
    default:
      break;
  }
}

console.log(calculadora(10, 10, "divisao"));
