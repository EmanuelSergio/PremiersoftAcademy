"use client";

import { useTheme } from "@/contexts/ThemeContext";

export default function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className=" text-2xl font-bold">
            🍕 Pizzaria
          </a>
        </div>
      </div>

      <nav></nav>
    </header>
  );
}
