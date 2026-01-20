"use client"

import React from 'react';
import {Suspense} from "react";
import { use } from "react";
import { motion } from 'framer-motion';
import { useRouter, useParams, useSearchParams } from "next/navigation"
import { ArrowLeft, Check } from 'lucide-react';
import { Button } from '@components/ui/button';
import { ImageWithFallback } from '@components/shared/ImageWithFallback';
import { carListings } from '@components/data/carData';

export default function Detail() {
  // const params = use(useParams<{ id: string }>());  
  const router = useRouter()
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  
  var car = null
  if (id != null) {
    car = carListings.find(c => c.id === parseInt(id));
  }

  if (!car) {
    return (
      <motion.main 
        className="flex-1 w-full bg-gray-50 flex items-center justify-center min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">차량을 찾을 수 없습니다.</h1>
          <Button onClick={() => router.push('/pages/Cost')}>목록으로 돌아가기</Button>
        </div>
      </motion.main>
    );
  }

  const features = [
    '스마트크루즈 컨트롤',
    '후방 주차 보조시스템',
    '통풍시트 (앞좌석)',
    '열선시트 (앞/뒷좌석)',
    'HUD 헤드업 디스플레이',
    '무선 충전 시스템',
    'LED 헤드램프',
    '전동식 트렁크',
    '통합 인포테인먼트 시스템',
    '프리미엄 사운드 시스템',
    '전방 충돌방지 보조',
    '차선 이탈 경고',
  ];

  const carImages = [
    { src: car.image, alt: car.name },
    { src: 'https://images.unsplash.com/photo-1710083521061-c1b1701c5d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnRlcmlvciUyMGRhc2hib2FyZHxlbnwxfHx8fDE3Njc3NjkyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: `${car.name} 인테리어` },
    { src: 'https://images.unsplash.com/photo-1653491887161-aaf72d4514f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjBkZXRhaWx8ZW58MXx8fHwxNzY3Nzk3NDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: `${car.name} 엔진` },
    { src: 'https://images.unsplash.com/photo-1645437042703-5c3249a70550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3aGVlbCUyMHRpcmV8ZW58MXx8fHwxNzY3ODU4OTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: `${car.name} 휠` },
  ];

  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
  
  // Ensure selectedImageIndex is within bounds
  const safeImageIndex = selectedImageIndex >= 0 && selectedImageIndex < carImages.length ? selectedImageIndex : 0;
  const currentImage = carImages[safeImageIndex];

  return (
    <Suspense fallback={<>Loading...</>}>
    <motion.main 
      className="flex-1 w-full bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* 차량 상세 정보 */}
      <div className="max-w-[1280px] mx-auto px-10 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* 왼쪽: 이미지 */}
          <div className="space-y-6">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <ImageWithFallback
                src={currentImage.src}
                alt={currentImage.alt}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* 추가 이미지 썸네일 (동일 이미지 사용) */}
            <div className="grid grid-cols-4 gap-3">
              {carImages.map((image, index) => (
                <div 
                  key={index} 
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-pointer transition-all ${
                    selectedImageIndex === index 
                      ? 'ring-2 ring-blue-600 opacity-100' 
                      : 'hover:opacity-80'
                  }`}
                >
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 오른쪽: 정보 */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {car.name}
            </h1>

            {/* 가격 정보 */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">월 납입금</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded font-semibold text-sm">
                      장기렌트
                    </div>
                    <span className="text-sm text-gray-600">월</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    ₩ {car.rentPrice}<span className="text-base font-normal text-gray-600">원</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-500 text-white px-3 py-1 rounded font-semibold text-sm">
                      오토리스
                    </div>
                    <span className="text-sm text-gray-600">월</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    ₩ {car.leasePrice}<span className="text-base font-normal text-gray-600">원</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                * 상기 가격은 기본 옵션 기준이며, 실제 가격은 옵션 및 계약 조건에 따라 달라질 수 있습니다.
              </p>
            </div>

            {/* 기본 사양 */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">기본 사양</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">출시일</span>
                  <span className="text-sm font-semibold text-gray-900">{car.releaseDate}</span>
                </div>
                <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">차종</span>
                  <span className="text-sm font-semibold text-gray-900">{car.carType}</span>
                </div>
                <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">연료</span>
                  <span className="text-sm font-semibold text-gray-900">{car.fuel}</span>
                </div>
                <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">배기량</span>
                  <span className="text-sm font-semibold text-gray-900">{car.displacement}</span>
                </div>
                <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">연비</span>
                  <span className="text-sm font-semibold text-gray-900">{car.fuelEfficiency}</span>
                </div>
              </div>
            </div>

            {/* 주요 옵션 */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">주요 옵션</h2>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA 버튼 */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => router.push('/pages/Counsel')}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-6 text-base rounded-lg font-semibold"
              >
                상담 신청하기
              </Button>
              <Button
                onClick={() => router.push('/pages/Cost')}
                className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-6 text-base rounded-lg font-semibold"
              >
                다른 차량 보기
              </Button>
            </div>
          </div>
        </div>

        {/* 상세 설명 */}
        <div className="mt-16 border-t border-gray-200 pt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">차량 상세 정보</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              {car.name}은(는) 뛰어난 성능과 편안함을 자랑하는 {car.carType} 차량입니다. 
              {car.fuel} 엔진을 탑재하여 경제적이면서도 강력한 주행 성능을 제공합니다.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              최신 안전 기술과 편의 사양이 적용되어 있으며, 넓은 실내 공간과 우수한 승차감으로 
              장거리 주행에서도 편안함을 느낄 수 있습니다.
            </p>
            <p className="text-gray-600 leading-relaxed">
              대한민카 에서는 다양한 렌트 및 리스 옵션을 제공하고 있으며, 
              고객님의 상황에 가장 적합한 조건을 제안해 드립니다.
            </p>
          </div>
        </div>

        {/* 하단 버튼 영역 */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex justify-end">
            <button
              onClick={() => router.push('/pages/Cost')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all px-6 py-3 rounded-lg border border-gray-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-semibold">목록으로 돌아가기</span>
            </button>
          </div>
        </div>
      </div>
    </motion.main>
    </Suspense>
  );
}