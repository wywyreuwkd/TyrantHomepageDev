"use client"

import { X, CheckCircle2, Info, AlertTriangle, AlertCircle } from "lucide-react";
import { useState } from "react";

// Brand Colors
const BRAND_PRIMARY = '#243c84';
const BRAND_SECONDARY = '#d8442c';

export function ModalsSection() {
	const [openModal, setOpenModal] = useState<string | null>(null);
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });

	const closeModal = () => setOpenModal(null);

  	// Modal Overlay Component
	const ModalOverlay = ({ children, onClose }: { children: React.ReactNode; onClose: () => void }) => (
		<div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-[1000] p-5"
			onClick={onClose}>
			<div onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
  	);
	
	return (
		<div>
			{/* Modal Pattern Cards */}
			<div className="flex flex-col gap-8 mb-12">

        		{/* 1. Default Modal Card */}
				<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
          			{/* 상단 */}
					<div className="mb-5">
						<h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 mb-2">
							Default Modal
						</h3>
						<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed m-0">
							간단한 정보 제공 및 사용자 확인이 필요한 기본 모달. 최소한의 액션 버튼으로 빠르게 응답할 수 있도록 설계되었습니다.
						</p>
					</div>

          			{/* 중단 - 정보 리스트 */}
					<div className="grid grid-cols-2 gap-4 mb-6">
						<div>
							<div className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 mb-1">사용 시점</div>
							<div className="text-[13px] text-gray-600 dark:text-gray-400">삭제 확인, 일반 안내</div>
						</div>
						<div>
							<div className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 mb-1">권장 크기</div>
							<div className="text-[13px] text-gray-600 dark:text-gray-400">Medium (500px)</div>
						</div>
						<div>
							<div className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 mb-1">주요 액션 수</div>
							<div className="text-[13px] text-gray-600 dark:text-gray-400">1-2개</div>
						</div>
						<div>
							<div className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 mb-1">사용자 집중도</div>
							<div className="text-[13px] text-gray-600 dark:text-gray-400">중간</div>
						</div>
					</div>

          			{/* 하단 - 버튼 */}
					<div className="border-t border-gray-100 dark:border-gray-700 pt-5">
						<button className="bg-[#243c84] text-white text-sm font-semibold px-5 py-2.5 rounded-lg border-0 cursor-pointer"
							onClick={() => setOpenModal('default')}>
							기본 모달 예시 보기
						</button>
					</div>
				</div>

        		{/* 2. Centered Modal Card */}
				<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
          			{/* 상단 */}
					<div className="mb-5">
						<h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 mb-2">
							Centered Modal
						</h3>
						<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed m-0">
							사용자의 즉각적인 주의와 집중이 필요한 중앙 정렬 모달. 시각적 아이콘과 핵심 메시지를 중심으로 구성됩니다.
						</p>
					</div>

          			{/* 중단 - 정보 리스트 */}
					<div className="grid grid-cols-2 gap-4 mb-6">
						<div>
							<div className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 mb-1">사용 시점</div>
							<div className="text-[13px] text-gray-600 dark:text-gray-400">중요 결정, 즉각 응답</div>
						</div>
						<div>
							<div className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 mb-1">권장 크기</div>
							<div className="text-[13px] text-gray-600 dark:text-gray-400">Small (400px)</div>
						</div>
						<div>
							<div className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 mb-1">주요 액션 수</div>
							<div className="text-[13px] text-gray-600 dark:text-gray-400">1-2개</div>
						</div>
						<div>
							<div className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 mb-1">사용자 집중도</div>
							<div className="text-[13px] text-gray-600 dark:text-gray-400">높음</div>
						</div>
					</div>

          			{/* 하단 - 버튼 */}
					<div className="border-t border-gray-100 dark:border-gray-700 pt-5">
						<button className="bg-[#243c84] text-white text-sm font-semibold px-5 py-2.5 rounded-lg border-0 cursor-pointer"
							onClick={() => setOpenModal('centered')}>
							중앙 모달 예시 보기
						</button>
					</div>
				</div>

        		{/* 3. Form Modal Card */}
				<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
          			{/* 상단 */}
					<div className="mb-5">
						<h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 mb-2">
							Form Modal
						</h3>
						<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed m-0">
							데이터 입력, 수정, 설정 변경을 위한 폼 모달. Form 요소와 Action 영역이 명확히 분리되어 있습니다.
						</p>
					</div>

          			{/* 중단 - 정보 리스트 */}
					<div className="grid grid-cols-2 gap-4 mb-6">
						<div>
							<div className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 mb-1">사용 시점</div>
							<div className="text-[13px] text-gray-600 dark:text-gray-400">입력, 설정, 프로필 수정</div>
						</div>
						<div>
							<div className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 mb-1">권장 크기</div>
							<div className="text-[13px] text-gray-600 dark:text-gray-400">Large (600px)</div>
						</div>
						<div>
							<div className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 mb-1">주요 액션 수</div>
							<div className="text-[13px] text-gray-600 dark:text-gray-400">2개 (취소, 저장)</div>
						</div>
						<div>
							<div className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 mb-1">사용자 집중도</div>
							<div className="text-[13px] text-gray-600 dark:text-gray-400">중간</div>
						</div>
					</div>

          			{/* 하단 - 버튼 */}
					<div className="border-t border-gray-100 dark:border-gray-700 pt-5">
						<button className="bg-[#243c84] text-white text-sm font-semibold px-5 py-2.5 rounded-lg border-0 cursor-pointer"
							onClick={() => setOpenModal('form')}>
							폼 모달 실행
						</button>
					</div>
				</div>

        		{/* 4. Full Screen Modal Card */}
				<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
          			{/* 상단 */}
					<div className="mb-5">
						<h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 mb-2">
							Full Screen Modal
						</h3>
						<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed m-0">
							복잡한 작업이나 단계적 프로세스를 위한 전체 화면 모달. Page와 Modal의 중간 성격으로 충분한 공간을 활용합니다.
						</p>
					</div>

          			{/* 중단 - 정보 리스트 */}	
					<div className="grid grid-cols-2 gap-4 mb-6">
						<div>
							<div className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 mb-1">사용 시점</div>
							<div className="text-[13px] text-gray-600 dark:text-gray-400">복잡한 워크플로우, 다단계</div>
						</div>
						<div>
							<div className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 mb-1">권장 크기</div>
							<div className="text-[13px] text-gray-600 dark:text-gray-400">Full (100% viewport)</div>
						</div>
						<div>
							<div className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 mb-1">주요 액션 수</div>
							<div className="text-[13px] text-gray-600 dark:text-gray-400">2개 이상</div>
						</div>
						<div>
							<div className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 mb-1">사용자 집중도</div>
							<div className="text-[13px] text-gray-600 dark:text-gray-400">높음</div>
						</div>
					</div>

          			{/* 하단 - 버튼 */}
					<div className="border-t border-gray-100 dark:border-gray-700 pt-5">
						<button className="bg-[#243c84] text-white text-sm font-semibold px-5 py-2.5 rounded-lg border-0 cursor-pointer"
							onClick={() => setOpenModal('fullscreen')}>
							전체 화면 모달 실행
						</button>
					</div>
				</div>

        		{/* 5. Alert / Feedback Modal Card */}
				<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
          			{/* 상단 */}
					<div className="mb-5">
						<h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 mb-2">
							Alert / Feedback Modal
						</h3>
						<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed m-0">
							작업 완료, 실패, 경고 등 상태 전달을 위한 피드백 모달. Success, Info, Warning, Danger 4가지 타입으로 구분됩니다.
						</p>
					</div>

          			{/* 중단 - 정보 리스트 */}
					<div className="grid grid-cols-2 gap-4 mb-6">
						<div>
							<div className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 mb-1">사용 시점</div>
							<div className="text-[13px] text-gray-600 dark:text-gray-400">작업 결과, 시스템 알림</div>
						</div>
						<div>
							<div className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 mb-1">권장 크기</div>
							<div className="text-[13px] text-gray-600 dark:text-gray-400">Small (400px)</div>
						</div>
						<div>
							<div className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 mb-1">주요 액션 수</div>
							<div className="text-[13px] text-gray-600 dark:text-gray-400">1-2개</div>
						</div>
						<div>
							<div className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 mb-1">사용자 집중도</div>
							<div className="text-[13px] text-gray-600 dark:text-gray-400">높음 (빠른 인지)</div>
						</div>
					</div>

          			{/* 하단 - Alert Type 리스트 */}
					<div className="border-t border-gray-100 dark:border-gray-700 pt-5">
						<div className="flex flex-col gap-3">
              				{/* Success */}
							<div className="flex items-center justify-between p-3 px-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
								<div className="flex items-center gap-3">
									<div className="w-8 h-8 rounded-md bg-[#E8F0E3] flex items-center justify-center">
										<CheckCircle2 size={18} color="#495f35" />
									</div>
									<div>
										<div className="text-sm font-semibold text-gray-900 dark:text-gray-50">Success</div>
										<div className="text-xs text-gray-600 dark:text-gray-400">작업 완료, 성공 메시지</div>
									</div>
								</div>
								<button className="bg-[#495f35] text-white text-[13px] font-semibold px-4 py-2 rounded-md border-0 cursor-pointer whitespace-nowrap"
									onClick={() => setOpenModal('success')}>
									보기
								</button>
							</div>

              				{/* Info */}
							<div className="flex items-center justify-between p-3 px-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
								<div className="flex items-center gap-3">
									<div className="w-8 h-8 rounded-md bg-[#EFF6FF] flex items-center justify-center">
										<Info size={18} color={BRAND_PRIMARY} />
									</div>
									<div>
										<div className="text-sm font-semibold text-gray-900 dark:text-gray-50">Info</div>
										<div className="text-xs text-gray-600 dark:text-gray-400">일반 정보, 시스템 안내</div>
									</div>
								</div>
								<button className="bg-[#243c84] text-white text-[13px] font-semibold px-4 py-2 rounded-md border-0 cursor-pointer whitespace-nowrap"
									onClick={() => setOpenModal('info')}>
									보기
								</button>
							</div>

              				{/* Warning */}
							<div className="flex items-center justify-between p-3 px-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
								<div className="flex items-center gap-3">
									<div className="w-8 h-8 rounded-md bg-[#FEF3C7] flex items-center justify-center">
										<AlertTriangle size={18} color="#F59E0B" />
									</div>
									<div>
										<div className="text-sm font-semibold text-gray-900 dark:text-gray-50">Warning</div>
										<div className="text-xs text-gray-600 dark:text-gray-400">주의 필요, 확인 요청</div>
									</div>
								</div>
								<button className="bg-[#F59E0B] text-white text-[13px] font-semibold px-4 py-2 rounded-md border-0 cursor-pointer whitespace-nowrap"
									onClick={() => setOpenModal('warning')}>
									보기
								</button>
							</div>

              				{/* Danger */}
							<div className="flex items-center justify-between p-3 px-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
								<div className="flex items-center gap-3">
									<div className="w-8 h-8 rounded-md bg-[#FEE2E2] flex items-center justify-center">
										<AlertCircle size={18} color="#DC2626" />
									</div>
									<div>
										<div className="text-sm font-semibold text-gray-900 dark:text-gray-50">Danger</div>
										<div className="text-xs text-gray-600 dark:text-gray-400">위험한 작업, 삭제 경고</div>
									</div>
								</div>
								<button className="bg-[#DC2626] text-white text-[13px] font-semibold px-4 py-2 rounded-md border-0 cursor-pointer whitespace-nowrap"
									onClick={() => setOpenModal('danger')}>
									보기
								</button>
							</div>
						</div>
					</div>
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
							<h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Modal Structure</h4>
							<ul className="text-[13px] leading-[1.8] text-gray-600 dark:text-gray-400 pl-5">
								<li>Overlay: rgba(0,0,0,0.5)</li>
								<li>Container: White / 12px radius</li>
								<li>Header: Title + Close button</li>
								<li>Body: Content / Form / Message</li>
								<li>Footer: Action buttons</li>
							</ul>
						</div>
						<div>
							<h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Sizes</h4>
							<ul className="text-[13px] leading-[1.8] text-gray-600 dark:text-gray-400 pl-5">
								<li>Small: 400px width</li>
								<li>Medium: 500px width</li>
								<li>Large: 700px width</li>
								<li>Full Screen: 100% viewport</li>
							</ul>
						</div>
						<div>
							<h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Typography</h4>
							<ul className="text-[13px] leading-[1.8] text-gray-600 dark:text-gray-400 pl-5">
								<li>Title: 18px / Semibold / #111827</li>
								<li>Description: 14px / Regular / #6B7280</li>
								<li>Body Text: 14px / Regular / #374151</li>
							</ul>
						</div>
						<div>
							<h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Alert Colors</h4>
							<ul className="text-[13px] leading-[1.8] text-gray-600 dark:text-gray-400 pl-5">
								<li>Success: #495f35 (Green)</li>
								<li>Info: #243c84 (Navy)</li>
								<li>Warning: #F59E0B (Orange)</li>
								<li>Danger: #DC2626 (Red)</li>
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
						<li><strong>Default Modal:</strong> 간단한 확인, 삭제 확인, 일반 안내</li>
						<li><strong>Centered Modal:</strong> 중요한 결정, 즉각적 응답 필요</li>
						<li><strong>Form Modal:</strong> 데이터 입력, 설정 변경, 프로필 수정</li>
						<li><strong>Full Screen Modal:</strong> 복잡한 워크플로우, 다단계 프로세스</li>
						<li><strong>Alert Modal:</strong> 작업 완료/실패, 시스템 알림, 경고</li>
						<li>Modal은 사용자 흐름을 중단시키므로 꼭 필요한 경우에만 사용</li>
						<li>ESC 키와 Overlay 클릭으로 닫기 가능하도록 구현</li>
						<li>Primary Action은 우측, Secondary Action은 좌측 배치</li>
					</ul>
				</div>
			</div>

      		{/* Modal Implementations */}

      		{/* 1. Default Modal */}
			{openModal === 'default' && (
				<ModalOverlay onClose={closeModal}>
					<div className="bg-white dark:bg-gray-800 rounded-xl w-[500px] max-w-[90vw] max-h-[90vh] overflow-auto">
            			{/* Header */}
						<div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 m-0">
								기본 모달
							</h3>
							<button
								onClick={closeModal}
								className="bg-transparent border-0 cursor-pointer p-1 flex items-center justify-center"
							>
								<X size={20} className="text-gray-600 dark:text-gray-400" />
							</button>
						</div>
            			{/* Body */}
						<div className="p-6">
							<p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed m-0">
								이 작업을 계속 진행하시겠습니까? 이 작업은 되돌릴 수 없습니다.
							</p>
						</div>
            			{/* Footer */}
						<div className="p-5 px-6 border-t border-gray-200 dark:border-gray-700 flex justify-end gap-3">
							<button className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold px-5 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 cursor-pointer"
								onClick={closeModal}>
								취소
							</button>
							<button className="bg-[#243c84] text-white text-sm font-semibold px-5 py-2.5 rounded-lg border-0 cursor-pointer"
								onClick={closeModal}>
								확인
							</button>
						</div>
					</div>
				</ModalOverlay>
			)}

      		{/* 2. Centered Modal */}
			{openModal === 'centered' && (
				<ModalOverlay onClose={closeModal}>
					<div className="bg-white dark:bg-gray-800 rounded-xl w-[400px] max-w-[90vw] text-center">
            			{/* Header */}
						<div className="pt-8 px-6 pb-4">
							<div className="w-12 h-12 rounded-full bg-[#EFF6FF] flex items-center justify-center mx-auto mb-4">
								<Info size={24} color={BRAND_PRIMARY} />
							</div>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 m-0 mb-2">
								중요한 안내
							</h3>
							<p className="text-sm text-gray-600 dark:text-gray-400 leading-normal m-0">
								이 작업은 즉시 실행되며 되돌릴 수 없습니다.
							</p>
						</div>
            			{/* Footer */}
						<div className="pt-4 px-6 pb-8 flex flex-col gap-3">
							<button className="bg-[#243c84] text-white text-sm font-semibold px-5 py-2.5 rounded-lg border-0 cursor-pointer w-full"
								onClick={closeModal}>
								확인했습니다
							</button>
							<button className="bg-transparent text-gray-600 dark:text-gray-400 text-sm font-semibold px-5 py-2.5 rounded-lg border-0 cursor-pointer w-full"
								onClick={closeModal}>
								취소
							</button>
						</div>
					</div>
				</ModalOverlay>
			)}

      		{/* 3. Form Modal */}
			{openModal === 'form' && (
				<ModalOverlay onClose={closeModal}>
					<div className="bg-white dark:bg-gray-800 rounded-xl w-[600px] max-w-[90vw] max-h-[90vh] overflow-auto">
            			{/* Header */}
						<div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 m-0">
								문의하기
							</h3>
							<button className="bg-transparent border-0 cursor-pointer p-1 flex items-center justify-center"
								onClick={closeModal}>
								<X size={20} className="text-gray-600 dark:text-gray-400" />
							</button>
						</div>
            			{/* Body */}
						<div className="p-6">
							<div className="mb-5">
								<label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
									이름
								</label>
								<input className="w-full px-3 py-2.5 text-sm border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 outline-none"
									type="text"
									value={formData.name}
									onChange={(e) => setFormData({ ...formData, name: e.target.value })}									
									placeholder="이름을 입력하세요"/>
							</div>
							<div className="mb-5">
								<label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
									이메일
								</label>
								<input className="w-full px-3 py-2.5 text-sm border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 outline-none"
									type="email"
									value={formData.email}
									onChange={(e) => setFormData({ ...formData, email: e.target.value })}									
									placeholder="email@example.com"/>
							</div>
							<div className="mb-0">
								<label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
									메시지
								</label>
								<textarea className="w-full px-3 py-2.5 text-sm border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 outline-none resize-y"
									value={formData.message}
									onChange={(e) => setFormData({ ...formData, message: e.target.value })}
									rows={4}									
									placeholder="문의 내용을 입력하세요"/>
							</div>
						</div>
            			{/* Footer */}
						<div className="p-5 px-6 border-t border-gray-200 dark:border-gray-700 flex justify-end gap-3">
							<button className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold px-5 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 cursor-pointer"
								onClick={closeModal}>
								취소
							</button>
							<button className="bg-[#243c84] text-white text-sm font-semibold px-5 py-2.5 rounded-lg border-0 cursor-pointer"
								onClick={closeModal}>
								제출
							</button>
						</div>
					</div>
				</ModalOverlay>
			)}

      		{/* 4. Full Screen Modal */}
			{openModal === 'fullscreen' && (
				<div className="fixed inset-0 bg-white dark:bg-gray-900 z-[1000] overflow-auto">
          			{/* Header */}
					<div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between sticky top-0 bg-white dark:bg-gray-900 z-10">
						<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 m-0">
							전체 화면 모달
						</h3>
						<button className="bg-transparent border-0 cursor-pointer p-1 flex items-center justify-center"
							onClick={closeModal}>
							<X size={20} className="text-gray-600 dark:text-gray-400" />
						</button>
					</div>
          			{/* Body */}
					<div className="p-12 max-w-6xl mx-auto">
						<p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
							전체 화면 모달은 복잡한 워크플로우나 다단계 프로세스에 사용됩니다.
						</p>
						<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
							충분한 공간을 활용하여 사용자에게 집중된 경험을 제공합니다.
						</p>
					</div>
				</div>
			)}

      		{/* 5. Success Modal */}
			{openModal === 'success' && (
				<ModalOverlay onClose={closeModal}>
					<div className="bg-white dark:bg-gray-800 rounded-xl w-[400px] max-w-[90vw] text-center">
						<div className="pt-8 px-6">
							<div className="w-12 h-12 rounded-full bg-[#E8F0E3] flex items-center justify-center mx-auto mb-4">
								<CheckCircle2 size={24} color="#495f35" />
							</div>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 m-0 mb-2">
								성공적으로 완료되었습니다
							</h3>
							<p className="text-sm text-gray-600 dark:text-gray-400 leading-normal m-0">
								작업이 성공적으로 처리되었습니다.
							</p>
						</div>
						<div className="pt-0 px-6 pb-8">
							<button className="bg-[#495f35] text-white text-sm font-semibold px-5 py-2.5 rounded-lg border-0 cursor-pointer w-full"
								onClick={closeModal}>
								확인
							</button>
						</div>
					</div>
				</ModalOverlay>
			)}

      		{/* 6. Info Modal */}
			{openModal === 'info' && (
				<ModalOverlay onClose={closeModal}>
					<div className="bg-white dark:bg-gray-800 rounded-xl w-[400px] max-w-[90vw] text-center">
						<div className="pt-8 px-6">
							<div className="w-12 h-12 rounded-full bg-[#EFF6FF] flex items-center justify-center mx-auto mb-4">
								<Info size={24} color={BRAND_PRIMARY} />
							</div>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 m-0 mb-2">
								시스템 안내
							</h3>
							<p className="text-sm text-gray-600 dark:text-gray-400 leading-normal m-0">
								시스템 업데이트가 예정되어 있습니다.
							</p>
						</div>
						<div className="pt-0 px-6 pb-8">
							<button className="bg-[#243c84] text-white text-sm font-semibold px-5 py-2.5 rounded-lg border-0 cursor-pointer w-full"
								onClick={closeModal}>
								확인
							</button>
						</div>
					</div>
				</ModalOverlay>
			)}

      		{/* 7. Warning Modal */}
			{openModal === 'warning' && (
				<ModalOverlay onClose={closeModal}>
					<div className="bg-white dark:bg-gray-800 rounded-xl w-[400px] max-w-[90vw] text-center">
						<div className="pt-8 px-6">
							<div className="w-12 h-12 rounded-full bg-[#FEF3C7] flex items-center justify-center mx-auto mb-4">
								<AlertTriangle size={24} color="#F59E0B" />
							</div>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 m-0 mb-2">
								주의가 필요합니다
							</h3>
							<p className="text-sm text-gray-600 dark:text-gray-400 leading-normal m-0">
								계속 진행하기 전에 확인해주세요.
							</p>
						</div>
						<div className="pt-0 px-6 pb-8">
							<button className="bg-[#F59E0B] text-white text-sm font-semibold px-5 py-2.5 rounded-lg border-0 cursor-pointer w-full"
								onClick={closeModal}>
								확인
							</button>
						</div>
					</div>
				</ModalOverlay>
			)}

      		{/* 8. Danger Modal */}
			{openModal === 'danger' && (
				<ModalOverlay onClose={closeModal}>
					<div className="bg-white dark:bg-gray-800 rounded-xl w-[400px] max-w-[90vw] text-center">
						<div className="pt-8 px-6">
							<div className="w-12 h-12 rounded-full bg-[#FEE2E2] flex items-center justify-center mx-auto mb-4">
								<AlertCircle size={24} color="#DC2626" />
							</div>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 m-0 mb-2">
								경고: 위험한 작업
							</h3>
							<p className="text-sm text-gray-600 dark:text-gray-400 leading-normal m-0">
								이 작업은 되돌릴 수 없습니다.
							</p>
						</div>
						<div className="pt-0 px-6 pb-8 flex gap-3">
							<button className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold px-5 py-2.5 rounded-lg border-0 cursor-pointer flex-1"
								onClick={closeModal}>
								취소
							</button>
							<button className="bg-[#DC2626] text-white text-sm font-semibold px-5 py-2.5 rounded-lg border-0 cursor-pointer flex-1"
								onClick={closeModal}>
								삭제
							</button>
						</div>
					</div>
				</ModalOverlay>
			)}
		</div>
	);
}