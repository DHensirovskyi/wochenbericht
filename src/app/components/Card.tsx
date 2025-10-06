'use client'

import { Textarea } from "@mantine/core";
import { TimePicker } from "@mantine/dates";
import DateComponent from "./DateComponent";
import { CardData } from "../page";

interface CardProps {
  cardData: CardData;
  updateCardData: (id: number, field: keyof CardData, value: string | Date | null) => void;
}

export default function Card({ cardData, updateCardData }: CardProps) {
  return (
    <section className="flex flex-col gap-[10px] mb-10">
      <div className="p-4 rounded-t-[10px] text-center min-h-[58px] bg-[#383838]/50 font-semibold">
        <DateComponent
          date={cardData.date}
          onChange={(date) => updateCardData(cardData.id, 'date', date)}
        />
      </div>
      
      <div className="p-4 min-h-[200px] bg-[#383838]/50">
        <Textarea 
          label="Tagesbericht" 
          placeholder="Geben Sie hier Ihren Text ein..."
          autosize
          minRows={4}
          className="w-full"
          value={cardData.description}
          onChange={(e) => updateCardData(cardData.id, 'description', e.target.value)}
          styles={{
            root: {
              width: '100%',
            },
            input: {
              width: '100%',
              backgroundColor: '#2D2D2D',
              border: '1px solid #404040',
              color: 'white',
              resize: 'vertical',
              '&:focus': {
                borderColor: '#228BE6',
              },
              '&::placeholder': {
                color: '#A0A0A0',
              }
            },
            label: {
              color: 'white',
            },
            description: {
              color: '#A0A0A0',
            }
          }}
        />
      </div>
      
      <section>
        <div className="grid grid-cols-2 gap-[10px] justify-between font-semibold">
          <div className="p-3 text-center min-h-[30px] bg-[#383838]/50">
            <TimePicker 
              value={cardData.pauseStartTime}
              onChange={(value) => updateCardData(cardData.id, 'pauseStartTime', value || '00:00')}
              styles={{
                input: {
                  backgroundColor: '#2D2D2D',
                  color: 'white',
                  border: '1px solid #404040',
                  '&:focus': {
                    borderColor: '#228BE6',
                  },
                  '&::placeholder': {
                    color: '#A0A0A0',
                  }
                },
                field: {
                  color: 'white',
                }
              }}
            />
          </div>
          <div className="p-3 text-center min-h-[30px] bg-[#383838]/50">
            <TimePicker
              value={cardData.pauseEndTime}
              onChange={(value) => updateCardData(cardData.id, 'pauseEndTime', value || '00:00')}
              styles={{
                input: {
                  backgroundColor: '#2D2D2D',
                  color: 'white',
                  border: '1px solid #404040',
                  '&:focus': {
                    borderColor: '#228BE6',
                  },
                  '&::placeholder': {
                    color: '#A0A0A0',
                  }
                },
                field: {
                  color: 'white',
                }
              }}
            />
          </div>
        </div>
      </section>
      
      <div className="grid grid-cols-2 gap-[10px] justify-between font-semibold">
        <div className="p-3 rounded-bl-[10px] text-center min-h-[30px] bg-[#383838]/50">
          <TimePicker 
            value={cardData.workStartTime}
            onChange={(value) => updateCardData(cardData.id, 'workStartTime', value || '00:00')}
            styles={{
              input: {
                backgroundColor: '#2D2D2D',
                color: 'white',
                border: '1px solid #404040',
                '&:focus': {
                  borderColor: '#228BE6',
                },
                '&::placeholder': {
                  color: '#A0A0A0',
                }
              },
              field: {
                color: 'white',
              }
            }}
          />
        </div>
        <div className="p-3 rounded-br-[10px] text-center min-h-[30px] bg-[#383838]/50">
          <TimePicker
            value={cardData.workEndTime}
            onChange={(value) => updateCardData(cardData.id, 'workEndTime', value || '00:00')}
            styles={{
              input: {
                backgroundColor: '#2D2D2D',
                color: 'white',
                border: '1px solid #404040',
                '&:focus': {
                  borderColor: '#228BE6',
                },
                '&::placeholder': {
                  color: '#A0A0A0',
                }
              },
              field: {
                color: 'white',
              }
            }}
          />
        </div>
      </div>
    </section>
  );
}