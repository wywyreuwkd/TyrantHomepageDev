interface SolarOLogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function SolarOLogo({ size = 'medium', className = '' }: SolarOLogoProps) {
  const sizes = {
    small: {
      solarFontSize: '20px',
      oSize: '32px',
      oBorder: '8px',
      gap: '4px',
    },
    medium: {
      solarFontSize: '28px',
      oSize: '42px',
      oBorder: '10px',
      gap: '6px',
    },
    large: {
      solarFontSize: '90px',
      oSize: '160px',
      oBorder: '40px',
      gap: '12px',
    },
  };

  const config = sizes[size];

  return (
    <div className={`inline-flex items-center ${className}`} style={{ gap: config.gap }}>
      <span 
        className="text-white" 
        style={{ 
          fontSize: config.solarFontSize, 
          fontWeight: '900',
          fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, "Arial Black", sans-serif',
          letterSpacing: '0px',
          lineHeight: '1'
        }}
      >
        SOLAR
      </span>
      {/* Donut-shaped O */}
      <div 
        className="rounded-full" 
        style={{ 
          width: config.oSize, 
          height: config.oSize,
          border: `${config.oBorder} solid #FF6A3D`,
          backgroundColor: 'transparent',
          flexShrink: 0
        }}
      />
    </div>
  );
}