"use client"

import React from "react";
import { motion } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { ExternalLink, Phone } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function MainPartnersSection() {
  const partnersSliderRef = useRef<Slider>(null);

  const partners = [
    {
      name: "레이크우드 골프클럽",
      category: "골프장",
      phone: "031-XXX-XXXX",
    },
    {
      name: "스카이72 골프클럽",
      category: "골프장",
      phone: "032-XXX-XXXX",
    },
    {
      name: "블랙스톤 골프클럽",
      category: "골프장",
      phone: "031-XXX-XXXX",
    },
    {
      name: "남서울 골프클럽",
      category: "골프장",
      phone: "031-XXX-XXXX",
    },
    {
      name: "썬밸리 골프클럽",
      category: "골프장",
      phone: "031-XXX-XXXX",
    },
    {
      name: "베어크리크 골프클럽",
      category: "골프장",
      phone: "032-XXX-XXXX",
    },
    {
      name: "그린힐스 골프클럽",
      category: "골프장",
      phone: "031-XXX-XXXX",
    },
    {
      name: "파인리지 골프클럽",
      category: "골프장",
      phone: "031-XXX-XXXX",
    },
    {
      name: "골프존 마포점",
      category: "스크린골프",
      phone: "02-XXX-XXXX",
    },
    {
      name: "카카오 VX 강남점",
      category: "스크린골프",
      phone: "02-XXX-XXXX",
    },
    {
      name: "프로골프샵",
      category: "골프용품",
      phone: "02-XXX-XXXX",
    },
    {
      name: "골프파트너 마포점",
      category: "골프용품",
      phone: "02-XXX-XXXX",
    },
    {
      name: "골프 아카데미",
      category: "레슨",
      phone: "02-XXX-XXXX",
    },
    {
      name: "프리미엄 골프레슨",
      category: "레슨",
      phone: "02-XXX-XXXX",
    },
    {
      name: "골프웨어 하우스",
      category: "골프의류",
      phone: "02-XXX-XXXX",
    },
    {
      name: "캘러웨이 마포점",
      category: "골프의류",
      phone: "02-XXX-XXXX",
    },
    {
      name: "타이틀리스트 마포점",
      category: "골프용품",
      phone: "02-XXX-XXXX",
    },
    {
      name: "핑 골프샵",
      category: "골프용품",
      phone: "02-XXX-XXXX",
    },
    {
      name: "테일러메이드 직영점",
      category: "골프용품",
      phone: "02-XXX-XXXX",
    },
    {
      name: "골프매니아",
      category: "골프의류",
      phone: "02-XXX-XXXX",
    },
  ];

  const partnersSliderSettings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[var(--accent-gold)]/10 rounded-full mb-6">
              <span className="font-body text-[var(--accent-gold)] font-semibold text-sm">
                PARTNERS
              </span>
            </div>
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-[var(--text-primary)] mb-6">
              참여 협력사
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent mx-auto mb-6"></div>
            <p className="font-body text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
              마포구 골프협회 회원들에게 특별한 혜택을 제공하는
              파트너사
            </p>
          </motion.div>

          <div className="partners-slider">
            <Slider
              ref={partnersSliderRef}
              {...partnersSliderSettings}
            >
              {partners.map((partner, index) => (
                <div key={index} className="px-3">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white border-2 border-[var(--border-gold)]/30 rounded-2xl p-6 hover:border-[var(--accent-gold)] hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-green)] to-[var(--accent-green-dark)] rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="font-display font-bold text-xl text-white">
                          {partner.name.charAt(0)}
                        </span>
                      </div>
                      <span className="px-3 py-1 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] font-body text-xs font-semibold rounded-full">
                        {partner.category}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-xl text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-gold)] transition-colors">
                      {partner.name}
                    </h3>
                    <div className="flex items-center gap-2 font-body text-sm text-[var(--text-secondary)]">
                      <Phone size={14} />
                      {partner.phone}
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="font-body text-[var(--text-secondary)] mb-6">
              더 많은 협력사 정보가 궁금하신가요?
            </p>
            <motion.a
              href="/partners"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-gold-dark)] text-white font-body font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              전체 협력사 보기
              <ExternalLink size={18} />
            </motion.a>
          </motion.div>
        </div>
  )
}