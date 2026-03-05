import brandPriceImage from "@public/8108951333e01bd41a1958f6f419e62e6e967f24.png";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";

export function BrandPriceSection() {
  return (
    <div className="flex justify-center items-center bg-white">
      <div className="w-full max-w-[900px] relative px-4 md:px-0">
        <ImageWithFallback src={brandPriceImage.src} alt="업계 최초! 계약시 페이백 혜택 제공" className="w-full h-auto"/>
      </div>
    </div>
  )
}