import paybackImage from "@public/8c0c2ce4d64667f794d93f1b6b449bf62ff757bd.png";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";

export function PaybackImageSection() {
	return (
		<div className="flex justify-center items-center bg-white">
        	<div className="w-full max-w-[900px] relative px-4 md:px-0">
          		<ImageWithFallback src={paybackImage.src} alt="장기렌트 리스 대한민카에서 약속드립니다" className="w-full h-auto" />
        	</div>
      	</div>
	)
}