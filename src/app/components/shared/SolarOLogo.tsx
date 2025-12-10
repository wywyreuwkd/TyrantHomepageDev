interface SolarOLogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function SolarOLogo({ size = 'medium', className = '' }: SolarOLogoProps) {
  const sizes = {
    small: {
      solarFontSize: 'text-[20px]',
      oSizeClass: 'w-[32px] h-[32px]',
      oBorderClass: 'border-[8px] border-accent',
      gapClass: 'gap-1', // 4px
    },
    medium: {
      solarFontSize: 'text-[32px]',
      oSizeClass: 'w-[52px] h-[52px]',
      oBorderClass: 'border-[12px] border-accent',
      gapClass: 'gap-1.5', // 6px
    },
    large: {
      solarFontSize: 'text-[90px]',
      oSizeClass: 'w-[160px] h-[160px]',
      oBorderClass: 'border-[40px] border-accent',
      gapClass: 'gap-3', // 12px
    },
  };

  const config = sizes[size];

  return (
    <div className={`inline-flex items-center ${config.gapClass} ${className}`}>
      <span
        className={`color-white ${config.solarFontSize} font-black tracking-normal leading-none`}
      >
        SOLAR
      </span>
      {/* Donut-shaped 0 */}
      <div
        className={`rounded-full ${config.oSizeClass} ${config.oBorderClass} bg-transparent shrink-0`}
      />
    </div>
  );
}