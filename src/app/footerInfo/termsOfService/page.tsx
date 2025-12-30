import type { Metadata } from "next";
import { LabelAccent } from "@components/shared/SectionLabel";

export const metadata: Metadata = {
  title: "이용약관",
  description: "타이런트 웹사이트 이용약관 안내 페이지입니다.",
};

export default function TermsOfServicePage() {
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
            <LabelAccent label="TERMS OF SERVICE" />
            <h1 className="text-[32px] md:text-[48px] font-bold leading-[130%] color-white mt-4">
              이용약관
            </h1>
            <p className="text-lg color-white-70 mt-4">
              시행일: 2025년 1월 1일
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            {/* 서문 */}
            <div className="mb-12 p-8 rounded-2xl bg-white-5 border border-white-10">
              <p className="text-lg leading-[175%] color-white-90">
                본 약관은 <span className="color-accent font-semibold">타이런트(TYRANT)</span>(이하 &quot;회사&quot;)가 운영하는 웹사이트(이하 &quot;사이트&quot;)에서 제공하는 태양광 발전 관련 서비스(이하 &quot;서비스&quot;)의 이용조건 및 절차, 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
              </p>
            </div>

            {/* Section 1 */}
            <PolicySection number="01" title="목적">
              <p className="text-lg leading-[175%] color-white-90">
                이 약관은 회사가 제공하는 태양광 발전 컨설팅, 시공, 모니터링, 유지보수 및 기타 관련 서비스의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
              </p>
            </PolicySection>

            {/* Section 2 */}
            <PolicySection number="02" title="용어의 정의">
              <ul className="space-y-4">
                <PolicyListItem>
                  <span className="color-accent font-semibold">&quot;사이트&quot;</span>란 회사가 태양광 발전 관련 서비스를 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 운영하는 가상의 영업장을 말합니다.
                </PolicyListItem>
                <PolicyListItem>
                  <span className="color-accent font-semibold">&quot;이용자&quot;</span>란 사이트에 접속하여 이 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
                </PolicyListItem>
                <PolicyListItem>
                  <span className="color-accent font-semibold">&quot;회원&quot;</span>이란 회사에 개인정보를 제공하여 회원등록을 한 자로서, 회사의 정보를 지속적으로 제공받으며 회사가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.
                </PolicyListItem>
                <PolicyListItem>
                  <span className="color-accent font-semibold">&quot;서비스&quot;</span>란 회사가 제공하는 태양광 발전 사업성 분석, 개발, 시공, 기자재 공급, 투자, 관리운영, 기술실사 등 일체의 서비스를 말합니다.
                </PolicyListItem>
              </ul>
            </PolicySection>

            {/* Section 3 */}
            <PolicySection number="03" title="약관의 효력 및 변경">
              <div className="space-y-4">
                <p className="text-lg leading-[175%] color-white-90">
                  본 약관은 사이트를 통해 이를 공지하거나 이메일, 기타의 방법으로 이용자에게 통지함으로써 효력을 발생합니다.
                </p>
                <p className="text-lg leading-[175%] color-white-90">
                  회사는 필요하다고 인정되는 경우 본 약관을 변경할 수 있으며, 변경된 약관은 사이트 내 공지사항에 공지함으로써 이용자가 직접 확인할 수 있도록 합니다.
                </p>
                <p className="text-lg leading-[175%] color-white-90">
                  이용자는 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하고 회원 탈퇴를 요청할 수 있습니다. 변경된 약관의 효력 발생일 이후에도 서비스를 계속 이용하는 경우 약관의 변경 사항에 동의한 것으로 간주됩니다.
                </p>
              </div>
            </PolicySection>

            {/* Section 4 */}
            <PolicySection number="04" title="서비스의 내용">
              <p className="text-lg leading-[175%] color-white-90 mb-6">
                회사가 제공하는 서비스는 다음과 같습니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ServiceCard title="태양광 사업성 분석" description="발전량 예측, 수익성 분석, 투자 타당성 검토" />
                <ServiceCard title="태양광 개발" description="인허가 대행, 사업 개발, 프로젝트 관리" />
                <ServiceCard title="태양광 기자재 공급" description="태양광 모듈, 인버터, 구조물 등 자재 공급" />
                <ServiceCard title="태양광 시공" description="지붕형, 지상형, 수상형 태양광 설치 공사" />
                <ServiceCard title="태양광 투자" description="발전소 투자, 수익공유형 무상설치 모델" />
                <ServiceCard title="태양광 관리운영" description="발전소 모니터링, 유지보수, 성능 최적화" />
              </div>
            </PolicySection>

            {/* Section 5 */}
            <PolicySection number="05" title="회원가입 및 서비스 이용">
              <div className="space-y-4">
                <p className="text-lg leading-[175%] color-white-90">
                  회원이 되고자 하는 자는 회사가 정한 가입 양식에 따라 회원정보를 기입하고, 본 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.
                </p>
                <p className="text-lg leading-[175%] color-white-90">
                  회사는 다음 각 호에 해당하는 경우 회원가입을 승낙하지 않을 수 있습니다.
                </p>
                <ul className="space-y-3 ml-4">
                  <PolicyListItem>가입 신청자가 본 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우</PolicyListItem>
                  <PolicyListItem>허위의 정보를 기재하거나 회사가 제시하는 내용을 기재하지 않은 경우</PolicyListItem>
                  <PolicyListItem>이용자의 귀책사유로 인하여 승인이 불가능하거나 기타 규정한 제반 사항을 위반하여 신청하는 경우</PolicyListItem>
                </ul>
              </div>
            </PolicySection>

            {/* Section 6 */}
            <PolicySection number="06" title="회원의 의무">
              <ul className="space-y-3">
                <PolicyListItem>
                  회원은 서비스 이용과 관련하여 다음 각 호의 행위를 하여서는 안 됩니다.
                </PolicyListItem>
              </ul>
              <div className="mt-6 p-6 rounded-xl bg-white-5 border border-white-10">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-base leading-[175%] color-white-80">
                    <span className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
                    <span>신청 또는 변경 시 허위내용을 등록하는 행위</span>
                  </li>
                  <li className="flex items-start gap-3 text-base leading-[175%] color-white-80">
                    <span className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
                    <span>타인의 정보를 도용하는 행위</span>
                  </li>
                  <li className="flex items-start gap-3 text-base leading-[175%] color-white-80">
                    <span className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
                    <span>회사가 게시한 정보를 변경하는 행위</span>
                  </li>
                  <li className="flex items-start gap-3 text-base leading-[175%] color-white-80">
                    <span className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
                    <span>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등)를 송신 또는 게시하는 행위</span>
                  </li>
                  <li className="flex items-start gap-3 text-base leading-[175%] color-white-80">
                    <span className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
                    <span>회사 및 제3자의 저작권 등 지적재산권을 침해하는 행위</span>
                  </li>
                  <li className="flex items-start gap-3 text-base leading-[175%] color-white-80">
                    <span className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
                    <span>회사 및 제3자의 명예를 손상시키거나 업무를 방해하는 행위</span>
                  </li>
                  <li className="flex items-start gap-3 text-base leading-[175%] color-white-80">
                    <span className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
                    <span>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 사이트에 공개 또는 게시하는 행위</span>
                  </li>
                </ul>
              </div>
            </PolicySection>

            {/* Section 7 */}
            <PolicySection number="07" title="회사의 의무">
              <div className="space-y-4">
                <p className="text-lg leading-[175%] color-white-90">
                  회사는 법령과 본 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며, 본 약관이 정하는 바에 따라 지속적이고 안정적으로 서비스를 제공하기 위해 최선을 다합니다.
                </p>
                <p className="text-lg leading-[175%] color-white-90">
                  회사는 이용자가 안전하게 서비스를 이용할 수 있도록 개인정보(신용정보 포함) 보호를 위해 보안시스템을 갖추어야 하며, 개인정보처리방침을 공시하고 준수합니다.
                </p>
                <p className="text-lg leading-[175%] color-white-90">
                  회사는 이용자로부터 제기되는 의견이나 불만이 정당하다고 인정할 경우, 이를 처리하여야 합니다. 이용자가 제기한 의견이나 불만사항에 대해서는 게시판을 활용하거나 이메일 등을 통하여 이용자에게 처리 과정 및 결과를 전달합니다.
                </p>
              </div>
            </PolicySection>

            {/* Section 8 */}
            <PolicySection number="08" title="서비스 이용 제한">
              <p className="text-lg leading-[175%] color-white-90 mb-6">
                회사는 이용자가 본 약관의 의무를 위반하거나 서비스의 정상적인 운영을 방해한 경우, 경고, 일시정지, 영구이용정지 등으로 서비스 이용을 단계적으로 제한할 수 있습니다.
              </p>
              <div className="p-6 rounded-xl bg-white-5 border border-white-10">
                <p className="text-base leading-[175%] color-white-80">
                  회사는 전항에도 불구하고, 주민등록법을 위반한 명의도용 및 결제도용, 저작권법 및 컴퓨터프로그램보호법을 위반한 불법프로그램의 제공 및 운영 방해, 정보통신망법을 위반한 불법통신 및 해킹, 악성프로그램의 배포, 접속권한 초과행위 등과 같이 관련법을 위반한 경우에는 즉시 영구이용정지를 할 수 있습니다.
                </p>
              </div>
            </PolicySection>

            {/* Section 9 */}
            <PolicySection number="09" title="면책조항">
              <div className="space-y-4">
                <p className="text-lg leading-[175%] color-white-90">
                  회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 및 기타 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
                </p>
                <p className="text-lg leading-[175%] color-white-90">
                  회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.
                </p>
                <p className="text-lg leading-[175%] color-white-90">
                  회사는 이용자가 서비스를 이용하여 기대하는 수익을 얻지 못하거나 상실한 것에 대하여 책임을 지지 않습니다.
                </p>
                <p className="text-lg leading-[175%] color-white-90">
                  회사는 이용자가 사이트에 게재한 정보, 자료, 사실의 신뢰도, 정확성 등 내용에 관해서는 책임을 지지 않습니다.
                </p>
              </div>
            </PolicySection>

            {/* Section 10 */}
            <PolicySection number="10" title="저작권의 귀속">
              <div className="space-y-4">
                <p className="text-lg leading-[175%] color-white-90">
                  사이트가 작성한 저작물에 대한 저작권 및 기타 지적재산권은 회사에 귀속됩니다.
                </p>
                <p className="text-lg leading-[175%] color-white-90">
                  이용자는 사이트를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송, 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
                </p>
              </div>
            </PolicySection>

            {/* Section 11 */}
            <PolicySection number="11" title="분쟁 해결">
              <div className="space-y-4">
                <p className="text-lg leading-[175%] color-white-90">
                  회사는 이용자로부터 제출되는 불만사항 및 의견을 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보해 드립니다.
                </p>
                <p className="text-lg leading-[175%] color-white-90">
                  회사와 이용자 간에 발생한 전자상거래 분쟁과 관련하여 이용자의 피해구제신청이 있는 경우에는 공정거래위원회 또는 시·도지사가 의뢰하는 분쟁조정기관의 조정에 따를 수 있습니다.
                </p>
              </div>
            </PolicySection>

            {/* Section 12 */}
            <PolicySection number="12" title="재판권 및 준거법">
              <p className="text-lg leading-[175%] color-white-90">
                회사와 이용자 간에 발생한 분쟁에 관한 소송은 민사소송법상의 관할법원에 제기합니다. 회사와 이용자 간에 제기된 전자상거래 소송에는 대한민국 법을 적용합니다.
              </p>
            </PolicySection>

            {/* 문의 안내 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
              <h4 className="text-xl font-bold color-white mb-6">이용약관 관련 문의</h4>
              <p className="text-lg leading-[175%] color-white-90 mb-6">
                본 이용약관에 대한 문의사항이 있으시면 아래로 연락해 주시기 바랍니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm color-white-50 mb-1">회사명</p>
                  <p className="text-lg font-semibold color-white">타이런트(TYRANT)</p>
                </div>
                <div>
                  <p className="text-sm color-white-50 mb-1">전화번호</p>
                  <p className="text-lg font-semibold color-white">02-504-1204</p>
                </div>
                <div>
                  <p className="text-sm color-white-50 mb-1">이메일</p>
                  <p className="text-lg font-semibold color-accent">solaro@tyrant.co.kr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Policy Section Component
function PolicySection({ 
  number, 
  title, 
  children 
}: { 
  number: string; 
  title: string; 
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12 pb-12 border-b border-white-10 last:border-b-0">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-4xl font-bold color-accent opacity-50">{number}</span>
        <h2 className="text-2xl md:text-3xl font-bold color-white">{title}</h2>
      </div>
      {children}
    </div>
  );
}

// Policy List Item Component
function PolicyListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-lg leading-[175%] color-white-90">
      <span className="w-2 h-2 rounded-full bg-accent mt-3 flex-shrink-0"></span>
      <span>{children}</span>
    </li>
  );
}

// Service Card Component
function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-5 rounded-xl bg-white-5 border border-white-10 hover:border-accent/30 transition-colors">
      <h4 className="text-base font-semibold color-white mb-2">{title}</h4>
      <p className="text-sm color-white-70">{description}</p>
    </div>
  );
}

