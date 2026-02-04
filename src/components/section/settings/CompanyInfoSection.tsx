"use client"

import Link from "next/link";
import { Upload, Download, MapPin, X } from 'lucide-react';
import { useState } from 'react';

export function CompanyInfoSection() {
	const [formData, setFormData] = useState({
    	companyName: 'Test_EPC_Company',
    	ceoName: 'EPC_CEO',
    	address: '제주특별자치도 제주시 첨단로 242',
    	addressDetail: '',
    	businessNumber: '111-22-33333',
    	corporateNumber: '111111-1122232',
    	businessLicense: '그림1.png',
    	corporateDocument: '타이탄트에이아~식회사_사업자등록증.pdf'
  	});

  	const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  	const [tempAddress, setTempAddress] = useState('');
  	const [tempAddressDetail, setTempAddressDetail] = useState('');

  	const handleChange = (field: string, value: string) => {
    	setFormData(prev => ({ ...prev, [field]: value }));
  	};

  	const handleSubmit = (e: React.FormEvent) => {
    	e.preventDefault();
    	console.log('Company info update:', formData);
  	};

  	const handleFileUpload = (field: string) => {
    	const input = document.createElement('input');
    	input.type = 'file';
    	input.accept = field === 'businessLicense' ? 'image/*' : 'application/pdf';
    	input.onchange = (e) => {
      		const file = (e.target as HTMLInputElement).files?.[0];
      		if (file) {
        		handleChange(field, file.name);
      		}
    	};
    	input.click();
  	};

  	const handleFileDownload = (fileName: string) => {
    	console.log('Downloading:', fileName);
    	// Mock download
    	alert(`다운로드: ${fileName}`);
  	};

  	const openAddressModal = () => {
    	setTempAddress(formData.address);
    	setTempAddressDetail(formData.addressDetail);
    	setIsAddressModalOpen(true);
  	};

  	const closeAddressModal = () => {
    	setIsAddressModalOpen(false);
  	};

  	const saveAddressChanges = () => {
    	handleChange('address', tempAddress);
    	handleChange('addressDetail', tempAddressDetail);
    	closeAddressModal();
  	};
	
	return(
		<div>
			{/* Main Content - Centered Form */}
		    <div className="max-w-[1100px] mx-auto">
        		<form onSubmit={handleSubmit}>
          			{/* 회사 정보 */}
          			<div className="rounded-[10px] border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6 mb-6">
            			<h3 className="text-[16px] font-bold mb-5 text-gray-900 dark:text-gray-50">
              				회사 정보
            			</h3>

            			{/* 회사 이름 */}
            			<div className="mb-5">
              				<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2"
                				htmlFor="companyName">
                				회사 이름 <span className="text-[#d8442c]">*</span>
              				</label>
              				<input className="w-full px-4 py-3.5 text-[15px] text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none transition-all duration-200 font-medium focus:border-[#243c84] focus:border-2 focus:ring-4 focus:ring-[#243c84]/10"
                				id="companyName"
                				type="text"
                				value={formData.companyName}
                				onChange={(e) => handleChange('companyName', e.target.value)}
                				placeholder="회사 이름을 입력하세요"
                				required/>
            			</div>

            			{/* 대표자 이름 */}
            			<div className="mb-5">
              				<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2"
                				htmlFor="ceoName">
                				대표자 이름 <span className="text-[#d8442c]">*</span>
              				</label>
              				<input className="w-full px-4 py-3.5 text-[15px] text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none transition-all duration-200 font-medium focus:border-[#243c84] focus:border-2 focus:ring-4 focus:ring-[#243c84]/10"
                				id="ceoName"
                				type="text"
                				value={formData.ceoName}
                				onChange={(e) => handleChange('ceoName', e.target.value)}
                				placeholder="대표자 이름을 입력하세요"
                				required/>
            			</div>

            			{/* 회사 주소 */}
            			<div className="mb-5">
              				<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2"
                				htmlFor="address">
                				회사 주소 <span className="text-[#d8442c]">*</span>
              				</label>
              				<div className="flex flex-col md:flex-row gap-2">
                				<input className="flex-1 px-4 py-3.5 text-[15px] text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none transition-all duration-200 font-medium cursor-pointer hover:border-[#243c84] hover:bg-gray-50 dark:hover:bg-gray-800"
                  					id="address"
                  					type="text"
                  					value={formData.address}
                  					onClick={openAddressModal}
                  					placeholder="회사 주소를 입력하세요"
                  					required
                  					readOnly/>
              				</div>
            			</div>

            			{/* 상세 주소 */}
            			<div className="mb-5">
              				<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2"
                				htmlFor="addressDetail" >
                				상세 주소
              				</label>
              				<input className="w-full px-4 py-3.5 text-[15px] text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none transition-all duration-200 font-medium focus:border-[#243c84] focus:border-2 focus:ring-4 focus:ring-[#243c84]/10"
                				id="addressDetail"
                				type="text"
                				value={formData.addressDetail}
                				onChange={(e) => handleChange('addressDetail', e.target.value)}
                				placeholder="상세 주소를 입력하세요"/>
            			</div>

            			{/* 사업자등록번호 */}
            			<div className="mb-5">
              				<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2"
                				htmlFor="businessNumber" >
                				사업자등록번호 <span className="text-[#d8442c]">*</span>
              				</label>
              				<input className="w-full px-4 py-3.5 text-[15px] text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none transition-all duration-200 font-medium focus:border-[#243c84] focus:border-2 focus:ring-4 focus:ring-[#243c84]/10"
                				id="businessNumber"
                				type="text"
                				value={formData.businessNumber}
                				onChange={(e) => handleChange('businessNumber', e.target.value)}
                				placeholder="111-22-33333"
                				required />
            			</div>

            			{/* 법인등록번호 */}
            			<div>
              				<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2"
                				htmlFor="corporateNumber">
                				법인등록번호 <span className="text-[#d8442c]">*</span>
              				</label>
              				<input className="w-full px-4 py-3.5 text-[15px] text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none transition-all duration-200 font-medium focus:border-[#243c84] focus:border-2 focus:ring-4 focus:ring-[#243c84]/10"
                				id="corporateNumber"
                				type="text"
                				value={formData.corporateNumber}
                				onChange={(e) => handleChange('corporateNumber', e.target.value)}
                				placeholder="111111-1122232"
                				required />
            			</div>
          			</div>

          			{/* 서류 첨부 */}
          			<div className="rounded-[10px] border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6 mb-6">
            			<h3 className="text-[16px] font-bold mb-2 text-gray-900 dark:text-gray-50">
              				서류 첨부
            			</h3>
            			<div className="mb-5">
              				<p className="text-[14px] text-gray-600 dark:text-gray-400 leading-relaxed mb-1">
                				• 사업자등록증 및 법인 등기사항전부증명서 파일을 첨부해 주세요.
              				</p>
              				<p className="text-[14px] text-gray-600 dark:text-gray-400 leading-relaxed">
                				• 각각 하나의 파일만 가능하며, 페이지가 여러 이상인 경우 하나의 PDF로 생성하여 올려주시기 바랍니다.
              				</p>
            			</div>

            		{/* 사업자등록증 */}
            		<div className="mb-5">
              			<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2">
                			사업자등록증 <span className="text-[#d8442c]">*</span>
              			</label>
              			<div className="flex flex-col md:flex-row gap-2">
                			<input className="flex-1 px-4 py-3.5 text-[15px] text-gray-400 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none font-medium cursor-not-allowed"
                  				type="text"
                  				value={formData.businessLicense}
                  				readOnly
                  				placeholder="파일을 선택하세요" />
                			<div className="flex gap-2">
                  				<button className="h-10 px-5 bg-transparent text-[#243c84] dark:text-[#5a7bc8] text-[14px] font-semibold rounded-md border-[1.5px] border-[#243c84] dark:border-[#5a7bc8] cursor-pointer transition-all hover:bg-[#243c84] hover:dark:bg-[#5a7bc8] hover:text-white flex items-center gap-2"
                    				type="button"
                    				onClick={() => handleFileDownload(formData.businessLicense)} >
                    				<Download size={16} />
                    				다운로드
                  				</button>
                  				<button className="h-10 px-5 bg-transparent text-[#243c84] dark:text-[#5a7bc8] text-[14px] font-semibold rounded-md border-[1.5px] border-[#243c84] dark:border-[#5a7bc8] cursor-pointer transition-all hover:bg-[#243c84] hover:dark:bg-[#5a7bc8] hover:text-white flex items-center gap-2"
                    				type="button"
                    				onClick={() => handleFileUpload('businessLicense')}>
                    				<Upload size={16} />
                    					파일첨부
                  				</button>
                			</div>
              			</div>
            		</div>

            		{/* 법인 등기사항전부증명서 */}
            		<div>
              			<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2">
                			법인 등기사항전부증명서 <span className="text-[#d8442c]">*</span>
              			</label>
              			<div className="flex flex-col md:flex-row gap-2">
                			<input className="flex-1 px-4 py-3.5 text-[15px] text-gray-400 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none font-medium cursor-not-allowed"
                  				type="text"
                  				value={formData.corporateDocument}
                  				readOnly
                  				placeholder="파일을 선택하세요" />
                			<div className="flex gap-2">
                  				<button className="h-10 px-5 bg-transparent text-[#243c84] dark:text-[#5a7bc8] text-[14px] font-semibold rounded-md border-[1.5px] border-[#243c84] dark:border-[#5a7bc8] cursor-pointer transition-all hover:bg-[#243c84] hover:dark:bg-[#5a7bc8] hover:text-white flex items-center gap-2"
                    				type="button"
                    				onClick={() => handleFileDownload(formData.corporateDocument)} >
                    				<Download size={16} />
                    				다운로드
                  				</button>
                  				<button className="h-10 px-5 bg-transparent text-[#243c84] dark:text-[#5a7bc8] text-[14px] font-semibold rounded-md border-[1.5px] border-[#243c84] dark:border-[#5a7bc8] cursor-pointer transition-all hover:bg-[#243c84] hover:dark:bg-[#5a7bc8] hover:text-white flex items-center gap-2"
                    				type="button"
                    				onClick={() => handleFileUpload('corporateDocument')} >
                    				<Upload size={16} />
                    				파일첨부
                  				</button>
                			</div>
              			</div>
            		</div>
          		</div>

          		{/* Submit Button */}
          		<button className="w-full px-4 py-4 text-[16px] font-bold text-white bg-[#243c84] hover:bg-[#1d3069] border-none rounded-lg cursor-pointer transition-colors duration-200 tracking-tight"
            		type="submit" >
            		회사 정보 수정
          		</button>
        	</form>
      	</div>

      	{/* Address Modal */}
      	{isAddressModalOpen && (
        	<div className="fixed top-0 left-0 right-0 bottom-0 bg-black/30 flex items-center justify-center z-[100]"
          		onClick={closeAddressModal}>
          		<div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-[400px]"
            		onClick={(e) => e.stopPropagation()}>
            		<div className="flex items-center justify-between mb-4">
              			<h3 className="text-[16px] font-bold text-gray-900 dark:text-gray-50">
                			주소 변경
              			</h3>
              			<button className="h-6 w-6 bg-transparent text-gray-400 dark:text-gray-400 text-[14px] font-semibold rounded-md border-[1.5px] border-gray-400 dark:border-gray-400 cursor-pointer transition-all hover:bg-gray-400 hover:dark:bg-gray-400 hover:text-white flex items-center justify-center"
                			type="button"
                			onClick={closeAddressModal}>
                			<X size={16} />
              			</button>
            		</div>
            		<div className="mb-4">
              			<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2"
                			htmlFor="tempAddress">
                			회사 주소 <span className="text-[#d8442c]">*</span>
              			</label>
              			<input className="w-full px-4 py-3.5 text-[15px] text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none transition-all duration-200 font-medium focus:border-[#243c84] focus:border-2 focus:ring-4 focus:ring-[#243c84]/10"
                			id="tempAddress"
                			type="text"
                			value={tempAddress}
                			onChange={(e) => setTempAddress(e.target.value)}
                			placeholder="회사 주소를 입력하세요"
                			required />
            		</div>
            		<div className="mb-4">
              		<label className="block text-[14px] font-bold text-gray-900 dark:text-gray-50 mb-2"
                		htmlFor="tempAddressDetail" >
                		상세 주소
              		</label>
              		<input className="w-full px-4 py-3.5 text-[15px] text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg outline-none transition-all duration-200 font-medium focus:border-[#243c84] focus:border-2 focus:ring-4 focus:ring-[#243c84]/10"
                		id="tempAddressDetail"
                		type="text"
                		value={tempAddressDetail}
                		onChange={(e) => setTempAddressDetail(e.target.value)}
                		placeholder="상세 주소를 입력하세요"/>
            	</div>
            	<button className="w-full px-4 py-4 text-[16px] font-bold text-white bg-[#243c84] hover:bg-[#1d3069] border-none rounded-lg cursor-pointer transition-colors duration-200 tracking-tight"
              		type="button"
              		onClick={saveAddressChanges} >
              		주소 변경 저장
            	</button>
          	</div>
        </div>
      	)}
	</div>
	);
}