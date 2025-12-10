import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@components/layout/Header";
import { Footer } from "@components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "타이런트 - 태양광 전문 기업",
    template: "%s | 타이런트",
  },
  description: "태양광 발전 전문 기업 타이런트. 수익공유형 무상설치 모델을 통해 기업과 함께 성장하며 탄소중립 사회 실현에 기여합니다.",
  keywords: ["태양광", "태양광 발전", "무상설치", "수익공유", "탄소중립", "재생에너지"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
