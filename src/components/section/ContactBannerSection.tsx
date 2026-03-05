"use client"

import { Phone, MessageCircle, ChevronRight } from "lucide-react";

export function ContactBannerSection() {
  const handlePhoneClick = () => {
    window.location.href = 'tel:1800-6301';
  };

  const handleKakaoClick = () => {
    // 카카오톡 채널 링크로 연결
    window.open('https://pf.kakao.com/_your_channel_id', '_blank');
  };

  return (
    <div className="flex justify-center items-center bg-white px-4 md:px-0 pt-0 pb-[50px]">
      <div className="w-full max-w-[900px] flex flex-col gap-4">
        {/* Phone Consultation Banner */}
        <div 
          onClick={handlePhoneClick}
          className="relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl h-[140px] bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] border-[3px] border-[#1a5dab]"
        >
          <div className="h-full flex items-center justify-between px-4 md:px-12">
            <div className="flex items-center gap-3 md:gap-6 flex-1">
              <div className="flex items-center justify-center flex-shrink-0 w-[60px] h-[60px] bg-[#1a5dab]">
                <Phone className="w-7 h-7 md:w-10 md:h-10 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs md:text-base mb-1 md:mb-2 font-['Pretendard',sans-serif] font-semibold text-gray-500 tracking-[-0.01em]">
                  전화 한 통으로 빠른 상담을 받아보세요
                </p>
                <p className="font-['Nexon_Lv1_Gothic_OTF',sans-serif] text-[clamp(24px,5vw,42px)] font-black text-[#1a5dab] tracking-[0.02em] leading-none">
                  1800-6301
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 font-['Pretendard',sans-serif] font-bold text-lg text-[#1a5dab]">
              <span>전화 상담 신청하기</span>
              <ChevronRight className="w-6 h-6" strokeWidth={3} />
            </div>
            <div className="flex md:hidden items-center">
              <ChevronRight className="w-6 h-6 text-[#1a5dab]" strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* KakaoTalk Consultation Banner */}
        <div 
          onClick={handleKakaoClick}
          className="relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl h-[140px] bg-[#FEE500] border-[3px] border-[#FEE500]"
        >
          <div className="h-full flex items-center justify-between px-4 md:px-12">
            <div className="flex items-center gap-3 md:gap-6 flex-1">
              <div className="flex items-center justify-center flex-shrink-0 w-[72px] h-[72px] bg-[#3C1E1E] relative">
                <MessageCircle 
                  className="w-8 h-8 md:w-10 md:h-10 [filter:drop-shadow(0_2px_4px_rgba(0,0,0,0.2))]" 
                  strokeWidth={0}
                  fill="#FEE500"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs md:text-base mb-1 md:mb-2 font-['Pretendard',sans-serif] font-semibold text-[#3C1E1E] tracking-[-0.01em]">
                  언제 어디서나 편리하게 상담하세요
                </p>
                <p className="text-xl md:text-[32px] font-['Nexon_Lv1_Gothic_OTF',sans-serif] font-black text-[#3C1E1E] tracking-[-0.01em] leading-none">
                  카카오톡 상담
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 font-['Pretendard',sans-serif] font-bold text-lg text-[#3C1E1E]">
              <span>카톡 상담 바로가기</span>
              <ChevronRight className="w-6 h-6" strokeWidth={3} />
            </div>
            <div className="flex md:hidden items-center">
              <ChevronRight className="w-6 h-6 text-[#3C1E1E]" strokeWidth={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}