import React from 'react';

interface HeroSectionProps {
  backgroundImage: string;
}

export function HeroSection({ backgroundImage }: HeroSectionProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] bg-gray-900 overflow-hidden">
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-all duration-[3000ms] hover:scale-110 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative max-w-[1280px] mx-auto h-full flex flex-col items-center justify-center text-white px-4">
        <h1 
          className={`text-5xl md:text-7xl mb-4 font-semibold tracking-tight transition-all duration-[3000ms] delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          조&김
        </h1>
        <p 
          className={`text-lg md:text-2xl text-gray-200 font-light transition-all duration-[3000ms] delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          프리미엄 차량 서비스
        </p>
      </div>
    </div>
  );
}