import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@public/7d54a87c9bad188ca702a060b49cc9e44a0522b1.png";

export function Footer() {
  return (
    <footer className="flex justify-center bg-white">
      <div className="w-full max-w-[900px] bg-[#1a1a1a] text-white px-4 md:px-10 py-10">
          {/* Top Section - Links */}
          <div className="flex items-center justify-center md:justify-center gap-4 md:gap-6 mb-8 md:mb-12 pb-5 border-b border-[#404040]">
            <button 
              className="transition-colors duration-300 hover:text-[#1a5dab] font-['Pretendard',sans-serif] font-semibold text-[13px] text-gray-200"
            >
              이용약관
            </button>
            <div className="w-px h-3 bg-[#606060]"></div>
            <button 
              className="transition-colors duration-300 hover:text-[#1a5dab] font-['Pretendard',sans-serif] font-bold text-[13px] text-white"
            >
              개인정보처리방침
            </button>
          </div>

          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <img src={logo.src} alt="대한민카" className="h-9 w-auto md:hidden" />
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* Left - Company Info */}
            <div>
              <div className="mb-6 hidden md:block">
                <img src={logo.src} alt="대한민카" className="h-12 w-auto" />
              </div>
              
              <div className="space-y-1.5 md:space-y-2">
                <p className="font-['Pretendard',sans-serif] font-medium text-xs text-gray-400 leading-[1.7] md:text-[14px] md:leading-[1.6]">
                  상호: 대한민카
                </p>
                <p className="font-['Pretendard',sans-serif] font-medium text-xs text-gray-400 leading-[1.7] md:text-[14px] md:leading-[1.6]">
                  대표: 김산하
                </p>
                <p className="font-['Pretendard',sans-serif] font-medium text-xs text-gray-400 leading-[1.7] md:text-[14px] md:leading-[1.6]">
                  개인정보보호책임자: 강준호
                </p>
                <p className="font-['Pretendard',sans-serif] font-medium text-xs text-gray-400 leading-[1.7] md:text-[14px] md:leading-[1.6]">
                  사업자등록번호: 440-86-02535
                </p>
                {/*<p className="font-['Pretendard',sans-serif] font-medium text-xs text-gray-400 leading-[1.7] md:text-[14px] md:leading-[1.6]">
                  통신판매업 신고번호: 제2025-서울강남-12345호
                </p>*/}
              </div>
            </div>

            {/* Right - Contact Info */}
            <div className="mt-6 md:mt-0">
              <h3 className="font-['Pretendard',sans-serif] font-bold text-base text-white mb-4 md:text-[18px] md:mb-5">
                고객상담
              </h3>

              {/* Phone */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-9 h-9 bg-[#1a5dab] rounded-full">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-['Pretendard',sans-serif] font-extrabold text-xl text-white tracking-wide md:text-[24px]">
                    1660-2587
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-[#2a2a2a] p-3 mb-3.5 md:p-4 md:mb-4">
                <p className="font-['Pretendard',sans-serif] font-semibold text-xs text-white mb-1.5 md:text-[13px] md:mb-2">
                  상담 가능 시간 (주말/공휴일 제외)
                </p>
                <p className="font-['Pretendard',sans-serif] font-medium text-[11px] text-gray-400 md:text-[13px]">
                  월요일 ~ 금요일 : 09:00 ~ 18:00
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#9ca3af] mt-0.5 md:mt-1" strokeWidth={2} />
                <p className="font-['Pretendard',sans-serif] font-medium text-[11px] text-gray-400 leading-[1.6] md:text-[13px]">
                  주소: 경기도 부천시 원미구 길주로 77번길 55-13, 우진프라자 6층
                </p>
              </div>
            </div>
          </div>

          {/* Bottom - Copyright */}
          <div className="pt-5 border-t border-[#404040] text-center md:pt-6">
            <p className="font-['Pretendard',sans-serif] font-medium text-[11px] text-gray-500 md:text-[13px]">
              Copyright © 2026 대한민카. All rights reserved.
            </p>
          </div>
      </div>
    </footer>
  )
}