import type { Metadata } from "next";
import Link from "next/link";
import { Home, ChevronRight, Users, Banknote, ShoppingCart, Eye, TrendingUp, UserPlus } from "lucide-react";

export const metadata: Metadata = {
  title: "Carousel | 타이런트 - 관리자",
  description: "타이런트 관리자 Carousel 페이지",
};

// Brand Colors
const BRAND_PRIMARY = '#243c84';

export default function Carousel() {
  
  return (
    <div className="py-6 md:px-6">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="text-[24px] md:text-[28px] font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Carousel
          </h1>
          <p className="text-[14px] mt-1 text-gray-600 dark:text-gray-400">
            서비스 내 주요 콘텐츠를 단계적으로 탐색하는 캐러셀 패턴
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
            Carousel
          </span>
        </nav>
      </div>

      {/* Group 1. Content Carousel */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          1. Content Carousel
        </h2>
        <p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          공지, 가이드, 업데이트 안내
        </p>
        
        <div className="grid grid-cols-2 gap-6">
          {/* Card 1 - 시스템 업데이트 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-10 relative overflow-hidden">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#243c84] rounded-t-2xl" />

            {/* Status Label */}
            <div className="inline-block text-[11px] font-semibold tracking-wider text-[#243c84] bg-gray-100 dark:bg-gray-900 px-2.5 py-1 rounded-full mb-5">
              SYSTEM UPDATE
            </div>

            <div className="flex flex-col gap-5 items-center text-center">
              {/* Meta Description */}
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Feature & Stability Update
              </p>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                시스템 업데이트 안내
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 max-w-[420px]">
                서비스 안정성 개선을 위한 업데이트가 적용되었습니다.
              </p>

              {/* Date */}
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Updated on 2025.01.12
              </span>
            </div>
          </div>

          {/* Card 2 - 협력사 가이드 개정 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-10 relative overflow-hidden">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#243c84] rounded-t-2xl" />

            {/* Status Label */}
            <div className="inline-block text-[11px] font-semibold tracking-wider text-[#243c84] bg-gray-100 dark:bg-gray-900 px-2.5 py-1 rounded-full mb-5">
              POLICY UPDATE
            </div>

            <div className="flex flex-col gap-5 items-center text-center">
              {/* Meta Description */}
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Partnership Guidelines
              </p>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                협력사 가이드 개정
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 max-w-[420px]">
                협력사 참여 절차가 일부 변경되었습니다.
              </p>

              {/* Date */}
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Updated on 2025.01.11
              </span>
            </div>
          </div>

          {/* Card 3 - 신규 기능 출시 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-10 relative overflow-hidden">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#243c84] rounded-t-2xl" />

            {/* Status Label */}
            <div className="inline-block text-[11px] font-semibold tracking-wider text-[#243c84] bg-gray-100 dark:bg-gray-900 px-2.5 py-1 rounded-full mb-5">
              FEATURE UPDATE
            </div>

            <div className="flex flex-col gap-5 items-center text-center">
              {/* Meta Description */}
              <p className="text-xs text-gray-500 dark:text-gray-400">
                New Dashboard Features
              </p>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                신규 기능 출시
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 max-w-[420px]">
                향상된 대시보드 기능을 확인해보세요.
              </p>

              {/* Date */}
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Updated on 2025.01.10
              </span>
            </div>
          </div>

          {/* Card 4 - 시스템 점검 예정 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-10 relative overflow-hidden">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#243c84] rounded-t-2xl" />

            {/* Status Label */}
            <div className="inline-block text-[11px] font-semibold tracking-wider text-[#243c84] bg-gray-100 dark:bg-gray-900 px-2.5 py-1 rounded-full mb-5">
              MAINTENANCE
            </div>

            <div className="flex flex-col gap-5 items-center text-center">
              {/* Meta Description */}
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Scheduled Maintenance
              </p>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                시스템 점검 예정
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 max-w-[420px]">
                안정적인 서비스 제공을 위한 정기 점검이 진행됩니다.
              </p>

              {/* Date */}
              <span className="text-xs text-gray-500 dark:text-gray-400">
                2025.01.18 02:00 ~ 04:00
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Group 2. Feature Carousel */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          2. Feature Carousel
        </h2>
        <p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          기능 소개, 단계 설명, 온보딩
        </p>
        
        <div className="grid grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-10 relative min-h-[240px] flex flex-col items-center justify-center text-center">
            {/* Large Number - Absolute Position Top Right */}
            <div className="absolute top-5 right-5 text-[64px] font-bold text-gray-200 dark:text-gray-700 tracking-tighter leading-none">
              01
            </div>
            
            <div className="flex flex-col gap-4 items-center">
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                프로젝트 생성
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-300">
                신규 프로젝트를 생성하고<br />기본 정보를 입력합니다.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-10 relative min-h-[240px] flex flex-col items-center justify-center text-center">
            {/* Large Number - Absolute Position Top Right */}
            <div className="absolute top-5 right-5 text-[64px] font-bold text-gray-200 dark:text-gray-700 tracking-tighter leading-none">
              02
            </div>
            
            <div className="flex flex-col gap-4 items-center">
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                팀원 초대
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-300">
                협업할 팀원을 초대하고<br />역할을 설정합니다.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-10 relative min-h-[240px] flex flex-col items-center justify-center text-center">
            {/* Large Number - Absolute Position Top Right */}
            <div className="absolute top-5 right-5 text-[64px] font-bold text-gray-200 dark:text-gray-700 tracking-tighter leading-none">
              03
            </div>
            
            <div className="flex flex-col gap-4 items-center">
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                진행 관리
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-300">
                작업 상태를 추적하고<br />결과를 공유합니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Group 3. Card Carousel */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          3. Card Carousel
        </h2>
        <p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          대시보드 핵심 지표 미리보기
        </p>
        
        <div className="grid grid-cols-6 gap-4">
          {/* Card 1 - 활성 사용자 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 flex flex-col gap-4 items-center justify-center text-center">
            <Users size={18} className="text-[#243c84]" />
            <div>
              <div className="text-[13px] font-medium tracking-wide text-gray-500 dark:text-gray-400 mb-3 uppercase">
                ACTIVE USERS
              </div>
              <div className="text-[28px] font-bold text-gray-900 dark:text-gray-50 tracking-tight">
                12,458
              </div>
            </div>
          </div>

          {/* Card 2 - 월간 매출 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 flex flex-col gap-4 items-center justify-center text-center">
            <Banknote size={18} className="text-[#243c84]" />
            <div>
              <div className="text-[13px] font-medium tracking-wide text-gray-500 dark:text-gray-400 mb-3 uppercase">
                MONTHLY REVENUE
              </div>
              <div className="text-[28px] font-bold text-gray-900 dark:text-gray-50 tracking-tight">
                ₩89.2M
              </div>
            </div>
          </div>

          {/* Card 3 - 처리 요청 수 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 flex flex-col gap-4 items-center justify-center text-center">
            <ShoppingCart size={18} className="text-[#243c84]" />
            <div>
              <div className="text-[13px] font-medium tracking-wide text-gray-500 dark:text-gray-400 mb-3 uppercase">
                REQUESTS
              </div>
              <div className="text-[28px] font-bold text-gray-900 dark:text-gray-50 tracking-tight">
                3,842
              </div>
            </div>
          </div>

          {/* Card 4 - 신규 고객 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 flex flex-col gap-4 items-center justify-center text-center">
            <UserPlus size={18} className="text-[#243c84]" />
            <div>
              <div className="text-[13px] font-medium tracking-wide text-gray-500 dark:text-gray-400 mb-3 uppercase">
                NEW CUSTOMERS
              </div>
              <div className="text-[28px] font-bold text-gray-900 dark:text-gray-50 tracking-tight">
                1,247
              </div>
            </div>
          </div>

          {/* Card 5 - 페이지 조회 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 flex flex-col gap-4 items-center justify-center text-center">
            <Eye size={18} className="text-[#243c84]" />
            <div>
              <div className="text-[13px] font-medium tracking-wide text-gray-500 dark:text-gray-400 mb-3 uppercase">
                PAGE VIEWS
              </div>
              <div className="text-[28px] font-bold text-gray-900 dark:text-gray-50 tracking-tight">
                56,200
              </div>
            </div>
          </div>

          {/* Card 6 - 전환율 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 flex flex-col gap-4 items-center justify-center text-center">
            <TrendingUp size={18} className="text-[#243c84]" />
            <div>
              <div className="text-[13px] font-medium tracking-wide text-gray-500 dark:text-gray-400 mb-3 uppercase">
                CONVERSION RATE
              </div>
              <div className="text-[28px] font-bold text-gray-900 dark:text-gray-50 tracking-tight">
                8.4%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Group 4. Media-Free Carousel */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          4. Media-Free Carousel (IT 스타일 핵심)
        </h2>
        <p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          이미지 없이 정보 전달
        </p>
        
        <div className="grid grid-cols-3 gap-6">
          {/* Card 1 - 효율적인 데이터 관리 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-10 relative overflow-hidden text-center">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#243c84] rounded-t-2xl" />

            <div className="flex flex-col gap-5 items-center">
              {/* Status Badge */}
              <div className="inline-block text-[11px] font-semibold tracking-wide text-[#243c84] bg-gray-100 dark:bg-gray-900 px-2.5 py-1.5 rounded-full">
                SERVICE TIP
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                효율적인 데이터 관리
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                자주 사용하는 필터 조건을 저장하면 반복 작업 시간을 단축할 수 있습니다.
              </p>

              {/* Meta Info */}
              <span className="text-xs text-gray-500 dark:text-gray-400">
                팁 · 업무 효율화
              </span>
            </div>
          </div>

          {/* Card 2 - 팀 협업 가이드 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-10 relative overflow-hidden text-center">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#243c84] rounded-t-2xl" />

            <div className="flex flex-col gap-5 items-center">
              {/* Status Badge */}
              <div className="inline-block text-[11px] font-semibold tracking-wide text-[#243c84] bg-gray-100 dark:bg-gray-900 px-2.5 py-1.5 rounded-full">
                BEST PRACTICE
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                팀 협업 가이드
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                프로젝트별 담당자를 명확히 지정하면 커뮤니케이션 효율이 높아집니다.
              </p>

              {/* Meta Info */}
              <span className="text-xs text-gray-500 dark:text-gray-400">
                팁 · 협업 관리
              </span>
            </div>
          </div>

          {/* Card 3 - 계정 보안 권장사항 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-10 relative overflow-hidden text-center">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#243c84] rounded-t-2xl" />

            <div className="flex flex-col gap-5 items-center">
              {/* Status Badge */}
              <div className="inline-block text-[11px] font-semibold tracking-wide text-[#243c84] bg-gray-100 dark:bg-gray-900 px-2.5 py-1.5 rounded-full">
                SECURITY
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                계정 보안 권장사항
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                주기적인 비밀번호 변경과 2단계 인증 활성화를 권장합니다.
              </p>

              {/* Meta Info */}
              <span className="text-xs text-gray-500 dark:text-gray-400">
                팁 · 보안 관리
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Group 5. Control Rules */}
      <div className="mb-12">
        <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-[10px] p-6">
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 mb-4">
            Control Rules
          </h3>
          <ul className="text-sm leading-8 text-gray-600 dark:text-gray-400 pl-5">
            <li>Auto play 기본 비활성</li>
            <li>사용자 액션 우선</li>
            <li>한 Carousel 내 Slide 최대 5개</li>
            <li>모바일에서는 Dot만 노출</li>
          </ul>
        </div>
      </div>

      {/* Design Principles */}
      <div className="mb-12">
        <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-[10px] p-6">
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 mb-4">
            Design Principles (Read Only)
          </h3>
          <ul className="text-sm leading-8 text-gray-600 dark:text-gray-400 pl-5">
            <li>업데이트는 위협이 아니라 신뢰를 전달해야 한다</li>
            <li>상태를 색이나 아이콘으로 과장하지 않는다</li>
            <li>중요한 정보일수록 조용하게 전달한다</li>
            <li>시스템은 항상 동작 중이라는 전제를 유지한다</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
