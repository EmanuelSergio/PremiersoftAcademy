import { useEffect, useState } from "react";

interface Repository {
  id: string;
  url: string;
  name: string;
  width: number;
  height: number;
  reference_image_id: string;
  origin: string;
  description: string;
  dog_friendly: number;
  energy_level: number;
}

const url: string = "https://github.com/jonsenapremiersoft/next/";

export default function Cadastro() {
  const [dogs, setDogs] = useState<Repository[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return setDogs(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {dogs.map((repo) => (
        <div
          key={repo.id}
          className={`p-4 border rounded-lg shadow hover:shadow-md w-[${repo.width}px] h-[${repo.height}px]`}
        >
          <img
            src={`https://cdn2.thecatapi.com/images/${repo.reference_image_id}.jpg`}
            alt=""
          />
          <h1 className="text-xl font-bold">{repo.name}</h1>
          <p className="text-gray-600">Descrição: {repo.description}</p>
          <ul className="mt-4">
            <li>Nivel de amizade com cães: {repo.dog_friendly}</li>
            <li>Nivel de energia: {repo.energy_level}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
