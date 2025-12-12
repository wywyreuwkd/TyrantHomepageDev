import daeboLogo from "figma:asset/e17149cd9b6f26ea9d34e78f047a7b27d0e0c724.png";

export function DaeboCardClean() {
  return (
    <div 
      style={{
        background: 'white',
        borderRadius: '24px',
        overflow: 'hidden',
        border: '1px solid #E5E5E5',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        height: 'auto',
        minHeight: '850px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Logo Section */}
      <div style={{ 
        position: 'relative',
        height: '240px',
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px',
        borderBottom: '1px solid #F0F0F0'
      }}>
        <img 
          src={daeboLogo} 
          alt="대보에너지솔루션"
          style={{
            width: '320px',
            height: '110px',
            objectFit: 'contain'
          }}
        />
      </div>

      {/* Content Section */}
      <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Main Role */}
        <div 
          style={{
            background: '#FFF8F5',
            borderRadius: '18px',
            padding: '26px',
            marginBottom: '28px',
            border: '1px solid #FFE5DC'
          }}
        >
          <div 
            style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '14px',
              fontWeight: '700',
              color: '#FF6B3D',
              marginBottom: '14px',
              letterSpacing: '0.8px'
            }}
          >
            MAIN ROLE
          </div>
          <div style={{ 
            fontFamily: 'Pretendard, -apple-system, \"Noto Sans KR\", sans-serif',
            fontSize: '18px',
            color: '#333',
            lineHeight: '1.7',
            fontWeight: '600'
          }}>
            EPC 공동 도급사<br />
            태양광 시공 및 공정관련 자재 보충
          </div>
        </div>

        {/* Company Info */}
        <div style={{ marginBottom: '26px' }}>
          <div 
            style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '16px',
              fontWeight: '700',
              color: '#FF6B3D',
              marginBottom: '14px'
            }}
          >
            회사 정보
          </div>
          <div style={{ 
            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
            fontSize: '15px',
            color: '#666',
            lineHeight: '1.95'
          }}>
            <div style={{ marginBottom: '9px' }}>
              <span style={{ color: '#999', display: 'inline-block', width: '110px', fontWeight: '600' }}>회사명</span>
              <span style={{ color: '#333', fontWeight: '600' }}>[국문] 대보에너지솔루션 주식회사</span>
            </div>
            <div style={{ marginBottom: '9px' }}>
              <span style={{ color: '#999', display: 'inline-block', width: '110px', fontWeight: '600' }}></span>
              <span style={{ color: '#333', fontWeight: '600' }}>[영문] DAEBO Energy Solution</span>
            </div>
            <div style={{ marginBottom: '9px' }}>
              <span style={{ color: '#999', display: 'inline-block', width: '110px', fontWeight: '600' }}>그룹사</span>
              <span style={{ color: '#333', fontWeight: '600' }}>대보건설, 대보유통, 대보정보통신, 서원벨리 外</span>
            </div>
            <div style={{ marginBottom: '9px' }}>
              <span style={{ color: '#999', display: 'inline-block', width: '110px', fontWeight: '600' }}>설립일</span>
              <span style={{ color: '#333', fontWeight: '600' }}>2024. 4. 2 (대보그룹의 자회사)</span>
            </div>
            <div style={{ marginBottom: '9px' }}>
              <span style={{ color: '#999', display: 'inline-block', width: '110px', fontWeight: '600' }}>대표이사</span>
              <span style={{ color: '#333', fontWeight: '600' }}>김상욱</span>
            </div>
            <div style={{ marginBottom: '9px' }}>
              <span style={{ color: '#999', display: 'inline-block', width: '110px', fontWeight: '600' }}>경영이념</span>
              <span style={{ color: '#333', fontWeight: '600' }}>"정성과 혼을 다하여 최고 품질의 서비스를 제공하자"</span>
            </div>
            <div style={{ marginBottom: '9px' }}>
              <span style={{ color: '#999', display: 'inline-block', width: '110px', fontWeight: '600' }}>자본금</span>
              <span style={{ color: '#333', fontWeight: '600' }}>150백만원</span>
            </div>
            <div style={{ marginBottom: '9px' }}>
              <span style={{ color: '#999', display: 'inline-block', width: '110px', fontWeight: '600' }}>종업원수</span>
              <span style={{ color: '#333', fontWeight: '600' }}>13명</span>
            </div>
          </div>
        </div>

        {/* Main Business */}
        <div style={{ marginBottom: '28px' }}>
          <div 
            style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '16px',
              fontWeight: '700',
              color: '#FF6B3D',
              marginBottom: '14px'
            }}
          >
            주요사업
          </div>
          <div style={{ 
            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
            fontSize: '15px',
            color: '#555',
            lineHeight: '1.9',
            fontWeight: '500'
          }}>
            • 신재생에너지 Construction<br />
            • 신재생에너지 Consulting & finance<br />
            • 신재생에너지 O&M<br />
            • 신재생에너지 IPP & RE100
          </div>
        </div>

        {/* Bottom Badge */}
        <div 
          style={{
            marginTop: 'auto',
            paddingTop: '28px',
            borderTop: '1px solid #F0F0F0'
          }}
        >
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 24px',
              background: '#F7FAFD',
              borderRadius: '100px',
              border: '1px solid #E5EBF0'
            }}
          >
            <span 
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '16px',
                fontWeight: '700',
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