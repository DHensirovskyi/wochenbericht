'use client'

import { Button } from "@mantine/core";
import * as XLSX from 'xlsx';
import { CardData } from "../page";

interface DownloadBtnProps {
  cardsData: CardData[];
}

export default function DownloadBtn({ cardsData }: DownloadBtnProps) {
  
  const handleDownload = () => {
    const excelData: any[] = [];
    
    cardsData.forEach(card => {
      const dateStr = card.date ? card.date.toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }) : '';
      
      const description = card.description || '';
      const midPoint = Math.ceil(description.length / 2);
      const firstHalf = description.substring(0, midPoint).trim();
      const secondHalf = description.substring(midPoint).trim();
      
      excelData.push({
        'Datum': dateStr,
        'Zeit Start': card.pauseStartTime,
        'Zeit Ende': card.pauseEndTime,
        'Beschreibung': firstHalf
      });
      
      excelData.push({
        'Datum': dateStr,
        'Zeit Start': card.workStartTime,
        'Zeit Ende': card.workEndTime,
        'Beschreibung': secondHalf
      });
    });

    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Wochenbericht');

    const colWidths = [
      { wch: 12 }, // Datum
      { wch: 12 }, // Zeit Start
      { wch: 12 }, // Zeit Ende
      { wch: 60 }  // Beschreibung
    ];
    ws['!cols'] = colWidths;

    const fileName = `Wochenbericht_${new Date().toLocaleDateString('de-DE').replace(/\./g, '-')}.xlsx`;
    XLSX.writeFile(wb, fileName);
  };

  return (
    <div className="flex justify-center">
      <Button
        unstyled
        className="py-3 px-8 border border-white/40 rounded-[10px] cursor-pointer 
                   hover:bg-[#1b1b1b] hover:border-[#3BC088] 
                   hover:scale-105 hover:text-[#3BC088] 
                   duration-200 ease-in-out active:scale-100"
        onClick={handleDownload}
      >
        Als XLS Herunterladen
      </Button>
    </div>
  );
}