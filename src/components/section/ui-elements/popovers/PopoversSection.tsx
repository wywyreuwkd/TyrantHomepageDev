"use client"

import { useState } from "react";
import { Info, Settings, MoreVertical, ExternalLink, Home, ChevronRight } from "lucide-react";

const BRAND_PRIMARY = "#243c84";

interface PopoverDesignBlockProps {
  title: string;
  description: string;
  recommendedSituation: string;
  triggerMethod: string;
  focusRetention: string;
  outsideClickBehavior: string;
  nestingSupport: string;
  guideButton?: {
    label: string;
  };
  secondaryGuideButton?: {
    label: string;
  };
  children: React.ReactNode;
}

function PopoverDesignBlock({
  title,
  description,
  recommendedSituation,
  triggerMethod,
  focusRetention,
  outsideClickBehavior,
  nestingSupport,
  guideButton,
  secondaryGuideButton,
  children
}: PopoverDesignBlockProps) {
  return (
    <div className="popover-design-block border border-gray-200 dark:border-gray-700 rounded-xl p-7 bg-white dark:bg-gray-800">
      {/* 상단 설계 헤더 */}
      <div className="popover-header mb-6">
        <div className="flex-1 mb-3">
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-normal">
            {description}
          </p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 py-1.5 px-3 rounded-md text-[13px] text-gray-700 dark:text-gray-300 font-medium whitespace-nowrap w-fit">
          {recommendedSituation}
        </div>
      </div>

      {/* 중단 구조 예시 영역 */}
      <div className="popover-preview bg-gray-50 dark:bg-gray-900 rounded-[10px] mb-6 flex justify-center items-center">
        {children}
      </div>

      {/* 하단 설계 스펙 영역 */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-5 mb-4 border border-gray-100 dark:border-gray-700">
        <div className="popover-spec-grid">
          <div className="text-gray-600 dark:text-gray-400 font-medium">트리거 방식</div>
          <div className="text-gray-700 dark:text-gray-300">{triggerMethod}</div>

          <div className="text-gray-600 dark:text-gray-400 font-medium">포커스 유지 여부</div>
          <div className="text-gray-700 dark:text-gray-300">{focusRetention}</div>

          <div className="text-gray-600 dark:text-gray-400 font-medium">외부 클릭 시 동작</div>
          <div className="text-gray-700 dark:text-gray-300">{outsideClickBehavior}</div>

          <div className="text-gray-600 dark:text-gray-400 font-medium">중첩 사용 가능 여부</div>
          <div className="text-gray-700 dark:text-gray-300">{nestingSupport}</div>
        </div>
      </div>

      {/* 하단 가이드 영역 */}
      {(guideButton || secondaryGuideButton) && (
        <div className="popover-action-buttons">
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
      
      <style>{`
        @media (max-width: 768px) {
          .popover-design-block {
            padding: 20px !important;
          }
          
          .popover-header {
            display: block !important;
          }
          
          .popover-preview {
            padding: 24px 16px !important;
            min-height: 160px !important;
          }
          
          .popover-spec-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
            font-size: 14px;
          }
          
          .popover-spec-grid > div:nth-child(odd) {
            font-weight: 600;
            margin-bottom: -8px;
          }
          
          .popover-action-buttons {
            display: flex;
            gap: 8px;
            flex-direction: column;
          }
          
          .popover-action-buttons button {
            width: 100%;
          }
        }
        
        @media (min-width: 769px) {
          .popover-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
          }
          
          .popover-header > div:first-child {
            margin-bottom: 0 !important;
          }
          
          .popover-header > div:last-child {
            margin-left: 16px;
          }
          
          .popover-preview {
            padding: 40px !important;
            min-height: 200px !important;
          }
          
          .popover-spec-grid {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 14px;
            font-size: 14px;
          }
          
          .popover-action-buttons {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
          }
        }
      `}</style>
    </div>
  );
}

// Popover 컴포넌트
function Popover({ 
  trigger, 
  content, 
  position = 'top'
}: { 
  trigger: React.ReactNode; 
  content: React.ReactNode; 
  position?: 'top' | 'bottom' | 'left' | 'right';
}) {
  const [isOpen, setIsOpen] = useState(false);

  const getPopoverPositionClass = () => {
    switch (position) {
      case 'top':
        return 'bottom-full left-1/2 -translate-x-1/2 mb-2';
      case 'bottom':
        return 'top-full left-1/2 -translate-x-1/2 mt-2';
      case 'left':
        return 'right-full top-1/2 -translate-y-1/2 mr-2';
      case 'right':
        return 'left-full top-1/2 -translate-y-1/2 ml-2';
    }
  };

  const getArrowPositionClass = () => {
    switch (position) {
      case 'top':
        return '-bottom-1 left-1/2 -translate-x-1/2 rotate-45';
      case 'bottom':
        return '-top-1 left-1/2 -translate-x-1/2 rotate-45';
      case 'left':
        return '-right-1 top-1/2 -translate-y-1/2 rotate-45';
      case 'right':
        return '-left-1 top-1/2 -translate-y-1/2 rotate-45';
    }
  };

  return (
    <div className="relative inline-block">
      <div
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {trigger}
      </div>
      {isOpen && (
        <div
          className={`absolute z-50 ${getPopoverPositionClass()}`}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)] p-3 px-4 min-w-[200px] relative">
            {/* Arrow */}
            <div className={`absolute w-2 h-2 bg-white dark:bg-gray-800 border-l border-t border-gray-200 dark:border-gray-700 ${getArrowPositionClass()}`} />
            {content}
          </div>
        </div>
      )}
    </div>
  );
}

export function PopoversSection() {
	const [contextMenuOpen, setContextMenuOpen] = useState(false);

	return (
		<div>
			{/* Popover 설계 블록 목록 */}
			<div className="flex flex-col gap-10">

        {/* 1. 정보 미리보기 Popover */}
				<PopoverDesignBlock
					title="정보 미리보기 Popover"
					description="상세 페이지로 이동하지 않고도 주요 정보를 빠르게 확인할 수 있도록 하는 Popover 구조입니다. 사용자명, 프로젝트명 등에 마우스를 올렸을 때 요약 정보를 표시합니다."
					recommendedSituation="테이블 · 목록 뷰"
					triggerMethod="Hover (마우스 오버)"
					focusRetention="Popover 영역에 마우스가 있을 때 유지"
					outsideClickBehavior="마우스 벗어나면 자동 닫힘"
					nestingSupport="지원하지 않음 (단일 레벨만)"
					guideButton={{ label: '보조 정보 노출 기준' }}
					secondaryGuideButton={{ label: '미리보기 패턴' }}
				>
					<Popover
						position="top"
						trigger={
							<div className="py-2.5 px-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-md text-sm text-[#243c84] font-medium cursor-pointer flex items-center gap-1.5 transition-all duration-200">
								<Info size={16} />
								사용자 정보
							</div>
						}
						content={
							<div>
								<div className="text-[13px] font-semibold text-gray-900 dark:text-gray-50 mb-2">
									홍길동
								</div>
								<div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
									hong@example.com
								</div>
								<div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
									개발팀 · 시니어 개발자
								</div>
								<div className="text-[11px] text-gray-400 pt-2 border-t border-gray-100 dark:border-gray-700">
									마지막 로그인: 2026.01.12 14:35
								</div>
							</div>
						}
					/>
				</PopoverDesignBlock>

        {/* 2. 액션 보조 Popover */}
				<PopoverDesignBlock
					title="액션 보조 Popover"
					description="버튼이나 입력 필드 옆에서 추가 설명, 가이드, 제약사항을 안내하는 Popover 구조입니다. 복잡한 작업 수행 시 사용자 실수를 줄이기 위해 사용합니다."
					recommendedSituation="폼 입력 · 설정 화면"
					triggerMethod="Hover 또는 Focus"
					focusRetention="입력 필드 포커스 시 유지"
					outsideClickBehavior="포커스 벗어나면 자동 닫힘"
					nestingSupport="지원하지 않음"
					guideButton={{ label: '입력 보조 가이드' }}
				>
					<div className="flex items-center gap-3">
						<input
							type="text"
							placeholder="프로젝트 코드 입력"
							className="w-60 h-10 px-3 border border-gray-200 dark:border-gray-600 rounded-md text-sm text-gray-700 dark:text-gray-50 bg-white dark:bg-gray-900 outline-none"
						/>
						<Popover
							position="right"
							trigger={
								<div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center cursor-pointer transition-all duration-200">
									<Info size={14} className="text-gray-600 dark:text-gray-400" />
								</div>
							}
							content={
								<div>
									<div className="text-[13px] font-semibold text-gray-900 dark:text-gray-50 mb-2">
										프로젝트 코드 규칙
									</div>
									<div className="text-xs text-gray-600 dark:text-gray-400 leading-normal">
										• 영문 대문자 3자<br />
										• 숫자 4자<br />
										• 예시: PRJ2024
									</div>
								</div>
							}
						/>
					</div>
				</PopoverDesignBlock>

        {/* 3. 컨텍스트 옵션 Popover */}
				<PopoverDesignBlock
					title="컨텍스트 옵션 Popover"
					description="행 단위 또는 카드 단위로 제공되는 빠른 액션 메뉴입니다. 수정, 삭제, 이동 등 제한된 작업 목록을 표시합니다."
					recommendedSituation="테이블 행 · 카드 액션"
					triggerMethod="Click (아이콘 버튼)"
					focusRetention="외부 클릭 전까지 유지"
					outsideClickBehavior="외부 클릭 시 자동 닫힘"
					nestingSupport="지원하지 않음 (하위 메뉴 대신 모달 사용)"
					guideButton={{ label: '옵션 제공 패턴' }}
					secondaryGuideButton={{ label: '액션 메뉴 설계' }}
				>
					<div className="relative">
						<button
							onClick={() => setContextMenuOpen(!contextMenuOpen)}
							className="w-9 h-9 border border-gray-200 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700"
						>
							<MoreVertical size={18} className="text-gray-600 dark:text-gray-400" />
						</button>
						{contextMenuOpen && (
							<div className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)] min-w-[180px] z-50">
								{[
									{ icon: Settings, label: '수정하기' },
									{ icon: ExternalLink, label: '새 창에서 열기' },
									{ icon: Info, label: '상세 정보' }
								].map((item, index) => (
									<button
										key={index}
										className={`w-full py-2.5 px-3.5 flex items-center gap-2.5 text-sm text-gray-700 dark:text-gray-300 border-0 bg-transparent cursor-pointer text-left transition-all duration-150 hover:bg-gray-50 dark:hover:bg-gray-700 ${
											index < 2 ? 'border-b border-gray-100 dark:border-gray-700' : ''
										}`}
									>
										<item.icon size={16} className="text-gray-600 dark:text-gray-400" />
										{item.label}
									</button>
									))}
							</div>
							)}
					</div>
				</PopoverDesignBlock>

        {/* 4. 링크·경로 안내 Popover */}
				<PopoverDesignBlock
					title="링크·경로 안내 Popover"
					description="외부 링크 클릭 전 이동할 페이지 정보를 미리 안내하거나, 파일 다운로드 전 파일 정보를 표시하는 Popover 구조입니다."
					recommendedSituation="외부 링크 · 파일 다운로드"
					triggerMethod="Hover (링크 위)"
					focusRetention="마우스 오버 시 유지"
					outsideClickBehavior="마우스 벗어나면 자동 닫힘"
					nestingSupport="지원하지 않음"
					guideButton={{ label: '링크 안내 패턴' }}
				>
					<Popover
						position="bottom"
						trigger={
							<a
								href="#"
								className="text-sm text-[#243c84] font-medium underline cursor-pointer flex items-center gap-1"
								onClick={(e) => e.preventDefault()}
							>
								API 문서 보기
								<ExternalLink size={14} />
							</a>
						}
						content={
							<div>
								<div className="text-[13px] font-semibold text-gray-900 dark:text-gray-50 mb-2">
									외부 링크 이동
								</div>
								<div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
									docs.example.com
								</div>
								<div className="text-[11px] text-gray-400 pt-2 border-t border-gray-100 dark:border-gray-700">
									새 창에서 열립니다
								</div>
							</div>
						}
					/>
				</PopoverDesignBlock>

			</div>
		</div>
	);
}