"use client"

import Link from "next/link";
import { Menu, Save, X, Upload, Calendar, Mail, Phone, MapPin, Building, User, Lock, Eye, EyeOff, FileText, Zap } from 'lucide-react';
import { useState } from 'react';

const LABELS = {
  pageTitle: 'Form Layouts',
  pageSubtitle: '다양한 데이터 입력 폼 예시를 확인하세요',
  breadcrumb: {
    home: '홈',
    current: 'Form Layouts'
  },
  sections: {
    customerInfo: {
      title: 'Customer Information Form',
      subtitle: '신규 고객의 기본 정보를 입력합니다'
    },
    projectRegistration: {
      title: 'Project Registration Form',
      subtitle: '새로운 태양광 발전 프로젝트를 등록합니다'
    },
    companyInfo: {
      title: 'Company Information Form',
      subtitle: '회사의 기본 정보를 수정합니다'
    },
    employeeAccount: {
      title: 'Employee Account Creation Form',
      subtitle: '새로운 직원 계정을 생성합니다'
    }
  }
};

export function FormLayoutsSection() {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div>
			{/* 24px 간격으로 카드 배치 */}
      		<div className="flex flex-col gap-6">
        		{/* 고객 정보 등록 폼 */}
        		<div className="bg-white dark:bg-gray-800 rounded-[10px] p-5 border border-gray-200 dark:border-gray-700">
          			<div className="mb-6">
            			<h2 className="text-[18px] font-semibold mb-1 text-gray-900 dark:text-gray-50">
              				{LABELS.sections.customerInfo.title}
            			</h2>
            			<p className="text-[14px] text-gray-600 dark:text-gray-400">
              				{LABELS.sections.customerInfo.subtitle}
            			</p>
          			</div>

          			<form className="flex flex-col gap-5">
            			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              				<div>
                				<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                  					고객명 <span className="text-[#d8442c]">*</span>
                				</label>
                				<input className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50"
                  					type="text"
                  					placeholder="고객명을 입력하세요" />
              				</div>

              				<div>
                				<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                  					연락처 <span className="text-[#d8442c]">*</span>
                				</label>
                				<input className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50"
                  					type="tel"
                  					placeholder="010-0000-0000" />
              				</div>
            			</div>

            			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              				<div>
                				<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                  					이메일
                				</label>
                				<input className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50"
                  					type="email"
                  					placeholder="email@example.com" />
              				</div>

              				<div>
                				<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                  					회사명
                				</label>
                				<input className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50"
                  					type="text"
                  					placeholder="회사명을 입력하세요" />
              				</div>
            			</div>

            			<div>
              				<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                				주소
              				</label>
              				<input className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50"
                				type="text"
                				placeholder="주소를 입력하세요" />
            			</div>

            			<div>
              				<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                				비고
              				</label>
              				<textarea className="w-full px-4 py-2.5 rounded-lg focus:outline-none resize-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50"
                				placeholder="추가 정보를 입력하세요"
                				rows={4} />
            			</div>

            			<div className="flex flex-col sm:flex-row gap-3 pt-2">
              				<button className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg transition-colors text-[14px] font-medium bg-[#243c84] text-white hover:bg-[#1d3069]"
                				type="submit">
                				<Save className="w-4 h-4" />
                				등록하기
              				</button>
              				<button className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg transition-colors text-[14px] font-medium bg-transparent border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                				type="button" >
                				<X className="w-4 h-4" />
                				취소
              				</button>
            			</div>
          			</form>
        		</div>

        		{/* 프로젝트 등록 폼 */}
        		<div className="bg-white dark:bg-gray-800 rounded-[10px] p-5 border border-gray-200 dark:border-gray-700">
          			<div className="mb-6">
            			<h2 className="text-[18px] font-semibold mb-1 text-gray-900 dark:text-gray-50">
              				{LABELS.sections.projectRegistration.title}
            			</h2>
            			<p className="text-[14px] text-gray-600 dark:text-gray-400">
              				{LABELS.sections.projectRegistration.subtitle}
            			</p>
          			</div>

          			<form className="flex flex-col gap-5">
            			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              				<div>
                				<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                  					프로젝트명 <span className="text-[#d8442c]">*</span>
                				</label>
                				<input className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50"
                  					type="text"
                  					placeholder="프로젝트명을 입력하세요" />
              				</div>

              				<div>
                				<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                  					영업사 <span className="text-[#d8442c]">*</span>
                				</label>
                				<select className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50">
                  					<option value="">영업사를 선택하세요</option>
                  					<option value="1">(주)한양에너지</option>
                  					<option value="2">(주)가온SNC</option>
                  					<option value="3">주식회사 자연에너지</option>
                  					<option value="4">주식회사 다인스</option>
                				</select>
              				</div>
            			</div>

            			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              				<div>
                				<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                  					시공사
                				</label>
                				<select className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50">
                  					<option value="">시공사를 선택하세요</option>
                  					<option value="1">(주)썬파워</option>
                  					<option value="2">(주)그린에너지</option>
                  					<option value="3">(주)태양광산업</option>
                				</select>
              				</div>

              				<div>
                				<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                  					설치유형 <span className="text-[#d8442c]">*</span>
                				</label>
                				<select className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50">
                  					<option value="">설치유형을 선택하세요</option>
                  					<option value="roof">지붕</option>
                  					<option value="ground">지상</option>
                  					<option value="water">수상</option>
                				</select>
              				</div>
            			</div>

            			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              				<div>
                				<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                  					예상용량 (kW) <span className="text-[#d8442c]">*</span>
                				</label>
                				<input className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50"
                  					type="number"
                  					placeholder="예: 245.50" />
              				</div>

              				<div>
                				<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                  					접수일자 <span className="text-[#d8442c]">*</span>
                				</label>
                				<input className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50"
                  					type="date" />
              				</div>
            			</div>

            			<div>
              				<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                				프로젝트 위치 <span className="text-[#d8442c]">*</span>
              				</label>
              				<input className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50"
                				type="text"
                				placeholder="예: 경기도 화성시 팔탄면 서근리 103-29"  />
            			</div>

            			<div>
              				<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                				발전소명
              				</label>
              				<input className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50"
                				type="text"
                				placeholder="발전소명을 입력하세요"/>
            			</div>

            			<div>
              				<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                				프로젝트 설명
              				</label>
              				<textarea className="w-full px-4 py-2.5 rounded-lg focus:outline-none resize-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50"
                				placeholder="프로젝트에 대한 상세 설명을 입력하세요"
                				rows={4} />
            			</div>

            			<div className="flex flex-col sm:flex-row gap-3 pt-2">
              				<button className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg transition-colors text-[14px] font-medium bg-[#243c84] text-white hover:bg-[#1d3069]"
                				type="submit">
                				<Save className="w-4 h-4" />
                				프로젝트 등록
              				</button>
              				<button className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg transition-colors text-[14px] font-medium bg-transparent border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                				type="button" >
                				<X className="w-4 h-4" />
                				초기화
              				</button>
            			</div>
          			</form>
        		</div>

        		{/* 회사 정보 수정 폼 */}
        		<div className="bg-white dark:bg-gray-800 rounded-[10px] p-5 border border-gray-200 dark:border-gray-700">
          			<div className="mb-6">
            			<h2 className="text-[18px] font-semibold mb-1 text-gray-900 dark:text-gray-50">
              				{LABELS.sections.companyInfo.title}
            			</h2>
            			<p className="text-[14px] text-gray-600 dark:text-gray-400">
              				{LABELS.sections.companyInfo.subtitle}
            			</p>
          			</div>

          			<form className="flex flex-col gap-5">
            			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              				<div>
                				<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                  					회사명 <span className="text-[#d8442c]">*</span>
                				</label>
                				<input className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50"
                  					type="text"
                  					placeholder="회사명을 입력하세요" />
              				</div>

              				<div>
                				<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                  					사업자등록번호 <span className="text-[#d8442c]">*</span>
                				</label>
                				<input className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50"
                  					type="text"
                  					placeholder="000-00-00000" />
              				</div>
            			</div>

            			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              				<div>
                				<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                  					대표자명 <span className="text-[#d8442c]">*</span>
                				</label>
                				<input className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50"
                  					type="text"
                  					placeholder="대표자명을 입력하세요" />
              				</div>

              				<div>
                				<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                  					업종 <span className="text-[#d8442c]">*</span>
                				</label>
                				<input className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50"
                  					type="text"
                  					placeholder="예: 태양광 발전" />
              				</div>
            			</div>

            			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              				<div>
                				<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                  					대표 전화번호 <span className="text-[#d8442c]">*</span>
                				</label>
                				<input className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50"
                  					type="tel"
                  					placeholder="02-0000-0000" />
              				</div>

              				<div>
                				<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                  					팩스번호
                				</label>
                				<input className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50"
                  					type="tel"
                  					placeholder="02-0000-0000" />
              				</div>
            			</div>

            			<div>
              				<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                				회사 주소 <span className="text-[#d8442c]">*</span>
              				</label>
              				<input className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] mb-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50"
                				type="text"
                				placeholder="회사 주소를 입력하세요" />
              				<input className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50"
                				type="text"
                				placeholder="상세 주소를 입력하세요" />
            			</div>

            			<div>
              				<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                				홈페이지 URL
              				</label>
              				<input className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50"
                				type="url"
                				placeholder="https://www.example.com" />
            			</div>

            			<div className="flex flex-col sm:flex-row gap-3 pt-2">
              				<button className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg transition-colors text-[14px] font-medium bg-[#243c84] text-white hover:bg-[#1d3069]"
                				type="submit">
                				<Save className="w-4 h-4" />
                				저장하기
              				</button>
              				<button className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg transition-colors text-[14px] font-medium bg-transparent border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                				type="button" >
                				<X className="w-4 h-4" />
                				취소
              				</button>
            			</div>
          			</form>
        		</div>

        		{/* 직원 계정 생성 폼 */}
        		<div className="bg-white dark:bg-gray-800 rounded-[10px] p-5 border border-gray-200 dark:border-gray-700">
          			<div className="mb-6">
            			<h2 className="text-[18px] font-semibold mb-1 text-gray-900 dark:text-gray-50">
              				{LABELS.sections.employeeAccount.title}
            			</h2>
            			<p className="text-[14px] text-gray-600 dark:text-gray-400">
              				{LABELS.sections.employeeAccount.subtitle}
            			</p>
          			</div>

          			<form className="flex flex-col gap-5">
            			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              				<div>
                				<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                  					이름 <span className="text-[#d8442c]">*</span>
                				</label>
                				<input className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50"
                  					type="text"
                  					placeholder="이름을 입력하세요" />
              				</div>

              				<div>
                				<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                  					부서 <span className="text-[#d8442c]">*</span>
                				</label>
                				<select className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50">
                  					<option value="">부서를 선택하세요</option>
                  					<option value="sales">영업팀</option>
                  					<option value="construction">시공팀</option>
                  					<option value="management">관리팀</option>
                  					<option value="support">지원팀</option>
                				</select>
              				</div>
            			</div>

            			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              				<div>
                				<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                  					직책
                				</label>
                				<input className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50"
                  					type="text"
                  					placeholder="예: 과장, 차장, 부장"/>
              				</div>

              				<div>
                				<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                  					연락처 <span className="text-[#d8442c]">*</span>
                				</label>
                				<input className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50"
                  					type="tel"
                  					placeholder="010-0000-0000" />
              				</div>
            			</div>

            		<div>
              			<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                			이메일 (로그인 ID) <span className="text-[#d8442c]">*</span>
              			</label>
              			<input className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50"
                			type="email"
                			placeholder="email@company.com" />
            		</div>

            		<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              			<div>
                			<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                  				비밀번호 <span className="text-[#d8442c]">*</span>
                			</label>
                			<div className="relative">
                  				<input className="w-full px-4 py-2.5 pr-12 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50"
                    				type={showPassword ? "text" : "password"}
                    				placeholder="비밀번호를 입력하세요"/>
                  				<button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-400"
                    				type="button"
                    				onClick={() => setShowPassword(!showPassword)} >
                    				{showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  				</button>
                			</div>
              			</div>

              			<div>
                			<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                  				비밀번호 확인 <span className="text-[#d8442c]">*</span>
                			</label>
                			<input className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50"
                  				type="password"
                  				placeholder="비밀번호를 다시 입력하세요" />
              			</div>
            		</div>

            		<div>
              			<label className="block text-[14px] mb-2 text-gray-700 dark:text-gray-300">
                			권한 레벨 <span className="text-[#d8442c]">*</span>
              			</label>
              			<select className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[14px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50">
                			<option value="">권한 레벨을 선택하세요</option>
                			<option value="admin">관리자</option>
                			<option value="manager">매니저</option>
                			<option value="user">일반 사용자</option>
                			<option value="readonly">읽기 전용</option>
              			</select>
            		</div>

            		<div className="flex flex-col sm:flex-row gap-3 pt-2">
              			<button className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg transition-colors text-[14px] font-medium bg-[#243c84] text-white hover:bg-[#1d3069]"
                			type="submit" >
                			<User className="w-4 h-4" />
                				계정 생성
              			</button>
              			<button className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg transition-colors text-[14px] font-medium bg-transparent border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                			type="button" >
                			<X className="w-4 h-4" />
                			취소
              			</button>
            		</div>
          		</form>
        	</div>
      	</div>
	</div>
	);
}