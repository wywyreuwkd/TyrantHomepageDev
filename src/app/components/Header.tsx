import React from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import hyundaiLogo from 'figma:asset/c867779df0c69db0386abd407e57c92e85a71a97.png';
import kiaLogo from 'figma:asset/1cac289580903ad5e8bc17095e81dd3e4063a882.png';
import benzLogo from 'figma:asset/111cf376407b54859290b82cb5500e78ea37b5d1.png';
import genesisLogo from 'figma:asset/6adbb19e53ef092293a46fd4e90003a648fa712d.png';
import chevroletLogo from 'figma:asset/c0d32686089056249ef81db9e54277d4960bd7c8.png';
import bmwLogo from 'figma:asset/fd089f8d09707ce1db4ab5daf53d9dc582a0dab7.png';

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string, brand?: string) => void;
}

const brands = [
  { name: '현대', icon: 'H', logo: hyundaiLogo, type: 'image' as const },
  { name: '기아', icon: 'KIA', logo: kiaLogo, type: 'image' as const },
  { name: '제네시스', icon: 'G', logo: genesisLogo, type: 'image' as const },
  { name: '쉐보레', icon: '⚡', logo: chevroletLogo, type: 'image' as const },
  { name: '벤츠', icon: '★', logo: benzLogo, type: 'image' as const },
  { name: 'BMW', icon: 'BMW', logo: bmwLogo, type: 'image' as const },
];

export function Header({ currentPage = 'home', onNavigate }: HeaderProps) {
  const [searchParams] = useSearchParams();
  const [selectedBrand, setSelectedBrand] = React.useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // URL 파라미터에서 제조사 정보를 읽어서 헤더 선택 상태 업데이트
  React.useEffect(() => {
    if (currentPage === 'price') {
      const manufacturer = searchParams.get('manufacturer');
      setSelectedBrand(manufacturer);
    } else {
      setSelectedBrand(null);
    }
  }, [currentPage, searchParams]);

  const handleNavigate = (page: string) => {
    onNavigate?.(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      {/* 메인 헤더 */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 md:gap-3 cursor-pointer hover:opacity-70 transition-opacity active:scale-95" 
            onClick={() => handleNavigate('home')}
          >
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1583707225454-afc0cc77c57d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjByZW50YWwlMjBsb2dvfGVufDF8fHx8MTc2Nzc4Nzk5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="조&김 로고"
              className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-lg"
            />
            <div className="text-xl md:text-2xl font-bold text-gray-900">조&김</div>
          </div>

          {/* Right side container */}
          <div className="flex items-center gap-4 md:gap-12">
            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-12">
              <a 
                href="#" 
                className={`text-base transition-all font-semibold px-3 py-2 rounded-lg ${ 
                  currentPage === 'admin'
                    ? 'text-gray-900 bg-gray-100 scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:scale-110 active:scale-95'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.('admin');
                }}
              >
                관리자페이지(임시이동)
              </a>
              <a 
                href="#" 
                className={`text-base transition-all font-semibold px-3 py-2 rounded-lg ${ 
                  currentPage === 'home'
                    ? 'text-gray-900 bg-gray-100 scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:scale-110 active:scale-95'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.('home');
                }}
              >
                조&김
              </a>
              <a 
                href="#" 
                className={`text-base transition-all font-semibold px-3 py-2 rounded-lg ${ 
                  currentPage === 'rent-lease'
                    ? 'text-gray-900 bg-gray-100 scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:scale-110 active:scale-95'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.('rent-lease');
                }}
              >
                렌트/리스
              </a>
              <a 
                href="#" 
                className={`text-base transition-all font-semibold px-3 py-2 rounded-lg ${ 
                  currentPage === 'price'
                    ? 'text-gray-900 bg-gray-100 scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:scale-110 active:scale-95'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.('price');
                }}
              >
                차량가격
              </a>
            </nav>

            {/* CTA Button - Desktop only */}
            <Button 
              className="hidden md:flex bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:scale-105 active:scale-95 text-white px-8 py-5 text-base font-semibold rounded-full transition-all"
              onClick={() => onNavigate?.('consultation')}
            >
              상담신청
            </Button>

            {/* Hamburger Menu Button - Mobile only */}
            <button
              className="md:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="메뉴"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="max-w-[1280px] mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-2">
              <a 
                href="#" 
                className={`text-base font-semibold px-4 py-3 rounded-lg transition-all ${ 
                  currentPage === 'home'
                    ? 'text-gray-900 bg-gray-100'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate('home');
                }}
              >
                조&김
              </a>
              <a 
                href="#" 
                className={`text-base font-semibold px-4 py-3 rounded-lg transition-all ${ 
                  currentPage === 'rent-lease'
                    ? 'text-gray-900 bg-gray-100'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate('rent-lease');
                }}
              >
                렌트/리스
              </a>
              <a 
                href="#" 
                className={`text-base font-semibold px-4 py-3 rounded-lg transition-all ${ 
                  currentPage === 'price'
                    ? 'text-gray-900 bg-gray-100'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate('price');
                }}
              >
                차량가격
              </a>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 text-base font-semibold rounded-lg transition-all w-full mt-2"
                onClick={() => handleNavigate('consultation')}
              >
                상담신청
              </Button>
            </nav>
          </div>
        </div>
      )}

      {/* 브랜드 필터 섹션 */}
      <div className="w-full bg-gray-50 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 py-4">
            {brands.map((brand) => (
              <button
                key={brand.name}
                onClick={() => {
                  setSelectedBrand(selectedBrand === brand.name ? null : brand.name);
                  onNavigate?.('price', brand.name);
                }}
                className={`flex items-center justify-center gap-1 md:gap-2 px-2 md:px-4 py-2.5 rounded-full transition-all text-xs md:text-sm ${
                  selectedBrand === brand.name
                    ? 'bg-gray-200 text-gray-900'
                    : 'bg-white text-gray-900 hover:bg-gray-200'
                }`}
              >
                {brand.type === 'image' ? (
                  <img src={brand.logo} alt={brand.name} className="w-[22px] h-[22px] md:w-7 md:h-7" />
                ) : (
                  <span className="font-medium text-xs md:text-sm">{brand.icon}</span>
                )}
                <span className="text-xs md:text-sm">{brand.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}