import honestPromiseImage from "@public/49fceec97d48305c3eabd87cd38d10de438bb4b7.png";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";

export function HonestPromiseSection() {
	return (
		<div className="flex justify-center items-center bg-white">
        	<div className="w-full max-w-[900px] px-4 md:px-0">
          		<ImageWithFallback src={honestPromiseImage.src} alt="합리적이고 정직한 대한민카의 고객을 위한 약속" className="w-full h-auto" />
        	</div>
      	</div>
	)
}