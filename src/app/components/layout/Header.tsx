"use client"

import React from 'react';
import {Suspense} from "react";
import { Menu, X } from 'lucide-react';
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { Button } from '@components/ui/button';
import Link from "next/link";
import { ImageWithFallback } from '@components/shared/ImageWithFallback';

import logoFull from '@public/logo_full.png';

import hyundaiLogo from '@public/logo/logo_hyundai.png';
import kiaLogo from '@public/logo/logo_kia.png';
import benzLogo from '@public/logo/logo_benz.png';
import genesisLogo from '@public/logo/logo_genesis.png';
import chevroletLogo from '@public/logo/logo_chevrolet.png';
import bmwLogo from '@public/logo/logo_bmw.png';

const brands = [
  { name: '현대', icon: 'H', logo: hyundaiLogo, type: 'image', page: '2' as const },
  { name: '기아', icon: 'KIA', logo: kiaLogo, type: 'image', page: '3' as const },
  { name: '제네시스', icon: 'G', logo: genesisLogo, type: 'image', page: '4' as const },
  { name: '쉐보레', icon: '⚡', logo: chevroletLogo, type: 'image', page: '5' as const },
  { name: '벤츠', icon: '★', logo: benzLogo, type: 'image', page: '8' as const },
  { name: 'BMW', icon: 'BMW', logo: bmwLogo, type: 'image', page: '9' as const },
];

// interface HeaderProps {
//   currentPage?: string;
//   onNavigate?: (page: string, brand?: string) => void;
// }

export function Header() {  
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams();
  const brandPage = searchParams.get("page")

  // 브랜드 선택으로 차량가격 화면으로 이동
  const handleNavigation = (page: string) => {
    router.push(`/pages/Cost?page=${page}`);
    setMobileMenuOpen(false)
  };

  if (pathName === "/pages/Admin/Login") {
    return (<div />);
  } else if (pathName === "/pages/Admin/Main") {
    return (<div />);
  } else {
    return (
      <Suspense fallback={<>Loading...</>}>
    <header className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      {/* 메인 헤더 */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 md:gap-3 cursor-pointer hover:opacity-70 transition-opacity active:scale-95" 
            onClick={() => router.push('/')}
          >
            <ImageWithFallback 
              src={logoFull.src}
              alt="대한민카 로고"
              className="h-12 md:h-14 object-cover rounded-lg"
            />
          </div>

          {/* Right side container */}
          <div className="flex items-center gap-4 md:gap-12">
            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-12">              
              <Link
                href="/pages/Admin/Login" 
                className={`text-base transition-all font-semibold px-3 py-2 rounded-lg ${
                  pathName === '/pages/Admin'
                    ? 'text-gray-900 bg-gray-100 scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:scale-110 active:scale-95'
                }`}
              >
                관리자페이지(임시이동)
              </Link>
              
              <Link 
                href="/" 
                className={`text-base transition-all font-semibold px-3 py-2 rounded-lg ${
                  pathName === '/'
                    ? 'text-gray-900 bg-gray-100 scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:scale-110 active:scale-95'
                }`}
              >대한민카</Link>
              
              <Link 
                href="/pages/RentLease" 
                className={`text-base transition-all font-semibold px-3 py-2 rounded-lg ${
                  pathName === '/pages/RentLease'
                    ? 'text-gray-900 bg-gray-100 scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:scale-110 active:scale-95'
                }`}
              >렌트/리스</Link>

              <Link 
                href="/pages/Cost?page=1" 
                className={`text-base transition-all font-semibold px-3 py-2 rounded-lg ${
                  pathName === '/pages/Cost' || pathName === '/pages/Cost/Detail'
                    ? 'text-gray-900 bg-gray-100 scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:scale-110 active:scale-95'
                }`}
              >차량가격</Link>
            </nav>

            {/* CTA Button - Desktop only */}
            <Button 
              className="hidden md:flex bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:scale-105 active:scale-95 text-white px-8 py-5 text-base font-semibold rounded-full transition-all"
              onClick={() => router.push('/pages/Counsel')}
            >상담신청</Button>

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
              <Link
                href="/pages/Admin/Login" 
                className={`text-base transition-all font-semibold px-3 py-2 rounded-lg ${
                  pathName === '/pages/Admin'
                    ? 'text-gray-900 bg-gray-100'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                관리자페이지(임시이동)
              </Link>
              <Link 
                href="/" 
                className={`text-base font-semibold px-4 py-3 rounded-lg transition-all ${ 
                  pathName === '/'
                    ? 'text-gray-900 bg-gray-100'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                대한민카
              </Link>
              <Link 
                href="/pages/RentLease" 
                className={`text-base font-semibold px-4 py-3 rounded-lg transition-all ${ 
                  pathName === '/pages/RentLease'
                    ? 'text-gray-900 bg-gray-100'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                렌트/리스
              </Link>
              <Link 
                href="/pages/Cost?page=1" 
                className={`text-base font-semibold px-4 py-3 rounded-lg transition-all ${ 
                  pathName === '/pages/Cost' || pathName === '/pages/Cost/Detail'
                    ? 'text-gray-900 bg-gray-100'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                차량가격
              </Link>
              
              <Link href="/pages/Counsel">                  
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 text-base font-semibold rounded-lg transition-all w-full mt-2"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  상담신청
                </Button>
              </Link>                              
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
                key={brand.page}
                onClick={() => 
                  handleNavigation(brand.page)
                  // router.push('/pages/Cost?page=${brand.page}')
                }
                // className={`flex items-center justify-center gap-1 md:gap-2 px-2 md:px-4 py-2.5 rounded-full transition-all text-xs md:text-sm`}

                className={`flex items-center justify-center gap-1 md:gap-2 px-2 md:px-4 py-2.5 rounded-full transition-all text-xs md:text-sm ${
                  brandPage === brand.page
                    ? 'bg-gray-200 text-gray-900'
                    : 'bg-white text-gray-900 hover:bg-gray-200'
                }`}
              >
                {brand.type === 'image' ? (
                  <img src={brand.logo.src} alt={brand.name} className="w-[22px] h-[22px] md:w-7 md:h-7" />
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
    </Suspense>
  );
  }
}