// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img
        src="https://thumbs.dreamstime.com/z/quem-se-importa-o-emoticon-42424037.jpg"
        width={400}
        alt=""
      />
      <h2>Página não encontrada</h2>
      <p>Não foi possível encontrar o recurso solicitado</p>
      <Link href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Voltar para Home
      </Link>
    </div>
  );
}
