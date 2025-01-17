/**
 * @jest-environment node
 */

const { soma, subtracao, multiplicacao, divisao } = require("../calculadora");

describe("Calculadora", () => {
  test("deve somar dois numeros corretamente", () => {
    const num1 = 2;
    const num2 = 3;

    const resultado = soma(num1, num2);

    expect(resultado).toBe(5);
  });

  test("Deve subtrair os dois numeros corretamente", () => {
    const num1 = 10;
    const num2 = 6;

    const resultado = subtracao(num1, num2);

    expect(resultado).toBe(4);
  });

  test("Deve acumular os dois numeros negativos nessa subtracao", () => {
    const num1 = -10;
    const num2 = -6;

    const resultado = subtracao(num1, num2);

    expect(resultado).toBe(-16);
  });

  test("Deve multiplicar os dois números", () => {
    const num1 = 10;
    const num2 = 10;

    const resultado = multiplicacao(num1, num2);

    expect(resultado).toBe(100);
  });

  test("Deve dividir os dois numeros corretamente", () => {
    const num1 = 10;
    const num2 = 10;

    const resultado = divisao(num1, num2);

    expect(resultado).toBe(1);
  });
});
