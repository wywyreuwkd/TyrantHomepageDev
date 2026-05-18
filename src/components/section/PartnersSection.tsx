"use client"

import { motion } from "motion/react";
import { useState } from "react";
import { ExternalLink, MapPin, Phone, Globe } from "lucide-react";

export function PartnersSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

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

  const totalPages = Math.ceil(partners.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPartners = partners.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="font-display font-bold text-6xl text-[var(--text-primary)] mb-6">
            협력 기업
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent mx-auto mb-6"></div>
          <p className="font-body text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            마포구 골프협회 회원들과 함께 하는 협력 기업을 소개합니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPartners.map((partner, index) => (
            <motion.div
              key={startIndex + index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-gold)]/20 to-[var(--accent-green)]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="relative bg-[var(--bg-card)] rounded-3xl overflow-hidden border border-[var(--border-gold)]/30 hover:border-[var(--accent-gold)] transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-[var(--accent-green)] to-[var(--accent-green-dark)] relative overflow-hidden p-8 flex items-end">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--accent-gold)] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                  </div>
                  <div className="relative">
                    <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white font-body font-semibold text-sm rounded-full mb-3">
                      {partner.category}
                    </span>
                    <h3 className="font-display font-bold text-3xl text-white">
                      {partner.name}
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="font-body text-[var(--text-secondary)] leading-relaxed mb-6">
                    {partner.description}
                  </p>

                  {/*<div className="bg-gradient-to-r from-[var(--accent-gold)]/10 to-[var(--accent-gold)]/5 rounded-xl p-4 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-[var(--accent-gold)] rounded-full"></div>
                      <span className="font-body font-semibold text-sm text-[var(--text-primary)]">
                        회원 혜택
                      </span>
                    </div>
                    <p className="font-body text-[var(--accent-gold)] font-semibold">
                      {partner.benefits}
                    </p>
                  </div>*/}

                  <div className="space-y-3 border-t border-[var(--border-gold)]/30 pt-6">
                    <div className="flex items-center gap-3 font-body text-sm text-[var(--text-secondary)]">
                      <MapPin size={16} className="flex-shrink-0" />
                      {partner.location}
                    </div>
                    <div className="flex items-center gap-3 font-body text-sm text-[var(--text-secondary)]">
                      <Phone size={16} className="flex-shrink-0" />
                      {partner.phone}
                    </div>
                    <a
                      href={`https://${partner.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 font-body text-sm text-[var(--accent-gold)] hover:text-[var(--accent-gold-dark)] transition-colors group/link"
                    >
                      <Globe size={16} className="flex-shrink-0" />
                      <span className="group-hover/link:underline">{partner.website}</span>
                      <ExternalLink size={14} className="opacity-50" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex justify-center items-center gap-2"
        >
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg border-2 border-[var(--border-gold)]/30 text-[var(--text-secondary)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
          >
            이전
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`w-10 h-10 rounded-lg font-body font-semibold transition-all duration-300 ${
                currentPage === pageNumber
                  ? 'bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-gold-dark)] text-white shadow-lg'
                  : 'border-2 border-[var(--border-gold)]/30 text-[var(--text-secondary)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)]'
              }`}
            >
              {pageNumber}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg border-2 border-[var(--border-gold)]/30 text-[var(--text-secondary)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
          >
            다음
          </button>
        </motion.div>
      </div>
    </div>
  );
}
