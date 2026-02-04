import type { Metadata } from "next";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Images | 타이런트 - 관리자",
  description: "타이런트 관리자 Images 페이지",
};

export default function Images() {
  
  return (
    <div className="contents-layout">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="contents-title font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Images
          </h1>
          <p className="contents-sub-title mt-2 text-gray-600 dark:text-gray-400">
            시각적 콘텐츠를 표시하는 이미지 컴포넌트
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
            Images
          </span>
        </nav>
      </div>

      {/* Group 1. Default Image */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          1. Default Image
        </h2>
        <p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          16:9 비율, 테두리만 적용, 그림자 없음
        </p>
        
        <div className="grid grid-cols-2 gap-6">
          {/* Image 1 */}
          <div>
            <img className="w-full aspect-video object-cover rounded-xl border border-gray-300"
              src="https://images.unsplash.com/photo-1700451761308-ec56f93c82be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBkZXNrJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NzkwODM2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Office Desk Workspace"/>
          </div>

          {/* Image 2 */}
          <div>
            <img className="w-full aspect-video object-cover rounded-xl border border-gray-300"
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njc5MTQ0MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Modern Office Interior" />
          </div>
        </div>
      </div>

      {/* Group 2. Image with Caption */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          2. Image with Caption
        </h2>
        <p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          설명 텍스트가 포함된 이미지
        </p>
        
        <div className="grid grid-cols-3 gap-6">
          {/* Image 1 with Caption */}
          <div>
            <img className="w-full aspect-video object-cover rounded-xl border border-gray-300 mb-3"
              src="https://images.unsplash.com/photo-1588084580191-db8604397b3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3JrcGxhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc2NzkzNTE2NXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Office Workplace" />
            <p className="text-[13px] text-gray-500 text-center leading-[1.5]">
              업무 환경 사무실
            </p>
          </div>

          {/* Image 2 with Caption */}
          <div>
            <img className="w-full aspect-video object-cover rounded-xl border border-gray-300 mb-3"
              src="https://images.unsplash.com/photo-1571624436279-b272aff752b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBtZWV0aW5nJTIwcm9vbXxlbnwxfHx8fDE3Njc4NTMyODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Meeting Room" />
            <p className="text-[13px] text-gray-500 text-center leading-[1.5]">
              회의실 공간
            </p>
          </div>

          {/* Image 3 with Caption */}
          <div>
            <img className="w-full aspect-video object-cover rounded-xl border border-gray-300 mb-3"
              src="https://images.unsplash.com/photo-1686100508812-c38b3593b301?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBzcGFjZXxlbnwxfHx8fDE3Njc4MjQ2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Corporate Office"/>
            <p className="text-[13px] text-gray-500 text-center leading-[1.5]">
              협업 공간 구성
            </p>
          </div>
        </div>
      </div>

      {/* Group 3. Placeholder Image */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          3. Placeholder Image
        </h2>
        <p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          이미지 업로드 전 플레이스홀더
        </p>
        
        <div className="grid grid-cols-3 gap-6">
          {/* Placeholder 1 */}
          <div className="w-full aspect-video border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center bg-gray-50 dark:bg-gray-800">
            <span className="text-sm font-medium text-gray-400 dark:text-gray-500">
              No Image
            </span>
          </div>

          {/* Placeholder 2 */}
          <div className="w-full aspect-video border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center bg-gray-50 dark:bg-gray-800">
            <span className="text-sm font-medium text-gray-400 dark:text-gray-500">
              Drag & Drop Image
            </span>
          </div>

          {/* Placeholder 3 */}
          <div className="w-full aspect-video border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center bg-gray-50 dark:bg-gray-800">
            <span className="text-sm font-medium text-gray-400 dark:text-gray-500">
              Upload Image
            </span>
          </div>
        </div>
      </div>

      {/* Group 4. Image Sizes */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          4. Image Sizes
        </h2>
        <p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          다양한 비율의 이미지
        </p>
        
        <div className="grid grid-cols-3 gap-6">
          {/* Square 1:1 */}
          <div>
            <img className="w-full aspect-square object-cover rounded-xl border border-gray-300 mb-2"
              src="https://images.unsplash.com/photo-1700451761308-ec56f93c82be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBkZXNrJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NzkwODM2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Square Image" />
            <p className="text-xs text-gray-400 text-center">
              Square (1:1)
            </p>
          </div>

          {/* Portrait 3:4 */}
          <div>
            <img className="w-full aspect-[3/4] object-cover rounded-xl border border-gray-300 mb-2"
              src="https://images.unsplash.com/photo-1601307131573-12f1b94f68fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3Njc4NzMzOTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Portrait Image" />
            <p className="text-xs text-gray-400 text-center">
              Portrait (3:4)
            </p>
          </div>

          {/* Landscape 4:3 */}
          <div>
            <img className="w-full aspect-[4/3] object-cover rounded-xl border border-gray-300 mb-2"
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njc5MTQ0MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Landscape Image" />
            <p className="text-xs text-gray-400 text-center">
              Landscape (4:3)
            </p>
          </div>
        </div>
      </div>

      {/* Design Specifications */}
      <div className="mb-12">
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-6">
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 mb-4">
            Design Specifications
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Default Image</h4>
              <ul className="text-[13px] leading-[1.8] text-gray-600 dark:text-gray-400 pl-5">
                <li>Aspect Ratio: 16:9 (권장)</li>
                <li>Border Radius: 12px</li>
                <li>Border: 1px solid #E5EAF2</li>
                <li>Shadow: None</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Caption</h4>
              <ul className="text-[13px] leading-[1.8] text-gray-600 dark:text-gray-400 pl-5">
                <li>Font Size: 13px</li>
                <li>Color: #64748B</li>
                <li>Alignment: Center</li>
                <li>Margin Top: 12px</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Placeholder</h4>
              <ul className="text-[13px] leading-[1.8] text-gray-600 dark:text-gray-400 pl-5">
                <li>Border: 2px dashed #E5EAF2</li>
                <li>Background: #F8FAFC</li>
                <li>Text Only (No Icon)</li>
                <li>Text Color: #94A3B8</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Image Sizes</h4>
              <ul className="text-[13px] leading-[1.8] text-gray-600 dark:text-gray-400 pl-5">
                <li>Square: 1:1 비율</li>
                <li>Portrait: 3:4 비율</li>
                <li>Landscape: 4:3 비율</li>
                <li>Wide: 16:9 비율 (기본)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="mb-12">
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] p-6">
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 mb-4">
            Usage Guidelines
          </h3>
          <ul className="text-sm leading-8 text-gray-600 dark:text-gray-400 pl-5">
            <li>B2B SaaS는 이미지보다 정보 전달 우선</li>
            <li>Media-Free Card로 텍스트만 사용 권장</li>
            <li>이미지 사용 시 16:9 비율 유지</li>
            <li>Placeholder는 업로드 상태 명확히 표시</li>
            <li>Caption은 필수 정보만 간결하게 작성</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
