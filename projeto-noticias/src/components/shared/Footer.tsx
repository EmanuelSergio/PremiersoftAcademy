import { SeparatorHorizontal, SeparatorVertical } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          {/* Separator for visual division */}
          <SeparatorHorizontal className="mb-6 border-gray-700" />

          <div className="flex flex-wrap justify-between items-center">
            {/* Left Section */}
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold">Meu Projeto</h2>
              <p className="text-sm text-gray-400">
                © 2024 Todos os direitos reservados.
              </p>
            </div>

            {/* Right Section - Links */}
            <nav className="flex space-x-4">
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Sobre
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Contato
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Política de Privacidade
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
