import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Bem-vindo!</h1>
      <p>Este é um template básico para seu projeto Next.js.</p>
      <li>
        <Link href="/github" className="hover:text-gray-300">
          Repositorios
        </Link>
      </li>
    </div>
  );
}
