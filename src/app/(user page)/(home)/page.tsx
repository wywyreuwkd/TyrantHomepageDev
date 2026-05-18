import type { Metadata } from "next";
import React from "react";

import { MainHeroSection } from "@/components/section/MainHeroSection"
import { MainDescriptionSection } from "@/components/section/MainDescriptionSection"
import { MainGallerySection } from "@/components/section/MainGallerySection"
import { MainPartnersSection } from "@/components/section/MainPartnersSection"

export const metadata: Metadata = {
  title: "협회소개 | 마포구 골프 협회",
  description: "마포구 골프 협회 협회소개 페이지",
};

export default function Home() {
  return (
    <div className="relative">   
      
      {/* 메인 이미지 섹션 */}
      <section className="relative h-screen overflow-hidden">       
        <MainHeroSection />      
      </section>

      {/* 메인 소개 섹션 */}
      <section className="py-24 px-6 lg:px-12 bg-[var(--bg-main)]">
        <MainDescriptionSection />
      </section>

      {/* 메인 갤러리 섹션 */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-[var(--bg-main)] to-white">
        <MainGallerySection />
      </section>

      {/* 메인 협력사 섹션 */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <MainPartnersSection />
      </section>
    </div>
  );
}
