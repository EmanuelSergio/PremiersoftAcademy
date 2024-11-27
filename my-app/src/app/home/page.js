"use client";

import React, { useState } from "react";
import Sidebar from "./SideBar/sidebar";

const pessoa = {
  nome: "",
  idade: 0,
  sexo: "",
};

const carros = [
  { nome: "monza", marca: "chevrolet", ano: 1990 },
  { nome: "sandero", marca: "renault", ano: 2016 },
  { nome: "hb20", marca: "hyunday", ano: 2020 },
];

const carrosLuxo = [
  { nome: "F40", marca: "Ferrari", ano: 1990 },
  { nome: "Supra", marca: "Toyota", ano: 2003 },
  { nome: "Fusca", marca: "dos alemão", ano: 2000 },
];

export function CardInput({ dadosEnviados }) {
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

export function Footer() {
  return (
    <>
      <footer className="h-16 flex bg-slate-600 items-center justify-end pr-4">
        <h2 className="text-white transition-transform duration-300 hover:-translate-y-1">
          Feito por Emanuel
        </h2>
      </footer>
    </>
  );
}

export function Header() {
  return (
    <nav className="h-16 flex bg-slate-600 items-center justify-between">
      <div className="flex items-center gap-4 m-4 ">
        <button>
          <img
            height={50}
            width={50}
            src="https://www.svgrepo.com/show/506800/burger-menu.svg"
            alt=""
          />
        </button>
        <img
          height={50}
          width={50}
          src="https://www.svgrepo.com/show/527754/home-1.svg"
          alt=""
        />
        <h2 className="text-white transition-transform duration-300 hover:-translate-y-1">
          Home
        </h2>
      </div>
      <img
        height={50}
        width={50}
        src="https://www.svgrepo.com/show/430940/exit-door.svg"
        alt=""
      />
    </nav>
  );
}

export function Modal({ isOpen, onClose, item }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-96 max-h-screen overflow-y-auto">
        <h2 className="text-xl font-bold">Detalhes do Item</h2>
        <p className="mt-2">
          <strong>Nome:</strong> {item?.nome}
        </p>
        <p>
          <strong>Marca:</strong> {item?.marca}
        </p>
        <p>
          <strong>Ano:</strong> R$ {item?.ano}
        </p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}

export function Card({ objeto }) {
  const [objet, setObjeto] = useState({ ...pessoa });

  setObjeto.nome = objeto.nome;

  return (
    <div className="max-w-sm rounded-lg h-48 w-80 border border-gray-200 bg-white shadow-lg p-6">
      <h1 className="text-xl font-bold text-gray-800">Bom dia</h1>
      <p className="text-lg text-gray-600 mt-2">Nome: {objet.nome}</p>
      <h2 className="text-lg text-gray-600">Idade: {objeto.idade}</h2>
      <p className="text-lg text-gray-600">
        Sexo: {objeto.sexo === "M" ? "Masculino" : "Feminino"}
      </p>
      <p className="text-lg text-gray-600">É salvo: {}</p>
    </div>
  );
}
export function CardCars({ objeto, titulo = "carro", onClick }) {
  return (
    <div
      className="max-w-sm rounded-lg min-h-48 w-80 border-gray-200 bg-white shadow-lg p-6 cursor-pointer"
      onClick={() => onClick(props)} // Passa o item clicado para a função `onClick`
    >
      <h1 className="text-xl font-bold text-gray-800">{titulo}</h1>
      <p className="text-lg text-gray-600 mt-2">Nome: {objeto.nome}</p>
      <h2 className="text-lg text-gray-600">Marca: {objeto.marca}</h2>
      <p className="text-lg text-gray-600">Ano: {objeto.ano}</p>
    </div>
  );
}

export default function Home(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const dadosVindosDoFilho = (dados) => {
    console.log(dados);
    return { dados };
  };

  return (
    <>
      <Header />

      <CardInput dadosEnviados={dadosVindosDoFilho} />
      <div className="flex flex-col  p-10">
        <div className="flex justify-center">
          <Card objeto={dadosVindosDoFilho} />
        </div>
        <div className="flex justify-center items-center gap-10 pt-10">
          {carros.map((carro, index) => (
            <CardCars key={index} objeto={carro} onClick={handleOpenModal} />
          ))}
        </div>
        <div className="flex justify-center items-center gap-10 pt-10">
          {carrosLuxo.map((carro, index) => (
            <CardCars
              key={index}
              objeto={carro}
              titulo={"carros de luxo"}
              onClick={handleOpenModal}
            />
          ))}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        item={selectedItem}
      />
      <Footer />
    </>
  );
}
