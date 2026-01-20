"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { DayPicker, DayPickerProps } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { cn } from "./utils";
import { buttonVariants } from "./button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      weekStartsOn={0}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-2",
        caption: "flex justify-center pt-1 pb-2 relative items-center w-full",
        caption_label: "text-base font-semibold text-gray-900",
        nav: "flex items-center gap-1",
        // nav_button: cn(
        //   "size-8 bg-white border border-gray-200 rounded-md p-0 hover:bg-gray-100 transition-all inline-flex items-center justify-center",
        // ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse",
        head_row: "grid grid-cols-7",
        head_cell:
          "text-gray-500 rounded-md font-medium text-sm text-center py-1 flex items-center justify-center",
        row: "grid grid-cols-7 w-full mt-0.5",
        cell: "relative text-center text-sm p-0 flex items-center justify-center",
        // day: cn(
        //   "w-9 h-9 p-0 font-normal rounded-md hover:bg-gray-100 transition-all inline-flex items-center justify-center cursor-pointer text-gray-900",
        // ),
        day_range_start:
          "day-range-start",
        day_range_end:
          "day-range-end",
        day_selected:
          "bg-[#0071e3] text-white hover:bg-[#0077ed] focus:bg-[#0071e3]",
        day_today: "bg-gray-100 text-gray-900 font-semibold",
        day_outside:
          "day-outside text-gray-400 opacity-50",
        day_disabled: "text-gray-300 opacity-30 cursor-not-allowed hover:bg-transparent",
        day_range_middle:
          "aria-selected:bg-blue-50 aria-selected:text-blue-600",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        // IconLeft: ({ className, ...props }) => (
        //   <ChevronLeft className={cn("size-4 text-gray-600", className)} {...props} />
        // ),
        // IconRight: ({ className, ...props }) => (
        //   <ChevronRight className={cn("size-4 text-gray-600", className)} {...props} />
        // ),
        Chevron: ({ orientation }) => {
          const Icon = orientation === 'left' ? ChevronLeftIcon : ChevronRightIcon;
          return <Icon className='h-4 w-4' />;
        },
      }}
      {...props}
    />
  );
}

export { Calendar };
