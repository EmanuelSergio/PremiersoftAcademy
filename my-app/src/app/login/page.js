"use client";

import Link from "next/link";
import { useState } from "react";

// Na página origem
import { useNavigate } from "react-router-dom";

function PaginaOrigem() {
  const navigate = useNavigate();

  const irParaDestino = () => {
    navigate("/home", {
      state: { dados: "informação para passar" },
    });
  };
}

export default function Login() {
  const dadosFormulario = {
    nome: "",
    idade: "",
    sexo: "",
    lembrar: false,
  };

  const [entradaFormulario, setFormData] = useState({
    ...dadosFormulario,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do Formulário:", entradaFormulario);

    // Aqui você pode enviar os dados para uma API ou manipulá-los conforme necessário
  };

  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
            Bem-vindo
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="nome"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={entradaFormulario.nome}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Digite seu Nome  "
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="idade"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Idade
              </label>
              <input
                type="number"
                id="idade"
                name="idade"
                value={entradaFormulario.idade}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Informe sua idade"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="sexo"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Sexo
              </label>
              <input
                type="text"
                id="sexo"
                name="sexo"
                value={entradaFormulario.sexo}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Informe seu sexo"
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="lembrar"
                  checked={entradaFormulario.lembrar}
                  onChange={handleChange}
                  className="form-checkbox text-blue-500"
                />
                <span className="ml-2 text-sm text-gray-600">
                  Lembrar de mim
                </span>
              </label>
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Esqueceu a senha?
              </a>
            </div>
            <button className="w-full p-3 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Salvar
            </button>
            <Link
              href={"/home"}
              onClick={PaginaOrigem}
              className="w-full p-3 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Entrar
            </Link>
          </form>
          <p className="mt-6 text-sm text-gray-600 text-center">
            Não tem uma conta?
            <a href="#" className="text-blue-500 hover:underline">
              Registre-se
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
