import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { SignInForm } from "@/components/section/sign-in/SignInForm";
import logoBlue from "@public/images/logo/logo_blue.png";
import logoWhite from "@public/images/logo/logo_white.png";

export const metadata: Metadata = {
  title: "로그인 | 타이런트 - 관리자",
  description: "타이런트 관리자 로그인 페이지",
};

export default function SignIn() {
  return (
    <div className="py-12 px-4 md:px-12">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="text-[28px] max-md:text-[22px] font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Sign In
          </h1>
          <p className="text-[14px] max-md:text-[13px] mt-1 text-gray-600 dark:text-gray-400">
            회원사 전용 시스템 로그인
          </p>
        </div>        
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-[1100px] mx-auto">
        
        {/* Left Column - Enterprise System Information (모바일에서 아래로, PC는 왼쪽) */}
        <div className="flex flex-col gap-6 lg:gap-10 max-w-[480px] order-2 lg:order-1">
          {/* Section 1: 회원사 등록 안내 */}
          <div>
            <h3 className="text-[15px] lg:text-[16px] font-bold mb-2 lg:mb-3 text-gray-900 dark:text-gray-50">
              회원사 등록 안내
            </h3>
            <p className="text-[14px] lg:text-[15px] leading-[1.7] mb-2 pl-4 relative text-gray-600 dark:text-gray-300">
              <span className="absolute left-0 text-gray-500 dark:text-gray-400">•</span>
              타이런트는 사업 참여자 모두에게 실질적인 도움이 되는 태양광 발전 프로젝트를 실현하고 있습니다.
            </p>
            <p className="text-[14px] lg:text-[15px] leading-[1.7] mb-2 pl-4 relative text-gray-600 dark:text-gray-300">
              <span className="absolute left-0 text-gray-500 dark:text-gray-400">•</span>
              타이런트와 함께 하실 회원사를 모집합니다.
            </p>
            <p className="text-[14px] lg:text-[15px] leading-[1.7] pl-4 relative text-gray-600 dark:text-gray-300">
              <span className="absolute left-0 text-gray-500 dark:text-gray-400">•</span>
              회원 등록 후 회원사 정보를 입력하는 방식으로 회원사 등록이 가능합니다.
            </p>
          </div>

          {/* Section 2: 참여 대상 */}
          <div>
            <h3 className="text-[15px] lg:text-[16px] font-bold mb-3 lg:mb-4 text-gray-900 dark:text-gray-50">
              참여 대상
            </h3>
            
            {/* 고객 컨설팅 영역 모집 */}
            <div className="mb-5 lg:mb-6">
              <h4 className="text-[14px] lg:text-[15px] font-bold mb-1.5 text-gray-800 dark:text-gray-100">
                고객 컨설팅 영역 모집
              </h4>
              <p className="text-[14px] lg:text-[15px] leading-[1.7] text-gray-600 dark:text-gray-300">
                타이런트의 비전을 같이 공유하고, 확장에 함께 힘써주실 태양광 사업에 관심 있으신 개인 또는 업체
              </p>
            </div>

            {/* 협력 시공사 영역 모집 */}
            <div className="mb-5 lg:mb-6">
              <h4 className="text-[14px] lg:text-[15px] font-bold mb-1.5 text-gray-800 dark:text-gray-100">
                협력 시공사 영역 모집
              </h4>
              <p className="text-[14px] lg:text-[15px] leading-[1.7] mb-1.5 text-gray-600 dark:text-gray-300">
                검증된 기자재를 대량 구매로 저렴하게 공급드립니다.
              </p>
              <p className="text-[14px] lg:text-[15px] leading-[1.7] text-gray-600 dark:text-gray-300">
                타이런트와 협력 회원사들간의 시공노하우를 공유하여 다양한 상황에 안정적인 시공이 이뤄지도록 지원합니다.
              </p>
            </div>

            {/* 회원사간 협업/시너지 */}
            <div>
              <h4 className="text-[14px] lg:text-[15px] font-bold mb-1.5 text-gray-800 dark:text-gray-100">
                회원사간 협업/시너지
              </h4>
              <p className="text-[14px] lg:text-[15px] leading-[1.7] mb-1.5 pl-4 relative text-gray-600 dark:text-gray-300">
                <span className="absolute left-0 text-gray-500 dark:text-gray-400">•</span>
                통합 사무실을 제공 및 주기적인 미팅을 통해 타이런트와 회원사들간의 유기적인 소통을 최우선으로 하고 있습니다.
              </p>
              <p className="text-[14px] lg:text-[15px] leading-[1.7] mb-1.5 pl-4 relative text-gray-600 dark:text-gray-300">
                <span className="absolute left-0 text-gray-500 dark:text-gray-400">•</span>
                컨설팅 회원사들에게는 고객 기반을 공유하여 좀 더 쉽게 더욱 다양한 고객들이 혜택을 누릴 수 있도록 하고 있습니다.
              </p>
              <p className="text-[14px] lg:text-[15px] leading-[1.7] pl-4 relative text-gray-600 dark:text-gray-300">
                <span className="absolute left-0 text-gray-500 dark:text-gray-400">•</span>
                협력 EPC 회원사들에게는 타이런트가 추진 중인 다양한 현장들을 공유하고 있으며, 인허가 절차부터 발생되는 각종 고민들을 함께 해결하고 있습니다.
              </p>
            </div>
          </div>

          {/* Section 3: 회원사 등록 문의 */}
          <div>
            <h3 className="text-[15px] lg:text-[16px] font-bold mb-2 text-gray-900 dark:text-gray-50">
              회원사 등록 문의
            </h3>
            <div className="flex items-center gap-2">
              <Mail size={18} className="flex-shrink-0 text-gray-500 dark:text-gray-400" />
              <p className="text-[14px] lg:text-[15px] font-medium m-0 text-gray-500 dark:text-gray-400">
                solaro@tyrant.co.kr
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Login Form (모바일에서 위로, PC는 오른쪽) */}
        <div className="rounded-[10px] border p-6 md:p-8 flex flex-col justify-between order-1 lg:order-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          {/* Logo */}
          <div className="text-center mb-8 md:mb-14 mt-2 md:mt-4">
            <img className="w-full max-w-[200px] md:max-w-[280px] h-auto mx-auto dark:hidden"
              src={logoBlue.src}
              alt="TYRANT Logo"/>
            <img className="w-full max-w-[200px] md:max-w-[280px] h-auto mx-auto hidden dark:block"      
              src={logoWhite.src}
              alt="TYRANT Logo"/>
          </div>

          {/* 로그인 폼 */}
          <SignInForm />
        </div>
      </div>
    </div>
  );
}
