"use client"

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Award, ThumbsUp, CheckCircle, Quote } from "lucide-react";

export function RealReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "김○○",
      car: "BMW 5시리즈",
      rating: 5,
      content: "페이백 혜택이 정말 크더라구요. 투명하게 진행되어서 믿음이 갔고 출고도 예상보다 빨라서 만족합니다.",
      date: "2024.01",
      verified: true,
      image: "https://images.unsplash.com/photo-1565376901308-37344a4b06ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBsdXh1cnklMjBzZWRhbiUyMHNob3dyb29tfGVufDF8fHx8MTc2OTY2MzA1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      name: "이○○",
      car: "벤츠 E클래스",
      rating: 5,
      content: "페이백 혜택이 정말 크더라구요. 투명하게 진행되어서 믿음이 갔고 출고도 예상보다 빨라서 만족합니다.",
      date: "2024.01",
      verified: true,
      image: "https://images.unsplash.com/photo-1645355082045-c540c1b8fd1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNZXJjZWRlcyUyMEJlbnolMjBsdXh1cnklMjBjYXJ8ZW58MXx8fHwxNzY5NjYzMDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      name: "박○○",
      car: "아우디 A6",
      rating: 5,
      content: "페이백 혜택이 정말 크더라구요. 투명하게 진행되어서 믿음이 갔고 출고도 예상보다 빨라서 만족합니다.",
      date: "2023.12",
      verified: true,
      image: "https://images.unsplash.com/photo-1760161339236-f5509e7cccf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBdWRpJTIwc2VkYW4lMjBwcmVtaXVtJTIwY2FyfGVufDF8fHx8MTc2OTY2MzA1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 4,
      name: "최○○",
      car: "렉서스 ES300h",
      rating: 5,
      content: "페이백 혜택이 정말 크더라구요. 투명하게 진행되어서 믿음이 갔고 출고도 예상보다 빨라서 만족합니다.",
      date: "2023.12",
      verified: true,
      image: "https://images.unsplash.com/photo-1731142582229-e0ee70302c02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzZWRhbiUyMHByZW1pdW0lMjBjYXJ8ZW58MXx8fHwxNzY5NjY2Mzc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 5,
      name: "정○○",
      car: "볼보 XC60",
      rating: 5,
      content: "페이백 혜택이 정말 크더라구요. 투명하게 진행되어서 믿음이 갔고 출고도 예상보다 빨라서 만족합니다.",
      date: "2023.11",
      verified: true,
      image: "https://images.unsplash.com/photo-1652509860229-7e687ce68953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWb2x2byUyMFhDNjAlMjBTVVZ8ZW58MXx8fHwxNzY5NjM0NjE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 6,
      name: "강○○",
      car: "포르쉐 마칸",
      rating: 5,
      content: "페이백 혜택이 정말 크더라구요. 투명하게 진행되어서 믿음이 갔고 출고도 예상보다 빨라서 만족합니다.",
      date: "2023.11",
      verified: true,
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQb3JzY2hlJTIwY2FyfGVufDF8fHx8MTczNzk5MTY3NXww&ixlib=rb-4.1.0&q=80&w=400"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // 4초마다 자동으로 넘어감

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="flex justify-center items-center bg-white px-4 md:px-0 pt-[50px] pb-[60px]">
      <div className="w-full max-w-[900px] flex flex-col items-center relative overflow-hidden py-4 md:py-0 gap-10 bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="w-full flex flex-col items-center relative z-10 gap-10">
          {/* Header */}
          <div className="text-center flex flex-col px-4 gap-4">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-[#bb0305] text-[#bb0305]" />
                ))}
              </div>
              <p className="text-sm md:text-[20px] font-['Nexon_Lv1_Gothic_OTF',sans-serif] font-bold tracking-[0.1em] text-[#bb0305] uppercase">
                100% 리얼후기
              </p>
            </div>
            <h2 className="font-['Nexon_Lv1_Gothic_OTF',sans-serif] text-[clamp(32px,8vw,70px)] font-black tracking-[-0.02em] text-black [text-shadow:0_2px_4px_rgba(0,0,0,0.05)]">
              고객 리뷰
            </h2>
            <p className="text-sm md:text-[18px] font-['Pretendard',sans-serif] font-medium tracking-[-0.01em] text-slate-500">
              실제 이용 고객들의 생생한 경험을 확인하세요
            </p>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-3 w-full gap-2 md:gap-6 px-2 md:px-0">
            {/* Card 1 */}
            <div className="flex flex-col items-center justify-center relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 py-6 md:py-10 bg-[#1a5dab] gap-3">
              <div className="absolute top-0 right-0 w-20 h-20 md:w-40 md:h-40 bg-white opacity-5 [clip-path:polygon(100%_0,100%_100%,0_0)]"></div>
              
              <Award className="w-8 h-8 md:w-12 md:h-12 text-white opacity-90" strokeWidth={1.5} />
              <div className="flex flex-col items-center gap-1.5">
                <p className="text-3xl md:text-[72px] font-['Pretendard',sans-serif] font-black text-white tracking-[-0.03em] leading-none">
                  5,000<span className="text-2xl md:text-[48px] font-bold">+</span>
                </p>
                <div className="h-0.5 md:h-1 bg-white w-[40px] opacity-30"></div>
                <p className="text-xs md:text-base font-['Pretendard',sans-serif] font-bold text-white/95 tracking-[0.05em]">
                  누적 렌트 후기
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center justify-center relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 py-6 md:py-10 bg-[#1a5dab] gap-3">
              <div className="absolute top-0 right-0 w-20 h-20 md:w-40 md:h-40 bg-white opacity-5 [clip-path:polygon(100%_0,100%_100%,0_0)]"></div>
              
              <ThumbsUp className="w-8 h-8 md:w-12 md:h-12 text-white opacity-90" strokeWidth={1.5} />
              <div className="flex flex-col items-center gap-1.5">
                <p className="text-3xl md:text-[72px] font-['Pretendard',sans-serif] font-black text-white tracking-[-0.03em] leading-none">
                  97<span className="text-2xl md:text-[48px] font-bold">%</span>
                </p>
                <div className="h-0.5 md:h-1 bg-white w-[40px] opacity-30"></div>
                <p className="text-xs md:text-base font-['Pretendard',sans-serif] font-bold text-white/95 tracking-[0.05em]">
                  고객 만족도
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center justify-center relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 py-6 md:py-10 bg-[#bb0305] gap-3">
              <div className="absolute top-0 right-0 w-20 h-20 md:w-40 md:h-40 bg-white opacity-5 [clip-path:polygon(100%_0,100%_100%,0_0)]"></div>
              
              <Star className="w-8 h-8 md:w-12 md:h-12 fill-white text-white opacity-90" strokeWidth={1.5} />
              <div className="flex flex-col items-center gap-1.5">
                <p className="text-3xl md:text-[72px] font-['Pretendard',sans-serif] font-black text-white tracking-[-0.03em] leading-none">
                  4.8<span className="text-lg md:text-[40px] font-semibold opacity-80"> / 5</span>
                </p>
                <div className="h-0.5 md:h-1 bg-white w-[40px] opacity-30"></div>
                <p className="text-xs md:text-base font-['Pretendard',sans-serif] font-bold text-white/95 tracking-[0.05em]">
                  평균 평점
                </p>
              </div>
            </div>
          </div>

          {/* Review Carousel */}
          <div className="relative w-full px-2 md:px-0">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {reviews.map((review) => (
                  <div key={review.id} className="w-full flex-shrink-0 px-1">
                    <div className="bg-white relative shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-[#1a5dab] h-[420px]">
                      {/* Quote Icon */}
                      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10">
                        <Quote className="w-10 h-10 md:w-20 md:h-20 text-[#bb0305] opacity-10" fill="#bb0305" />
                      </div>

                      {/* Content Wrapper */}
                      <div className="flex flex-col md:flex-row h-full">
                        {/* Left Content */}
                        <div className="flex-1 flex flex-col justify-between p-6 md:p-12 h-full">
                          <div>
                            {/* Rating Stars */}
                            <div className="flex items-center mb-4 md:mb-6 gap-1">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 md:w-8 md:h-8 fill-[#bb0305] text-[#bb0305]" />
                              ))}
                            </div>

                            {/* Review Text */}
                            <p className="mb-6 md:mb-8 text-sm md:text-[22px] font-['Pretendard',sans-serif] font-medium text-gray-800 leading-[1.8] tracking-[-0.01em]">
                              "{review.content}"
                            </p>
                          </div>

                          {/* Divider and Author Info */}
                          <div>
                            <div className="w-full h-px bg-[#1a5dab] mb-4 md:mb-8 opacity-20"></div>
                            
                            {/* Author Info */}
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 md:w-16 md:h-16 bg-[#1a5dab] flex items-center justify-center">
                                <p className="text-base md:text-2xl font-['Pretendard',sans-serif] font-bold text-white">
                                  {review.name[0]}
                                </p>
                              </div>
                              <div>
                                <div className="flex items-center mb-1 gap-2">
                                  <p className="text-sm md:text-[20px] font-['Pretendard',sans-serif] font-bold text-black tracking-[-0.01em]">
                                    {review.name}
                                  </p>
                                  {review.verified && (
                                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 fill-[#1a5dab] text-white" />
                                  )}
                                </div>
                                <p className="text-xs md:text-base font-['Pretendard',sans-serif] font-semibold text-[#1a5dab] tracking-[-0.01em]">
                                  {review.car}
                                </p>
                                <p className="text-xs md:text-sm font-['Pretendard',sans-serif] font-normal text-gray-400 mt-1">
                                  {review.date}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right Image */}
                        <div className="w-full md:w-80 overflow-hidden relative md:border-l-2 border-[#1a5dab] h-full">
                          <img src={review.image} alt={review.car} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6 md:mt-10">
              {/* Prev Button */}
              <button onClick={prevSlide} className="w-10 h-10 md:w-16 md:h-16 bg-[#1a5dab] hover:bg-[#bb0305] flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110" aria-label="Previous review">
                <ChevronLeft className="w-5 h-5 md:w-8 md:h-8 text-white" strokeWidth={3} />
              </button>

              {/* Dots */}
              <div className="flex gap-2 md:gap-4">
                {reviews.map((_, index) => (
                  <button key={index} onClick={() => setCurrentIndex(index)} className={`h-2 md:h-3 transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-[#bb0305] w-8 md:w-16' 
                        : 'bg-gray-300 w-2 md:w-3 hover:bg-gray-400'
                    }`} aria-label={`Go to review ${index + 1}`} />
                ))}
              </div>

              {/* Next Button */}
              <button onClick={nextSlide} className="w-10 h-10 md:w-16 md:h-16 bg-[#1a5dab] hover:bg-[#bb0305] flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110" aria-label="Next review">
                <ChevronRight className="w-5 h-5 md:w-8 md:h-8 text-white" strokeWidth={3} />
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:flex md:justify-center md:items-center w-full gap-4 md:gap-16 px-2 md:px-0 pt-5">
            <div className="flex items-center bg-white shadow-md hover:shadow-lg transition-all duration-300 p-3 md:p-4 gap-2">
              <CheckCircle className="w-5 h-5 md:w-7 md:h-7 text-[#1a5dab]" strokeWidth={2.5} />
              <span className="text-xs md:text-base font-['Pretendard',sans-serif] font-semibold text-gray-800">
                실제 이용 고객 후기
              </span>
            </div>
            <div className="flex items-center bg-white shadow-md hover:shadow-lg transition-all duration-300 p-3 md:p-4 gap-2">
              <Award className="w-5 h-5 md:w-7 md:h-7 text-[#1a5dab]" strokeWidth={2.5} />
              <span className="text-xs md:text-base font-['Pretendard',sans-serif] font-semibold text-gray-800">
                검증된 후기만 게재
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}