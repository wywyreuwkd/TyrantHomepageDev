"use client"

import { useEffect, useState } from "react";

interface ConsultItem {
  id: number;
  name: string;
  location: string;
  car: string;
  time: string;
  type: '상담완료' | '상담중';
}

const consultData: ConsultItem[] = [
  { id: 1, name: '이**', location: '서울 강남', car: 'G80 리스', time: '방금 전', type: '상담중' },
  { id: 2, name: '조**', location: '경기 성남', car: '그랜저 하이브리드 장기렌트', time: '1분 전', type: '상담완료' },
  { id: 3, name: '김**', location: '서울 송파', car: '아이오닉5 리스', time: '3분 전', type: '상담중' },
  { id: 4, name: '박**', location: '인천 남동', car: 'GV70 장기렌트', time: '5분 전', type: '상담완료' },
  { id: 5, name: '최**', location: '경기 수원', car: '카니발 리스', time: '8분 전', type: '상담완료' },
  { id: 6, name: '강**', location: '경기 부천', car: 'GV80 리스', time: '11분 전', type: '상담중'},
  { id: 7, name: '정**', location: '서울 강서', car: '팰리세이드 장기렌트', time: '12분 전', type: '상담완료' },
  { id: 8, name: '강**', location: '경기 안양', car: 'K8 리스', time: '15분 전', type: '상담중' },
  { id: 9, name: '윤**', location: '서울 마포', car: 'EV6 장기렌트', time: '18분 전', type: '상담완료' },
];

export function LiveConsultSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % consultData.length);
        setIsAnimating(false);
      }, 600);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 6; i++) {
      const index = (currentIndex + i) % consultData.length;
      items.push({ ...consultData[index], key: `${consultData[index].id}-${currentIndex + i}` });
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <div className="w-full flex justify-center items-center bg-white py-8 md:py-16 lg:py-20">
      <div className="w-full max-w-[900px] mx-auto px-4 md:px-6">
        {/* LIVE Label */}
        <div className="flex items-center justify-center mb-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-[#ff0000] rounded-[4px]">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse-custom" />
            <span className="font-['Pretendard',sans-serif] text-[13px] font-bold text-white tracking-[0.05em]">
              실시간 상담중
            </span>
          </div>
        </div>

        {/* Title */}
        <h2
          className="text-center mb-6 md:mb-12 font-['Nexon_Tire_B',sans-serif] text-[clamp(32px,8vw,70px)] font-bold text-[#1a5dab] tracking-[-0.02em] leading-[1.2]"
        >
          실시간 상담 현황
        </h2>

        {/* Consult Cards */}
        <div 
          className="relative overflow-hidden h-[600px] bg-[#f8f9fa] p-4 px-2 border-2 border-[#e0e0e0]"
        >
          <div
            className={`px-2 md:px-4 ${isAnimating ? 'transition-transform duration-[600ms] ease-in-out -translate-y-[116px]' : 'translate-y-0'}`}
          >
            {visibleItems.map((item, index) => (
              <div
                key={item.key}
                className="mb-5"
              >
                <div className="bg-white border-2 border-[#1a5dab] py-6 px-8 flex items-center justify-between gap-6 shadow-[0_4px_12px_rgba(26,93,171,0.15)] h-24">
                  {/* Left Section - Name & Location */}
                  <div className="flex items-center gap-4 min-w-[160px]">
                    <div
                      className={`w-12 h-12 flex items-center justify-center font-['Pretendard',sans-serif] text-base font-bold text-white ${
                        item.type === '상담중' ? 'bg-[#bb0305]' : 'bg-[#1a5dab]'
                      }`}
                    >
                      {item.name}
                    </div>
                    <div>
                      <div className="font-['Pretendard',sans-serif] text-[15px] font-medium text-[#666666]">
                        {item.location}
                      </div>
                    </div>
                  </div>

                  {/* Middle Section - Car Info */}
                  <div className="flex-1">
                    <div className="font-['Pretendard',sans-serif] text-lg font-semibold text-[#1a1a1a]">
                      {item.car}
                    </div>
                  </div>

                  {/* Right Section - Time & Status */}
                  <div className="flex items-center gap-4">
                    <div className="font-['Pretendard',sans-serif] text-sm font-medium text-[#999999]">
                      {item.time}
                    </div>
                    <div
                      className={`py-2 px-5 font-['Pretendard',sans-serif] text-sm font-bold text-white whitespace-nowrap ${
                        item.type === '상담중' ? 'bg-[#bb0305]' : 'bg-[#1a5dab]'
                      }`}
                    >
                      {item.type}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="text-center mt-8 font-['Pretendard',sans-serif] text-sm font-medium text-[#666666]">
          ※ 실시간으로 상담이 진행되고 있습니다. 빠른 상담을 원하시면 지금 문의해주세요!
        </div>
      </div>
    </div>
  );
}