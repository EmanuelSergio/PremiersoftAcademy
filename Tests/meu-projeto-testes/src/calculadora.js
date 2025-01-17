function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  if (a < 0 && b < 0) {
    return subtracaonegativos(a, b);
  }
  return a - b;
}

function subtracaonegativos(a, b) {
  return Math.max(a, b);
}

function multiplicacao(a, b) {
  return a * b;
}
function divisao(a, b) {
  return a / b;
}

module.exports = { soma, subtracao, multiplicacao, divisao };
