import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Users, Award, Building2 } from "lucide-react";
import choiJaeHwangPhoto from "figma:asset/8c54d59690985b36ba345dda0aee00047f4dd155.png";
import { HanwhaSystemsCard } from "./HanwhaSystemsCard";
import { DaeboCard } from "./DaeboCard";
import { ChoiCardClean } from "./ChoiCardClean";
import { HanwhaCardClean } from "./HanwhaCardClean";
import { DaeboCardClean } from "./DaeboCardClean";

export function PartnersCarousel() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const cards = [
    { component: <ChoiCardClean />, name: "한강에셋" },
    { component: <HanwhaCardClean />, name: "한화시스템" },
    { component: <DaeboCardClean />, name: "대보에너지솔루션" }
  ];

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % 3);
    }, 4000); // 4초마다 자동 슬라이드

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false); // 클릭하면 자동재생 멈춤
    setCurrentCard(currentCard === 0 ? 2 : currentCard - 1);
  };

  const handleNext = () => {
    setIsAutoPlaying(false); // 클릭하면 자동재생 멈춤
    setCurrentCard((currentCard + 1) % 3);
  };

  const handleDotClick = (idx: number) => {
    setIsAutoPlaying(false); // 클릭하면 자동재생 멈춤
    setCurrentCard(idx);
  };

  const getCardPosition = (index: number) => {
    const diff = index - currentCard;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === -2) return 'right';
    if (diff === -1 || diff === 2) return 'left';
    return 'hidden';
  };

  return (
    <div style={{ position: 'relative', width: '100%', marginTop: '60px' }}>
      {/* Navigation Buttons */}
      <button
        onClick={handlePrevious}
        aria-label="Previous card"
        style={{
          position: 'absolute',
          left: 'calc(50% - 580px)',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: '#0F214A',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          zIndex: 10,
          boxShadow: '0 2px 12px rgba(15, 33, 74, 0.25)',
          color: 'white'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#273b82';
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 33, 74, 0.35)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#0F214A';
          e.currentTarget.style.boxShadow = '0 2px 12px rgba(15, 33, 74, 0.25)';
        }}
      >
        <ChevronLeft size={24} strokeWidth={2} />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next card"
        style={{
          position: 'absolute',
          right: 'calc(50% - 580px)',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: '#0F214A',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          zIndex: 10,
          boxShadow: '0 2px 12px rgba(15, 33, 74, 0.25)',
          color: 'white'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#273b82';
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 33, 74, 0.35)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#0F214A';
          e.currentTarget.style.boxShadow = '0 2px 12px rgba(15, 33, 74, 0.25)';
        }}
      >
        <ChevronRight size={24} strokeWidth={2} />
      </button>

      {/* Cards Container */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '1200px',
        overflow: 'visible',
        position: 'relative',
        padding: '0 60px'
      }}>
        {cards.map((card, index) => {
          const position = getCardPosition(index);
          
          return (
            <div
              key={index}
              style={{
                position: 'absolute',
                width: position === 'center' ? '700px' : '480px',
                transform: 
                  position === 'center' 
                    ? 'translateX(0) scale(1)' 
                    : position === 'left'
                    ? 'translateX(-660px) scale(0.8)'
                    : position === 'right'
                    ? 'translateX(660px) scale(0.8)'
                    : 'translateX(0) scale(0.8)',
                opacity: position === 'hidden' ? 0 : position === 'center' ? 1 : 0.45,
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                zIndex: position === 'center' ? 3 : 1,
                filter: position === 'center' ? 'blur(0px)' : 'blur(1px)',
                pointerEvents: position === 'center' ? 'auto' : 'none'
              }}
            >
              {card.component}
            </div>
          );
        })}
      </div>

      {/* Dots Indicator */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        marginTop: '50px'
      }}>
        {cards.map((card, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            aria-label={`Go to ${card.name}`}
            style={{
              width: currentCard === idx ? '48px' : '12px',
              height: '12px',
              borderRadius: '6px',
              background: currentCard === idx ? '#0F214A' : '#D0D0D0',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>

      {/* Auto-play indicator (optional) */}
      {!isAutoPlaying && (
        <div style={{
          position: 'absolute',
          bottom: '-60px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
          fontSize: '12px',
          color: '#999',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <div style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#999'
          }} />
          자동 슬라이드 일시정지
        </div>
      )}
    </div>
  );
}