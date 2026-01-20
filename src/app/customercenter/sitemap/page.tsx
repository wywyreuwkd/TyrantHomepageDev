import type { Metadata } from "next";
import heroImage from "@public/customercenter/sitemap/07e3a9f9b6e02ac4d9da917bf685ea9da6e6404f.png";
import { HeroSectionFeat } from "@components/shared/HeroSectionFeat";
import { GridSiteMapList } from "@components/sections/GridSiteMapList";

export const metadata: Metadata = {
  title: "사이트맵",
  description: "",
};

export default function SiteMap() {
  return (
    <div className="min-h-screen pt-20">
      <HeroSectionFeat
        badge="SITE MAP"
        title={<>사이트맵</>}
        description={<>타이런트 웹사이트의 전체 구조를 한눈에 확인하세요.</>}
        backgroundImage={heroImage}/>

      <GridSiteMapList />
    </div>
    );
}