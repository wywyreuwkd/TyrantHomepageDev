import type { Metadata } from "next";
import React from "react";
import { OfficersSection } from "@/components/section/OfficersSection"

export const metadata: Metadata = {
  title: "운영진소개 | 마포구 골프 협회",
  description: "마포구 골프 협회 운영진소개 페이지",
};

export default function Officers() {
  return (
    <div className="relative">   
      
      {/* 운영진 소개 섹션 */}
      <OfficersSection />

    </div>
  );
}
