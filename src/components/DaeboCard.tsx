import { Building2, Award, Zap } from "lucide-react";
import daeboLogo from "figma:asset/9424e5203699862c1f3b4615de50167227d1b1f6.png";

export function DaeboCard() {
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
          src={daeboLogo} 
          alt="대보에너지솔루션"
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
            <span style={{ fontSize: '16px', fontWeight: '700' }}>태양광 시공 및 금융관련 자금 보충</span>
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
              { label: '회사명', value: 'DAEBO Energy Solution' },
              { label: '그룹사', value: '대보건설, 대보유통, 대보정보통신, 서원빌리 외' },
              { label: '설립일', value: '2024. 4. 2 (대보그룹의 자회사)' },
              { label: '대표이사', value: '김상욱' },
              { label: '자본금', value: '150백만원' },
              { label: '종업원수', value: '13명' }
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex' }}>
                <span 
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '13px',
                    color: '#999',
                    width: '90px',
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

        {/* Business Areas */}
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
            주요사업
          </div>
          <div className="space-y-1.5 pl-7">
            {[
              '신재생에너지 Construction',
              '신재생에너지 Consulting & finance',
              '신재생에너지 O&M',
              '신재생에너지 IPP & RE100'
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

        {/* Management Philosophy */}
        <div 
          className="mb-6 p-4"
          style={{
            background: 'linear-gradient(135deg, rgba(15, 33, 74, 0.05), rgba(255, 107, 61, 0.05))',
            borderRadius: '16px',
            borderLeft: '4px solid #FF6B3D'
          }}
        >
          <div 
            style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '11px',
              fontWeight: '600',
              color: '#999',
              marginBottom: '6px',
              letterSpacing: '0.5px'
            }}
          >
            경영이념
          </div>
          <div 
            style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '13px',
              fontWeight: '600',
              color: '#0F214A',
              lineHeight: '1.5',
              fontStyle: 'italic'
            }}
          >
            "정성과 혼을 다하여 최고 품질의 서비스를 제공하자"
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