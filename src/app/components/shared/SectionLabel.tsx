export function LabelAccent({ label }: { label: string }) {
  return (
    <div
      className="
        inline-flex items-center gap-2 px-4 py-1 md:py-2 mb-4 md:mb-6 
        bg-accent-10
        border-[1px] border-accent-30
        rounded-full
      "
    >
      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
      <span className="text-xs md:text-sm font-bold color-accent tracking-widest">
        {label}
      </span>
    </div>
  );
}

export function LabelGray({ label }: { label: string }) {
  return (
    <div
      className="
        inline-flex items-center gap-2 px-4 py-1 md:py-2 mb-4 md:mb-6 
        bg-primary-5
        border-[1px] border-primary-10
        rounded-full
      "
    >
      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
      <span className="text-xs md:text-sm font-bold color-primary tracking-widest">
        {label}
      </span>
    </div>
  );
}

export function LabelWhite({ label }: { label: string }) {
  return (
    <div
      className="
        inline-flex items-center gap-2 px-4 py-1 md:py-2 mb-4 md:mb-6 
        bg-white
        border-[1px] border-primary-20
        rounded-full
      "
    >
      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
      <span className="text-xs md:text-sm font-bold color-primary tracking-widest">
        {label}
      </span>
    </div>
  );
}