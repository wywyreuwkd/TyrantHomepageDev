import type { Metadata } from "next";
import React from "react";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";

import { HeroSection } from "@/components/section/HeroSection";
import { PaybackImageSection } from "@/components/section/PaybackImageSection";
import { BrandPriceSection } from "@/components/section/BrandPriceSection";
import { PaybackExplainSection } from "@/components/section/PaybackExplainSection";
import { ServiceFeaturesSection } from "@/components/section/ServiceFeaturesSection";
import { LongTermRentalSection } from "@/components/section/LongTermRentalSection";
import { LeaseAdvantagesSection } from "@/components/section/LeaseAdvantagesSection";
import { HonestPromiseSection } from "@/components/section/HonestPromiseSection";
import { LiveConsultSection } from "@/components/section/LiveConsultSection";
import { RealReviewSection } from "@/components/section/RealReviewSection";
import { FaqSection } from "@/components/section/FaqSection";
import { ContactBannerSection } from "@/components/section/ContactBannerSection";
import { ContactZoneSection } from "@/components/section/ContactZoneSection";
import { ScrollToTopButton } from "@/components/shared/ScrollToTopButton";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "메인 | 대한민카",
  description: "대한민카 메인 페이지",
};

export default function Main() {

	const isModalOpen: boolean = false

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<HeroSection />

			{/* Payback Image Section */}
			<PaybackImageSection />

			{/* Brand Price Section */}
			<BrandPriceSection />

			{/* Payback Explain Section */}
			<PaybackExplainSection />

			{/* Service Features Section */}
      <ServiceFeaturesSection />

      {/* Long Term Rental Section */}
      <LongTermRentalSection />

      {/* Lease Advantages Section */}
      <LeaseAdvantagesSection />

      {/* Honest Promise Section */}
      <HonestPromiseSection />

      {/* Live Consult Section */}
      <LiveConsultSection />

      {/* Real Review Section */}
      <RealReviewSection />

      {/* Faq Section */}
      <FaqSection />

      {/* Contact Banner Section */}
      <ContactBannerSection />

      {/* 상담신청, 전화걸기, 카카오톡상담신청 버튼 모음 */}
      <ContactZoneSection />

      {/* Scroll To Top Button */}
      <ScrollToTopButton />

      {/* Footer */}
      <Footer />
		</div>
	)
}