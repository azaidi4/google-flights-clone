'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { ArrowRightIcon, CalendarIcon } from 'lucide-react';
import {
  DateRange,
  DayPickerRangeProps,
  SelectRangeEventHandler,
} from 'react-day-picker';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export function DatePickerWithRange({
  className,
  dateRange,
  onSelectDateRange,
  formError,
  calendarProps,
}: React.HTMLAttributes<HTMLDivElement> & {
  dateRange: DateRange | undefined;
  onSelectDateRange: SelectRangeEventHandler;
  formError?: string;
  calendarProps?: Partial<DayPickerRangeProps>;
}) {
  return (
    <div className={cn('grid', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'outline'}
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !dateRange && 'text-muted-foreground'
            )}>
            <CalendarIcon />
            {/* <span className="text-neutral-950 dark:text-neutral-50"> */}
            <>
              {dateRange?.from
                ? format(dateRange.from, 'LLL dd, y')
                : 'Departure'}
              <ArrowRightIcon className="mx-3 inline" />
              {dateRange?.to ? format(dateRange.to, 'LLL dd, y') : 'Return'}
            </>
            {/* </span> */}
          </Button>
        </PopoverTrigger>
        <div className="ml-0.5 text-[0.8rem] font-medium text-destructive">
          {formError}
        </div>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={onSelectDateRange}
            numberOfMonths={2}
            {...calendarProps}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
