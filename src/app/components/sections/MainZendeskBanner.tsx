"use client"

import { motion } from "framer-motion";
import { ImageWithFallback } from "@components/shared/ImageWithFallback";

// Import partner logos
import hangangLogo from "@public/main/e61842f91712c2e3c53e02dca1a40eb5dfe2e981.png";
import yujinLogo from "@public/main/52f83ed8b8586d47e4b27d33985a5529a6ad662d.png";
import wandoLogo from "@public/main/faa0823e6c1a0dbfdd5d47717dbac5566fc0177d.png";
import gwangjuLogo from "@public/main/857c76f33318371a2d09fbf1a4b87609bae88d72.png";
import mgCapitalLogo from "@public/main/ed63448ffb7658761ee382c22beda9f71ff84993.png";
import wooriCapitalLogo from "@public/main/fe8dc0543c146599a8adbde893907b1a41fa0b5e.png";
import wooriBankLogo from "@public/main/25227baaa11376e520ea691db90979939d6d4124.png";
import sgGlobalLogo from "@public/main/8c1abf45b265cf1689c2890f39050003a04f6522.png";
import jbCorpLogo from "@public/main/31a6339992057d0a07b4ebbb35edd593a05e3852.png";
import hanwhaLogo from "@public/main/09cb84bd01d14a74cf384bf4522271e2352adf81.png";
import dbIncLogo from "@public/main/2ff7d3123f3c71f83f93fe7ef369e8486f79320c.png";
import lgHelloVisionLogo from "@public/main/0db29ba18c3ccd2d932b0a4c6afd56713aff024d.png";
import htSaaeLogo from "@public/main/fd30fe39c18cb07a7c104f75b88f5b4c6bd7ff1f.png";
import jayeonEnergyLogo from "@public/main/7221a6fa4d66a8ff691e2240a683f1d2c316fc05.png";
import dainsLogo from "@public/main/5e441f5e38a50b4384d1a4ba2e7717142f33e4b4.png";
import rstDevelopLogo from "@public/main/4d17a46e9fcef1eb70e3e88557c76a21bf2c6edf.png";
import dyUwellssiLogo from "@public/main/0cf875c41d6e7eab0141a9ff4d88f5eec594ee88.png";
import hsrEnergyLogo from "@public/main/be1f81879e9faf36770ce90da14e7f6028bba7ff.png";
import wboKoreaLogo from "@public/main/c74fe947b9cf1501fec920b3a7018dc9baa157e2.png";
import hmeLogo from "@public/main/06d2298150be42f1194129370b61483c9952e6d6.png";
import gaonLogo from "@public/main/b7dd0ee746ddbb38044587bd78b71156325d3b9f.png";
import songJeonLogo from "@public/main/7d4559e09a2854cc60355543823199d7802333c8.png";
import wonpickLogo from "@public/main/7a5a8166f4e70a4a61fac46d2d3d97f466ea6864.png";
import elmetechLogo from "@public/main/55473facab290ca12d13d2812c5df43138723236.png";
import locktonLogo from "@public/main/123964a7931e1c9f41a8ca2dc7a91ee43cc4b4e4.png";
import egiLogo from "@public/main/195b3538f0b26dd92c332fa07bf59e0607bf7757.png";
import earthEcoLogo from "@public/main/d48a11296227c2f6904fb5cbb359d5d6e9316d55.png";
import daeboLogo from "@public/main/77ae5c25ad8857d4590c4626b00986f169929c7a.png";

// Import Solar O main image
import solarOImage from "@public/main/bef2546182089c679a0edd08a2fc919ee065f139.png";

// Import Solar O logo
import solarOLogo from "@public/main/b5b99ebec2fcacd98b6ea637086180a1c064c35b.png";

const partnerLogos = [
  { name: 'HANGANG ASSET', logo: hangangLogo },
  { name: '유진투자증권', logo: yujinLogo },
  { name: '완도금일수협', logo: wandoLogo },
  { name: '광주은행', logo: gwangjuLogo },
  { name: 'MG캐피탈', logo: mgCapitalLogo },
  { name: '우리금융캐피탈', logo: wooriCapitalLogo },
  { name: '우리은행', logo: wooriBankLogo },
  { name: 'SG GLOBAL', logo: sgGlobalLogo },
  { name: 'JB CORP', logo: jbCorpLogo },
  { name: '한화시스템', logo: hanwhaLogo },
  { name: 'DB Inc.', logo: dbIncLogo },
  { name: 'LG HelloVision', logo: lgHelloVisionLogo },
  { name: 'HT-SAAE', logo: htSaaeLogo },
  { name: '대보에너지솔루션', logo: daeboLogo },
  { name: '자연에너지', logo: jayeonEnergyLogo },
  { name: 'DAINS', logo: dainsLogo },
  { name: 'RST develop', logo: rstDevelopLogo },
  { name: 'DY유웰씨', logo: dyUwellssiLogo },
  { name: 'HSR 한솔에너지', logo: hsrEnergyLogo },
  { name: 'WBQ KOREA', logo: wboKoreaLogo },
  { name: 'HME', logo: hmeLogo },
  { name: 'GAON E&C', logo: gaonLogo },
  { name: '송전', logo: songJeonLogo },
  { name: '원픽이앤씨', logo: wonpickLogo },
  { name: 'ELMETECH', logo: elmetechLogo },
  { name: 'Lockton', logo: locktonLogo },
  { name: 'EGI', logo: egiLogo },
  { name: 'EarthEco', logo: earthEcoLogo }
];

export function MainZendeskBanner() {
	return(
		
		<div className="w-full bg-gray-100">      

      		{/* Bottom Logo Strip - Infinite Rolling */}
      		<div className="w-full overflow-hidden py-8 relative border-t border-gray-300 bg-gray-100">
        		<motion.div className="flex gap-20 items-center h-20 will-change-transform"
          			animate={{ x: [0, -100 * partnerLogos.length] }}
          			transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 60, ease: "linear" }}} >
          			
          			{/* 원본 로고 */}
          			{partnerLogos.map((partner, index) => (
            			<div key={`original-${index}`} className="h-15 flex items-center justify-center flex-shrink-0 min-w-[160px]">
              				<ImageWithFallback className="max-h-full max-w-[160px] object-contain filter saturate-0 contrast-80 brightness-125 opacity-60" src={partner.logo.src} alt={partner.name} />
            			</div>
          			))}

          			{/* 복제본 1 - Seamless loop */}
          			{partnerLogos.map((partner, index) => (
            			<div key={`clone1-${index}`} className="h-15 flex items-center justify-center flex-shrink-0 min-w-[160px]">
              				<ImageWithFallback className="max-h-full max-w-[160px] object-contain filter saturate-0 contrast-80 brightness-125 opacity-60" src={partner.logo.src} alt={partner.name} />
            			</div>
          			))}
          
          			{/* 복제본 2 - Extra seamless */}
          			{partnerLogos.map((partner, index) => (
            			<div key={`clone2-${index}`} className="h-15 flex items-center justify-center flex-shrink-0 min-w-[160px]">
              				<ImageWithFallback className="max-h-full max-w-[160px] object-contain filter saturate-0 contrast-80 brightness-125 opacity-60" src={partner.logo.src} alt={partner.name} />
            			</div>
          			))}
        		</motion.div>
      		</div>
    	</div>
	);
}