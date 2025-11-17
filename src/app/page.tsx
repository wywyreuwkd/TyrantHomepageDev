"use client"

import Image from "next/image";
import styles from "./page.module.css";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ServiceIntro } from "./components/ServiceIntro";
import { Process } from "./components/Process";
import { RevenueComparison } from "./components/RevenueComparison";
import { WhyNow } from "./components/WhyNow";
import { Footer } from "./components/Footer";
import { CompanyIntro } from "./pages/CompanyIntro";
import { GroupCompanies } from "./pages/GroupCompanies";
import { CompanyHistory } from "./pages/CompanyHistory";
import { Partners } from "./pages/Partners";
import { BusinessFS } from "./pages/BusinessFS";
import { BusinessDevelopment } from "./pages/BusinessDevelopment";
import { BusinessMaterials } from "./pages/BusinessMaterials";
import { BusinessConstruction } from "./pages/BusinessConstruction";
import { BusinessInvestment } from "./pages/BusinessInvestment";
import { BusinessMonitoring } from "./pages/BusinessMonitoring";
import { BusinessInsurance } from "./pages/BusinessInsurance";
import { BusinessDueDiligence } from "./pages/BusinessDueDiligence";
import { BusinessDataCenter } from "./pages/BusinessDataCenter";
import { BusinessEducation } from "./pages/BusinessEducation";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<
    "home" | "company" | "group" | "history" | "partners" | 
    "business-fs" | "business-development" | "business-materials" | 
    "business-construction" | "business-investment" | "business-monitoring" | 
    "business-insurance" | "business-duediligence" | "business-datacenter" | 
    "business-education"
  >("home");

  return (
    <div className="min-h-screen bg-[#0F214A] text-white" style={{ margin: 0, padding: 0 }}>
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main style={{ margin: 0, padding: 0 }}>
        {currentPage === "home" ? (
          <>
            <Hero />
            <ServiceIntro />
            <Process />
            <RevenueComparison />
            <WhyNow />
          </>
        ) : currentPage === "company" ? (
          <CompanyIntro />
        ) : currentPage === "group" ? (
          <GroupCompanies />
        ) : currentPage === "history" ? (
          <CompanyHistory />
        ) : currentPage === "partners" ? (
          <Partners />
        ) : currentPage === "business-fs" ? (
          <BusinessFS />
        ) : currentPage === "business-development" ? (
          <BusinessDevelopment />
        ) : currentPage === "business-materials" ? (
          <BusinessMaterials />
        ) : currentPage === "business-construction" ? (
          <BusinessConstruction />
        ) : currentPage === "business-investment" ? (
          <BusinessInvestment />
        ) : currentPage === "business-monitoring" ? (
          <BusinessMonitoring />
        ) : currentPage === "business-insurance" ? (
          <BusinessInsurance />
        ) : currentPage === "business-duediligence" ? (
          <BusinessDueDiligence />
        ) : currentPage === "business-datacenter" ? (
          <BusinessDataCenter />
        ) : currentPage === "business-education" ? (
          <BusinessEducation />
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
