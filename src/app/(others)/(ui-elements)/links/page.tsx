import type { Metadata } from "next";
import Link from "next/link";
import { Home, ChevronRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Links | 타이런트 - 관리자",
  description: "타이런트 관리자 Links 페이지",
};

export default function Links() {
  
  return (
    <div className="contents-layout">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="contents-title font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Links
          </h1>
          <p className="contents-sub-title mt-2 text-gray-600 dark:text-gray-400">
            서비스 전반에서 사용되는 링크 스타일과 상호작용 규칙
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
            Links
          </span>
        </nav>
      </div>

      {/* Group 1. Default Link */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          1. Default Link
        </h2>
        <p className="text-[13px] mb-6 text-gray-500 dark:text-gray-400">
          기본 링크 스타일, hover 시 밑줄 표시
        </p>
        
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-5 flex flex-col gap-4">
          <Link className="text-sm font-medium text-[#243c84] hover:underline active:opacity-80 cursor-pointer transition-all duration-200 w-fit"
            href="#">
            프로젝트 관리 페이지로 이동
          </Link>

          <Link className="text-sm font-medium text-[#243c84] hover:underline active:opacity-80 cursor-pointer transition-all duration-200 w-fit"
            href="#" >
            대시보드 보기
          </Link>

          <Link className="text-sm font-medium text-[#243c84] hover:underline active:opacity-80 cursor-pointer transition-all duration-200 w-fit"
            href="#">
            설정 변경하기
          </Link>
        </div>
      </div>

      {/* Group 2. Muted Link */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          2. Muted Link
        </h2>
        <p className="text-[13px] mb-6 text-gray-500 dark:text-gray-400">
          부가 정보 링크, hover 시 브랜드 컬러로 변경
        </p>
        
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-5 flex flex-col gap-4">
          <Link className="text-sm font-normal text-gray-500 dark:text-gray-400 hover:text-[#243c84] hover:underline cursor-pointer transition-all duration-200 w-fit"
            href="#">
            자세히 보기
          </Link>

          <Link className="text-sm font-normal text-gray-500 dark:text-gray-400 hover:text-[#243c84] hover:underline cursor-pointer transition-all duration-200 w-fit"
            href="#" >
            이전 페이지로 돌아가기
          </Link>

          <Link className="text-sm font-normal text-gray-500 dark:text-gray-400 hover:text-[#243c84] hover:underline cursor-pointer transition-all duration-200 w-fit"
            href="#" >
            관련 문서 확인
          </Link>
        </div>
      </div>

      {/* Group 3. Inline Link */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          3. Inline Link (본문용)
        </h2>
        <p className="text-[13px] mb-6 text-gray-500 dark:text-gray-400">
          본문 내 삽입용 링크, 기본 밑줄 표시
        </p>
        
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-5 flex flex-col gap-5">
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            프로젝트 완료를 위해{' '}
            <Link className="text-sm font-medium text-[#243c84] underline underline-offset-2 hover:opacity-85 cursor-pointer transition-opacity duration-200"
              href="#">
              작업 가이드
            </Link>
            를 참고하세요.
          </p>

          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            더 자세한 사항은{' '}
            <Link className="text-sm font-medium text-[#243c84] underline underline-offset-2 hover:opacity-85 cursor-pointer transition-opacity duration-200"
              href="#">
              도움말 센터
            </Link>
            에서 확인할 수 있습니다.
          </p>

          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            계정 문제가 있으신가요?{' '}
            <Link className="text-sm font-medium text-[#243c84] underline underline-offset-2 hover:opacity-85 cursor-pointer transition-opacity duration-200"
              href="#">
              고객 지원팀
            </Link>
            에 문의하세요.
          </p>
        </div>
      </div>

      {/* Group 4. External Link */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          4. External Link
        </h2>
        <p className="text-[13px] mb-6 text-gray-500 dark:text-gray-400">
          외부 링크, 우측 아이콘 포함
        </p>
        
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-5 flex flex-col gap-4">
          <Link className="text-sm font-medium text-[#243c84] hover:underline cursor-pointer transition-all duration-200 w-fit flex items-center gap-1"
            href="#" >
            공식 문서 보기
            <ExternalLink size={14} />
          </Link>

          <Link className="text-sm font-medium text-[#243c84] hover:underline cursor-pointer transition-all duration-200 w-fit flex items-center gap-1"
            href="#">
            개발자 가이드
            <ExternalLink size={14} />
          </Link>

          <Link className="text-sm font-medium text-[#243c84] hover:underline cursor-pointer transition-all duration-200 w-fit flex items-center gap-1"
            href="#" >
            API 레퍼런스
            <ExternalLink size={14} />
          </Link>
        </div>
      </div>

      {/* Group 5. Disabled Link */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          5. Disabled Link
        </h2>
        <p className="text-[13px] mb-6 text-gray-500 dark:text-gray-400">
          비활성화된 링크, 클릭 불가능
        </p>
        
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-5 flex flex-col gap-4">
          <span className="text-sm font-normal text-gray-300 dark:text-gray-600 no-underline cursor-default w-fit">
            비활성화된 메뉴
          </span>

          <span className="text-sm font-normal text-gray-300 dark:text-gray-600 no-underline cursor-default w-fit">
            접근 권한 없음
          </span>

          <span className="text-sm font-normal text-gray-300 dark:text-gray-600 no-underline cursor-default w-fit">
            준비 중인 기능
          </span>
        </div>
      </div>

      {/* Design Specifications */}
      <div className="mb-12">
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-6">
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 mb-4">
            Design Specifications
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Default Link</h4>
              <ul className="text-[13px] leading-[1.8] text-gray-600 dark:text-gray-400 pl-5">
                <li>Font Size: 14px / Medium</li>
                <li>Color: #243c84</li>
                <li>Hover: Underline</li>
                <li>Active: Opacity 80%</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Muted Link</h4>
              <ul className="text-[13px] leading-[1.8] text-gray-600 dark:text-gray-400 pl-5">
                <li>Font Size: 14px / Regular</li>
                <li>Color: #64748B</li>
                <li>Hover: Navy + Underline</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Inline Link</h4>
              <ul className="text-[13px] leading-[1.8] text-gray-600 dark:text-gray-400 pl-5">
                <li>Font Size: 14px / Medium</li>
                <li>Color: #243c84</li>
                <li>Underline: Always On</li>
                <li>Underline Offset: 2px</li>
                <li>Hover: Opacity 85%</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">External Link</h4>
              <ul className="text-[13px] leading-[1.8] text-gray-600 dark:text-gray-400 pl-5">
                <li>Font Size: 14px / Medium</li>
                <li>Icon: External Arrow (14px)</li>
                <li>Gap: 4px</li>
                <li>Hover: Underline</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Disabled Link</h4>
              <ul className="text-[13px] leading-[1.8] text-gray-600 dark:text-gray-400 pl-5">
                <li>Font Size: 14px / Regular</li>
                <li>Color: #CBD5E1</li>
                <li>Cursor: Default</li>
                <li>No Interaction</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">공통 규칙</h4>
              <ul className="text-[13px] leading-[1.8] text-gray-600 dark:text-gray-400 pl-5">
                <li>배경: None</li>
                <li>테두리: None</li>
                <li>그림자: None</li>
                <li>Radius: None</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="mb-12">
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-6">
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 mb-4">
            Usage Guidelines
          </h3>
          <ul className="text-sm leading-8 text-gray-600 dark:text-gray-400 pl-5">
            <li><strong>Default Link:</strong> 네비게이션, 주요 액션 링크</li>
            <li><strong>Muted Link:</strong> 보조 정보, 부가 링크</li>
            <li><strong>Inline Link:</strong> 본문 내 참조 링크, 컨텍스트 정보</li>
            <li><strong>External Link:</strong> 외부 사이트, 새 탭 링크</li>
            <li><strong>Disabled Link:</strong> 권한 없음, 준비 중 기능</li>
            <li>링크는 항상 명확한 목적지를 나타내는 텍스트 사용</li>
            <li>외부 링크는 반드시 아이콘으로 구분</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
