"use client"

import Link from "next/link";
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react'

export function MyInfoSection() {
	const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  	const [showNewPassword, setShowNewPassword] = useState(false);
  	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  	const [formData, setFormData] = useState({
    	id: 'test_epc',
    	userName: 'TEST_EPC',
    	emailId: 'kphong',
    	emailDomain: 'tyrant.co.kr',
    	phone: '010-8773-8031',
    	company: 'Test_EPC_Company',
    	currentPassword: '',
    	newPassword: '',
    	confirmPassword: ''
  	});

  	const handleChange = (field: string, value: string) => {
    	setFormData(prev => ({ ...prev, [field]: value }));
  	};

  	const handleSubmit = (e: React.FormEvent) => {
    	e.preventDefault();
    	console.log('Profile update:', formData);
  	};

	return(
		<div>
			{/* Main Content - Centered Form */}
      		<div className="max-w-[1100px] mx-auto">
        		<form onSubmit={handleSubmit}>
          			{/* 회원 가입정보 */}
          			<div className="rounded-[10px] border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6 mb-6">
            			<h3 className="text-[16px] font-bold mb-5 text-gray-900 dark:text-gray-50">
              				내 정보 관리
            			</h3>

            			{/* 아이디 (Read-only) */}
            			<div className="mb-5">
              				<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2"
                				htmlFor="userId">
                				아이디
              				</label>
              				<input className="w-full px-4 py-3.5 text-[15px] text-gray-400 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none font-medium cursor-not-allowed"
                				id="userId"
                				type="text"
                				value={formData.id}
                				readOnly />
            			</div>

            			{/* 사용자 이름 */}
            			<div className="mb-5">
              				<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2"
                				htmlFor="userName" >
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

            			{/* 이메일 주소 */}
            			<div className="mb-5">
              				<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2">
                				이메일 주소 <span className="text-[#d8442c]">*</span>
              				</label>
              				<div className="flex flex-col md:flex-row gap-2 md:gap-2 md:items-center">
                				<input className="flex-1 px-4 py-3.5 text-[15px] text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none transition-all duration-200 font-medium focus:border-[#243c84] focus:border-2 focus:ring-4 focus:ring-[#243c84]/10"
                  					type="text"
                  					value={formData.emailId}
                  					onChange={(e) => handleChange('emailId', e.target.value)}
                  					placeholder="이메일"
                  					required />
                				<span className="hidden md:inline text-[15px] text-gray-400 dark:text-gray-400 font-medium">
                  					@
                				</span>
                				<select className="flex-1 px-4 py-3.5 text-[15px] text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none transition-all duration-200 font-medium cursor-pointer focus:border-[#243c84] focus:border-2 focus:ring-4 focus:ring-[#243c84]/10"
                  					value={formData.emailDomain}
                  					onChange={(e) => handleChange('emailDomain', e.target.value)}
                  					required>
                  					<option value="">선택</option>
                  					<option value="naver.com">naver.com</option>
                  					<option value="daum.net">daum.net</option>
                  					<option value="gmail.com">gmail.com</option>
                  					<option value="hanmail.net">hanmail.net</option>
                  					<option value="kakao.com">kakao.com</option>
                  					<option value="yahoo.com">yahoo.com</option>
                  					<option value="outlook.com">outlook.com</option>
                  					<option value="hotmail.com">hotmail.com</option>
                  					<option value="tyrant.co.kr">tyrant.co.kr</option>
                				</select>
              				</div>
            			</div>

            			{/* 연락처 */}
            			<div className="mb-5">
              				<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2"
                				htmlFor="phone" >
                				연락처 <span className="text-[#d8442c]">*</span>
              				</label>
              				<input className="w-full px-4 py-3.5 text-[15px] text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none transition-all duration-200 font-medium focus:border-[#243c84] focus:border-2 focus:ring-4 focus:ring-[#243c84]/10"
                				id="phone"
                				type="tel"
                				value={formData.phone}
                				onChange={(e) => handleChange('phone', e.target.value)}
                				placeholder="010-1234-5678"
                				required />
            			</div>

            			{/* 소속 회사명 */}
            			<div>
              				<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2"
                				htmlFor="company">
                				소속 회사명
              				</label>
              				<input className="w-full px-4 py-3.5 text-[15px] text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none transition-all duration-200 font-medium focus:border-[#243c84] focus:border-2 focus:ring-4 focus:ring-[#243c84]/10"
                				id="company"
                				type="text"
                				value={formData.company}
                				onChange={(e) => handleChange('company', e.target.value)}
                				placeholder="회사명을 입력하세요"/>
            			</div>
          			</div>

          			{/* 비밀번호 변경 */}
          			<div className="rounded-[10px] border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6 mb-6">
            			<h3 className="text-[16px] font-bold mb-2 text-gray-900 dark:text-gray-50">
              				비밀번호 변경
            			</h3>
            			<p className="text-[14px] text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
              				비밀번호를 변경하고자 하는 경우 아래에서 비밀번호를 변경해 주세요.
            			</p>

            			{/* 현재 비밀번호 */}
            			<div className="mb-5">
              				<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2"
                				htmlFor="currentPassword">
                				현재 비밀번호
              				</label>
              				<div className="relative">
                				<input className="w-full px-4 py-3.5 pr-12 text-[15px] text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none transition-all duration-200 font-medium focus:border-[#243c84] focus:border-2 focus:ring-4 focus:ring-[#243c84]/10"
                  					id="currentPassword"
                  					type={showCurrentPassword ? 'text' : 'password'}
                  					value={formData.currentPassword}
                  					onChange={(e) => handleChange('currentPassword', e.target.value)}
                  					placeholder="현재 비밀번호를 입력하세요" />
                				<button className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer p-1 flex items-center justify-center"
                  					type="button"
                  					onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
                  					{showCurrentPassword ? (
                    					<EyeOff size={20} className="text-gray-400 dark:text-gray-400" />
                  					) : (
                    					<Eye size={20} className="text-gray-400 dark:text-gray-400" />
                  					)}
                				</button>
              				</div>
            			</div>

            			{/* 새 비밀번호 & 새 비밀번호 확인 */}
            			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              				<div>
                				<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2"
                  					htmlFor="newPassword" >
                  					새 비밀번호
                				</label>
                				<div className="relative">
                  					<input className="w-full px-4 py-3.5 pr-12 text-[15px] text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none transition-all duration-200 font-medium focus:border-[#243c84] focus:border-2 focus:ring-4 focus:ring-[#243c84]/10"
                    					id="newPassword"
                    					type={showNewPassword ? 'text' : 'password'}
                    					value={formData.newPassword}
                    					onChange={(e) => handleChange('newPassword', e.target.value)}
                    					placeholder="새 비밀번호를 입력하세요"/>
                  					<button className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer p-1 flex items-center justify-center"
                    					type="button"
                    					onClick={() => setShowNewPassword(!showNewPassword)}>
                    					{showNewPassword ? (
                      						<EyeOff size={20} className="text-gray-400 dark:text-gray-400" />
                    					) : (
                      						<Eye size={20} className="text-gray-400 dark:text-gray-400" />
                    					)}
                  					</button>
                				</div>
              				</div>

              				<div>
                				<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2"
                  					htmlFor="confirmPassword" >
                  					새 비밀번호 확인
                				</label>
                				<div className="relative">
                  					<input className="w-full px-4 py-3.5 pr-12 text-[15px] text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none transition-all duration-200 font-medium focus:border-[#243c84] focus:border-2 focus:ring-4 focus:ring-[#243c84]/10"
                    					id="confirmPassword"
                    					type={showConfirmPassword ? 'text' : 'password'}
                    					value={formData.confirmPassword}
                    					onChange={(e) => handleChange('confirmPassword', e.target.value)}
                    					placeholder="새 비밀번호를 다시 입력하세요"/>
                  					<button className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer p-1 flex items-center justify-center"
                    					type="button"
                    					onClick={() => setShowConfirmPassword(!showConfirmPassword)} >
                    					{showConfirmPassword ? (
                      						<EyeOff size={20} className="text-gray-400 dark:text-gray-400" />
                    					) : (
                      						<Eye size={20} className="text-gray-400 dark:text-gray-400" />
                    					)}
                  					</button>
                				</div>
              				</div>
            			</div>
          			</div>

          			{/* Submit Button */}
          			<button className="w-full px-4 py-4 text-[16px] font-bold text-white bg-[#243c84] hover:bg-[#1d3069] border-none rounded-lg cursor-pointer transition-colors duration-200 tracking-tight"
            			type="submit">
            			회원 정보 수정
          			</button>
        		</form>
      		</div>
		</div>
	);
}