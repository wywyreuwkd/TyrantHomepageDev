"use client";

import Link from "next/link";
import { Construction, ArrowLeft, Home } from "lucide-react";

interface ComingSoonProps {
  title?: string;
  description?: string;
  showBackButton?: boolean;
  showHomeButton?: boolean;
}

export function ComingSoon({
  title = "페이지 준비 중입니다",
  description = "더 나은 서비스를 위해 열심히 준비하고 있습니다.\n빠른 시일 내에 찾아뵙겠습니다.",
  showBackButton = true,
  showHomeButton = true,
}: ComingSoonProps) {
  return (
    <div className="min-h-screen bg-gray-100 pt-20 flex items-center justify-center">
      <div className="relative overflow-hidden w-full">
        {/* 배경 효과 */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent rounded-full blur-[150px]"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-blue-400 rounded-full blur-[150px]"></div>
        </div>

        <div className="relative mx-auto px-6 py-16 md:py-24 max-w-[800px] text-center">
          {/* 아이콘 */}
          <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-8">
            <Construction className="w-12 h-12 text-accent" />
          </div>

          {/* 제목 */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h1>

          {/* 설명 */}
          <p className="text-lg text-gray-600 mb-10 whitespace-pre-line">
            {description}
          </p>

          {/* 버튼들 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {showBackButton && (
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                이전 페이지
              </button>
            )}
            {showHomeButton && (
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-white font-medium rounded-full transition-all"
              >
                <Home className="w-5 h-5" />
                홈으로 가기
              </Link>
            )}
          </div>

          {/* 하단 장식 */}
          <div className="mt-16 flex items-center justify-center gap-3 opacity-50">
            <div className="w-12 h-px bg-gray-400"></div>
            <span className="text-sm text-gray-500">TYRANT</span>
            <div className="w-12 h-px bg-gray-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

