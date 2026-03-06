"use client"

import { X, MessageCircle } from "lucide-react"
import { useState } from "react"

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carModel: '',
    agreePrivacy: false,
    agreeMarketing: false
  });

  const [verificationStep, setVerificationStep] = useState<'none' | 'sent' | 'verified'>('none');
  const [verificationCode, setVerificationCode] = useState('');

  if (!isOpen) return null;

  const handleSendVerification = () => {
    if (!formData.phone) {
      alert('휴대폰 번호를 입력해주세요.');
      return;
    }
    // 실제 구현 시 여기서 인증번호 발송 API 호출
    alert('인증번호가 발송되었습니다.');
    setVerificationStep('sent');
  };

  const handleVerifyCode = () => {
    if (!verificationCode) {
      alert('인증번호를 입력해주세요.');
      return;
    }
    // 실제 구현 시 여기서 인증번호 확인 API 호출
    // 임시로 '123456'을 인증번호로 사용
    if (verificationCode === '123456') {
      alert('인증이 완료되었습니다.');
      setVerificationStep('verified');
    } else {
      alert('인증번호가 일치하지 않습니다. (테스트 인증번호: 123456)');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreePrivacy) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }
    if (verificationStep !== 'verified') {
      alert('휴대폰 인증을 완료해주세요.');
      return;
    }
    console.log('Form submitted:', formData);
    alert('상담 신청이 완료되었습니다!');
    onClose();
  };

  const handleKakaoClick = () => {
    window.open("http://pf.kakao.com/_QjEzX/chat", "_blank");
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-[500px] md:max-w-[600px] relative max-h-[90vh] overflow-y-auto [box-shadow:0_25px_80px_rgba(0,0,0,0.4)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Inside modal on mobile, outside on desktop */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:-top-12 md:right-0 z-50 bg-white md:bg-transparent p-2 md:p-0 rounded-full md:rounded-none hover:scale-110 transition-transform"
          aria-label="닫기"
        >
          <X size={24} className="text-gray-700 md:text-white" strokeWidth={2} />
        </button>

        {/* Header with Gradient */}
        <div className="px-6 md:px-12 py-8 md:py-10 relative overflow-hidden bg-gradient-to-br from-[#1a5dab] to-[#0d3d73]">
          <div className="relative z-10">
            <div className="inline-block px-3 py-1 mb-3 bg-[#bb0305]">
              <span className="text-white text-xs md:text-sm font-['Pretendard',sans-serif] font-bold tracking-[0.05em]">
                PAYBACK
              </span>
            </div>
            
            <h2 className="text-white mb-2 text-2xl md:text-4xl font-['Pretendard',sans-serif] font-bold tracking-[-0.03em] leading-[1.2]">
              빠른 상담 신청
            </h2>
            <p className="text-white text-sm md:text-base leading-[1.6] opacity-90 font-light">
              전문가가 정확하고 빠르게 상담해드립니다
            </p>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -right-8 -top-8 opacity-10 w-[200px] h-[200px] bg-white rotate-45" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 md:px-12 py-6 md:py-8">
          <div className="space-y-4">
            {/* Name Input */}
            <div>
              <label className="block mb-2 text-gray-700 text-xs md:text-sm font-semibold tracking-[-0.01em]">
                이름 *
              </label>
              <input
                type="text"
                placeholder="홍길동"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-gray-50 border-0 focus:outline-none focus:ring-2 focus:ring-[#1a5dab] transition-all text-sm md:text-base font-['Pretendard',sans-serif] text-[#2e2e2e]"
              />
            </div>

            {/* Phone Input */}
            <div>
              <label className="block mb-2 text-gray-700 text-xs md:text-sm font-semibold tracking-[-0.01em]">
                연락처 *
              </label>
              <div className="flex gap-2">
                <input
                  type="tel"
                  placeholder="010-0000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  disabled={verificationStep === 'verified'}
                  className="flex-1 px-4 py-3 bg-gray-50 border-0 focus:outline-none focus:ring-2 focus:ring-[#1a5dab] transition-all text-sm md:text-base font-['Pretendard',sans-serif] disabled:opacity-50 disabled:cursor-not-allowed text-[#2e2e2e]"
                />
                {verificationStep === 'none' && (
                  <button
                    type="button"
                    onClick={handleSendVerification}
                    className="px-4 md:px-6 py-3 bg-[#1a5dab] text-white text-xs md:text-sm font-semibold hover:bg-[#0d3d73] transition-colors whitespace-nowrap"
                  >
                    인증번호 받기
                  </button>
                )}
                {verificationStep === 'verified' && (
                  <div className="px-4 md:px-6 py-3 bg-gray-200 text-gray-700 text-xs md:text-sm font-semibold whitespace-nowrap flex items-center">
                    인증완료
                  </div>
                )}
              </div>
            </div>

            {/* Verification Code Input - Shows after sending verification */}
            {verificationStep === 'sent' && (
              <div className="animate-fade-in">
                <label className="block mb-2 text-gray-700 text-xs md:text-sm font-semibold tracking-[-0.01em]">
                  인증번호 *
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="인증번호 6자리"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    maxLength={6}
                    className="flex-1 px-4 py-3 bg-gray-50 border-0 focus:outline-none focus:ring-2 focus:ring-[#1a5dab] transition-all text-sm md:text-base font-['Pretendard',sans-serif] text-[#2e2e2e]"
                  />
                  <button
                    type="button"
                    onClick={handleVerifyCode}
                    className="px-4 md:px-6 py-3 bg-[#bb0305] text-white text-xs md:text-sm font-semibold hover:bg-[#8b0203] transition-colors whitespace-nowrap"
                  >
                    인증하기
                  </button>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  테스트용 인증번호: 123456
                </p>
              </div>
            )}

            {/* Car Model Input */}
            <div>
              <label className="block mb-2 text-gray-700 text-xs md:text-sm font-semibold tracking-[-0.01em]">
                희망차종
              </label>
              <input
                type="text"
                placeholder="예: 제네시스 G80, BMW 5시리즈"
                value={formData.carModel}
                onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border-0 focus:outline-none focus:ring-2 focus:ring-[#1a5dab] transition-all text-sm md:text-base font-['Pretendard',sans-serif] text-[#2e2e2e]"
              />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="mt-6 space-y-3">
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="relative flex-shrink-0 mt-0.5">
                <input
                  type="checkbox"
                  checked={formData.agreePrivacy}
                  onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                  className="w-4 h-4 md:w-5 md:h-5 accent-[#1a5dab] cursor-pointer"
                />
              </div>
              <span className="text-gray-600 group-hover:text-gray-900 transition-colors flex-1 text-xs md:text-sm leading-[1.6] font-normal">
                개인정보 수집 및 이용 동의 <span className="text-[#bb0305] underline font-medium ml-1">[필수]</span>
              </span>
            </label>

            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="relative flex-shrink-0 mt-0.5">
                <input
                  type="checkbox"
                  checked={formData.agreeMarketing}
                  onChange={(e) => setFormData({ ...formData, agreeMarketing: e.target.checked })}
                  className="w-4 h-4 md:w-5 md:h-5 accent-[#1a5dab] cursor-pointer"
                />
              </div>
              <span className="text-gray-600 group-hover:text-gray-900 transition-colors flex-1 text-xs md:text-sm leading-[1.6] font-normal">
                개인정보 제3자 제공 및 위탁 동의 <span className="text-gray-400 ml-1">[선택]</span>
              </span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 space-y-3">
            {/* Main Submit Button */}
            <button className="w-full py-4 md:py-5 transition-all hover:scale-[1.02] active:scale-[0.98] text-sm md:text-lg bg-gradient-to-br from-[#1a5dab] to-[#0d3d73] font-['Pretendard',sans-serif] font-bold text-white tracking-[-0.01em] [box-shadow:0_4px_16px_rgba(26,93,171,0.3)]"
              type="submit">
              상담 신청하기
            </button>

            {/* KakaoTalk Button */}
            <button className="w-full py-4 md:py-5 flex items-center justify-center gap-2 md:gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] text-sm md:text-lg bg-[#FEE500] font-['Pretendard',sans-serif] font-bold text-black tracking-[-0.01em] [box-shadow:0_4px_16px_rgba(254,229,0,0.3)]"
              onClick={handleKakaoClick}
              type="button">
              <MessageCircle size={20} fill="#000000" strokeWidth={0} />
              카카오톡 상담하기
            </button>
          </div>

          {/* Phone Number */}
          <div className="mt-6 pt-6 border-t-2 border-gray-100 text-center">
            <p className="text-gray-500 mb-2 text-xs md:text-sm font-medium">
              전화 상담 문의
            </p>
            <a className="inline-block hover:scale-105 transition-transform text-2xl md:text-4xl font-['Pretendard',sans-serif] font-bold text-[#1a5dab] tracking-[0.02em] leading-none"
              href="tel:1660-2587">
              1660-2587
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
