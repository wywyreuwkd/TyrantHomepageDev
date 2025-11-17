import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/b5ed15fd17fb9d0abe2a258d7018498e8b961c99.png";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#1a2850] border-t border-[#273b82] relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2850] to-[#0f1a3a] opacity-50" />
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logo} alt="TYRANT Logo" className="h-12 object-contain" />
            <p className="text-gray-400 text-sm max-w-xs">
              솔라오는 산업단지 및 물류센터를 위한 수익공유형 태양광 무상설치 전문 기업입니다. Next.js와 Tailwind CSS로 구축되었으며 완전히 오픈소스입니다.
            </p>
          </div>

          {/* Quick Links - 2 columns */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-4 text-white">서비스</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#company" className="text-gray-400 hover:text-white transition-colors text-sm">
                    회사소개
                  </a>
                </li>
                <li>
                  <a href="#business" className="text-gray-400 hover:text-white transition-colors text-sm">
                    사업영역
                  </a>
                </li>
                <li>
                  <a href="#products" className="text-gray-400 hover:text-white transition-colors text-sm">
                    태양광상품소개
                  </a>
                </li>
                <li>
                  <a href="#installation" className="text-gray-400 hover:text-white transition-colors text-sm">
                    태양광설치
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-4 text-white">정보</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    이용약관
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    개인정보처리방침
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    법적고지
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-white">Follow us</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#1a2850] hover:bg-[#273b82] flex items-center justify-center text-gray-400 hover:text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#1a2850] hover:bg-[#273b82] flex items-center justify-center text-gray-400 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#1a2850] hover:bg-[#273b82] flex items-center justify-center text-gray-400 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#1a2850] hover:bg-[#273b82] flex items-center justify-center text-gray-400 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-[#273b82]">
          <p className="text-gray-500 text-sm text-center">
            Copyright © 2025. Made with ♥ by TYRANT. Illustrations from Solar Energy
          </p>
        </div>
      </div>
    </footer>
  );
}