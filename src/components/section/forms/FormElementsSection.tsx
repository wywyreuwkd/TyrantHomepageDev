"use client"

import Link from "next/link";
import { Eye, EyeOff, Home, ChevronRight, Upload, Download, MapPin, X } from 'lucide-react';
import { useState } from 'react';

// Brand Colors
const BRAND_PRIMARY = '#243c84';
const BRAND_PRIMARY_HOVER = '#1d3069';
const BRAND_ACCENT = '#d8442c';

export function FormElementsSection() {

	const [showPassword, setShowPassword] = useState(false);
  	const [emailNotifications, setEmailNotifications] = useState(true);
  	const [smsNotifications, setSmsNotifications] = useState(false);
  	const [selectedRegion, setSelectedRegion] = useState('서울');
  	const [selectedType, setSelectedType] = useState('지붕');

  	// 샘플 데이터
  	const [formData, setFormData] = useState({
    	userId: 'test_user',
    	userName: 'TEST_USER',
    	email: 'test@example.com',
    	phone: '010-1234-5678',
    	company: 'Test Company',
    	password: '',
    	address: '서울특별시 강남구 테헤란로 123',
    	addressDetail: '4층 401호',
    	businessNumber: '123-45-67890',
    	file: 'sample-document.pdf'
  	});

  	const handleChange = (field: string, value: string) => {
    	setFormData(prev => ({ ...prev, [field]: value }));
  	};	

	return (
		<div>
        	{/* 1. Text Input Fields */}
        	<div className="rounded-[10px] border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6 mb-8">
          		<h3 className="text-[16px] font-bold mb-5 text-gray-900 dark:text-gray-50">
            		텍스트 입력 필드
          		</h3>
          		<p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
            		기본 텍스트 입력, 읽기 전용, 필수 입력 스타일
          		</p>	

          		<div className="space-y-5">
            		{/* 읽기 전용 필드 */}
            		<div>
              			<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2"
                			htmlFor="userId">
                			아이디 (읽기 전용)
              			</label>
              			<input className="w-full px-4 py-3.5 text-[15px] text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none font-medium cursor-not-allowed"
                			id="userId"
                			type="text"
                			value={formData.userId}
                			readOnly />
            		</div>

            		{/* 필수 입력 필드 */}
            		<div>
              			<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2"
                			htmlFor="userName">
                			사용자 이름 <span className="text-[#d8442c]">*</span>
              			</label>
              			<input className="w-full px-4 py-3.5 text-[15px] text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none transition-all duration-200 font-medium focus:border-[#243c84] focus:border-2 focus:ring-4 focus:ring-[#243c84]/10"
                			id="userName"
                			type="text"
                			value={formData.userName}
                			onChange={(e) => handleChange('userName', e.target.value)}
                			placeholder="사용자 이름을 입력하세요"
                			required />
            		</div>

            		{/* 이메일 입력 */}
            		<div>
              			<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2"
                			htmlFor="email" >
                			이메일 <span className="text-[#d8442c]">*</span>
              			</label>
              			<input className="w-full px-4 py-3.5 text-[15px] text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none transition-all duration-200 font-medium focus:border-[#243c84] focus:border-2 focus:ring-4 focus:ring-[#243c84]/10"
                			id="email"
                			type="email"
                			value={formData.email}
                			onChange={(e) => handleChange('email', e.target.value)}
                			placeholder="이메일을 입력하세요"
                			required />
            		</div>

            		{/* 전화번호 입력 */}
            		<div>
              			<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2"
                			htmlFor="phone" >
                			전화번호 <span className="text-[#d8442c]">*</span>
              			</label>
              			<input className="w-full px-4 py-3.5 text-[15px] text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none transition-all duration-200 font-medium focus:border-[#243c84] focus:border-2 focus:ring-4 focus:ring-[#243c84]/10"
                			id="phone"
                			type="tel"
                			value={formData.phone}
                			onChange={(e) => handleChange('phone', e.target.value)}
                			placeholder="010-0000-0000"
                			required />
            		</div>
          		</div>
        	</div>

        	{/* 2. Password Input */}
        	<div className="rounded-[10px] border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6 mb-8">
          		<h3 className="text-[16px] font-bold mb-5 text-gray-900 dark:text-gray-50">
            		비밀번호 입력 필드
          		</h3>
          		<p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
            		표시/숨김 토글 기능이 있는 비밀번호 입력
          		</p>

          		<div>
            		<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2"
              			htmlFor="password" >
              			비밀번호 <span className="text-[#d8442c]">*</span>
            		</label>
            		<div className="relative">
              			<input className="w-full px-4 py-3.5 pr-12 text-[15px] text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none transition-all duration-200 font-medium focus:border-[#243c84] focus:border-2 focus:ring-4 focus:ring-[#243c84]/10"
                			id="password"
                			type={showPassword ? 'text' : 'password'}
                			value={formData.password}
                			onChange={(e) => handleChange('password', e.target.value)}
                			placeholder="비밀번호를 입력하세요"
                			required />
              			<button className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent border-0 cursor-pointer text-gray-600 dark:text-gray-400 p-1 flex items-center justify-center"
                			type="button"
                			onClick={() => setShowPassword(!showPassword)} >
                			{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              			</button>
            		</div>
          		</div>
        	</div>

        	{/* 3. Select Dropdown */}
        	<div className="rounded-[10px] border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6 mb-8">
          		<h3 className="text-[16px] font-bold mb-5 text-gray-900 dark:text-gray-50">
            		선택 필드 (Select / Dropdown)
          		</h3>
          		<p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
            		드롭다운 선택 필드
          		</p>

          		<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            		{/* 지역 선택 */}
            		<div>
              			<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2"
                			htmlFor="region">
                			지역 선택 <span className="text-[#d8442c]">*</span>
              			</label>
              			<select className="w-full px-4 py-3.5 text-[15px] text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none transition-all duration-200 font-medium cursor-pointer focus:border-[#243c84] focus:border-2 focus:ring-4 focus:ring-[#243c84]/10"
                			id="region"
                			value={selectedRegion}
                			onChange={(e) => setSelectedRegion(e.target.value)} >
                			<option value="서울">서울특별시</option>
                			<option value="경기">경기도</option>
                			<option value="인천">인천광역시</option>
                			<option value="강원">강원도</option>
                			<option value="충북">충청북도</option>
                			<option value="충남">충청남도</option>
                			<option value="대전">대전광역시</option>
                			<option value="세종">세종특별자치시</option>
              			</select>
            		</div>

            		{/* 설치 유형 선택 */}
            		<div>
              		<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2"
                		htmlFor="type">
                		설치 유형 <span className="text-[#d8442c]">*</span>
              		</label>
              		<select className="w-full px-4 py-3.5 text-[15px] text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none transition-all duration-200 font-medium cursor-pointer focus:border-[#243c84] focus:border-2 focus:ring-4 focus:ring-[#243c84]/10"
                		id="type"
                		value={selectedType}
                		onChange={(e) => setSelectedType(e.target.value)} >
                		<option value="지붕">지붕</option>
                		<option value="지상">지상</option>
                		<option value="수상">수상</option>
              		</select>
            	</div>
          	</div>
        </div>

        {/* 4. Textarea */}
        <div className="rounded-[10px] border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6 mb-8">
          	<h3 className="text-[16px] font-bold mb-5 text-gray-900 dark:text-gray-50">
            	텍스트 영역 (Textarea)
          	</h3>
          	<p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
            	여러 줄 텍스트 입력 필드
          	</p>

          	<div>
            	<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2"
              		htmlFor="addressDetail">
              		상세 주소
            	</label>
            	<textarea className="w-full px-4 py-3.5 text-[15px] text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none transition-all duration-200 font-medium resize-y font-[inherit] focus:border-[#243c84] focus:border-2 focus:ring-4 focus:ring-[#243c84]/10"
              		id="addressDetail"
              		value={formData.addressDetail}
              		onChange={(e) => handleChange('addressDetail', e.target.value)}
              		placeholder="상세 주소를 입력하세요"
              		rows={4} />
          	</div>
        </div>

        {/* 5. Checkboxes and Radio */}
        <div className="rounded-[10px] border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6 mb-8">
          	<h3 className="text-[16px] font-bold mb-5 text-gray-900 dark:text-gray-50">
            	체크박스 & 라디오 버튼
          	</h3>
          	<p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
            	선택 옵션 - 체크박스(복수 선택), 라디오(단일 선택)
          	</p>

          	<div className="space-y-6">
            	{/* Checkboxes */}
            	<div>
              		<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-3">
                		알림 설정
              		</label>
              		<div className="space-y-3">
                		<label className="flex items-center gap-3 cursor-pointer">
                  			<input className="w-5 h-5 rounded cursor-pointer accent-[#243c84]"
                    			type="checkbox"
                    			checked={emailNotifications}
                    			onChange={(e) => setEmailNotifications(e.target.checked)} />
                  			<span className="text-[15px] text-gray-700 dark:text-gray-300">
                    			이메일 알림 수신
                  			</span>
                		</label>
                		<label className="flex items-center gap-3 cursor-pointer">
                  			<input className="w-5 h-5 rounded cursor-pointer accent-[#243c84]"
                    			type="checkbox"
                    			checked={smsNotifications}
                    			onChange={(e) => setSmsNotifications(e.target.checked)} />
                  			<span className="text-[15px] text-gray-700 dark:text-gray-300">
                    			SMS 알림 수신
                  			</span>
                		</label>
              		</div>
            	</div>

            	{/* Radio Buttons */}
            	<div>
              		<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-3">
                		회원 유형
              		</label>
              		<div className="space-y-3">
                		<label className="flex items-center gap-3 cursor-pointer">
                  			<input className="w-5 h-5 cursor-pointer accent-[#243c84]"
                    			type="radio"
                    			name="memberType"
                    			value="individual" />
                  			<span className="text-[15px] text-gray-700 dark:text-gray-300">
                    			개인 회원
                  			</span>
                		</label>
                		<label className="flex items-center gap-3 cursor-pointer">
                  			<input className="w-5 h-5 cursor-pointer accent-[#243c84]"
                    			type="radio"
                    			name="memberType"
                    			value="business"
                    			defaultChecked />
                  			<span className="text-[15px] text-gray-700 dark:text-gray-300">
                    			사업자 회원
                  			</span>
                		</label>
              		</div>
            	</div>
        	</div>
    	</div>

        {/* 6. File Upload */}
        <div className="rounded-[10px] border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6 mb-8">
          	<h3 className="text-[16px] font-bold mb-5 text-gray-900 dark:text-gray-50">
            	파일 업로드 / 다운로드
          	</h3>
          	<p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
            	파일 첨부 및 다운로드 기능
          	</p>

          	<div>
            	<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2">
              		사업자등록증 <span className="text-[#d8442c]">*</span>
            	</label>
            
            	<div className="flex items-center gap-3">
              		<input className="flex-1 px-4 py-3.5 text-[15px] text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none font-medium cursor-not-allowed"
                		type="text"
                		value={formData.file}
                		readOnly
                		placeholder="파일을 선택하세요" />
              		<button className="px-5 py-3.5 bg-[#243c84] hover:bg-[#1d3069] text-white border-0 rounded-lg text-[14px] font-semibold cursor-pointer transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
                		type="button" >
                		<Upload size={16} />
                		업로드
              		</button>
              		<button className="px-5 py-3.5 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-50 border border-gray-300 dark:border-gray-600 rounded-lg text-[14px] font-semibold cursor-pointer transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
                		type="button" >
                		<Download size={16} />
                		다운로드
              		</button>
            	</div>
          	</div>
        </div>

        {/* 7. Buttons */}
        <div className="rounded-[10px] border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6 mb-8">
          	<h3 className="text-[16px] font-bold mb-5 text-gray-900 dark:text-gray-50">
            	버튼 스타일
          	</h3>
          	<p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
            	Primary, Secondary, Danger 버튼 스타일
          	</p>

          	<div className="flex flex-wrap gap-3">
            	{/* Primary Button */}
            	<button className="px-7 py-3.5 bg-[#243c84] hover:bg-[#1d3069] text-white border-0 rounded-lg text-[15px] font-semibold cursor-pointer transition-all duration-200"
              		type="button">
              		Primary Button
            	</button>

            	{/* Secondary Button */}
            	<button className="px-7 py-3.5 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-50 border border-gray-300 dark:border-gray-600 rounded-lg text-[15px] font-semibold cursor-pointer transition-all duration-200"
              		type="button" >
              		Secondary Button
            	</button>

            	{/* Danger Button */}
            	<button className="px-7 py-3.5 bg-[#d8442c] hover:bg-[#c03624] text-white border-0 rounded-lg text-[15px] font-semibold cursor-pointer transition-all duration-200"
              		type="button">
              		Danger Button
            	</button>

            	{/* Disabled Button */}
            	<button className="px-7 py-3.5 bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-600 border-0 rounded-lg text-[15px] font-semibold cursor-not-allowed opacity-60"
              		type="button"
              		disabled>
              		Disabled Button
            	</button>
          	</div>
        </div>

        {/* 8. Address Input with Modal */}
        <div className="rounded-[10px] border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
          	<h3 className="text-[16px] font-bold mb-5 text-gray-900 dark:text-gray-50">
            	주소 입력 (우편번호 검색)
          	</h3>
          	<p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
            	Daum 우편번호 API 연동 스타일 (모달 트리거)
          	</p>

          	<div className="space-y-4">
            	{/* 주소 */}
            	<div>
              		<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2">
                		주소 <span className="text-[#d8442c]">*</span>
              		</label>
              		<div className="flex items-center gap-3">
                		<input className="flex-1 px-4 py-3.5 text-[15px] text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none font-medium cursor-not-allowed"
                  			type="text"
                  			value={formData.address}
                  			readOnly
                  			placeholder="우편번호 찾기를 클릭하세요" />
                		<button className="px-5 py-3.5 bg-[#243c84] hover:bg-[#1d3069] text-white border-0 rounded-lg text-[14px] font-semibold cursor-pointer transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
                  			type="button" >
                  			<MapPin size={16} />
                  				우편번호 찾기
                		</button>
              		</div>
            	</div>

            	{/* 상세 주소 */}
            	<div>
              		<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2"
                		htmlFor="addressDetailFinal" >
                		상세 주소
              		</label>
              		<input className="w-full px-4 py-3.5 text-[15px] text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none transition-all duration-200 font-medium focus:border-[#243c84] focus:border-2 focus:ring-4 focus:ring-[#243c84]/10"
                		id="addressDetailFinal"
                		type="text"
                		value={formData.addressDetail}
                		onChange={(e) => handleChange('addressDetail', e.target.value)}
                		placeholder="상세 주소를 입력하세요"/>
            	</div>
          	</div>
        </div>
    </div>
	);
}