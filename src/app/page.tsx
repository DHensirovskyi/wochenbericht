'use client'

import { useState } from "react";
import Table from "./components/Table";
import DownloadBtn from "./components/DownloadBtn";

export interface CardData {
  id: number;
  date: Date | null;
  description: string;
  pauseStartTime: string;
  pauseEndTime: string;
  workStartTime: string;
  workEndTime: string;
}

export default function HomePage() {
  const [cardsData, setCardsData] = useState<CardData[]>([
    { id: 1, date: null, description: '', pauseStartTime: '00:00', pauseEndTime: '00:00', workStartTime: '00:00', workEndTime: '00:00' },
    { id: 2, date: null, description: '', pauseStartTime: '00:00', pauseEndTime: '00:00', workStartTime: '00:00', workEndTime: '00:00' },
    { id: 3, date: null, description: '', pauseStartTime: '00:00', pauseEndTime: '00:00', workStartTime: '00:00', workEndTime: '00:00' },
    { id: 4, date: null, description: '', pauseStartTime: '00:00', pauseEndTime: '00:00', workStartTime: '00:00', workEndTime: '00:00' },
    { id: 5, date: null, description: '', pauseStartTime: '00:00', pauseEndTime: '00:00', workStartTime: '00:00', workEndTime: '00:00' },
  ]);

  const updateCardData = (id: number, field: keyof CardData, value: string | Date | null) => {
  setCardsData(prev => prev.map(card => 
    card.id === id ? { ...card, [field]: value } : card
  ));
};

  return (
    <main className="flex justify-center py-10 px-4 lg:px-0">
      <section className="w-full max-w-[1350px] text-white flex flex-col gap-6">
        <Table cardsData={cardsData} updateCardData={updateCardData} />
        <DownloadBtn cardsData={cardsData} />
      </section>
    </main>
  );
}