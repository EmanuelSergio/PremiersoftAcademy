export default function Card({ objeto }) {
  return (
    <div className="max-w-sm rounded-lg h-48 w-80 border border-gray-200 bg-white shadow-lg p-6">
      <h1 className="text-xl font-bold text-gray-800">Bom dia</h1>
      <p className="text-lg text-gray-600 mt-2">Nome: {objeto.nome}</p>
      <h2 className="text-lg text-gray-600">Idade: {objeto.idade}</h2>
      <p className="text-lg text-gray-600">
        Sexo: {objeto.sexo === "M" ? "Masculino" : "Feminino"}
      </p>
      <p className="text-lg text-gray-600">É salvo: {}</p>
    </div>
  );
}
