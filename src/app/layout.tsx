import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from 'react'
import { Header } from "@components/layout/Header";
import { Footer } from "@components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "조&김",
    template: "%s | 조&김",
  },
  description: "",
  keywords: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>      
        <Suspense>  
        <Header />
        <main>{children}</main>
        <Footer />
      </Suspense>
      </body>
    </html>
  );
}
