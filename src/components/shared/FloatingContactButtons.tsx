"use client"

import { Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

export function FloatingContactButtons() {
  const [phoneHovered, setPhoneHovered] = useState(false);
  const [kakaoHovered, setKakaoHovered] = useState(false);

  const handlePhoneClick = () => {
    window.location.href = "tel:1660-2587";
  };

  const handleKakaoClick = () => {
    window.open("http://pf.kakao.com/_QjEzX/chat", "_blank");
  };

  return (
    <>
      {/* Desktop and Mobile version - always visible */}
      <div className="fixed right-4 md:right-10 bottom-5 md:bottom-30 z-50 flex flex-col gap-3">
        {/* Phone Button - Navy */}
        <button
          onClick={handlePhoneClick}
          onMouseEnter={() => setPhoneHovered(true)}
          onMouseLeave={() => setPhoneHovered(false)}
          className={`group relative transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center w-14 h-14 rounded-full bg-[#1a5dab] border-0 cursor-pointer ${
            phoneHovered ? '[box-shadow:0_8px_24px_rgba(26,93,171,0.35)]' : '[box-shadow:0_4px_16px_rgba(0,0,0,0.12)]'
          }`}
        >
          <Phone className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={2.5} />
          
          {/* Tooltip - Desktop only */}
          <div className="hidden md:block absolute right-full mr-4 px-4 py-2 bg-gray-900 text-white text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none rounded-md font-['Pretendard',sans-serif] font-semibold">
            1660-2587
            <div className="absolute top-1/2 -right-1 w-2 h-2 bg-gray-900 transform -translate-y-1/2 rotate-45" />
          </div>
        </button>

        {/* KakaoTalk Button - Yellow */}
        <button
          onClick={handleKakaoClick}
          onMouseEnter={() => setKakaoHovered(true)}
          onMouseLeave={() => setKakaoHovered(false)}
          className={`group relative transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center w-14 h-14 mt-2 rounded-full bg-[#FEE500] border-0 cursor-pointer ${
            kakaoHovered ? '[box-shadow:0_8px_24px_rgba(254,229,0,0.35)]' : '[box-shadow:0_4px_16px_rgba(0,0,0,0.12)]'
          }`}
        >
          <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-[#381E1F]" strokeWidth={2.5} fill="#381E1F" />
          
          {/* Tooltip - Desktop only */}
          <div className="hidden md:block absolute right-full mr-4 px-4 py-2 bg-gray-900 text-white text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none rounded-md font-['Pretendard',sans-serif] font-semibold">
            카카오톡 상담
            <div className="absolute top-1/2 -right-1 w-2 h-2 bg-gray-900 transform -translate-y-1/2 rotate-45" />
          </div>
        </button>
      </div>
    </>
  );
}