// app/page.tsx
import { ThemeToggle } from "@/components/ThemeToggle";
import Home2 from "./home/page";
import Sidebar from "@/components/SideBar";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex ">
        <Sidebar></Sidebar>
        <div className="max-w-2xl mx-auto pt-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Theme Switcher Example</h1>
            <ThemeToggle />
          </div>

          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <p>Este conteúdo se adapta ao tema atual!</p>
          </div>

          <Home2></Home2>
        </div>
      </main>
    </>
  );
}
