const pessoa = {
  nome: "marcos",
  idade: 12,
  sexo: "M",
};

export function Card() {
  return (
    <div className="max-w-sm rounded-lg h-48 w-80 border border-gray-200 bg-white shadow-lg p-6">
      <h1 className="text-xl font-bold text-gray-800">Bom dia</h1>
      <p className="text-lg text-gray-600 mt-2">Nome: {pessoa.nome}</p>
      <h2 className="text-lg text-gray-600">Idade: {pessoa.idade}</h2>
      <p className="text-lg text-gray-600">
        Sexo: {pessoa.sexo === "M" ? "Masculino" : "Feminino"}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="flex justify-center align-middle h-screen border">
        <Card />
      </div>
    </>
  );
}
