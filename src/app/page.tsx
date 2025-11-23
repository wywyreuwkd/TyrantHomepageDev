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
import { CompanyIntro } from "./pages/menu_company/CompanyIntro";
import { GroupCompanies } from "./pages/menu_company/GroupCompanies";
import { CompanyHistory } from "./pages/menu_company/CompanyHistory";
import { Partners } from "./pages/menu_company/Partners";
import { BusinessFS } from "./pages/menu_business/BusinessFS";
import { BusinessDevelopment } from "./pages/menu_business/BusinessDevelopment";
import { BusinessMaterials } from "./pages/menu_business/BusinessMaterials";
import { BusinessConstruction } from "./pages/menu_business/BusinessConstruction";
import { BusinessInvestment } from "./pages/menu_business/BusinessInvestment";
import { BusinessMonitoring } from "./pages/menu_business/BusinessMonitoring";
import { BusinessInsurance } from "./pages/menu_business/BusinessInsurance";
import { BusinessDueDiligence } from "./pages/menu_business/BusinessDueDiligence";
import { BusinessDataCenter } from "./pages/menu_business/BusinessDataCenter";
import { BusinessEducation } from "./pages/menu_business/BusinessEducation";
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
