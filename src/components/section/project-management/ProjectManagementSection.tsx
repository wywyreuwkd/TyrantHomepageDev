"use client"

import Link from "next/link";
import { Check, Home, ChevronRight, Send, Paperclip, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const LABELS = {
	pageTitle: '프로젝트 진행관리',
  	pageSubtitle: '프로젝트 진행 현황 및 정보를 관리합니다',
  	breadcrumb: {
    	home: '홈',
    	projectList: '프로젝트 목록',
    	current: '프로젝트 진행관리'
  	},
  	summary: {
    	title: '프로젝트 상세 정보',
    	projectName: '프로젝트명',
    	date: '접수일자',
    	consulting: '컨설팅사',
    	epc: 'EPC사'
  	},
  	landlord: {
	    title: '부동산 임대인 상세정보',
    	id: '임대인 ID',
    	name: '임대인 이름',
    	ownerCount: '소유자 수',
    	address: '임대부동산 주소',
    	managerName: '담당자 이름',
    	managerPhone: '담당자 연락처',
    	note: '참고사항'
  	},
  	powerPlant: {
    	title: '발전소 상세정보',
    	id: '발전소 ID',
    	name: '발전소 이름',
    	address: '발전소 주소',
    	type: '발전 유형',
    	location: '설치 위치',
    	expectedCapacity: '예상설치용량',
    	actualCapacity: '실제설치용량'
  	},
  	progress: {
    	title: '프로젝트 진행상황',
    	stages: [
      		{ 
        		id: 1, 
        		name: '신규접수',
        		statuses: [
          			{ value: 'pending', label: '접수전' },
          			{ value: 'progress', label: '접수중' },
          			{ value: 'complete', label: '접수완료' }
        		],
        		actions: ['접수 개시', '접수 완료', '접수 거절']
      		},
      		{ 
        		id: 2, 
        		name: '시공사 배정',
        		statuses: [
          			{ value: 'pending', label: '배정전' },
          			{ value: 'progress', label: '배정중' },
          			{ value: 'complete', label: '배정완료' }
        		],
        		actions: ['배정 개시', '배정 완료', '배정 거절'],
        		hasContractorSelection: true
      		},
      		{ 
        		id: 3, 
        		name: '사전검토',
        		statuses: [
          			{ value: 'pending', label: '검토전' },
          			{ value: 'progress', label: '검토중' },
          			{ value: 'complete', label: '검토완료' }
        		],
        		actions: ['검토 개시', '검토 완료', '검토 거절']
      		},
      		{ 
        		id: 4, 
        		name: '실사',
        		statuses: [
          			{ value: 'pending', label: '실사전' },
          			{ value: 'progress', label: '실사중' },
          			{ value: 'complete', label: '실사완료' }
        		],
        		actions: ['실사 개시', '실사 완료', '실사 거절']
      		},
      		{ 
        		id: 5, 
        		name: '발전사업허가 접수요청',
        		statuses: [
          			{ value: 'pending', label: '요청전' },
          			{ value: 'progress', label: '검토중' },
          			{ value: 'complete', label: '검토완료' }
        		],
        		actions: ['요청 개시', '요청 완료', '요청 거절']
      		},
      		{ 
        		id: 6, 
        		name: '발전사업허가',
        		statuses: [
          			{ value: 'pending', label: '접수전' },
          			{ value: 'progress', label: '진행중' },
          			{ value: 'complete', label: '진행완료' }
        		],
        		actions: ['허가 개시', '허가 완료', '허가 거절']
      		},
      		{ 
        		id: 7, 
        		name: '구조안전진단',
        		statuses: [
          			{ value: 'pending', label: '진단전' },
          			{ value: 'progress', label: '진단중' },
          			{ value: 'complete', label: '진단완료' }
        		],
        		actions: ['진단 개시', '진단 완료', '진단 거절']
      		},
      		{ 
        		id: 8, 
        		name: '개발행위허가',
        		statuses: [
          			{ value: 'pending', label: '접수전' },
          			{ value: 'progress', label: '접수중' },
          			{ value: 'complete', label: '진행완료' }
        		],
        		actions: ['허가 개시', '허가 완료', '허가 거절']
      		},
      		{ 
        		id: 9, 
        		name: 'PF요청승인',
        		statuses: [
          			{ value: 'pending', label: '요청전' },
          			{ value: 'progress', label: '진행중' },
          			{ value: 'complete', label: '진행완료' }
        		],
        		actions: ['승인 개시', '승인 완료', '승인 거절']
      		},
      		{ 
        		id: 10, 
        		name: 'NTP',
        		statuses: [
          			{ value: 'pending', label: '요청전' },
          			{ value: 'progress', label: '진행중' },
          			{ value: 'complete', label: '진행완료' }
        		],
        		actions: ['NTP 개시', 'NTP 완료', 'NTP 거절']
      		},
      		{ 
        		id: 11, 
        		name: '시공',
        		statuses: [
          			{ value: 'pending', label: '시공전' },
          			{ value: 'progress', label: '시공중' },
          			{ value: 'complete', label: '시공완료' }
        		],
        		actions: ['시공 개시', '시공 완료', '시공 거절']
      		},
      		{ 
        		id: 12, 
        		name: '사용전검사',
        		statuses: [
          			{ value: 'pending', label: '검사전' },
          			{ value: 'progress', label: '검사중' },
          			{ value: 'complete', label: '검사완료' }
        		],
        		actions: ['검사 개시', '검사 완료', '검사 거절']
      		},
      		{ 
        		id: 13, 
        		name: 'REC설비확인',
        		statuses: [
          			{ value: 'pending', label: '확인전' },
          			{ value: 'progress', label: '확인중' },
          			{ value: 'complete', label: '확인완료' }
        		],
        		actions: ['확인 개시', '확인 완료', '확인 거절']
      		},
      		{ 
        		id: 14, 
        		name: '운영',
        		statuses: [
          			{ value: 'pending', label: '개시전' },
          			{ value: 'progress', label: '준비중' },
          			{ value: 'complete', label: '준비완료' }
        		],
        		actions: ['운영 개시', '운영 완료', '운영 종료']
      		}
    	],
    	statusColors: {
      		pending: { color: '#6b7280', bgColor: '#ffffff', borderColor: '#d1d5db' },
      		progress: { color: '#92400e', bgColor: '#fef3c7', borderColor: '#fde68a' },
      		complete: { color: '#ffffff', bgColor: '#243c84', borderColor: '#243c84' }
    	},
    	statusChange: '상태 변경',
    	noteSection: '진행 노트',
    	notePlaceholder: '메시지 입력',
    	sendMessage: '메시지 발송',
    	attachSection: '첨부 파일',
    	fileNamePlaceholder: '파일명',
    	attachFile: '파일 첨부',
    	registerFile: '파일 등록',
    	close: '닫기',
    	delete: '삭제',
    	edit: '수정',
    	lastUpdated: '마지막 업데이트'
  	}
};

export function ProjectManagementSection() {
	const [stageStatuses, setStageStatuses] = useState<{ [key: number]: string }>({
    	1: "progress",
    	2: "progress",
    	3: "pending",
    	4: "pending",
    	5: "complete",
    	6: "pending",
    	7: "pending",
    	8: "pending",
    	9: "pending",
    	10: "pending",
    	11: "pending",
    	12: "pending",
    	13: "pending",
    	14: "pending"
  	});

  	const [expandedStage, setExpandedStage] = useState<number | null>(null);
  	const [stageNotes, setStageNotes] = useState<{ [key: number]: string }>({});
  	const [stageFiles, setStageFiles] = useState<{ [key: number]: string[] }>({});
  	const [stageFileNames, setStageFileNames] = useState<{ [key: number]: string }>({});
  	const [showStatusDropdown, setShowStatusDropdown] = useState<number | null>(null);
  	const [stageNoteExpanded, setStageNoteExpanded] = useState<{ [key: number]: boolean }>({});
  	const [stageFileExpanded, setStageFileExpanded] = useState<{ [key: number]: boolean }>({});
  	const [stageDecisionExpanded, setStageDecisionExpanded] = useState<{ [key: number]: boolean }>({});
  	const [selectedContractor, setSelectedContractor] = useState<string>('');

  	// 프로젝트 기본 정보 상태
  	const [projectName, setProjectName] = useState<string>('산전마을1단지');
  	const [projectDate, setProjectDate] = useState<string>('2025-01-05');
  	const [consultingCompany, setConsultingCompany] = useState<string>('타이런트(SALES)');
  	const [epcCompany, setEpcCompany] = useState<string>('');

  	// 부동산 임대인 상세정보 상태
  	const [landlordId, setLandlordId] = useState<string>('LL-2025-001');
  	const [landlordName, setLandlordName] = useState<string>('김철수');
  	const [ownerCount, setOwnerCount] = useState<string>('1명');
  	const [landlordAddress, setLandlordAddress] = useState<string>('경기 화성시 서신면 전곡리 56');
  	const [managerName, setManagerName] = useState<string>('김철수');
  	const [managerPhone, setManagerPhone] = useState<string>('010-1234-5678');
  	const [landlordNote, setLandlordNote] = useState<string>('특이사항 없음');

  	// 발전소 상세정보 상태
  	const [powerPlantId, setPowerPlantId] = useState<string>('PP-2025-001');
  	const [powerPlantName, setPowerPlantName] = useState<string>('산전마을1단지 발전소');
  	const [powerPlantAddress, setPowerPlantAddress] = useState<string>('경기 화성시 서신면 전곡리 56');
  	const [powerPlantType, setPowerPlantType] = useState<string>('태양광');
  	const [powerPlantLocation, setPowerPlantLocation] = useState<string>('지붕');
  	const [expectedCapacity, setExpectedCapacity] = useState<string>('379.73 kW');
  	const [actualCapacity, setActualCapacity] = useState<string>('0 kW');

  	const handleStatusChange = (stageId: number, status: string) => {
    	setStageStatuses(prev => ({
      		...prev,
      		[stageId]: status
    	}));
    	setShowStatusDropdown(null);
  	};

  	const toggleStage = (stageId: number) => {
    	setExpandedStage(expandedStage === stageId ? null : stageId);
  	};

  	const handleNoteChange = (stageId: number, value: string) => {
    	setStageNotes(prev => ({
      		...prev,
      		[stageId]: value
    	}));
  	};

  	const handleFileAdd = (stageId: number, fileName: string) => {
    	setStageFiles(prev => ({
      		...prev,
      		[stageId]: [...(prev[stageId] || []), fileName]
    	}));
    	setStageFileNames(prev => ({
      		...prev,
      		[stageId]: fileName
    	}));
  	};

  	const handleFileRemove = (stageId: number, fileName: string) => {
    	setStageFiles(prev => ({
      		...prev,
      		[stageId]: (prev[stageId] || []).filter(f => f !== fileName)
    	}));
    	setStageFileNames(prev => ({
      		...prev,
      		[stageId]: ''
    	}));
  	};

  	const getStatusConfig = (value: string) => {
  		if (value === "pending") {
  			return LABELS.progress.statusColors["pending"]
  		} else if (value === "progress") {
			return LABELS.progress.statusColors["progress"]
  		} else if (value === "complete") {
  			return LABELS.progress.statusColors["complete"]
  		} else {
  			return LABELS.progress.statusColors["pending"]
  		}  	
  	};

  	const getStageStatusLabel = (stageId: number) => {
    	const stage = LABELS.progress.stages.find(s => s.id === stageId);
    	const statusValue = stageStatuses[stageId];
    	if (!stage) return '';
    	const status = stage.statuses.find(s => s.value === statusValue);
    	return status?.label || '';
  	};

  	return (
  		<div>
  			{/* 24px 간격으로 카드 배치 */}
      		<div className="flex flex-col gap-6">
        		{/* Summary Card */}
        		<div className="rounded-[10px] p-5 border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          			<h3 className="text-[18px] font-semibold mb-5 text-gray-900 dark:text-gray-50">
            			{LABELS.summary.title}
          			</h3>
          			<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            			<div>
              				<div className="text-[13px] font-medium mb-2 text-slate-600 dark:text-gray-400">
                				{LABELS.summary.projectName}
              				</div>
              				<input className="w-full px-3 py-2 rounded-lg text-base font-semibold border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-slate-900 dark:text-gray-50"
                				type="text"
                				value={projectName}
                				onChange={(e) => setProjectName(e.target.value)}/>
            			</div>
            			<div>
              				<div className="text-[13px] font-medium mb-2 text-slate-600 dark:text-gray-400">
                				{LABELS.summary.date}
              				</div>
              				<input className="w-full px-3 py-2 rounded-lg text-base font-semibold border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-slate-900 dark:text-gray-50"
                				type="date"
                				value={projectDate}
                				onChange={(e) => setProjectDate(e.target.value)}/>
            			</div>
            			<div>
              				<div className="text-[13px] font-medium mb-2 text-slate-600 dark:text-gray-400">
                				{LABELS.summary.consulting}
              				</div>
              				<input className="w-full px-3 py-2 rounded-lg text-base font-semibold border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-slate-900 dark:text-gray-50"
                				type="text"
                				value={consultingCompany}
                				onChange={(e) => setConsultingCompany(e.target.value)}/>
            			</div>
            			<div>
              				<div className="text-[13px] font-medium mb-2 text-slate-600 dark:text-gray-400">
                				{LABELS.summary.epc}
              				</div>
              				<input className="w-full px-3 py-2 rounded-lg text-base border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-slate-400 dark:text-gray-500"
                				type="text"
                				value={epcCompany}
                				onChange={(e) => setEpcCompany(e.target.value)}
                				placeholder="-" />
            			</div>
          			</div>
        		</div>

        		{/* Detail Information Grid */}
        		<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          			{/* Landlord Info */}
          			<div className="rounded-[10px] p-5 border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            			<h3 className="text-[18px] font-semibold mb-5 text-gray-900 dark:text-gray-50">
              				{LABELS.landlord.title}
            			</h3>
            
            			<div className="space-y-4">
              				<div>
                				<div className="text-[13px] font-medium mb-1.5 text-slate-600 dark:text-gray-400">
                  					{LABELS.landlord.id}
                				</div>
                				<input className="w-full px-3 py-2 rounded-lg text-[14px] border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-300 dark:text-gray-300"
                  					type="text"
                  					value={landlordId}
                  					onChange={(e) => setLandlordId(e.target.value)}/>
              				</div>
              				<div>
                				<div className="text-[13px] font-medium mb-1.5 text-slate-600 dark:text-gray-400">
                  					{LABELS.landlord.name}
                				</div>
                				<input className="w-full px-3 py-2 rounded-lg text-[14px] border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-300 dark:text-gray-300"
                  					type="text"
                  					value={landlordName}
                  					onChange={(e) => setLandlordName(e.target.value)}/>
              				</div>
              				<div>
                				<div className="text-[13px] font-medium mb-1.5 text-slate-600 dark:text-gray-400">
                  					{LABELS.landlord.ownerCount}
                				</div>
                				<input className="w-full px-3 py-2 rounded-lg text-[14px] border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-300 dark:text-gray-300"
                  					type="text"
                  					value={ownerCount}
                  					onChange={(e) => setOwnerCount(e.target.value)}/>
              				</div>
              				<div>
                				<div className="text-[13px] font-medium mb-1.5 text-slate-600 dark:text-gray-400">
                  					{LABELS.landlord.address}
                				</div>
                				<input className="w-full px-3 py-2 rounded-lg text-[14px] border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-300 dark:text-gray-300"
                  					type="text"
                  					value={landlordAddress}
                  					onChange={(e) => setLandlordAddress(e.target.value)}/>
              				</div>
              				<div>
                				<div className="text-[13px] font-medium mb-1.5 text-slate-600 dark:text-gray-400">
                  					{LABELS.landlord.managerName}
                				</div>
                				<input className="w-full px-3 py-2 rounded-lg text-[14px] border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-300 dark:text-gray-300"
                  					type="text"
                  					value={managerName}
                  					onChange={(e) => setManagerName(e.target.value)}/>
              				</div>
              				<div>
                				<div className="text-[13px] font-medium mb-1.5 text-slate-600 dark:text-gray-400">
                  					{LABELS.landlord.managerPhone}
                				</div>
                				<input className="w-full px-3 py-2 rounded-lg text-[14px] border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-300 dark:text-gray-300"
                  					type="tel"
                  					value={managerPhone}
                  					onChange={(e) => setManagerPhone(e.target.value)}/>
              				</div>
              				<div>
                				<div className="text-[13px] font-medium mb-1.5 text-slate-600 dark:text-gray-400">
                  					{LABELS.landlord.note}
                				</div> 
                				<textarea className="w-full px-3 py-2 rounded-lg text-[14px] resize-none border bg-slate-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-slate-600 dark:text-gray-400"
                  					value={landlordNote}
                  					onChange={(e) => setLandlordNote(e.target.value)}                  
                  					rows={2}/>
              				</div>
            			</div>
          			</div>

          			{/* Power Plant Info */}
          			<div className="rounded-[10px] p-5 border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            			<h3 className="text-[18px] font-semibold mb-5 text-gray-900 dark:text-gray-50">
              				{LABELS.powerPlant.title}
            			</h3>
            
            			<div className="space-y-4">
              				<div>
                				<div className="text-[13px] font-medium mb-1.5 text-slate-600 dark:text-gray-400">
                  					{LABELS.powerPlant.id}
                				</div>
                				<input className="w-full px-3 py-2 rounded-lg text-[14px] border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-300 dark:text-gray-300"
                  					type="text"
                  					value={powerPlantId}
                  					onChange={(e) => setPowerPlantId(e.target.value)}/>
              				</div>
              				<div>
                				<div className="text-[13px] font-medium mb-1.5 text-slate-600 dark:text-gray-400">
                  					{LABELS.powerPlant.name}
                				</div>
                				<input className="w-full px-3 py-2 rounded-lg text-[14px] border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-300 dark:text-gray-300"
                  					type="text"
                  					value={powerPlantName}
                  					onChange={(e) => setPowerPlantName(e.target.value)}/>
              				</div>
              				<div>
                				<div className="text-[13px] font-medium mb-1.5 text-slate-600 dark:text-gray-400">
                  					{LABELS.powerPlant.address}
                				</div>
                				<input className="w-full px-3 py-2 rounded-lg text-[14px] border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-300 dark:text-gray-300"
                  					type="text"
                  					value={powerPlantAddress}
                  					onChange={(e) => setPowerPlantAddress(e.target.value)}/>
              				</div>
              				<div>
                				<div className="text-[13px] font-medium mb-1.5 text-slate-600 dark:text-gray-400">
                  					{LABELS.powerPlant.type}
                				</div>
                				<input className="w-full px-3 py-2 rounded-lg text-[14px] border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-300 dark:text-gray-300"
                  					type="text"
                  					value={powerPlantType}
                  					onChange={(e) => setPowerPlantType(e.target.value)}/>
              				</div>
              				<div>
                				<div className="text-[13px] font-medium mb-1.5 text-slate-600 dark:text-gray-400">
                  					{LABELS.powerPlant.location}
                				</div>
                				<input className="w-full px-3 py-2 rounded-lg text-[14px] border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-300 dark:text-gray-300"
                  					type="text"
                  					value={powerPlantLocation}
                  					onChange={(e) => setPowerPlantLocation(e.target.value)}/>
              				</div>
              				<div>
                				<div className="text-[13px] font-medium mb-1.5 text-slate-600 dark:text-gray-400">
                  					{LABELS.powerPlant.expectedCapacity}
                				</div>
                				<input className="w-full px-3 py-2 rounded-lg text-[14px] font-semibold border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-50 dark:text-gray-50"
                  					type="text"
                  					value={expectedCapacity}
                  					onChange={(e) => setExpectedCapacity(e.target.value)}/>
              				</div>
              				<div>
                				<div className="text-[13px] font-medium mb-1.5 text-slate-600 dark:text-gray-400">
                  					{LABELS.powerPlant.actualCapacity}
                				</div>
                				<input className="w-full px-3 py-2 rounded-lg text-[14px] border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-300 dark:text-gray-300"
                  					type="text"
                  					value={actualCapacity}
                  					onChange={(e) => setActualCapacity(e.target.value)}
                  					placeholder="-"/>
              				</div>
            			</div>
          			</div>
        		</div>

        		{/* Progress Card */}
        		<div className="rounded-[10px] p-5 border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          			<h3 className="text-[18px] font-semibold mb-6 text-gray-900 dark:text-gray-50">
            			{LABELS.progress.title}
          			</h3>

          			{/* Stages List */}
          			<div>
            			{LABELS.progress.stages.map((stage, index) => {
              				const currentStatus = stageStatuses[stage.id];
							const statusConfig = getStatusConfig(currentStatus);
              				const isExpanded = expandedStage === stage.id;
              				const isLast = index === LABELS.progress.stages.length - 1;
              
              				return (
                				<div key={stage.id}>
                  					{/* Stage Header - 클릭 가능한 카드 */}
                  					<div className="h-[68px] flex items-center justify-between gap-4 px-1 cursor-pointer transition-all hover:bg-gray-50 dark:hover:bg-gray-900"
                    					onClick={() => toggleStage(stage.id)}>
                    					{/* 좌측: 단계명 */}
                    					<div className="flex-1 min-w-0 flex items-center gap-2">
                      						<ChevronRight className={`flex-shrink-0 transition-transform text-gray-400 dark:text-gray-500 ${isExpanded ? 'rotate-90' : ''}`}
                        						size={16}/>
                      						<div className="font-semibold text-[14px] truncate text-gray-900 dark:text-gray-50">
                        						{stage.name}
                      						</div>
                    					</div>

                    					{/* 우측: 상태 배지 + 상태 변경 드롭다운 */}
                    					<div className="flex items-center gap-3 flex-shrink-0">
                      						{/* 상태 배지 */}
                    						<div className={`px-3 py-1.5 rounded-full text-xs font-medium border`}
                        						style={{
                        							color: statusConfig.color,
                          							backgroundColor: statusConfig.bgColor,
                          							borderColor: statusConfig.borderColor
                        						}}>
                        						{getStageStatusLabel(stage.id)}
                      						</div>

                      						{/* 상태 변경 드롭다운 */}
                      						<div className="relative">
                        						<button className="p-2 rounded transition-colors text-gray-500 dark:text-gray-400"
                          							onClick={(e) => {
                            							e.stopPropagation();
                            							setShowStatusDropdown(showStatusDropdown === stage.id ? null : stage.id);
                          							}}>
                          							<ChevronDown size={16} />
                        						</button>

                        						{/* 드롭다운 메뉴 */}
                        						{showStatusDropdown === stage.id && (
                          							<div className="absolute right-0 mt-1 py-1 rounded-lg shadow-lg z-10 border min-w-[120px] bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                            							onClick={(e) => e.stopPropagation()}>
                            							{stage.statuses.map((status) => (
                              								<button className={`w-full px-4 py-2 text-left text-sm transition-colors ${ currentStatus === status.value ? 'bg-gray-100 dark:bg-gray-600' : '' } text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600`}
                                								key={status.value}
                                								onClick={(e) => {
                                  									e.stopPropagation();
                                  									handleStatusChange(stage.id, status.value);
                                								}}>
                                								{status.label}
                              								</button>
                            							))}
                          							</div>
                        						)}
                      						</div>
                    					</div>
                  					</div>

                  					{/* 확장 영역 */}
                  					<div className={`overflow-hidden transition-all duration-300 ${ isExpanded ? 'max-h-[500px]' : 'max-h-[0px]' }`}>
                  					
                    					<div className="pt-4 pb-6 px-4 rounded-lg mt-2 bg-gray-50 dark:bg-gray-900">
                      						{/* 진행 노트 */}
                      						<div className="mb-4">
                        						{/* 제목 + 화살표 */}
                        						<div className="flex items-center gap-2 cursor-pointer mb-2"
                          							onClick={() => setStageNoteExpanded(prev => ({ ...prev, [stage.id]: !prev[stage.id] }))}>
                          							<ChevronDown className={`transition-transform text-gray-400 dark:text-gray-500 ${stageNoteExpanded[stage.id] ? 'rotate-180' : ''}`}
                            							size={14}/>
                          							<div className="text-[14px] font-semibold text-gray-700 dark:text-gray-300">
                            							{LABELS.progress.noteSection}
                          							</div>
                        						</div>
                        
                        						{/* 노트 입력 영역 */}
                        						<div className={`overflow-hidden transition-all duration-300 ${ stageNoteExpanded[stage.id] ? 'max-h-[200px]' : 'max-h-[0px]' }`}>
                          							<div className="relative">
                            							<textarea className="w-full px-3 py-2 pr-12 rounded-lg text-[14px] resize-none border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                              								value={stageNotes[stage.id] || ''}
                              								onChange={(e) => handleNoteChange(stage.id, e.target.value)}
                              								placeholder={LABELS.progress.notePlaceholder}                              
                              								rows={3}/>
                            						{/* Paper Plane 버튼 */}
                            						<button className="absolute bottom-2 right-2 p-2 rounded transition-colors w-8 h-8 flex items-center justify-center bg-[#243c84] text-[#ffffff]"
                              							onMouseEnter={(e) => {
                                							e.currentTarget.style.backgroundColor = '#1e3470';
                              							}}
                              							onMouseLeave={(e) => {
                                							e.currentTarget.style.backgroundColor = '#243c84';
                              							}}>
                              							<Send size={14} />
                            						</button>
                          						</div>
                        					</div>
                      					</div>

                      					{/* 첨부파일 영역 */}
                      					<div className="mb-6">
                        					{/* 제목 + 화살표 */}
                        					<div className="flex items-center gap-2 cursor-pointer mb-2"
                          						onClick={() => setStageFileExpanded(prev => ({ ...prev, [stage.id]: !prev[stage.id] }))}>
                          						<ChevronDown className={`transition-transform text-gray-400 dark:text-gray-500 ${stageFileExpanded[stage.id] ? 'rotate-180' : ''}`}
                            						size={14}/>
                          						<div className="text-[14px] font-semibold text-gray-700 dark:text-gray-300">
                            						{LABELS.progress.attachSection}
                          						</div>
                        					</div>
                        
                        					{/* 파일 업로드 영역 */}
                        					<div className={`overflow-hidden transition-all duration-300 ${ stageFileExpanded[stage.id] ? 'max-h-[300px]' : 'max-h-[0px]' }`}>
                          						{/* 첨부된 파일 목록 - 먼저 표시 */}
                          						{stageFiles[stage.id] && stageFiles[stage.id].length > 0 && (
                            						<div className="flex flex-wrap gap-2 mb-3">
                              							{stageFiles[stage.id].map((fileName, idx) => (
                                							<div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs border bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                                  								key={idx}>
                                  								<Paperclip size={12} />
                                  								<span>{fileName}</span>
                                  								<button className="hover:opacity-70 transition-opacity"
                                    								onClick={() => handleFileRemove(stage.id, fileName)}>
                                    								<X size={12} />
                                  								</button>
                                							</div>
                              							))}
                            						</div>
                          						)}

                          						{/* 파일 첨부 버튼 - Full Width Upload 스타일 */}
                          						<div className="mb-3">
                            						<input className="hidden"
                              							type="file"
                              							id={`file-upload-${stage.id}`}                              	
                              							onChange={(e) => {
                                							if (e.target.files && e.target.files[0]) {
                                  								const fileName = e.target.files[0].name;
                                  								setStageFileNames(prev => ({
                                    								...prev,
                                    								[stage.id]: fileName
                                  								}));
                                							}
                              							}}/>
                            						<label className="flex items-center justify-center gap-2 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200 w-full px-4 py-2.5 border-[1.5px] border-dashed min-h-[44px] bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600"
                              							htmlFor={`file-upload-${stage.id}`}>
                              							<Paperclip size={16} />
                              							<span>{stageFileNames[stage.id] || LABELS.progress.attachFile}</span>
                            						</label>
                          						</div>

                          						{/* 파일 등록 버튼 */}
                          						<button className={`flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 border ${ stageFileNames[stage.id] ? 'bg-[#243c84] text-white border-[#243c84] hover:bg-[#1e3470] cursor-pointer opacity-100' : 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 border-gray-200 dark:border-gray-600 cursor-not-allowed opacity-60'}`}
                            						onClick={() => {
                              							if (stageFileNames[stage.id]) {
                                							handleFileAdd(stage.id, stageFileNames[stage.id]);
                              							}
                            						}}
                            						disabled={!stageFileNames[stage.id]}>
                            						<Check size={16} />
                            						{LABELS.progress.registerFile}
                          						</button>
                        					</div>
                      					</div>

                      					{/* 진행단계별 결정사항 - 시공사 배정 단계(id: 2)에만 표시 */}
                      					{stage.id === 2 && stage.hasContractorSelection && (
                        					<div className="mb-4">
                          						{/* 제목 + 화살표 */}
                          						<div className="flex items-center gap-2 cursor-pointer mb-2"
                            						onClick={() => setStageDecisionExpanded(prev => ({ ...prev, [stage.id]: !prev[stage.id] }))}>
                            						<ChevronDown className={`transition-transform text-gray-400 dark:text-gray-500 ${stageDecisionExpanded[stage.id] ? 'rotate-180' : ''}`}
                              							size={14}/>
                            						<div className="text-[14px] font-semibold text-gray-700 dark:text-gray-300">
                              							진행단계별 결정사항
                            						</div>
                          						</div>
                          
                          						{/* 결정사항 내용 영역 */}
                          						<div className={`overflow-hidden transition-all duration-300 ${ stageDecisionExpanded[stage.id] ? 'max-h-[300px]' : 'max-h-[0px]' }`}>
                            						<div className="pt-2 pb-1">
                              							{/* 라벨 */}
                              							<label className="text-[13px] font-medium mb-3 block text-slate-600 dark:text-gray-400">
                                							시공사 선택
                              							</label>
                              
                              							{/* 드롭다운 + 버튼 */}
                              							<div className="flex items-center gap-3">
                                							{/* 시공사 선택 드롭다운 */}
                                							<select className="flex-1 px-3 py-2.5 rounded-lg text-[14px] border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                                  								value={selectedContractor}
                                  								onChange={(e) => setSelectedContractor(e.target.value)}>
                                  								<option value="">시공사 선택</option>
                                  								<option value="contractor1">시공사 A</option>
                                  								<option value="contractor2">시공사 B</option>
                                  								<option value="contractor3">시공사 C</option>
                                							</select>

                                							{/* 시공사 등록 버튼 */}
                                							<button className="px-4 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap border bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600">
                                  								시공사 등록
                                							</button>
                              							</div>
                            						</div>
                          						</div>
                        					</div>
                      					)}

                      					{/* 하단 액션 버튼 */}
                      					<div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                        					{/* 왼쪽: 첫 번째 버튼 (개시) */}
                        					<button className="px-4 py-2 rounded-lg text-sm font-medium transition-colors border bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600">
                          						{stage.actions[0]}
                        					</button>

                        					{/* 우측: 나머지 두 버튼 (완료, 거절) */}
                        					<div className="flex items-center gap-2">
                          						{stage.actions.slice(1).map((action, idx) => {
                            						const isPrimary = idx === 0; // 완료 버튼
                            						const isDanger = idx === 1; // 거절 버튼
                            
                            						return (
                              							<button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${ isPrimary ? 'bg-[#243c84] text-white border-[#243c84] hover:bg-[#1e3470]' : isDanger ? 'bg-white dark:bg-gray-700 text-[#d8442c] border-gray-200 dark:border-gray-600 hover:bg-red-50 dark:hover:bg-gray-600' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'}`}
                                							key={idx}>
                                							{action}
                              							</button>
                            						);
                          						})}
                        					</div>
                      					</div>
                    				</div>
                  				</div>

                  				{/* 구분선 (마지막 항목 제외) */}
                  				{!isLast && (
                    				<div className="h-px bg-[#EDEDED] m-0" />
                  				)}
                			</div>
              			);
            		})}
          		</div>
        	</div>
      	</div>
  	</div>
  	);
}