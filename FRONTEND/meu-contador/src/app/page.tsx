"use client";

import { useEffect, useState } from "react";

const SavedCounter = () => {
  const [corTexto, setCorTexto] = useState("text-blue-600");
  const [barra, setBarra] = useState(0); //progresso começando com 0

  const [count, setCount] = useState<number>(0);
  // useEffect para salvar o valor no localStorage sempre que count mudar

  const incrementProgress = () => {
    setBarra((prev) => (prev < 100 ? prev + 2.5 : 100)); // Incrementa até 100%
  };

  const decrementProgress = () => {
    setBarra((prev) => (prev > 0 ? prev - 2.5 : 0)); // Decrementa até 0%
  };

  useEffect(() => {
    const savedBarCount = localStorage.getItem("savedBarCount");
  });

  useEffect(() => {
    const savedCount = localStorage.getItem("savedCount");

    if (savedCount) {
      if (parseInt(savedCount) == 0) {
        console.log("é zero");
      }

      setCount(parseInt(savedCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedCount", count.toString());

    if (count == 0) {
      setCorTexto("text-gray-600");
      console.log("é zeros");
    } else if (count < 0) {
      setCorTexto("text-red-600");
      console.log("menor que zero");
    } else {
      setCorTexto("text-blue-600");
      console.log("maior que zero");
    }

    // Log para demonstração do efeito
    console.log("Valor salvo:", count);
  }, [count]);

  if (count > -10 && count <= 10) {
  }

  const handleIncrement = () => {
    if (count <= 9) {
      setCount((prev) => {
        incrementProgress();
        return prev + 1;
      });
    }
  };

  const handleDecrement = () => {
    if (count >= -9) {
      setCount((prev) => {
        decrementProgress();
        return prev - 1;
      });
    }
  };

  const handleReset = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Contador com Persistência
        </h1>

        <div className="text-center">
          <p className="text-lg mb-2">Contagem Atual:</p>
          <p id="numero" className={`text-4xl font-bold ${corTexto}`}>
            {count}
          </p>
        </div>

        <div className="flex gap-2 justify-center">
          <button
            onClick={handleDecrement}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            -1
          </button>

          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            Reset
          </button>

          <button
            onClick={handleIncrement}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            +1
          </button>
        </div>

        {/* Barra de Progresso */}
        <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-300 ease-in-out ${
              barra < 30
                ? "bg-red-500"
                : barra < 70
                ? "bg-yellow-500"
                : "bg-green-500"
            }`}
            style={{ width: `${barra}%` }}
          ></div>
        </div>

        <p className="text-center text-gray-700">{barra}%</p>
      </div>
    </div>
  );
};

export default SavedCounter;
