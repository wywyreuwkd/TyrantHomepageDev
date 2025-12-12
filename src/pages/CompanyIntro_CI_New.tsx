// 새로운 CI 섹션 컴포넌트 (임시)
import symbolOnly from "figma:asset/42084a9ed76544286cbbc6eee3e051e537b81c35.png";
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function CISection() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#FFFFFF', paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="relative mx-auto" style={{ maxWidth: '1280px', paddingLeft: '120px', paddingRight: '120px' }}>
        {/* Badge */}
        <div className="mb-6">
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 24px',
              background: '#F3F4F6',
              border: '1px solid #E5E7EB',
              borderRadius: '100px'
            }}
          >
            <div style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#0F214A'
            }}></div>
            <span style={{ 
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '13px',
              fontWeight: '600',
              color: '#0F214A',
              letterSpacing: '1px'
            }}>
              TYRANT CI
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 style={{
          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
          fontSize: '32px',
          fontWeight: '700',
          color: '#0B1B3A',
          marginBottom: '56px',
          marginTop: '24px'
        }}>
          타이런트 CI
        </h2>

        {/* 3 Column Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '56px',
          marginBottom: '80px'
        }}>
          {/* Column 1: TYRANT CROWN */}
          <div style={{ textAlign: 'center' }}>
            {/* Number Badge */}
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#0B1B3A',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '16px',
              fontWeight: '700',
              margin: '0 auto 32px'
            }}>
              01
            </div>

            {/* Icon Placeholder */}
            <div style={{
              width: '56px',
              height: '56px',
              margin: '0 auto 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                background: '#FF6A33',
                borderRadius: '50%',
                opacity: 0.2
              }}></div>
            </div>

            {/* Title */}
            <h3 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '22px',
              fontWeight: '700',
              color: '#1F1F1F',
              marginBottom: '12px',
              textTransform: 'uppercase'
            }}>
              TYRANT CROWN
            </h3>

            {/* Subtitle */}
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '14px',
              fontWeight: '400',
              color: '#4B4B4B',
              marginBottom: '16px'
            }}>
              왕관
            </p>

            {/* Description */}
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '14px',
              fontWeight: '400',
              color: '#4B4B4B',
              lineHeight: '24px',
              margin: 0
            }}>
              리더십과 강한 추진력을 상징
            </p>
          </div>

          {/* Column 2: SOLAR MODULE */}
          <div style={{ textAlign: 'center' }}>
            {/* Number Badge */}
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#0B1B3A',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '16px',
              fontWeight: '700',
              margin: '0 auto 32px'
            }}>
              02
            </div>

            {/* Icon Placeholder */}
            <div style={{
              width: '56px',
              height: '56px',
              margin: '0 auto 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                background: '#FF6A33',
                borderRadius: '50%',
                opacity: 0.2
              }}></div>
            </div>

            {/* Title */}
            <h3 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '22px',
              fontWeight: '700',
              color: '#1F1F1F',
              marginBottom: '12px',
              textTransform: 'uppercase'
            }}>
              SOLAR MODULE
            </h3>

            {/* Subtitle */}
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '14px',
              fontWeight: '400',
              color: '#4B4B4B',
              marginBottom: '16px'
            }}>
              태양광 모듈
            </p>

            {/* Description */}
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '14px',
              fontWeight: '400',
              color: '#4B4B4B',
              lineHeight: '24px',
              margin: 0
            }}>
              태양광 시장을 혁신하고자 하는 타이런트의 의지
            </p>
          </div>

          {/* Column 3: EARTH SHIELD */}
          <div style={{ textAlign: 'center' }}>
            {/* Number Badge */}
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#0B1B3A',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '16px',
              fontWeight: '700',
              margin: '0 auto 32px'
            }}>
              03
            </div>

            {/* Icon Placeholder */}
            <div style={{
              width: '56px',
              height: '56px',
              margin: '0 auto 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                background: '#FF6A33',
                borderRadius: '50%',
                opacity: 0.2
              }}></div>
            </div>

            {/* Title */}
            <h3 style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '22px',
              fontWeight: '700',
              color: '#1F1F1F',
              marginBottom: '12px',
              textTransform: 'uppercase'
            }}>
              EARTH SHIELD
            </h3>

            {/* Subtitle */}
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '14px',
              fontWeight: '400',
              color: '#4B4B4B',
              marginBottom: '16px'
            }}>
              방패
            </p>

            {/* Description */}
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '14px',
              fontWeight: '400',
              color: '#4B4B4B',
              lineHeight: '24px',
              margin: 0
            }}>
              지구 보호와 기업의 지속 가능한 성장을 상징
            </p>
          </div>
        </div>

        {/* Bottom Section - Large Symbol + Description */}
        <div style={{
          position: 'relative',
          paddingTop: '80px',
          paddingBottom: '40px'
        }}>
          {/* Background Symbol - Opacity 8% */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: '400px',
            opacity: 0.08,
            zIndex: 0
          }}>
            <ImageWithFallback
              src={symbolOnly}
              alt="타이런트 심볼"
              style={{ 
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>

          {/* Description Text */}
          <div style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            maxWidth: '680px',
            margin: '0 auto'
          }}>
            <p style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '16px',
              fontWeight: '400',
              color: '#4B4B4B',
              lineHeight: '28px',
              margin: 0
            }}>
              타이런트의 심볼마크는 세 가지 핵심 가치를 담고 있습니다.<br />
              왕관은 업계 리더십을, 태양광 모듈은 혁신 의지를, 방패는 지구 보호 실천을 의미합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
