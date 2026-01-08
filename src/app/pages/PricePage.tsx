import React from 'react';
import { motion } from 'motion/react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { carListings } from '../data/carData';
import audiLogo from 'figma:asset/af602fabe91967098e28f44179bc4a54b7689906.png';
import benzLogo from 'figma:asset/111cf376407b54859290b82cb5500e78ea37b5d1.png';
import bmwLogo from 'figma:asset/fd089f8d09707ce1db4ab5daf53d9dc582a0dab7.png';
import cadillacLogo from 'figma:asset/b5de68840aa5298b6b2190083f2376b68a579f4b.png';
import chevroletLogo from 'figma:asset/c0d32686089056249ef81db9e54277d4960bd7c8.png';
import fordLogo from 'figma:asset/f7dcddfbfaf9accb52f6245cae98ea345d9e285b.png';
import genesisLogo from 'figma:asset/6adbb19e53ef092293a46fd4e90003a648fa712d.png';
import hondaLogo from 'figma:asset/519ef4bd254a0c2d9b8b3faad11f78cc1da512e2.png';
import hyundaiLogo from 'figma:asset/c867779df0c69db0386abd407e57c92e85a71a97.png';
import jeepLogo from 'figma:asset/4eadc61bd8b751b241e09e05eba97969f9353dcb.png';
import ssangyongLogo from 'figma:asset/0380262d02a588086477ee1c1c16c17936144520.png';
import kiaLogo from 'figma:asset/1cac289580903ad5e8bc17095e81dd3e4063a882.png';
import landroverLogo from 'figma:asset/c2b7987a18e5c3833d03b393ac1c7a94ff342307.png';
import lexusLogo from 'figma:asset/3773ed372f4f28ca95bb7aea4319ed4bc08cec4a.png';
import miniLogo from 'figma:asset/c0806fa15d52d0d9f75f4972fa9ef37f1ad60ca9.png';
import porscheLogo from 'figma:asset/f378be7473dd106981d1559e9dc128428a94fa80.png';
import volvoLogo from 'figma:asset/14cf6d16e44b7da4493b3cc6549fd0dd1b2ee1b9.png';
import volkswagenLogo from 'figma:asset/1c531d98ee224fd174b3e8137fd9672575bba29d.png';
import toyotaLogo from 'figma:asset/bc3ea248888a47162f81dba4df5252c8a6f7b09b.png';
import renaultLogo from 'figma:asset/715814837ec169c09c076b07414c9fc8cbd3f921.png';
import teslaLogo from 'figma:asset/34fa294fb05592a236498a9c5e1654160341c21b.png';

const manufacturers = [
  { name: '전체', logo: '🚘', type: 'emoji' as const },
  { name: '현대', logo: hyundaiLogo, type: 'image' as const },
  { name: '기아', logo: kiaLogo, type: 'image' as const },
  { name: '제네시스', logo: genesisLogo, type: 'image' as const },
  { name: '쉐보레', logo: chevroletLogo, type: 'image' as const },
  { name: '르노코리아', logo: renaultLogo, type: 'image' as const },
  { name: 'KG모빌리티', logo: ssangyongLogo, type: 'image' as const },
  { name: '벤츠', logo: benzLogo, type: 'image' as const },
  { name: 'BMW', logo: bmwLogo, type: 'image' as const },
  { name: '아우디', logo: audiLogo, type: 'image' as const },
  { name: '테슬라', logo: teslaLogo, type: 'image' as const },
  { name: '랜드로버', logo: landroverLogo, type: 'image' as const },
  { name: '렉서스', logo: lexusLogo, type: 'image' as const },
  { name: '볼보', logo: volvoLogo, type: 'image' as const },
  { name: '폭스바겐', logo: volkswagenLogo, type: 'image' as const },
  { name: '미니', logo: miniLogo, type: 'image' as const },
  { name: '포드', logo: fordLogo, type: 'image' as const },
  { name: '지프', logo: jeepLogo, type: 'image' as const },
  { name: '도요타', logo: toyotaLogo, type: 'image' as const },
  { name: '혼다', logo: hondaLogo, type: 'image' as const },
  { name: '포르쉐', logo: porscheLogo, type: 'image' as const },
  { name: '캐딜락', logo: cadillacLogo, type: 'image' as const },
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

export function PricePage() {
  const [activeTab, setActiveTab] = React.useState<'manufacturer' | 'type' | 'price'>('manufacturer');
  const [selectedItem, setSelectedItem] = React.useState<string | null>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const [rentalType, setRentalType] = React.useState<'장기렌트' | '오토리스'>('장기렌트');
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  // URL 파라미터 변경 감지 및 선택 상태 업데이트
  React.useEffect(() => {
    const manufacturer = searchParams.get('manufacturer');
    if (manufacturer) {
      setActiveTab('manufacturer');
      setSelectedItem(manufacturer);
    }
  }, [searchParams]);

  return (
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
                onClick={() => setActiveTab('price')}
                className={`flex-1 px-4 py-4 text-center transition-all text-sm border-b-2 ${
                  activeTab === 'price'
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
                onClick={() => setActiveTab('price')}
                className={`w-full px-6 py-6 text-left transition-all text-sm ${
                  activeTab === 'price'
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
                      key={brand.name}
                      onClick={() => {
                        const newSelection = selectedItem === brand.name ? null : brand.name;
                        setSelectedItem(newSelection);
                        // URL 파라미터 업데이트
                        if (newSelection) {
                          setSearchParams({ manufacturer: newSelection });
                        } else {
                          setSearchParams({});
                        }
                      }}
                      className={`flex flex-col items-center justify-center p-1.5 md:p-2 rounded-lg md:rounded-xl transition-all ${
                        selectedItem === brand.name
                          ? 'bg-blue-600 text-white shadow-lg scale-105'
                          : 'bg-gray-50 text-gray-900 hover:bg-gray-200 active:scale-95'
                      }`}
                    >
                      <div className="text-sm md:text-base mb-0.5">
                        {brand.type === 'emoji' ? brand.logo : <img src={brand.logo} alt={brand.name} className="w-[26px] h-[26px]" />}
                      </div>
                      <span className={`text-center leading-tight ${
                        brand.name === 'KG모빌리티' 
                          ? 'text-[7px] md:text-[8px]' 
                          : 'text-[9px] md:text-[10px]'
                      } ${
                        selectedItem === brand.name ? 'font-semibold' : ''
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

              {activeTab === 'price' && (
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
              onClick={() => navigate(`/car/${car.id}`)}
              className={`bg-white rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 cursor-pointer group transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transition: isVisible ? 'all 0.3s ease-out' : `opacity 0.5s ease-out ${index * 100}ms, transform 0.5s ease-out ${index * 100}ms`,
                transitionDelay: isVisible ? '0ms' : `${index * 100}ms`
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
  );
}