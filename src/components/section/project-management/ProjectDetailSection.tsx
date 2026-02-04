"use client"

import Link from "next/link";
import { Home, ChevronRight, Edit2, ArrowLeft, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ProjectStakeholder {
  	id: number;
  	role: string;
  	companyName: string;
  	representative: string;
  	capabilities: string;
  	note: string;
}

const LABELS = {
  	pageTitle: '정보조회',
  	pageSubtitle: '선택한 프로젝트의 상세 정보를 조회하고 수정할 수 있습니다',
  	sections: {
	    projectBasic: '프로젝트 기초 정보',
    	landowner: '부동산 임대인 상세정보',
    	powerPlant: '발전소 정보',
    	stakeholders: '프로젝트 관계사',
    	landownerLinked: '임대인 연동 프로젝트',
    	powerPlantLinked: '발전소 연동 프로젝트'
  	},
  	fields: {
    	projectName: '프로젝트명',
    	receiptDate: '접수일자',
    	salesCompany: '영업사',
    	constructionCompany: '시공사',
    	landownerId: '임대인 ID',
    	landownerName: '임대인 이름',
    	address: '임대대상지 주소',
    	detailAddress: '상세 주소',
    	ownedCount: '소유자 수',
    	contactName: '임대인측 담당자 이름',
    	contactPhone: '임대인측 담당자 연락처',
    	notes: '참고사항',
    	powerPlantId: '발전소 ID',
    	powerPlantName: '발전소 이름',
    	powerPlantAddress: '발전소 주소',
    	powerPlantDetail: '상세 주소',
    	generationType: '발전 유형',
    	installationType: '설치 위치',
    	capacity: '예상설치용량'
  	},
  	buttons: {
    	edit: '프로젝트 정보 수정',
    	backToList: '목록으로'
  	},
  	linkedProjects: '연동 프로젝트 리스트',
  	stakeholdersTable: {
    	role: '역할구분',
    	company: '회사 이름',
    	representative: '대표자명',
    	capabilities: '보유 역할',
    	note: '비고'
  	}
};

export function ProjectDetailSection() {
	const [stakeholders] = useState<ProjectStakeholder[]>([
    	{
      		id: 1,
      		role: '컨설팅',
      		companyName: '(주)현명에너지',
      		representative: '유영진',
      		capabilities: '영업 협력 역할, EPC',
      		note: ''
    	}
	]);

  	// Scroll to top state
  	const [showScrollTop, setShowScrollTop] = useState(false);
  
  	// Mobile Bottom Sheet state
  	const [showStakeholdersSheet, setShowStakeholdersSheet] = useState(false);
  	const [showAddStakeholderSheet, setShowAddStakeholderSheet] = useState(false);

  	// Scroll event handler
  	useEffect(() => {
    	const handleScroll = () => {
      		setShowScrollTop(window.scrollY > 300);
    	};

    	window.addEventListener('scroll', handleScroll);
    	return () => window.removeEventListener('scroll', handleScroll);
  	}, []);

  	const scrollToTop = () => {
    	window.scrollTo({ top: 0, behavior: 'smooth' });
  	};

  	// Project Basic Info States
  	const [projectName, setProjectName] = useState('경기도 포천시 소흘읍 이동교리 705 외 3필지');
  	const [receiptDate, setReceiptDate] = useState('2026-01-05');
  	const [salesCompany, setSalesCompany] = useState('(주)현명에너지');
  	const [constructionCompany, setConstructionCompany] = useState('소흘읍 이동교리 705');

  	const [selectedInstallationType, setSelectedInstallationType] = useState('수상');
  	const [installationCapacity, setInstallationCapacity] = useState('379.730');
  	const [showAddressModal, setShowAddressModal] = useState(false);
  	const [powerPlantAddress, setPowerPlantAddress] = useState('경기도 포천시 소흘읍');
  	const [powerPlantDetailAddress, setPowerPlantDetailAddress] = useState('');
  	const [generationType, setGenerationType] = useState('태양광');
  	const [landownerAddress, setLandownerAddress] = useState('경기 포천시 소흘읍 이동교리 705');
  	const [landownerDetailAddress, setLandownerDetailAddress] = useState('더이스, 데마마을');
  	const [showLandownerAddressModal, setShowLandownerAddressModal] = useState(false);
  	const [ownedCount, setOwnedCount] = useState('1');
  	const [notes, setNotes] = useState('');
  
  	// Landowner Info States
  	const [landownerId, setLandownerId] = useState('LS20260105112111701');
  	const [landownerName, setLandownerName] = useState('현명에너지');
  	const [contactName, setContactName] = useState('김중안 차장');
  	const [contactPhone, setContactPhone] = useState('010-9871-2987');
  
  	// Power Plant Info States
  	const [powerPlantId, setPowerPlantId] = useState('PS20260105112111701');
  	const [powerPlantName, setPowerPlantName] = useState('경기도 포천시 소흘읍 이동교리 705 외 3필지');

  	// Stakeholder Input States
  	const [newStakeholderRole, setNewStakeholderRole] = useState('');
  	const [newStakeholderCompany, setNewStakeholderCompany] = useState('');
  	const [newStakeholderRepresentative, setNewStakeholderRepresentative] = useState('');
  	const [newStakeholderCapabilities, setNewStakeholderCapabilities] = useState('');
  	const [newStakeholderNote, setNewStakeholderNote] = useState('');
  	const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  	const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);

  	// Mock data
  	const projectData = {
    	projectName: '경기도 포천시 소흘읍 이동교리 705 외 3필지',
    	receiptDate: '2026-01-05',
    	salesCompany: '(주)영앤에너지',
    	constructionCompany: '소흘읍 이동교리 705',
    	landowner: {
      		id: 'LS20260105112111701',
      		name: '영앤에너지',
      		address: '경기 포천시 소흘읍 이동교리 705',
      		detailAddress: '더이스, 데마마을',
      		count: '1',
      		contactName: '김중안 차장',
      		contactPhone: '010-9871-2987',
      		notes: '전지의 과대 과잉이 있는 경우 일정포기 시도'
    	},
    	powerPlant: {
      		id: 'PS20260105112111701',
      		name: '경기도 포천시 소흘읍 이동교리 705 외 3필지',
      		address: '경기도 포천시 소흘읍',
      		detailAddress: '',
      		generationType: '태양광',
      		installationTypes: [
        		{ location: '지붕', capacity: '379.730' },
        		{ location: '주차장', capacity: '379.730' },
        		{ location: '나대지', capacity: '379.730' },
        		{ location: '임야', capacity: '379.730' },
        		{ location: '수상', capacity: '379.730' }
      		]
    	},
    	linkedProjects: [
      		{
        		projectName: '양주시 회암동 태양광발전',
        		receiptDate: '2026-01-14',
        		salesCompany: '(주)더블비큐코리아'
      		}
    	]
  	};

  	// Stakeholder role options
  	const roleOptions = [
    	'주식회사 유클릭',
    	'타이런트(SALES)',
    	'타이런트(조회)',
    	'주식회사 현대쏠라텍',
    	'(주)거온ENC',
    	'시자이(주)',
    	'다온뷰티'
  	];

  	// Company search options
  	const companyOptions = [
    	'한강에셋자산운용 주식회사',
    	'주식회사 유클릭',
    	'타이런트(SALES)',
    	'타이런트(조회)',
    	'주식회사 현대쏠라텍',
    	'(주)거온ENC',
    	'시자이(주)',
    	'다온뷰티'
  	];

  	// Mobile Key-Value Component
  	const MobileKeyValue = ({ label, value, emphasized = false }: { label: string; value: string; emphasized?: boolean }) => (
    	<div className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-gray-700">
      		<span className="text-[12px] font-medium leading-[18px] text-slate-600 dark:text-gray-400">
        		{label}
      		</span>
      		<span className={`text-[14px] ${emphasized ? 'font-semibold' : 'font-normal'} text-right leading-[1.5] max-w-[60%] text-slate-900 dark:text-gray-50`}>
        		{value}
      		</span>
    	</div>
  	);

  	// Mobile Capacity Display Component (숫자 16px + 단위 12px)
  	const MobileCapacityValue = ({ label, value, unit }: { label: string; value: string; unit: string }) => (
    	<div className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-gray-700">
      		<span className="text-[12px] font-medium leading-[18px] text-slate-600 dark:text-gray-400">
        		{label}
      		</span>
      		<div className="text-right flex items-baseline gap-1">
        		<span className="text-[16px] font-semibold leading-[24px] text-slate-900 dark:text-gray-50">
          			{value}
        		</span>
        		<span className="text-[12px] font-normal leading-[18px] text-slate-600 dark:text-gray-400">
          			{unit}
        		</span>
      		</div>
    	</div>
  	);

  	const InfoField = ({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) => (
    	<div>
      		<div className="text-[14px] font-semibold mb-1.5 text-slate-600 dark:text-gray-300">
        		{label}
      		</div>
      		<input className={`w-full px-0 py-2 text-[14px] ${highlight ? 'font-semibold' : 'font-medium'} bg-transparent leading-[1.5] border-b outline-none border-gray-200 dark:border-gray-700 ${ highlight ? 'text-slate-900 dark:text-gray-50' : 'text-slate-900 dark:text-gray-100'}`}
        		type="text"
        		value={value}
        		readOnly/>
    	</div>
  	);

	return (
		<div>
			{/* Desktop Layout */}
      		<div className="hidden md:block">
        		{/* Card 1: 프로젝트 기초 정보 */}
        		<div className="mb-6">
          			<div className="rounded-xl p-8 bg-white dark:bg-gray-800 shadow-sm dark:shadow-none border border-transparent dark:border-gray-700">
            			<h2 className="text-[18px] font-semibold mb-6 text-slate-900 dark:text-gray-50">
              				{LABELS.sections.projectBasic}
            			</h2>
            			<div className="grid grid-cols-2 gap-x-12 gap-y-6">
              				{/* Project Name Input */}
              				<div>
                				<div className="text-[14px] font-semibold mb-1.5 flex items-center gap-1 text-slate-600 dark:text-gray-300">
                  					<span>{LABELS.fields.projectName}</span>
                  					<span className="text-[#d8442c] text-[14px]">*</span>
                				</div>
                				<input className="w-full px-3 py-2 text-[14px] font-semibold rounded-md transition-colors outline-none bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-900 dark:text-gray-50"
                  					type="text"
                  					value={projectName}
                  					onChange={(e) => setProjectName(e.target.value)}/>
              				</div>
              
              				{/* Receipt Date Input */}
              				<div>
                				<div className="text-[14px] font-semibold mb-1.5 flex items-center gap-1 text-slate-600 dark:text-gray-300">
                  					<span>{LABELS.fields.receiptDate}</span>
                  					<span className="text-[#d8442c] text-[14px]">*</span>
                				</div>
                				<input className="w-full px-3 py-2 text-[14px] font-medium rounded-md transition-colors outline-none bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-900 dark:text-gray-200"
                  					type="date"
                  					value={receiptDate}
                  					onChange={(e) => setReceiptDate(e.target.value)}/>
              				</div>
              
              				{/* Sales Company Input */}
              				<div>
                				<div className="text-[14px] font-semibold mb-1.5 flex items-center gap-1 text-slate-600 dark:text-gray-300">
                  					<span>{LABELS.fields.salesCompany}</span>
                  					<span className="text-[#d8442c] text-[14px]">*</span>
                				</div>
                				<input className="w-full px-3 py-2 text-[14px] font-medium rounded-md transition-colors outline-none bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-900 dark:text-gray-200"
                  					type="text"
                  					value={salesCompany}
                  					onChange={(e) => setSalesCompany(e.target.value)}/>
              				</div>
              
              				{/* Construction Company Input */}
              				<div>
                				<div className="text-[14px] font-semibold mb-1.5 text-slate-600 dark:text-gray-300">
                  					{LABELS.fields.constructionCompany}
                				</div>
                				<input className="w-full px-3 py-2 text-[14px] font-medium rounded-md transition-colors outline-none bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-900 dark:text-gray-200"
                  					type="text"
                  					value={constructionCompany}
                  					onChange={(e) => setConstructionCompany(e.target.value)}/>
              				</div>
            			</div>
          			</div>
        		</div>

        		{/* Card 2: 부동산 임대인 정보 */}
        		<div className="mb-6">
          			<div className="rounded-xl p-8 bg-white dark:bg-gray-800 shadow-sm dark:shadow-none border border-transparent dark:border-gray-700">
            			<h2 className="text-[18px] font-semibold mb-6 text-slate-900 dark:text-gray-50">
              				{LABELS.sections.landowner}
            			</h2>
            
            			<div className="grid grid-cols-2 gap-8">
              				{/* Left: Landowner Details */}
              				<div className="space-y-5">
                				{/* Landowner ID Input */}
                				<div>
                  					<div className="text-[14px] font-semibold mb-1.5 text-slate-600 dark:text-gray-300">
                    					{LABELS.fields.landownerId}
                  					</div>
                  					<input className="w-full px-3 py-2 text-[14px] font-medium rounded-md transition-colors outline-none bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-900 dark:text-gray-200"
                    					type="text"
                    					value={landownerId}
                    					onChange={(e) => setLandownerId(e.target.value)} />
                				</div>
                
                				{/* Landowner Name Input */}
                				<div>
                  					<div className="text-[14px] font-semibold mb-1.5 flex items-center gap-1 text-slate-600 dark:text-gray-300">
                    					<span>{LABELS.fields.landownerName}</span>
                    					<span className="text-[#d8442c] text-[14px]">*</span>
                  					</div>
                  					<input className="w-full px-3 py-2 text-[14px] font-semibold rounded-md transition-colors outline-none bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-900 dark:text-gray-50"
                    					type="text"
                    					value={landownerName}
                    					onChange={(e) => setLandownerName(e.target.value)} />
                				</div>
                
                				{/* Address Field with Search Button */}
                				<div>
                  					<div className="text-[14px] font-semibold mb-1.5 flex items-center gap-1 text-slate-600 dark:text-gray-300">
                    					<span>{LABELS.fields.address}</span>
                    					<span className="text-[#d8442c] text-[14px]">*</span>
                  					</div>
                  					<div className="px-3 py-2 text-[14px] font-medium rounded-md cursor-pointer transition-all leading-[1.5] bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-900 dark:text-gray-100 hover:border-[#243c84]"
                    					onClick={() => setShowLandownerAddressModal(true)}>
                    					{landownerAddress || '주소를 검색하세요'}
                  					</div>
                				</div>

                				{/* Detail Address Input */}
                				<div>
                  					<div className="text-[14px] font-semibold mb-1.5 flex items-center gap-1 text-slate-600 dark:text-gray-300">
                    					<span>{LABELS.fields.detailAddress}</span>
                    					<span className="text-[#d8442c] text-[14px]">*</span>
                  					</div>
                  					<input className="w-full px-3 py-2 text-[14px] font-medium rounded-md transition-colors outline-none bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-900 dark:text-gray-200"
                    					type="text"
                    					value={landownerDetailAddress}
                    					onChange={(e) => setLandownerDetailAddress(e.target.value)}
                    					placeholder="상세 주소를 입력하세요"/>
                				</div>
                
                				{/* Owned Count Number Input */}
                				<div>
                  					<div className="text-[14px] font-semibold mb-1.5 flex items-center gap-1 text-slate-600 dark:text-gray-300">
                    					<span>{LABELS.fields.ownedCount}</span>
                    					<span className="text-[#d8442c] text-[14px]">*</span>
                  					</div>
                  					<div className="flex items-center gap-2">
                    					<input className="flex-1 px-3 py-2 text-[14px] font-medium rounded-md transition-colors outline-none bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-900 dark:text-gray-200"
                      						type="number"
                      						value={ownedCount}
                      						onChange={(e) => setOwnedCount(e.target.value)}
                      						min="1"
                      						step="1"/>
                    					<span className="text-[14px] font-medium text-slate-600 dark:text-gray-400">
                      						명
                    					</span>
                  					</div>
                				</div>
                
                				{/* Contact Name Input */}
                				<div>
                  					<div className="text-[14px] font-semibold mb-1.5 flex items-center gap-1 text-slate-600 dark:text-gray-300">
                    					<span>{LABELS.fields.contactName}</span>
                    					<span className="text-[#d8442c] text-[14px]">*</span>
                  					</div>
                  					<input className="w-full px-3 py-2 text-[14px] font-medium rounded-md transition-colors outline-none bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-900 dark:text-gray-200"
                    					type="text"
                    					value={contactName}
                    					onChange={(e) => setContactName(e.target.value)}/>
                				</div>
                
                				{/* Contact Phone Input */}
                				<div>
                  					<div className="text-[14px] font-semibold mb-1.5 flex items-center gap-1 text-slate-600 dark:text-gray-300">
                    					<span>{LABELS.fields.contactPhone}</span>
                    					<span className="text-[#d8442c] text-[14px]">*</span>
                  					</div>
                  					<input className="w-full px-3 py-2 text-[14px] font-medium rounded-md transition-colors outline-none bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-900 dark:text-gray-200"
                    					type="tel"
                    					value={contactPhone}
                    					onChange={(e) => setContactPhone(e.target.value)}/>
                				</div>
                
                				{/* Notes Field */}
                				<div>
                  					<div className="text-[14px] font-semibold mb-1.5 text-slate-600 dark:text-gray-300">
                    					{LABELS.fields.notes}
                  					</div>
                  					<textarea className="w-full px-3 py-2 text-[14px] font-medium rounded-md transition-colors resize-none outline-none bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-900 dark:text-gray-200"
                    					value={notes}
                    					onChange={(e) => setNotes(e.target.value)}
                    					placeholder="임대인 관련 추가 정보가 있는 경우 작성해주세요"
                    					rows={3} />
                				</div>
              				</div>

              				{/* Right: Linked Projects */}
              				<div>
                				<div className="text-[14px] font-semibold mb-3 text-slate-700 dark:text-gray-300">
                  					임대인 {LABELS.linkedProjects}
                				</div>
                				<div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                  					<table className="w-full">
                    					<thead>
                      						<tr className="bg-slate-50 dark:bg-gray-900">
                        						<th className="text-left px-4 py-3 text-[14px] font-semibold text-slate-600 dark:text-gray-400">
                          							프로젝트명
                        						</th>
                        						<th className="text-left px-4 py-3 text-[14px] font-semibold text-slate-600 dark:text-gray-400">
                          							접수일자
                        						</th>
                        						<th className="text-left px-4 py-3 text-[14px] font-semibold text-slate-600 dark:text-gray-400">
                          							영업사
                        						</th>
                      						</tr>
                    					</thead>
                    					<tbody>
                      						{projectData.linkedProjects.map((project, index) => (
                        						<tr className="transition-colors cursor-pointer bg-white dark:bg-gray-800 border-t border-slate-100 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-900"
                          							key={index}>
                          							<td className="px-4 py-3 text-[14px] font-medium text-slate-900 dark:text-gray-200">
                            							{project.projectName}
                          							</td>
                          							<td className="px-4 py-3 text-[14px] text-slate-600 dark:text-gray-400">
                            							{project.receiptDate}
                          							</td>
                          							<td className="px-4 py-3 text-[14px] text-slate-600 dark:text-gray-400">
                            							{project.salesCompany}
                          							</td>
                        						</tr>
                      						))}
                    					</tbody>
                  					</table>
                				</div>
              				</div>
            			</div>
          			</div>
        		</div>

        		{/* Card 3: 발전소 정보 */}
        		<div className="mb-6">
          			<div className="rounded-xl p-8 bg-white dark:bg-gray-800 shadow-sm dark:shadow-none border border-transparent dark:border-gray-700">
            			<h2 className="text-[18px] font-semibold mb-6 text-slate-900 dark:text-gray-50">
              				{LABELS.sections.powerPlant}
            			</h2>
            
            			<div className="grid grid-cols-2 gap-8">
              				{/* Left: Power Plant Details */}
              				<div className="space-y-5">
                				{/* Power Plant ID Input */}
                				<div>
                  					<div className="text-[14px] font-semibold mb-1.5 text-slate-600 dark:text-gray-300">
                    					{LABELS.fields.powerPlantId}
                  					</div>
                  					<input className="w-full px-3 py-2 text-[14px] font-medium rounded-md transition-colors outline-none bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-900 dark:text-gray-200"
                    					type="text"
                    					value={powerPlantId}
                    					onChange={(e) => setPowerPlantId(e.target.value)}/>
                				</div>
                
                				{/* Power Plant Name Input */}
                				<div>
                  					<div className="text-[14px] font-semibold mb-1.5 flex items-center gap-1 text-slate-600 dark:text-gray-300">
                    					<span>{LABELS.fields.powerPlantName}</span>
                    					<span className="text-[#d8442c] text-[14px]">*</span>
                  					</div>
                  					<input className="w-full px-3 py-2 text-[14px] font-semibold rounded-md transition-colors outline-none bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-900 dark:text-gray-50"
                    					type="text"
                    					value={powerPlantName}
                    					onChange={(e) => setPowerPlantName(e.target.value)} />
                				</div>
                
                				{/* Address Field with Search Button */}
                				<div>
                  					<div className="text-[14px] font-semibold mb-1.5 flex items-center gap-1 text-slate-600 dark:text-gray-300">
                    					<span>{LABELS.fields.powerPlantAddress}</span>
                    					<span className="text-[#d8442c] text-[14px]">*</span>
                  					</div>
                  					<div className="px-3 py-2 text-[14px] font-medium rounded-md cursor-pointer transition-all leading-[1.5] bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-900 dark:text-gray-100 hover:border-[#243c84]"
                    					onClick={() => setShowAddressModal(true)}>
                    					{powerPlantAddress || '주소를 검색하세요'}
                  					</div>
                				</div>

                				{/* Detail Address Input */}
                				<div>
                  					<div className="text-[14px] font-semibold mb-1.5 flex items-center gap-1 text-slate-600 dark:text-gray-300">
                    					<span>{LABELS.fields.powerPlantDetail}</span>
                    					<span className="text-[#d8442c] text-[14px]">*</span>
                  					</div>
                  					<input className="w-full px-3 py-2 text-[14px] font-medium rounded-md transition-colors outline-none bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-900 dark:text-gray-200"
                    					type="text"
                    					value={powerPlantDetailAddress}
                    					onChange={(e) => setPowerPlantDetailAddress(e.target.value)}
                    					placeholder="상세 주소를 입력하세요" />
                				</div>
                
                				{/* Generation Type Dropdown */}
                				<div>
                  					<div className="text-[14px] font-medium mb-1.5 text-slate-600 dark:text-gray-400">
                    					{LABELS.fields.generationType}
                  					</div>
                  					<select className="w-full px-3 py-2 text-[14px] font-medium rounded-md transition-colors outline-none bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-900 dark:text-gray-200"
                    					value={generationType}
                    					onChange={(e) => setGenerationType(e.target.value)}>
                    					<option value="태양광">태양광</option>
                    					<option value="풍력">풍력</option>
                    					<option value="수력">수력</option>
                    					<option value="화력">화력</option>
                  					</select>
                				</div>
                
                				{/* Installation Type Dropdown */}
                				<div>
                  					<div className="text-[14px] font-medium mb-1.5 text-slate-600 dark:text-gray-400">
                    					{LABELS.fields.installationType}
                  					</div>
                  					<select className="w-full px-3 py-2 text-[14px] font-medium rounded-md transition-colors outline-none bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-900 dark:text-gray-200"
                    					value={selectedInstallationType}
                    					onChange={(e) => {
                      						setSelectedInstallationType(e.target.value);
                      						const selectedType = projectData.powerPlant.installationTypes.find(t => t.location === e.target.value);
                      						if (selectedType) {
                        						setInstallationCapacity(selectedType.capacity);
                      						}
                    					}}>
                    					{projectData.powerPlant.installationTypes.map((type, index) => (
                      						<option key={index} value={type.location}>
                        						{type.location}
                      						</option>
                    					))}
                  					</select>
                				</div>

                				{/* Capacity Display */}
                				<div>
                  					<div className="text-[14px] font-semibold mb-1.5 text-slate-600 dark:text-gray-300">
                    					{LABELS.fields.capacity}
                  					</div>
                  					<div className="flex items-center gap-2">
                    					<input className="flex-1 px-3 py-2 text-[14px] font-medium rounded-md transition-colors outline-none bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-900 dark:text-gray-200"
                      						type="number"
                      						value={installationCapacity}
                      						onChange={(e) => setInstallationCapacity(e.target.value)}
                      						step="0.001" />
                    					<span className="text-[14px] font-medium text-slate-600 dark:text-gray-400">
                      						kW
                    					</span>
                  					</div>
                				</div>
              				</div>

              				{/* Right: Linked Projects */}
              				<div>
                				<div className="text-[14px] font-semibold mb-3 text-slate-700 dark:text-gray-300">
                  					발전소 {LABELS.linkedProjects}
                				</div>
                				<div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                  					<table className="w-full">
                    					<thead>
                      						<tr className="bg-slate-50 dark:bg-gray-900">
                        						<th className="text-left px-4 py-3 text-[14px] font-semibold text-slate-600 dark:text-gray-400">
                          							프로젝트명
                        						</th>
                        						<th className="text-left px-4 py-3 text-[14px] font-semibold text-slate-600 dark:text-gray-400">
                          							접수일자
                        						</th>
                        						<th className="text-left px-4 py-3 text-[14px] font-semibold text-slate-600 dark:text-gray-400">
                          							영업사
                        						</th>
                      						</tr>
                    					</thead>
                    					<tbody>
                      						{projectData.linkedProjects.map((project, index) => (
                        						<tr className="transition-colors cursor-pointer bg-white dark:bg-gray-800 border-t border-slate-100 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-900"
                          							key={index}>
                          							<td className="px-4 py-3 text-[14px] font-medium text-slate-900 dark:text-gray-200">
                            							{project.projectName}
                          							</td>
                          							<td className="px-4 py-3 text-[14px] text-slate-600 dark:text-gray-400">
                            							{project.receiptDate}
                          							</td>
                          							<td className="px-4 py-3 text-[14px] text-slate-600 dark:text-gray-400">
                            							{project.salesCompany}
                          							</td>
                        						</tr>
                      						))}
                    					</tbody>
                  					</table>
                				</div>
              				</div>
            			</div>
          			</div>
        		</div>

        		{/* Card 4: 프로젝트 관계사 */}
        		<div className="mb-6">
          			<div className="bg-white dark:bg-gray-800 shadow-sm dark:shadow-none border border-transparent dark:border-gray-700 rounded-xl pt-8 pb-8 px-8">
            			<div className="flex items-center justify-between mb-6">
              				<h2 className="text-[18px] font-semibold text-slate-900 dark:text-gray-50">
                				{LABELS.sections.stakeholders}
              				</h2>
            			</div>
            
            			<div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-visible mb-6">
              				<table className="w-full rounded-lg">
                				<thead>
                  					<tr className="bg-slate-50 dark:bg-gray-900 h-12">
                    					<th className="text-left px-5 text-[14px] font-semibold text-slate-600 dark:text-gray-400">
                      						{LABELS.stakeholdersTable.role}
                    					</th>
                    					<th className="text-left px-5 text-[14px] font-semibold text-slate-600 dark:text-gray-400">
                      						{LABELS.stakeholdersTable.company}
                    					</th>
                    					<th className="text-left px-5 text-[14px] font-semibold text-slate-600 dark:text-gray-400">
                      						{LABELS.stakeholdersTable.representative}
                    					</th>
                    					<th className="text-left px-5 text-[14px] font-semibold text-slate-600 dark:text-gray-400">
                      						{LABELS.stakeholdersTable.capabilities}
                    					</th>
                    					<th className="text-left px-5 text-[14px] font-semibold text-slate-600 dark:text-gray-400">
                      						{LABELS.stakeholdersTable.note}
                    					</th>
                  					</tr>
                				</thead>
                				<tbody>
                  					{stakeholders.map((stakeholder, index) => (
                    					<tr className="transition-colors bg-white dark:bg-gray-800 border-t border-slate-100 dark:border-gray-700 h-14 hover:bg-slate-50 dark:hover:bg-gray-900"
                      						key={stakeholder.id}>
                      						<td className="px-5 text-[14px] text-slate-600 dark:text-gray-400">
                        						{stakeholder.role}
                      						</td>
                      						<td className="px-5 text-[14px] font-semibold text-slate-900 dark:text-gray-200">
                        						{stakeholder.companyName}
                      						</td>
                      						<td className="px-5 text-[14px] font-semibold text-slate-900 dark:text-gray-200">
                        						{stakeholder.representative}
                      						</td>
                      						<td className="px-5 text-[14px] font-semibold text-slate-900 dark:text-gray-200">
                        						{stakeholder.capabilities}
                      						</td>
                      						<td className="px-5 text-[14px] font-semibold text-slate-900 dark:text-gray-200">
                        						{stakeholder.note}
                      						</td>
                    					</tr>
                  					))}
                  
                  					{/* 회사 검색 Row */}
                  					<tr className="bg-white dark:bg-gray-800 border-t border-slate-100 dark:border-gray-700 h-14">
                    					<td className="px-5 text-[14px] text-slate-600 dark:text-gray-400">
                      						회사 검색
                    					</td>
                    					<td className="px-5 text-[14px] text-slate-900 dark:text-gray-200 relative overflow-visible" colSpan={3}>
                      						<div className="flex items-center gap-3">
                        						<div className="relative flex-1 overflow-visible">
                          							<div className="w-full px-3 py-2 text-[14px] rounded-md cursor-pointer transition-all flex items-center justify-between h-10 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-400 dark:text-gray-400"
                            							onClick={() => setShowCompanyDropdown(!showCompanyDropdown)}>
                            							<span>{newStakeholderCompany || '회사 선택'}</span>
                            							<svg className={`transition-transform duration-200 ${showCompanyDropdown ? 'rotate-180' : 'rotate-0'}`}
                              								width="12" 
                              								height="12" 
                              								viewBox="0 0 12 12" 
                              								fill="none">
                              								<path 
                                								d="M3 4.5L6 7.5L9 4.5" 
                                								stroke="currentColor" 
                                								strokeWidth="1.5" 
                                								strokeLinecap="round" 
                                								strokeLinejoin="round"/>
                            							</svg>
                          							</div>
                          							{showCompanyDropdown && (
                            							<div className="absolute w-full rounded-md overflow-hidden bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 max-h-[200px] overflow-y-auto shadow-lg bottom-full mb-1 z-[9999]">
                              								{companyOptions.map((company, index) => (
                                								<div className="px-3 py-2 text-[14px] cursor-pointer transition-all text-slate-900 dark:text-gray-200 bg-transparent hover:bg-slate-100 dark:hover:bg-gray-600"
                                  									key={index}
                                  									onClick={() => {
                                    									setNewStakeholderCompany(company);
                                    									setShowCompanyDropdown(false);
                                  									}}>
                                  									{company}
                                								</div>
                              								))}
                            							</div>
                          							)}
                        						</div>
                        						<button className="rounded-lg text-[14px] font-medium transition-all bg-transparent border border-[#243c84] text-[#243c84] h-10 px-6 cursor-pointer shrink-0"
                          							onMouseEnter={(e) => {
                            							e.currentTarget.style.backgroundColor = '#f0f2f8';
                          							}}
                          							onMouseLeave={(e) => {
                            							e.currentTarget.style.backgroundColor = 'transparent';
                          							}}>
                          							입력
                        						</button>
                      						</div>
                    					</td>
                    					<td className="px-5 text-[14px] text-slate-600 dark:text-gray-400">
                    					</td>
                  					</tr>
                				</tbody>
              				</table>
            			</div>

            			{/* 프로젝트 정보 수정 버튼 */}
            			<div className="flex justify-end mt-[32px]">
              				<button className="rounded-lg font-semibold transition-all flex items-center justify-center gap-2 w-full bg-[#243c84] text-white border-none h-12 px-8 text-base font-semibold tracking-[-0.2px] cursor-pointer"
                				onMouseEnter={(e) => {
                  					e.currentTarget.style.backgroundColor = '#1e3269';
                				}}
                				onMouseLeave={(e) => {
                  					e.currentTarget.style.backgroundColor = '#243c84';
                				}}
                				onMouseDown={(e) => {
                  					e.currentTarget.style.backgroundColor = '#192954';
                				}}
                				onMouseUp={(e) => {
                  					e.currentTarget.style.backgroundColor = '#1e3269';
                				}}>
                				<Edit2 size={16} />
                				{LABELS.buttons.edit}
              				</button>
            			</div>
          			</div>
        		</div>
      		</div>

      		{/* Mobile Layout */}
      		<div className="md:hidden pb-20">
        		{/* Mobile Card 1: 프로젝트 기초 정보 */}
        		<div className="mb-4">
          			<div className="rounded-xl p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            			<h2 className="text-[16px] font-semibold mb-3 text-slate-900 dark:text-gray-50">
              				{LABELS.sections.projectBasic}
            			</h2>
            			<div>
              				<MobileKeyValue label={LABELS.fields.projectName} value={projectName} />
              				<MobileKeyValue label={LABELS.fields.receiptDate} value={receiptDate} />
              				<MobileKeyValue label={LABELS.fields.salesCompany} value={salesCompany} />
              				<MobileKeyValue label={LABELS.fields.constructionCompany} value={constructionCompany} />
            			</div>
          			</div>
        		</div>

        		{/* Mobile Card 2: 부동산 임대인 정보 */}
        		<div className="mb-4">
          			<div className="rounded-xl p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            			<h2 className="text-[16px] font-semibold mb-3 text-slate-900 dark:text-gray-50">
              				{LABELS.sections.landowner}
            			</h2>
            			<div>
              				<MobileKeyValue label={LABELS.fields.landownerId} value={landownerId} />
              				<MobileKeyValue label={LABELS.fields.landownerName} value={landownerName} />
              				<MobileKeyValue label={LABELS.fields.address} value={landownerAddress} />
              				<MobileKeyValue label={LABELS.fields.detailAddress} value={landownerDetailAddress} />
              				<MobileKeyValue label={LABELS.fields.ownedCount} value={`${ownedCount}명`} />
              				<MobileKeyValue label={LABELS.fields.contactName} value={contactName} />
              				<MobileKeyValue label={LABELS.fields.contactPhone} value={contactPhone} />
            			</div>
          			</div>
        		</div>

        		{/* Mobile Card 3: 임대인 연동 프로젝트 */}
        		<div className="mb-4">
          			<div className="rounded-xl p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            			<h2 className="text-[16px] font-semibold mb-3 text-slate-900 dark:text-gray-50">
              				{LABELS.sections.landownerLinked}
            			</h2>
            			<div className="space-y-3">
              				{projectData.linkedProjects.map((project, index) => (
                				<div className="rounded-lg p-3 bg-slate-50 dark:bg-gray-900 border border-slate-100 dark:border-gray-700"
                  					key={index}>
                  					<div className="text-[15px] font-semibold mb-2 leading-[22px] text-slate-900 dark:text-gray-50">
                    					{project.projectName}
                  					</div>
                  					<div className="flex items-center justify-between text-[12px] leading-[18px]">
                    					<span className="font-medium text-slate-600 dark:text-gray-400">접수일자</span>
                    					<span className="font-normal text-slate-600 dark:text-gray-300">{project.receiptDate}</span>
                  					</div>
                  					<div className="flex items-center justify-between text-[12px] leading-[18px] mt-1">
                    					<span className="font-medium text-slate-600 dark:text-gray-400">영업사</span>
                    					<span className="font-normal text-slate-600 dark:text-gray-300">{project.salesCompany}</span>
                  					</div>
                				</div>
              				))}
            			</div>
          			</div>
        		</div>

        		{/* Mobile Card 4: 발전소 정보 */}
        		<div className="mb-4">
          			<div className="rounded-xl p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            			<h2 className="text-[16px] font-semibold mb-3 text-slate-900 dark:text-gray-50">
              				{LABELS.sections.powerPlant}
            			</h2>
            			<div>
              				<MobileKeyValue label={LABELS.fields.powerPlantId} value={powerPlantId} />
              				<MobileKeyValue label={LABELS.fields.powerPlantName} value={powerPlantName} />
              				<MobileKeyValue label={LABELS.fields.powerPlantAddress} value={powerPlantAddress} />
              				<MobileKeyValue label={LABELS.fields.generationType} value={generationType} />
              				<MobileKeyValue label={LABELS.fields.installationType} value={selectedInstallationType} />
              				<MobileCapacityValue label={LABELS.fields.capacity} value={installationCapacity} unit="kW" />
            			</div>
          			</div>
        		</div>

        		{/* Mobile Card 5: 발전소 연동 프로젝트 */}
        		<div className="mb-4">
          			<div className="rounded-xl p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            			<h2 className="text-[16px] font-semibold mb-3 text-slate-900 dark:text-gray-50">
              				{LABELS.sections.powerPlantLinked}
            			</h2>
            			<div className="space-y-3">
              				{projectData.linkedProjects.map((project, index) => (
                				<div className="rounded-lg p-3 bg-slate-50 dark:bg-gray-900 border border-slate-100 dark:border-gray-700"
                  					key={index}>
                  					<div className="text-[15px] font-semibold mb-2 leading-[22px] text-slate-900 dark:text-gray-50">
                    					{project.projectName}
                  					</div>
                  					<div className="flex items-center justify-between text-[12px] leading-[18px]">
                    					<span className="font-medium text-slate-600 dark:text-gray-400">접수일자</span>
                    					<span className="font-normal text-slate-600 dark:text-gray-300">{project.receiptDate}</span>
                  					</div>
                  					<div className="flex items-center justify-between text-[12px] leading-[18px] mt-1">
                    					<span className="font-medium text-slate-600 dark:text-gray-400">영업사</span>
                    					<span className="font-normal text-slate-600 dark:text-gray-300">{project.salesCompany}</span>
                  					</div>
                				</div>
              				))}
            			</div>
          			</div>
        		</div>

        		{/* Mobile Card 6: 프로젝트 관계사 Summary */}
        		<div className="mb-4">
          			<div className="rounded-xl p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            			<div className="flex items-center justify-between mb-3">
              				<div>
                				<h2 className="text-[16px] font-semibold mb-1 leading-[24px] text-slate-900 dark:text-gray-50">
                  					{LABELS.sections.stakeholders}
                				</h2>
                				<p className="text-[12px] font-medium leading-[18px] text-slate-600 dark:text-gray-400">
                  					총 관계사 {stakeholders.length}개
                				</p>
              				</div>
              				<button className="text-[14px] font-semibold text-[#243c84] bg-transparent border-none cursor-pointer"
                				onClick={() => setShowStakeholdersSheet(true)}>
                				전체 보기
              				</button>
            			</div>
          			</div>
        		</div>
      		</div>

      		{/* Mobile Sticky Button */}
      		<div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 z-50">
        		<button className="w-full rounded-xl font-semibold transition-all flex items-center justify-center gap-2 bg-[#243c84] text-white border-none h-12 text-base font-semibold tracking-[-0.2px] cursor-pointer" 
          			onClick={() => {
            		// Handle edit action
          			}}>
          			<Edit2 size={16} />
          			{LABELS.buttons.edit}
        		</button>
      		</div>

      		{/* Address Search Modal */}
      		{showAddressModal && (
        		<div className="fixed inset-0 flex items-center justify-center z-[70] bg-black/50"
          			onClick={() => setShowAddressModal(false)}>
          			<div className="w-full max-w-lg mx-4 rounded-xl p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            			onClick={(e) => e.stopPropagation()}>
            			<h3 className="text-[20px] font-semibold mb-4 text-slate-900 dark:text-gray-50">
              				주소 검색
            			</h3>
            
            			<input className="w-full px-4 py-3 rounded-lg text-[14px] mb-4 outline-none bg-slate-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-900 dark:text-gray-200"
              				type="text"
              				placeholder="도로명 또는 지번 주소를 입력하세요"/>

            			{/* Sample Address List */}
            			<div className="space-y-2 mb-4 max-h-64 overflow-y-auto">
              				{[
                				'경기도 포천시 소흘읍 광릉수목원로 415',
                				'경기도 포천시 소흘읍 이동교리 705',
                				'경기도 포천시 소흘읍 직동리 123',
                				'경기도 포천시 소흘읍 무봉리 456'
              				].map((addr, index) => (
                				<div className="px-4 py-3 rounded-lg cursor-pointer transition-all text-[14px] bg-slate-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-600"
                  					key={index}
                  					onClick={() => {
                    					setPowerPlantAddress(addr);
                    					setShowAddressModal(false);
                  					}}>
                  					{addr}
                				</div>
              				))}
            			</div>

            			<div className="flex gap-2 justify-end">
              			<button className="px-4 py-2 rounded-lg text-[13px] font-medium transition-all bg-slate-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-600"
                			onClick={() => setShowAddressModal(false)}>
                			닫기
              			</button>
            		</div>
          		</div>
        	</div>
      	)}

      	{/* Landowner Address Search Modal */}
      	{showLandownerAddressModal && (
        	<div className="fixed inset-0 flex items-center justify-center z-[70] bg-black/50"
          		onClick={() => setShowLandownerAddressModal(false)}>
          		<div className="w-full max-w-lg mx-4 rounded-xl p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            		onClick={(e) => e.stopPropagation()}>
            		<h3 className="text-[20px] font-semibold mb-4 text-slate-900 dark:text-gray-50">
              			주소 검색
            		</h3>
            
            		<input className="w-full px-4 py-3 rounded-lg text-[14px] mb-4 outline-none bg-slate-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-900 dark:text-gray-200"
              			type="text"
              			placeholder="도로명 또는 지번 주소를 입력하세요"/>

            		{/* Sample Address List */}
            		<div className="space-y-2 mb-4 max-h-64 overflow-y-auto">
              			{[
                			'경기도 포천시 소흘읍 광릉수목원로 415',
                			'경기도 포천시 소흘읍 이동교리 705',
                			'경기도 포천시 소흘읍 직동리 123',
                			'경기도 포천시 소흘읍 무봉리 456'
              			].map((addr, index) => (
                			<div className="px-4 py-3 rounded-lg cursor-pointer transition-all text-[14px] bg-slate-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-600"
                  				key={index}
                  				onClick={() => {
                    				setLandownerAddress(addr);
                    				setShowLandownerAddressModal(false);
                  				}}>
                  				{addr}
                			</div>
              			))}
            		</div>

            		<div className="flex gap-2 justify-end">
              			<button className="px-4 py-2 rounded-lg text-[13px] font-medium transition-all bg-slate-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-600"
                			onClick={() => setShowLandownerAddressModal(false)}>
                			닫기
              			</button>
            		</div>
          		</div>
        	</div>
      	)}

      	{/* Mobile Stakeholders Bottom Sheet */}
      	{showStakeholdersSheet && (
        	<div className="md:hidden fixed inset-0 z-[80] bg-black/50"
          		onClick={() => setShowStakeholdersSheet(false)}>
          		<div className="fixed bottom-0 left-0 right-0 rounded-t-2xl max-h-[85vh] flex flex-col bg-white dark:bg-gray-800 transition-transform duration-300 ease-out translate-y-0"
            		onClick={(e) => e.stopPropagation()}>
            		{/* Sheet Header */}
            		<div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              			<div>
                			<h3 className="text-[16px] font-semibold leading-[24px] text-slate-900 dark:text-gray-50">
                  				{LABELS.sections.stakeholders}
                			</h3>
                			<p className="text-[12px] font-medium mt-1 leading-[18px] text-slate-600 dark:text-gray-400">
                  				총 {stakeholders.length}개
                			</p>
              			</div>
              			<button className="text-[24px] w-8 h-8 flex items-center justify-center text-slate-600 dark:text-gray-400 bg-transparent border-none cursor-pointer"
                			onClick={() => setShowStakeholdersSheet(false)}>
                			×
              			</button>
            		</div>

            		{/* Add Button */}
            		<div className="p-4 border-b border-gray-200 dark:border-gray-700">
              			<button className="w-full rounded-lg font-medium transition-all flex items-center justify-center gap-2 bg-[#243c84] text-white border-none h-11 text-sm cursor-pointer"
                			onClick={() => {
                  				setShowStakeholdersSheet(false);
                  				setShowAddStakeholderSheet(true);
                			}}>
                			<span className="text-lg font-semibold">+</span>
                				관계사 추가
              			</button>
            		</div>

            		{/* Stakeholders List */}
            		<div className="flex-1 overflow-y-auto p-4 space-y-3">
              			{stakeholders.map((stakeholder) => (
                			<div className="rounded-lg p-4 bg-slate-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
                  				key={stakeholder.id} >
                  				<div className="text-[12px] font-medium mb-2 leading-[18px] text-slate-600 dark:text-gray-400">
                    				{stakeholder.role}
                  				</div>
                  				<div className="text-[15px] font-semibold mb-3 leading-[22px] text-slate-900 dark:text-gray-50">
                    				{stakeholder.companyName}
                  				</div>
                  				<div className="space-y-1">
                    				<div className="text-[12px] font-normal leading-[18px] text-slate-600 dark:text-gray-300">
                      					<span className="font-medium text-slate-600 dark:text-gray-400">대표자: </span>
                      					{stakeholder.representative}
                    				</div>
                    				<div className="text-[12px] font-normal leading-[18px] text-slate-600 dark:text-gray-300">
                      					<span className="font-medium text-slate-600 dark:text-gray-400">보유 역할: </span>
                      					{stakeholder.capabilities}
                    				</div>
                    				{stakeholder.note && (
                      					<div className="text-[12px] font-normal leading-[18px] text-slate-600 dark:text-gray-300">
                        					<span className="font-medium text-slate-600 dark:text-gray-400">비고: </span>
                        					{stakeholder.note}
                      					</div>
                    				)}
                  				</div>
                			</div>
              			))}
            		</div>
          		</div>
        	</div>
      	)}

      	{/* Mobile Add Stakeholder Bottom Sheet */}
      	{showAddStakeholderSheet && (
        	<div className="md:hidden fixed inset-0 z-[80] bg-black/50"
          		onClick={() => setShowAddStakeholderSheet(false)}>
          		<div className="fixed bottom-0 left-0 right-0 rounded-t-2xl max-h-[85vh] flex flex-col bg-white dark:bg-gray-800 transition-transform duration-300 ease-out translate-y-0"
            		onClick={(e) => e.stopPropagation()}>
            		{/* Sheet Header */}
            		<div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              			<h3 className="text-[16px] font-semibold leading-[24px] text-slate-900 dark:text-gray-50">
                			관계사 추가
              			</h3>
              			<button className="text-[24px] w-8 h-8 flex items-center justify-center text-slate-600 dark:text-gray-400 bg-transparent border-none cursor-pointer"
                			onClick={() => setShowAddStakeholderSheet(false)}>
                			×
              			</button>
            		</div>

            		{/* Add Form */}
            		<div className="flex-1 overflow-y-auto p-4 space-y-4">
              			{/* 회사 검색 */}
              			<div>
                			<label className="text-[12px] font-medium mb-2 block leading-[18px] text-slate-600 dark:text-gray-400">
                  				회사 검색
                			</label>
                			<div className="relative">
                  			<div className={`w-full px-3 py-3 text-[14px] rounded-lg cursor-pointer transition-all flex items-center justify-between bg-[#f8fafc] dark:bg-[#374151] border border-[#e5e7eb] dark: border-[#4b5563] ${ newStakeholderCompany ? 'text-[#0f172a] dark:text-[#f9fafb]' : 'text-[#9ca3af] dark:text-[#6b7280]' }`}
                    			onClick={() => setShowCompanyDropdown(!showCompanyDropdown)}>
                    			<span>{newStakeholderCompany || '회사 선택'}</span>
                    			<svg className={`transition-transform duration-200 ${ showCompanyDropdown ? 'rotate-180' : 'rotate-0'  }`}
                      				width="12" 
                      				height="12" 
                      				viewBox="0 0 12 12" 
                      				fill="none" >
                      				<path 
                        				d="M3 4.5L6 7.5L9 4.5" 
                        				stroke="currentColor" 
                        				strokeWidth="1.5" 
                        				strokeLinecap="round" 
                        				strokeLinejoin="round"/>
                    			</svg>
                  			</div>
                  			{showCompanyDropdown && (
                    			<div className="absolute w-full rounded-lg overflow-hidden mt-2 z-10 max-h-[200px] overflow-y-auto shadow-md bg-[#ffffff] dark:bg-[#374151] border border-[#e5e7eb] dark:border-[#4b5563]">
                      				{companyOptions.map((company, index) => (
                        				<div className="px-3 py-3 text-[14px] cursor-pointer transition-all bg-transparent text-[#1e293b] dark:text-[#e5e7eb] hover:bg-[#f1f5f9] hover:dark:bg-[#4b5563]"
                        					key={index}
                                  			onClick={() => {
                                    			setNewStakeholderCompany(company);
                                    			setShowCompanyDropdown(false);
                                  			}}>
                          					{company}
                        				</div>
                      				))}
                    			</div>
                  			)}
                		</div>
              		</div>

              		{/* 역할 구분 */}
              		<div>
                		<label className="text-[12px] font-medium mb-2 block leading-[18px] text-[#64748b] dark:text-[#9ca3af]">
                  			역할 구분
                		</label>
                		<input className="w-full px-3 py-3 text-[14px] font-normal rounded-lg leading-[1.5] bg-[#f8fafc] dark:bg-[#374151] border border-[#e5e7eb] dark:border-[#4b5563] text-[#0f172a] dark:text-[#f9fafb] outline-none"
                  			type="text"
                  			value={newStakeholderRole}
                  			onChange={(e) => setNewStakeholderRole(e.target.value)}
                  			placeholder="역할을 입력하세요"/>
              		</div>

              		{/* 대표자명 */}
              		<div>
                		<label className="text-[12px] font-medium mb-2 block leading-[18px] text-[#64748b] dark:text-[#9ca3af]">
                  			대표자명
                		</label>
                		<input className="w-full px-3 py-3 text-[14px] font-normal rounded-lg leading-[1.5] bg-[#f8fafc] dark:bg-[#374151] border border-[#e5e7eb] dark:border-[#4b5563] text-[#0f172a] dark:text-[#f9fafb] outline-none"
                  			type="text"
                  			value={newStakeholderRepresentative}
                  			onChange={(e) => setNewStakeholderRepresentative(e.target.value)}
                  			placeholder="대표자명을 입력하세요"/>
              		</div>

              		{/* 보유 역할 */}
              		<div>
                		<label className="text-[12px] font-medium mb-2 block leading-[18px] text-[#64748b] dark:text-[#9ca3af]">
                  			보유 역할
                		</label>
                		<input className="w-full px-3 py-3 text-[14px] font-normal rounded-lg leading-[1.5] bg-[#f8fafc] dark:bg-[#374151] border border-[#e5e7eb] dark:border-[#4b5563] text-[#0f172a] dark:text-[#f9fafb] outline-none"
                  			type="text"
                  			value={newStakeholderCapabilities}
                  			onChange={(e) => setNewStakeholderCapabilities(e.target.value)}
                  			placeholder="보유 역할을 입력하세요"/>
              		</div>

              		{/* 비고 */}
              		<div>
                		<label className="text-[12px] font-medium mb-2 block leading-[18px] text-[#64748b] dark:text-[#9ca3af]">
                  			비고
                		</label>
                		<textarea className="w-full px-3 py-3 text-[14px] font-normal rounded-lg resize-none leading-[1.5] bg-[#f8fafc] dark:bg-[#374151] border border-[#e5e7eb] dark:border-[#4b5563] text-[#0f172a] dark:text-[#f9fafb] outline-none"
                  			value={newStakeholderNote}
                  			onChange={(e) => setNewStakeholderNote(e.target.value)}
                  			placeholder="비고를 입력하세요"
                  			rows={3}/>
              		</div>
            	</div>

            	{/* Bottom Actions */}
            	<div className="p-4 border-t flex gap-3 border-[#e5e7eb] dark:border-[#374151]">
              		<button className="flex-1 rounded-lg font-medium transition-all bg-[#f1f5f9] dark:bg-[#374151] text-[#475569] dark:text-[#d1d5db] h-12 border-none text-sm cursor-pointer"
                		onClick={() => setShowAddStakeholderSheet(false)}>
                		취소
              		</button>
              		<button className="flex-1 rounded-lg font-semibold transition-all h-12 border-none bg-[#243c84] text-sm text-white cursor-pointer"
                		onClick={() => {
                  			// Handle add stakeholder
                  			setShowAddStakeholderSheet(false);
                  			setShowStakeholdersSheet(true);
                		}}>
                		추가
              		</button>
            	</div>
          	</div>
        </div>
    	)}

      	{/* Mobile Scroll to Top Button */}
      	{showScrollTop && (
        	<button className="md:hidden fixed bottom-24 right-4 w-12 h-12 rounded-full flex items-center justify-center transition-all z-[70] bg-white text-[#243c84] border-2 border-[#243c84] shadow-md cursor-pointer"
          		onClick={scrollToTop}>
          		<ArrowUp size={20} strokeWidth={2.5} />
        	</button>
      	)}
		</div>
	);
}