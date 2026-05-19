"use client"

import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";

import SampleImage1 from "@/public/sample_image_event_1.jpeg"
import SampleImage2 from "@/public/sample_image_event_2.jpeg"

export function MainDescriptionSection() {

  return (
    <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <div className="inline-block px-4 py-2 bg-[var(--accent-gold)]/10 rounded-full mb-6">
                <span className="font-body text-[var(--accent-gold)] font-semibold text-sm">
                  ABOUT US
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl lg:text-5xl text-[var(--text-primary)] mb-6 leading-tight">
                마포구 골프협회를<br />소개합니다
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent-gold)] to-transparent mb-8"></div>
              <p className="font-body text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                마포구 골프협회는 2025년 창립 이래 골프를 사랑하는 마포구민들의 친목과 실력 향상을 위해 노력해왔습니다.<br />
                현재 100여 명의 회원들과 함께 매월 정기 라운딩과 특별 대회를 개최하며,<br />
                건전한 골프 문화를 선도하고 있습니다.
              </p>
              <p className="font-body text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                우리는 단순한 친목 모임을 넘어, 지역사회 공헌과 골프 문화의 발전을 목표로 합니다.<br />
                매해 발전을 거듭하는 마포구 골프 협회에 많은 관심 부탁 드립니다.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl border border-[var(--border-gold)]/30">
                  <div className="font-display font-bold text-2xl lg:text-4xl text-[var(--accent-gold)] mb-2">
                    100+
                  </div>
                  <div className="font-body text-xs lg:text-sm text-[var(--text-secondary)]">
                    총 회원 수
                  </div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl border border-[var(--border-gold)]/30">
                  <div className="font-display font-bold text-2xl lg:text-4xl text-[var(--accent-gold)] mb-2">
                    10+
                  </div>
                  <div className="font-body text-xs lg:text-sm text-[var(--text-secondary)]">
                    연간 행사
                  </div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl border border-[var(--border-gold)]/30">
                  <div className="font-display font-bold text-2xl lg:text-4xl text-[var(--accent-gold)] mb-2">
                    2년
                  </div>
                  <div className="font-body text-xs lg:text-sm text-[var(--text-secondary)]">
                    협회 역사
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-8 -right-8 w-72 h-72 bg-[var(--accent-gold)]/20 rounded-full blur-3xl"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-3xl overflow-hidden"
                >
                  <ImageWithFallback
                    src={SampleImage2.src}
                    alt="Golf"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-3xl overflow-hidden mt-12"
                >
                  <ImageWithFallback
                    src={SampleImage1.src}
                    alt="Golf"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-3xl overflow-hidden -mt-12"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1775326376274-2ef7f5f9de8f?w=400&h=400&fit=crop"
                    alt="Golf"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-3xl overflow-hidden"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1692195400719-81a66b4fde89?w=400&h=400&fit=crop"
                    alt="Golf"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
  )
}