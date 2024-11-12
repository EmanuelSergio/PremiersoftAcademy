const pessoa = {
  nome: "davi",
  idade: 24,
  endereco: {
    rua: "das palmeiras",
    bairro: "ponta aguda",
    numero: 120,
  },
  telefone: {
    ddd: 47,
    numeroTelefone: 31232132,
  },
};

//tem que ser o mesmo nome da variavel
const { nome, idade } = pessoa;
console.log(nome);
console.log(idade);

const { rua, bairro, numero } = pessoa.endereco;
console.log(rua, bairro, numero);

const {
  telefone: { ddd, numeroTelefone },
} = pessoa;

console.log(ddd, numeroTelefone);
