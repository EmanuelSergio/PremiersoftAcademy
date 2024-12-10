// Crie uma função que compare dois números e retorne:
// "Maior" se o primeiro for maior
// "Menor" se o primeiro for menor
// "Igual" se forem iguais

function compararNumeros(num1, num2) {
  if (num1 > num2) {
    return console.log("maior");
  } else if (num1 < num2) {
    return console.log("menor");
  } else if (num1 == num2) {
    return console.log("igual");
  }
  return console.log("valor invalido");

  // Teste: compararNumeros(5, 3) deve retornar "Maior"
}

compararNumeros(5, 3);
