"use client"

import React from "react";
import { motion } from "motion/react";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import springImage from "@/public/spring-golf-course-001-003.png";
import summerImage from "@/public/summer-golf-course-001-001.png";
import autumnImage from "@/public/autumn-golf-course.png";

export function MainHeroSection() {
	const heroSliderRef = useRef<Slider>(null);

  const heroImages = [
    {
      src: springImage.src,
      alt: "Spring Golf Course",
      season: "봄",
    },
    {
      src: summerImage.src,
      alt: "Summer Golf Course",
      season: "여름",
    },
    {
      src: autumnImage.src,
      alt: "Autumn Golf Course",
      season: "가을",
    },
  ];

  const heroSliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    arrows: false,
    pauseOnHover: false,
    cssEase: "ease-in-out",
  };

  const joinClick = () => {
  	alert("카카오톡 또는 전화 연결 되도록 구현 예정 입니다.")
  }

  return (
    <div>   
    <div className="hero-slider">
          <Slider ref={heroSliderRef} {...heroSliderSettings}>
            {heroImages.map((image, index) => (             
              <div key={index} className="relative h-screen">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>                              
              </div>              
            ))}
          </Slider>          
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center mb-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-left w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="inline-block px-6 py-2 bg-[var(--accent-gold)]/20 backdrop-blur-sm border border-[var(--accent-gold)]/50 rounded-full mb-6">
              <span className="font-body text-[var(--accent-gold)] font-semibold">
                Since 2025
              </span>
            </div>
            <h1 className="font-display font-bold text-7xl lg:text-7xl text-white mb-6 tracking-tight leading-none">
              마포구
              <br />
              골프협회
            </h1>
            <p className="font-display text-3xl lg:text-4xl text-[var(--accent-gold)] mb-8 italic">
              Mapo Golf Association
            </p>
            <p className="font-body text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed mb-12">
              골프를 사랑하는 마포구민들의 모임,
              <br />
              함께 성장하고 즐기는 골프 문화를 만들어갑니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-gold-dark)] text-[var(--text-inverse)] font-body font-semibold text-lg rounded-full shadow-2xl hover:shadow-[var(--accent-gold)]/50 transition-all duration-300"
                onClick={joinClick}
              >
                가입 문의하기
              </motion.button>              
            </div>
          </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-main)] to-transparent pointer-events-none z-10"
        ></motion.div>
  </div>
  )
}