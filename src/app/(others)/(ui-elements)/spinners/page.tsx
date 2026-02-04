import type { Metadata } from "next";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Spinners | 타이런트 - 관리자",
  description: "타이런트 관리자 Spinners 페이지",
};

interface SpinnerDesignBlockProps {
  title: string;
  description: string;
  recommendedLevel: string;
  positionRule: string;
  screenBlocking: string;
  textAccompaniment: string;
  maxDuration: string;
  guideText?: string;
  children: React.ReactNode;
}

function SpinnerDesignBlock({
  title,
  description,
  recommendedLevel,
  positionRule,
  screenBlocking,
  textAccompaniment,
  maxDuration,
  guideText,
  children
}: SpinnerDesignBlockProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 md:p-7 bg-white dark:bg-gray-800">
      {/* 상단 설계 헤더 */}
      <div className="mb-6 block md:flex md:justify-between md:items-start">
        <div className="flex-1 mb-3 md:mb-0">
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 py-1.5 px-3 rounded-md text-[13px] text-gray-700 dark:text-gray-300 font-medium whitespace-nowrap w-fit md:ml-4">
          {recommendedLevel}
        </div>
      </div>

      {/* 중단 구조 예시 영역 */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-[10px] mb-6 flex flex-col gap-5 py-6 px-4 md:py-10 md:px-10">
        {children}
      </div>

      {/* 하단 설계 스펙 영역 */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-5 mb-4 border border-gray-100 dark:border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-3 md:gap-3.5 text-sm">
          <div className="text-gray-600 dark:text-gray-400 font-medium md:font-normal">사용 위치 기준</div>
          <div className="text-gray-700 dark:text-gray-300 -mt-2 md:mt-0">{positionRule}</div>

          <div className="text-gray-600 dark:text-gray-400 font-semibold md:font-medium">화면 차단 여부</div>
          <div className="text-gray-700 dark:text-gray-300 -mt-2 md:mt-0">{screenBlocking}</div>

          <div className="text-gray-600 dark:text-gray-400 font-semibold md:font-medium">텍스트 병행 여부</div>
          <div className="text-gray-700 dark:text-gray-300 -mt-2 md:mt-0">{textAccompaniment}</div>

          <div className="text-gray-600 dark:text-gray-400 font-semibold md:font-medium">최대 노출 시간 권장값</div>
          <div className="text-gray-700 dark:text-gray-300 -mt-2 md:mt-0">{maxDuration}</div>
        </div>
      </div>

      {/* 하단 가이드 영역 */}
      {guideText && (
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg py-3.5 px-4 text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed border-l-[3px] border-[#243c84]">
          {guideText}
        </div>
      )}
    </div>
  );
}

export default function Spinners() {
  
  return (
    <div className="contents-layout">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="contents-title font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Spinners
          </h1>
          <p className="contents-sub-title mt-2 text-gray-600 dark:text-gray-400">
            비동기 처리 상태 표현 설계 가이드
          </p>
        </div>

        {/* Breadcrumb - PC만 표시 */}
        <nav className="hidden md:flex items-center gap-2 flex-shrink-0">
          <Link href="/main">
            <div className="flex items-center gap-1.5 cursor-pointer">
              <Home className="text-gray-400 dark:text-gray-600"
                size={14}/>
              <span className="contents-breadcrumb font-medium whitespace-nowrap text-gray-600 dark:text-gray-400">
                홈
              </span>
            </div>
          </Link>
          <ChevronRight size={12} className="text-gray-300 dark:text-gray-600" />
          <span className="contents-breadcrumb font-medium whitespace-nowrap text-gray-600 dark:text-gray-400">
            UI Elements
          </span>
          <ChevronRight size={12} className="text-gray-300 dark:text-gray-600" />
          <span className="contents-breadcrumb font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">
            Spinners
          </span>
        </nav>
      </div>

      {/* 설계 블록들 */}
      <div className="flex flex-col gap-10">
        
        {/* 글로벌 로딩 Spinner (페이지 단위) */}
        <SpinnerDesignBlock
          title="글로벌 로딩 Spinner (페이지 단위)"
          description="전체 페이지 전환 시 사용하는 Spinner입니다. 사용자의 모든 행동을 차단하며, 새로운 페이지가 로드될 때까지 대기 상태를 시각적으로 표현합니다."
          recommendedLevel="Page Level"
          positionRule="화면 중앙, Overlay Layer 위"
          screenBlocking="전체 화면 차단 (Dim 처리)"
          textAccompaniment="선택적 병행 (3초 이상 시 필수)"
          maxDuration="5초 (초과 시 에러 메시지 표시)"
          guideText="로딩 상태 노출 기준: 페이지 전환이 1초 이상 소요될 것으로 예상될 때만 사용하며, 즉각적인 전환이 가능한 경우 Spinner 없이 직접 전환합니다."
        >
          <div className="flex flex-col gap-5">
            {/* 기본 글로벌 Spinner */}
            <div>
              <div className="text-[13px] text-gray-600 dark:text-gray-400 mb-2.5">
                기본 구조 (화면 중앙 배치)
              </div>
              <div className="relative bg-black/5 dark:bg-black/20 rounded-[10px] py-15 px-5 flex items-center justify-center flex-col gap-3">
                <div className="w-12 h-12 border-4 border-gray-300 dark:border-gray-600 border-t-[#243c84] rounded-full animate-spin"></div>
                <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  페이지를 불러오는 중...
                </div>
              </div>
            </div>

            {/* 텍스트 병행 */}
            <div>
              <div className="text-[13px] text-gray-600 dark:text-gray-400 mb-2.5">
                긴 로딩 시 (텍스트 병행)
              </div>
              <div className="relative bg-black/5 dark:bg-black/20 rounded-[10px] py-15 px-5 flex items-center justify-center flex-col gap-4">
                <div className="w-12 h-12 border-4 border-gray-300 dark:border-gray-600 border-t-[#243c84] rounded-full animate-spin"></div>
                <div className="text-center">
                  <div className="text-sm text-gray-900 dark:text-gray-50 font-medium mb-1">
                    데이터를 처리하는 중입니다
                  </div>
                  <div className="text-[13px] text-gray-600 dark:text-gray-400">
                    잠시만 기다려주세요
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SpinnerDesignBlock>

        {/* 섹션 로딩 Spinner (영역 단위) */}
        <SpinnerDesignBlock
          title="섹션 로딩 Spinner (영역 단위)"
          description="페이지 내 특정 섹션이나 카드의 데이터를 불러올 때 사용합니다. 해당 영역만 차단하며, 페이지의 다른 부분은 상호작용이 가능한 상태를 유지합니다."
          recommendedLevel="Section Level"
          positionRule="해당 섹션 중앙, 섹션 영역 내부"
          screenBlocking="해당 섹션만 차단 (부분 Dim)"
          textAccompaniment="3초 이상 시 권장"
          maxDuration="10초 (초과 시 재시도 옵션 제공)"
          guideText="지연 처리 UX 원칙: 섹션 로딩이 3초 이상 지속될 경우 진행 상태나 예상 시간을 함께 표시하며, 10초 이상 소요 시 사용자가 작업을 취소할 수 있는 옵션을 제공합니다."
        >
          <div className="flex flex-col gap-5">
            {/* 섹션 Spinner */}
            <div>
              <div className="text-[13px] text-gray-600 dark:text-gray-400 mb-2.5">
                섹션 로딩 구조
              </div>
              <div className="border border-gray-600 dark:border-gray-600 rounded-[10px] py-10 px-5 bg-white dark:bg-gray-900 relative">
                <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90 rounded-[10px] flex items-center justify-center flex-col gap-3">
                  <div className="w-8 h-8 border-[3px] border-gray-300 dark:border-gray-600 border-t-[#243c84] rounded-full animate-spin"></div>
                  <div className="text-[13px] text-gray-600 dark:text-gray-400">
                    차트를 불러오는 중...
                  </div>
                </div>
                <div className="text-sm text-gray-400 dark:text-gray-600">
                  [차트 영역 플레이스홀더]
                </div>
              </div>
            </div>

            {/* 카드 로딩 */}
            <div>
              <div className="text-[13px] text-gray-600 dark:text-gray-400 mb-2.5">
                카드 영역 로딩
              </div>
              <div className="flex gap-4">
                <div className="flex-1 border border-gray-600 dark:border-gray-600 rounded-[10px] py-8 px-5 bg-white dark:bg-gray-900 relative flex items-center justify-center">
                  <div className="w-6 h-6 border-[2.5px] border-gray-300 dark:border-gray-600 border-t-[#243c84] rounded-full animate-spin"></div>
                </div>
                <div className="flex-1 border border-gray-600 dark:border-gray-600 rounded-[10px] py-8 px-5 bg-white dark:bg-gray-900 relative flex items-center justify-center">
                  <div className="w-6 h-6 border-[2.5px] border-gray-300 dark:border-gray-600 border-t-[#243c84] rounded-full animate-spin"></div>
                </div>
              </div>
            </div>
          </div>
        </SpinnerDesignBlock>

        {/* 액션 로딩 Spinner (버튼·행동 단위) */}
        <SpinnerDesignBlock
          title="액션 로딩 Spinner (버튼·행동 단위)"
          description="버튼 클릭, 폼 제출 등 사용자 액션에 대한 처리 중 상태를 표시합니다. 버튼 내부 또는 인접 영역에 표시하여 해당 액션이 진행 중임을 명확히 전달합니다."
          recommendedLevel="Action Level"
          positionRule="버튼 내부 또는 액션 트리거 요소 인접"
          screenBlocking="해당 버튼만 비활성화 (화면 차단 없음)"
          textAccompaniment="버튼 텍스트를 '처리 중...'으로 변경"
          maxDuration="3초 (초과 시 섹션 Spinner로 전환)"
          guideText="로딩 상태 노출 기준: 액션 처리가 0.5초 이상 소요될 것으로 예상될 때 사용하며, 즉시 처리 가능한 액션은 Spinner 없이 결과를 직접 반영합니다."
        >
          <div className="flex flex-col gap-5">
            {/* 버튼 내부 Spinner */}
            <div>
              <div className="text-[13px] text-gray-600 dark:text-gray-400 mb-2.5">
                버튼 내부 Spinner
              </div>
              <div className="flex gap-3 items-center flex-wrap">
                <button className="py-2.5 px-5 bg-[#243c84] text-white border-0 rounded-md text-sm font-medium cursor-not-allowed opacity-70 flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  저장 중...
                </button>
                <button className="py-2.5 px-5 bg-white dark:bg-gray-900 text-[#243c84] border border-[#243c84] rounded-md text-sm font-medium cursor-not-allowed opacity-70 flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-gray-300 dark:border-gray-600 border-t-[#243c84] rounded-full animate-spin"></div>
                  처리 중...
                </button>
              </div>
            </div>

            {/* 인라인 Spinner */}
            <div>
              <div className="text-[13px] text-gray-600 dark:text-gray-400 mb-2.5">
                인라인 상태 표시
              </div>
              <div className="border border-gray-600 dark:border-gray-600 rounded-[10px] p-5 bg-white dark:bg-gray-900 flex items-center gap-3">
                <div className="w-5 h-5 border-[2.5px] border-gray-300 dark:border-gray-600 border-t-[#243c84] rounded-full animate-spin shrink-0"></div>
                <div>
                  <div className="text-sm text-gray-900 dark:text-gray-50 font-medium">
                    파일을 업로드하고 있습니다
                  </div>
                  <div className="text-[13px] text-gray-600 dark:text-gray-400 mt-0.5">
                    document.pdf (2.4 MB)
                  </div>
                </div>
              </div>
            </div>

            {/* 테이블 행 액션 */}
            <div>
              <div className="text-[13px] text-gray-600 dark:text-gray-400 mb-2.5">
                테이블 행 액션 로딩
              </div>
              <div className="border border-gray-600 dark:border-gray-600 rounded-[10px] overflow-hidden bg-white dark:bg-gray-900">
                <div className="grid grid-cols-[1fr_1fr_100px] gap-4 py-3 px-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600 text-[13px] font-semibold text-gray-600 dark:text-gray-400">
                  <div>이름</div>
                  <div>상태</div>
                  <div>액션</div>
                </div>
                <div className="grid grid-cols-[1fr_1fr_100px] gap-4 py-3 px-4 border-b border-gray-300 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 items-center">
                  <div>항목 1</div>
                  <div>대기 중</div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-gray-300 dark:border-gray-600 border-t-[#243c84] rounded-full animate-spin"></div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">처리 중</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SpinnerDesignBlock>

        {/* 백그라운드 처리 Spinner (비가시 처리) */}
        <SpinnerDesignBlock
          title="백그라운드 처리 Spinner (비가시 처리)"
          description="사용자가 다른 작업을 계속할 수 있도록 백그라운드에서 처리되는 작업을 표시합니다. 화면 하단 또는 헤더 영역에 최소한의 공간을 차지하며 표시됩니다."
          recommendedLevel="Background Level"
          positionRule="화면 하단 고정 또는 헤더 우측 영역"
          screenBlocking="화면 차단 없음 (비간섭)"
          textAccompaniment="간단한 상태 텍스트 병행"
          maxDuration="제한 없음 (취소 옵션 제공 필수)"
          guideText="지연 처리 UX 원칙: 백그라운드 처리는 사용자의 현재 작업을 방해하지 않으며, 완료 시 Toast 알림으로 결과를 전달합니다. 실패 시에는 재시도 옵션을 함께 제공합니다."
        >
          <div className="flex flex-col gap-5">
            {/* 하단 토스트형 */}
            <div>
              <div className="text-[13px] text-gray-600 dark:text-gray-400 mb-2.5">
                화면 하단 고정 표시
              </div>
              <div className="relative bg-gray-50 dark:bg-[#0f1419] rounded-[10px] pt-10 pb-5 px-5 flex justify-center">
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-gray-800 text-white py-3 px-5 rounded-lg flex items-center gap-3 shadow-lg dark:shadow-2xl max-w-[90%]">
                  <div className="w-[18px] h-[18px] border-2 border-white/30 border-t-white rounded-full animate-spin shrink-0"></div>
                  <span className="text-[13px]">파일 3개를 업로드하는 중...</span>
                  <button className="bg-transparent border-0 text-gray-400 text-[13px] cursor-pointer py-0 px-1 ml-2">취소</button>
                </div>
                <div className="text-[13px] text-gray-400 dark:text-gray-600">
                  [페이지 콘텐츠 영역]
                </div>
              </div>
            </div>

            {/* 헤더 영역 표시 */}
            <div>
              <div className="text-[13px] text-gray-600 dark:text-gray-400 mb-2.5">
                헤더 우측 영역 표시
              </div>
              <div className="border border-gray-600 dark:border-gray-600 rounded-[10px] overflow-hidden bg-white dark:bg-gray-900">
                <div className="py-3.5 px-5 bg-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-600 flex justify-between items-center">
                  <div className="text-[15px] font-semibold text-gray-900 dark:text-gray-50">
                    페이지 헤더
                  </div>
                  <div className="flex items-center gap-2 py-1.5 px-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                    <div className="w-3.5 h-3.5 border-2 border-gray-300 dark:border-gray-600 border-t-[#243c84] rounded-full animate-spin"></div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">동기화 중</span>
                  </div>
                </div>
                <div className="p-5 text-[13px] text-gray-400 dark:text-gray-600">
                  [페이지 콘텐츠 영역]
                </div>
              </div>
            </div>
          </div>
        </SpinnerDesignBlock>

      </div>
    </div>
  );
}
