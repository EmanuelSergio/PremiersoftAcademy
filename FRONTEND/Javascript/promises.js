// Exemplo da Pizzaria em código
const pedirPizza = new Promise((resolve, reject) => {
  // Simulando o tempo de preparo
  setTimeout(() => {
    const temIngredientes = false;

    if (temIngredientes) {
      resolve("🍕 Sua pizza está pronta!");
    } else {
      reject("😢 Desculpe, acabaram os ingredientes");
    }
  }, 2000);
});

// Usando a Promise
pedirPizza
  .then((mensagem) => console.log(mensagem)) // Se deu certo
  .catch((erro) => console.log(erro)); // Se deu errado

// Buscando dados de uma API
fetch("https://api.exemplo.com/dados")
  .then((response) => response.json())
  .then((dados) => console.log(dados))
  .catch((erro) => console.log("Erro:", erro));

//promise all

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("foo"), 2000)
);
const promise3 = fetch("https://api.exemplo.com/dados");

Promise.all([promise1, promise2, promise3])
  .then((valores) => {
    console.log(valores); // [3, "foo", Response]
  })
  .catch((erro) => {
    console.error("Uma das promises falhou:", erro);
  });

console.log("usando then/catch");

function buscarDados() {
  fetch("https://api.exemplo.com/dados")
    .then((response) => response.json())
    .then((dados) => console.log(dados))
    .catch((erro) => console.error(erro));
}
