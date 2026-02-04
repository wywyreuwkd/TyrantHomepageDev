"use client"

import { useState } from "react";

export function TooltipsSection() {
	const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

	return (
		<div>
      		{/* Default Tooltip */}
			<div className="mb-6 p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px]">
				<h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 mb-4">
					기본 툴팁
				</h3>
				<div className="flex items-center gap-4">
					<div className="relative inline-block"
						onMouseEnter={() => setActiveTooltip('default')}
						onMouseLeave={() => setActiveTooltip(null)}>
						<button className="py-2.5 px-5 bg-[#243c84] text-white border-0 rounded-md text-sm font-medium cursor-pointer">
							마우스를 올려보세요
						</button>
						{activeTooltip === 'default' && (
							<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 py-2 px-3 bg-gray-900 rounded-md text-[13px] text-white whitespace-nowrap z-50">
								기본 툴팁입니다
								<div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-900" />
							</div>
						)}
					</div>
				</div>
			</div>

      		{/* Tooltip Styles */}
			<div className="mb-6 p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px]">
				<h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 mb-4">
					툴팁 스타일
				</h3>
				<div className="flex items-center gap-4">
          			{/* Light Tooltip */}
					<div className="relative inline-block"
						onMouseEnter={() => setActiveTooltip('light')}
						onMouseLeave={() => setActiveTooltip(null)}>
						<button className="py-2.5 px-5 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-50 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium cursor-pointer">
							라이트 툴팁
						</button>
						{activeTooltip === 'light' && (
							<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 py-2 px-3 bg-white border border-gray-300 rounded-md text-[13px] text-gray-900 whitespace-nowrap z-50 shadow-md">
								밝은 배경 툴팁
								<div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white" />
							</div>
						)}
					</div>

          			{/* Dark Tooltip */}
					<div className="relative inline-block"
						onMouseEnter={() => setActiveTooltip('dark')}
						onMouseLeave={() => setActiveTooltip(null)}>
						<button className="py-2.5 px-5 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-50 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium cursor-pointer">
							다크 툴팁
						</button>
						{activeTooltip === 'dark' && (
							<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 py-2 px-3 bg-gray-900 rounded-md text-[13px] text-white whitespace-nowrap z-50">
								어두운 배경 툴팁
								<div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-900" />
							</div>
						)}
					</div>
				</div>
			</div>

      		{/* Tooltip Placement */}
			<div className="p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px]">
				<h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 mb-4">
					툴팁 위치
				</h3>
				<div className="flex items-center gap-4 flex-wrap">
          			{/* Top */}
					<div className="relative inline-block"
						onMouseEnter={() => setActiveTooltip('top')}
						onMouseLeave={() => setActiveTooltip(null)}>
						<button className="py-2.5 px-5 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-50 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium cursor-pointer">
							위쪽
						</button>
						{activeTooltip === 'top' && (
							<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 py-2 px-3 bg-gray-900 rounded-md text-[13px] text-white whitespace-nowrap z-50">
								위쪽 툴팁
								<div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-900" />
							</div>
						)}
					</div>

          			{/* Right */}
					<div className="relative inline-block"
						onMouseEnter={() => setActiveTooltip('right')}
						onMouseLeave={() => setActiveTooltip(null)}>
						<button className="py-2.5 px-5 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-50 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium cursor-pointer">
							오른쪽
						</button>
						{activeTooltip === 'right' && (
							<div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 py-2 px-3 bg-gray-900 rounded-md text-[13px] text-white whitespace-nowrap z-50">
								오른쪽 툴팁
								<div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[6px] border-r-gray-900" />
							</div>
						)}
					</div>

          			{/* Bottom */}
					<div className="relative inline-block"
						onMouseEnter={() => setActiveTooltip('bottom')}
						onMouseLeave={() => setActiveTooltip(null)}>
						<button className="py-2.5 px-5 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-50 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium cursor-pointer">
							아래쪽
						</button>
						{activeTooltip === 'bottom' && (
							<div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-2 px-3 bg-gray-900 rounded-md text-[13px] text-white whitespace-nowrap z-50">
								아래쪽 툴팁
								<div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-gray-900" />
							</div>
							)}
					</div>

          			{/* Left */}
					<div className="relative inline-block"
						onMouseEnter={() => setActiveTooltip('left')}
						onMouseLeave={() => setActiveTooltip(null)}>
						<button className="py-2.5 px-5 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-50 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium cursor-pointer">
							왼쪽
						</button>
						{activeTooltip === 'left' && (
							<div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 py-2 px-3 bg-gray-900 rounded-md text-[13px] text-white whitespace-nowrap z-50">
								왼쪽 툴팁
								<div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-900" />
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}