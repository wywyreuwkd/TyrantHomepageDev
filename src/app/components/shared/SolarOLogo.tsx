interface SolarOLogoProps {
  size?: 'small' | 'medium' | 'responsiveLarge' | 'large';
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
    responsiveLarge: {
      // medium(32px) ~ large(90px) 사이를 화면 너비에 따라 순차적으로 변경
      solarFontSize: 'text-[clamp(48px,8vw,90px)]',
      oSizeClass: 'w-[clamp(72px,12vw,160px)] h-[clamp(72px,12vw,160px)]',
      oBorderClass: 'border-[clamp(19px,3vw,40px)] border-accent',
      gapClass: 'gap-[clamp(12px,1.5vw,12px)]',
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