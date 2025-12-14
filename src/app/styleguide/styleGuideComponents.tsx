import { ImageWithFallback } from "@components/shared/ImageWithFallback";

import growthIcon from "@public/styleguide/cd21f5ddad357a23798669126012353c05b6d833.png";
import calculatorIcon from "@public/styleguide/13ab5d1600690f1f1559b9433ad7938746be4b37.png";
import shieldIcon from "@public/styleguide/8ecc655aa6b4d4083d406d7f2828d809249184aa.png";
import buildingIcon from "@public/styleguide/c8e880a76bd95743870cfe9e538fec72b1509c97.png";
import profitIcon from "@public/styleguide/6dec7f81de47d9c29f018397d168ab8df2bc0bf5.png";

export function ComponentSpecifications() {
  return (
    <section id="section-components" className="mb-32">
      <div className="flex items-center gap-3 mb-12">
        <div className="w-12 h-12 bg-[#273b82] rounded-xl flex items-center justify-center">
          <svg className="text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" rx="1"></rect>
            <rect x="14" y="3" width="7" height="7" rx="1"></rect>
            <rect x="14" y="14" width="7" height="7" rx="1"></rect>
            <rect x="3" y="14" width="7" height="7" rx="1"></rect>
          </svg>
        </div>
        <div>
          <h2 style={{
            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
            fontSize: '36px',
            fontWeight: '700',
            color: '#0F214A',
            marginBottom: '4px'
          }}>
            6. UI Components
          </h2>
          <p style={{
            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
            fontSize: '16px',
            fontWeight: '400',
            color: '#666'
          }}>
            실제 사이트에서 사용되는 UI 구성 요소
          </p>
        </div>
      </div>

      {/* Badges - 브랜드 포인트 */}
      <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
        <div className="flex items-center justify-between mb-6">
          <h3 style={{
            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
            fontSize: '20px',
            fontWeight: '600',
            color: '#0F214A'
          }}>
            Badges ⭐ 브랜드 포인트
          </h3>
          <span style={{
            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
            fontSize: '13px',
            fontWeight: '600',
            color: '#FF6B3D',
            background: 'rgba(255, 107, 61, 0.1)',
            padding: '6px 12px',
            borderRadius: '100px'
          }}>
            핵심 디자인 요소
          </span>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 bg-gradient-to-br from-[#0F214A] to-[#273b82] rounded-xl">
            <div>
              <p style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                color: 'white',
                marginBottom: '8px'
              }}>Primary Badge (Dark BG)</p>
              <code style={{
                fontFamily: 'monospace',
                fontSize: '12px',
                color: 'rgba(255, 255, 255, 0.7)'
              }}>px-4 py-2 + dot + letter-spacing: 2px</code>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2" style={{
              background: 'rgba(255, 107, 61, 0.1)',
              border: '1px solid rgba(255, 107, 61, 0.3)',
              borderRadius: '100px'
            }}>
              <div className="w-1.5 h-1.5 bg-[#FF6B3D] rounded-full"></div>
              <span style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '13px',
                fontWeight: '700',
                color: '#FF6B3D',
                letterSpacing: '2px'
              }}>
                CEO MESSAGE
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 bg-gray-50 rounded-xl">
            <div>
              <p style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                color: '#0F214A',
                marginBottom: '8px'
              }}>Section Badge (Light BG)</p>
              <code style={{
                fontFamily: 'monospace',
                fontSize: '12px',
                color: '#666'
              }}>bg-[#FF6B3D]/8 + border-[#FF6B3D]/20</code>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2" style={{
              background: 'rgba(255, 107, 61, 0.08)',
              border: '1px solid rgba(255, 107, 61, 0.2)',
              borderRadius: '100px'
            }}>
              <div className="w-1.5 h-1.5 bg-[#FF6B3D] rounded-full"></div>
              <span style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '13px',
                fontWeight: '700',
                color: '#FF6B3D',
                letterSpacing: '2px'
              }}>
                MILESTONES
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 bg-gray-50 rounded-xl">
            <div>
              <p style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                color: '#0F214A',
                marginBottom: '8px'
              }}>Navy Badge (Tyrant CI)</p>
              <code style={{
                fontFamily: 'monospace',
                fontSize: '12px',
                color: '#666'
              }}>bg-[#0F214A]/8 + border-[#0F214A]/20</code>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2" style={{
              background: 'rgba(15, 33, 74, 0.08)',
              border: '1px solid rgba(15, 33, 74, 0.2)',
              borderRadius: '100px'
            }}>
              <div className="w-1.5 h-1.5 bg-[#0F214A] rounded-full"></div>
              <span style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '13px',
                fontWeight: '700',
                color: '#0F214A',
                letterSpacing: '2px'
              }}>
                TYRANT CI
              </span>
            </div>
          </div>

          <div className="p-6 bg-blue-50 border-l-4 border-[#FF6B3D] rounded-lg">
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '14px',
              fontWeight: '600',
              color: '#0F214A',
              marginBottom: '8px'
            }}>
              💡 배지 사용 가이드
            </p>
            <ul className="space-y-2">
              <li style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '13px',
                color: '#666',
                lineHeight: '1.6'
              }}>
                • 왼쪽 점(dot)은 필수 요소입니다 (w-1.5 h-1.5)
              </li>
              <li style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '13px',
                color: '#666',
                lineHeight: '1.6'
              }}>
                • 텍스트는 항상 대문자 + letter-spacing: 2px
              </li>
              <li style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '13px',
                color: '#666',
                lineHeight: '1.6'
              }}>
                • rounded-full (완전한 pill 형태)
              </li>
              <li style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '13px',
                color: '#666',
                lineHeight: '1.6'
              }}>
                • 배경은 투명도 8-15%, 테두리는 20-30% 사용
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
        <h3 style={{
          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
          fontSize: '20px',
          fontWeight: '600',
          color: '#0F214A',
          marginBottom: '24px'
        }}>
          Buttons
        </h3>

        <div className="space-y-8">
          {/* 1. 메인 히어로 버튼 */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 bg-gray-50 rounded-xl">
            <div>
              <p style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                color: '#0F214A',
                marginBottom: '8px'
              }}>Primary CTA (Hero)</p>
              <code style={{
                fontFamily: 'monospace',
                fontSize: '12px',
                color: '#666'
              }}>Large / Orange / Bold Shadow</code>
              <div className="mt-3 space-y-1">
                <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#666' }}>
                  BG: <span style={{ color: '#FF6B3D', fontWeight: '600' }}>#FF6B3D</span> / 
                  Hover: <span style={{ color: '#e55a35', fontWeight: '600' }}>#e55a35</span>
                </p>
              </div>
            </div>
            <button 
              className="bg-[#FF6B3D] text-white hover:bg-[#e55a35] transition-all"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                padding: '18px 48px',
                borderRadius: '18px',
                fontSize: '18px',
                fontWeight: '700',
                boxShadow: '0 8px 24px rgba(255, 107, 61, 0.4)',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              시작하기
            </button>
          </div>

          {/* 2. 헤더 빠른 상담 버튼 */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 bg-gray-50 rounded-xl">
            <div>
              <p style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                color: '#0F214A',
                marginBottom: '8px'
              }}>Header Button (Pill)</p>
              <code style={{
                fontFamily: 'monospace',
                fontSize: '12px',
                color: '#666'
              }}>rounded-full / Orange / Medium Shadow</code>
              <div className="mt-3 space-y-1">
                <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#666' }}>
                  BG: <span style={{ color: '#FF6B2C', fontWeight: '600' }}>#FF6B2C</span> / 
                  Hover: <span style={{ color: '#FF7C40', fontWeight: '600' }}>#FF7C40</span>
                </p>
              </div>
            </div>
            <button
              className="bg-[#FF6B2C] hover:bg-[#FF7C40] text-white transition-all shadow-md"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontWeight: '600',
                borderRadius: '100px',
                padding: '12px 26px',
                fontSize: '16px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              빠른 상담
            </button>
          </div>

          {/* 3. 무료 상담 신청 버튼 (화살표) */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 bg-gray-50 rounded-xl">
            <div>
              <p style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                color: '#0F214A',
                marginBottom: '8px'
              }}>CTA with Icon</p>
              <code style={{
                fontFamily: 'monospace',
                fontSize: '12px',
                color: '#666'
              }}>Orange / Arrow Icon / hover:scale-105</code>
              <div className="mt-3 space-y-1">
                <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#666' }}>
                  BG: <span style={{ color: '#FF6B3D', fontWeight: '600' }}>#FF6B3D</span> / 
                  Hover: <span style={{ color: '#e55a35', fontWeight: '600' }}>#e55a35</span>
                </p>
              </div>
            </div>
            <button
              className="inline-flex items-center gap-3 bg-[#FF6B3D] text-white hover:bg-[#e55a35] transition-all hover:scale-105"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                padding: '16px 32px',
                borderRadius: '12px',
                fontSize: '17px',
                fontWeight: '600',
                boxShadow: '0 4px 16px rgba(255, 107, 61, 0.25)',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              무료 상담 신청하기
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>

          {/* 4. Secondary Button (Navy) */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 bg-gray-50 rounded-xl">
            <div>
              <p style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                color: '#0F214A',
                marginBottom: '8px'
              }}>Secondary (Navy)</p>
              <code style={{
                fontFamily: 'monospace',
                fontSize: '12px',
                color: '#666'
              }}>Navy / White Text / Subtle Shadow</code>
              <div className="mt-3 space-y-1">
                <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#666' }}>
                  BG: <span style={{ color: '#1A3479', fontWeight: '600' }}>#1A3479</span> / 
                  Hover: <span style={{ color: '#0F214A', fontWeight: '600' }}>#0F214A</span>
                </p>
              </div>
            </div>
            <button
              className="bg-[#1A3479] text-white hover:bg-[#0F214A] transition-all"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                padding: '14px 28px',
                borderRadius: '12px',
                fontSize: '15px',
                fontWeight: '600',
                boxShadow: '0 2px 8px rgba(26, 52, 121, 0.2)',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              자세히 보기
            </button>
          </div>

          {/* 5. Outline Button */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 bg-gray-50 rounded-xl">
            <div>
              <p style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                color: '#0F214A',
                marginBottom: '8px'
              }}>Outline Button</p>
              <code style={{
                fontFamily: 'monospace',
                fontSize: '12px',
                color: '#666'
              }}>Orange Border / Transparent / hover:filled</code>
              <div className="mt-3 space-y-1">
                <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#666' }}>
                  Border: <span style={{ color: '#FF6B3D', fontWeight: '600' }}>#FF6B3D 2px</span> / 
                  Hover BG: <span style={{ color: '#FF6B3D', fontWeight: '600' }}>#FF6B3D</span>
                </p>
              </div>
            </div>
            <button
              className="border-2 border-[#FF6B3D] text-[#FF6B3D] hover:bg-[#FF6B3D] hover:text-white transition-all"
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                padding: '12px 24px',
                borderRadius: '10px',
                fontSize: '15px',
                fontWeight: '600',
                background: 'transparent',
                cursor: 'pointer'
              }}
            >
              상세보기
            </button>
          </div>

          {/* 6. Primary Download Button */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 bg-gray-50 rounded-xl">
            <div>
              <p style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                color: '#0F214A',
                marginBottom: '8px'
              }}>Primary Download Button</p>
              <code style={{
                fontFamily: 'monospace',
                fontSize: '12px',
                color: '#666'
              }}>Navy / White Text / Download Icon / 56px Height</code>
              <div className="mt-3 space-y-1">
                <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#666' }}>
                  BG: <span style={{ color: '#263b82', fontWeight: '600' }}>#263b82</span> / 
                  Hover: <span style={{ color: '#152556', fontWeight: '600' }}>#152556</span>
                </p>
              </div>
            </div>
            <button
              style={{
                width: '280px',
                height: '56px',
                padding: '0 24px',
                borderRadius: '0px',
                background: '#263b82',
                color: '#FFFFFF',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '16px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                transition: 'all 0.2s ease',
                letterSpacing: '0.3px'
              }}
              // onMouseEnter={(e) => {
              //   e.currentTarget.style.background = '#152556';
              // }}
              // onMouseLeave={(e) => {
              //   e.currentTarget.style.background = '#263b82';
              // }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              AI 원본 다운로드
            </button>
          </div>

          {/* 7. Secondary Download Button (Outlined) */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 bg-gray-50 rounded-xl">
            <div>
              <p style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                color: '#0F214A',
                marginBottom: '8px'
              }}>Secondary Download Button (Outlined)</p>
              <code style={{
                fontFamily: 'monospace',
                fontSize: '12px',
                color: '#666'
              }}>White BG / Navy Border / Download Icon / 56px Height</code>
              <div className="mt-3 space-y-1">
                <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#666' }}>
                  BG: <span style={{ color: '#FFFFFF', fontWeight: '600' }}>#FFFFFF</span> / 
                  Border: <span style={{ color: '#263b82', fontWeight: '600' }}>#263b82 2px</span> / 
                  Hover: <span style={{ color: '#F5F7FA', fontWeight: '600' }}>#F5F7FA</span>
                </p>
              </div>
            </div>
            <button
              style={{
                width: '280px',
                height: '56px',
                padding: '0 24px',
                borderRadius: '0px',
                background: '#FFFFFF',
                color: '#263b82',
                border: '2px solid #263b82',
                cursor: 'pointer',
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '16px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                transition: 'all 0.2s ease',
                letterSpacing: '0.3px',
              }}
              // onMouseEnter={(e) => {
              //   e.currentTarget.style.background = '#F5F7FA';
              // }}
              // onMouseLeave={(e) => {
              //   e.currentTarget.style.background = '#FFFFFF';
              // }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              PNG 파일 다운로드
            </button>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
        <h3 style={{
          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
          fontSize: '20px',
          fontWeight: '600',
          color: '#0F214A',
          marginBottom: '24px'
        }}>
          Cards
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '14px',
              fontWeight: '600',
              color: '#0F214A',
              marginBottom: '12px',
              textAlign: 'center'
            }}>Small Card</p>
            <div className="bg-[#0F214A] rounded-2xl p-6 text-white text-center">
              <p style={{ fontSize: '14px' }}>p-6 (24px)</p>
            </div>
          </div>

          <div>
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '14px',
              fontWeight: '600',
              color: '#0F214A',
              marginBottom: '12px',
              textAlign: 'center'
            }}>Medium Card</p>
            <div className="bg-[#273b82] rounded-2xl p-8 text-white text-center">
              <p style={{ fontSize: '14px' }}>p-8 (32px)</p>
            </div>
          </div>

          <div>
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '14px',
              fontWeight: '600',
              color: '#0F214A',
              marginBottom: '12px',
              textAlign: 'center'
            }}>Large Card</p>
            <div className="bg-[#15305A] rounded-2xl p-10 text-white text-center">
              <p style={{ fontSize: '14px' }}>p-10 (40px)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Shadows */}
      <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
        <h3 style={{
          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
          fontSize: '20px',
          fontWeight: '600',
          color: '#0F214A',
          marginBottom: '24px'
        }}>
          Shadows
        </h3>

        <div className="space-y-6">
          <div>
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '14px',
              fontWeight: '600',
              color: '#0F214A',
              marginBottom: '12px'
            }}>Light</p>
            <div 
              className="bg-white rounded-xl p-6 border border-gray-100"
              style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)' }}
            >
              <code style={{
                fontFamily: 'monospace',
                fontSize: '13px',
                color: '#666'
              }}>shadow-sm 또는 0 2px 8px rgba(0, 0, 0, 0.04)</code>
            </div>
          </div>

          <div>
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '14px',
              fontWeight: '600',
              color: '#0F214A',
              marginBottom: '12px'
            }}>Medium</p>
            <div 
              className="bg-white rounded-xl p-6 border border-gray-100"
              style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}
            >
              <code style={{
                fontFamily: 'monospace',
                fontSize: '13px',
                color: '#666'
              }}>0 4px 12px rgba(0, 0, 0, 0.08)</code>
            </div>
          </div>

          <div>
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '14px',
              fontWeight: '600',
              color: '#0F214A',
              marginBottom: '12px'
            }}>Strong (Hover 시)</p>
            <div 
              className="bg-white rounded-xl p-6 border border-gray-100"
              style={{ boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)' }}
            >
              <code style={{
                fontFamily: 'monospace',
                fontSize: '13px',
                color: '#666'
              }}>0 8px 24px rgba(0, 0, 0, 0.12)</code>
            </div>
          </div>
        </div>
      </div>

      {/* Spacing */}
      <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
        <h3 style={{
          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
          fontSize: '20px',
          fontWeight: '600',
          color: '#0F214A',
          marginBottom: '24px'
        }}>
          Spacing System
        </h3>

        <div className="space-y-4">
          <div className="flex justify-between items-center py-3 border-b border-gray-100">
            <span style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '14px',
              color: '#666'
            }}>Element 간격 (Small)</span>
            <code style={{
              fontFamily: 'monospace',
              fontSize: '14px',
              fontWeight: '600',
              color: '#FF6B3D'
            }}>gap-4 (16px)</code>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-100">
            <span style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '14px',
              color: '#666'
            }}>Element 간격 (Medium)</span>
            <code style={{
              fontFamily: 'monospace',
              fontSize: '14px',
              fontWeight: '600',
              color: '#FF6B3D'
            }}>gap-6 (24px)</code>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-100">
            <span style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '14px',
              color: '#666'
            }}>Element 간격 (Large)</span>
            <code style={{
              fontFamily: 'monospace',
              fontSize: '14px',
              fontWeight: '600',
              color: '#FF6B3D'
            }}>gap-8 (32px)</code>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-100">
            <span style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '14px',
              color: '#666'
            }}>컴포넌트 하단 여백 (Small)</span>
            <code style={{
              fontFamily: 'monospace',
              fontSize: '14px',
              fontWeight: '600',
              color: '#FF6B3D'
            }}>mb-6 (24px)</code>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-100">
            <span style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '14px',
              color: '#666'
            }}>컴포넌트 하단 여백 (Medium)</span>
            <code style={{
              fontFamily: 'monospace',
              fontSize: '14px',
              fontWeight: '600',
              color: '#FF6B3D'
            }}>mb-12 (48px)</code>
          </div>

          <div className="flex justify-between items-center py-3">
            <span style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '14px',
              color: '#666'
            }}>컴포넌트 하단 여백 (Large)</span>
            <code style={{
              fontFamily: 'monospace',
              fontSize: '14px',
              fontWeight: '600',
              color: '#FF6B3D'
            }}>mb-16 (64px)</code>
          </div>
        </div>
      </div>

      {/* Custom Icons - 5가지 전략 */}
      <div className="bg-white rounded-2xl p-8 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 style={{
            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
            fontSize: '20px',
            fontWeight: '600',
            color: '#0F214A'
          }}>
            Custom Icons
          </h3>
          <span style={{
            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
            fontSize: '13px',
            fontWeight: '600',
            color: '#FF6B3D',
            background: 'rgba(255, 107, 61, 0.1)',
            padding: '6px 12px',
            borderRadius: '100px'
          }}>
            지속 확장 예정
          </span>
        </div>

        <p style={{
          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
          fontSize: '14px',
          color: '#666',
          marginBottom: '24px',
          lineHeight: '1.6'
        }}>
          현재 아이콘은 프로젝트 초기 단계로, 필요에 따라 지속적으로 추가될 예정입니다.<br />
          모든 신규 아이콘은 아래 규칙을 반드시 준수하여 제작합니다.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {/* Icon 1: Growth */}
          <div className="text-center">
            <div 
              className="bg-[#F15A2A]/10 flex items-center justify-center mx-auto mb-4" 
              style={{ 
                borderRadius: '12px',
                width: '80px',
                height: '80px'
              }}
            >
              <ImageWithFallback 
                src={growthIcon.src} 
                alt="Growth Icon" 
                style={{ 
                  width: '40px',
                  height: '40px'
                }} 
              />
            </div>
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '13px',
              fontWeight: '600',
              color: '#0F214A',
              marginBottom: '4px'
            }}>성장 차트</p>
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '12px',
              color: '#999'
            }}>막대그래프 + 상승</p>
          </div>

          {/* Icon 2: Calculator */}
          <div className="text-center">
            <div 
              className="bg-[#F15A2A]/10 flex items-center justify-center mx-auto mb-4" 
              style={{ 
                borderRadius: '12px',
                width: '80px',
                height: '80px'
              }}
            >
              <ImageWithFallback 
                src={calculatorIcon.src} 
                alt="Calculator Icon" 
                style={{ 
                  width: '40px',
                  height: '40px'
                }} 
              />
            </div>
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '13px',
              fontWeight: '600',
              color: '#0F214A',
              marginBottom: '4px'
            }}>계산기</p>
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '12px',
              color: '#999'
            }}>사업비 설계</p>
          </div>

          {/* Icon 3: Shield */}
          <div className="text-center">
            <div 
              className="bg-[#F15A2A]/10 flex items-center justify-center mx-auto mb-4" 
              style={{ 
                borderRadius: '12px',
                width: '80px',
                height: '80px'
              }}
            >
              <ImageWithFallback 
                src={shieldIcon.src} 
                alt="Shield Icon" 
                style={{ 
                  width: '40px',
                  height: '40px'
                }} 
              />
            </div>
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '13px',
              fontWeight: '600',
              color: '#0F214A',
              marginBottom: '4px'
            }}>방패</p>
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '12px',
              color: '#999'
            }}>보증보험 제거</p>
          </div>

          {/* Icon 4: Global Network */}
          <div className="text-center">
            <div 
              className="bg-[#F15A2A]/10 flex items-center justify-center mx-auto mb-4" 
              style={{ 
                borderRadius: '12px',
                width: '80px',
                height: '80px'
              }}
            >
              <ImageWithFallback 
                src={buildingIcon.src} 
                alt="Global Network Icon" 
                style={{ 
                  width: '40px',
                  height: '40px'
                }} 
              />
            </div>
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '13px',
              fontWeight: '600',
              color: '#0F214A',
              marginBottom: '4px'
            }}>글로벌 네트워크</p>
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '12px',
              color: '#999'
            }}>지구본 + 사람들</p>
          </div>

          {/* Icon 5: Profit */}
          <div className="text-center">
            <div 
              className="bg-[#F15A2A]/10 flex items-center justify-center mx-auto mb-4" 
              style={{ 
                borderRadius: '12px',
                width: '80px',
                height: '80px'
              }}
            >
              <ImageWithFallback 
                src={profitIcon.src} 
                alt="Profit Icon" 
                style={{ 
                  width: '40px',
                  height: '40px'
                }} 
              />
            </div>
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '13px',
              fontWeight: '600',
              color: '#0F214A',
              marginBottom: '4px'
            }}>수익 증가</p>
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '12px',
              color: '#999'
            }}>코인 + 상승 화살표</p>
          </div>

          {/* Icon 6: Gradient Line */}
          <div className="text-center">
            <div 
              className="bg-[#F15A2A]/10 flex items-center justify-center mx-auto mb-4" 
              style={{ 
                borderRadius: '12px',
                width: '80px',
                height: '80px'
              }}
            >
              <ImageWithFallback 
                src="figma:asset/1cc00cd7b7cbb28ed3081f68035b5830031fff5c.png"
                alt="Gradient Line Icon" 
                style={{ 
                  width: '50px',
                  height: 'auto'
                }} 
              />
            </div>
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '13px',
              fontWeight: '600',
              color: '#0F214A',
              marginBottom: '4px'
            }}>그라데이션 라인</p>
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '12px',
              color: '#999'
            }}>네이비→오렌지</p>
          </div>
        </div>

        <div className="mt-6 p-6 bg-blue-50 border-l-4 border-[#FF6B3D] rounded-lg">
          <p style={{
            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
            fontSize: '14px',
            fontWeight: '600',
            color: '#0F214A',
            marginBottom: '8px'
          }}>
            💡 아이콘 사용 가이드
          </p>
          <ul className="space-y-2">
            <li style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '13px',
              color: '#666',
              lineHeight: '1.6'
            }}>
              • 아이콘 컨테이너: bg-[#F15A2A]/10 + rounded-12px
            </li>
            <li style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '13px',
              color: '#666',
              lineHeight: '1.6'
            }}>
              • 모바일: 62px × 62px (아이콘 31px) / PC: 74px × 74px (아이콘 37px)
            </li>
            <li style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '13px',
              color: '#666',
              lineHeight: '1.6'
            }}>
              • 오렌지 배경 위에 배치하여 브랜드 통일성 유지
            </li>
          </ul>
        </div>

        <div className="mt-6 p-6 bg-[#0F214A]/5 border-l-4 border-[#273b82] rounded-lg">
          <p style={{
            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
            fontSize: '14px',
            fontWeight: '600',
            color: '#0F214A',
            marginBottom: '12px'
          }}>
            📐 Extension Principles
          </p>
          <ul className="space-y-2 mb-6">
            <li style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '13px',
              color: '#666',
              lineHeight: '1.6'
            }}>
              • 신규 아이콘 생성 시 기존 아이콘의 비율·선 두께·라운드 값 동일 적용
            </li>
            <li style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '13px',
              color: '#666',
              lineHeight: '1.6'
            }}>
              • 복잡한 형태 금지 (최대 3~4개의 메인 스트로크로 단순화)
            </li>
            <li style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '13px',
              color: '#666',
              lineHeight: '1.6'
            }}>
              • 채우기(Fill) 사용 금지
            </li>
            <li style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '13px',
              color: '#666',
              lineHeight: '1.6'
            }}>
              • 그림자, 그라데이션 사용 금지
            </li>
            <li style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '13px',
              color: '#666',
              lineHeight: '1.6'
            }}>
              • 회전·변형 금지
            </li>
          </ul>
          
          <p style={{
            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
            fontSize: '14px',
            fontWeight: '600',
            color: '#0F214A',
            marginBottom: '8px'
          }}>
            📌 Note
          </p>
          <p style={{
            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
            fontSize: '13px',
            color: '#666',
            lineHeight: '1.6'
          }}>
            • 아이콘은 컴포넌트 라이브러리로 관리되며, 새로운 기능/페이지 추가 시 동일 규칙을 적용해 아이콘을 확장할 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}