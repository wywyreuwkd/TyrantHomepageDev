"use client";

import Link from "next/link";
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export function SignInForm() {
	const [showPassword, setShowPassword] = useState(false);
  	const [email, setEmail] = useState("");
  	const [password, setPassword] = useState("");

	return (
		<section>
			{/* Form Content */}
          	<div className="flex-1 flex flex-col justify-center">
            	{/* ID Input */}
            	<div className="mb-4 md:mb-5">
              		<label className="block text-[13px] md:text-[14px] font-bold mb-2 text-gray-900 dark:text-gray-50"
                		htmlFor="email">
                		ID
              		</label>
              		<input className="w-full px-4 py-3 md:py-3.5 text-[14px] md:text-[15px] font-medium rounded-lg border outline-none transition-all duration-200 bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-50 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-[#243c84] focus:border-2 focus:shadow-[0_0_0_3px_rgba(36,60,132,0.1)]"
                		id="email"
                		type="text"
                		value={email}
                		onChange={(e) => setEmail(e.target.value)}
                		placeholder="아이디를 입력하세요"/>
            	</div>

            	{/* Password Input */}
            	<div className="mb-5 md:mb-7">
              		<label className="block text-[13px] md:text-[14px] font-bold mb-2 text-gray-900 dark:text-gray-50"
                		htmlFor="password">
                		PW
              		</label>
              		<div className="relative">
                		<input className="w-full px-4 py-3 md:py-3.5 pr-12 text-[14px] md:text-[15px] font-medium rounded-lg border outline-none transition-all duration-200 bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-50 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-[#243c84] focus:border-2 focus:shadow-[0_0_0_3px_rgba(36,60,132,0.1)]"
                  			id="password"
                  			type={showPassword ? 'text' : 'password'}
                  			value={password}
                  			onChange={(e) => setPassword(e.target.value)}
                  			placeholder="비밀번호를 입력하세요"/>
                		<button className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer p-1 flex items-center justify-center"
                  			type="button"
                  			onClick={() => setShowPassword(!showPassword)}>
                  			{showPassword ? (
                    			<EyeOff size={18} className="text-gray-500 dark:text-gray-400" />
                  			) : (
                    			<Eye size={18} className="text-gray-500 dark:text-gray-400" />
                  			)}
                		</button>
              		</div>
            	</div>

            	{/* Login Button */}
            	<Link href="/main">
              		<button className="w-full py-3.5 md:py-[15px] text-[15px] md:text-base font-bold text-white border-none rounded-lg cursor-pointer mb-5 md:mb-6 transition-all duration-200 bg-[var(--BRAND-PRIMARY)]"
                		onMouseEnter={(e) => {
                  			e.currentTarget.style.backgroundColor = "var(--BRAND-PRIMARY-HOVER)";
                		}}
                		onMouseLeave={(e) => {
                  			e.currentTarget.style.backgroundColor = "var(--BRAND-PRIMARY)";
                		}}>
                		로그인
              		</button>
            	</Link>

            	{/* Divider */}
            	<div className="flex items-center gap-3 mb-5 md:mb-6">
              		<div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
              		<span className="text-[12px] md:text-[13px] font-semibold text-gray-500 dark:text-gray-400">
                		또는
              		</span>
              		<div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
            	</div>

            	{/* Sign Up Button */}
            	<Link href="/sign-up">
              		<button className="w-full py-3.5 md:py-[15px] text-[15px] md:text-base font-bold bg-transparent rounded-lg cursor-pointer transition-all duration-200 text-[var(--BRAND-PRIMARY)] border border-[2px] border-[var(--BRAND-PRIMARY)]"
                		onMouseEnter={(e) => {
                  			e.currentTarget.style.backgroundColor = "rgba(36, 60, 132, 0.05) dark:rgba(36, 60, 132, 0.1)";
                		}}
                		onMouseLeave={(e) => {
                  			e.currentTarget.style.backgroundColor = "transparent";
                		}}>
                		회원 등록 신청
              		</button>
            	</Link>
          	</div>
		</section>
	);
}