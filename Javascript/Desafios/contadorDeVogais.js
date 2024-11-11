/*
Crie uma função que conta o número de vogais em uma string
usando um loop for e switch
*/

function contadorDeVogais(palavra) {
  let vogais = 0;

  for (let i = 0; i < palavra.length; i++) {
    switch (palavra[i].toLowerCase()) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        vogais++;
        break;
    }
  }

  return vogais;
}
