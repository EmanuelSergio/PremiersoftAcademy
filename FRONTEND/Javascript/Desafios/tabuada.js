/*
Crie uma função que imprime a tabuada de um número
usando while loop
*/

function tabuada(num) {
  let multiplicador = 1;
  while (multiplicador <= 10) {
    console.log(multiplicador * num);
    multiplicador++;
  }
}

tabuada(10);
