"use client"

import Link from "next/link";
import { ChevronDown, Check } from "lucide-react";
import { useState } from "react";

export function DropdownsSection() {
	const [basicOpen, setBasicOpen] = useState(false);
  	const [basicSelected, setBasicSelected] = useState('');
  
  	const [statusOpen, setStatusOpen] = useState(false);
  	const [statusSelected, setStatusSelected] = useState('');
  
  	const [multiOpen, setMultiOpen] = useState(false);
  	const [multiSelected, setMultiSelected] = useState<string[]>([]);
  
  	const [sizeSmallOpen, setSizeSmallOpen] = useState(false);
  	const [sizeSmallSelected, setSizeSmallSelected] = useState('');
  
  	const [sizeLargeOpen, setSizeLargeOpen] = useState(false);
  	const [sizeLargeSelected, setSizeLargeSelected] = useState('');

  	const basicOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  	const statusOptions = ['진행중', '완료', '대기', '취소'];
  	const multiOptions = ['개발팀', '디자인팀', '마케팅팀', '영업팀', '운영팀'];

  	return (
    	<div>      
      		{/* Group 1. Basic Dropdown */}
      		<div className="mb-12">
        		<h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          			1. Basic Dropdown
        		</h2>
        		<p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          			단일 선택 기본 드롭다운
        		</p>
        
        		<div className="flex gap-6 flex-wrap">
          			{/* Default */}
          			<div className="relative w-60">
            			<div className="h-10 px-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 cursor-pointer flex items-center justify-between"
            				onClick={() => setBasicOpen(!basicOpen)}>
              				<span className={`text-sm font-medium leading-[140%] ${basicSelected ? 'text-gray-900 dark:text-gray-50' : 'text-gray-400 dark:text-gray-500'}`}>
                				{basicSelected || 'Select option'}
              				</span>
              				<ChevronDown className={`text-gray-500 dark:text-gray-400 transition-transform duration-[120ms] ease-out ${basicOpen ? 'rotate-180' : 'rotate-0'}`}
              					size={16} />
            			</div>

            			{/* Dropdown Menu */}
            			{basicOpen && (
              				<div className="absolute top-11 left-0 right-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-[10px] shadow-lg dark:shadow-[0_8px_24px_rgba(0,0,0,0.3)] p-1.5 flex flex-col gap-1 z-50">
                				{basicOptions.map((option) => (
                  					<div className={`h-9 px-3 py-2 text-sm rounded-md cursor-pointer transition-colors duration-[120ms] ease-out flex items-center ${basicSelected === option ? 'text-[#243c84] bg-[#243c840f]' : 'text-gray-900 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    					key={option}
                    					onClick={() => {
                      						setBasicSelected(option);
                      						setBasicOpen(false);
                    					}}>
                    					{option}
                  					</div>
                				))}
              				</div>
            			)}
          			</div>

          			{/* With Selected Value */}
          			<div className="relative w-60">
            			<div className="h-10 px-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 cursor-pointer flex items-center justify-between"
            				onClick={() => setStatusOpen(!statusOpen)}>
              				<span className={`text-sm font-medium leading-[140%] ${statusSelected ? 'text-gray-900 dark:text-gray-50' : 'text-gray-400 dark:text-gray-500'}`}>
                				{statusSelected || 'Select status'}
              				</span>
              				<ChevronDown className={`text-gray-500 dark:text-gray-400 transition-transform duration-[120ms] ease-out ${statusOpen ? 'rotate-180' : 'rotate-0'}`}
              					size={16} />
            			</div>

            			{statusOpen && (
              				<div className="absolute top-11 left-0 right-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-[10px] shadow-lg dark:shadow-[0_8px_24px_rgba(0,0,0,0.3)] p-1.5 flex flex-col gap-1 z-50">
                				{statusOptions.map((option) => (
                  					<div className={`h-9 px-3 py-2 text-sm rounded-md cursor-pointer transition-colors duration-[120ms] ease-out flex items-center justify-between ${statusSelected === option ? 'text-[#243c84] bg-[#243c840f]' : 'text-gray-900 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    					key={option}
                    					onClick={() => {
                      						setStatusSelected(option);
                      						setStatusOpen(false);
                    					}}>
                    					<span>{option}</span>
                    					{statusSelected === option && (
                      						<Check size={16} className="text-[#243c84]" />
                    					)}
                  					</div>
                				))}
              				</div>
            			)}
          			</div>

          			{/* Disabled State */}
          			<div className="relative w-60">
            			<div className="h-10 px-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 cursor-not-allowed flex items-center justify-between opacity-40">
              				<span className="text-sm font-medium text-gray-400 dark:text-gray-500 leading-[140%]">
                				Disabled dropdown
              				</span>
              				<ChevronDown size={16} className="text-gray-500 dark:text-gray-400" />
            			</div>
          			</div>
        		</div>
      		</div>

      		{/* Group 2. Multi-Select Dropdown */}
      		<div className="mb-12">
        		<h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          			2. Multi-Select Dropdown
        		</h2>
        		<p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          			여러 항목 선택 가능
        		</p>
        
        		<div className="relative w-[280px]">
          			<div className="h-10 px-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 cursor-pointer flex items-center justify-between"
          				onClick={() => setMultiOpen(!multiOpen)}>
            			<span className={`text-sm font-medium leading-[140%] ${multiSelected.length > 0 ? 'text-gray-900 dark:text-gray-50' : 'text-gray-400 dark:text-gray-500'}`}>
              				{multiSelected.length > 0 ? `${multiSelected.length}개 선택됨` : 'Select teams'}
            			</span>
            			<ChevronDown className={`text-gray-500 dark:text-gray-400 transition-transform duration-[120ms] ease-out ${multiOpen ? 'rotate-180' : 'rotate-0'}`}
            				size={16} />
          			</div>

          			{multiOpen && (
            			<div className="absolute top-11 left-0 right-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-[10px] shadow-lg dark:shadow-[0_8px_24px_rgba(0,0,0,0.3)] p-1.5 flex flex-col gap-1 z-50">
              				{multiOptions.map((option) => {
                				const isSelected = multiSelected.includes(option);
                				return (
                  					<div className={`h-9 px-3 py-2 text-sm rounded-md cursor-pointer transition-colors duration-[120ms] ease-out flex items-center justify-between ${isSelected ? 'text-[#243c84] bg-[#243c840f]' : 'text-gray-900 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  						key={option}
                    					onClick={() => {
                      						if (isSelected) {
                        						setMultiSelected(multiSelected.filter(item => item !== option));
                      						} else {
                        						setMultiSelected([...multiSelected, option]);
                      						}
                    					}}>
                    					<span>{option}</span>
                    					{isSelected && (
                      						<Check size={16} className="text-[#243c84]" />
                    					)}
                  					</div>
                				);
              				})}
            			</div>
          			)}
        		</div>

        		{/* Selected Tags */}
        		{multiSelected.length > 0 && (
          			<div className="mt-4 flex gap-2 flex-wrap">
            			{multiSelected.map((item) => (
              				<div className="h-7 px-2.5 bg-[#243c840f] text-[#243c84] text-[13px] font-medium rounded-md flex items-center gap-1.5"
              					key={item}>
                				{item}
                				<button className="bg-transparent border-none text-[#243c84] cursor-pointer text-base leading-none p-0"
                					onClick={() => setMultiSelected(multiSelected.filter(i => i !== item))}>
                  					×
                				</button>
              				</div>
            			))}
          			</div>
        		)}
      		</div>

      		{/* Group 3. Size Variants */}
      		<div className="mb-12">
        		<h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          			3. Size Variants
        		</h2>
        		<p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          			다양한 크기의 드롭다운
        		</p>
        
        		<div className="flex gap-6 items-start">
          			{/* Small */}
          			<div className="relative w-[180px]">
            			<div className="h-8 px-2.5 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 cursor-pointer flex items-center justify-between"
            				onClick={() => setSizeSmallOpen(!sizeSmallOpen)}>
              				<span className={`text-[13px] font-medium leading-[140%] ${sizeSmallSelected ? 'text-gray-900 dark:text-gray-50' : 'text-gray-400 dark:text-gray-500'}`}>
                				{sizeSmallSelected || 'Small size'}
              				</span>
              				<ChevronDown className={`text-gray-500 dark:text-gray-400 transition-transform duration-[120ms] ease-out ${sizeSmallOpen ? 'rotate-180' : 'rotate-0'}`}
              					size={14} />
            			</div>

            			{sizeSmallOpen && (
              				<div className="absolute top-9 left-0 right-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg dark:shadow-[0_8px_24px_rgba(0,0,0,0.3)] p-1 flex flex-col gap-0.5 z-50">
                				{basicOptions.map((option) => (
                  					<div className={`h-7 px-2.5 py-1.5 text-[13px] rounded cursor-pointer transition-colors duration-[120ms] ease-out flex items-center ${sizeSmallSelected === option ? 'text-[#243c84] bg-[#243c840f]' : 'text-gray-900 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  						key={option}
                    					onClick={() => {
                      						setSizeSmallSelected(option);
                      						setSizeSmallOpen(false);
                    					}}>
                    					{option}
                  					</div>
                				))}
              				</div>
            			)}
          			</div>

          			{/* Medium (Default) */}
          			<div className="relative w-60">
            			<div className="h-10 px-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 cursor-pointer flex items-center justify-between">
              				<span className="text-sm font-medium text-gray-400 dark:text-gray-500 leading-[140%]">
                				Medium size (Default)
              				</span>
              				<ChevronDown size={16} className="text-gray-500 dark:text-gray-400" />
            			</div>
          			</div>

          			{/* Large */}
          			<div className="relative w-[280px]">
            			<div className="h-12 px-4 border border-gray-300 dark:border-gray-600 rounded-[10px] bg-white dark:bg-gray-800 cursor-pointer flex items-center justify-between"
            				onClick={() => setSizeLargeOpen(!sizeLargeOpen)}>
              				<span className={`text-[15px] font-medium leading-[140%] ${sizeLargeSelected ? 'text-gray-900 dark:text-gray-50' : 'text-gray-400 dark:text-gray-500'}`}>              					
                				{sizeLargeSelected || 'Large size'}
              				</span>
              				<ChevronDown className={`text-gray-500 dark:text-gray-400 transition-transform duration-[120ms] ease-out ${sizeLargeOpen ? 'rotate-180' : 'rotate-0'}`}
              					size={18} />
            			</div>

            			{sizeLargeOpen && (
              				<div className="absolute top-[52px] left-0 right-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-lg dark:shadow-[0_8px_24px_rgba(0,0,0,0.3)] p-2 flex flex-col gap-1 z-50">
                				{basicOptions.map((option) => (
                  					<div className={`h-10 px-3.5 py-2.5 text-[15px] rounded-lg cursor-pointer transition-colors duration-[120ms] ease-out flex items-center ${sizeLargeSelected === option ? 'text-[#243c84] bg-[#243c840f]' : 'text-gray-900 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  						key={option}
                    					onClick={() => {
                      						setSizeLargeSelected(option);
                      						setSizeLargeOpen(false);
                    					}}>
                    					{option}
                  					</div>
                				))}
              				</div>
            			)}
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
              				<h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Container</h4>
              				<ul className="text-[13px] leading-[1.8] text-gray-600 dark:text-gray-400 pl-5">
                				<li>Height: 40px</li>
                				<li>Padding: 0 12px</li>
                				<li>Border: 1px solid #E5EAF2</li>
                				<li>Border Radius: 8px</li>
                				<li>Background: #FFFFFF</li>
              				</ul>
            			</div>
            			<div>
              				<h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Typography</h4>
              				<ul className="text-[13px] leading-[1.8] text-gray-600 dark:text-gray-400 pl-5">
                				<li>Font Size: 14px</li>
                				<li>Font Weight: Medium</li>
                				<li>Color: #0F172A</li>
                				<li>Placeholder: #94A3B8</li>
              				</ul>
            			</div>
            			<div>
              				<h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Dropdown Menu</h4>
              				<ul className="text-[13px] leading-[1.8] text-gray-600 dark:text-gray-400 pl-5">
                				<li>Background: #FFFFFF</li>
                				<li>Border: 1px solid #E5EAF2</li>
                				<li>Border Radius: 10px</li>
                				<li>Shadow: 0 8px 24px rgba(15,23,42,0.08)</li>
                				<li>Padding: 6px</li>
              				</ul>
            			</div>
            			<div>
              				<h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">States</h4>
              				<ul className="text-[13px] leading-[1.8] text-gray-600 dark:text-gray-400 pl-5">
                				<li>Hover: Background #F1F5F9</li>
                				<li>Active: Brand Navy + 6% opacity</li>
                				<li>Disabled: Opacity 40%</li>
                				<li>Transition: 120ms ease-out</li>
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
            			<li>옵션이 5개 이하일 경우 Radio Button 사용 권장</li>
            			<li>옵션이 10개 이상일 경우 검색 기능 추가 고려</li>
            			<li>Multi-Select는 선택된 항목 수를 명시</li>
            			<li>Disabled 상태는 툴팁으로 이유 제공</li>
            			<li>키보드 네비게이션 지원 (↑↓ Enter Esc)</li>
          			</ul>
        		</div>
      		</div>
    	</div>
  	);
}