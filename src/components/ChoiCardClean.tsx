import choiJaeHwangPhoto from "figma:asset/8c54d59690985b36ba345dda0aee00047f4dd155.png";
import hanganAssetLogo from "figma:asset/f7aaf2db9063f7b6ff417fbee394ac0de33cb005.png";
import choiProfileSmall from "figma:asset/f14a3a2e4f6fc4e81aaa18a0c3896c81d8db6bc8.png";

export function ChoiCardClean() {
  return (
    <div 
      style={{
        background: 'white',
        borderRadius: '24px',
        overflow: 'hidden',
        border: '1px solid #E5E5E5',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        height: '850px',
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
          src={hanganAssetLogo} 
          alt="한강에셋"
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
            • 신재생에너지 전문 투자사<br />
            • 상품 및 투자구조 설계, 자산관리 등
          </div>
        </div>

        {/* Profile & Info Section */}
        <div style={{ display: 'flex', gap: '26px', marginBottom: '24px' }}>
          {/* Profile Photo */}
          <div style={{ flexShrink: 0 }}>
            <img 
              src={choiProfileSmall} 
              alt="최재황 상무"
              style={{
                width: '135px',
                height: '165px',
                objectFit: 'cover',
                borderRadius: '14px',
                border: '1px solid #E5E5E5'
              }}
            />
            <div style={{ 
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '17px',
              fontWeight: '700',
              color: '#0F214A',
              textAlign: 'center',
              marginTop: '12px'
            }}>
              최재황 상무
            </div>
          </div>

          {/* Education & Career */}
          <div style={{ flex: 1 }}>
            {/* Education */}
            <div style={{ marginBottom: '22px' }}>
              <div 
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#FF6B3D',
                  marginBottom: '12px'
                }}
              >
                최종학력 / 전문자격
              </div>
              <div style={{ 
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '15px',
                color: '#555',
                lineHeight: '1.85',
                fontWeight: '500'
              }}>
                · 연세대 경영학과<br />
                · 공인회계사(KICPA)<br />
                · 전기기사<br />
                · 전기공사기사<br />
                · 신재생에너지발전설비기사<br />
                · 투자자산운용사(금융투자상품, SOC)
              </div>
            </div>

            {/* Career */}
            <div>
              <div 
                style={{
                  fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#FF6B3D',
                  marginBottom: '12px'
                }}
              >
                주요경력사항
              </div>
              <div style={{ 
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '15px',
                color: '#555',
                lineHeight: '1.85',
                fontWeight: '500'
              }}>
                · 한화자산운용 인프라사업본부<br />
                &nbsp;&nbsp;(신재생에너지파트)<br />
                · 한화에너지 태양광 IPP사업팀<br />
                · 한화큐셀코리아투자금융팀<br />
                · SDN(불가리아 주재원)<br />
                · 한영회계법인 감사본부
              </div>
            </div>
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
              Investment Partner
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}