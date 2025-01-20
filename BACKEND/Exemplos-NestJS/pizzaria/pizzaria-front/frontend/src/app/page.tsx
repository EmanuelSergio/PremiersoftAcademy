import Image from "next/image";
import PizzaCard from "@/components/features/pizza/pizzaCard";

export default function Home() {
  return (
    <div className="flex my-24 justify-center align-middle">
      <PizzaCard pizzaName="pizza de calabresa"></PizzaCard>
    </div>
  );
}
