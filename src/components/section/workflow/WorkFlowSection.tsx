"use client";

import Link from "next/link";
import { Home, ChevronRight, BarChart3, FileText, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

interface RoleBadgeProps {
  role: '건물주' | '시공사' | 'Tyrant-I';
}

function RoleBadge({ role }: RoleBadgeProps) {
  const roleStyles = {
    '건물주': 'bg-red-50 text-red-900 border-red-200',
    '시공사': 'bg-sky-50 text-sky-900 border-sky-200',
    'Tyrant-I': 'bg-emerald-50 text-emerald-900 border-emerald-200'
  };

  return (
    <span className={`h-5 px-2 rounded-full text-[11px] font-medium inline-flex items-center border ${roleStyles[role]}`}>
      {role}
    </span>
  );
}

interface TaskCardProps {
  role: '건물주' | '시공사' | 'Tyrant-I';
  title: string;
  description?: string;
}

function TaskCard({ role, title, description }: TaskCardProps) {
  return (
    <div className="flex-1 p-4 rounded-lg border transition-all duration-200 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800">
      <div className="mb-2">
        <RoleBadge role={role} />
      </div>
      <div className="text-[14px] font-normal leading-[1.6] whitespace-pre-line text-gray-900 dark:text-gray-50">
        {title}
      </div>
      {description && (
        <div className="text-[14px] font-normal mt-0 leading-[1.6] whitespace-pre-line text-gray-900 dark:text-gray-50">
          {description}
        </div>
      )}
    </div>
  );
}

// Mobile-specific Task Card
interface MobileTaskCardProps {
  role: '건물주' | '시공사' | 'Tyrant-I';
  title: string;
  description?: string;
}

function MobileTaskCard({ role, title, description }: MobileTaskCardProps) {
  return (
    <div className="py-3.5 px-4 rounded-lg border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
      <div className="mb-2">
        <RoleBadge role={role} />
      </div>
      <div className="text-[13px] font-normal leading-[1.6] whitespace-pre-line text-left text-gray-900 dark:text-gray-50">
        {title}
      </div>
      {description && (
        <div className="text-[13px] font-normal mt-0 leading-[1.6] whitespace-pre-line text-left text-gray-900 dark:text-gray-50">
          {description}
        </div>
      )}
    </div>
  );
}

interface StageCardProps {
  stageNumber: string;
  stageTitle: string;
  children: React.ReactNode;
}

function StageCard({ stageNumber, stageTitle, children }: StageCardProps) {
  return (
    <div className="p-8 rounded-xl border relative overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="mb-8 relative z-[1]">
        <div className="flex items-center gap-3 mb-2">
          {stageNumber && (
            <>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#243c84] flex items-center justify-center text-[16px] font-bold text-white">
                  {stageNumber}
                </div>
                <span className="text-[13px] font-semibold text-[#243c84] tracking-[0.05em]">
                  PHASE
                </span>
              </div>
              <div 
                className="flex-1 h-0.5" 
                style={{ background: `linear-gradient(to right, #E5E7EB, transparent) dark:linear-gradient(to right, #374151, transparent)` }} // TODO 라인 작업 확인 필요
              />
            </>
          )}
        </div>
        <h3 className="text-[22px] font-bold tracking-[-0.02em] text-gray-900 dark:text-gray-50">
          {stageTitle}
        </h3>
      </div>

      {/* Content */}
      <div className="relative z-[1]">
        {children}
      </div>
    </div>
  );
}

// Mobile Stage Section
interface MobileStageProps {
  stageTitle: string;
  children: React.ReactNode;
}

function MobileStage({ stageTitle, children }: MobileStageProps) {
  return (
    <div className="relative pl-6 mb-8">
      {/* Vertical Flow Line */}
      <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
      
      {/* Stage Title */}
      <h3 className="text-[18px] font-bold mb-4 tracking-[-0.01em] text-gray-900 dark:text-gray-50">
        {stageTitle}
      </h3>
      
      {/* Tasks */}
      <div className="flex flex-col gap-3">
        {children}
      </div>
    </div>
  );
}

export function WorkFlowSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop Layout
  const desktopLayout = (
    <div className="py-6 md:px-6">
      {/* Page Header */}
      <div className="mb-12">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-[28px] font-bold tracking-[-0.02em] text-gray-900 dark:text-gray-50">
              주요 업무 흐름도
            </h1>
            <p className="text-[14px] mt-2 text-gray-500 dark:text-gray-400">
              역할 중심 프로세스 다이어그램
            </p>
          </div>

          {/* Breadcrumb - PC만 표시 */}
          <nav className="flex items-center gap-2 flex-shrink-0">
            <Link href="/main">
              <div className="flex items-center gap-1.5 cursor-pointer">
                <Home className="flex-shrink-0 text-gray-400 dark:text-gray-500" size={14}/>
                <span className="text-[13px] font-medium whitespace-nowrap text-gray-500 dark:text-gray-400">
                  홈
                </span>
              </div>
            </Link>
            <ChevronRight size={12} className="flex-shrink-0 text-gray-300 dark:text-gray-600" />
            <span className="text-[13px] font-medium whitespace-nowrap text-gray-500 dark:text-gray-400">
              협력사 가이드라인
            </span>
            <ChevronRight size={12} className="flex-shrink-0 text-gray-300 dark:text-gray-600" />
            <span className="text-[13px] font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">
              주요 업무 흐름도
            </span>
          </nav>
        </div>
      </div>

      {/* Main Container */}
      <div className="flex flex-col gap-8">
        
        {/* Stage 1: 제안 및 계약 */}
        <StageCard stageNumber="1" stageTitle="제안 및 계약">
          <div className="flex items-center justify-center gap-4 mb-6">
            <TaskCard role="건물주" title="제안 접수" />
            <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <TaskCard role="시공사" title="제안 접수" />
            <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <TaskCard role="Tyrant-I" title="접수 확인" />
          </div>
          
          <div className="flex justify-center mb-6">
            <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="flex justify-center mb-6">
            <div className="max-w-[320px] w-full">
              <TaskCard role="시공사" title="계통 확인 (한전 On)" description="현장 실사" />
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="flex items-center justify-center gap-4">
            <TaskCard role="건물주" title="계약 날인" />
            <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <TaskCard role="시공사" title="계약 날인" />
            <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <TaskCard role="Tyrant-I" title="계약 날인" />
          </div>
        </StageCard>

        {/* Stage 2: 인허가 및 자금 투자 */}
        <StageCard stageNumber="2" stageTitle="인허가 및 자금 투자">
          <div className="flex items-center justify-center gap-4 mb-6">
            <TaskCard role="시공사" title="발전사업 허가 진행" />
            <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <TaskCard role="Tyrant-I" title="발전사업 허가 지원" />
          </div>

          <div className="flex justify-center mb-6">
            <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="flex justify-center mb-6">
            <div className="max-w-[320px] w-full">
              <TaskCard role="시공사" title="개발행위 허가 접수" />
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="flex items-center justify-center gap-4">
            <TaskCard role="시공사" title="착공 신고" />
            <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <TaskCard role="Tyrant-I" title="자금 투자" />
          </div>
        </StageCard>

        {/* Stage 3: 공사 및 운영 */}
        <StageCard stageNumber="3" stageTitle="공사 및 운영">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <TaskCard role="시공사" title="공사" />
            <TaskCard role="Tyrant-I" title="EPC 조건" />
          </div>

          <div className="flex justify-center mb-6">
            <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="flex justify-center mb-6">
            <div className="max-w-[320px] w-full">
              <TaskCard role="시공사" title="사용전 검사" description={`(설치용량 확정)\\n주주협약 날인`} />
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="flex items-center justify-center gap-4">
            <TaskCard role="건물주" title="운영 보고서 수령" />
            <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <TaskCard role="시공사" title="운영" />
            <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <TaskCard role="Tyrant-I" title="사업 관리 및 관리 운영" />
          </div>
        </StageCard>

        {/* Stage 4: 운영 보고 및 자금 지급 */}
        <StageCard stageNumber="" stageTitle="운영 보고 및 자금 지급">
          <div className="grid grid-cols-3 gap-5">
            <div className="p-6 rounded-lg border-2 text-center bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl border flex items-center justify-center bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <BarChart3 size={24} className="text-[#243c84]" />
              </div>
              <div className="text-[14px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
                발전시간/월 리포트
              </div>
              <div className="text-[12px] leading-[1.5] text-gray-500 dark:text-gray-400">
                월별 발전 시간 및 효율 데이터
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 text-center bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl border flex items-center justify-center bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <FileText size={24} className="text-[#243c84]" />
              </div>
              <div className="text-[14px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
                입출금 내역/월 리포트
              </div>
              <div className="text-[12px] leading-[1.5] text-gray-500 dark:text-gray-400">
                월별 정산 및 금융 거래 내역
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 text-center bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl border flex items-center justify-center bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <Clock size={24} className="text-[#243c84]" />
              </div>
              <div className="text-[14px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
                자금 지급 (임대료)
              </div>
              <div className="text-[12px] leading-[1.5] text-gray-500 dark:text-gray-400">
                건물주 임대료 정기 지급 처리
              </div>
            </div>
          </div>
        </StageCard>
      </div>
    </div>
  );

  // Mobile Layout
  const mobileLayout = (
    <div className="py-6">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-[24px] font-bold mb-2 tracking-[-0.02em] text-gray-900 dark:text-gray-50">
          주요 업무 흐름도
        </h1>
        <p className="text-[14px] text-gray-500 dark:text-gray-400">
          역할 중심 프로세스 다이어그램
        </p>
      </div>

      {/* Stage 1: 제안 및 계약 */}
      <MobileStage stageTitle="1단계 제안 및 계약">
        <MobileTaskCard role="건물주" title="제안 접수" />
        <div className="flex justify-center my-2">
          <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <MobileTaskCard role="시공사" title="제안 접수" />
        <div className="flex justify-center my-2">
          <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <MobileTaskCard role="Tyrant-I" title="접수 확인"/>
        <div className="flex justify-center my-2">
          <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <MobileTaskCard role="시공사" title="계통 확인 (한전 On)" description="현장 실사" />
        <div className="flex justify-center my-2">
          <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <MobileTaskCard role="건물주" title="계약 날인"/>
        <div className="flex justify-center my-2">
          <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <MobileTaskCard role="시공사" title="계약 날인" />
        <div className="flex justify-center my-2">
          <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <MobileTaskCard role="Tyrant-I" title="계약 날인" />
      </MobileStage>

      {/* Stage 2: 인허가 및 자금 투자 */}
      <MobileStage stageTitle="2단계 인허가 및 자금 투자">
        <MobileTaskCard role="시공사" title="발전사업 허가 진행" />
        <div className="flex justify-center my-2">
          <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <MobileTaskCard role="Tyrant-I" title="발전사업 허가 지원" />
        <div className="flex justify-center my-2">
          <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <MobileTaskCard role="시공사" title="개발행위 허가 접수" />
        <div className="flex justify-center my-2">
          <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <MobileTaskCard role="시공사" title="착공 신고" />
        <div className="flex justify-center my-2">
          <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <MobileTaskCard role="Tyrant-I" title="자금 투자" />
      </MobileStage>

      {/* Stage 3: 공사 및 운영 */}
      <MobileStage stageTitle="3단계 공사 및 운영">
        <MobileTaskCard role="시공사" title="공사" />
        <div className="flex justify-center my-2">
          <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <MobileTaskCard role="Tyrant-I" title="EPC 조건" />
        <div className="flex justify-center my-2">
          <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <MobileTaskCard role="시공사" title="사용전 검사" description={`(설치용량 확정)\\n주주협약 날인`} />
        <div className="flex justify-center my-2">
          <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <MobileTaskCard role="건물주" title="운영 보고서 수령" />
        <div className="flex justify-center my-2">
          <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <MobileTaskCard role="시공사" title="운영" />
        <div className="flex justify-center my-2">
          <svg className="stroke-[#D1D5DB] dark:stroke-[#4B5563] stroke-[2]" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <MobileTaskCard role="Tyrant-I" title="사업 관리 및 관리 운영" />
      </MobileStage>

      {/* Stage 4: 운영 보고 및 자금 지급 */}
      <MobileStage stageTitle="운영 보고 및 자금 지급">
        <div className="p-4 rounded-lg border mb-3 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <BarChart3 size={20} className="text-[#243c84]" />
            </div>
            <div>
              <div className="text-[14px] font-semibold text-gray-900 dark:text-gray-50">
                발전시간/월 리포트
              </div>
              <div className="text-[12px] mt-0.5 text-gray-500 dark:text-gray-400">
                월별 발전 시간 및 효율 데이터
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg border mb-3 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <FileText size={20} className="text-[#243c84]" />
            </div>
            <div>
              <div className="text-[14px] font-semibold text-gray-900 dark:text-gray-50">
                입출금 내역/월 리포트
              </div>
              <div className="text-[12px] mt-0.5 text-gray-500 dark:text-gray-400">
                월별 정산 및 금융 거래 내역
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg border bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <Clock size={20} className="text-[#243c84]" />
            </div>
            <div>
              <div className="text-[14px] font-semibold text-gray-900 dark:text-gray-50">
                자금 지급 (임대료)
              </div>
              <div className="text-[12px] mt-0.5 text-gray-500 dark:text-gray-400">
                건물주 임대료 정기 지급 처리
              </div>
            </div>
          </div>
        </div>
      </MobileStage>
    </div>
  );

  return isMobile ? mobileLayout : desktopLayout;
}
