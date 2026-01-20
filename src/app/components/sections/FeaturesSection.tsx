"use client"

import React, { useState, useEffect } from 'react';
import { Button } from '@components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs';

export function FeaturesSection() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('features-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div id="features-section" className="w-full bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-10 md:py-20">
        {/* 제목 섹션 */}
        <div className="text-center mb-12 md:mb-20 bg-white rounded-3xl shadow-lg py-8 px-4 md:py-12 md:px-8">
          <div 
            className={`inline-block mb-4 px-4 md:px-6 py-2 bg-blue-50 rounded-full transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-xs md:text-sm font-semibold text-blue-600 tracking-wide">WHY 대한민카</span>
          </div>
          <h2 
            className={`text-2xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            대한민카 렌트/리스의 장점
          </h2>
          <p 
            className={`text-base md:text-xl text-gray-600 font-light max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            더 스마트한 선택, 더 편리한 경험.<br />
            대한민카와 함께라면 프리미엄 차량 이용이 쉬워집니다.
          </p>
        </div>

        <Tabs defaultValue="guarantee" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 md:mb-12 h-auto bg-transparent gap-2">
            <TabsTrigger value="guarantee" className="text-sm md:text-lg py-3 md:py-4 rounded-full data-[state=active]:bg-gray-900 data-[state=active]:text-white data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-900">초기비용 zero</TabsTrigger>
            <TabsTrigger value="documents" className="text-sm md:text-lg py-3 md:py-4 rounded-full data-[state=active]:bg-gray-900 data-[state=active]:text-white data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-900">편리한 차량관리</TabsTrigger>
            <TabsTrigger value="delivery" className="text-sm md:text-lg py-3 md:py-4 rounded-full data-[state=active]:bg-gray-900 data-[state=active]:text-white data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-900">세금 절세효과</TabsTrigger>
            <TabsTrigger value="conditions" className="text-sm md:text-lg py-3 md:py-4 rounded-full data-[state=active]:bg-gray-900 data-[state=active]:text-white data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-900">최저가 보장제</TabsTrigger>
          </TabsList>

          <TabsContent value="guarantee" className="space-y-6 md:space-y-8">
            <div className="text-center">
              <h3 className="text-xl md:text-3xl mb-6 md:mb-8 font-semibold text-gray-900">초기비용 zero</h3>
              
              {/* 이미지 */}
              <div className="max-w-4xl mx-auto mb-6 md:mb-10">
                <img 
                  src="https://images.unsplash.com/photo-1744819773373-e9e1cc11e826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2lucyUyMHN0YWNrJTIwc2F2aW5nc3xlbnwxfHx8fDE3Njc4NTY4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="초기비용 zero"
                  className="w-full h-60 md:h-80 lg:h-[500px] object-cover rounded-2xl"
                />
              </div>

              {/* 박스 문구 */}
              <div className="max-w-4xl mx-auto">
                <div className="bg-gray-50 rounded-2xl p-6 md:p-12">
                  <p className="text-base md:text-xl text-gray-900 font-normal leading-relaxed mb-6">
                    차량 구매 시 필요한 막대한 초기비용 부담 없이 시작하세요.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 md:gap-6 text-left">
                    <div className="bg-white rounded-xl p-4 md:p-6">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">등록세·취득세 면제</h4>
                      <p className="text-xs md:text-sm text-gray-600">차량 등록 시 발생하는 각종 세금을 절감할 수 있습니다.</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 md:p-6">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">보험료 포함</h4>
                      <p className="text-xs md:text-sm text-gray-600">자동차 보험료가 월 납입금에 포함되어 별도 부담이 없습니다.</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 md:p-6">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">보증금 없음</h4>
                      <p className="text-xs md:text-sm text-gray-600">보증금 없이 월 납입금만로 차량 이용이 가능합니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="documents" className="space-y-6 md:space-y-8">
            <div className="text-center">
              <h3 className="text-xl md:text-3xl mb-6 md:mb-8 font-semibold text-gray-900">편리한 차량관리</h3>
              
              {/* 이미지 */}
              <div className="max-w-4xl mx-auto mb-6 md:mb-10">
                <img 
                  src="https://images.unsplash.com/photo-1637640125496-31852f042a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pYyUyMGdhcmFnZSUyMHdvcmtzaG9wfGVufDF8fHx8MTc2Nzg1Njk2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="편리한 차량관리"
                  className="w-full h-60 md:h-80 lg:h-[500px] object-cover rounded-2xl"
                />
              </div>

              {/* 박스 문구 */}
              <div className="max-w-4xl mx-auto">
                <div className="bg-gray-50 rounded-2xl p-6 md:p-12">
                  <p className="text-base md:text-xl text-gray-900 font-normal leading-relaxed mb-6">
                    차량 관리의 모든 것을 저희가 책임지고 해드립니다.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 md:gap-6 text-left">
                    <div className="bg-white rounded-xl p-4 md:p-6">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">정기점검 서비스</h4>
                      <p className="text-xs md:text-sm text-gray-600">제조사 권장 주기에 맞춰 정기적인 차량 점검을 제공합니다.</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 md:p-6">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">소모품 교체</h4>
                      <p className="text-xs md:text-sm text-gray-600">엔진오일, 타이어 등 주요 소모품을 무상으로 교체해 드립니다.</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 md:p-6">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">24시간 긴급출동</h4>
                      <p className="text-xs md:text-sm text-gray-600">고장이나 사고 발생 시 언제든지 긴급출동 서비스를 이용하세요.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="delivery" className="space-y-6 md:space-y-8">
            <div className="text-center">
              <h3 className="text-xl md:text-3xl mb-6 md:mb-8 font-semibold text-gray-900">세금 절세효과</h3>
              
              {/* 이미지 */}
              <div className="max-w-4xl mx-auto mb-6 md:mb-10">
                <img 
                  src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXglMjBjYWxjdWxhdG9yJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY3ODU2NTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="세금 절세효과"
                  className="w-full h-60 md:h-80 lg:h-[500px] object-cover rounded-2xl"
                />
              </div>

              {/* 박스 문구 */}
              <div className="max-w-4xl mx-auto">
                <div className="bg-gray-50 rounded-2xl p-6 md:p-12">
                  <p className="text-base md:text-xl text-gray-900 font-normal leading-relaxed mb-6">
                    렌트와 리스로 전액 비용처리가 가능하여 세금 절감 혜택을 받으세요.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 md:gap-6 text-left">
                    <div className="bg-white rounded-xl p-4 md:p-6">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">100% 비용처리</h4>
                      <p className="text-xs md:text-sm text-gray-600">렌탈료 전액을 비용으로 처리하여 법인세 절감이 가능합니다.</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 md:p-6">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">부가세 환급</h4>
                      <p className="text-xs md:text-sm text-gray-600">일반과세자의 경우 부가가치세 환급 혜택을 받을 수 있습니다.</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 md:p-6">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">재산세 부담 없음</h4>
                      <p className="text-xs md:text-sm text-gray-600">차량을 소유하지 않아 재산세 부담이 전혀 없습니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="conditions" className="space-y-6 md:space-y-8">
            <div className="text-center">
              <h3 className="text-xl md:text-3xl mb-6 md:mb-8 font-semibold text-gray-900">최저가 보장제</h3>
              
              {/* 이미지 */}
              <div className="max-w-4xl mx-auto mb-6 md:mb-10">
                <img 
                  src="https://images.unsplash.com/photo-1743183988574-e8b4d2e5830a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW5jaWwlMjBjaGVja2xpc3QlMjBjaGVja21hcmslMjBwYXBlcnxlbnwxfHx8fDE3Njc4NTcyMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="최저가 보장제"
                  className="w-full h-60 md:h-80 lg:h-[500px] object-cover rounded-2xl"
                />
              </div>

              {/* 박스 문구 */}
              <div className="max-w-4xl mx-auto">
                <div className="bg-gray-50 rounded-2xl p-6 md:p-12">
                  <p className="text-base md:text-xl text-gray-900 font-normal leading-relaxed mb-6">
                    대한민카보다 저렴한 견적이 있다면 더 합리적인 가격으로 다시 견적을 드립니다.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 md:gap-6 text-left">
                    <div className="bg-white rounded-xl p-4 md:p-6">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">타사 견적 비교</h4>
                      <p className="text-xs md:text-sm text-gray-600">다른 업체의 견적서를 제출하시면 최저가를 보장해 드립니다.</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 md:p-6">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">투명한 가격 공개</h4>
                      <p className="text-xs md:text-sm text-gray-600">숨은 비용 없이 모든 항목을 투명하게 공개합니다.</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 md:p-6">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">맞춤형 할인</h4>
                      <p className="text-xs md:text-sm text-gray-600">고객님의 상황에 맞는 최적의 할인 혜택을 제공합니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}