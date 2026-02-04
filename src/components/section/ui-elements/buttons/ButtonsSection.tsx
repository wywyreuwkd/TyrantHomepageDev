"use client"

import Link from "next/link";
import { Plus, Save, X, Trash2, Download, Upload, Search, Filter, RefreshCw, Edit, Mail, Bell, Settings, ArrowRight, Check, Copy, ExternalLink } from "lucide-react";
import { useState } from "react";

interface ButtonsPageProps {
 	onMenuClick: () => void;
  	onNavigate?: (page: string) => void;
}

export function ButtonsSection() {
	
	const [copied, setCopied] = useState(false);
	
	return (
		<div>
			{/* Primary Actions */}
      		<div className="mb-12">
        		<h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          			Primary Actions
        		</h2>
        		<p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          			주요 작업을 위한 강조 버튼
        		</p>
        
        		<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          			<div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            			<h3 className="text-[14px] font-semibold mb-4 text-gray-600 dark:text-gray-50">
              				Default State
            			</h3>
            			<div className="flex flex-wrap items-center gap-3">
              				<button className="h-10 px-5 bg-[#243c84] hover:bg-[#1d3069] text-white text-[14px] font-semibold rounded-md border-0 cursor-pointer shadow-sm hover:shadow-md transition-all">
                				저장하기
              				</button>
              
              				<button className="h-10 px-5 bg-[#243c84] hover:bg-[#1d3069] text-white text-[14px] font-semibold rounded-md border-0 cursor-pointer shadow-sm hover:shadow-md transition-all flex items-center gap-2">
                				<Plus size={16} />
                				새로 만들기
              				</button>

              				<button className="h-10 px-5 bg-[#243c84] hover:bg-[#1d3069] text-white text-[14px] font-semibold rounded-md border-0 cursor-pointer shadow-sm hover:shadow-md transition-all flex items-center gap-2">
                				<Check size={16} />
                				승인하기
              				</button>
            			</div>
          			</div>

          			<div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            			<h3 className="text-[14px] font-semibold mb-4 text-gray-600 dark:text-gray-50">
              				Disabled State
            			</h3>
            			<div className="flex flex-wrap items-center gap-3">
              				<button disabled className="h-10 px-5 bg-slate-300 text-white text-[14px] font-semibold rounded-md border-0 cursor-not-allowed opacity-60">
                				저장하기
              				</button>
              
              				<button disabled className="h-10 px-5 bg-slate-300 text-white text-[14px] font-semibold rounded-md border-0 cursor-not-allowed opacity-60 flex items-center gap-2">
                				<Save size={16} />
                				저장 완료
              				</button>
            			</div>
          			</div>
        		</div>
      		</div>

      		{/* Secondary Actions */}
      		<div className="mb-12">
        		<h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          			Secondary Actions
        		</h2>
        		<p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          			보조 작업 및 중립적인 액션
        		</p>
        
        		<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          			<div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            			<h3 className="text-[14px] font-semibold mb-4 text-gray-600 dark:text-gray-50">
              				Outlined Buttons
            			</h3>
            			<div className="flex flex-wrap items-center gap-3">
              				<button className="h-10 px-5 bg-transparent hover:bg-[#243c84] text-[#243c84] hover:text-white text-[14px] font-semibold rounded-md border-[1.5px] border-[#243c84] cursor-pointer transition-all">
                				취소
              				</button>
              
              				<button className="h-10 px-5 bg-transparent hover:bg-[#243c84] text-[#243c84] hover:text-white text-[14px] font-semibold rounded-md border-[1.5px] border-[#243c84] cursor-pointer transition-all flex items-center gap-2">
                				<Download size={16} />
                				다운로드
              				</button>

              				<button className="h-10 px-5 bg-transparent hover:bg-[#243c84] text-[#243c84] hover:text-white text-[14px] font-semibold rounded-md border-[1.5px] border-[#243c84] cursor-pointer transition-all flex items-center gap-2">
                				<Upload size={16} />
                				업로드
              				</button>
            			</div>
          			</div>

          			<div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            			<h3 className="text-[14px] font-semibold mb-4 text-gray-600 dark:text-gray-50">
              				Neutral Buttons
            			</h3>
            			<div className="flex flex-wrap items-center gap-3">
              				<button className="h-10 px-5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-[14px] font-semibold rounded-md border border-slate-200 hover:border-slate-300 cursor-pointer transition-all">
                				취소
              				</button>
              
              				<button className="h-10 px-5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-[14px] font-semibold rounded-md border border-slate-200 hover:border-slate-300 cursor-pointer transition-all flex items-center gap-2">
                				<RefreshCw size={16} />
                				새로고침
              				</button>

              				<button className="h-10 px-5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-[14px] font-semibold rounded-md border border-slate-200 hover:border-slate-300 cursor-pointer transition-all flex items-center gap-2">
                				<Edit size={16} />
                				수정
              				</button>
            			</div>
          			</div>
        		</div>
      		</div>

      		{/* Destructive Actions */}
      		<div className="mb-12">
        		<h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          			Destructive Actions
        		</h2>
        		<p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          			삭제 및 주의가 필요한 작업
        		</p>
        
        		<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          			<div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            			<h3 className="text-[14px] font-semibold mb-4 text-gray-600 dark:text-gray-50">
              				Danger Buttons
            			</h3>
            			<div className="flex flex-wrap items-center gap-3">
              				<button className="h-10 px-5 bg-[#d8442c] hover:bg-[#b93824] text-white text-[14px] font-semibold rounded-md border-0 cursor-pointer shadow-sm hover:shadow-md transition-all flex items-center gap-2">
                				<Trash2 size={16} />
                				삭제
              				</button>
              
              				<button className="h-10 px-5 bg-transparent hover:bg-[#d8442c] text-[#d8442c] hover:text-white text-[14px] font-semibold rounded-md border-[1.5px] border-[#d8442c] cursor-pointer transition-all flex items-center gap-2">
                				<X size={16} />
                				거부	
              				</button>

              				<button disabled className="h-10 px-5 bg-red-300 text-white text-[14px] font-semibold rounded-md border-0 cursor-not-allowed opacity-60 flex items-center gap-2">
                				<Trash2 size={16} />
                				삭제 불가
              				</button>
            			</div>
          			</div>
        		</div>
      		</div>

      		{/* Icon Buttons */}
      		<div className="mb-12">
        		<h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          			Icon Buttons
        		</h2>
        		<p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          			아이콘만 있는 컴팩트한 버튼
        		</p>
        
        		<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          			<div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            			<h3 className="text-[14px] font-semibold mb-4 text-gray-600 dark:text-gray-50">
              				Filled Icons
            			</h3>
            			<div className="flex flex-wrap items-center gap-3">
              				<button className="w-10 h-10 p-0 bg-[#243c84] hover:bg-[#1d3069] text-white rounded-md border-0 cursor-pointer shadow-sm hover:shadow-md transition-all flex items-center justify-center">
                				<Plus size={18} />
              				</button>

              				<button className="w-10 h-10 p-0 bg-[#243c84] hover:bg-[#1d3069] text-white rounded-md border-0 cursor-pointer shadow-sm hover:shadow-md transition-all flex items-center justify-center">
                				<Edit size={18} />
              				</button>

              				<button className="w-10 h-10 p-0 bg-[#d8442c] hover:bg-[#b93824] text-white rounded-md border-0 cursor-pointer shadow-sm hover:shadow-md transition-all flex items-center justify-center">
                				<Trash2 size={18} />
              				</button>
            			</div>
          			</div>

          			<div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            			<h3 className="text-[14px] font-semibold mb-4 text-gray-600 dark:text-gray-50">
              				Ghost Icons
            			</h3>
            			<div className="flex flex-wrap items-center gap-3">
              				<button className="w-10 h-10 p-0 bg-transparent hover:bg-slate-100 text-slate-500 hover:text-[#243c84] rounded-md border border-slate-200 hover:border-[#243c84] cursor-pointer transition-all flex items-center justify-center">
                				<Settings size={18} />
              				</button>

              				<button className="w-10 h-10 p-0 bg-transparent hover:bg-slate-100 text-slate-500 hover:text-[#243c84] rounded-md border border-slate-200 hover:border-[#243c84] cursor-pointer transition-all flex items-center justify-center">
                				<Mail size={18} />
              				</button>

              				<button className="w-10 h-10 p-0 bg-transparent hover:bg-slate-100 text-slate-500 hover:text-[#243c84] rounded-md border border-slate-200 hover:border-[#243c84] cursor-pointer transition-all flex items-center justify-center">
                				<Bell size={18} />
              				</button>

              				<button className="w-10 h-10 p-0 bg-transparent hover:bg-slate-100 text-slate-500 hover:text-[#243c84] rounded-md border border-slate-200 hover:border-[#243c84] cursor-pointer transition-all flex items-center justify-center">
                				<Search size={18} />
              				</button>
            			</div>
          			</div>
        		</div>
      		</div>

      		{/* Size Variants */}
      		<div className="mb-12">
        		<h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          			Size Variants
        		</h2>
        		<p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          			다양한 크기의 버튼
        		</p>
        
        		<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          			{/* Small */}
          			<div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            			<h3 className="text-[14px] font-semibold mb-4 text-gray-600 dark:text-gray-50">
              				Small (32px)
            			</h3>
            			<div className="space-y-3">
              				<button className="h-8 px-3.5 bg-[#243c84] hover:bg-[#1d3069] text-white text-[13px] font-semibold rounded-md border-0 cursor-pointer shadow-sm transition-all">
                				저장
              				</button>
              
              				<button className="h-8 px-3.5 bg-transparent hover:bg-[#243c84] text-[#243c84] hover:text-white text-[13px] font-semibold rounded-md border-[1.5px] border-[#243c84] cursor-pointer transition-all flex items-center gap-1.5">
                				<Download size={14} />
                				다운로드
              				</button>
            			</div>
          			</div>

          			{/* Medium (Default) */}
          			<div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            			<h3 className="text-[14px] font-semibold mb-4 text-gray-600 dark:text-gray-50">
              				Medium (40px)
            			</h3>
            			<div className="space-y-3">
              				<button className="h-10 px-5 bg-[#243c84] hover:bg-[#1d3069] text-white text-[14px] font-semibold rounded-md border-0 cursor-pointer shadow-sm transition-all">
                				저장
              				</button>
              
              				<button className="h-10 px-5 bg-transparent hover:bg-[#243c84] text-[#243c84] hover:text-white text-[14px] font-semibold rounded-md border-[1.5px] border-[#243c84] cursor-pointer transition-all flex items-center gap-2">
                				<Download size={16} />
                				다운로드
              				</button>
            			</div>
          			</div>

          			{/* Large */}
          			<div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            			<h3 className="text-[14px] font-semibold mb-4 text-gray-600 dark:text-gray-50">
              				Large (48px)
            			</h3>
            			<div className="space-y-3">
              				<button className="h-12 px-6 bg-[#243c84] hover:bg-[#1d3069] text-white text-[15px] font-semibold rounded-md border-0 cursor-pointer shadow-sm transition-all">
                				저장
              				</button>
              
              				<button className="h-12 px-6 bg-transparent hover:bg-[#243c84] text-[#243c84] hover:text-white text-[15px] font-semibold rounded-md border-[1.5px] border-[#243c84] cursor-pointer transition-all flex items-center gap-2">
                				<Download size={18} />
                				다운로드
              				</button>
            			</div>
          			</div>
        		</div>
      		</div>

      		{/* Utility Buttons */}
      		<div className="mb-12">
        		<h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          			Utility Buttons
        		</h2>
        		<p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          			특수 기능 버튼
        		</p>
        
        		<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          			<div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            			<h3 className="text-[14px] font-semibold mb-4 text-gray-600 dark:text-gray-50">
              				Special Actions
            			</h3>
            			<div className="flex flex-wrap items-center gap-3">
              				<button className={`h-10 px-5 text-[14px] font-semibold rounded-md border cursor-pointer transition-all flex items-center gap-2 ${ copied ? 'bg-green-500 text-white border-green-500' : 'bg-slate-100 text-slate-600 border-slate-200' }`}
                				onClick={() => {
                  					setCopied(true);
                  					setTimeout(() => setCopied(false), 2000);
                				}}>
                				{copied ? <Check size={16} /> : <Copy size={16} />}
                				{copied ? '복사됨!' : '복사'}
              				</button>

              				<button className="h-10 px-5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-[14px] font-semibold rounded-md border border-slate-200 cursor-pointer transition-all flex items-center gap-2">
                				<Filter size={16} />
                				필터
              				</button>

              				<button className="h-10 px-5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-[14px] font-semibold rounded-md border border-slate-200 cursor-pointer transition-all flex items-center gap-2">
                				새 창에서 열기
                				<ExternalLink size={16} />
              				</button>
            			</div>
          			</div>

          			<div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            			<h3 className="text-[14px] font-semibold mb-4 text-gray-600 dark:text-gray-50">
              				Full Width
            			</h3>
            			<div className="space-y-3">
              				<button className="h-10 px-5 bg-[#243c84] hover:bg-[#1d3069] text-white text-[14px] font-semibold rounded-md border-0 cursor-pointer shadow-sm transition-all w-full">
                				전체 너비 버튼
              				</button>
              
              				<button className="h-10 px-5 bg-transparent hover:bg-[#243c84] text-[#243c84] hover:text-white text-[14px] font-semibold rounded-md border-[1.5px] border-[#243c84] cursor-pointer transition-all w-full flex items-center justify-center gap-2">
                				계속하기
                				<ArrowRight size={16} />
              				</button>
            			</div>
          			</div>
        		</div>
      		</div>

      		{/* File Upload Buttons */}
      		<div className="mb-12">
        		<h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          			File Upload Buttons
        		</h2>
        		<p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          			파일 업로드를 위한 버튼
        		</p>
        
        		<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          			{/* Full Width Upload Button */}
          			<div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            			<h3 className="text-[14px] font-semibold mb-4 text-gray-600 dark:text-gray-50">
              				Full Width Upload
            			</h3>
            			<div>
              				<input className="hidden"
                				type="file"
                				id="file-upload-demo"
                				multiple />
              				<label className="flex items-center justify-center gap-2 rounded-lg text-[14px] font-semibold cursor-pointer transition-all duration-200 w-full p-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600"
              					htmlFor="file-upload-demo">
                				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  					<path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  					<path d="M11.3333 5.33333L8 2L4.66667 5.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  					<path d="M8 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                				</svg>
                				파일첨부
              				</label>
              				<p className="text-xs mt-2 text-gray-400">
                				파일을 선택하거나 드래그하여 업로드하세요
              				</p>
            			</div>
          			</div>

          			{/* Full Width Register Button */}
          			<div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            			<h3 className="text-[14px] font-semibold mb-4 text-gray-600 dark:text-gray-50">
              				Full Width Register
            			</h3>
            			<div>
              				<button className="flex items-center justify-center gap-2 rounded-lg text-[14px] font-semibold transition-colors w-full p-3 bg-[#243c84] hover:bg-[#1e3470] text-white border border-[#243c84] hover:border-[#1e3470]">
                				<Check size={16} />
                				파일 등록
              				</button>
              				<p className="text-xs mt-2 text-gray-400">
                				선택한 파일을 최종 등록합니다
              				</p>
            			</div>
          			</div>

          			{/* Compact Upload Button */}
          			<div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            			<h3 className="text-[14px] font-semibold mb-4 text-gray-600 dark:text-gray-50">
              				Compact Upload
            			</h3>
            			<div className="flex items-center gap-3">
              				<input className="hidden"
                				type="file"
                				id="file-upload-compact" />
              				<label className="inline-flex items-center gap-2 rounded-lg text-[14px] font-semibold cursor-pointer transition-all duration-200 py-2.5 px-4 bg-transparent hover:bg-[#243c84] text-[#243c84] hover:text-white border-[1.5px] border-[#243c84]"
              					htmlFor="file-upload-compact">
                				<Upload size={16} />
                				파일첨부
              				</label>
              				<span className="text-[13px] text-gray-600 dark:text-gray-400">
                				선택된 파일 없음
              				</span>
            			</div>
          			</div>
        		</div>
      		</div>
		</div>
	);
}