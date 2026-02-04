"use client"

import Link from "next/link";
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: '프로젝트는 어떻게 생성하나요?',
    answer: '좌측 사이드바에서 "프로젝트" 메뉴를 선택한 후 "신규 프로젝트 접수"를 클릭합니다. 프로젝트명, 담당자, 예상 기간 등 필수 정보를 입력하고 저장하면 즉시 프로젝트가 생성됩니다. 생성된 프로젝트는 대시보드에서 실시간으로 진행 상황을 확인할 수 있으며, 팀원에게 자동으로 알림이 전송됩니다.'
  },
  {
    id: 2,
    question: '파일 업로드 시 지원되는 형식은 무엇인가요?',
    answer: '문서 파일은 PDF, DOCX, XLSX, PPTX, TXT 형식을 지원하며, 이미지는 JPG, PNG, GIF, 동영상은 MP4, MOV 형식을 업로드할 수 있습니다. 파일당 최대 100MB까지 가능하며, File Manager에서 여러 파일을 동시에 업로드할 수 있습니다. 업로드된 파일은 자동으로 카테고리별로 분류됩니다.'
  },
  {
    id: 3,
    question: '담당자별 권한은 어떻게 설정하나요?',
    answer: '설정 메뉴에서 "사용자 관리"로 이동하여 팀원별로 역할을 지정할 수 있습니다. 관리자, 매니저, 일반 사용자, 열람 전용 등 4단계 권한이 있으며, 각 역할마다 접근 가능한 메뉴와 기능이 다릅니다. 권한 변경은 즉시 반영되며, 해당 사용자에게 이메일로 알림이 발송됩니다.'
  },
  {
    id: 4,
    question: '데이터를 엑셀로 내보낼 수 있나요?',
    answer: '모든 테이블 화면 우측 상단의 내보내기 아이콘을 클릭하면 CSV, Excel, JSON 형식으로 데이터를 다운로드할 수 있습니다. 또한 리포트 메뉴에서 일간, 주간, 월간 자동 리포트를 설정하여 정해진 시간에 이메일로 받아볼 수도 있습니다. 필터 조건을 적용한 상태로 내보내기가 가능합니다.'
  },
  {
    id: 5,
    question: '시스템 오류가 발생하면 어떻게 해야 하나요?',
    answer: '사이드바의 "지원" 메뉴에서 문의하기를 통해 문제 상황을 상세히 작성하여 티켓을 생성할 수 있습니다. 일반적으로 영업일 기준 2~4시간 이내에 답변이 제공되며, 긴급한 경우 support@company.com으로 직접 문의하시면 빠른 지원이 가능합니다. 시스템 점검 일정은 공지사항에서 확인할 수 있습니다.'
  },
  {
    id: 6,
    question: '알림은 어떤 방식으로 받을 수 있나요?',
    answer: '프로젝트 마일스톤 달성, 문서 승인 요청, 팀원 멘션, 시스템 공지 등 중요한 이벤트 발생 시 자동으로 알림이 전송됩니다. 설정 메뉴의 "알림 설정"에서 이메일, 인앱 알림, 푸시 알림 중 원하는 방식을 선택할 수 있으며, 이벤트 종류별로 개별 설정이 가능합니다. 모든 알림은 30일간 보관됩니다.'
  }
];

interface FAQPageProps {
  onMenuClick: () => void;
  onNavigate?: (page: string) => void;
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter(item => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  return (
    <div>
      {/* FAQ List */}
      <div className="space-y-0">
        {faqData.map((item, index) => {
          const isOpen = openItems.includes(item.id);

          return (
            <div className={`transition-all duration-200 border-b border-gray-200 dark:border-gray-700 ${ isOpen ? 'bg-gray-50 dark:bg-gray-900' : 'bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800' }`}
              key={item.id}>
              {/* Question Button */}
              <button className="w-full text-left flex items-start gap-6 transition-all duration-200 group p-7"
                onClick={() => toggleItem(item.id)} >
                {/* Number */}
                <div className="flex-shrink-0 w-12 pt-0.5 transition-all duration-200">
                  <span 
                    className={`font-mono text-[15px] font-semibold transition-all duration-200 tracking-[0.02em] ${ isOpen ? 'text-[#5a7bc8] dark:text-[#5a7bc8]' : 'text-slate-600 dark:text-gray-400'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-6">
                    <h3 className={`text-[17px] font-semibold leading-[1.6] transition-all duration-200 tracking-tight ${ isOpen ? 'text-[#243c84] dark:text-[#5a7bc8]' : 'text-slate-900 dark:text-gray-100'}`}>
                      {item.question}
                    </h3>

                    {/* Arrow Icon */}
                    <ChevronDown className={`flex-shrink-0 transition-all duration-200 mt-0.5 ${ isOpen ? 'text-[#243c84] dark:text-[#5a7bc8] rotate-180' : 'text-slate-600 dark:text-gray-400 rotate-0'}`}
                      size={20}
                      strokeWidth={2.5} />
                  </div>

                  {/* Answer */}
                  <div className={`transition-all duration-200 ease-out overflow-hidden ${ isOpen ? 'max-h-[600px] opacity-100 pt-5' : 'max-h-0 opacity-0 pt-0' }`}>
                    <p className="text-[15px] leading-[1.8] pr-12 text-slate-600 dark:text-gray-300">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}