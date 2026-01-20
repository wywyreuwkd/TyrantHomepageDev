"use client"

import React from 'react';
import {Suspense} from "react";
import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from "next/navigation"
import { ImageWithFallback } from '@components/shared/ImageWithFallback';
import { carListings } from '@components/data/carData';

import audiLogo from '@public/logo/logo_audi.png';
import benzLogo from '@public/logo/logo_benz.png';
import bmwLogo from '@public/logo/logo_bmw.png';
import cadillacLogo from '@public/logo/logo_cadillac.png';
import chevroletLogo from '@public/logo/logo_chevrolet.png';
import fordLogo from '@public/logo/logo_ford.png';
import genesisLogo from '@public/logo/logo_genesis.png';
import hondaLogo from '@public/logo/logo_honda.png';
import hyundaiLogo from '@public/logo/logo_hyundai.png';
import jeepLogo from '@public/logo/logo_jeep.png';
import ssangyongLogo from '@public/logo/logo_ssangyong.png';
import kiaLogo from '@public/logo/logo_kia.png';
import landroverLogo from '@public/logo/logo_landrover.png';
import lexusLogo from '@public/logo/logo_lexus.png';
import miniLogo from '@public/logo/logo_mini.png';
import porscheLogo from '@public/logo/logo_porsche.png';
import volvoLogo from '@public/logo/logo_volvo.png';
import volkswagenLogo from '@public/logo/logo_volkswagen.png';
import toyotaLogo from '@public/logo/logo_toyota.png';
import renaultLogo from '@public/logo/logo_renault.png';
import teslaLogo from '@public/logo/logo_tesla.png';

const manufacturers = [
  { name: '전체', logo: hyundaiLogo, type: 'image', page: '1' as const },
  { name: '현대', logo: hyundaiLogo, type: 'image', page: '2' as const },
  { name: '기아', logo: kiaLogo, type: 'image', page: '3' as const },
  { name: '제네시스', logo: genesisLogo, type: 'image', page: '4' as const },
  { name: '쉐보레', logo: chevroletLogo, type: 'image', page: '5' as const },
  { name: '르노코리아', logo: renaultLogo, type: 'image', page: '6' as const },
  { name: 'KG모빌리티', logo: ssangyongLogo, type: 'image', page: '7' as const },
  { name: '벤츠', logo: benzLogo, type: 'image', page: '8' as const },
  { name: 'BMW', logo: bmwLogo, type: 'image', page: '9' as const },
  { name: '아우디', logo: audiLogo, type: 'image', page: '10' as const },
  { name: '테슬라', logo: teslaLogo, type: 'image', page: '11' as const },
  { name: '랜드로버', logo: landroverLogo, type: 'image', page: '12' as const },
  { name: '렉서스', logo: lexusLogo, type: 'image', page: '13' as const },
  { name: '볼보', logo: volvoLogo, type: 'image', page: '14' as const },
  { name: '폭스바겐', logo: volkswagenLogo, type: 'image', page: '15' as const },
  { name: '미니', logo: miniLogo, type: 'image', page: '16' as const },
  { name: '포드', logo: fordLogo, type: 'image', page: '17' as const },
  { name: '지프', logo: jeepLogo, type: 'image', page: '18' as const },
  { name: '도요타', logo: toyotaLogo, type: 'image', page: '19' as const },
  { name: '혼다', logo: hondaLogo, type: 'image', page: '20' as const },
  { name: '포르쉐', logo: porscheLogo, type: 'image', page: '21' as const },
  { name: '캐딜락', logo: cadillacLogo, type: 'image', page: '22' as const },
];

const carTypes = [
  '전체', '경차', '소형', '준중형', '중형', '대형', 'SUV', 'RV', '스포츠카', '승합차', '화물차'
];

const priceRanges = [
  '전체',
  '1,000만원 이하',
  '1,000만원 ~ 2,000만원',
  '2,000만원 ~ 3,000만원',
  '3,000만원 ~ 4,000만원',
  '4,000만원 ~ 5,000만원',
  '5,000만원 이상'
];

export default function Cost() {
  const [activeTab, setActiveTab] = React.useState<'manufacturer' | 'type' | 'cost'>('manufacturer');
  const [selectedItem, setSelectedItem] = React.useState<string | null>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  // const [rentalType, setRentalType] = React.useState<'장기렌트' | '오토리스'>('장기렌트');
  const router = useRouter()
  const searchParams = useSearchParams();
  const brandPage = searchParams.get("page")
  
  // 제조사별 검색
  const beandNavigation = (page: string) => {
    router.push(`/pages/Cost?page=${page}`);
  }

  // 상세 화면으로 이동
  const handleNavigation = (id: string) => {
  	router.push(`/pages/Cost/Detail?id=${id}`);
  };

  // const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  // // URL 파라미터 변경 감지 및 선택 상태 업데이트
  // React.useEffect(() => {
  //   const manufacturer = searchParams.get('manufacturer');
  //   if (manufacturer) {
  //     setActiveTab('manufacturer');
  //     setSelectedItem(manufacturer);
  //   }
  // }, [searchParams]);

  return (
    <Suspense fallback={<>Loading...</>}>
    <motion.main 
      className="flex-1 w-full bg-gray-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-8 md:py-16">
        {/* 검색 필터 */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-8 md:mb-16">
          {/* 모바일: 상단 탭 메뉴 */}
          <div className="md:hidden border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab('manufacturer')}
                className={`flex-1 px-4 py-4 text-center transition-all text-sm border-b-2 ${
                  activeTab === 'manufacturer'
                    ? 'border-blue-600 text-blue-600 font-semibold bg-blue-50'
                    : 'border-transparent text-gray-600'
                }`}
              >
                제조사별
              </button>
              <button
                onClick={() => setActiveTab('type')}
                className={`flex-1 px-4 py-4 text-center transition-all text-sm border-b-2 ${
                  activeTab === 'type'
                    ? 'border-blue-600 text-blue-600 font-semibold bg-blue-50'
                    : 'border-transparent text-gray-600'
                }`}
              >
                차종별
              </button>
              <button
                onClick={() => setActiveTab('cost')}
                className={`flex-1 px-4 py-4 text-center transition-all text-sm border-b-2 ${
                  activeTab === 'cost'
                    ? 'border-blue-600 text-blue-600 font-semibold bg-blue-50'
                    : 'border-transparent text-gray-600'
                }`}
              >
                가격대별
              </button>
            </div>
          </div>

          <div className="flex">
            {/* 데스크톱: 왼쪽 탭 메뉴 */}
            <div className="hidden md:block w-48 border-r border-gray-200 bg-gray-50">
              <button
                onClick={() => setActiveTab('manufacturer')}
                className={`w-full px-6 py-6 text-left transition-all border-b border-gray-200 text-sm ${
                  activeTab === 'manufacturer'
                    ? 'bg-white text-gray-900 font-semibold'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                제조사별 검색
              </button>
              <button
                onClick={() => setActiveTab('type')}
                className={`w-full px-6 py-6 text-left transition-all border-b border-gray-200 text-sm ${
                  activeTab === 'type'
                    ? 'bg-white text-gray-900 font-semibold'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                차종별 검색
              </button>
              <button
                onClick={() => setActiveTab('cost')}
                className={`w-full px-6 py-6 text-left transition-all text-sm ${
                  activeTab === 'cost'
                    ? 'bg-white text-gray-900 font-semibold'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                가격대별 검색
              </button>
            </div>

            {/* 콘텐츠 영역 */}
            <div className="flex-1 p-4 md:p-10">
              {activeTab === 'manufacturer' && (
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 lg:grid-cols-12 xl:grid-cols-13 gap-1.5 md:gap-2">
                  {manufacturers.map((brand) => (
                    <button
                      key={brand.page}
                      // onClick={() => {
                      //   const newSelection = brandPage === brand.page ? null : brand.page;
                      //   setSelectedItem(newSelection);
                      //   // URL 파라미터 업데이트
                      //   if (newSelection) {
                      //     setSearchParams({ manufacturer: newSelection });
                      //   } else {
                      //     setSearchParams({});
                      //   }
                      // }}
                      onClick={() => beandNavigation(brand.page)}
                      className={`flex flex-col items-center justify-center p-1.5 md:p-2 rounded-lg md:rounded-xl transition-all ${
                        brandPage === brand.page
                          ? 'bg-blue-600 text-white shadow-lg scale-105'
                          : 'bg-gray-50 text-gray-900 hover:bg-gray-200 active:scale-95'
                      }`}
                    >
                      <div className="text-sm md:text-base mb-0.5">
                        <img src={brand.logo.src} alt={brand.name} className="w-[26px] h-[26px]" />
                      </div>
                      <span className={`text-center leading-tight ${
                        brand.name === 'KG모빌리티' 
                          ? 'text-[7px] md:text-[8px]' 
                          : 'text-[9px] md:text-[10px]'
                      } ${
                        brandPage === brand.page ? 'font-semibold' : ''
                      }`}>
                        {brand.name}
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {activeTab === 'type' && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
                  {carTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedItem(selectedItem === type ? null : type)}
                      className={`flex items-center justify-center p-2.5 md:p-3 rounded-lg md:rounded-xl transition-all text-sm ${
                        selectedItem === type
                          ? 'bg-blue-600 text-white font-semibold shadow-lg scale-105'
                          : 'bg-gray-50 text-gray-900 hover:bg-gray-200 active:scale-95'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}

              {activeTab === 'cost' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
                  {priceRanges.map((range) => (
                    <button
                      key={range}
                      onClick={() => setSelectedItem(selectedItem === range ? null : range)}
                      className={`flex items-center justify-center p-2.5 md:p-3 rounded-lg md:rounded-xl transition-all text-sm ${
                        selectedItem === range
                          ? 'bg-blue-600 text-white font-semibold shadow-lg scale-105'
                          : 'bg-gray-50 text-gray-900 hover:bg-gray-200 active:scale-95'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 렌탈 타입 메뉴 */}
        <div className="w-full mb-8">
          <div className="w-full h-px bg-gray-200"></div>
        </div>

        {/* 차량 리스트 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {carListings.map((car, index) => (
            <div
              key={car.id}              
              onClick={() => handleNavigation((car.id).toString())}
              className={`bg-white rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 cursor-pointer group transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transition: isVisible ? 'all 0.3s ease-out delay 0ms' : `opacity 0.5s ease-out ${index * 100}ms, transform 0.5s ease-out ${index * 100}ms, delay ${index * 100}ms`
              }}
            >
              {/* 차량 이미지 */}
              <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                <ImageWithFallback
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"                  
                />
              </div>

              {/* 차량 정보 */}
              <div className="p-5">
                <h3 className="text-sm font-semibold text-gray-900 mb-4 line-clamp-2 min-h-[2.5rem]">
                  {car.name}
                </h3>

                {/* 월납입금 */}
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-2">월납입금</div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="font-semibold text-gray-900">
                      ₩ {car.rentPrice}원
                    </div>
                    <div className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs font-semibold">
                      렌트
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="font-semibold text-gray-900">
                      ₩ {car.leasePrice}원
                    </div>
                    <div className="bg-orange-500 text-white px-2 py-0.5 rounded text-xs font-semibold">
                      리스
                    </div>
                  </div>
                </div>

                {/* 상세 정보 */}
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-500">출시일</span>
                    <span className="text-gray-900 text-right">{car.releaseDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">차종</span>
                    <span className="text-gray-900 text-right">{car.carType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">연료</span>
                    <span className="text-gray-900 text-right">{car.fuel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">배기량</span>
                    <span className="text-gray-900 text-right">{car.displacement}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">연비</span>
                    <span className="text-gray-900 text-right">{car.fuelEfficiency}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.main>
    </Suspense>
  );
}