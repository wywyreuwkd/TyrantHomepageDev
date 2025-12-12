import hanwhaLogo from "figma:asset/268a440f6b0528ed937ecf6374929a1886a3d203.png";

export function HanwhaCardClean() {
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
          src={hanwhaLogo} 
          alt="한화시스템"
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
            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
            fontSize: '18px',
            color: '#333',
            lineHeight: '1.7',
            fontWeight: '600'
          }}>
            EPC 공동 도급사<br />
            기자재 공급 및 공정관련 자금 보충
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
              <span style={{ color: '#333', fontWeight: '600' }}>한화시스템 주식회사</span>
            </div>
            <div style={{ marginBottom: '9px' }}>
              <span style={{ color: '#999', display: 'inline-block', width: '110px', fontWeight: '600' }}>설립일</span>
              <span style={{ color: '#333', fontWeight: '600' }}>2000년 01월 11일</span>
            </div>
            <div style={{ marginBottom: '9px' }}>
              <span style={{ color: '#999', display: 'inline-block', width: '110px', fontWeight: '600' }}>대표이사</span>
              <span style={{ color: '#333', fontWeight: '600' }}>어성철</span>
            </div>
            <div style={{ marginBottom: '9px' }}>
              <span style={{ color: '#999', display: 'inline-block', width: '110px', fontWeight: '600' }}>자본금</span>
              <span style={{ color: '#333', fontWeight: '600' }}>9,446억원 / AA- (한국신용평가 기준)</span>
            </div>
            <div style={{ marginBottom: '9px' }}>
              <span style={{ color: '#999', display: 'inline-block', width: '110px', fontWeight: '600' }}>임직원수</span>
              <span style={{ color: '#333', fontWeight: '600' }}>4,284명(2023년 3월말 기준)</span>
            </div>
            <div style={{ marginBottom: '9px' }}>
              <span style={{ color: '#999', display: 'inline-block', width: '110px', fontWeight: '600' }}>주요주주</span>
              <span style={{ color: '#333', fontWeight: '600' }}>한화에어로스페이스(주), 한화에너지(주) 외 3인</span>
            </div>
            <div style={{ marginBottom: '9px' }}>
              <span style={{ color: '#999', display: 'inline-block', width: '110px', fontWeight: '600' }}>본사주소</span>
              <span style={{ color: '#333', fontWeight: '600' }}>경상북도 구미시 1공단로 244</span>
            </div>
            <div style={{ marginBottom: '9px' }}>
              <span style={{ color: '#999', display: 'inline-block', width: '110px', fontWeight: '600' }}>업종</span>
              <span style={{ color: '#333', fontWeight: '600' }}>정밀기기, 전자부품 제조업 및 신재생에너지 외 기타</span>
            </div>
          </div>
        </div>

        {/* Track Record */}
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
            주요 실적
          </div>
          <div style={{ 
            fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
            fontSize: '14px',
            color: '#555',
            lineHeight: '1.9',
            fontWeight: '500'
          }}>
            • 2022년: 지붕형 태양광발전설비 48.7MW 달성, 태양광발전소 관리 운영 37.53MW 달성(19~22년)<br />
            • 2021년: 새만금 태양광발전설비 99.8MW 사업 구축<br />
            • 2020년: 해나눔 태양광발전설비 17.67MW 사업 구축<br />
            • 2019년: 김천 신재생연계 ESS 구축사업 (10MW)<br />
            • 2015년: 충청남도 죽도에너지 자립섬 구축(신재생 100%)<br />
            • 2015년: 전남 고흥만 간척지 태양광 구축 및 운영 (25MW)<br />
            • 2014년: 한화폴리리아 태양광+ESS 연계 구축<br />
            • 2014년: 제주도 토펑 바이오매스 발전소 구축(3MW)<br />
            • 2014년: 한국수출포장공업(제지) 스팀에너지관리시스템
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