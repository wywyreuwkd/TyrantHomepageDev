import type { Metadata } from "next";
import Link from "next/link";
import { ChatSection } from "@/components/section/chat/ChatSection";

export const metadata: Metadata = {
  title: "채팅 목록 | 타이런트 - 관리자",
  description: "타이런트 관리자 채팅 목록 페이지",
};

export default function ChatList() {
  
  return (
    <div className="flex h-full bg-gray-50 dark:bg-slate-900">
      
      {/* Chat 섹션 */}
      <ChatSection />
    </div>
  );
}
