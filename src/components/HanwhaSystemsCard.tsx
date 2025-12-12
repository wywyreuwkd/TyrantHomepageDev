import { Building2, Award, Zap } from "lucide-react";
import hanwhaLogo from "figma:asset/0889aea574415257b7ae965ac7d65d5c6f891cf3.png";

export function HanwhaSystemsCard() {
  return (
    <div 
      className="group"
      style={{
        background: 'white',
        borderRadius: '32px',
        padding: '0',
        minHeight: '720px',
        position: 'relative',
        overflow: 'hidden',
        border: '2px solid #0F214A',
        boxShadow: '0 12px 40px rgba(15, 33, 74, 0.15)',
        transition: 'all 0.4s ease',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 20px 56px rgba(15, 33, 74, 0.3)';
        e.currentTarget.style.borderColor = '#FF6B3D';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(15, 33, 74, 0.15)';
        e.currentTarget.style.borderColor = '#0F214A';
      }}
    >
      {/* Logo Section */}
      <div style={{ 
        position: 'relative',
        height: '200px',
        overflow: 'hidden',
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px'
      }}>
        <img 
          src={hanwhaLogo} 
          alt="한화시스템"
          style={{
            maxWidth: '70%',
            maxHeight: '100%',
            objectFit: 'contain'
          }}
        />
      </div>

      {/* Content Section */}
      <div style={{ padding: '36px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Main Role */}
        <div 
          className="mb-6 p-5"
          style={{
            background: '#F7FAFD',
            borderRadius: '20px',
            border: '2px solid #0F214A'
          }}
        >
          <div 
            style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '12px',
              fontWeight: '600',
              color: '#FF6B3D',
              marginBottom: '6px',
              letterSpacing: '0.5px'
            }}
          >
            MAIN ROLE
          </div>
          <div 
            style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '16px',
              fontWeight: '700',
              color: '#0F214A',
              lineHeight: '1.6'
            }}
          >
            EPC 공동 도급사<br />
            <span style={{ fontSize: '16px', fontWeight: '700' }}>기자재 공급 및 금융관련 자금 보충</span>
          </div>
        </div>

        {/* Company Info */}
        <div className="mb-5">
          <div 
            className="flex items-center gap-2 mb-3"
            style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '14px',
              fontWeight: '700',
              color: '#0F214A'
            }}
          >
            <Building2 size={18} style={{ color: '#FF6B3D' }} />
            회사 정보
          </div>
          <div className="space-y-2 pl-7">
            {[
              { label: '회사명', value: '한화시스템 주식회사' },
              { label: '설립일', value: '2000년 01월 11일' },
              { label: '대표이사', value: '어성철' },
              { label: '자본금/신용도', value: '9,446억원 / AA- (한국신용평가 기준)' },
              { label: '임직원수', value: '4,284명 (2023년 3월말 기준)' },
              { label: '주요주주', value: '한화에어로스페이스㈜, 한화에너지㈜ 외 3인' },
              { label: '본사주소', value: '경상북도 구미시 1공단로 244' },
              { label: '업종', value: '정밀기기, 전자부품 제조업 및 신재생에너지 외 기타' }
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex' }}>
                <span 
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '13px',
                    color: '#999',
                    width: '110px',
                    flexShrink: 0,
                    fontWeight: '600'
                  }}
                >
                  {item.label}
                </span>
                <span 
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '13px',
                    color: '#333',
                    fontWeight: '500',
                    flex: 1
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Track Record Highlights */}
        <div className="mb-6">
          <div 
            className="flex items-center gap-2 mb-3"
            style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '14px',
              fontWeight: '700',
              color: '#0F214A'
            }}
          >
            <Award size={18} style={{ color: '#FF6B3D' }} />
            주요 실적 (최근 3년)
          </div>
          <div className="space-y-1.5 pl-7">
            {[
              '태양광발전설비 48.7MW (2022)',
              '새만금 태양광 99.8MW (2021)',
              '해나눔 태양광 17.67MW (2020)',
              '충남 축도 자립섬 구축 (2015)'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start">
                <div 
                  style={{
                    width: '4px',
                    height: '4px',
                    background: '#0F214A',
                    borderRadius: '50%',
                    marginTop: '7px',
                    marginRight: '10px',
                    flexShrink: 0
                  }}
                />
                <span 
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '13px',
                    color: '#333',
                    lineHeight: '1.5',
                    fontWeight: '500'
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Badge */}
        <div 
          className="mt-auto pt-5"
          style={{
            borderTop: '1px solid rgba(15, 33, 74, 0.1)'
          }}
        >
          <div 
            className="inline-flex items-center gap-2 px-4 py-2"
            style={{
              background: 'rgba(15, 33, 74, 0.08)',
              borderRadius: '100px',
              border: '1px solid rgba(15, 33, 74, 0.15)'
            }}
          >
            <Zap size={16} style={{ color: '#FF6B3D' }} />
            <span 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '13px',
                fontWeight: '600',
                color: '#0F214A'
              }}
            >
              EPC Partner
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}