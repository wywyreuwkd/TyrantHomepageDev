import type { Metadata } from "next";
import React from "react";
import { GallerySection } from "@/components/section/GallerySection"

export const metadata: Metadata = {
  title: "포토갤러리 | 마포구 골프 협회",
  description: "마포구 골프 협회 포토갤러리 페이지",
};

export default function Gallery() {
  return (
    <div className="relative">   
      
      {/* 메인 이미지 섹션 */}
      <GallerySection />

    </div>
  );
}
