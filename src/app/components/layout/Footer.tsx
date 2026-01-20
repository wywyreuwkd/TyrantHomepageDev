"use client"

import React from 'react';
import { useRouter, usePathname } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@components/ui/dialog';

type DialogType = 'terms' | 'privacy' | 'financial' | 'loan' | null;

export function Footer() {
  const [openDialog, setOpenDialog] = React.useState<DialogType>(null);

  const dialogContent = {
    terms: {
      title: '이용약관',
      content: (
        <div className="space-y-4 text-sm text-gray-700">
          <section>
            <h3 className="font-semibold text-gray-900 mb-2">제1조 (목적)</h3>
            <p>본 약관은 대한민카 (이하 "회사")가 제공하는 자동차 렌탈 및 리스 서비스의 이용과 관련하여 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
          </section>
          <section>
            <h3 className="font-semibold text-gray-900 mb-2">제2조 (용어의 정의)</h3>
            <p>1. "렌탈 서비스"란 회사가 보유한 차량을 일정 기간 동안 이용자에게 제공하는 서비스를 말합니다.</p>
            <p>2. "리스 서비스"란 회사가 이용자의 선택에 따라 차량을 구입하여 일정 기간 동안 제공하고 사용료를 받는 서비스를 말합니다.</p>
            <p>3. "이용자"란 본 약관에 따라 회사가 제공하는 서비스를 이용하는 개인 또는 법인을 말합니다.</p>
          </section>
          <section>
            <h3 className="font-semibold text-gray-900 mb-2">제3조 (약관의 효력 및 변경)</h3>
            <p>1. 본 약관은 서비스 이용 신청 시 이용자에게 고지되며, 이용자가 이에 동의함으로써 효력이 발생합니다.</p>
            <p>2. 회사는 필요한 경우 관련 법령을 위배하지 않는 범위 내에서 본 약관을 변경할 수 있으며, 변경된 약관은 시행일 7일 전부터 공지합니다.</p>
          </section>
          <section>
            <h3 className="font-semibold text-gray-900 mb-2">제4조 (서비스의 제공)</h3>
            <p>1. 회사는 이용자에게 다음과 같은 서비스를 제공합니다:</p>
            <p>- 자동차 장기 렌트 서비스</p>
            <p>- 자동차 오토 리스 서비스</p>
            <p>- 차량 관리 및 유지보수 서비스</p>
            <p>2. 서비스의 구체적인 내용은 개별 계약서에 따릅니다.</p>
          </section>
        </div>
      ),
    },
    privacy: {
      title: '개인정보처리방침',
      content: (
        <div className="space-y-4 text-sm text-gray-700">
          <section>
            <h3 className="font-semibold text-gray-900 mb-2">1. 개인정보의 수집 및 이용 목적</h3>
            <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
            <p>- 렌탈 및 리스 서비스 제공</p>
            <p>- 계약의 체결 및 이행</p>
            <p>- 요금 결제 및 정산</p>
            <p>- 고객 상담 및 불만 처리</p>
            <p>- 서비스 개선 및 마케팅 활용</p>
          </section>
          <section>
            <h3 className="font-semibold text-gray-900 mb-2">2. 수집하는 개인정보의 항목</h3>
            <p>회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다:</p>
            <p><strong>필수항목:</strong> 이름, 생년월일, 연락처, 주소, 이메일, 운전면허번호</p>
            <p><strong>선택항목:</strong> 직업, 차량 선호도</p>
            <p><strong>자동수집항목:</strong> IP 주소, 쿠키, 서비스 이용기록, 접속 로그</p>
          </section>
          <section>
            <h3 className="font-semibold text-gray-900 mb-2">3. 개인정보의 보유 및 이용기간</h3>
            <p>회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
            <p>- 계약 종료 후 5년 (전자상거래법)</p>
            <p>- 소비자 불만 또는 분쟁처리 기록: 3년</p>
            <p>- 신용정보의 수집/처리 및 이용 등에 관한 기록: 3년</p>
          </section>
          <section>
            <h3 className="font-semibold text-gray-900 mb-2">4. 개인정보의 제3자 제공</h3>
            <p>회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다:</p>
            <p>- 이용자가 사전에 동의한 경우</p>
            <p>- 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</p>
          </section>
        </div>
      ),
    },
    financial: {
      title: '금융소비자보호 내부통제기준',
      content: (
        <div className="space-y-4 text-sm text-gray-700">
          <section>
            <h3 className="font-semibold text-gray-900 mb-2">1. 목적</h3>
            <p>본 기준은 금융소비자보호에 관한 법률 제16조 및 동법 시행령 제11조에 따라 금융소비자보호를 위한 내부통제기준을 정함을 목적으로 합니다.</p>
          </section>
          <section>
            <h3 className="font-semibold text-gray-900 mb-2">2. 금융소비자보호 총괄기관</h3>
            <p>회사는 금융소비자보호를 위하여 다음과 같은 업무를 수행하는 금융소비자보호 총괄기관을 운영합니다:</p>
            <p>- 금융소비자보호 업무의 총괄·조정</p>
            <p>- 금융소비자보호 관련 제도 개선</p>
            <p>- 민원 및 분쟁 대응</p>
            <p>- 금융소비자보호 실태 점검 및 평가</p>
          </section>
          <section>
            <h3 className="font-semibold text-gray-900 mb-2">3. 금융상품 개발 및 판매 프로세스</h3>
            <p>회사는 금융상품의 개발 및 판매 과정에서 다음 사항을 준수합니다:</p>
            <p>- 금융상품 개발 시 소비자 피해 발생 가능성 검토</p>
            <p>- 금융상품 판매 시 적합성 원칙 및 적정성 원칙 준수</p>
            <p>- 금융소비자에게 중요한 사항 설명 및 이해 여부 확인</p>
            <p>- 불공정 영업행위 금지</p>
          </section>
          <section>
            <h3 className="font-semibold text-gray-900 mb-2">4. 민원 처리 체계</h3>
            <p>회사는 금융소비자의 민원을 신속하고 공정하게 처리하기 위한 체계를 구축·운영합니다:</p>
            <p>- 민원접수: 전화, 이메일, 방문 등 다양한 채널 운영</p>
            <p>- 처리기한: 접수일로부터 15영업일 이내 (연장 시 통지)</p>
            <p>- 처리결과 통지 및 불만족 시 금융감독원 등 분쟁조정기구 안내</p>
          </section>
          <section>
            <h3 className="font-semibold text-gray-900 mb-2">5. 임직원 교육</h3>
            <p>회사는 임직원을 대상으로 연 1회 이상 금융소비자보호에 관한 교육을 실시합니다.</p>
          </section>
        </div>
      ),
    },
    loan: {
      title: '대출성 상품판매원칙 준수사항',
      content: (
        <div className="space-y-4 text-sm text-gray-700">
          <section>
            <h3 className="font-semibold text-gray-900 mb-2">1. 과도한 대출 권유 금지</h3>
            <p>회사는 금융소비자의 상환능력을 초과하는 대출성 상품을 권유하지 않으며, 다음 사항을 철저히 준수합니다:</p>
            <p>- 금융소비자의 소득, 재산, 신용 등을 고려한 적정 대출한도 산정</p>
            <p>- 금융소비자의 재무상황에 부적합한 상품 권유 금지</p>
            <p>- 과도한 수수료, 위약금 등 부당한 조건 부과 금지</p>
          </section>
          <section>
            <h3 className="font-semibold text-gray-900 mb-2">2. 상품 설명의무</h3>
            <p>회사는 대출성 상품 판매 시 다음 사항을 금융소비자에게 충분히 설명합니다:</p>
            <p>- 대출 금리, 한도, 기간 등 주요 계약조건</p>
            <p>- 중도상환수수료, 연체이자율 등 부대비용</p>
            <p>- 원리금 상환방식 및 월 상환액</p>
            <p>- 담보 및 보증에 관한 사항</p>
            <p>- 기한의 이익 상실 사유 및 효과</p>
          </section>
          <section>
            <h3 className="font-semibold text-gray-900 mb-2">3. 설명 확인서 교부</h3>
            <p>회사는 금융소비자가 상품설명을 이해하였음을 확인하는 서면(설명확인서)을 교부받으며, 다음 사항을 기재합니다:</p>
            <p>- 설명을 받은 내용</p>
            <p>- 설명을 이해하였다는 확인</p>
            <p>- 금융소비자의 서명 또는 기명날인</p>
          </section>
          <section>
            <h3 className="font-semibold text-gray-900 mb-2">4. 불건전 영업행위 금지</h3>
            <p>회사는 다음과 같은 불건전 영업행위를 엄격히 금지합니다:</p>
            <p>- 허위·과장 광고 또는 기만적 홍보</p>
            <p>- 대출 금리 및 조건에 대한 불명확한 안내</p>
            <p>- 부당한 대출 알선 또는 중개</p>
            <p>- 금융소비자의 거부의사에도 불구한 반복적 권유</p>
          </section>
          <section>
            <h3 className="font-semibold text-gray-900 mb-2">5. 연체 시 안내</h3>
            <p>회사는 금융소비자가 연체할 경우 다음 사항을 안내합니다:</p>
            <p>- 연체이자율 및 연체로 인한 불이익</p>
            <p>- 신용등급 하락 가능성</p>
            <p>- 상담 및 채무조정 제도 안내</p>
          </section>
          <section>
            <h3 className="font-semibold text-gray-900 mb-2">6. 모니터링 및 점검</h3>
            <p>회사는 대출성 상품판매원칙 준수 여부를 정기적으로 모니터링하고 점검하여, 위반사항 발견 시 즉시 시정조치를 실시합니다.</p>
          </section>
        </div>
      ),
    },
  };

  const pathName = usePathname()

  if (pathName === "/pages/Admin/Login") {
    return (<div />);
  } else if (pathName === "/pages/Admin/Main") {
    return (<div />);
  } else {
    return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 mt-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <div className="flex gap-6 mb-4">
              <button
                onClick={() => setOpenDialog('terms')}
                className="text-xs text-gray-600 hover:text-gray-900 transition-colors"
              >
                이용약관
              </button>
              <button
                onClick={() => setOpenDialog('privacy')}
                className="text-xs text-gray-600 hover:text-gray-900 transition-colors"
              >
                개인정보처리방침
              </button>
            </div>
            <div className="flex gap-6">
              <button
                onClick={() => setOpenDialog('financial')}
                className="text-xs text-gray-600 hover:text-gray-900 transition-colors"
              >
                금융소비자보호 내부통제기준
              </button>
              <button
                onClick={() => setOpenDialog('loan')}
                className="text-xs text-gray-600 hover:text-gray-900 transition-colors"
              >
                대출성 상품판매원칙 준수사항
              </button>
            </div>
          </div>
        </div>

        <div className="text-xs text-gray-500 space-y-2 mb-8">
          <p>
            법인명 : 주식회사 대한민카 / 대표이사 : 김산하 
          </p>
          <p>
            사업자 등록번호 : 440-86-02535
          </p>
          <p>
            사업장 소재지 : 경기도 부천시 길주로77번길 55-13, 우진프라자 6층 602호
          </p>
        </div>

        <div className="text-center text-xs text-gray-500 pt-8 border-t border-gray-200">
          © All rights reserved. 대한민카
        </div>
      </div>

      {/* 다이얼로그 */}
      {openDialog && dialogContent[openDialog] && (
        <Dialog open={!!openDialog} onOpenChange={() => setOpenDialog(null)}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-gray-900">
                {dialogContent[openDialog].title}
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              {dialogContent[openDialog].content}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </footer>
  );
  }
}