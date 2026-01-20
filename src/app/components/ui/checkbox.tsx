"use client";

import * as React from "react";
import { CheckIcon } from "lucide-react";
import { cn } from "./utils";

interface CheckboxProps extends Omit<React.ComponentProps<"input">, "type" | "onChange"> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

function Checkbox({
  className,
  checked,
  onCheckedChange,
  ...props
}: CheckboxProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onCheckedChange) {
      onCheckedChange(e.target.checked);
    }
  };

  return (
    <div className="relative inline-flex">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={handleChange}
        {...props}
      />
      <div
        data-slot="checkbox"
        className={cn(
          "peer border bg-white peer-checked:bg-blue-600 peer-checked:text-white peer-checked:border-blue-600 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border-gray-300 shadow-xs transition-all outline-none peer-focus-visible:ring-[3px] peer-disabled:cursor-not-allowed peer-disabled:opacity-50 flex items-center justify-center cursor-pointer",
          className
        )}
      >
        {checked && (
          <div
            data-slot="checkbox-indicator"
            className="flex items-center justify-center text-current transition-none"
          >
            <CheckIcon className="size-3.5" />
          </div>
        )}
      </div>
    </div>
  );
}

export { Checkbox };
