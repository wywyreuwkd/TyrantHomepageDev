import type { Metadata } from "next";
import Link from "next/link";
import { Home, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "신규 프로젝트 접수 | 타이런트 - 관리자",
  description: "타이런트 관리자 신규 프로젝트 접수 페이지",
};

export default function ProjectRequest() {
  
  return (
    <div className="py-6 md:px-6">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="text-[24px] md:text-[28px] font-bold tracking-[-0.02em] text-gray-900 dark:text-gray-50">
            신규 프로젝트 접수
          </h1>
          <p className="text-[14px] mt-1 text-gray-600 dark:text-gray-400">
            새로운 프로젝트 정보를 등록합니다
          </p>
        </div>

        {/* Breadcrumb */}
        <nav className="hidden md:flex items-center gap-2 flex-shrink-0">
          <Link href="/main">
            <div className="flex items-center gap-1.5 cursor-pointer">
              <Home className="text-gray-400 dark:text-gray-600"
                size={14}/>
              <span className="text-[13px] font-medium whitespace-nowrap text-gray-600 dark:text-gray-400">
                홈
              </span>
            </div>
          </Link>
          <ChevronRight size={12} className="text-gray-300 dark:text-gray-600" />
          <span className="text-[13px] font-medium whitespace-nowrap text-gray-600 dark:text-gray-400">
            프로젝트 관리
          </span>
          <ChevronRight size={12} className="text-gray-300 dark:text-gray-600" />
          <span className="text-[13px] font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">
            신규 프로젝트 접수
          </span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* 프로젝트 기초 정보 Card 1 */}
        <div className="rounded-lg p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h2 className="text-[16px] font-bold mb-5 tracking-[-0.01em] text-gray-900 dark:text-gray-100">
            프로젝트 기초 정보
          </h2>
          
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
            {/* 프로젝트명 */}
            <div>
              <label className="block text-[13px] font-semibold mb-2 text-gray-700 dark:text-gray-300">
                프로젝트명<span className="text-[#d8442c]">*</span>
              </label>
              <input
                type="text"
                placeholder="프로젝트명 입력"
                className="w-full rounded-lg text-[14px] px-[14px] py-[10px] outline-none bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>

            {/* 접수일자 */}
            <div>
              <label className="block text-[13px] font-semibold mb-2 text-gray-700 dark:text-gray-300">
                접수일자<span className="text-[#d8442c]">*</span>
              </label>
              <input
                type="date"
                className="w-full rounded-lg text-[14px] px-[14px] py-[10px] outline-none bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>

            {/* 영업사 */}
            <div>
              <label className="block text-[13px] font-semibold mb-2 text-gray-700 dark:text-gray-300">
                영업사<span className="text-[#d8442c]">*</span>
              </label>
              <select className="w-full rounded-lg text-[14px] px-[14px] py-[10px] outline-none cursor-pointer bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                <option value="">한강에셋자산운용 주식회사</option>
                <option value="타이단트(SALES)">타이단트(SALES)</option>
                <option value="타이단트(조회)">타이단트(조회)</option>
                <option value="(주)가온ENC">(주)가온ENC</option>
                <option value="다온투티">다온투티</option>
                <option value="주식회사 디와이에너지">주식회사 디와이에너지</option>
                <option value="주식회사 자연에너지">주식회사 자연에너지</option>
              </select>
            </div>

            {/* 시공사 */}
            <div>
              <label className="block text-[13px] font-semibold mb-2 text-gray-700 dark:text-gray-300">
                시공사
              </label>
              <input
                type="text"
                placeholder="시공사 이름"
                className="w-full rounded-lg text-[14px] px-[14px] py-[10px] outline-none bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>
          </div>
        </div>

        {/* 부동산 임대인 상세정보 & 발전소 상세정보 Card 2 */}
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 max-md:gap-8">
          {/* 부동산 임대인 상세정보 */}
          <div className="rounded-lg p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <h2 className="text-[16px] font-bold mb-5 tracking-[-0.01em] text-gray-900 dark:text-gray-100">
              부동산 임대인 상세정보
            </h2>
            
            <div className="space-y-4">
              {/* 임대인 이름 */}
              <div>
                <label className="block text-[13px] font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  임대인 이름<span className="text-[#d8442c]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="임대인 이름 입력"
                  className="w-full rounded-lg text-[14px] px-[14px] py-[10px] outline-none bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>

              {/* 임대부동산 주소 */}
              <div>
                <label className="block text-[13px] font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  임대부동산 주소<span className="text-[#d8442c]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="주소 또는 주민 번호주소"
                  className="w-full rounded-lg text-[14px] px-[14px] py-[10px] outline-none bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>

              {/* 상세 주소 */}
              <div>
                <label className="block text-[13px] font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  상세 주소<span className="text-[#d8442c]">*</span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full rounded-lg text-[14px] px-[14px] py-[10px] outline-none bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>

              {/* 소유자 수 */}
              <div>
                <label className="block text-[13px] font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  소유자 수<span className="text-[#d8442c]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="1"
                  className="w-full rounded-lg text-[14px] px-[14px] py-[10px] outline-none bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>

              {/* 임대인측 담당자 이름 */}
              <div>
                <label className="block text-[13px] font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  임대인측 담당자 이름<span className="text-[#d8442c]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="임대인 또는 법인 기관의 담당자 이름"
                  className="w-full rounded-lg text-[14px] px-[14px] py-[10px] outline-none bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>

              {/* 임대인측 담당자 연락처 */}
              <div>
                <label className="block text-[13px] font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  임대인측 담당자 연락처<span className="text-[#d8442c]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="임대인의 담당자 연락처"
                  className="w-full rounded-lg text-[14px] px-[14px] py-[10px] outline-none bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>

              {/* 참고사항 */}
              <div>
                <label className="block text-[13px] font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  참고사항
                </label>
                <input
                  type="text"
                  placeholder="임대인 관련 추가 정보가 있는 경우 작성해주세요"
                  className="w-full rounded-lg text-[14px] px-[14px] py-[10px] outline-none bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
            </div>

            <p className="text-[11px] mt-4 text-gray-400">
              • 임대인 관련 정보는 정확하게 확인 후 입력 부탁드립니다.
            </p>
          </div>

          {/* 발전소 상세정보 */}
          <div className="rounded-lg p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <h2 className="text-[16px] font-bold mb-5 tracking-[-0.01em] text-gray-900 dark:text-gray-100">
              발전소 상세정보
            </h2>
            
            <div className="space-y-4">
              {/* 발전소 이름 */}
              <div>
                <label className="block text-[13px] font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  발전소 이름
                </label>
                <input
                  type="text"
                  placeholder="발전소 이름"
                  className="w-full rounded-lg text-[14px] px-[14px] py-[10px] outline-none bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>

              {/* 발전 유형 */}
              <div>
                <label className="block text-[13px] font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  발전 유형
                </label>
                <select className="w-full rounded-lg text-[14px] px-[14px] py-[10px] outline-none cursor-pointer bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                  <option value="">선택하세요</option>
                  <option value="solar">태양광</option>
                  <option value="wind">풍력</option>
                  <option value="hydro">수력</option>
                  <option value="other">기타</option>
                </select>
              </div>

              {/* 설치 위치 */}
              <div>
                <label className="block text-[13px] font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  설치 위치
                </label>
                <select className="w-full rounded-lg text-[14px] px-[14px] py-[10px] outline-none cursor-pointer bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                  <option value="">선택하세요</option>
                  <option value="parking">주차장</option>
                  <option value="vacant">나대지</option>
                  <option value="forest">임야</option>
                  <option value="water">수상</option>
                </select>
              </div>

              {/* 예상설치용량 */}
              <div>
                <label className="block text-[13px] font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  예상설치용량
                </label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="100"
                    min="0"
                    step="10"
                    className="w-full rounded-lg text-[14px] px-[14px] py-[10px] pr-[50px] outline-none bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[14px] text-gray-600 dark:text-gray-400">
                    kW
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[11px] mt-4 text-gray-400">
              • 예상설치용량은 확인이 어려운 경우 임의로 입력하셔도 무방합니다.
            </p>
          </div>
        </div>

        {/* 프로젝트 기초 정보 */}
        <div className="rounded-lg p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h2 className="text-[16px] font-bold mb-5 tracking-[-0.01em] text-gray-900 dark:text-gray-100">
            프로젝트 기초 정보
          </h2>
          
          <div className="space-y-4">
            {/* 프로젝트 참고사항 */}
            <div>
              <label className="block text-[13px] font-semibold mb-2 text-gray-700 dark:text-gray-300">
                프로젝트 참고사항
              </label>
              <textarea
                placeholder="프로젝트와 관리사항을 입력해주세요"
                rows={4}
                className="w-full rounded-lg text-[14px] resize-none px-[14px] py-[10px] outline-none bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>
          </div>
        </div>

        {/* 파일 첨부 */}
        <div className="rounded-lg p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h2 className="text-[16px] font-bold mb-5 tracking-[-0.01em] text-gray-900 dark:text-gray-100">
            파일 첨부
          </h2>
          
          <div className="space-y-4">
            <div>
              <input
                type="file"
                id="file-upload"
                multiple
                className="hidden"
              />
              <label
                htmlFor="file-upload"
                className="flex items-center justify-center gap-2 rounded-lg text-[14px] font-semibold cursor-pointer transition-all duration-200 w-full px-5 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.3333 5.33333L8 2L4.66667 5.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                파일 선택
              </label>
              <p className="text-[12px] mt-2 text-gray-400">
                파일을 선택하거나 드래그하여 업로드하세요
              </p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button className="rounded-lg text-[14px] font-semibold transition-all duration-200 w-full px-6 py-3 bg-[#243c84] text-white border-none cursor-pointer hover:bg-[#1e3270]">
            프로젝트 접수
          </button>
        </div>
      </div>
    </div>
  );
}
