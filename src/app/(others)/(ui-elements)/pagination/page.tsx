import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Home, ChevronRight as BreadcrumbChevron } from "lucide-react";

export const metadata: Metadata = {
  title: "Pagination | 타이런트 - 관리자",
  description: "타이런트 관리자 Pagination 페이지",
};

const BRAND_PRIMARY = '#243c84';

interface PaginationDesignBlockProps {
  title: string;
  description: string;
  recommendedEnvironment: string;
  pageRangeRule: string;
  prevNextButton: string;
  disabledState: string;
  mobileAdaptation: string;
  guideButton?: {
    label: string;
  };
  secondaryGuideButton?: {
    label: string;
  };
  children: React.ReactNode;
}

function PaginationDesignBlock({
  title,
  description,
  recommendedEnvironment,
  pageRangeRule,
  prevNextButton,
  disabledState,
  mobileAdaptation,
  guideButton,
  secondaryGuideButton,
  children
}: PaginationDesignBlockProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-7 bg-white dark:bg-gray-800">
      {/* 상단 설계 정보 영역 */}
      <div className="mb-6 flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-normal">
            {description}
          </p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 py-1.5 px-3 rounded-md text-[13px] text-gray-700 dark:text-gray-300 font-medium whitespace-nowrap ml-4">
          {recommendedEnvironment}
        </div>
      </div>

      {/* 중단 구조 영역: Pagination UI 미리보기 */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-[10px] p-8 mb-6 flex justify-center items-center">
        {children}
      </div>

      {/* 하단 설계 스펙 영역 */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-5 mb-4 border border-gray-100 dark:border-gray-700">
        <div className="grid grid-cols-[160px_1fr] gap-3.5 text-sm">
          <div className="text-gray-600 dark:text-gray-400 font-medium">페이지 범위 노출 규칙</div>
          <div className="text-gray-700 dark:text-gray-300">{pageRangeRule}</div>

          <div className="text-gray-600 dark:text-gray-400 font-medium">이전/다음 버튼</div>
          <div className="text-gray-700 dark:text-gray-300">{prevNextButton}</div>

          <div className="text-gray-600 dark:text-gray-400 font-medium">비활성 상태 처리</div>
          <div className="text-gray-700 dark:text-gray-300">{disabledState}</div>

          <div className="text-gray-600 dark:text-gray-400 font-medium">모바일 대응 방식</div>
          <div className="text-gray-700 dark:text-gray-300">{mobileAdaptation}</div>
        </div>
      </div>

      {/* 하단 액션 가이드 영역 */}
      {(guideButton || secondaryGuideButton) && (
        <div className="flex gap-2 justify-end">
          {secondaryGuideButton && (
            <button className="h-9 rounded-lg px-4 bg-transparent text-gray-600 dark:text-gray-400 text-sm font-medium border border-gray-300 dark:border-gray-600 cursor-pointer transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
              {secondaryGuideButton.label}
            </button>
          )}
          {guideButton && (
            <button className="h-9 rounded-lg px-4 bg-[#243c84] text-white text-sm font-medium border-0 cursor-pointer transition-all duration-200 hover:opacity-85">
              {guideButton.label}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

// 페이지 버튼 컴포넌트
function PageButton({ children, isActive = false, isDisabled = false }: { children: React.ReactNode; isActive?: boolean; isDisabled?: boolean }) {
  return (
    <button className={`w-9 h-9 rounded-md text-sm flex items-center justify-center transition-all duration-150
        ${isActive 
          ? 'border-2 border-[#243c84] bg-[#F0F4FF] text-[#243c84] font-semibold' 
          : 'border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-medium'
        }
        ${isDisabled 
          ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed' 
          : 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700'
        }
        ${!isActive && !isDisabled && 'hover:bg-gray-50 dark:hover:bg-gray-700'}`}
      disabled={isDisabled}>
      {children}
    </button>
  );
}

// 아이콘 버튼 컴포넌트
function IconButton({ children, isDisabled = false }: { children: React.ReactNode; isDisabled?: boolean }) {
  return (
    <button      
      className={`w-9 h-9 border border-gray-200 dark:border-gray-600 rounded-md flex items-center justify-center transition-all duration-150
        ${isDisabled 
          ? 'bg-white dark:bg-gray-900 text-gray-300 dark:text-gray-600 cursor-not-allowed' 
          : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700'
        }`}
      disabled={isDisabled}>
      {children}
    </button>
  );
}

export default function Pagination() {
  
  return (
    <div className="py-6 md:px-6">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="text-[24px] md:text-[28px] font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Pagination
          </h1>
          <p className="text-[14px] mt-1 text-gray-600 dark:text-gray-400">
            페이지 네비게이션 설계 가이드
          </p>
        </div>

        {/* Breadcrumb - PC만 표시 */}
        <nav className="hidden md:flex items-center gap-2 flex-shrink-0">
          <Link href="/main">
            <div className="flex items-center gap-1.5 cursor-pointer">
              <Home className="text-gray-400 dark:text-gray-600"
                size={14}/>
              <span className="text-[13px] font-medium whitespace-nowrap text-gray-600 dark:text-gray-400">
                홈
              </span>
            </div>
          </Link>
          <ChevronRight size={12} className="text-gray-300 dark:text-gray-600" />
          <span className="text-[13px] font-medium whitespace-nowrap text-gray-600 dark:text-gray-400">
            UI Elements
          </span>
          <ChevronRight size={12} className="text-gray-300 dark:text-gray-600" />
          <span className="text-[13px] font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">
            Pagination
          </span>
        </nav>
      </div>

      {/* Pagination 설계 블록 목록 */}
      <div className="flex flex-col gap-10">
        
        {/* 1. 기본 데이터 탐색 Pagination */}
        <PaginationDesignBlock
          title="기본 데이터 탐색 Pagination"
          description="일반적인 테이블, 리스트, 카드 그리드 등에서 페이지 단위로 데이터를 탐색할 때 사용하는 표준 Pagination 구조입니다."
          recommendedEnvironment="테이블 · 리스트 뷰"
          pageRangeRule="현재 페이지 ±2 범위 표시, 처음/끝 페이지 항상 노출"
          prevNextButton="이전/다음 버튼 필수 포함"
          disabledState="첫 페이지에서 이전 버튼, 마지막 페이지에서 다음 버튼 비활성화"
          mobileAdaptation="중앙 페이지 수 축소 (±1 범위), 처음/끝 버튼 유지"
          guideButton={{ label: '페이지 이동 패턴' }}
          secondaryGuideButton={{ label: '테이블 연동 예시' }}>

          <div className="flex gap-2 items-center">
            <IconButton>
              <ChevronLeft size={18} />
            </IconButton>
            <PageButton>1</PageButton>
            <PageButton isActive>2</PageButton>
            <PageButton>3</PageButton>
            <PageButton>4</PageButton>
            <PageButton>5</PageButton>
            <span className="text-gray-400 text-sm px-1">...</span>
            <PageButton>12</PageButton>
            <IconButton>
              <ChevronRight size={18} />
            </IconButton>
          </div>
        </PaginationDesignBlock>

        {/* 2. 대용량 데이터 Pagination */}
        <PaginationDesignBlock
          title="대용량 데이터 Pagination"
          description="수백 페이지 이상의 대규모 데이터셋에서 빠른 구간 이동을 지원하는 Pagination 구조입니다. 처음/끝으로 바로 이동 기능을 포함합니다."
          recommendedEnvironment="대용량 로그 · 이력 조회"
          pageRangeRule="현재 페이지 ±1 범위만 표시, 중간 생략 표시"
          prevNextButton="이전/다음 + 처음/끝 버튼 모두 포함"
          disabledState="경계 페이지에서 해당 방향 버튼 비활성화 + 시각적 피드백"
          mobileAdaptation="처음/끝 버튼 우선 유지, 중앙 페이지 수 최소화"
          guideButton={{ label: '대용량 리스트 기준' }}>

          <div className="flex gap-2 items-center">
            <IconButton>
              <ChevronsLeft size={18} />
            </IconButton>
            <IconButton>
              <ChevronLeft size={18} />
            </IconButton>
            <PageButton>1</PageButton>
            <span className="text-gray-400 text-sm px-1">...</span>
            <PageButton>156</PageButton>
            <PageButton isActive>157</PageButton>
            <PageButton>158</PageButton>
            <span className="text-gray-400 text-sm px-1">...</span>
            <PageButton>342</PageButton>
            <IconButton>
              <ChevronRight size={18} />
            </IconButton>
            <IconButton>
              <ChevronsRight size={18} />
            </IconButton>
          </div>
        </PaginationDesignBlock>

        {/* 3. 액션 중심 Pagination */}
        <PaginationDesignBlock
          title="액션 중심 Pagination"
          description="페이지 번호보다 이전/다음 탐색이 주가 되는 단순한 Pagination 구조입니다. 페이지 정보는 텍스트로만 표시합니다."
          recommendedEnvironment="순차 검토 워크플로우"
          pageRangeRule="현재 페이지 / 전체 페이지 텍스트 표시"
          prevNextButton="이전/다음 버튼만 표시 (텍스트 라벨 포함)"
          disabledState="경계에서 해당 방향 버튼 제거 또는 비활성화"
          mobileAdaptation="버튼 크기 확대, 텍스트는 축약 표시"
          guideButton={{ label: '워크플로우 적용 예시' }}
          secondaryGuideButton={{ label: '순차 검토 가이드' }}>

          <div className="flex gap-4 items-center">
            <button className="h-9 px-4 border border-gray-200 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm font-medium cursor-pointer flex items-center gap-1.5 transition-all duration-150 hover:bg-gray-50 dark:hover:bg-gray-700">
              <ChevronLeft size={16} />
              이전
            </button>
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium min-w-[80px] text-center">
              2 / 12
            </span>
            <button className="h-9 px-4 border border-gray-200 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm font-medium cursor-pointer flex items-center gap-1.5 transition-all duration-150 hover:bg-gray-50 dark:hover:bg-gray-700">
              다음
              <ChevronRight size={16} />
            </button>
          </div>
        </PaginationDesignBlock>

        {/* 4. 간소화 Pagination (모바일·서브뷰 대응) */}
        <PaginationDesignBlock
          title="간소화 Pagination (모바일·서브뷰 대응)"
          description="공간이 제한된 모바일 환경이나 사이드 패널, 모달 내부에서 사용하는 최소화된 Pagination 구조입니다."
          recommendedEnvironment="모바일 · 사이드 패널"
          pageRangeRule="현재 페이지만 표시, 페이지 번호 선택 불가"
          prevNextButton="이전/다음 아이콘 버튼만 표시"
          disabledState="경계에서 해당 버튼 완전히 숨김 처리"
          mobileAdaptation="기본 형태를 모바일 기준으로 설계"
          guideButton={{ label: '모바일 UI 가이드' }}>
          
          <div className="flex gap-3 items-center">
            <IconButton>
              <ChevronLeft size={18} />
            </IconButton>
            <div className="min-w-[60px] text-center text-sm text-gray-700 dark:text-gray-300 font-medium">
              2 / 12
            </div>
            <IconButton>
              <ChevronRight size={18} />
            </IconButton>
          </div>
        </PaginationDesignBlock>

      </div>
    </div>
  );
}
