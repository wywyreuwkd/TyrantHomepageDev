"use client"

import logoColor from "@public/company/ci/interactive_logo_color.png";
import logoWhiteNew from "@public/company/ci/interactive_logo_white.png";
import { ImageWithFallback } from "@components/shared/ImageWithFallback";
import { Download, Sun, Moon } from "lucide-react";
import { useState } from "react";

export function InteractiveLogoFrame() {
	const [isDark, setIsDark] = useState(false);

	return(
		<section className="bg-white px-[1.5rem] flex justify-center md:px-[7.5rem]">
        	<div className="max-w m-0 m-auto w-full">          
				{/* CI Download 버튼 - 로고 프레임 위 오른쪽 정렬 */}
          		<div className="flex flex-col justify-end gap-3 mb-4 md:flex-row">            
            		{/* AI 다운로드 */}            
            		<button className="btn-download">
              			<Download size={18} />
              			AI 다운로드
            		</button>

            		<button className="btn-download">
              			<Download size={18} />
              			PDF 다운로드
            		</button>

            		<button className="btn-download">
              			<Download size={18} />
              			PNG 다운로드
            		</button>
          		</div>  

          		{/* 인터랙티브 로고 프레임 */}    
          		<div className="relative border-[0.063rem] border-solid border-gray-200 rounded-3xl py-[6.25rem] px-[3.75rem] min-h-[25rem] flex items-center justify-center mb-[3.75rem]"
            		style={{
              			background: isDark ? '#000000' : '#FFFFFF',
              			backgroundImage: isDark
                		? 'none'
                		: `
                  		linear-gradient(rgba(39, 59, 130, 0.15) 1px, transparent 1px),
                  		linear-gradient(90deg, rgba(39, 59, 130, 0.15) 1px, transparent 1px)
                		`,
              			backgroundSize: isDark ? 'auto' : '20px 20px',
              			transition: 'all 0.3s ease'
            		}}>
            		            	
            		{/* 해/달 토글 스위치 */}
            		<div className="absolute top-[1.5rem] right-[1.5rem] rounded-[6.25rem] p-[0.5rem] flex items-center gap-2 cursor-pointer"
              			onClick={() => setIsDark(!isDark)}
              			style={{
                			background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                			transition: 'all 0.3s ease'
              			}}>
              			<div className="w-8 h-8 rounded-[50%] flex items-center justify-center"
               				style={{
                  				background: isDark ? 'transparent' : '#FFFFFF',
                  				transition: 'all 0.3s ease',
                  				boxShadow: isDark ? 'none' : '0 2px 4px rgba(0,0,0,0.1)'
                			}}>
                			<Sun size={18} color={isDark ? '#999' : '#273b82'} />
              			</div>
              			<div className="w-8 h-8 rounded-[50%] flex items-center justify-center"
                			style={{
                  				background: isDark ? '#FFFFFF' : 'transparent',
                  				transition: 'all 0.3s ease',
                  				boxShadow: isDark ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
                			}}>
                			<Moon size={18} color={isDark ? '#273b82' : '#999'} />
              			</div>
            		</div>

            		{/* 로고 */}
            		<div className="w-full max-w-[28.125rem] flex items-center justify-center">
              			<ImageWithFallback className="w-full h-auto"
                			src={isDark ? logoWhiteNew.src : logoColor.src} 
                			alt="Interactive Logo" />
            		</div>
            	</div>                
          	</div>
		</section>
	)
}