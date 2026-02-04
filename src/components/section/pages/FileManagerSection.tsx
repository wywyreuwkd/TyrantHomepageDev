"use client"

import Link from "next/link";
import { Search, Upload, Image, Video, Music, FileText, Folder, MoreVertical, Download, Share2, Trash2, FileSpreadsheet, Archive } from 'lucide-react';
import { useState } from 'react';

// 파일 타입 요약 데이터
const fileSummary = [
  	{ icon: Image, label: 'Images', count: 245, files: '245 Files', size: '26.40', percentage: 17, color: '#243c84' },
  	{ icon: Video, label: 'Videos', count: 184, files: '78 Files', size: '5.40', percentage: 22, color: '#3B6FD8' },
  	{ icon: Folder, label: 'Folders', count: 830, files: '220 Folders', size: '18.90', percentage: 23, color: '#6FA8E8' },
  	{ icon: Archive, label: 'Archives', count: 1200, files: '280 Files', size: '85.30', percentage: 83, color: '#243c84' },
  	{ icon: Music, label: 'Audios', count: 78, files: '2255 Files', size: '5.40', percentage: 10, color: '#3B6FD8' },
  	{ icon: FileText, label: 'Documents', count: 245, files: '175 Files', size: '26.40', percentage: 16, color: '#6FA8E8' },
  	{ icon: Download, label: 'Downloads', count: 245, files: '245 Files', size: '26.40', percentage: 16, color: '#243c84' },
  	{ icon: FileSpreadsheet, label: 'Others', count: 245, files: '245 Files', size: '26.40', percentage: 16, color: '#3B6FD8' },
];

// 폴더 데이터
const folders = [
  	{ name: 'Work Projects', files: 142, size: '2.4 GB', usage: 48, color: '#243c84' },
  	{ name: 'Personal', files: 89, size: '1.1 GB', usage: 22, color: '#3B6FD8' },
  	{ name: 'Design Assets', files: 356, size: '4.8 GB', usage: 78, color: '#4FA3FF' },
  	{ name: 'Downloads', files: 521, size: '3.2 GB', usage: 64, color: '#243c84' },
  	{ name: 'Archive', files: 67, size: '890 MB', usage: 15, color: '#7BB7F0' },
  	{ name: 'Backup', files: 234, size: '5.6 GB', usage: 85, color: '#3B6FD8' },
];

// 스토리지 데이터
const storageData = [
  	{ name: 'Images', value: 4.2, color: '#4FA3FF' },
  	{ name: 'Videos', value: 12.8, color: '#3B6FD8' },
  	{ name: 'Documents', value: 3.6, color: '#7BB7F0' },
  	{ name: 'Others', value: 2.4, color: '#C7D9F4' },
];

// 최근 파일 데이터
const recentFiles = [
  	{ name: 'Project_Proposal_2024.pdf', size: '2.4 MB', modified: '2 hours ago', type: 'PDF', icon: FileText },
  	{ name: 'Dashboard_Design.fig', size: '15.8 MB', modified: '5 hours ago', type: 'Figma', icon: Image },
  	{ name: 'Meeting_Recording.mp4', size: '124.5 MB', modified: '1 day ago', type: 'Video', icon: Video },
  	{ name: 'Budget_Report.xlsx', size: '856 KB', modified: '2 days ago', type: 'Excel', icon: FileSpreadsheet },
  	{ name: 'Brand_Guidelines.pdf', size: '5.2 MB', modified: '3 days ago', type: 'PDF', icon: FileText },
  	{ name: 'Product_Images.zip', size: '45.2 MB', modified: '4 days ago', type: 'Archive', icon: Archive },
];

export function FileManagerSection() {
	const totalStorage = storageData.reduce((sum, item) => sum + item.value, 0);
  	const maxStorage = 50;
  	const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);
  	const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined);

  	const CustomTooltip = ({ active, payload }: any) => {
    	if (active && payload && payload.length) {
      		return (
        		<div className="px-3 py-2 rounded-md shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          			<div className="text-[12px] font-medium mb-1 text-gray-800 dark:text-gray-100">
            			{payload[0].name}
          			</div>
          			<div className="text-[14px] font-medium"
            			style={{ color: payload[0].payload.color }}>
            			{payload[0].value.toFixed(1)} GB
          			</div>
        		</div>
      		);
    	}
    	return null;
  	};

	return (
		<div>
			{/* All Media Section */}
      		<div className="mb-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-[20px] overflow-hidden shadow-sm dark:shadow-none">
        		<div className="px-8 pt-8 pb-6 flex items-center justify-between max-md:px-6 max-md:flex-col max-md:items-start max-md:gap-4 min-h-[88px]">
          			<h2 className="text-[20px] font-bold tracking-tight text-gray-900 dark:text-gray-100">
            			All Media
          			</h2>
          
          			<div className="flex items-center gap-4 max-md:w-full max-md:flex-col">
            			{/* Search */}
            			<div className="relative max-md:w-full">
              				<Search className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-400"
                				size={16} />
              				<input className="pl-7 pr-4 py-2 bg-transparent border-none outline-none text-[14px] max-md:w-full text-gray-900 dark:text-gray-50 w-[240px] border-b border-gray-300 dark:border-gray-600"
                				type="text"
                				placeholder="Search..."/>
            			</div>

            			{/* Upload Button */}
            			<button className="flex items-center gap-2 px-4 py-2 rounded-md text-[14px] font-medium transition-opacity hover:opacity-90 max-md:w-full max-md:justify-center bg-[#243c84] text-white">
              				<Upload size={16} />
              				Upload File
            			</button>
          			</div>
        		</div>
        
        		<div className="px-8 pb-8 max-md:px-6">
          			<div className="grid grid-cols-4 gap-6 max-md:grid-cols-2">
            			{fileSummary.map((item, index) => {
              				// 카드마다 다른 강조 스타일
              				const emphasizeUsage = index % 3 === 0;
              				const emphasizeSize = index % 3 === 1;
              
              				return (
                				<button className="text-left p-5 rounded-xl transition-all bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-gray-900/50 hover:border-gray-300 dark:hover:border-gray-600"
                  					key={index} >
                  					{/* Header: Category Name + Icon */}
                  					<div className="flex items-start justify-between mb-3">
                    					<div className="flex-1 min-w-0">
                      						<div className="text-[15px] font-bold mb-1 truncate text-gray-900 dark:text-gray-50">
                        						{item.label}
                      						</div>
                      						<div className="text-[11px] text-gray-400">
                        						{item.files}
                      						</div>
                    					</div>
                    
                    					<item.icon className="flex-shrink-0 ml-2 opacity-70"
                      						size={16} 
                      						strokeWidth={2}
                      						style={{ color: item.color }} />
                  					</div>

                  					{/* Storage Size - 강조 */}
                  					<div className="mb-3">
                    					{emphasizeSize ? (
                      						<span className="text-[28px] font-bold tabular-nums"                        
                        						style={{ color: item.color }}>
                        						{item.size}
                        						<span className="text-[14px] font-medium ml-1 text-gray-600 dark:text-gray-400">
                          							GB
                        						</span>
                      						</span>
                    					) : (
                      						<span className="text-[20px] font-semibold tabular-nums text-gray-700 dark:text-gray-300">
                        						{item.size}
                        						<span className="text-[13px] font-medium ml-1 text-gray-400">
                          							GB
                        						</span>
                      						</span>
                    					)}
                  					</div>

                  					{/* Usage Bar + Percentage */}
                  					<div>
                    					<div className="flex items-center justify-between mb-1.5">
                      						<span className={emphasizeUsage ? "text-[13px] font-semibold" : "text-[11px] font-medium"}
                        						style={{ color: emphasizeUsage ? item.color : undefined }}>
                        						<span className={!emphasizeUsage ? "text-gray-400" : ""}>{item.percentage}% Used</span>
                      						</span>
                    					</div>
                    					<div className="w-full h-1 rounded-full overflow-hidden bg-gray-700 dark:bg-gray-700">
                      						<div className="h-full rounded-full transition-all duration-500"
                        						style={{width: `${item.percentage}%`, backgroundColor: item.color,}}/>
                    					</div>
                  					</div>
                				</button>
              				);
            			})}
          			</div>
        		</div>
      		</div>

      		{/* All Folders Section */}
      		<div className="mb-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-[20px] overflow-hidden shadow-sm dark:shadow-none">
        		<div className="px-8 pt-8 pb-6 flex items-center justify-between max-md:px-6 min-h-[88px]">
          			<h2 className="text-[20px] font-bold tracking-tight text-gray-900 dark:text-gray-100">
            			All Folders
          			</h2>
          			<button className="text-[13px] font-medium hover:opacity-80 transition-opacity text-[#243c84]">
            			View All →
          			</button>
        		</div>
        
        		<div className="px-8 pb-8 max-md:px-6">
          			<div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            			{folders.slice(0, 6).map((folder, index) => {
              				// 카드마다 다른 강조 스타일
              				const emphasizeSize = index % 2 === 0;
              
              				return (
                				<button className="text-left p-6 rounded-xl transition-all bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:-translate-y-0.5 hover:shadow-lg dark:hover:shadow-gray-900/50 hover:border-gray-300 dark:hover:border-gray-600"
                  					key={index} >
                  					{/* Header: Folder Name + Icon */}
                  					<div className="flex items-start justify-between mb-4">
                    					<div className="flex-1 min-w-0">
                      						<div className="text-[15px] font-semibold mb-1 truncate text-gray-900 dark:text-gray-50">
                        						{folder.name}
                      						</div>
                      						<div className="text-[12px] text-gray-600 dark:text-gray-400">
                        						{folder.files} Files
                      						</div>
                    					</div>
                    
                    					<Folder className="flex-shrink-0 ml-2 text-gray-600 dark:text-gray-400"
                      						size={18} 
                      						strokeWidth={1.5} />
                  					</div>

                  					{/* Progress Bar */}
                  					<div className="mb-3">
                    					<div className="w-full h-1 rounded-full overflow-hidden bg-gray-700 dark:bg-gray-700">
                      						<div className="h-full rounded-full transition-all duration-300"
                        						style={{width: `${folder.usage}%`, backgroundColor: folder.color,}}/>
                    					</div>
                  					</div>

                  					{/* Storage Metric */}
                  					{emphasizeSize ? (
                    					// 용량 강조 스타일
                    					<div className="flex items-baseline gap-2">
                      						<span className="text-[24px] font-semibold tabular-nums text-[#243c84]">
                        						{folder.size}
                      						</span>
                      						<span className="text-[12px] text-gray-400">
                        						{folder.usage}% used
                      						</span>
                    					</div>
                  					) : (
                    					// 파일 수 강조 스타일
                    					<div className="flex items-baseline justify-between">
                      						<div>
                        						<span className="text-[20px] font-semibold tabular-nums"
                          							style={{ color: folder.color }}>
                          							{folder.files}
                        						</span>
                        						<span className="text-[12px] ml-1 text-gray-400">
                          							files
                        						</span>
                      						</div>
                      						<span className="text-[13px] font-medium text-gray-600 dark:text-gray-400">
                        						{folder.size}
                      						</span>
                    					</div>
                  					)}
                					</button>
              					);
            				})}
          				</div>
        			</div>
      			</div>

      			{/* Storage Details Section */}
      			<div className="mb-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-[20px] overflow-hidden shadow-sm dark:shadow-none">
        			<div className="px-8 pt-8 pb-6 min-h-[88px]">
          				<h2 className="text-[20px] font-bold tracking-tight text-gray-900 dark:text-gray-100">
            				Storage Details
          				</h2>
        			</div>
        
        			<div className="px-8 pb-8">
          				{/* Main Metric Display */}
          				<div className="mb-8">
            				<div className="flex items-baseline gap-1 mb-1">
              					<span className="text-[40px] font-semibold tabular-nums transition-all duration-200 hover:opacity-80"
                					style={{ color: activeIndex !== undefined ? storageData[activeIndex].color : selectedIndex !== undefined ? storageData[selectedIndex].color : '#243c84'}}>
                					{activeIndex !== undefined ? storageData[activeIndex].value.toFixed(1) : selectedIndex !== undefined ? storageData[selectedIndex].value.toFixed(1) : totalStorage.toFixed(1)} GB
              					</span>
              					<span className="text-[14px] text-gray-600 dark:text-gray-400">
                					{activeIndex !== undefined ? ` · ${storageData[activeIndex].name}` : selectedIndex !== undefined ? ` · ${storageData[selectedIndex].name}` : ` / ${maxStorage} GB 사용 중`}
              					</span>
            				</div>
          				</div>

          				{/* Interactive Stack Bar */}
          				<div className="mb-8 relative">
            				<div className="relative overflow-hidden rounded-full bg-gray-800 dark:bg-gray-800 transition-all duration-150"
              					style={{ height: activeIndex !== undefined || selectedIndex !== undefined ? '12px' : '8px',}}>
              					{storageData.map((item, index) => {
                					const percentage = (item.value / maxStorage) * 100;
                					const previousPercentage = storageData
                  					.slice(0, index)
                  					.reduce((sum, d) => sum + (d.value / maxStorage) * 100, 0);
                
                					const isActive = activeIndex === index;
                					const isSelected = selectedIndex === index;
                					const isOtherActive = (activeIndex !== undefined && activeIndex !== index) || (selectedIndex !== undefined && selectedIndex !== index);
                
                					return (
                  						<div className="absolute top-0 cursor-pointer transition-all duration-150"
                    						key={index}                    
                    						style={{ left: `${previousPercentage}%`, width: `${percentage}%`, height: '100%', backgroundColor: item.color,opacity: isOtherActive ? 0.3 : 1,}}
                    						onMouseEnter={() => setActiveIndex(index)}
                    						onMouseLeave={() => setActiveIndex(undefined)}
                    						onClick={() => setSelectedIndex(selectedIndex === index ? undefined : index)}/>
                					);
              					})}
            				</div>
            
            				{/* Tooltip */}
            				{activeIndex !== undefined && (
              					<div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 rounded-md shadow-lg pointer-events-none z-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                					<div className="text-[12px] font-medium mb-1 text-gray-800 dark:text-gray-100">
                  						{storageData[activeIndex].name}
                					</div>
                					<div className="text-[14px] font-semibold"
                  						style={{ color: storageData[activeIndex].color }}>
                  						{storageData[activeIndex].value.toFixed(1)} GB ({((storageData[activeIndex].value / maxStorage) * 100).toFixed(1)}%)
                					</div>
              					</div>
            				)}
          				</div>

          				{/* Category List */}
          				<div className="space-y-4">
            				{storageData.map((item, index) => {
              					const isActive = activeIndex === index;
              					const isSelected = selectedIndex === index;
              					const isOtherActive = (activeIndex !== undefined && activeIndex !== index) || (selectedIndex !== undefined && selectedIndex !== index);
              
              					return (
                					<button className="w-full text-left flex items-center gap-3 group transition-all duration-150"
                  						key={index}                  
                  						style={{ opacity: isOtherActive ? 0.5 : 1,}}
                  						onMouseEnter={() => setActiveIndex(index)}
                  						onMouseLeave={() => setActiveIndex(undefined)}
                  						onClick={() => setSelectedIndex(selectedIndex === index ? undefined : index)}>
                  						{/* Color Indicator */}
                  						<div className="flex-shrink-0 rounded-sm transition-all duration-150 w-[3px] h-4"
                    						style={{ backgroundColor: item.color,opacity: isActive || isSelected ? 1 : 0.5,}}/>
                  
                  						{/* Category Name */}
                  						<span className="text-[13px] transition-all duration-150 text-gray-800 dark:text-gray-300"
                    						style={{ fontWeight: isActive || isSelected ? 600 : 500,}}>
                    						{item.name}
                  						</span>
                  
                  						{/* Size */}
                  						<span className="text-[12px] text-gray-600 dark:text-gray-400">
                    						{item.value.toFixed(1)} GB
                  						</span>
                					</button>
              					);
            				})}
          				</div>
        			</div>
      			</div>

      			{/* Recent Files Section */}
      			<div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-[20px] overflow-hidden shadow-sm dark:shadow-none">
        			<div className="px-8 pt-8 pb-6 max-md:px-6 min-h-[88px]">
          				<h2 className="text-[20px] font-bold tracking-tight text-gray-900 dark:text-gray-100">
            				Recent Files
          				</h2>
        			</div>

        			{/* Desktop Table */}
        			<div className="overflow-x-auto hidden md:block">
          				{/* Table Header */}
          				<div className="grid items-center px-8 gap-6 h-[44px] bg-gray-50 dark:bg-gray-800 border-t border-b border-gray-200 dark:border-gray-700"
            				style={{ gridTemplateColumns: '1fr 160px 140px 180px 120px',}}>
            				<div className="flex items-center text-[11px] font-semibold tracking-wide uppercase h-full text-gray-600 dark:text-gray-400">
              					파일명
            				</div>
            				<div className="flex items-center text-[11px] font-semibold tracking-wide uppercase h-full text-gray-600 dark:text-gray-400">
              					유형
            				</div>
            				<div className="flex items-center text-[11px] font-semibold tracking-wide uppercase h-full text-gray-600 dark:text-gray-400">
              					크기
            				</div>
            				<div className="flex items-center text-[11px] font-semibold tracking-wide uppercase h-full text-gray-600 dark:text-gray-400">
              					수정일
            				</div>
            				<div className="text-[11px] font-semibold tracking-wide uppercase text-center flex items-center justify-center h-full text-gray-600 dark:text-gray-400">
              					작업
            				</div>
          				</div>

          				{/* Table Body */}
          				<div>
            				{recentFiles.map((file, index) => (
              					<div className="grid items-center px-8 gap-6 h-16 transition-colors border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                					key={index}                
                					style={{gridTemplateColumns: '1fr 160px 140px 180px 120px',}}>
                					{/* File Name with Icon */}
                					<div className="flex items-center gap-3 min-w-0">
                  						<div className="flex items-center justify-center flex-shrink-0 rounded-lg w-9 h-9 bg-gray-100 dark:bg-gray-700">
                    						<file.icon className="text-gray-600 dark:text-gray-400"
                      							size={16} 
                      							strokeWidth={1.5} />
                  						</div>
                  						<span className="text-[14px] font-medium truncate text-gray-900 dark:text-gray-100">
                    						{file.name}
                  						</span>
                					</div>

                					{/* Type */}
                					<div className="text-[13px] text-gray-600 dark:text-gray-400">
                  						{file.type}
                					</div>

                					{/* Size */}
                					<div className="text-[13px] text-gray-600 dark:text-gray-400">
                  						{file.size}
                					</div>

                					{/* Modified */}
                					<div className="text-[13px] text-gray-600 dark:text-gray-400">
                  						{file.modified}
                					</div>

                					{/* Actions */}
                					<div className="flex items-center justify-center gap-1">
                  						<button className="p-2 transition-colors rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-50">
                    						<Download size={14} strokeWidth={1.5} />
                  						</button>
                  						<button className="p-2 transition-colors rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-50">
                    						<Share2 size={14} strokeWidth={1.5} />
                  						</button>
                  						<button className="p-2 transition-colors rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-50">
                    						<Trash2 size={14} strokeWidth={1.5} />
                  						</button>
                					</div>
              					</div>
            				))}
          				</div>
        			</div>

        			{/* Mobile Card Layout */}
        			<div className="md:hidden border-t border-gray-200 dark:border-gray-700">
          				{recentFiles.map((file, index) => (
            			<div className={`px-6 py-5 ${index !== recentFiles.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''}`}
              				key={index}  >
              				{/* 파일명과 아이콘 */}
              				<div className="flex items-start gap-3 mb-3">
                				<div className="flex items-center justify-center flex-shrink-0 rounded-lg w-10 h-10 bg-gray-100 dark:bg-gray-700">
                  					<file.icon className="text-gray-600 dark:text-gray-400"
                    					size={18} 
                    					strokeWidth={1.5} />
                				</div>
                				<div className="flex-1 min-w-0">
                  					<div className="text-[14px] font-medium mb-1 break-words text-gray-900 dark:text-gray-100">
                    					{file.name}
                  					</div>
                  					<div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
                    					<span>{file.type}</span>
                    					<span>•</span>
                    					<span>{file.size}</span>
                  					</div>
                				</div>
              				</div>

              				{/* 수정일과 액션 버튼 */}
              				<div className="flex items-center justify-between pl-13">
                				<div className="text-xs text-gray-600 dark:text-gray-400">
                  					{file.modified}
                				</div>
                				<div className="flex items-center gap-1">
                  					<button className="p-2 transition-colors rounded-md text-gray-600 dark:text-gray-400">
                    					<Download size={16} strokeWidth={1.5} />
                  					</button>
                  					<button className="p-2 transition-colors rounded-md text-gray-600 dark:text-gray-400">
                    					<Share2 size={16} strokeWidth={1.5} />
                  					</button>
                  					<button className="p-2 transition-colors rounded-md text-gray-600 dark:text-gray-400">
                    					<Trash2 size={16} strokeWidth={1.5} />
                  					</button>
                				</div>
              				</div>
            			</div>
          			))}
        		</div>
      		</div>
		</div>
	);
}