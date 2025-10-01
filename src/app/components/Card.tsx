import { Textarea } from "@mantine/core";
import DateComponent from "./DateComponent";
import TimePickerComponent from "./TimePicker";
import { TimePicker } from "@mantine/dates";


export default function Card() {
  return (
    <section className="flex flex-col gap-[10px] mb-10">
      <div className="p-4 rounded-t-[10px] text-center min-h-[58px] bg-[#383838]/50 font-semibold">
        <DateComponent/>
      </div>
      
      <div className="p-4 min-h-[200px] bg-[#383838]/50">
        <Textarea 
          label="Tagesbericht" 
          placeholder="Geben Sie hier Ihren Text ein..."
          autosize
          minRows={4}
          className="w-full"
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
      <TimePickerComponent/>
      <div className="grid grid-cols-2 gap-[10px] justify-between font-semibold">
              <div className="p-3 rounded-bl-[10px] text-center min-h-[30px] bg-[#383838]/50">
                <TimePicker 
                defaultValue="00:00"
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
                defaultValue="00:00"
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