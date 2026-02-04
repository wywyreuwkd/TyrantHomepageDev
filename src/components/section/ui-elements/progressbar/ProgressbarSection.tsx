"use client"

import { Home, ChevronRight, CheckCircle2, Upload, Download, Server, Zap, Package } from 'lucide-react';
import { useState, useEffect } from 'react';

const BRAND_PRIMARY = '#243c84';
const BRAND_ACCENT = '#d8442c';

export function ProgressbarSection() {
	const [progress1, setProgress1] = useState(0);
	const [progress2, setProgress2] = useState(45);
	const [stepProgress, setStepProgress] = useState(2);

  	// Animated progress for demo
	useEffect(() => {
		const interval = setInterval(() => {
			setProgress1((prev) => (prev >= 100 ? 0 : prev + 1));
		}, 80);
		return () => clearInterval(interval);
	}, []);

	return (
		<div>
			{/* Basic Progress Bars */}
			<div className="mb-12">
				<div className="flex items-center gap-2 mb-4">
					<div className="w-1.5 h-1.5 rounded-full bg-[#243c84]" />
					<h2 className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-50">
						기본 프로그레스 바
					</h2>
				</div>

				<div className="grid gap-6">
          			{/* Animated Progress - Badge Style */}
					<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-5">
						<div className="flex items-center justify-between mb-3">
							<div className="flex items-center gap-2">
								<Zap size={16} style={{ color: BRAND_PRIMARY }} />
								<span className="text-sm font-medium text-gray-900 dark:text-gray-50">
									자동 진행 중
								</span>
							</div>
							<span className="text-[13px] font-medium text-gray-600 dark:text-gray-400">
								{progress1}%
							</span>
						</div>
						<div className="w-full h-2 bg-indigo-100 dark:bg-slate-900 rounded overflow-hidden">
							<div className="h-full bg-[#5b6fb5] dark:bg-[#3b4d7a] rounded transition-all duration-300"
								style={{ width: `${progress1}%` }}/>
						</div>
					</div>

          			{/* Static Progress - Badge Style */}
					<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-5">
						<div className="flex items-center justify-between mb-3">
							<span className="text-sm font-medium text-gray-900 dark:text-gray-50">
								프로젝트 완료율
							</span>
							<span className="text-[13px] font-medium text-[#5b6fb5]">
								75%
							</span>
						</div>
						<div className="w-full h-2 bg-indigo-100 dark:bg-slate-900 rounded overflow-hidden">
							<div className="w-[75%] h-full bg-[#5b6fb5] dark:bg-[#3b4d7a] rounded" />
						</div>
					</div>

          			{/* Completed Progress - Green Badge Style */}
					<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-5">
						<div className="flex items-center justify-between mb-3">
							<div className="flex items-center gap-2">
								<CheckCircle2 size={16} style={{ color: '#10B981' }} />
								<span className="text-sm font-medium text-gray-900 dark:text-gray-50">
									빌드 완료
								</span>
							</div>
							<span className="text-[13px] font-medium text-green-500">
								100%
							</span>
						</div>
						<div className="w-full h-2 bg-green-100 dark:bg-green-950 rounded overflow-hidden">
							<div className="w-full h-full bg-green-600 dark:bg-green-500 rounded" />
						</div>
					</div>
				</div>
			</div>

      		{/* File Upload Progress */}
			<div className="mb-12">
				<div className="flex items-center gap-2 mb-4">
					<div className="w-1.5 h-1.5 rounded-full bg-[#243c84]" />
					<h2 className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-50">
						파일 업로드 진행
					</h2>
				</div>

				<div className="grid gap-6">
          			{/* Uploading - Badge Style */}
					<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-5">
						<div className="flex items-start gap-3 mb-3">
							<div className="w-10 h-10 flex items-center justify-center bg-indigo-100 dark:bg-slate-900 rounded-lg">
								<Upload size={18} className="text-[#243c84] dark:text-[#5b6fb5]" />
							</div>
							<div className="flex-1 min-w-0">
								<div className="flex items-center justify-between mb-1">
									<span className="text-sm font-medium text-gray-900 dark:text-gray-50">
										project-data.zip
									</span>
									<span className="text-[13px] text-gray-600 dark:text-gray-400">
										{progress2}%
									</span>
								</div>
								<div className="flex items-center gap-2 mb-3">
									<span className="text-xs text-gray-600 dark:text-gray-400">
										4.5 MB of 10 MB
									</span>
									<span className="text-xs text-gray-400 dark:text-gray-500">
										•
									</span>
									<span className="text-xs text-gray-600 dark:text-gray-400">
										30초 남음
									</span>
								</div>
								<div className="w-full h-1.5 bg-indigo-100 dark:bg-slate-900 rounded overflow-hidden">
									<div className="h-full bg-[#5b6fb5] dark:bg-[#3b4d7a] rounded"
										style={{ width: `${progress2}%` }}/>
								</div>
							</div>
						</div>
					</div>

          			{/* Upload Complete */}
					<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-5">
						<div className="flex items-start gap-3">
							<div className="w-10 h-10 flex items-center justify-center bg-green-100 dark:bg-green-950 rounded-lg">
								<CheckCircle2 size={18} style={{ color: '#10B981' }} />
							</div>
							<div className="flex-1 min-w-0">
								<div className="flex items-center justify-between mb-1">
									<span className="text-sm font-medium text-gray-900 dark:text-gray-50">
										documents.pdf
									</span>
									<span className="text-[13px] font-medium text-green-500">
										완료
									</span>
								</div>
								<span className="text-xs text-gray-600 dark:text-gray-400">
									2.4 MB • 방금 전
								</span>
							</div>
						</div>
					</div>

          			{/* Upload Failed - Red Badge Style */}
					<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-5">
						<div className="flex items-start gap-3">
							<div className="w-10 h-10 flex items-center justify-center bg-red-100 dark:bg-red-950 rounded-lg">
								<Upload size={18} style={{ color: BRAND_ACCENT }} />
							</div>
							<div className="flex-1 min-w-0">
								<div className="flex items-center justify-between mb-1">
									<span className="text-sm font-medium text-gray-900 dark:text-gray-50">
										large-file.mp4
									</span>
									<button className="py-1 px-2.5 text-xs font-medium text-[#d8442c] bg-transparent border border-[#d8442c] rounded cursor-pointer">
										재시도
									</button>
								</div>
								<span className="text-xs text-[#d8442c]">
									업로드 실패 • 네트워크 오류
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

      		{/* Step Progress */}
			<div className="mb-12">
				<div className="flex items-center gap-2 mb-4">
					<div className="w-1.5 h-1.5 rounded-full bg-[#243c84]" />
					<h2 className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-50">
						단계별 진행
					</h2>
				</div>

				<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-6">
					<div className="flex items-center justify-between mb-4">
						<span className="text-sm font-medium text-gray-900 dark:text-gray-50">
							프로젝트 설정
						</span>
						<span className="text-[13px] font-medium text-gray-600 dark:text-gray-400">
							{stepProgress} / 4 단계
						</span>
					</div>

					<div className="flex gap-2 mb-4">
						{[1, 2, 3, 4].map((step) => (
							<div
								key={step}
								className={`flex-1 h-1.5 rounded ${
									step <= stepProgress 
									? 'bg-[#5b6fb5] dark:bg-[#3b4d7a]' 
									: 'bg-indigo-100 dark:bg-slate-900'
								}`}
								style={{ opacity: step < stepProgress ? 1 : step === stepProgress ? 0.8 : 1 }}/>
						))}
					</div>

					<div className="flex gap-2">
						<button className={`py-2 px-4 text-[13px] font-medium text-gray-900 dark:text-gray-50 bg-gray-100 dark:bg-gray-700 border-0 rounded-md ${stepProgress === 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
							onClick={() => setStepProgress(Math.max(1, stepProgress - 1))}
							disabled={stepProgress === 1}>
							이전
						</button>
						<button className={`py-2 px-4 text-[13px] font-medium text-white border-0 rounded-md ${stepProgress === 4 ? 'bg-green-500 cursor-not-allowed opacity-80' : 'bg-[#243c84] cursor-pointer'}`}
							onClick={() => setStepProgress(Math.min(4, stepProgress + 1))}
							disabled={stepProgress === 4}>
							{stepProgress === 4 ? '완료' : '다음'}
						</button>
					</div>
				</div>
			</div>

      		{/* Status & Usage Progress */}
			<div className="mb-12">
				<div className="flex items-center gap-2 mb-4">
					<div className="w-1.5 h-1.5 rounded-full bg-[#243c84]" />
					<h2 className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-50">
						상태 및 사용량
					</h2>
				</div>

				<div className="grid gap-6">
          			{/* Storage Usage - Normal - Badge Style */}
					<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-5">
						<div className="flex items-center justify-between mb-3">
							<div className="flex items-center gap-2">
								<Server size={16} style={{ color: BRAND_PRIMARY }} />
								<span className="text-sm font-medium text-gray-900 dark:text-gray-50">
									스토리지 사용량
								</span>
							</div>
							<span className="text-[13px] font-medium text-gray-600 dark:text-gray-400">
								45.2 GB / 100 GB
							</span>
						</div>
						<div className="w-full h-2 bg-indigo-100 dark:bg-slate-900 rounded overflow-hidden">
							<div className="w-[45%] h-full bg-[#5b6fb5] dark:bg-[#3b4d7a] rounded" />
						</div>
						<span className="text-xs mt-2 block text-gray-600 dark:text-gray-400">
							54.8 GB 남음
						</span>
					</div>

		          	{/* API Usage - Warning - Orange Badge Style */}
					<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-5">
						<div className="flex items-center justify-between mb-3">
							<div className="flex items-center gap-2">
								<Package size={16} style={{ color: '#F59E0B' }} />
								<span className="text-sm font-medium text-gray-900 dark:text-gray-50">
									API 호출 한도
								</span>
							</div>
							<span className="text-[13px] font-medium text-amber-500">
								8,500 / 10,000
							</span>
						</div>
						<div className="w-full h-2 bg-amber-100 dark:bg-amber-950 rounded overflow-hidden">
							<div className="w-[85%] h-full bg-amber-500 dark:bg-amber-400 rounded" />
						</div>
						<span className="text-xs mt-2 block text-amber-500">
							85% 사용됨 • 1,500회 남음
						</span>
					</div>

          			{/* Bandwidth - Critical - Red Badge Style */}
					<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-5">
						<div className="flex items-center justify-between mb-3">
							<div className="flex items-center gap-2">
								<Download size={16} style={{ color: BRAND_ACCENT }} />
								<span className="text-sm font-medium text-gray-900 dark:text-gray-50">
									대역폭 사용량
								</span>
							</div>
							<span className="text-[13px] font-medium text-[#d8442c]">
								95.8 GB / 100 GB
							</span>
						</div>
						<div className="w-full h-2 bg-red-100 dark:bg-red-950 rounded overflow-hidden">
							<div className="w-[96%] h-full bg-[#d8442c] dark:bg-red-400 rounded" />
						</div>
						<span className="text-xs mt-2 block text-[#d8442c]">
							96% 사용됨 • 곧 한도 초과
						</span>
					</div>
				</div>
			</div>

      		{/* Multiple Progress Bars */}
			<div className="mb-12">
				<div className="flex items-center gap-2 mb-4">
					<div className="w-1.5 h-1.5 rounded-full bg-[#243c84]" />
					<h2 className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-50">
						프로젝트 현황
					</h2>
				</div>

				<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-6">
					<div className="space-y-6">
						{[
							{ label: '디자인', value: 90, bgClass: 'bg-green-100 dark:bg-green-950', barClass: 'bg-green-600 dark:bg-green-500', textClass: 'text-green-600 dark:text-green-500' },
							{ label: '개발', value: 65, bgClass: 'bg-indigo-100 dark:bg-slate-900', barClass: 'bg-[#5b6fb5] dark:bg-[#3b4d7a]', textClass: 'text-[#5b6fb5] dark:text-[#3b4d7a]' },
							{ label: '테스트', value: 40, bgClass: 'bg-amber-100 dark:bg-amber-950', barClass: 'bg-amber-500 dark:bg-amber-400', textClass: 'text-amber-500 dark:text-amber-400' },
							{ label: '배포', value: 10, bgClass: 'bg-gray-100 dark:bg-gray-700', barClass: 'bg-gray-600 dark:bg-gray-400', textClass: 'text-gray-600 dark:text-gray-400' }
						].map((item) => (
							<div key={item.label}>
								<div className="flex items-center justify-between mb-2">
									<span className="text-[13px] font-medium text-gray-900 dark:text-gray-50">
										{item.label}
									</span>
									<span className={`text-[13px] font-medium ${item.textClass}`}>
										{item.value}%
									</span>
								</div>
								<div className={`w-full h-1.5 ${item.bgClass} rounded overflow-hidden`}>
									<div
										className={`h-full ${item.barClass} rounded`}
										style={{ width: `${item.value}%` }}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}