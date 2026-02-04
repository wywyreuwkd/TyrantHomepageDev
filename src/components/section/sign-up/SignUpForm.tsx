"use client";

import Link from "next/link";
import { Home, ChevronRight, Eye, EyeOff, Mail, Search, X } from "lucide-react";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { useRouter } from "next/navigation";

export function SignUpForm() {
	// 회원 가입정보
  	const [userId, setUserId] = useState("");
  	const [password, setPassword] = useState("");
  	const [confirmPassword, setConfirmPassword] = useState("");
  	const [userName, setUserName] = useState("");
  	const [email, setEmail] = useState("");
  	const [emailId, setEmailId] = useState("");
  	const [emailDomain, setEmailDomain] = useState("");
  	const [phone, setPhone] = useState("");

  	// 회사 정보
  	const [companyName, setCompanyName] = useState("");
  	const [ceoName, setCeoName] = useState("");
  	const [companyAddress, setCompanyAddress] = useState("");
  	const [businessNumber, setBusinessNumber] = useState("");
  	const [corporateNumber, setCorporateNumber] = useState("");

  	// 업무 역할
  	const [workRole, setWorkRole] = useState("");

  	const [showPassword, setShowPassword] = useState(false);
  	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  	const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);
  	const [showEmailSuggestions, setShowEmailSuggestions] = useState(false);

  	const emailDomains = [
    	"@naver.com",
    	"@daum.net",
    	"@gmail.com",
    	"@hanmail.net",
    	"@kakao.com",
    	"@yahoo.com",
    	"@outlook.com",
    	"@hotmail.com"
  	];

  	const router = useRouter();

  	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    	const value = e.target.value;
    	setEmail(value);
    
    	// @ 입력 시 제안 표시
    	if (value.includes("@") && !value.includes(".")) {
      		setShowEmailSuggestions(true);
    	} else {
      		setShowEmailSuggestions(false);
    	}
  	};

  	const handleEmailSuggestionClick = (domain: string) => {
    	const emailPart = email.split("@")[0];
    	setEmail(emailPart + domain);
    	setShowEmailSuggestions(false);
  	};

  	const handleAddressComplete = (data: any) => {
    	let fullAddress = data.address;
    	let extraAddress = "";

    	if (data.addressType === "R") {
      		if (data.bname !== "") {
        		extraAddress += data.bname;
      		}
      		if (data.buildingName !== "") {
        		extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      		}
      		fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    	}

    	setCompanyAddress(fullAddress);
    	setIsPostcodeOpen(false);
  	};

  	{/* 회원가입 항목 작성 완료 */}
  	const handleSubmit = (e: React.FormEvent) => {
    	e.preventDefault();
    	console.log("회원 등록 신청:", {
      		userId,
      		userName,
      		email,
      		phone,
      		companyName,
      		ceoName,
      		companyAddress,
      		businessNumber,
      		corporateNumber,
      		workRole
    	});

    	router.push("/");
  	};

	return(
		<div>			
			{/* Form */}
        	<form onSubmit={handleSubmit}>
          		{/* 회원 가입정보 */}
          		<div className="rounded-[10px] border p-5 md:p-6 mb-6 md:mb-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            		<h3 className="text-[15px] md:text-[16px] font-bold mb-4 md:mb-5 text-gray-900 dark:text-gray-50">
              			회원 가입정보
            		</h3>

            		{/* 아이디 */}
            		<div className="mb-5">
              			<label className="block text-[14px] font-bold mb-2 text-gray-900 dark:text-gray-50"
                			htmlFor="userId">
                			아이디 <span className="text-[#d8442c]">*</span>
              			</label>
              			<input className="w-full px-4 py-3.5 text-[15px] font-medium rounded-lg border outline-none transition-all duration-200 bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-50 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-[#243c84] focus:border-2 focus:shadow-[0_0_0_3px_rgba(36,60,132,0.1)]"
                			id="userId"
                			type="text"
                			value={userId}
                			onChange={(e) => setUserId(e.target.value)}
                			placeholder="아이디를 입력하세요"
                			required/>
            		</div>

            		{/* 비밀번호 */}
            		<div className="mb-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              			<div>
                			<label className="block text-[14px] font-bold mb-2 text-gray-900 dark:text-gray-50"
                  				htmlFor="password">
                  				비밀번호 <span className="text-[#d8442c]">*</span>
                			</label>
                			<div className="relative">
                  				<input className="w-full px-4 py-3.5 pr-12 text-[15px] font-medium rounded-lg border outline-none transition-all duration-200 bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-50 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-[#243c84] focus:border-2 focus:shadow-[0_0_0_3px_rgba(36,60,132,0.1)]"
                    				id="password"
                    				type={showPassword ? 'text' : 'password'}
                    				value={password}
                    				onChange={(e) => setPassword(e.target.value)}
                    				placeholder="비밀번호를 입력하세요"
                    				required/>
                  				<button className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer p-1 flex items-center justify-center"
                    				type="button"
                    				onClick={() => setShowPassword(!showPassword)}>
                    				{showPassword ? (
                      					<EyeOff size={20} className="text-gray-500 dark:text-gray-400" />
                    				) : (
                      					<Eye size={20} className="text-gray-500 dark:text-gray-400" />
                    				)}
                  				</button>
                			</div>
              			</div>              		
              		
              		<div>
                		<label className="block text-[14px] font-bold mb-2 text-gray-900 dark:text-gray-50"
                  			htmlFor="confirmPassword">
                  			비밀번호 확인 <span className="text-[#d8442c]">*</span>
                		</label>
                		<div className="relative">
                  			<input className="w-full px-4 py-3.5 pr-12 text-[15px] font-medium rounded-lg border outline-none transition-all duration-200 bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-50 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-[#243c84] focus:border-2 focus:shadow-[0_0_0_3px_rgba(36,60,132,0.1)]"
                    			id="confirmPassword"
                    			type={showConfirmPassword ? 'text' : 'password'}
                    			value={confirmPassword}
                    			onChange={(e) => setConfirmPassword(e.target.value)}
                    			placeholder="비밀번호를 다시 입력하세요"
                    			required/>
                  			<button className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer p-1 flex items-center justify-center"
                    			type="button"
                    			onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    			{showConfirmPassword ? (
                      				<EyeOff size={20} className="text-gray-500 dark:text-gray-400" />
                    			) : (
                      				<Eye size={20} className="text-gray-500 dark:text-gray-400" />
                    			)}
                  			</button>
                		</div>
              		</div>
            	</div>

            	{/* 사용자 이름 */}
            	<div className="mb-5">
              		<label className="block text-[14px] font-bold mb-2 text-gray-900 dark:text-gray-50"
                		htmlFor="userName">
                		사용자 이름 <span className="text-[#d8442c]">*</span>
              		</label>
              		<input className="w-full px-4 py-3.5 text-[15px] font-medium rounded-lg border outline-none transition-all duration-200 bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-50 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-[#243c84] focus:border-2 focus:shadow-[0_0_0_3px_rgba(36,60,132,0.1)]"
                		id="userName"
                		type="text"
                		value={userName}
                		onChange={(e) => setUserName(e.target.value)}
                		placeholder="사용자 이름을 입력하세요"
                		required/>
            	</div>

            	{/* 이메일 주소 */}
            	<div className="mb-5">
              		<label className="block text-[14px] font-bold mb-2 text-gray-900 dark:text-gray-50">
                		이메일 주소 <span className="text-[#d8442c]">*</span>
              		</label>
              		<div className="flex flex-col md:flex-row gap-2 md:gap-2 md:items-center">
                		<input className="flex-1 px-4 py-3.5 text-[15px] font-medium rounded-lg border outline-none transition-all duration-200 bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-50 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-[#243c84] focus:border-2 focus:shadow-[0_0_0_3px_rgba(36,60,132,0.1)]"
                  			type="text"
                  			value={emailId}
                  			onChange={(e) => setEmailId(e.target.value)}
                  			placeholder="이메일"
                  			required/>
                		<span className="hidden md:inline text-[15px] font-medium text-gray-500 dark:text-gray-400">@</span>
                		<select className="flex-1 px-4 py-3.5 text-[15px] font-medium rounded-lg border outline-none transition-all duration-200 cursor-pointer bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-50 focus:border-[#243c84] focus:border-2 focus:shadow-[0_0_0_3px_rgba(36,60,132,0.1)]"
                  			value={emailDomain}
                  			onChange={(e) => setEmailDomain(e.target.value)}
                  			required>
                  			<option value="">도메인 선택</option>
                  			<option value="naver.com">@naver.com</option>
                  			<option value="daum.net">@daum.net</option>
                  			<option value="gmail.com">@gmail.com</option>
                  			<option value="hanmail.net">@hanmail.net</option>
                  			<option value="kakao.com">@kakao.com</option>
                  			<option value="yahoo.com">@yahoo.com</option>
                  			<option value="outlook.com">@outlook.com</option>
                  			<option value="hotmail.com">@hotmail.com</option>
                		</select>
              		</div>
            	</div>

            	{/* 연락처 */}
            	<div>
              		<label className="block text-[14px] font-bold mb-2 text-gray-900 dark:text-gray-50"
                		htmlFor="phone">
                		연락처 <span className="text-[#d8442c]">*</span>
              		</label>
              		<input className="w-full px-4 py-3.5 text-[15px] font-medium rounded-lg border outline-none transition-all duration-200 bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-50 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-[#243c84] focus:border-2 focus:shadow-[0_0_0_3px_rgba(36,60,132,0.1)]"
                		id="phone"
                		type="tel"
                		value={phone}
                		onChange={(e) => setPhone(e.target.value)}
                		placeholder="010-1234-5678"
                		required/>
            		</div>
          		</div>

          		{/* 회사 정보 */}
          		<div className="rounded-[10px] border p-5 md:p-6 mb-6 md:mb-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            		<h3 className="text-[15px] md:text-[16px] font-bold mb-4 md:mb-5 text-gray-900 dark:text-gray-50">
              			회사 정보
            		</h3>

            	{/* 회사 이름 */}
            	<div className="mb-5">
              		<label className="block text-[14px] font-bold mb-2 text-gray-900 dark:text-gray-50"
                		htmlFor="companyName">
                		회사 이름 <span className="text-[#d8442c]">*</span>
              		</label>
              		<input className="w-full px-4 py-3.5 text-[15px] font-medium rounded-lg border outline-none transition-all duration-200 bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-50 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-[#243c84] focus:border-2 focus:shadow-[0_0_0_3px_rgba(36,60,132,0.1)]"
                		id="companyName"
                		type="text"
                		value={companyName}
                		onChange={(e) => setCompanyName(e.target.value)}
                		placeholder="회사 이름을 입력하세요"
                		required/>
            	</div>

            	{/* 대표자 이름 */}
            	<div className="mb-5">
              		<label className="block text-[14px] font-bold mb-2 text-gray-900 dark:text-gray-50"
                		htmlFor="ceoName">
                		대표자 이름 <span className="text-[#d8442c]">*</span>
              		</label>
              		<input className="w-full px-4 py-3.5 text-[15px] font-medium rounded-lg border outline-none transition-all duration-200 bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-50 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-[#243c84] focus:border-2 focus:shadow-[0_0_0_3px_rgba(36,60,132,0.1)]"
                		id="ceoName"
                		type="text"
                		value={ceoName}
                		onChange={(e) => setCeoName(e.target.value)}
                		placeholder="대표자 이름을 입력하세요"
                		required/>
            	</div>

            	{/* 회사 주소 */}
            	<div className="mb-5">
              		<label className="block text-[14px] font-bold mb-2 text-gray-900 dark:text-gray-50"
                		htmlFor="companyAddress">
                		회사 주소 <span className="text-[#d8442c]">*</span>
              		</label>
              		<div className="flex gap-2">
                		<input className="flex-1 px-4 py-3.5 text-[15px] font-medium rounded-lg border outline-none transition-all duration-200 cursor-pointer bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-50 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  			id="companyAddress"
                  			type="text"
                  			value={companyAddress}
                  			onChange={(e) => setCompanyAddress(e.target.value)}
                  			placeholder="주소를 입력하세요"
                  			required
                  			readOnly                  
                  			onClick={() => setIsPostcodeOpen(true)}/>
                
                		<button className="px-4 py-3.5 text-[14px] font-bold text-white border-none rounded-lg cursor-pointer transition-all duration-200 whitespace-nowrap bg-[var(--BRAND-PRIMARY)]"
                  			type="button"
                  			onClick={() => setIsPostcodeOpen(true)}                  
                  			onMouseEnter={(e) => {
                    			e.currentTarget.style.backgroundColor = "var(--BRAND-PRIMARY-HOVER)";
                  			}}
                  			onMouseLeave={(e) => {
                    			e.currentTarget.style.backgroundColor = "var(--BRAND-PRIMARY)";
                  			}}>
                  			<Search size={18} className="inline mr-1.5" />
                  			주소 검색
                		</button>
              		</div>
            	</div>

            	{/* 사업자 등록 번호 */}
            	<div className="mb-5">
              		<label className="block text-[14px] font-bold mb-2 text-gray-900 dark:text-gray-50"
                		htmlFor="businessNumber">
                		사업자 등록 번호 <span className="text-[#d8442c]">*</span>
              		</label>
              		<input className="w-full px-4 py-3.5 text-[15px] font-medium rounded-lg border outline-none transition-all duration-200 bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-50 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-[#243c84] focus:border-2 focus:shadow-[0_0_0_3px_rgba(36,60,132,0.1)]"
                		id="businessNumber"
                		type="text"
                		value={businessNumber}
                		onChange={(e) => setBusinessNumber(e.target.value)}
                		placeholder="123-45-67890"
                		required/>
            	</div>

            	{/* 법인 등록 번호 */}
            	<div>
              		<label className="block text-[14px] font-bold mb-2 text-gray-900 dark:text-gray-50"
                		htmlFor="corporateNumber">
                		법인 등록 번호
              		</label>
              		<input className="w-full px-4 py-3.5 text-[15px] font-medium rounded-lg border outline-none transition-all duration-200 bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-50 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-[#243c84] focus:border-2 focus:shadow-[0_0_0_3px_rgba(36,60,132,0.1)]"
                		id="corporateNumber"
                		type="text"
                		value={corporateNumber}
                		onChange={(e) => setCorporateNumber(e.target.value)}
                		placeholder="123456-7890123"/>
            		</div>
          		</div>

          		{/* 업무 역할 */}
          		<div className="rounded-[10px] border p-5 md:p-6 mb-6 md:mb-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            		<h3 className="text-[15px] md:text-[16px] font-bold mb-4 md:mb-5 text-gray-900 dark:text-gray-50">
              			업무 역할
            		</h3>

	            	<div>
    	          		<label className="block text-[14px] font-bold mb-2 text-gray-900 dark:text-gray-50">
                			귀사의 주요 업무를 선택해주세요 <span className="text-[#d8442c]">*</span>
              			</label>
              			<select className="w-full px-4 py-3.5 text-[15px] font-medium rounded-lg border outline-none transition-all duration-200 cursor-pointer bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-50 focus:border-[#243c84] focus:border-2 focus:shadow-[0_0_0_3px_rgba(36,60,132,0.1)]"
                			value={workRole}
                			onChange={(e) => setWorkRole(e.target.value)}
                			required>
                			<option value="">업무 선택</option>
                			<option value="consulting">고객 컨설팅</option>
                			<option value="construction">협력 시공</option>
                			<option value="both">컨설팅 + 시공</option>
                			<option value="other">기타</option>
              			</select>
            		</div>
          		</div>

          		{/* Submit Buttons */}
          		<div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4 justify-end">
            		<Link href="/">
              			<button className="w-full md:w-auto px-8 py-3.5 text-[15px] md:text-base font-bold bg-transparent rounded-lg cursor-pointer transition-all duration-200 text-[var(--BRAND-PRIMARY)] border-[2px] border-[var(--BRAND-PRIMARY)]"
                			type="button"                              
                			onMouseEnter={(e) => {
                  				e.currentTarget.style.backgroundColor = "rgba(36, 60, 132, 0.05) dark:rgba(36, 60, 132, 0.1)";
                			}}
                			onMouseLeave={(e) => {
                  				e.currentTarget.style.backgroundColor = "transparent";
                			}}>
                			취소
              			</button>
            		</Link>
            		<button className="w-full md:w-auto px-8 py-3.5 text-[15px] md:text-base font-bold text-white border-none rounded-lg cursor-pointer transition-all duration-200 bg-[var(--BRAND-PRIMARY)]"
              			type="submit"              
              			onMouseEnter={(e) => {
                			e.currentTarget.style.backgroundColor = "var(--BRAND-PRIMARY-HOVER)";
              			}}
              			onMouseLeave={(e) => {
                			e.currentTarget.style.backgroundColor = "var(--BRAND-PRIMARY)";
              			}}>
              			회원 등록 신청
            		</button>
          		</div>
        	</form>

        	{/* Postcode Modal */}
      		{isPostcodeOpen && (
        		<>
          		{/* Backdrop */}
          		<div className="fixed inset-0 bg-black/50 z-[999] flex items-center justify-center p-4"
            		onClick={() => setIsPostcodeOpen(false)}>
            		{/* Modal Content */}
            		<div className="rounded-xl p-6 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] w-[90%] max-w-[600px] bg-white dark:bg-gray-800"
              			onClick={(e) => e.stopPropagation()}>
              			{/* Modal Header */}
              			<div className="flex justify-between items-center mb-4">
                			<h3 className="text-[18px] font-bold text-gray-900 dark:text-gray-50">
                  				주소 검색
                			</h3>
                			<button className="bg-transparent border-none cursor-pointer p-1 flex items-center justify-center rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                  				onClick={() => setIsPostcodeOpen(false)}>
                  				<X size={20} className="text-gray-500 dark:text-gray-400" />
                			</button>
              			</div>

              			{/* Postcode Content */}
              			<div className="border rounded-lg overflow-hidden border-gray-200 dark:border-gray-700">
                			{isPostcodeOpen && (
                  			<DaumPostcode className="h-[450px]"
                    			onComplete={handleAddressComplete}/>
                			)}
              			</div>
            		</div>
          		</div>
        		</>
      		)}
		</div>
	);
}