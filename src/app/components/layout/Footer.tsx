import logo from "@public/logo/b5ed15fd17fb9d0abe2a258d7018498e8b961c99.png";

export function Footer() {
  return (
    <footer id="contact" className="bg-footer border-t border-blue relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2850] to-[#0f1a3a] opacity-50" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logo.src} alt="TYRANT Logo" className="h-12 object-contain" />
            <p className="color-muted text-sm max-w-xs">
              타이런트는 태양광 발전 전문 기업으로, 수익공유형 무상설치 모델을 통해 기업과 함께 성장하며 탄소중립 사회 실현에 기여합니다.
            </p>
          </div>

          {/* Quick Links - 2 columns */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-4 color-white">서비스</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#company" className="color-muted hover:color-white transition-colors text-sm">
                    회사소개
                  </a>
                </li>
                <li>
                  <a href="#business" className="color-muted hover:color-white transition-colors text-sm">
                    사업영역
                  </a>
                </li>
                <li>
                  <a href="#products" className="color-muted hover:color-white transition-colors text-sm">
                    태양광상품소개
                  </a>
                </li>
                <li>
                  <a href="#installation" className="color-muted hover:color-white transition-colors text-sm">
                    태양광설치
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 color-white">정보</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="color-muted hover:color-white transition-colors text-sm">
                    이용약관
                  </a>
                </li>
                <li>
                  <a href="#" className="color-muted hover:color-white transition-colors text-sm">
                    개인정보처리방침
                  </a>
                </li>
                <li>
                  <a href="#" className="color-muted hover:color-white transition-colors text-sm">
                    법적고지
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-blue">
          <p className="color-muted text-sm text-center">
            Copyright © 2025. Made by TYRANT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}