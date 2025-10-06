'use client'

import { useState } from 'react';
import { DatePicker } from '@mantine/dates';
import { Button, Popover } from '@mantine/core';
import { IconCalendar } from '@tabler/icons-react';
import 'dayjs/locale/de';

interface DateComponentProps {
  date: Date | null;
  onChange: (date: Date | null) => void;
}

export default function DateComponent({ date, onChange }: DateComponentProps) {
  const [opened, setOpened] = useState(false);

  const handleDateChange = (value: string | null) => {
    const dateValue = value ? new Date(value) : null;
    onChange(dateValue);
    setOpened(false);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <div>
      <Popover opened={opened} onChange={setOpened}>
        <Popover.Target>
          <Button 
            onClick={() => setOpened(!opened)}
            leftSection={<IconCalendar size={18} />}
            variant={date ? 'filled' : 'light'}
            styles={{
              root: {
                backgroundColor: date ? '#228BE6' : 'transparent',
                color: 'white',
                border: '1px solid #404040',
              }
            }}
          >
            {date ? formatDate(date) : 'Datum'}
          </Button>
        </Popover.Target>
        <Popover.Dropdown
          styles={{
            dropdown: {
              backgroundColor: '#1a1b1e',
              border: '1px solid #373a40',
            }
          }}
        >
          <DatePicker
            locale="de"
            value={date}
            onChange={handleDateChange}
            styles={{
              day: {
                color: 'white',
                backgroundColor: '#1a1b1e',
                '&:hover': {
                  backgroundColor: '#2D2D2D',
                },
                '&[dataSelected]': {
                  backgroundColor: '#228BE6',
                  color: 'white',
                },
              },
              calendarHeader: {
                color: 'white',
              },
              weekday: {
                color: '#909296',
              },
              yearsList: {
                color: 'white',
              },
              monthsList: {
                color: 'white',
              },
            }}
          />
        </Popover.Dropdown>
      </Popover>
    </div>
  );
}