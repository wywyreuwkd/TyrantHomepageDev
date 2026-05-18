import type { Metadata } from "next";
import React from "react";
import { CalendarSection } from "@/components/section/CalendarSection"

export const metadata: Metadata = {
  title: "일정캘린더 | 마포구 골프 협회",
  description: "마포구 골프 협회 일정캘린더 페이지",
};

export default function Calendar() {
  return (
    <div className="relative">   
      
      {/* 캘린더 섹션 */}
      <CalendarSection />

    </div>
  );
}
