import { Check } from 'lucide-react';
import { SolarOLogo } from './SolarOLogo';
import { motion } from 'framer-motion';

export function WhyNow() {
  const reasons = [
    {
      title: "한전 계통용량, 언제닫힐지 아무도 모릅니다.",
      description: "아무리 좋은 지붕도 연결되지 않으면 아무 소용없습니다. 이미 일부 지역은 6개월~1년 대기, 일부는 불가 통보가 나오고 있습니다."
    },
    {
      title: "전국에서 몰리는 신청, 투자금은 한정적입니다.",
      description: "투자비는 충분히 준비했지만, 예상보다 훨씬 더 많은 문의가 몰려서 먼저 하는 사람이 가져갑니다."
    },
    {
      title: "타이런트매니저는 가장 빠르게 솔라오 사업을 연결합니다.",
      description: ""
    }
  ];

  return (
    <section className="bg-[#0F214A] py-15 md:py-30">
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1200px' }}>
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <SolarOLogo size="medium" />
          </div>
          {/* 메인 타이틀 - 72px Bold */}
          <h2 
            className="text-white text-center" 
            style={{ 
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              lineHeight: '1.2', 
              width: 'auto',
              height: 'auto',
              letterSpacing: '-0.02em'
            }}
          >
            <span 
              style={{ 
                display: 'block',
                fontSize: 'clamp(40px, 7vw, 72px)',
                fontWeight: '400'
              }}
            >
              <span style={{ fontWeight: '700' }}>솔라오</span> 지금 해야 하는 이유?
            </span>
          </h2>
        </div>

        {/* Reason List - Vertical Stack */}
        <div className="flex flex-col gap-6 mb-16 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-[#152556]/60 hover:bg-[#152556]/80 transition-all"
              style={{
                borderRadius: '20px',
                padding: 'clamp(24px, 5vw, 32px) clamp(28px, 6vw, 40px)',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="flex items-start gap-5">
                {/* Check Icon */}
                <motion.div 
                  className="flex-shrink-0 pt-1"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2, ease: "easeOut" }}
                >
                  <Check 
                    style={{ color: '#F15A2A' }}
                    size={32} 
                    strokeWidth={3.5}
                  />
                </motion.div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 
                    className="text-white mb-3"
                    style={{
                      fontSize: 'clamp(22px, 4.5vw, 28px)',
                      lineHeight: '1.4',
                      fontWeight: '700',
                      fontFamily: 'Pretendard, sans-serif',
                      width: 'auto',
                      wordBreak: 'keep-all'
                    }}
                  >
                    {reason.title}
                  </h3>
                  {reason.description && (
                    <p 
                      className="text-white/70"
                      style={{
                        fontSize: 'clamp(16px, 3.5vw, 18px)',
                        lineHeight: '1.6',
                        fontWeight: '400',
                        fontFamily: 'Pretendard, sans-serif',
                        width: 'auto',
                        wordBreak: 'keep-all'
                      }}
                    >
                      {reason.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <motion.p 
            className="text-[#FF6B3D]"
            style={{
              fontSize: '36px',
              fontWeight: '700',
              fontFamily: 'Pretendard, sans-serif',
              lineHeight: '140%'
            }}
            animate={{
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 0.5,
              ease: "easeInOut"
            }}
          >
            기회는 곧, 사라집니다
          </motion.p>
        </div>
      </div>
    </section>
  );
}