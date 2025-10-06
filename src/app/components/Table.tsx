import Card from "./Card";
import { CardData } from "../page";

interface TableProps {
  cardsData: CardData[];
  updateCardData: (id: number, field: keyof CardData, value: any) => void;
}

export default function Table({ cardsData, updateCardData }: TableProps) {
  return (
    <section className="grid xl:grid-cols-5 sm:grid-cols-2 gap-5 w-full grid-cols-1">
      {cardsData.map((cardData) => (
        <Card 
          key={cardData.id}
          cardData={cardData}
          updateCardData={updateCardData}
        />
      ))}
    </section>
  );
}