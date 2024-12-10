export default function CardCars({ objeto, titulo = "carro", onClick }) {
  return (
    <div
      className="max-w-sm rounded-lg min-h-48 w-80 border-gray-200 bg-white shadow-lg p-6 cursor-pointer"
      onClick={() => onClick(objeto)} // Passa o item clicado para a função `onClick`
    >
      <h1 className="text-xl font-bold text-gray-800">{titulo}</h1>
      <p className="text-lg text-gray-600 mt-2">Nome: {objeto.nome}</p>
      <h2 className="text-lg text-gray-600">Marca: {objeto.marca}</h2>
      <p className="text-lg text-gray-600">Ano: {objeto.ano}</p>
    </div>
  );
}
