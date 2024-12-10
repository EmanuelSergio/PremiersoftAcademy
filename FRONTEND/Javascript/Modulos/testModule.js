import { Casa, Pessoa } from "./Casa.js";

const casa = new Casa("mateus", 32, 2);
casa._idadeProprietario = 12;
casa.setIdade(14);
console.log(casa.calc());
casa.imprimir();

const pessoa = new Pessoa();
pessoa.setNome("antonio nunes");
console.log(pessoa.getNome());
const pessoas = ["jose", "maria", "gustavo"];
pessoa.adicionarFilho(pessoas);
pessoa.getFilhos();
