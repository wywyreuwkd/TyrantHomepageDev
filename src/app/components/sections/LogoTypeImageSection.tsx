"use client"

import dontsGuideNew from "@public/company/ci/7ed3f2f69c3b77ba85b362b583a0773b3bd45d4d.png";
import { ImageWithFallback } from "@components/shared/ImageWithFallback";
import { ImageLightbox } from "@components/shared/ImageLightbox";
import { useState } from "react";
import { ZoomIn } from "lucide-react";

export function LogoTypeImageSection() {
	const [lightboxImage, setLightboxImage] = useState<string | null>(null);

	return (
		<div>
			{/* Logotype Don'ts 섹션 */}
      		<section className="bg-white pt-[60px] pb-[60px] px-5 md:pt-[120px] md:pb-[120px] md:px-6">
        		<div className="max-w-[1280px] mx-auto px-5 md:px-10">
          			{/* 상단 가로선 */}
          			<div className="w-full h-px bg-[#D1D5DB] mb-10 md:mb-20" />

          			<div className="relative">
            			{/* 세로선 */}
            			<div className="md:absolute md:left-[calc(280px+24px)] md:top-[-80px] md:bottom-[-340px] md:w-px md:bg-[#D1D5DB] md:pointer-events-none md:z-[1]" />

            			<div className="flex flex-col gap-8 md:flex-row md:gap-20 items-start relative z-[2]">
              				{/* 왼쪽: 고정 폭 텍스트 컬럼 */}
              				<div className="w-full md:w-[280px] shrink-0">
                				<h2 className="text-[32px] mb-6 md:text-[60px] md:mb-20 font-bold text-[#0E1C45] text-left leading-[1.2] w-full">
                  					Logotype;<br/>Don'ts
                				</h2>
                
                				<p className="text-[15px] leading-[1.7] md:text-lg md:leading-[1.8] text-[#4B5563] text-left w-full m-0">
                  					로고는 항상 정확한 정체성을 유지 해야 하기 때문에 어떠한 변형도 금하며, 이는 어떠한 환경, 혹은 제한된 조건에서도 절대적으로 지켜져야 한다.
                				</p>
              				</div>

              				{/* 오른쪽: 이미지 */}
              				<div className="flex-1 sm:w-full sm:max-w-full">
                				<div className="relative">
                  					<ImageWithFallback src={dontsGuideNew.src} alt="Logotype Don'ts Guide" onClick={() => setLightboxImage(dontsGuideNew.src)} className="w-full h-auto block cursor-zoom-in"/>
                  					{/* 모바일 확대 힌트 아이콘 */}
                  					<div className="absolute bottom-4 right-4 bg-[rgba(14,28,69,0.8)] rounded-full w-10 h-10 flex items-center justify-center pointer-events-none">
                    					<ZoomIn size={20} className="text-white" />
                  					</div>
                				</div>
              				</div>
            			</div>
          			</div>
        		</div>
      		</section>

      		{/* Image Lightbox */}
      		{lightboxImage && (
        		<ImageLightbox src={lightboxImage} onClose={() => setLightboxImage(null)} />
      		)}
		</div>
	);
}