import longTermRentalImage from "@public/3d29f37fa3c244fbe28d449691a661afe9fb468f.png";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";

export function LongTermRentalSection() {
	return (
		<div className="flex justify-center items-center bg-white">
        	<div className="w-full max-w-[900px] px-4 md:px-0">
          		<ImageWithFallback src={longTermRentalImage.src} alt="장기렌트카 안내" className="w-full h-auto" />
        	</div>
      	</div>
	)
}