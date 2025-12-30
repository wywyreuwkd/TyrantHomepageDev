"use client";

import Link from "next/link";
import tyrant_greetings from "@public/greetings/tyrant_greetings.png";

export default function Greetings() {
  return (
    <div 
      className="fixed inset-0 z-50 bg-[#F5F0E8] flex flex-col items-center py-12 px-4 overflow-auto"
    >
      {/* 이미지 컨테이너 */}
      <div className="w-full max-w-4xl mx-auto mb-10 flex-shrink-0 mt-8 md:mt-20">
        <img
          src={tyrant_greetings.src}
          alt="타이런트 2025 새해 인사"
          className="w-full h-auto rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
        />
      </div>

      {/* 인사말 섹션 */}
      <div className="text-center max-w-2xl mx-auto mb-10 px-6 flex-shrink-0">
        <h1 
          className="text-3xl md:text-4xl font-bold mb-6"
          style={{ 
            color: "#8B4513",
            fontFamily: "'Noto Serif KR', serif"
          }}
        >
          <span>2026년 새해 </span>
          <br className="block sm:hidden" />
          <span>복 많이 받으세요</span>
        </h1>
        
        <p 
          className="text-lg md:text-xl leading-relaxed mb-8"
          style={{ 
            color: "#5D4037",
            fontFamily: "'Noto Serif KR', serif"
          }}
        >
          <span className="font-semibold">活用新源 開創淨來(활용신원 개창정래)</span>
          <br />
          <span className="text-base">새로운 에너지원을 활용하여 </span>
          <br className="block sm:hidden" />
          <span className="text-base">깨끗한 미래를 열어갑니다</span>
        </p>
        
        <p 
          className="text-base md:text-lg leading-relaxed"
          style={{ 
            color: "#6D4C41",
            fontFamily: "'Noto Serif KR', serif"
          }}
        >
          혁신적이고 지속가능한 에너지를 꿈꾸는 타이런트입니다. <br className="hidden sm:block" />지난 한 해 동안 베풀어 주신 은혜에 감사드립니다.
          <br />
          다가오는 새해에는 웅장한 산과 찬란한 태양처럼 하고자 하시는 일들이 더욱 견고하고 빛나기를 기원합니다.
          <br />
          2026년 병오년에도 건강과 행복이 가득하시길 바랍니다.
          <br />
          <br />
          <span className="font-medium">타이런트 그룹 임직원 일동</span>
        </p>
      </div>

      {/* 방문하기 버튼 */}
      <Link
        href="/"
        className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden rounded-full transition-all duration-300 hover:scale-105 flex-shrink-0"
        style={{
          background: "linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #CD853F 100%)",
          boxShadow: "0 4px 20px rgba(139, 69, 19, 0.3)",
        }}
      >
        <span 
          className="relative z-10 text-lg font-medium text-white"
          style={{ fontFamily: "'Noto Serif KR', serif" }}
        >
          타이런트 방문하기
        </span>
        <svg
          className="relative z-10 w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
        
        {/* 호버 효과 */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "linear-gradient(135deg, #A0522D 0%, #CD853F 50%, #DEB887 100%)",
          }}
        />
      </Link>

      {/* 하단 장식 */}
      <div className="mt-12 flex items-center gap-4 opacity-60 flex-shrink-0">
        <div className="w-16 h-px bg-[#8B4513]" />
        <span 
          className="text-sm"
          style={{ 
            color: "#8B4513",
            fontFamily: "'Noto Serif KR', serif"
          }}
        >
          TYRANT GROUP
        </span>
        <div className="w-16 h-px bg-[#8B4513]" />
      </div>
    </div>
  );
}
