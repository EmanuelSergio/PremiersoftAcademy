const soma = function (a, b) {
  return a + b;
};

console.log(soma(5, 3)); // Output: 8

const multiplicar = (a, b) => a * b;

console.log(multiplicar(4, 2)); // Output: 8

function saudacao() {
  console.log("Olá! Bem-vindo ao estudo de funções!");
}

// Chamando a função
saudacao(); // Output: Olá! Bem-vindo ao estudo de funções!

function apresentar(nome, idade) {
  console.log(`Olá! Meu nome é ${nome} e tenho ${idade} anos.`);
}

apresentar("João", 25); // Output: Olá! Meu nome é João e tenho 25 anos.

function cumprimentar(nome = "visitante") {
  console.log(`Bem-vindo, ${nome}!`);
}

cumprimentar(); // Output: Bem-vindo, visitante!
cumprimentar("Maria"); // Output: Bem-vindo, Maria!

function calcularArea(base, altura) {
  return base * altura;
}

const area = calcularArea(5, 3);
console.log(area); // Output: 15

function analisarNumero(num) {
  return {
    dobro: num * 2,
    quadrado: num ** 2,
    raizQuadrada: Math.sqrt(num),
  };
}

const analise = analisarNumero(4);
console.log(analise.dobro); // Output: 8
console.log(analise.quadrado); // Output: 16
