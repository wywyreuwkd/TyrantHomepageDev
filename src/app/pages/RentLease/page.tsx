"use client"

import React from 'react';
import { Button } from '@components/ui/button';
import { CheckCircle, Circle } from 'lucide-react';
import { useRouter } from "next/navigation"
import { motion } from 'framer-motion';

export default function RentLease() {
  const [selectedTab, setSelectedTab] = React.useState<'rent' | 'lease'>('rent');
  const router = useRouter()

  const rentFeatures = [
    { title: '초기비용 절감', description: '보증금 없이 월 납입금만으로 차량 이용 가능' },
    { title: '세금 혜택', description: '개인사업자 및 법인 세금 공제 혜택' },
    { title: '유지보수 포함', description: '차량 정기점검 및 소모품 교체 서비스 제공' },
    { title: '신차 이용', description: '항상 최신 모델의 차량 이용 가능' },
    { title: '반납 편리', description: '계약 종료 후 간편한 차량 반납' },
    { title: '보험료 포함', description: '자동차 보험료가 월 납입금에 포함' },
  ];

  const leaseFeatures = [
    { title: '자산 소유', description: '리스 종료 후 차량 소유 가능' },
    { title: '할부 대체', description: '할부보다 유리한 금리 조건' },
    { title: '감가상각 혜택', description: '법인 차량으로 감가상각비 처리 가능' },
    { title: '중도 인수', description: '계약 중 량 인수 선택 가능' },
    { title: '주행거리 자유', description: '주행거리 제한 없이 자유로운 이용' },
    { title: '맞춤형 옵션', description: '개인 취향에 맞는 차량 옵션 선택' },
  ];

  const processSteps = [
    { step: '01', title: '상담 신청', description: '온라인 또는 전화로 간편하게 상담 신청' },
    { step: '02', title: '차량 선택', description: '원하시는 차량과 옵션을 선택' },
    { step: '03', title: '견적 확인', description: '맞춤형 견적서를 받아보고 검토' },
    { step: '04', title: '계약 체결', description: '계약서 작성 및 서류 제출' },
    { step: '05', title: '차량 출고', description: '원하는 날짜에 차량 인수' },
  ];

  return (
    <motion.main 
      className="flex-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              렌트 vs 리스
            </h1>
            <p className="text-lg text-gray-600">
              자동차 렌트와 리스의 차이점을 이해하고,<br />
              나에게 맞는 최적의 선택을 하세요.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Section */}
      <section className="w-full pt-2 md:pt-3 pb-10 md:pb-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          {/* Tabs */}
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="inline-flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setSelectedTab('rent')}
                className={`px-6 md:px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                  selectedTab === 'rent'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                장기렌트
              </button>
              <button
                onClick={() => setSelectedTab('lease')}
                className={`px-6 md:px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                  selectedTab === 'lease'
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                오토리스
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                {selectedTab === 'rent' ? '장기렌트란?' : '오토리스란?'}
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 md:mb-8">
                {selectedTab === 'rent'
                  ? '장기렌트는 일정 기간 동안 차량을 임대하여 사용하는 서비스입니다. 차량 구매 없이 월 납입금만으로 신차를 이용할 수 있으며, 보험료, 세금, 정비비용 등이 모두 포함되어 있어 편리하게 차량을 운용할 수 있습니다.'
                  : '오토리스는 차량을 일정 기간 임차하여 사용한 후, 리스 종료 시 차량을 인수하거나 반납할 수 있는 금융 서비스입니다. 할부 구매보다 유리한 금리 조건과 세제 혜택을 받을 수 있어 법인 및 개인사업자에게 인기가 높습니다.'}
              </p>
              <div className="bg-gray-50 rounded-2xl p-4 md:p-6">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">주요 특징</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-gray-700">
                      {selectedTab === 'rent' 
                        ? '차량 등록 및 소유권이 렌트사에 있어 각종 세금 및 보험료 부담 없음'
                        : '리스 종료 후 차량 소유 가능 (잔가 지급)'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-gray-700">
                      {selectedTab === 'rent'
                        ? '정기점검, 소모품 교체 등 유지관리 서비스 제공'
                        : '개인 및 법인 모두 이용 가능하며 세제 혜택'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-gray-700">
                      {selectedTab === 'rent'
                        ? '계약 종료 후 차량 교체 또는 반납 가능'
                        : '할부보다 낮은 금리로 차량 이용'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                {selectedTab === 'rent' ? '렌트' : '리스'} 장점
              </h2>
              <div className="grid gap-3 md:gap-4">
                {(selectedTab === 'rent' ? rentFeatures : leaseFeatures).map((feature, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 md:p-5 hover:border-blue-600 hover:shadow-md transition-all">
                    <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">{feature.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="w-full py-10 md:py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            렌트 vs 리스 비교
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 min-w-[600px]">
              <div className="p-4 md:p-8">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4 md:mb-6">비교 항목</h3>
                <div className="space-y-4 md:space-y-6">
                  <div className="text-xs md:text-sm font-semibold text-gray-700">소유권</div>
                  <div className="text-xs md:text-sm font-semibold text-gray-700">계약 종료 후</div>
                  <div className="text-xs md:text-sm font-semibold text-gray-700">세금 혜택</div>
                  <div className="text-xs md:text-sm font-semibold text-gray-700">초기 비용</div>
                  <div className="text-xs md:text-sm font-semibold text-gray-700">유지보수</div>
                  <div className="text-xs md:text-sm font-semibold text-gray-700">보험료</div>
                  <div className="text-xs md:text-sm font-semibold text-gray-700">적합한 대상</div>
                </div>
              </div>

              <div className="p-4 md:p-8 bg-blue-50/50">
                <div className="flex items-center gap-2 mb-4 md:mb-6">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-600 rounded-full"></div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900">장기렌트</h3>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <div className="text-xs md:text-sm text-gray-600">렌트사 소유</div>
                  <div className="text-xs md:text-sm text-gray-600">반납 또는 재계약</div>
                  <div className="text-xs md:text-sm text-gray-600">개인사업자, 법인</div>
                  <div className="text-xs md:text-sm text-gray-600">보증금 없음</div>
                  <div className="text-xs md:text-sm text-gray-600">렌트사 제공</div>
                  <div className="text-xs md:text-sm text-gray-600">월 납입금 포함</div>
                  <div className="text-xs md:text-sm text-gray-600">편리함 추구, 세금혜택</div>
                </div>
              </div>

              <div className="p-4 md:p-8 bg-orange-50/50">
                <div className="flex items-center gap-2 mb-4 md:mb-6">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-orange-500 rounded-full"></div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900">오토리스</h3>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <div className="text-xs md:text-sm text-gray-600">리스사 소유 (인수 가능)</div>
                  <div className="text-xs md:text-sm text-gray-600">인수 또는 반납</div>
                  <div className="text-xs md:text-sm text-gray-600">법인, 개인</div>
                  <div className="text-xs md:text-sm text-gray-600">보증금 약간 필요</div>
                  <div className="text-xs md:text-sm text-gray-600">이용자 부담</div>
                  <div className="text-xs md:text-sm text-gray-600">별도 가입</div>
                  <div className="text-xs md:text-sm text-gray-600">소유 희망, 낮은 금리</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-10 md:py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-3 md:mb-4">
            이용 절차
          </h2>
          <p className="text-center text-sm md:text-base text-gray-600 mb-8 md:mb-12">
            간단한 5단계로 원하는 차량을 만나보세요
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-6">
            {processSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg md:text-xl font-bold mb-3 md:mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">{item.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600">{item.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 bg-gradient-to-b from-blue-600 to-blue-700">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            지금 바로 시작하세요
          </h2>
          <p className="text-base md:text-lg text-blue-100 mb-6 md:mb-8">
            전문 상담원이 고객님께 맞는 최적의 상품을 제안해 드립니다
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button 
              className="bg-white hover:bg-gray-100 text-blue-600 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-full font-semibold"
              onClick={() => router.push('/pages/Counsel')}
            >
              무료 상담 신청
            </Button>
            <Button className="bg-blue-800 hover:bg-blue-900 text-white border-2 border-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-full font-semibold">
              전화 상담 1588-0000
            </Button>
          </div>
        </div>
      </section>
    </motion.main>
  );
}