"use client"

import { Download } from "lucide-react";

interface FormCardProps {
  	label: string;
  	title: string;
}

function FormCard({ label, title }: FormCardProps) {
  	return (
    	<div className="rounded-lg transition-all duration-200 cursor-pointer p-6 min-h-[80px] flex items-center justify-between border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600">
      		{/* 좌측: 문서 정보 */}
      		<div className="flex items-center gap-4">
        		<div className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#243c84]" />
        		<div>
          			<div className="text-[11px] font-semibold mb-1 uppercase tracking-[0.08em] text-gray-400">
            			{label}
          			</div>
          			<div className="text-[15px] font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            			{title}
          			</div>
        		</div>
      		</div>

      		{/* 우측: 다운로드 버튼 */}
      		<button className="h-9 px-4 rounded-lg flex items-center gap-2 transition-all duration-200 bg-[#243c84] hover:bg-[#1e3270] text-white text-[13px] font-semibold border-none flex-shrink-0"
        		onClick={(e) => {
          		e.stopPropagation();
          		// 다운로드 로직
        		}}>
        		<Download size={14} strokeWidth={2.5} />
        		<span>다운로드</span>
      		</button>
    	</div>
  	);
}

export function FormDownloadSection() {
	const forms = [
    	{
      		label: 'AGREEMENT',
      		title: '태양광 발전 개발 협약서 서식'
    	},
    	{
      		label: 'CONTRACT',
      		title: '부동산 임대차계약서(지붕태양광) 서식'
    	},
    	{
      		label: 'APPLICATION',
      		title: '토지 및 건물 사용승낙서 서식'
    	},
    	{
      		label: 'AGREEMENT',
      		title: '발전SPC 주주협약서 서식'
    	}
  	];
	
	return (
		<div className="space-y-3">
        	{forms.map((form, index) => (
          		<FormCard
            		key={index}
            		label={form.label}
            		title={form.title}
          		/>
        	))}
      	</div>
	);
}