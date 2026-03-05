import paybackExplainImage from "@public/7340937ce164279a427d21cdae406289ae94bb5d.png";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";

export function PaybackExplainSection() {
	return (
		<div className="flex justify-center items-center bg-white">
        	<div className="w-full max-w-[900px] relative px-4 md:px-0">
          		<ImageWithFallback src={ paybackExplainImage.src } alt="페이백 최소 20만원 최대 100만원 왜 페이백이 가능한가" className="w-full h-auto" />
        	</div>
      	</div>
	)
}