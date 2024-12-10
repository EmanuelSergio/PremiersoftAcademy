export class Casa {
  _nomeProprietario;
  _idadeProprietario;
  _quantidadeDeCarros;

  calc() {
    return 1;
  }

  setIdade(idade) {
    this._idadeProprietario = idade;
  }

  imprimir() {
    console.log(
      `nome:${this._nomeProprietario} - idade:${this._idadeProprietario} - carros:${this._quantidadeDeCarros}`
    );
  }
}

export class Pessoa {
  _nome;
  _idade;
  _salario;
  _filhos = [];
  constructor(nome, idade, salario) {
    this._nome = nome;
    this._idade = idade;
    this._salario = salario;
  }

  setNome(nome) {
    this._nome = nome;
  }

  getNome() {
    return this._nome;
  }

  adicionarFilho(nome) {
    this._filhos.push(nome);
  }

  getFilhos() {
    console.log(this._filhos);
  }
}
