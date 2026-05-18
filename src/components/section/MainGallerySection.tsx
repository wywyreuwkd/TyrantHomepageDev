"use client"

import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { ExternalLink, Phone } from "lucide-react";
import Link from "next/link";

import SampleImage1 from "@/public/sample_image_field_1.jpeg"
import SampleImage2 from "@/public/sample_image_field_2.jpeg"
// import SampleImage3 from "https://images.unsplash.com/photo-1768396747921-5a18367415d2?w=600&h=450&fit=crop"
// import SampleImage4 from "https://images.unsplash.com/photo-1761400025076-8fec91f620f2?w=600&h=450&fit=crop"

export function MainGallerySection() {

  const recentGalleryPhotos = [
    {
      image: "/sample_image_field_1.jpeg",
      title: "제2회 마포구협회장배 골프대회",
      date: "2026.04.15",
    },
    {
      image: "/sample_image_field_2.jpeg",
      title: "제2회 마포구협회장배 골프대회",
      date: "2026.04.20",
    },
    {
      image: "https://images.unsplash.com/photo-1768396747921-5a18367415d2?w=600&h=450&fit=crop",
      title: "정기 월례회",
      date: "2026.05.20",
    },
    {
      image: "https://images.unsplash.com/photo-1761400025076-8fec91f620f2?w=600&h=450&fit=crop",
      title: "여름 정기대회",
      date: "2025.9.22",
    }
  ];

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
                PHOTO GALLERY
              </span>
            </div>
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-[var(--text-primary)] mb-6">
              활동 갤러리
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent mx-auto mb-6"></div>
            <p className="font-body text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
              마포구 골프협회의 최근 활동 모습
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recentGalleryPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="relative group cursor-pointer"
              >


                <Link href="/gallery" className="flex items-center gap-3 group">

                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">  

                  <ImageWithFallback
                        src={photo.image}                
                        alt={photo.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />                                
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-display font-semibold text-lg mb-1">
                        {photo.title}
                      </h3>
                      <p className="font-body text-sm opacity-90">
                        {photo.date}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="font-body text-[var(--text-secondary)] mb-6">
              더 많은 활동 정보가 궁금하신가요?
            </p>
            <motion.a
              href="/gallery"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-gold-dark)] text-white font-body font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              전체 포토 갤러리 보기
              <ExternalLink size={18} />
            </motion.a>
          </motion.div>
        </div>
  )
}