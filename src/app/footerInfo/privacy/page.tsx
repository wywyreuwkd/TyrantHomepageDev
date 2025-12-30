import type { Metadata } from "next";
import { LabelAccent } from "@components/shared/SectionLabel";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "타이런트 개인정보처리방침 안내 페이지입니다.",
};

export default function PrivacyPage() {
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
            <LabelAccent label="PRIVACY POLICY" />
            <h1 className="text-[32px] md:text-[48px] font-bold leading-[130%] color-white mt-4">
              개인정보처리방침
            </h1>
            <p className="text-lg color-white-70 mt-4">
              시행일: 2025년 10월 22일
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            {/* 서문 */}
            <div className="mb-12 p-8 rounded-2xl bg-white-5 border border-white-10">
              <p className="text-lg leading-[175%] color-white-90 mb-4">
                타이런트는 고객님의 개인정보를 중요시하며, &quot;정보통신망 이용촉진 및 정보보호&quot;에 관한 법률을 준수하고 있습니다.
              </p>
              <p className="text-lg leading-[175%] color-white-90 mb-4">
                타이런트는 개인정보취급방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
              </p>
              <p className="text-lg leading-[175%] color-white-90">
                타이런트는 개인정보취급방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.
              </p>
            </div>

            {/* Section 1 */}
            <PolicySection number="01" title="수집하는 개인정보 항목">
              <p className="text-lg leading-[175%] color-white-90 mb-6">
                타이런트는 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.
              </p>
              <ul className="space-y-3">
                <PolicyListItem>
                  <span className="color-accent font-semibold">수집항목:</span> 이름, 비밀번호, 전화번호, 이메일, 서비스 이용기록, 접속 로그, 쿠키, 접속 IP 정보
                </PolicyListItem>
                <PolicyListItem>
                  <span className="color-accent font-semibold">수집방법:</span> 홈페이지를 통한 회원가입
                </PolicyListItem>
              </ul>
            </PolicySection>

            {/* Section 2 */}
            <PolicySection number="02" title="개인정보의 수집 및 이용목적">
              <p className="text-lg leading-[175%] color-white-90 mb-6">
                타이런트는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
              </p>
              <ul className="space-y-3">
                <PolicyListItem>
                  서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산 콘텐츠 제공
                </PolicyListItem>
                <PolicyListItem>
                  마케팅 및 광고에 활용 이벤트 등 광고성 정보 전달, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계
                </PolicyListItem>
              </ul>
            </PolicySection>

            {/* Section 3 */}
            <PolicySection number="03" title="개인정보의 보유 및 이용기간">
              <p className="text-lg leading-[175%] color-white-90 mb-6">
                원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 타이런트는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
              </p>
              <ul className="space-y-3">
                <PolicyListItem>
                  <span className="color-accent font-semibold">보존 항목:</span> 이름, 전화번호, 이메일
                </PolicyListItem>
                <PolicyListItem>
                  <span className="color-accent font-semibold">보존 근거:</span> 신용정보의 이용 및 보호에 관한 법률
                </PolicyListItem>
                <PolicyListItem>
                  <span className="color-accent font-semibold">보존 기간:</span> 3년
                </PolicyListItem>
              </ul>
            </PolicySection>

            {/* Section 4 */}
            <PolicySection number="04" title="개인정보의 파기절차 및 방법">
              <p className="text-lg leading-[175%] color-white-90 mb-6">
                타이런트는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.
              </p>
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-white-5 border border-white-10">
                  <h4 className="text-lg font-semibold color-accent mb-3">파기절차</h4>
                  <p className="text-base leading-[175%] color-white-80">
                    회원님이 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라 일정 기간 저장된 후 파기되어집니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white-5 border border-white-10">
                  <h4 className="text-lg font-semibold color-accent mb-3">파기방법</h4>
                  <p className="text-base leading-[175%] color-white-80">
                    전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
                  </p>
                </div>
              </div>
            </PolicySection>

            {/* Section 5 */}
            <PolicySection number="05" title="수집한 개인정보의 위탁">
              <p className="text-lg leading-[175%] color-white-90">
                타이런트는 고객님의 동의 없이 고객님의 정보를 외부 업체에 위탁하지 않습니다. 향후 그러한 필요가 생길 경우, 위탁 대상자와 위탁 업무 내용에 대해 고객님에게 통지하고 필요한 경우 사전 동의를 받도록 하겠습니다.
              </p>
            </PolicySection>

            {/* Section 6 */}
            <PolicySection number="06" title="이용자 및 법정대리인의 권리와 그 행사방법">
              <div className="space-y-4">
                <p className="text-lg leading-[175%] color-white-90">
                  이용자 및 법정 대리인은 언제든지 등록되어 있는 자신 혹은 당해 만 14세 미만 아동의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다.
                </p>
                <p className="text-lg leading-[175%] color-white-90">
                  이용자 혹은 만 14세 미만 아동의 개인정보 조회, 수정을 위해서는 &apos;개인정보변경&apos;(또는 &apos;회원정보수정&apos; 등)을 가입해지(동의철회)를 위해서는 &quot;회원탈퇴&quot;를 클릭 하여 본인 확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다.
                </p>
                <p className="text-lg leading-[175%] color-white-90">
                  혹은 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체없이 조치하겠습니다.
                </p>
                <p className="text-lg leading-[175%] color-white-90">
                  귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이 통지하여 정정이 이루어지도록 하겠습니다.
                </p>
                <p className="text-lg leading-[175%] color-white-90">
                  타이런트는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는 &quot;개인정보의 보유 및 이용기간&quot;에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.
                </p>
              </div>
            </PolicySection>

            {/* Section 7 */}
            <PolicySection number="07" title="개인정보 관리책임자">
              <p className="text-lg leading-[175%] color-white-90 mb-6">
                타이런트는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를 지정하고 있습니다.
              </p>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                <h4 className="text-xl font-bold color-white mb-6">개인정보관리책임자</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm color-white-50 mb-1">성명</p>
                    <p className="text-lg font-semibold color-white">홍금표</p>
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
              <p className="text-lg leading-[175%] color-white-90 mt-6">
                귀하께서는 타이런트 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다. 타이런트는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.
              </p>
            </PolicySection>

            {/* Section 8 */}
            <PolicySection number="08" title="개인정보침해 관련 상담 및 신고">
              <p className="text-lg leading-[175%] color-white-90 mb-6">
                기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ContactCard
                  title="개인정보침해 신고센터"
                  website="privacy.kisa.or.kr"
                  phone="국번없이 118"
                />
                <ContactCard
                  title="정보보호마크 인증 위원회"
                  website="www.eprivacy.or.kr"
                  phone="02-550-9532~4"
                />
                <ContactCard
                  title="경찰청 사이버테러대응센터"
                  website="ecrm.police.go.kr"
                  phone="국번없이 182"
                />
              </div>
            </PolicySection>
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

// Contact Card Component
function ContactCard({ 
  title, 
  website, 
  phone 
}: { 
  title: string; 
  website: string; 
  phone: string;
}) {
  return (
    <div className="p-6 rounded-xl bg-white-5 border border-white-10 hover:border-accent/30 transition-colors">
      <h4 className="text-base font-semibold color-white mb-4">{title}</h4>
      <div className="space-y-2">
        <p className="text-sm color-white-70">{website}</p>
        <p className="text-sm color-accent font-medium">{phone}</p>
      </div>
    </div>
  );
}
