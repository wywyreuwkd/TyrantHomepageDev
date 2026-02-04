import type { Metadata } from "next";
import { WorkFlowSection } from "@/components/section/workflow/WorkFlowSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "주요 업무 흐름도 | 타이런트 - 관리자",
  description: "타이런트 관리자 주요 업무 흐름도 페이지",
};

export default function WorkFlow() {
  return(
    // 주요 업무 흐름도 페이지는 모바일과 데스크탑을 
    // 각각 따로 출력하기 때문에 별도 섹션으로 분리
    <WorkFlowSection />  
  );
}
