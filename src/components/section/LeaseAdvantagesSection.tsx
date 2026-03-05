import leaseAdvantagesImage from "@public/8b973e9b2d937577e50e4f0a36ade51c3d2fc3d5.png";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";

export function LeaseAdvantagesSection() {
	return (
		<div className="flex justify-center items-center bg-white">
        	<div className="w-full max-w-[900px] px-4 md:px-0">
          		<ImageWithFallback src={leaseAdvantagesImage.src} alt="리스·구매의 장점 부담은 줄이고 혜택은 늘린다" className="w-full h-auto" />
        	</div>
      	</div>
	)
}