import type { Metadata } from "next";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Videos | 타이런트 - 관리자",
  description: "타이런트 관리자 Videos 페이지",
};

export default function Videos() {
  
  return (
    <div className="contents-layout">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="contents-title font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Videos
          </h1>
          <p className="contents-sub-title mt-2 text-gray-600 dark:text-gray-400">
            다양한 비율과 스타일의 비디오 플레이어
          </p>
        </div>

        {/* Breadcrumb - PC만 표시 */}
        <nav className="hidden md:flex items-center gap-2 flex-shrink-0">
          <Link href="/main">
            <div className="flex items-center gap-1.5 cursor-pointer">
              <Home className="text-gray-400 dark:text-gray-600"
                size={14}/>
              <span className="contents-breadcrumb font-medium whitespace-nowrap text-gray-600 dark:text-gray-400">
                홈
              </span>
            </div>
          </Link>
          <ChevronRight size={12} className="text-gray-300 dark:text-gray-600" />
          <span className="contents-breadcrumb font-medium whitespace-nowrap text-gray-600 dark:text-gray-400">
            UI Elements
          </span>
          <ChevronRight size={12} className="text-gray-300 dark:text-gray-600" />
          <span className="contents-breadcrumb font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">
            Videos
          </span>
        </nav>
      </div>

      {/* Standard Video (16:9) */}
      <div className="mb-6 p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px]">
        <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 mb-4">
          표준 비디오 (16:9)
        </h3>
        <div className="relative w-full pb-[56.25%] bg-black rounded-lg overflow-hidden">
          <video className="absolute top-0 left-0 w-full h-full object-contain"
            controls >
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Video Aspect Ratios */}
      <div className="mb-6 p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px]">
        <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 mb-4">
          다양한 비율
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
          {/* 16:9 */}
          <div>
            <div className="text-[13px] font-medium text-gray-600 dark:text-gray-400 mb-2">
              16:9 (와이드)
            </div>
            <div className="relative w-full pb-[56.25%] bg-black rounded-md overflow-hidden">
              <video className="absolute top-0 left-0 w-full h-full object-contain"
                controls >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* 4:3 */}
          <div>
            <div className="text-[13px] font-medium text-gray-600 dark:text-gray-400 mb-2">
              4:3 (클래식)
            </div>
            <div className="relative w-full pb-[75%] bg-black rounded-md overflow-hidden">
              <video className="absolute top-0 left-0 w-full h-full object-contain"
                controls >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* 1:1 */}
          <div>
            <div className="text-[13px] font-medium text-gray-600 dark:text-gray-400 mb-2">
              1:1 (정사각형)
            </div>
            <div className="relative w-full pb-[100%] bg-black rounded-md overflow-hidden">
              <video className="absolute top-0 left-0 w-full h-full object-cover"
                controls >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Video Grid */}
      <div className="mb-6 p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px]">
        <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 mb-4">
          비디오 그리드
        </h3>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
          {[
            { title: '샘플 비디오 1', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4' },
            { title: '샘플 비디오 2', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4' },
            { title: '샘플 비디오 3', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4' },
            { title: '샘플 비디오 4', src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4' }
          ].map((video, index) => (
            <div key={index}>
              <div className="relative w-full pb-[56.25%] bg-black rounded-md overflow-hidden mb-2">
                <video className="absolute top-0 left-0 w-full h-full object-contain"
                  controls >
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>
              <div className="text-sm font-medium text-gray-900 dark:text-gray-50">
                {video.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Video */}
      <div className="p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px]">
        <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 mb-4">
          반응형 비디오
        </h3>
        <div className="max-w-[800px]">
          <div className="relative w-full pb-[56.25%] bg-black rounded-lg overflow-hidden">
            <video className="absolute top-0 left-0 w-full h-full object-contain"
              controls >
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-[13px] text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
            비디오는 컨테이너 너비에 맞춰 자동으로 크기가 조정됩니다. 16:9 비율을 유지하며 반응형으로 동작합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
