import type { Metadata } from "next";
import heroImage from "@public/customercenter/relationsite/f400aefd2c2ba41d187cd7c76e36018e5269b504.png";
import { HeroSectionFeat } from "@components/shared/HeroSectionFeat";
import { SetRelationSiteList } from "@components/sections/SetRelationSiteList";

export const metadata: Metadata = {
  title: "사업관련 사이트",
  description: "",
};

export default function RelationSite() {
  return (
    <div className="min-h-screen pt-20">
      <HeroSectionFeat
        badge="BUSINESS RELATION SITE"
        title={<>사업관련 사이트</>}
        description={<>태양광 사업과 관련한 유용한 사이트를 모았습니다.</>}
        backgroundImage={heroImage}/>

        <SetRelationSiteList />   
    </div>
    );
}