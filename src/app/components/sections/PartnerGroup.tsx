"use client"

import hdesLogo from "@public/company/partners/b09cca86e58d1502e59d66877830d4090f4455ef.png";
import wonpickLogo from "@public/company/partners/7a5a8166f4e70a4a61fac46d2d3d97f466ea6864.png";
import elmetechLogo from "@public/company/partners/55473facab290ca12d13d2812c5df43138723236.png";
import locktonLogo from "@public/company/partners/123964a7931e1c9f41a8ca2dc7a91ee43cc4b4e4.png";
import egiLogo from "@public/company/partners/195b3538f0b26dd92c332fa07bf59e0607bf7757.png";
import earthEcoLogo from "@public/company/partners/d48a11296227c2f6904fb5cbb359d5d6e9316d55.png";
import hangangLogo from "@public/company/partners/e61842f91712c2e3c53e02dca1a40eb5dfe2e981.png";
import yujinLogo from "@public/company/partners/52f83ed8b8586d47e4b27d33985a5529a6ad662d.png";
import wandoLogo from "@public/company/partners/faa0823e6c1a0dbfdd5d47717dbac5566fc0177d.png";
import gwangjuLogo from "@public/company/partners/857c76f33318371a2d09fbf1a4b87609bae88d72.png";
import mgCapitalLogo from "@public/company/partners/ed63448ffb7658761ee382c22beda9f71ff84993.png";
import wooriCapitalLogo from "@public/company/partners/fe8dc0543c146599a8adbde893907b1a41fa0b5e.png";
import wooriBankLogo from "@public/company/partners/25227baaa11376e520ea691db90979939d6d4124.png";
import sgGlobalLogo from "@public/company/partners/8c1abf45b265cf1689c2890f39050003a04f6522.png";
import jbCorpLogo from "@public/company/partners/31a6339992057d0a07b4ebbb35edd593a05e3852.png";
import hanwhaLogo from "@public/company/partners/09cb84bd01d14a74cf384bf4522271e2352adf81.png";
import dbIncLogo from "@public/company/partners/2ff7d3123f3c71f83f93fe7ef369e8486f79320c.png";
import lgHelloVisionLogo from "@public/company/partners/0db29ba18c3ccd2d932b0a4c6afd56713aff024d.png";
import htSaaeLogo from "@public/company/partners/fd30fe39c18cb07a7c104f75b88f5b4c6bd7ff1f.png";
import jayeonEnergyLogo from "@public/company/partners/7221a6fa4d66a8ff691e2240a683f1d2c316fc05.png";
import dainsLogo from "@public/company/partners/5e441f5e38a50b4384d1a4ba2e7717142f33e4b4.png";
import rstDevelopLogo from "@public/company/partners/4d17a46e9fcef1eb70e3e88557c76a21bf2c6edf.png";
import dyUwellssiLogo from "@public/company/partners/0cf875c41d6e7eab0141a9ff4d88f5eec594ee88.png";
import dyEnergyLogo from "@public/company/partners/dyenergylogo.png";
import hsrEnergyLogo from "@public/company/partners/be1f81879e9faf36770ce90da14e7f6028bba7ff.png";
import wboKoreaLogo from "@public/company/partners/c74fe947b9cf1501fec920b3a7018dc9baa157e2.png";
import hmeLogo from "@public/company/partners/06d2298150be42f1194129370b61483c9952e6d6.png";
import gaonLogo from "@public/company/partners/b7dd0ee746ddbb38044587bd78b71156325d3b9f.png";
import songJeonLogo from "@public/company/partners/7d4559e09a2854cc60355543823199d7802333c8.png";
import daeboLogo from "@public/company/partners/77ae5c25ad8857d4590c4626b00986f169929c7a.png";
import uclickLogo from "@public/company/partners/UclickVIS_CI.png";
import cgelogo from "@public/company/partners/cgelogo.png";
import hyundaisolartec from "@public/company/partners/hyundaisolartec.png";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { ImageWithFallback } from "@components/shared/ImageWithFallback";

const tabList = [
    { id: "all", label: "전체" },
    { id: "consulting", label: "사업자문" },
    { id: "investment", label: "투자사" },
    { id: "sales", label: "영업사" },
    { id: "equipment", label: "기자재공급사" },
    { id: "epc", label: "EPC 총괄"},
    { id: "construction", label: "시공사" },
    { id: "advisory", label: "자문사" }
  ];

interface LogoItemProps {
  src: string;
  alt: string;
  delay: number;
  url: string;
  height: string;  
}

function LogoItem({ src, alt, delay = 0, url = "#", height = "80px" }: LogoItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1,
        y: 0,
        transition: { 
          duration: 0.6, 
          delay: delay,
          ease: "easeOut"
        }
      }}
      viewport={{ once: true, margin: "-50px" }}      
      whileHover={{
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        borderColor: '#273b82',
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="relative flex min-h-[120px] flex-row items-center justify-between gap-4 rounded-lg border border-[#E6EBF2] bg-white px-6 py-8 cursor-pointer transition-all duration-300 ease">
      {/* Image Container */}
      <div className="flex flex-1 items-center justify-center min-w-0 overflow-hidden">
        <ImageWithFallback
          className="w-auto object-contain max-w-full"
          src={src}
          alt={alt}          
          style={{ maxHeight: height }} />
      </div>
      
      {/* Button - only if URL exists */}
      {url && (
        <a className="partner-button flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 no-underline transition-all duration-300 ease hover:bg-gray-50"
          href={url}
          target="_blank"
          rel="noopener noreferrer"                  
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#0E1C45';
            e.currentTarget.style.background = '#0E1C45';
            const icon = e.currentTarget.querySelector('.plus-icon') as HTMLElement;
            if (icon) icon.style.color = '#FFFFFF';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#E5E7EB';
            e.currentTarget.style.background = 'transparent';
            const icon = e.currentTarget.querySelector('.plus-icon') as HTMLElement;
            if (icon) icon.style.color = '#6B7280';
          }}
          onClick={(e) => e.stopPropagation()} >
          <span className="plus-icon text-xl text-[#6B7280] transition-colors duration-300 ease font-light">
            +
          </span>
        </a>
      )}
    </motion.div>
  );
}

export function PartnerGroup() {  
  const [activeTab, setActiveTab] = useState<string>("all");

  return(

    <div>
      {/* 네비게이션 영역 */}
      <section className="max-w mx-auto md:px-6">
        <div className="flex w-full items-center gap-0 bg-slate-100 p-1 grid grid-cols-4 md:grid-cols-8 md:rounded-full">
          {tabList.map((tab, index) => (
            <button className="flex-1 min-w-0 h-11 text-base font-sans border-none cursor-pointer whitespace-nowrap transition-all duration-[250ms] ease md:rounded-full"
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}                
              style={{
                fontWeight: activeTab === tab.id ? '600' : '500',
                color: activeTab === tab.id ? '#FFFFFF' : '#4B5563',
                background: activeTab === tab.id ? '#0F214A' : 'transparent'
              }}> 
              {tab.label}
            </button>
          ))}           
        </div>                  
      </section>

      <div className="h-[0.0625rem] bg-[#E6EBF2] mt-[48px]" />   

      {/* 사업자문 */}
      {(activeTab === "all" || activeTab === "consulting") && (
        <section className="max-w mx-auto px-6 pt-16">
          <motion.div className="mb-6 last:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" }
            }}
            viewport={{ once: true, margin: "-80px" }}>
            <h3 className="mb-4 font-sans text-2xl font-bold text-[#0F172A] font-['Pretendard',_-apple-system,'Noto_Sans_KR',_sans-serif]">
              사업자문
            </h3>
            {/* Divider Line */}
            <div className="w-full h-[0.0625rem] bg-[#E6EBF2]"/>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
            <LogoItem src={hangangLogo.src} alt="HANGANG ASSET" delay={0} url="https://www.hangangasset.com/" height="80px"/>            
            <LogoItem src={uclickLogo.src} alt="UCLICK ASSET" delay={0.05} url="https://www.uclick.co.kr/" height="80px"/>
          </div>
        </section>
      )} 

      {/* 투자사 */}
      {(activeTab === "all" || activeTab === "investment") && (
        <section className="max-w mx-auto px-6 pt-16">
          <motion.div className="mb-6 last:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" }
            }}
            viewport={{ once: true, margin: "-80px" }}>
            <h3 className="mb-4 font-sans text-2xl font-bold text-[#0F172A] font-['Pretendard',_-apple-system,'Noto_Sans_KR',_sans-serif]">
              투자사
            </h3>
            {/* Divider Line */}
            <div className="w-full h-[0.0625rem] bg-[#E6EBF2]"/>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
            <LogoItem src={yujinLogo.src} alt="유진투자증권" delay={0} url="https://www.eugenefn.com" height="80px" />
            <LogoItem src={wandoLogo.src} alt="완도금일수협" delay={0.05} url="https://wandokumil.suhyup.co.kr/home/kor/main.do" height="80px" />
            <LogoItem src={gwangjuLogo.src} alt="광주은행" delay={0.10} url="https://www.kjbank.com" height="80px" />
            <LogoItem src={mgCapitalLogo.src} alt="MG캐피탈" delay={0.15} url="https://www.mgcap.co.kr" height="80px" />
            <LogoItem src={wooriCapitalLogo.src} alt="우리금융캐피탈" delay={0.20} url="https://www.wooricapital.com" height="80px" />
            <LogoItem src={wooriBankLogo.src} alt="우리은행" delay={0.25} url="https://www.wooribank.com" height="80px" />
          </div>
        </section>
      )} 

      {/* 영업사 */}
      {(activeTab === "all" || activeTab === "sales") && (
        <section className="max-w mx-auto px-6 pt-16">
          <motion.div className="mb-6 last:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" }
            }}
            viewport={{ once: true, margin: "-80px" }}>
            <h3 className="mb-4 font-sans text-2xl font-bold text-[#0F172A] font-['Pretendard',_-apple-system,'Noto_Sans_KR',_sans-serif]">
              영업사
            </h3>
            {/* Divider Line */}
            <div className="w-full h-[0.0625rem] bg-[#E6EBF2]"/>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <LogoItem src={sgGlobalLogo.src} alt="SG GLOBAL ENERGY KOREA" delay={0} url="" height="80px" />              
          </div>
        </section>
      )} 

      {/* 기자재공급사 */}
      {(activeTab === "all" || activeTab === "equipment") && (
        <section className="max-w mx-auto px-6 pt-16">
          <motion.div className="mb-6 last:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" }
            }}
            viewport={{ once: true, margin: "-80px" }}>
            <h3 className="mb-4 font-sans text-2xl font-bold text-[#0F172A] font-['Pretendard',_-apple-system,'Noto_Sans_KR',_sans-serif]">
              기자재공급사
            </h3>
            {/* Divider Line */}
            <div className="w-full h-[0.0625rem] bg-[#E6EBF2]"/>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
            <LogoItem src={jbCorpLogo.src} alt="JB CORP" delay={0} url="https://jbcorporation.com/" height="80px" />
            <LogoItem src={hanwhaLogo.src} alt="한화시스템" delay={0.05} url="https://www.hanwhasystems.com/kr/index.do" height="80px" />
            <LogoItem src={dbIncLogo.src} alt="DB Inc." delay={0.10} url="https://www.dbinc.co.kr" height="80px" />
            <LogoItem src={lgHelloVisionLogo.src} alt="LG HelloVision" delay={0.15} url="https://www.lghellovision.net" height="80px" />
            <LogoItem src={htSaaeLogo.src} alt="HT-SAAE" delay={0.20} url="https://www.ht-saae.com" height="80px" />             
          </div>
        </section>
      )} 

      {/* EPC 총괄 */}
      {(activeTab === "all" || activeTab === "epc") && (
        <section className="max-w mx-auto px-6 pt-16">
          <motion.div className="mb-6 last:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" }
            }}
            viewport={{ once: true, margin: "-80px" }}>
            <h3 className="mb-4 font-sans text-2xl font-bold text-[#0F172A] font-['Pretendard',_-apple-system,'Noto_Sans_KR',_sans-serif]">
              EPC 총괄
            </h3>
            {/* Divider Line */}
            <div className="w-full h-[0.0625rem] bg-[#E6EBF2]"/>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
            <LogoItem src={daeboLogo.src} alt="대보에너지솔루션" delay={0} url="https://www.daebogroup.com" height="80px" />           
          </div>
        </section>
      )} 

      {/* 시공사 */}
      {(activeTab === "all" || activeTab === "construction") && (
        <section className="max-w mx-auto px-6 pt-16">
          <motion.div className="mb-6 last:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" }
            }}
            viewport={{ once: true, margin: "-80px" }}>
            <h3 className="mb-4 font-sans text-2xl font-bold text-[#0F172A] font-['Pretendard',_-apple-system,'Noto_Sans_KR',_sans-serif]">
              시공사
            </h3>
            {/* Divider Line */}
            <div className="w-full h-[0.0625rem] bg-[#E6EBF2]"/>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
            <LogoItem src={jayeonEnergyLogo.src} alt="자연에너지" delay={0} url="http://www.sunupt.com" height="80px" />
            <LogoItem src={dainsLogo.src} alt="DAINS" delay={0.05} url="" height="80px" />
            <LogoItem src={rstDevelopLogo.src} alt="RST develop" delay={0.10} url="" height="80px" />
            <LogoItem src={dyEnergyLogo.src} alt="DY에너지" delay={0.15} url="http://www.dyulc.co.kr" height="80px" />
            <LogoItem src={hsrEnergyLogo.src} alt="HSR 한솔에너지" delay={0.20} url="https://re100-hsr.com" height="80px" />
            <LogoItem src={wboKoreaLogo.src} alt="WBO KOREA" delay={0.25} url="" height="80px" />
            <LogoItem src={hmeLogo.src} alt="HME" delay={0.30} url="" height="80px" />
            <LogoItem src={gaonLogo.src} alt="GAON E&C" delay={0.35} url="" height="80px" />
            <LogoItem src={songJeonLogo.src} alt="송전" delay={0.40} url="" height="80px" />
            <LogoItem src={wonpickLogo.src} alt="원픽이앤씨" delay={0.45} url="http://www.onepickenc.com" height="80px" />
            <LogoItem src={elmetechLogo.src} alt="ELMETECH" delay={0.50} url="http://www.elmetech.co.kr" height="80px" />          
            <LogoItem src={cgelogo.src} alt="CGI" delay={0.55} url="" height="80px" />
            <LogoItem src={hyundaisolartec.src} alt="현대솔라텍" delay={0.60} url="http://hdstec.co.kr/" height="80px" />
          </div>
        </section>
      )}

      {/* 자문사 */}
      {(activeTab === "all" || activeTab === "advisory") && (
        <section className="max-w mx-auto px-6 pt-16">
          <motion.div className="mb-6 last:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" }
            }}
            viewport={{ once: true, margin: "-80px" }}>
            <h3 className="mb-4 font-sans text-2xl font-bold text-[#0F172A] font-['Pretendard',_-apple-system,'Noto_Sans_KR',_sans-serif]">
              자문사
            </h3>
            {/* Divider Line */}
            <div className="w-full h-[0.0625rem] bg-[#E6EBF2]"/>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">            
            <LogoItem src={locktonLogo.src} alt="Lockton" delay={0} url="https://www.lockton.com" height="80px" />
            <LogoItem src={egiLogo.src} alt="EGI" delay={0.05} url="https://www.egic.co.kr/e/hp/EHP.do" height="80px" />
            <LogoItem src={earthEcoLogo.src} alt="EarthEco" delay={0.10} url="" height="80px" />        
          </div>
        </section>
      )}                 
    </div>
  );
}