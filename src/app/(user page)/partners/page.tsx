import type { Metadata } from "next";
import React from "react";
import { PartnersSection } from "@/components/section/PartnersSection"

export const metadata: Metadata = {
  title: "참여협력사 | 마포구 골프 협회",
  description: "마포구 골프 협회 참여협력사 페이지",
};

export default function Partners() {
  return (
    <div className="relative">   
      
      {/* 참여 협력사 섹션 */}
      <PartnersSection />

    </div>
  );
}
