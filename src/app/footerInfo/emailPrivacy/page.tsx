import type { Metadata } from "next";
import { LabelAccent } from "@components/shared/SectionLabel";

export const metadata: Metadata = {
  title: "이메일 무단수집거부",
  description: "타이런트 이메일 무단수집거부 안내 페이지입니다.",
};

export default function EmailPrivacyPage() {
  return (
    <div className="min-h-screen bg-primary pt-20">
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px]"></div>
        </div>

        <div className="relative mx-auto px-6 md:px-10 py-16 md:py-24 max-w-[1280px]">
          <div className="text-center mb-16">
            <LabelAccent label="EMAIL PROTECTION" />
            <h1 className="text-[32px] md:text-[48px] font-bold leading-[130%] color-white mt-4">
              이메일 무단수집거부
            </h1>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            {/* 서문 */}
            <div className="mb-12 p-8 rounded-2xl bg-white-5 border border-white-10">
              <p className="text-lg leading-[175%] color-white-90 mb-4">
                당사 홈페이지가 취급하는 모든 개인정보는 개인정보 보호법 등 관련 법령상의 개인정보보호 규정을 준수하여 수집·보유·처리되고 있습니다.
              </p>
              <p className="text-lg leading-[175%] color-white-90">
                본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며, 이를 위반시 정보통신망법에 의해 <span className="color-accent font-semibold">형사 처벌</span>됨을 유념하시기 바랍니다.
              </p>
            </div>

            {/* 법률 안내 */}
            <div className="mb-12 pb-12 border-b border-white-10">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold color-accent opacity-50">01</span>
                <h2 className="text-2xl md:text-3xl font-bold color-white">관련 법률</h2>
              </div>
              
              <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 mb-8">
                <h3 className="text-xl font-bold color-white mb-2">
                  정보통신망 이용촉진 및 정보보호 등에 관한 법률
                </h3>
                <p className="text-sm color-white-50">
                  [시행 2013.3.23] [법률 제11690호, 2013.3.23, 타법개정]
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white-5 border border-white-10">
                <h4 className="text-lg font-semibold color-accent mb-6">
                  제50조의2 (전자우편주소의 무단 수집행위 등 금지)
                </h4>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm font-bold color-accent">
                      1
                    </span>
                    <p className="text-lg leading-[175%] color-white-90 pt-1">
                      누구든지 인터넷 홈페이지 운영자 또는 관리자의 사전 동의 없이 인터넷 홈페이지에서 자동으로 전자우편주소를 수집하는 프로그램이나 그 밖의 기술적 장치를 이용하여 전자우편주소를 수집하여서는 아니 된다.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm font-bold color-accent">
                      2
                    </span>
                    <p className="text-lg leading-[175%] color-white-90 pt-1">
                      누구든지 제1항을 위반하여 수집된 전자우편주소를 판매·유통하여서는 아니 된다.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm font-bold color-accent">
                      3
                    </span>
                    <p className="text-lg leading-[175%] color-white-90 pt-1">
                      누구든지 제1항과 제2항에 따라 수집·판매 및 유통이 금지된 전자우편주소임을 알면서 이를 정보 전송에 이용하여서는 아니 된다.
                    </p>
                  </li>
                </ol>
                <p className="text-sm color-white-50 mt-6 text-right">
                  [전문개정 2008.6.13]
                </p>
              </div>
            </div>

            {/* 경고 문구 */}
            <div className="text-center p-8 rounded-2xl bg-red-500/10 border border-red-500/20">
              <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <p className="text-lg font-semibold text-red-400 mb-2">
                위반 시 처벌 안내
              </p>
              <p className="text-base color-white-70">
                상기 법률을 위반하여 이메일 주소를 무단 수집할 경우,<br />
                정보통신망법에 의해 형사 처벌을 받을 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
