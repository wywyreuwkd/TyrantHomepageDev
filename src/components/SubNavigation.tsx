import { Home } from "lucide-react";

interface NavItem {
  label: string;
  page: string;
}

interface SubNavigationProps {
  category: 'company' | 'business' | 'customer' | 'performance';
  currentPage: string;
  onNavigate: (page: any) => void;
}

export function SubNavigation({ category, currentPage, onNavigate }: SubNavigationProps) {
  const navigationItems: Record<'company' | 'business' | 'customer' | 'performance', NavItem[]> = {
    company: [
      { label: '타이런트', page: 'company' },
      { label: '그룹사 소개', page: 'group' },
      { label: '핵심인력', page: 'core-team' },
      { label: '미디어', page: 'media' },
      { label: '연혁', page: 'history' },
      { label: '인재채용', page: 'recruit' },
      { label: 'PBA 구단', page: 'pba' },
      { label: '협력사 소개', page: 'partners' }
    ],
    business: [
      { label: '태양광 사업성분석(FS)', page: 'business-fs' },
      { label: '태양광 개발', page: 'business-development' },
      { label: '태양광 기자재 공급', page: 'business-materials' },
      { label: '태양광 시공', page: 'business-construction' },
      { label: '태양광 투자', page: 'business-investment' },
      { label: '태양광 관리운영(모니터링)', page: 'business-monitoring' },
      { label: '태양광 사무관리(보험)', page: 'business-insurance' },
      { label: '태양광 기술실사', page: 'business-duediligence' },
      { label: '데이터센터', page: 'business-datacenter' },
      { label: '태양광 교육', page: 'business-education' }
    ],
    customer: [
      { label: '오시는 길', page: 'location' },
      { label: '사이트 맵', page: 'sitemap' },
      { label: '사업관련 사이트', page: 'related-sites' }
    ],
    performance: [
      { label: '지도로보기', page: 'performance-map' },
      { label: '표로보기', page: 'performance-table' }
    ]
  };

  const items = navigationItems[category];

  // 사업영역인 경우 5개씩 2줄로 분리
  const isBusiness = category === 'business';
  const firstRow = isBusiness ? items.slice(0, 5) : items;
  const secondRow = isBusiness ? items.slice(5, 10) : [];

  const renderTab = (item: NavItem, index: number) => {
    const isActive = currentPage === item.page;
    
    return (
      <button
        key={index}
        onClick={() => onNavigate(item.page)}
        className="relative whitespace-nowrap px-3 py-2 transition-all duration-300"
        style={{
          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
          fontSize: '16px',
          fontWeight: isActive ? '700' : '500',
          color: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          lineHeight: '1.4',
          letterSpacing: '0.02em'
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            e.currentTarget.style.color = 'rgba(255, 255, 255, 1)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
          }
        }}
      >
        {item.label}
        
        {/* Active Underline */}
        {isActive && (
          <div
            className="absolute left-0 right-0"
            style={{
              bottom: '-8px',
              height: '3px',
              background: '#FF6B3D',
              borderRadius: '3px 3px 0 0'
            }}
          ></div>
        )}
      </button>
    );
  };

  const renderHomeButton = () => {
    const isActive = currentPage === 'home';
    
    return (
      <button
        onClick={() => onNavigate('home')}
        className="relative flex items-center gap-2 px-3 py-2 transition-all duration-300"
        style={{
          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
          fontSize: '16px',
          fontWeight: isActive ? '700' : '500',
          color: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          lineHeight: '1.4'
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            e.currentTarget.style.color = 'rgba(255, 255, 255, 1)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
          }
        }}
      >
        <Home size={18} />
        <span>홈</span>
        
        {/* Active Underline */}
        {isActive && (
          <div
            className="absolute left-0 right-0"
            style={{
              bottom: '-8px',
              height: '3px',
              background: '#FF6B3D',
              borderRadius: '3px 3px 0 0'
            }}
          ></div>
        )}
      </button>
    );
  };

  return (
    <div 
      className="sticky z-40"
      style={{ 
        top: '80px',
        background: '#0F214A',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div 
        className="mx-auto px-6 md:px-10"
        style={{ maxWidth: '1280px' }}
      >
        {isBusiness ? (
          // 사업영역: 5개씩 2줄
          <div className="py-4">
            <div className="flex items-center justify-center gap-x-8 mb-3">
              {renderHomeButton()}
              <div className="w-px h-6 bg-white/20"></div>
              {firstRow.map((item, index) => renderTab(item, index))}
            </div>
            <div className="flex items-center justify-center gap-x-8">
              {secondRow.map((item, index) => renderTab(item, index + 5))}
            </div>
          </div>
        ) : (
          // 회사소개: 1줄
          <div className="flex items-center justify-center gap-x-12 py-5">
            {renderHomeButton()}
            <div className="w-px h-6 bg-white/20"></div>
            {items.map((item, index) => renderTab(item, index))}
          </div>
        )}
      </div>
    </div>
  );
}