"use client"

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const photos = [
    {
      title: "2026 봄맞이 친선대회",
      date: "2026.03.15",
      description: "스카이72에서 열린 봄맞이 친선대회의 시상식 장면",
      image: "/sample_image_field_1.jpeg",
    },
    {
      title: "정기 월례회",
      date: "2026.02.20",
      description: "레이크우드 골프클럽에서의 월례회",
      image: "/sample_image_field_2.jpeg",
    },
    {
      title: "신년 하례회",
      date: "2026.01.10",
      description: "2026년 신년 하례회 및 만찬",
      image: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=600&h=450&fit=crop",
    },
    {
      title: "가을 정기대회",
      date: "2025.10.22",
      description: "남서울 골프클럽 가을 정기대회",
      image: "https://images.unsplash.com/photo-1596727147705-8d8b2d5a7e5d?w=600&h=450&fit=crop",
    },
    {
      title: "여름 야간 라운딩",
      date: "2025.08.05",
      description: "나이트 골프 특별 행사",
      image: "https://images.unsplash.com/photo-1587174486073-ae5e04af0837?w=600&h=450&fit=crop",
    },
    {
      title: "회장배 골프대회",
      date: "2025.05.18",
      description: "제10회 회장배 골프대회 우승자들",
      image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&h=450&fit=crop",
    },
    {
      title: "봄 정기 라운딩",
      date: "2025.04.12",
      description: "베어크리크에서의 봄맞이 라운딩",
      image: "https://images.unsplash.com/photo-1768396747921-5a18367415d2?w=600&h=450&fit=crop",
    },
    {
      title: "임원진 회의",
      date: "2025.03.08",
      description: "2025년 임원진 정기 회의",
      image: "https://images.unsplash.com/photo-1761400025076-8fec91f620f2?w=600&h=450&fit=crop",
    },
    {
      title: "동계 실내 연습",
      date: "2025.02.15",
      description: "스크린 골프 정기 모임",
      image: "https://images.unsplash.com/photo-1761141987961-ed96a841fe21?w=600&h=450&fit=crop",
    },
    {
      title: "신년 친선 라운딩",
      date: "2025.01.20",
      description: "새해 첫 라운딩 행사",
      image: "https://images.unsplash.com/photo-1761074936575-e04432667eaf?w=600&h=450&fit=crop",
    },
    {
      title: "연말 시상식",
      date: "2024.12.15",
      description: "2024년 우수 회원 시상식",
      image: "https://images.unsplash.com/photo-1763917379121-91130139aca0?w=600&h=450&fit=crop",
    },
    {
      title: "겨울 특별 대회",
      date: "2024.11.10",
      description: "연말 특별 챔피언십",
      image: "https://images.unsplash.com/photo-1742498626087-af76400d968c?w=600&h=450&fit=crop",
    },
    {
      title: "가을 단풍 라운딩",
      date: "2024.10.25",
      description: "단풍이 아름다운 가을 라운딩",
      image: "https://images.unsplash.com/photo-1763917343252-912c0b66eb9b?w=600&h=450&fit=crop",
    },
    {
      title: "추석 특별 행사",
      date: "2024.09.17",
      description: "추석 맞이 친선 라운딩",
      image: "https://images.unsplash.com/photo-1760866272807-b04595c6d046?w=600&h=450&fit=crop",
    },
    {
      title: "여름 휴가 라운딩",
      date: "2024.08.08",
      description: "피서지 골프장 투어",
      image: "https://images.unsplash.com/photo-1742498626081-a64f9677f468?w=600&h=450&fit=crop",
    },
    {
      title: "한여름 나이트 골프",
      date: "2024.07.20",
      description: "야간 특별 라운딩 행사",
      image: "https://images.unsplash.com/photo-1742498626135-67a7d3501eff?w=600&h=450&fit=crop",
    },
    {
      title: "하계 정기 대회",
      date: "2024.06.15",
      description: "여름 정기 챔피언십",
      image: "https://images.unsplash.com/photo-1605752019115-200d120c9b98?w=600&h=450&fit=crop",
    },
    {
      title: "어린이날 가족 행사",
      date: "2024.05.05",
      description: "가족과 함께하는 골프 체험",
      image: "https://images.unsplash.com/photo-1774722884736-76c28fda8b1d?w=600&h=450&fit=crop",
    },
    {
      title: "봄꽃 라운딩",
      date: "2024.04.10",
      description: "벚꽃이 만개한 골프장에서",
      image: "https://images.unsplash.com/photo-1699394426296-9c549c27fcaf?w=600&h=450&fit=crop",
    },
    {
      title: "창립기념일 행사",
      date: "2024.03.20",
      description: "협회 창립 기념 특별 행사",
      image: "https://images.unsplash.com/photo-1606240674889-098fd540ab8f?w=600&h=450&fit=crop",
    },
    {
      title: "봄맞이 워크샵",
      date: "2024.03.05",
      description: "임원진 워크샵 및 라운딩",
      image: "https://images.unsplash.com/photo-1771599370349-02923621ddaf?w=600&h=450&fit=crop",
    },
    {
      title: "겨울 송년회",
      date: "2023.12.28",
      description: "2023년 송년 모임",
      image: "https://images.unsplash.com/photo-1692128045078-62966938b7b9?w=600&h=450&fit=crop",
    },
    {
      title: "연말 자선 라운딩",
      date: "2023.12.10",
      description: "불우이웃돕기 자선 행사",
      image: "https://images.unsplash.com/photo-1634347948967-6e6a1c2e7206?w=600&h=450&fit=crop",
    },
    {
      title: "가을 단체 사진",
      date: "2023.11.18",
      description: "전체 회원 단체 사진 촬영",
      image: "https://images.unsplash.com/photo-1724243846239-fe61d1499713?w=600&h=450&fit=crop",
    },
    {
      title: "추계 정기 대회",
      date: "2023.10.20",
      description: "가을 정기 챔피언십 대회",
      image: "https://images.unsplash.com/photo-1763917343408-4cfcc6bdd381?w=600&h=450&fit=crop",
    },
    {
      title: "골프 레슨 프로그램",
      date: "2023.09.15",
      description: "프로 초청 특별 레슨",
      image: "https://images.unsplash.com/photo-1693113448248-89d3f895e905?w=600&h=450&fit=crop",
    },
    {
      title: "여름 친목 라운딩",
      date: "2023.08.22",
      description: "무더위 속 친목 도모",
      image: "https://images.unsplash.com/photo-1775326448157-2d062ed4586f?w=600&h=450&fit=crop",
    },
    {
      title: "하계 휴가 모임",
      date: "2023.07.30",
      description: "여름 휴가지에서의 특별 모임",
      image: "https://images.unsplash.com/photo-1620578986840-7d2e90fac0e4?w=600&h=450&fit=crop",
    },
    {
      title: "중복 더위 극복 라운딩",
      date: "2023.07.12",
      description: "초복 맞이 새벽 라운딩",
      image: "https://images.unsplash.com/photo-1775326376274-2ef7f5f9de8f?w=600&h=450&fit=crop",
    },
    {
      title: "상반기 우수회원 시상",
      date: "2023.06.25",
      description: "상반기 우수 회원 시상식",
      image: "https://images.unsplash.com/photo-1758933286842-9b5d934fbaa9?w=600&h=450&fit=crop",
    },
    {
      title: "단오 특별 행사",
      date: "2023.06.01",
      description: "단오 맞이 전통 행사",
      image: "https://images.unsplash.com/photo-1775326396099-ffaa25eb1db3?w=600&h=450&fit=crop",
    },
    {
      title: "봄 정기 워크샵",
      date: "2023.05.10",
      description: "봄 시즌 전략 워크샵",
      image: "https://images.unsplash.com/photo-1758933067991-db3979cad1ec?w=600&h=450&fit=crop",
    },
    {
      title: "어버이날 효도 라운딩",
      date: "2023.05.08",
      description: "어버이날 기념 특별 행사",
      image: "https://images.unsplash.com/photo-1692195400719-81a66b4fde89?w=600&h=450&fit=crop",
    },
    {
      title: "봄꽃 축제 라운딩",
      date: "2023.04.22",
      description: "봄꽃이 만개한 골프장 투어",
      image: "https://images.unsplash.com/photo-1763917379121-91130139aca0?w=600&h=450&fit=crop",
    },
    {
      title: "식목일 기념 행사",
      date: "2023.04.05",
      description: "식목일 기념 나무 심기",
      image: "https://images.unsplash.com/photo-1744551154591-7613d92e0eb9?w=600&h=450&fit=crop",
    },
    {
      title: "3월 정기 모임",
      date: "2023.03.18",
      description: "봄맞이 정기 모임",
      image: "https://images.unsplash.com/photo-1596412493510-b19507f13948?w=600&h=450&fit=crop",
    },
    {
      title: "삼일절 특별 라운딩",
      date: "2023.03.01",
      description: "삼일절 기념 라운딩",
      image: "https://images.unsplash.com/photo-1760253488581-f77fe3a6e479?w=600&h=450&fit=crop",
    },
    {
      title: "설날 신년 행사",
      date: "2023.01.22",
      description: "설날 맞이 신년 행사",
      image: "https://images.unsplash.com/photo-1763917343252-912c0b66eb9b?w=600&h=450&fit=crop",
    },
    {
      title: "신년 하례 모임",
      date: "2023.01.05",
      description: "2023년 신년 하례회",
      image: "https://images.unsplash.com/photo-1760253488608-2658f402dc74?w=600&h=450&fit=crop",
    },
    {
      title: "연말 결산 모임",
      date: "2022.12.30",
      description: "2022년 연말 결산 및 송년회",
      image: "https://images.unsplash.com/photo-1763917343408-4cfcc6bdd381?w=600&h=450&fit=crop",
    },
  ];

  const totalPages = Math.ceil(photos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPhotos = photos.slice(startIndex, endIndex);

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
            포토 갤러리
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent mx-auto mb-6"></div>
          <p className="font-body text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            마포구 골프협회의 다양한 활동과 추억을 사진으로 만나보세요.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPhotos.map((photo, index) => {
            const actualIndex = startIndex + index;
            return (
            <motion.div
              key={actualIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedImage(actualIndex)}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-gold)]/20 to-[var(--accent-green)]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="relative bg-[var(--bg-card)] rounded-3xl overflow-hidden border border-[var(--border-gold)]/30 hover:border-[var(--accent-gold)] transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-[var(--accent-green)] to-[var(--accent-green-dark)] relative overflow-hidden">
                  <ImageWithFallback
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <h3 className="font-display font-semibold text-2xl mb-1">
                      {photo.title}
                    </h3>
                    <p className="font-body text-sm opacity-90">{photo.date}</p>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="font-display font-semibold text-xl text-[var(--text-primary)] mb-2">
                    {photo.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--accent-gold)] mb-2">
                    {photo.date}
                  </p>
                  <p className="font-body text-[var(--text-secondary)] leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
          })}
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

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X size={24} />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full bg-[var(--bg-card)] rounded-3xl overflow-hidden"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-[var(--accent-green)] to-[var(--accent-green-dark)]">
                <ImageWithFallback
                  src={photos[selectedImage].image}
                  alt={photos[selectedImage].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="font-display font-semibold text-3xl text-[var(--text-primary)] mb-2">
                  {photos[selectedImage].title}
                </h3>
                <p className="font-body text-[var(--accent-gold)] mb-4">
                  {photos[selectedImage].date}
                </p>
                <p className="font-body text-lg text-[var(--text-secondary)] leading-relaxed">
                  {photos[selectedImage].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}