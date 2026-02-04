"use client"

import { LayoutDashboard, Settings, Users, FileText, BarChart3, Bell, Calendar, Package, Zap, Clock, AlertCircle } from 'lucide-react';
import { useState } from 'react';

const BRAND_PRIMARY = '#243c84';
const BRAND_ACCENT = '#d8442c';

export function TabsSection() {

	const [underlineTab, setUnderlineTab] = useState('overview');
	const [pillTab, setPillTab] = useState('all');
	const [segmentedTab, setSegmentedTab] = useState('week');
	const [iconTab, setIconTab] = useState('dashboard');
	const [verticalTab, setVerticalTab] = useState('general');
	const [statusTab, setStatusTab] = useState('active');

	return(
		<div>
			{/* Underline Tabs */}
			<div className="mb-12">
				<div className="flex items-center gap-2 mb-4">
					<div className="w-1.5 h-1.5 rounded-full bg-[#243c84]" />
					<h2 className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-50">
						언더라인 탭
					</h2>
				</div>
				
				<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] overflow-hidden">
					<div className="flex border-b border-gray-200 dark:border-gray-700">
						{[
							{ id: 'overview', label: '개요' },
							{ id: 'analytics', label: '분석' },
							{ id: 'reports', label: '보고서' },
							{ id: 'settings', label: '설정' }
						].map((tab) => (
							<button
								key={tab.id}
								onClick={() => setUnderlineTab(tab.id)}
								className={`flex-1 py-3.5 px-5 border-0 bg-transparent text-sm cursor-pointer border-b-2 transition-all duration-200 ${
									underlineTab === tab.id
									? 'font-semibold text-[#243c84] border-[#243c84]'
									: 'font-normal text-gray-600 dark:text-gray-400 border-transparent'
								}`}
							>
								{tab.label}
							</button>
							))}
					</div>
					
					<div className="p-6">
						<div className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-50">
							{underlineTab === 'overview' && '개요 콘텐츠'}
							{underlineTab === 'analytics' && '분석 대시보드'}
							{underlineTab === 'reports' && '보고서 목록'}
							{underlineTab === 'settings' && '설정 페이지'}
						</div>
						<div className="text-[13px] text-gray-600 dark:text-gray-400">
							선택된 탭의 내용이 표시됩니다.
						</div>
					</div>
				</div>
			</div>

      {/* Pill Tabs with Badge */}
			<div className="mb-12">
				<div className="flex items-center gap-2 mb-4">
					<div className="w-1.5 h-1.5 rounded-full bg-[#243c84]" />
					<h2 className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-50">
						배지 포함 탭
					</h2>
				</div>
				
				<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-5">
					<div className="flex gap-2 flex-wrap mb-5">
						{[
							{ id: 'all', label: '전체', count: 48 },
							{ id: 'active', label: '활성', count: 12 },
							{ id: 'pending', label: '대기', count: 8 },
							{ id: 'completed', label: '완료', count: 28 }
						].map((tab) => (
							<button
								key={tab.id}
								onClick={() => setPillTab(tab.id)}
								className={`py-2 px-4 border-0 text-sm cursor-pointer rounded-lg flex items-center gap-2 transition-all duration-200 ${
									pillTab === tab.id
									? 'bg-indigo-100 dark:bg-slate-900 font-semibold text-[#243c84] dark:text-blue-300'
									: 'bg-gray-100 dark:bg-gray-700 font-normal text-gray-600 dark:text-gray-400'
								}`}
							>
								{tab.label}
								<span className={`py-0.5 px-2 text-xs font-semibold rounded-md ${
									pillTab === tab.id
									? 'bg-[#5b6fb5] dark:bg-[#3b4d7a] text-white'
									: 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
								}`}>
								{tab.count}
							</span>
						</button>
						))}
					</div>
					
					<div className="text-[13px] text-gray-600 dark:text-gray-400 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
						{pillTab === 'all' && '전체 항목 48개를 표시합니다.'}
						{pillTab === 'active' && '활성 상태의 항목 12개를 표시합니다.'}
						{pillTab === 'pending' && '대기 중인 항목 8개를 표시합니다.'}
						{pillTab === 'completed' && '완료된 항목 28개를 표시합니다.'}
					</div>
				</div>
			</div>

      {/* Segmented Control */}
			<div className="mb-12">
				<div className="flex items-center gap-2 mb-4">
					<div className="w-1.5 h-1.5 rounded-full bg-[#243c84]" />
					<h2 className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-50">
						세그먼트 컨트롤
					</h2>
				</div>
				
				<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-5">
					<div className="inline-flex p-1 bg-gray-100 dark:bg-gray-900 rounded-lg mb-5">
						{[
							{ id: 'day', label: '일간' },
							{ id: 'week', label: '주간' },
							{ id: 'month', label: '월간' },
							{ id: 'year', label: '연간' }
						].map((tab) => (
							<button
								key={tab.id}
								onClick={() => setSegmentedTab(tab.id)}
								className={`py-2 px-5 border-0 text-sm cursor-pointer rounded-md transition-all duration-200 ${
									segmentedTab === tab.id
									? 'bg-white dark:bg-gray-700 font-semibold text-gray-900 dark:text-gray-50 shadow-sm dark:shadow-md'
									: 'bg-transparent font-normal text-gray-600 dark:text-gray-400 shadow-none'
								}`}
							>
								{tab.label}
							</button>
							))}
					</div>
					
					<div className="text-[13px] text-gray-600 dark:text-gray-400 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
						{segmentedTab === 'day' && '일간 통계 데이터를 표시합니다.'}
						{segmentedTab === 'week' && '주간 통계 데이터를 표시합니다.'}
						{segmentedTab === 'month' && '월간 통계 데이터를 표시합니다.'}
						{segmentedTab === 'year' && '연간 통계 데이터를 표시합니다.'}
					</div>
				</div>
			</div>

      {/* Icon Tabs */}
			<div className="mb-12">
				<div className="flex items-center gap-2 mb-4">
					<div className="w-1.5 h-1.5 rounded-full bg-[#243c84]" />
					<h2 className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-50">
						아이콘 탭
					</h2>
				</div>
				
				<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] overflow-hidden">
					<div className="grid grid-cols-4 border-b border-gray-200 dark:border-gray-700">
						{[
							{ id: 'dashboard', label: '대시보드', icon: LayoutDashboard },
							{ id: 'analytics', label: '분석', icon: BarChart3 },
							{ id: 'users', label: '사용자', icon: Users },
							{ id: 'settings', label: '설정', icon: Settings }
						].map((tab) => {
							const Icon = tab.icon;
							return (
								<button
									key={tab.id}
									onClick={() => setIconTab(tab.id)}
									className={`p-4 border-0 bg-transparent flex flex-col items-center gap-2 cursor-pointer border-b-2 transition-all duration-200 ${
										iconTab === tab.id
										? 'border-[#243c84]'
										: 'border-transparent'
									}`}
								>
									<Icon 
										size={20} 
										className={iconTab === tab.id ? 'text-[#243c84]' : 'text-gray-600 dark:text-gray-400'}
									/>
									<span className={`text-[13px] ${
										iconTab === tab.id
										? 'font-semibold text-[#243c84]'
										: 'font-normal text-gray-600 dark:text-gray-400'
									}`}>
									{tab.label}
								</span>
							</button>
							);
						})}
					</div>
					
					<div className="p-6">
						<div className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-50">
							{iconTab === 'dashboard' && '대시보드 페이지'}
							{iconTab === 'analytics' && '분석 리포트'}
							{iconTab === 'users' && '사용자 관리'}
							{iconTab === 'settings' && '시스템 설정'}
						</div>
						<div className="text-[13px] text-gray-600 dark:text-gray-400">
							아이콘과 함께 표시되는 탭 내용입니다.
						</div>
					</div>
				</div>
			</div>

      {/* Vertical Tabs */}
			<div className="mb-12">
				<div className="flex items-center gap-2 mb-4">
					<div className="w-1.5 h-1.5 rounded-full bg-[#243c84]" />
					<h2 className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-50">
						세로 레이아웃 탭
					</h2>
				</div>
				
				<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] overflow-hidden flex min-h-[320px]">
					<div className="w-[220px] border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-3">
						{[
							{ id: 'general', label: '일반 설정', icon: Settings },
							{ id: 'notifications', label: '알림', icon: Bell },
							{ id: 'team', label: '팀 관리', icon: Users },
							{ id: 'billing', label: '결제', icon: Package },
							{ id: 'schedule', label: '일정', icon: Calendar },
							{ id: 'documents', label: '문서', icon: FileText }
						].map((tab) => {
							const Icon = tab.icon;
							return (
								<button
									key={tab.id}
									onClick={() => setVerticalTab(tab.id)}
									className={`w-full py-3 px-4 border-0 text-sm cursor-pointer rounded-lg border-l-[3px] flex items-center gap-3 transition-all duration-200 text-left mb-1 ${
										verticalTab === tab.id
										? 'bg-white dark:bg-gray-800 font-semibold text-[#243c84] border-[#243c84]'
										: 'bg-transparent font-normal text-gray-600 dark:text-gray-400 border-transparent'
									}`}
								>
									<Icon 
										size={18} 
										className={verticalTab === tab.id ? 'text-[#243c84]' : 'text-gray-600 dark:text-gray-400'}
									/>
									{tab.label}
								</button>
								);
						})}
					</div>
					
					<div className="flex-1 p-6">
						<div className="text-base font-semibold mb-3 text-gray-900 dark:text-gray-50">
							{verticalTab === 'general' && '일반 설정'}
							{verticalTab === 'notifications' && '알림 설정'}
							{verticalTab === 'team' && '팀 관리'}
							{verticalTab === 'billing' && '결제 정보'}
							{verticalTab === 'schedule' && '일정 관리'}
							{verticalTab === 'documents' && '문서 관리'}
						</div>
						<div className="text-sm mb-4 text-gray-600 dark:text-gray-400">
							선택한 설정 페이지의 내용이 표시됩니다.
						</div>
						
						<div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
							<div className="text-[13px] text-gray-600 dark:text-gray-400">
								설정 내용 영역
							</div>
						</div>
					</div>
				</div>
			</div>

      {/* Status Tabs */}
			<div className="mb-12">
				<div className="flex items-center gap-2 mb-4">
					<div className="w-1.5 h-1.5 rounded-full bg-[#243c84]" />
					<h2 className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-50">
						상태 표시 탭
					</h2>
				</div>
				
				<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-5">
					<div className="flex gap-2 flex-wrap mb-5">
						{[
							{ id: 'active', label: '활성', icon: Zap, color: '#10B981' },
							{ id: 'pending', label: '보류', icon: Clock, color: '#F59E0B' },
							{ id: 'error', label: '오류', icon: AlertCircle, color: BRAND_ACCENT }
						].map((tab) => {
							const Icon = tab.icon;
							return (
								<button
									key={tab.id}
									onClick={() => setStatusTab(tab.id)}
									className={`py-2.5 px-4.5 text-sm cursor-pointer rounded-lg flex items-center gap-2 transition-all duration-200 ${
										statusTab === tab.id
										? 'font-semibold'
										: 'font-normal bg-transparent text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700'
									}`}
									style={statusTab === tab.id ? {
										border: `1px solid ${tab.color}`,
										backgroundColor: `${tab.color}${tab.id === 'active' ? '20' : tab.id === 'pending' ? '20' : '20'}`,
										color: tab.color
									} : {}}
								>
									<Icon 
										size={16} 
										style={{ color: tab.color }}
									/>
									{tab.label}
								</button>
								);
						})}
					</div>
					
					<div className="text-[13px] text-gray-600 dark:text-gray-400 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
						{statusTab === 'active' && '활성 상태의 서비스 목록을 표시합니다.'}
						{statusTab === 'pending' && '보류 중인 작업 목록을 표시합니다.'}
						{statusTab === 'error' && '오류가 발생한 항목 목록을 표시합니다.'}
					</div>
				</div>
			</div>
		</div>
		);
}