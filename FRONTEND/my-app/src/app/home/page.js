"use client";
import React, { useState } from "react";
import Sidebar from "./SideBar/sidebar";
import Card from "../Components/card";
import CardInput from "../Components/cardInput";
import CardCars from "../Components/cardCar";
import Footer from "../Components/footer";
import Modal from "../Components/modal";
import Header from "../Components/header";

const pessoa = {
  nome: "Pedro",
  idade: 20,
  sexo: "M",
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
          <Card objeto={pessoa} />
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
