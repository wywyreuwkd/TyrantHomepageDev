import hanwhaLogo from "figma:asset/d2bd2442aa020550cbe75f6963070aa7f084923e.png";
import daeboLogo from "figma:asset/9277615fa3d362c1a6cea2a441685ccbd3036504.png";
import jbcorpLogo from "figma:asset/e9c6b069e143d1ad94dc4d9bbe90be0b28e047e4.png";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Partners() {
  return (
    <section className="bg-[#0E1C45] py-15 md:py-30">
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
        {/* Partners Section */}
        <div>
          <h2 
            className="text-center mb-16 text-white" 
            style={{ 
              fontSize: 'clamp(38px, 6vw, 48px)', 
              fontWeight: 'bold', 
              lineHeight: '140%',
              wordBreak: 'keep-all'
            }}
          >
            믿을 수 있는 <br className="md:hidden" />
            <span className="text-[#FF6A3D]">대기업 파트너</span>
          </h2>
          
          <div 
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mx-auto"
            style={{ 
              maxWidth: '100%',
              padding: 'clamp(32px, 6vw, 48px)',
              borderRadius: '24px',
              backgroundColor: '#152556'
            }}
          >
            {/* 한화시스템 로고 */}
            <div className="flex flex-col items-center flex-1 w-full">
              <div 
                className="flex items-center justify-center mb-6"
                style={{ 
                  width: '100%',
                  maxWidth: '280px',
                  height: '160px'
                }}
              >
                <ImageWithFallback 
                  src={hanwhaLogo} 
                  alt="한화시스템" 
                  className="md:max-w-[156px] md:max-h-[104px]"
                  style={{ 
                    maxWidth: '125px',
                    maxHeight: '78px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div className="text-center">
                <p className="text-white" style={{ fontSize: 'clamp(20px, 4.5vw, 24px)', fontWeight: 'bold', lineHeight: '140%' }}>
                  한화시스템
                </p>
                <p className="text-[#A8B4C8] mt-1" style={{ fontSize: 'clamp(14px, 3.5vw, 16px)', lineHeight: '140%' }}>
                  HANWHA SYSTEMS
                </p>
              </div>
            </div>

            {/* 구분선 */}
            <div className="bg-white/20 hidden md:block" style={{ width: '1px', height: '200px' }}></div>
            <div className="bg-white/20 block md:hidden" style={{ height: '1px', width: '100%', maxWidth: '300px' }}></div>

            {/* JBCORP 로고 */}
            <div className="flex flex-col items-center flex-1 w-full">
              <div 
                className="flex items-center justify-center mb-6"
                style={{ 
                  width: '100%',
                  maxWidth: '280px',
                  height: '160px'
                }}
              >
                <ImageWithFallback 
                  src={jbcorpLogo} 
                  alt="제이비코퍼레이션" 
                  className="md:max-w-[156px] md:max-h-[104px]"
                  style={{ 
                    maxWidth: '125px',
                    maxHeight: '78px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div className="text-center">
                <p className="text-white" style={{ fontSize: 'clamp(20px, 4.5vw, 24px)', fontWeight: 'bold', lineHeight: '140%' }}>
                  제이비코퍼레이션
                </p>
                <p className="text-[#A8B4C8] mt-1" style={{ fontSize: 'clamp(14px, 3.5vw, 16px)', lineHeight: '140%' }}>
                  JBCORP
                </p>
              </div>
            </div>

            {/* 구분선 */}
            <div className="bg-white/20 hidden md:block" style={{ width: '1px', height: '200px' }}></div>
            <div className="bg-white/20 block md:hidden" style={{ height: '1px', width: '100%', maxWidth: '300px' }}></div>

            {/* DAEBO 로고 */}
            <div className="flex flex-col items-center flex-1 w-full">
              <div 
                className="flex items-center justify-center mb-6"
                style={{ 
                  width: '100%',
                  maxWidth: '280px',
                  height: '160px'
                }}
              >
                <ImageWithFallback 
                  src={daeboLogo} 
                  alt="대보" 
                  className="md:max-w-[156px] md:max-h-[104px]"
                  style={{ 
                    maxWidth: '125px',
                    maxHeight: '78px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div className="text-center">
                <p className="text-white" style={{ fontSize: 'clamp(20px, 4.5vw, 24px)', fontWeight: 'bold', lineHeight: '140%' }}>
                  대보
                </p>
                <p className="text-[#A8B4C8] mt-1" style={{ fontSize: 'clamp(14px, 3.5vw, 16px)', lineHeight: '140%' }}>
                  DAEBO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}