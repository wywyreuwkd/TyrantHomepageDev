import type { Metadata } from "next";
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
import hsrEnergyLogo from "@public/company/partners/be1f81879e9faf36770ce90da14e7f6028bba7ff.png";
import wboKoreaLogo from "@public/company/partners/c74fe947b9cf1501fec920b3a7018dc9baa157e2.png";
import hmeLogo from "@public/company/partners/06d2298150be42f1194129370b61483c9952e6d6.png";
import gaonLogo from "@public/company/partners/b7dd0ee746ddbb38044587bd78b71156325d3b9f.png";
import songJeonLogo from "@public/company/partners/7d4559e09a2854cc60355543823199d7802333c8.png";
import heroImage from "@public/company/partners/5c40c3b8806d8e368a627607ec5ce36893ea1596.png";
import { HeroSectionFeat } from "@components/shared/HeroSectionFeat";
import { PartnerGroup, LogoItem } from "@components/sections/PartnerGroup"

export const metadata: Metadata = {
  title: "파트너사",
  description: "타이런트와 함께하는 파트너사 소개 - 물류, 제조, 유통, 금융 등 다양한 산업 분야의 파트너와 협력하고 있습니다.",
};

export default function Partners() {
  return (
    <div className="min-h-screen pt-20">
      <HeroSectionFeat
        badge="PARTNERS"
        title={<>협력사 소개</>}
        description={<>솔라오는 에너지 산업 생태계의 전문 파트너들과 함께 성장합니다.<br className="hidden md:block" /> 사업자문부터 시공·금융까지 검증된 협력사 네트워크를 통해 안정적이고 지속가능한 태양광 발전 사업을 실현합니다.</>}
        backgroundImage={heroImage}/>

      {/* Partner Network Section */}
      <section style={{ backgroundColor: '#FFFFFF', paddingTop: '160px', paddingBottom: '200px' }}>
        <div className="max-w-[1240px] mx-auto px-6">
          
          {/* 사업자문 */}
          <PartnerGroup
            title="사업자문"
            description="에너지 프로젝트 구조화 및 사업성 검증 전문 파트너">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              <LogoItem
                src={hangangLogo.src}
                alt="HANGANG ASSET"
                delay={0}/>
            </div>
          </PartnerGroup>

          {/* 투자사 */}
          <PartnerGroup
            title="투자사"
            description="프로젝트 금융 및 안정적 자본 구조를 함께 구축하는 파트너">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              <LogoItem src={yujinLogo.src} alt="유진투자증권" delay={0} />
              <LogoItem src={wandoLogo.src} alt="완도금일수협" delay={0.05} />
              <LogoItem src={gwangjuLogo.src} alt="광주은행" delay={0.10} />
              <LogoItem src={mgCapitalLogo.src} alt="MG캐피탈" delay={0.15} />
              <LogoItem src={wooriCapitalLogo.src} alt="우리금융캐피탈" delay={0.20} />
              <LogoItem src={wooriBankLogo.src} alt="우리은행" delay={0.25} />
            </div>
          </PartnerGroup>

          {/* 영업사 */}
          <PartnerGroup
            title="영업사"
            description="전국 사업 발굴 및 프로젝트 유치를 담당하는 네트워크">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">                          
              <LogoItem
                src={sgGlobalLogo.src}
                alt="SG GLOBAL ENERGY KOREA"
                delay={0}/>              
            </div>
          </PartnerGroup>

          {/* 기자재공급사 */}
          <PartnerGroup
            title="기자재공급사"
            description="고효율 태양광 기자재 및 인버터 공급 파트너">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              <LogoItem src={jbCorpLogo.src} alt="JB CORP" delay={0} />
              <LogoItem src={hanwhaLogo.src} alt="한화시스템" delay={0.05} />
              <LogoItem src={dbIncLogo.src} alt="DB Inc." delay={0.10} />
              <LogoItem src={lgHelloVisionLogo.src} alt="LG HelloVision" delay={0.15} />
              <LogoItem src={htSaaeLogo.src} alt="HT-SAAE" delay={0.20} />
            </div>
          </PartnerGroup>

          {/* 시공사 */}
          <PartnerGroup
            title="시공사"
            description="발전소 시공 및 현장 운영 역량을 갖춘 전문 기업">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              <LogoItem src={jayeonEnergyLogo.src} alt="자연에너지" delay={0} />
              <LogoItem src={dainsLogo.src} alt="DAINS" delay={0.05} />
              <LogoItem src={rstDevelopLogo.src} alt="RST develop" delay={0.10} />
              <LogoItem src={dyUwellssiLogo.src} alt="DY유웰씨" delay={0.15} />
              <LogoItem src={hsrEnergyLogo.src} alt="HSR 한솔에너지" delay={0.20} />
              <LogoItem src={wboKoreaLogo.src} alt="WBO KOREA" delay={0.25} />
              <LogoItem src={hmeLogo.src} alt="HME" delay={0.30} />
              <LogoItem src={gaonLogo.src} alt="GAON E&C" delay={0.35} />
              <LogoItem src={songJeonLogo.src} alt="송전" delay={0.40} />
              <LogoItem src={hdesLogo.src} alt="HDES" delay={0.45} />
              <LogoItem src={wonpickLogo.src} alt="원픽이앤씨" delay={0.50} />
              <LogoItem src={elmetechLogo.src} alt="ELMETECH" delay={0.55} />
            </div>
          </PartnerGroup>

          {/* 자문사 */}
          <PartnerGroup
            title="자문사"
            description="법률·회계·기술 자문을 제공하는 전문 파트너">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              <LogoItem src={locktonLogo.src} alt="Lockton" delay={0} />
              <LogoItem src={egiLogo.src} alt="EGI" delay={0.05} />
              <LogoItem src={earthEcoLogo.src} alt="EarthEco" delay={0.10} />
            </div>
          </PartnerGroup>
        </div>
      </section>
    </div>
  );
}
