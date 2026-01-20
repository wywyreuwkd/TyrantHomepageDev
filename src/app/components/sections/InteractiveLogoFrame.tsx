"use client"

import logoColor from "@public/company/ci/interactive_logo_color.png";
import logoWhiteNew from "@public/company/ci/interactive_logo_white.png";
import { ImageWithFallback } from "@components/shared/ImageWithFallback";
import { Download, Sun, Moon } from "lucide-react";
import { useState } from "react";
import React from "react";
import Link from "next/link";

export function InteractiveLogoFrame() {
	const [isDark, setIsDark] = useState(false);

	const logoBlueUrl = "/company/ci/Tyrant_Logomark_Blue.ai" // 다운로드 대상 파일은 public/company/ci 에 위치해야 함
	const logoBlueName = "Tyrant_Logomark_Blue.ai"

	const logoWhiteUrl = "/company/ci/Tyrant_Logomark_White.ai" // 다운로드 대상 파일은 public/company/ci 에 위치해야 함
	const logoWhiteName = "Tyrant_Logomark_White.ai"

	const brandGuideUrl = "/company/ci/Tyrant_revised.pdf" // 다운로드 대상 파일은 public/company/ci 에 위치해야 함
	const brandGuideName = "Tyrant_revised.pdf"

	return(
		<div>
			{/* 다운로드 섹션 제목 */}
            <h4 className="text-base font-bold text-[#1F2937] mb-4 text-left tracking-[0.05em] uppercase">
            	타이런트 로고 다운로드
            </h4>

			{/* CI Download 버튼 */}
            <div className="flex flex-col w-full mb-8 md:flex-row md:mb-10 justify-start gap-3">
              	{/* Logo Download - Blue */}
              	<Link href={logoBlueUrl} download={logoBlueName}>
              		<button className="bg-white text-[#0E1C45] border border-[#E5E7EB] rounded-xl px-6 py-[14px] text-sm justify-center w-full md:px-8 md:py-4 md:text-base font-semibold flex items-center gap-[10px] cursor-pointer transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:bg-[#0E1C45] hover:text-white hover:border-[#0E1C45] hover:shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
                		<Download size={18} />
                		Logo Download – Blue
              		</button>
              	</Link>

              	{/* Logo Download - White */}
              	<Link href={logoWhiteUrl} download={logoWhiteName}>
              		<button className="bg-white text-[#0E1C45] border border-[#E5E7EB] rounded-xl px-6 py-[14px] text-sm justify-center w-full md:px-8 md:py-4 md:text-base font-semibold flex items-center gap-[10px] cursor-pointer transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:bg-[#0E1C45] hover:text-white hover:border-[#0E1C45] hover:shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
                		<Download size={18} />
                		Logo Download – White
              		</button>
              	</Link>

              	{/* Tyrant Brand Guide */}
              	<Link href={brandGuideUrl} download={brandGuideName}>
              		<button className="bg-white text-[#0E1C45] border border-[#E5E7EB] rounded-xl px-6 py-[14px] text-sm justify-center w-full md:px-8 md:py-4 md:text-base font-semibold flex items-center gap-[10px] cursor-pointer transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:bg-[#0E1C45] hover:text-white hover:border-[#0E1C45] hover:shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
                		<Download size={18} />
                		Tyrant Brand Guide
              		</button>
              	</Link>
            </div>

            {/* 인터랙티브 로고 프레임 */}
            <div className={`relative border border-[#D1D5DB] rounded-none pt-10 pb-10 px-5 min-h-[250px] mb-10 md:pt-[100px] md:pb-[100px] md:px-[60px] md:min-h-[400px] md:mb-[60px] flex items-center justify-center transition-all duration-300 ${isDark ? 'bg-black' : 'bg-white'}`}>
              	{/* 해/달 토글 스위치 */}
              	<div onClick={() => setIsDark(!isDark)} className={`absolute top-6 right-6 rounded-[50px] p-2 flex items-center gap-2 cursor-pointer transition-all duration-300 ${isDark ? 'bg-white/10' : 'bg-black/5'}`}>
                	<div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isDark ? 'bg-transparent shadow-none' : 'bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)]'}`}>
                  		<Sun size={18} color={isDark ? '#999' : '#273b82'} />
                	</div>
                	<div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isDark ? 'bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)]' : 'bg-transparent shadow-none'}`}>
                  		<Moon size={18} color={isDark ? '#273b82' : '#999'} />
                	</div>
              	</div>

              	{/* 로고 */}
              	<div className="w-full max-w-[650px] flex items-center justify-center">
                	<ImageWithFallback src={isDark ? logoWhiteNew.src : logoColor.src} alt="타이런트 로고" className="w-full h-auto"/>
              	</div>
            </div>
		</div>
	);
}