import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2025 새해 인사 | 타이런트",
  description: "타이런트가 전하는 2025년 새해 인사입니다. 활용신원 개창정래 - 새로운 에너지로 깨끗한 미래를 열어갑니다.",
};

export default function GreetingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}



