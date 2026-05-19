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
      name: "교보생명",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "(주)킴스트레이드 컴퍼니",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "윤하우스",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "(주)지엔지씨앤씨",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "스타힐부동산중개법인",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "닥터힐",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "정품산업",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "주식회사 플러벤스",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "동대문구 골프협회",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "금천구 골프협회",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "마포구 체육회",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "사단법인 희망을 나누는 사람들",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "현대자동차",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "펜트라하우스",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "새벽바다",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "STI 그룹",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "공영홈쇼핑",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "(주)동건이앤씨",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "마스로지틱",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "주식회사 더이끎",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "재경 완도군 향우회",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "(주)참마루건설",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "소안도풍경",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "서울시 약업인 협의회",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "바나나투어",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "S&J 골프아카데미",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "홈앤라이프",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "(주)비투케이",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "한양세무법인(마포지점)",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "씨앤엔 커뮤니케이션",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "(주)디오로디엔씨",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "법무법인 동인",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "보안뉴스",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "(주)원일소방이엔지",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "(주)제일에드",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "(주)아이비기획",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
    {
      name: "법무법인 서정",
      category: "카테고리",
      description: "업체 소개",
      benefits: "",
      location: "서울특별시 마포구",
      phone: "02-",
      website: "www.mapo.com",
    },
  ];

  const partnersSliderSettings = {
    dots: false,
    infinite: true,
    speed: 2500,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1500,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1500,
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
            <h2 className="font-display font-bold text-3xl lg:text-6xl text-[var(--text-primary)] mb-6">
              협력 기업
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent mx-auto mb-6"></div>
            <p className="font-body text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
              마포구 골프협회 회원들과 함께 하는 협력 기업
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
              더 많은 협력 기업 정보가 궁금하신가요?
            </p>
            <motion.a
              href="/partners"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-gold-dark)] text-white font-body font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              전체 협력 기업 보기
              <ExternalLink size={18} />
            </motion.a>
          </motion.div>
        </div>
  )
}