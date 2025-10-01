'use client'

import { TimePicker } from "@mantine/dates";
import 'dayjs/locale/de';

export default function TimePickerComponent() {
    return(
        <section>
            <div className="grid grid-cols-2 gap-[10px] justify-between font-semibold">
            <div className="p-3 text-center min-h-[30px] bg-[#383838]/50">
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
            <div className="p-3 text-center min-h-[30px] bg-[#383838]/50">
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
    )
}
