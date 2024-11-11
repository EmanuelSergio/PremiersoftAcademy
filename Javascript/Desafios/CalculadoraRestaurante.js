function calcularConta(
  valorConsumido,
  numeroPessoas,
  qualidadeServico,
  gorjetaPersonalizada = 0
) {
  if (valorConsumido <= 0) {
    return console.log("valor consumido deve ser maior que 0");
  } else if (numeroPessoas <= 0) {
    return console.log("numero de pessoas de ser maior que 0");
  }

  let gorjetaSujerida;

  if (gorjetaPersonalizada > 0) {
    gorjetaSujerida = gorjetaPersonalizada * valorConsumido;
  } else {
    gorjetaSujerida = qualidade(qualidadeServico) * valorConsumido;
  }

  let tot = gorjetaSujerida + valorConsumido;
  const valorPorPessoa = tot / numeroPessoas;

  if (valorPorPessoa > 1000) {
    return console.log("valor por pessoa é ate $1000,00");
  }

  if (valorPorPessoa >= 100) {
    console.log("valor por pessoa deu mais que $100,00");
  }

  if (numeroPessoas >= 5) {
    tot = tot - tot * 0.05;
  }

  const refeicao = {
    valorDoConsumo: valorConsumido,
    valorGorjetaSugerida: gorjetaSujerida,
    valorTotal: tot,
    valorPorPessoa: valorPorPessoa.toFixed(2),
    numeroDePessoas: numeroPessoas,
  };

  return refeicao;
}

function qualidade(any) {
  switch (any.toLowerCase()) {
    case "excelente":
      return 0.15;
    case "bom":
      return 0.1;
    case "regular":
      return 0.05;
    default:
      return console.log("a qualidade deve ser uma opção valida");
  }
}

console.log(calcularConta(15500.0, 2, "bom"));
console.log(calcularConta(100.0, 2, "bom"));
console.log(calcularConta(100.0, 3, ""));
console.log(calcularConta(100.0, 3, "bom", 0.5));
console.log(calcularConta(300.0, 5, "EXCELENTE"));
console.log(calcularConta(300.0, 2, "EXCELENTE"));
