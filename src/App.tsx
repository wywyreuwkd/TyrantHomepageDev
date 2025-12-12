import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ServiceIntro } from "./components/ServiceIntro";
import { WhyNow } from "./components/WhyNow";
import { RevenueComparison } from "./components/RevenueComparison";
import { Process } from "./components/Process";
import { Partners } from "./components/Partners";
import { Footer } from "./components/Footer";
import { ScrollReveal } from "./components/ScrollReveal";

// Pages
import { CompanyIntro } from "./pages/CompanyIntro";
import { GroupCompanies } from "./pages/GroupCompanies";
import { CompanyHistory } from "./pages/CompanyHistory";
import { Partners as PartnersPage } from "./pages/Partners";
import { CoreTeam } from "./pages/CoreTeam";
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
import SolaroRoof from "./pages/SolaroRoof";
import { SolaroGround } from "./pages/SolaroGround";
import { SolaroLogistics } from "./pages/SolaroLogistics";
import { SolaroWater } from "./pages/SolaroWater";
import { SolaroParking } from "./pages/SolaroParking";
import { SolaroMonitoring } from "./pages/SolaroMonitoring";
import { SolaroFAQ } from "./pages/SolaroFAQ";
import { PerformanceMap } from "./pages/PerformanceMap";
import { PerformanceTable } from "./pages/PerformanceTable";
import { Location } from "./pages/Location";
import { Sitemap } from "./pages/Sitemap";
import { RelatedSites } from "./pages/RelatedSites";
import { MonitoringGenerationTime } from "./pages/MonitoringGenerationTime";
import { MonitoringBalance } from "./pages/MonitoringBalance";
import { MonitoringManagementReport } from "./pages/MonitoringManagementReport";
import { MonitoringFinancialReport } from "./pages/MonitoringFinancialReport";
import { InquirySolar } from "./pages/InquirySolar";
import { InquiryMaterials } from "./pages/InquiryMaterials";
import { InquiryFS } from "./pages/InquiryFS";
import { InquiryDueDiligence } from "./pages/InquiryDueDiligence";
import { InquiryEducation } from "./pages/InquiryEducation";
import { InquiryOther } from "./pages/InquiryOther";
import { MemberSales } from "./pages/MemberSales";
import { MemberConstruction } from "./pages/MemberConstruction";
import { MemberPermit } from "./pages/MemberPermit";
import { MemberOffice } from "./pages/MemberOffice";
import { StyleGuide } from "./pages/StyleGuide";

type PageType = "home" | "company" | "group" | "core-team" | "media" | "history" | "recruit" | "pba" | "partners" | 
  "business-fs" | "business-development" | "business-materials" | 
  "business-construction" | "business-investment" | "business-monitoring" | 
  "business-insurance" | "business-duediligence" | "business-datacenter" | 
  "business-education" | "solaro-roof" | "solaro-ground" | "solaro-logistics" | 
  "solaro-water" | "solaro-parking" | "solaro-monitoring" | "solaro-faq" | 
  "performance-map" | "performance-table" | "location" | "sitemap" | "related-sites" |
  "monitoring-generation-time" | "monitoring-balance" | "monitoring-management-report" | 
  "monitoring-financial-report" | "inquiry-solar" | "inquiry-materials" | "inquiry-fs" |
  "inquiry-duediligence" | "inquiry-education" | "inquiry-other" | "member-sales" | "member-construction" | "member-permit" | "member-office" | "style-guide";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Hero />
            <ScrollReveal>
              <ServiceIntro />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <WhyNow />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <RevenueComparison />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Process />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Partners />
            </ScrollReveal>
          </>
        );
      case "company":
        return <CompanyIntro onNavigate={handleNavigate} currentPage={currentPage} />;
      case "group":
        return <GroupCompanies onNavigate={handleNavigate} currentPage={currentPage} />;
      case "core-team":
        return <CoreTeam onNavigate={handleNavigate} currentPage={currentPage} />;
      case "history":
        return <CompanyHistory onNavigate={handleNavigate} currentPage={currentPage} />;
      case "partners":
        return <PartnersPage onNavigate={handleNavigate} currentPage={currentPage} />;
      case "business-fs":
        return <BusinessFS onNavigate={handleNavigate} currentPage={currentPage} />;
      case "business-development":
        return <BusinessDevelopment onNavigate={handleNavigate} currentPage={currentPage} />;
      case "business-materials":
        return <BusinessMaterials onNavigate={handleNavigate} currentPage={currentPage} />;
      case "business-construction":
        return <BusinessConstruction onNavigate={handleNavigate} currentPage={currentPage} />;
      case "business-investment":
        return <BusinessInvestment onNavigate={handleNavigate} currentPage={currentPage} />;
      case "business-monitoring":
        return <BusinessMonitoring onNavigate={handleNavigate} currentPage={currentPage} />;
      case "business-insurance":
        return <BusinessInsurance onNavigate={handleNavigate} currentPage={currentPage} />;
      case "business-duediligence":
        return <BusinessDueDiligence onNavigate={handleNavigate} currentPage={currentPage} />;
      case "business-datacenter":
        return <BusinessDataCenter onNavigate={handleNavigate} currentPage={currentPage} />;
      case "business-education":
        return <BusinessEducation onNavigate={handleNavigate} currentPage={currentPage} />;
      case "solaro-roof":
        return <SolaroRoof />;
      case "solaro-ground":
        return <SolaroGround />;
      case "solaro-logistics":
        return <SolaroLogistics />;
      case "solaro-water":
        return <SolaroWater />;
      case "solaro-parking":
        return <SolaroParking />;
      case "solaro-monitoring":
        return <SolaroMonitoring />;
      case "solaro-faq":
        return <SolaroFAQ />;
      case "performance-map":
        return <PerformanceMap />;
      case "performance-table":
        return <PerformanceTable />;
      case "location":
        return <Location onNavigate={handleNavigate} currentPage={currentPage} />;
      case "sitemap":
        return <Sitemap onNavigate={handleNavigate} currentPage={currentPage} />;
      case "related-sites":
        return <RelatedSites onNavigate={handleNavigate} currentPage={currentPage} />;
      case "monitoring-generation-time":
        return <MonitoringGenerationTime />;
      case "monitoring-balance":
        return <MonitoringBalance />;
      case "monitoring-management-report":
        return <MonitoringManagementReport />;
      case "monitoring-financial-report":
        return <MonitoringFinancialReport />;
      case "inquiry-solar":
        return <InquirySolar />;
      case "inquiry-materials":
        return <InquiryMaterials />;
      case "inquiry-fs":
        return <InquiryFS />;
      case "inquiry-duediligence":
        return <InquiryDueDiligence />;
      case "inquiry-education":
        return <InquiryEducation />;
      case "inquiry-other":
        return <InquiryOther />;
      case "member-sales":
        return <MemberSales />;
      case "member-construction":
        return <MemberConstruction />;
      case "member-permit":
        return <MemberPermit />;
      case "member-office":
        return <MemberOffice />;
      case "style-guide":
        return <StyleGuide onNavigate={handleNavigate} currentPage={currentPage} />;
      default:
        return (
          <>
            <Hero />
            <ScrollReveal>
              <ServiceIntro />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <WhyNow />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <RevenueComparison />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Process />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Partners />
            </ScrollReveal>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}