"use client"

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: '계약 관련 서류는 어떤 것이 필요한가요?',
      answer: '렌트는 대출성 상품이 아닙니다. 운전면허증 첨부로 가능 여부 먼저 확인 가능합니다. 단, 간편심사 패스 어려울 시 소득서류  추가로 첨부될 수 있습니다.'
    },
    {
      question: '개인사업자/법인은 장기렌트카 이용이 가능한가요?',
      answer: '네, 개인사업자 및 법인 모두 장기렌트카 이용이 가능합니다. 법인의 경우 사업자등록증과 법인인감증명서가 필요하며, 개인사업자는 사업자등록증과 소득금액증명원을 준비해주시면 됩니다. 세금 혜택도 받으실 수 있습니다.'
    },
    {
      question: '계약 후 차량은 언제든지 변경할 수 있나요?',
      answer: '계약 후 차량 변경은 계약 조건에 따라 다르지만, 일반적으로 계약 기간 중 차량 변경은 제한적입니다. 다만, 특별한 사유가 있는 경우 상담을 통해 해결 방안을 찾아드릴 수 있습니다.'
    },
    {
      question: '신용이 낮아도 장기렌트카 이용이 가능한가요?',
      answer: '네, 신용등급이 낮더라도 장기렌트카 이용이 가능합니다. 다만, 조건에 따라 보증금이 필요하거나 월 렌트료가 조정될 수 있습니다. 무료 상담을 통해 고객님의 상황에 맞는 최적의 조건을 찾아드립니다.'
    },
    {
      question: '무보증 장기렌트는 가능한가요?',
      answer: '네, 무보증 장기렌트가 가능합니다. 신용등급과 소득 조건에 따라 무보증으로 진행하실 수 있으며, 보증금 30% 또는 선수금 등 다양한 옵션 중 선택하실 수 있습니다.'
    },
    {
      question: '차량 정비 및 유지 관리는 어떻게 이루어지나요?',
      answer: '장기렌트카의 경우 정기적인 차량 점검 및 소모품 교체는 렌트사에서 관리해드립니다. 엔진오일, 타이어, 배터리 등 소모품 교체와 정기 점검이 포함되어 있어 편리하게 차량을 이용하실 수 있습니다.'
    },
    {
      question: '계약 기간 중 옵션 변경이나 차량 변경이 가능한가요?',
      answer: '계약 기간 중 차량 옵션 변경은 불가하지만, 차량 교체는 일정 조건 하에 가능합니다. 계약 후 일정 기간이 지나면 차량을 교체할 수 있으며, 이 경우 새로운 계약 조건이 적용됩니다.'
    },
    {
      question: '렌트 차량의 보험은 어떻게 처리되나요?',
      answer: '장기렌트카는 종합보험이 기본적으로 포함되어 있습니다. 대인/대물 무한, 자기신체사고, 자차보험 등이 포함되어 있어 안심하고 운행하실 수 있습니다. 사고 발생 시 보험 처리도 렌트사에서 도와드립니다.'
    },
    {
      question: '장기렌트카를 이용하려면 어떤 자격이 필요한가요?',
      answer: '만 21세 이상이며 운전면허를 취득한 지 1년 이상이면 이용 가능합니다. 신용등급과 소득 조건에 따라 계약 조건이 달라질 수 있으며, 무료 상담을 통해 정확한 안내를 받으실 수 있습니다.'
    },
    {
      question: '장기렌트카를 이용하면 어떤 혜택이 있나요?',
      answer: '초기 구매 비용 부담이 없고, 자동차세, 보험료, 정비비용 등이 월 렌트료에 포함되어 있어 관리가 편리합니다. 또한 신차를 정기적으로 교체할 수 있고, 법인/사업자의 경우 세금 혜택도 받으실 수 있습니다.'
    },
    {
      question: '장기렌트와 리스의 차이는 무엇인가요?',
      answer: '장기렌트는 차량의 소유권이 렌트사에 있으며 차량 관리 서비스가 포함됩니다. 리스는 금융상품으로 계약 종료 후 차량 인수가 가능하며, 소유권 이전이 목적입니다. 각각의 장단점이 있어 고객님의 상황에 맞는 상품을 선택하시면 됩니다.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="flex justify-center items-center bg-white px-4 md:px-0 pt-[50px] pb-[60px]">
      <div className="w-full max-w-[900px]">
        {/* Header Section with Background */}
        <div className="relative mb-8 md:mb-16 overflow-hidden h-40 md:h-[280px] bg-gradient-to-br from-[#1a5dab] to-[#144a8f]">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white [clip-path:circle(50%_at_80%_20%)]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white [clip-path:circle(40%_at_20%_80%)]"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-[60px]">
            <h2 className="text-4xl md:text-[70px] mb-2 md:mb-4 font-['Nexon_Lv1_Gothic_OTF',sans-serif] font-black text-white tracking-[-0.02em]">
              자주 묻는 질문
            </h2>
            <p className="text-sm md:text-xl font-['Pretendard',sans-serif] font-medium text-white/90 tracking-[-0.01em]">
              장기렌트에 관한 궁금증을<br />
              모두 해결해드립니다!
            </p>
          </div>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-2 bg-white transition-all duration-300 hover:border-[#1a5dab] ${
                openIndex === index ? 'border-[#1a5dab]' : 'border-gray-200'
              }`}
            >
              {/* Question */}
              <button 
                onClick={() => toggleFaq(index)} 
                className={`w-full flex items-center justify-between transition-colors duration-300 py-7 px-8 ${
                  openIndex === index ? 'bg-[#f8fafc]' : 'bg-white'
                }`}
              >
                <div className="flex items-center flex-1 gap-4">
                  <span className="font-['Pretendard',sans-serif] font-bold text-lg text-[#1a5dab] min-w-[28px]">
                    Q.
                  </span>
                  <span 
                    className={`font-['Pretendard',sans-serif] font-semibold text-lg text-left tracking-[-0.01em] ${
                      openIndex === index ? 'text-[#1a5dab]' : 'text-gray-800'
                    }`}
                  >
                    {faq.question}
                  </span>
                </div>
                <div 
                  className={`w-10 h-10 flex items-center justify-center transition-all duration-300 ${
                    openIndex === index ? 'bg-[#1a5dab]' : 'bg-gray-100'
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" strokeWidth={2.5} />
                  ) : (
                    <Plus className="w-5 h-5 text-[#1a5dab]" strokeWidth={2.5} />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div 
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === index ? '500px' : '0'
                }}
              >
                <div className="border-t-2 border-gray-200 py-7 px-8 pl-[76px] bg-white">
                  <span className="font-['Pretendard',sans-serif] font-medium text-base text-gray-600 leading-[1.8] tracking-[-0.01em] block">
                    {faq.answer}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}