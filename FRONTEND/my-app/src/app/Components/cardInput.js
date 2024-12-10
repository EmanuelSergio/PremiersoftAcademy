import React, { useState } from "react";

export default function CardInput({ dadosEnviados }) {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("");

  function criarPessoa(nome, idade, sexo) {
    return { nome, idade, sexo };
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    return dadosEnviados(criarPessoa(nome, idade, sexo));

    // Aqui você pode enviar os dados para uma API ou manipulá-los conforme necessário
  };

  return (
    <>
      <div className="max-w-sm mx-auto bg-white border rounded-lg shadow-md p-4 mt-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Informações Pessoais
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-gray-600"
            >
              Nome
            </label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Digite seu nome"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="idade"
              className="block text-sm font-medium text-gray-600"
            >
              Idade
            </label>
            <input
              type="text"
              id="idade"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Digite sua idade"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="sexo"
              className="block text-sm font-medium text-gray-600"
            >
              Sexo
            </label>
            <select
              value={sexo}
              onChange={(e) => setSexo(e.target.value)}
              id="sexo"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option defaultValue="" disabled>
                Selecione
              </option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
            </select>
          </div>
          <button
            onClick={(evento) => handleSubmit(evento)}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}
