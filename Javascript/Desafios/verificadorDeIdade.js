// Crie uma função que verifique se uma pessoa pode dirigir
// Condições: Idade >= 18 E ter carteira de motorista

function podeDigirir(idade, temCarteira) {
  if (idade >= 18 && temCarteira) {
    return console.log(true);
  } else if (idade >= 18 && !temCarteira) {
    console.log(false);
  } else if (idade < 18 && temCarteira) {
    console.log("nao tem idade para ter carteira");
  } else {
    console.log("valor invalido");
  }
}

// Teste: podeDigirir(20, true) deve retornar true

podeDigirir(20, true);
podeDigirir(20, false);
podeDigirir(2, true);
