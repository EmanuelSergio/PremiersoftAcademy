import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface PizzaCardProps {
  pizzaName: string;
}

const PizzaCard: React.FC<PizzaCardProps> = ({ pizzaName }) => {
  return (
    <>
      <Card className="w-80">
        <CardHeader>
          <CardTitle>{pizzaName}</CardTitle>
          <CardDescription>Descricao pizza</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </>
  );
};

export default PizzaCard;
