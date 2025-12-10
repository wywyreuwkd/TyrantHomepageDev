import Image from "next/image";
import bannerImage1 from "@public/solar/74cf3afa41bb41f1df4938acec7434f597ec134f.png";
import bannerImage2 from "@public/solar/21aa87c53bd02a38047b0c82cf3aa0b48a855dfb.png";
import bannerImage3 from "@public/solar/9fe22ff3270d58925c6d3ca570843bfdb7e979d2.png";
import { SolarOLogo } from "@components/shared/SolarOLogo";

const slides = [
  {
    image: bannerImage1,
  },
  {
    image: bannerImage2,
  },
  {
    image: bannerImage3,
  },
];

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden h-screen m-0 p-0 top-0">
      {/* CSS 애니메이션을 사용한 자동 슬라이드 */}
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="hero-slide absolute inset-0"
            style={{
              animationDelay: `${index * 3}s`,
            }}
          >
            {/* Background Image */}
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={`Hero banner ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
            
            {/* Black Overlay for readability */}
            <div className="absolute inset-0 bg-black/35" />
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto px-6 md:px-10 w-full max-w-[1280px]">
          {/* SOLAR O Logo - Left Side */}
          <div className="z-10">
            <div className="mb-8 drop-shadow-2xl">
              <SolarOLogo size="large" />
            </div>
            
            {/* Text below logo */}
            <div className="space-y-3">
              <p className="color-white text-2xl drop-shadow-lg leading-[140%]">
                산업단지/물류센터 수익공유형
              </p>
              <p className="color-white text-2xl drop-shadow-lg leading-[140%]">
                태양광 무상설치 프로젝트 <span className="color-accent font-bold">솔라오</span>
              </p>
              
              {/* Start button */}
              <div className="mt-8 pt-4">
                <button 
                  className="bg-accent color-white hover:bg-accent-90 transition-all hover:scale-105 py-4 px-12 rounded-2xl text-xl font-bold shadow-[0_8px_24px_rgba(255,107,61,0.4)]"
                >
                  시작하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            className="hero-indicator h-2 rounded-full transition-all w-2 bg-white/50"
            style={{
              animationDelay: `${index * 3}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}