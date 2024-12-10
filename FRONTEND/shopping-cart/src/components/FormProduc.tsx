import React, { useState } from "react";
//import { Produto } from "./ProductList";
import { createProduct } from "@/lib/api";

interface Produto {
  name: string;
  price: number;
  image: string;
}

const ProductForm = () => {
  const [formData, setFormData] = useState<Produto>({
    name: "",
    price: 0,
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createProduct(formData);
  };

  return (
    <>
      <div className=" min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-700">
            Adicionar Produto
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nome */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Nome do Produto
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData?.name}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
                placeholder="Digite o nome do produto"
                required
              />
            </div>

            {/* Preço */}
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-600"
              >
                Preço
              </label>
              <input
                type="number"
                step="0.01"
                id="price"
                name="price"
                value={formData?.price}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
                placeholder="Digite o preço"
                required
              />
            </div>

            {/* URL da Imagem */}
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-600"
              >
                URL da Imagem
              </label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData?.image}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
                placeholder="Digite a URL da imagem"
                required
              />
            </div>

            {/* Botão de Enviar */}
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300"
              >
                Adicionar Produto
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductForm;
