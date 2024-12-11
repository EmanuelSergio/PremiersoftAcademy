//Promisse
const minhaPromisse = new Promise((resolve, reject) => {
  //operacao assincrona
  const sucesso = true;

  if (sucesso) {
    resolve("operacao concluida");
  } else {
    reject(new Error("falha na operacao"));
  }
});

//encadeamento de promises

minhaPromisse
  .then((resultado) => {
    console.log(resultado);
    return "proximo valor:";
  })
  .then((novoResultado) => {
    console.log(novoResultado);
  })
  .catch((erro) => {
    console.error(erro);
  })
  .finally(() => {
    console.log("executa sempre");
  });

//execucao paralela

Promise.all([promise1, promise2, promise3]).then((resultado) => {
  console.log("todos concluidos: ", resultado);
});

//primeira promisse a resolver

Promise.race([promise1, promise2, promise3]).then((resultado) => {
  console.log("primeiro a ser concluido: ", resultado);
});
