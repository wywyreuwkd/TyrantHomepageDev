import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { SignUpForm } from "@/components/section/sign-up/SignUpForm";
import logoBlue from "@public/images/logo/logo_blue.png";
import logoWhite from "@public/images/logo/logo_white.png";

export const metadata: Metadata = {
  title: "회원가입 | 타이런트 - 관리자",
  description: "타이런트 관리자 회원가입 페이지",
};

export default function SignUp() {
  return (
    <div className="py-12 px-4 md:px-12">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="text-[28px] max-md:text-[22px] font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Sign Up
          </h1>
          <p className="text-[14px] max-md:text-[13px] mt-1 text-gray-500 dark:text-gray-400">
            회원사 등록 신청
          </p>
        </div>        
      </div>

      {/* Main Content - Centered Form */}
      <div className="max-w-[1100px] mx-auto">
        
        {/* Logo */}
        <div className="flex justify-start mb-6 md:mb-8">          
          <img className="h-14 md:h-20 w-auto dark:hidden"
            src={logoBlue.src}
            alt="TYRANT Logo"/>
          <img className="h-14 md:h-20 w-auto hidden dark:block"      
            src={logoWhite.src}
            alt="TYRANT Logo"/>
        </div>

        {/* 안내 문구 */}
        <div className="rounded-[10px] border p-5 md:p-6 mb-6 md:mb-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h2 className="text-[18px] md:text-[20px] font-bold mb-3 md:mb-4 text-gray-900 dark:text-gray-50">
            회원 등록 신청
          </h2>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] md:text-[15px] leading-[1.7] pl-4 relative text-gray-600 dark:text-gray-300">
              <span className="absolute left-0 text-gray-500 dark:text-gray-400">•</span>
              TYRANT의 협력사로 등록하고자 하시는 경우 아래 정보를 입력해주세요.
            </p>
            <p className="text-[14px] md:text-[15px] leading-[1.7] pl-4 relative text-gray-600 dark:text-gray-300">
              <span className="absolute left-0 text-gray-500 dark:text-gray-400">•</span>
              회사 정보 확인 후 당사의 내부 기준 하에 협력사로 등록 가능하며, 추가적인 자료의 요청이 있을 수 있습니다.
            </p>
            <p className="text-[14px] md:text-[15px] leading-[1.7] pl-4 relative text-gray-600 dark:text-gray-300">
              <span className="absolute left-0 text-gray-500 dark:text-gray-400">•</span>
              관리자의 승인 후 회원가입이 완료되며, 회원가입 완료시 등록한 메일 주소로 승인 완료 안내문이 발송됩니다.
            </p>
            <div className="text-[14px] md:text-[15px] leading-[1.7] pl-4 relative text-gray-600 dark:text-gray-300">
              <span className="absolute left-0 text-gray-500 dark:text-gray-400">•</span>
              <span>추가적인 문의는 </span>
              <span className="inline-flex items-center gap-1.5">
                <Mail size={16} className="text-gray-500 dark:text-gray-400" />
                <span className="font-semibold">solaro@tyrant.co.kr</span>
              </span>
              <span> 로 문의주시기 바랍니다.</span>
            </div>
          </div>
        </div>

        {/* 회원가입 폼 */}
        <SignUpForm />        
      </div>      
    </div>
  );
}
