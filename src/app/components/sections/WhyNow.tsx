"use client"

import { Check } from "lucide-react";
import { SolarOLogo } from "@components/shared/SolarOLogo";
import { motion } from "framer-motion";

export function WhyNow() {
  const reasons = [
    {
      title: "한전 계통용량, 언제 부족해질지 아무도 모릅니다.",
      description: "아무리 좋은 지붕도 연결되지 않으면 아무 소용없습니다. 이미 일부 지역은 6개월~1년 대기, 일부는 불가 통보가 나오고 있습니다."
    },
    {
      title: "전국에서 몰리는 신청, 투자금은 한정적입니다.",
      description: "투자비는 충분히 준비했지만, 예상보다 훨씬 더 많은 문의가 몰려서 먼저 하는 사람이 가져갑니다."
    },
    {
      title: "타이런트 매니저는 가장 빠르게 솔라오 사업을 연결합니다.",
      description: ""
    }
  ];

  return (
    <section className="bg-primary py-12 md:py-24">
      <div className="mx-auto px-6 md:px-10 max-w-[1200px]">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <SolarOLogo size="medium" />
          </div>
          <h2 className="color-white text-[42px] leading-[140%] font-bold">
            솔라오, 지금 해야 하는 이유?
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
                padding: '32px 40px',
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
                    className="text-[#FF6B3D]" 
                    size={32} 
                    strokeWidth={3.5}
                  />
                </motion.div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 
                    className="text-white mb-3"
                    style={{
                      fontSize: '24px',
                      lineHeight: '140%',
                      fontWeight: '700',
                      fontFamily: 'Pretendard, sans-serif'
                    }}
                  >
                    {reason.title}
                  </h3>
                  {reason.description && (
                    <p 
                      className="text-white/70"
                      style={{
                        fontSize: '16px',
                        lineHeight: '160%',
                        fontWeight: '400',
                        fontFamily: 'Pretendard, sans-serif'
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
        <div className="text-center text-3xl font-bold">
          <div className="color-accent">
            기회는 곧, 사라집니다.
            <br/>
            지금 바로 타이런트와 함께 하세요.
          </div>
          {/* <motion.p 
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
          </motion.p> */}
        </div>
      </div>
    </section>
  )
}