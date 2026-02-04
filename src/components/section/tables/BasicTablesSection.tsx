"use client"

import Link from "next/link";
import { Filter, Trash, Pin, Search, ChevronLeft, FileText } from 'lucide-react';
import { useState } from 'react';

// 공지사항 테이블용 데이터
interface Notice {
  id: number;
  title: string;
  category: '일반' | '중요';
  author: string;
  date: string;
  views: number;
  isPinned?: boolean;
}

const noticesData: Notice[] = [
  { id: 1, title: '[중요] 2026년 1월 시스템 점검 안내', category: '중요', author: '관리자', date: '2026-01-15', views: 245, isPinned: true },
  { id: 2, title: '[중요] 프로젝트 접수 시 필수 제출 서류 변경 안내', category: '중요', author: '관리자', date: '2026-01-14', views: 189, isPinned: true },
  { id: 3, title: '2026년 1분기 협력사 간담회 일정 안내', category: '일반', author: '운영팀', date: '2026-01-13', views: 156 },
  { id: 4, title: '설 연휴 고객센터 운영 안내', category: '일반', author: '고객지원팀', date: '2026-01-12', views: 98 },
  { id: 5, title: '신규 협력사 등록 절차 안내', category: '일반', author: '운영팀', date: '2026-01-11', views: 234 },
];

// 프로젝트 테이블용 데이터
interface Project {
  id: number;
  date: string;
  salesCompany: string;
  constructionCompany: string;
  status: string;
  capacity: string;
  location: string;
  installationType: string;
  projectName: string;
  powerPlantName: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    date: '2024-06-15',
    salesCompany: '(주)한양에너지',
    constructionCompany: '(주)한양에너지',
    status: '신규접수',
    capacity: '245.50',
    location: '경기 화성시 서신면 전곡리 123',
    installationType: '지붕',
    projectName: '프로젝트 1',
    powerPlantName: '경기 화성시 서신면 전곡리 123번지 발전소'
  },
  {
    id: 2,
    date: '2024-06-18',
    salesCompany: '(주)가온SNC',
    constructionCompany: '',
    status: '시공사 배정',
    capacity: '187.25',
    location: '충북 충주시 중앙탑면 미륵대로 456',
    installationType: '지상',
    projectName: '프로젝트 2',
    powerPlantName: '충북 충주시 중앙탑면 미륵대로 456번지 발전소'
  },
  {
    id: 3,
    date: '2024-06-20',
    salesCompany: '주식회사 자연에너지',
    constructionCompany: '주식회사 자연에너지',
    status: '실사',
    capacity: '325.80',
    location: '충남 천안시 동남구 목천읍 삼성리 789',
    installationType: '수상',
    projectName: '프로젝트 3',
    powerPlantName: '충남 천안시 동남구 목천읍 삼성리 789번지 발전소'
  },
  {
    id: 4,
    date: '2024-06-22',
    salesCompany: '주식회사 다인스',
    constructionCompany: '주식회사 다인스',
    status: '운영',
    capacity: '412.35',
    location: '대전 유성구 성북동 321',
    installationType: '지붕',
    projectName: '프로젝트 4',
    powerPlantName: '대전 유성구 성북동 321번지 발전소'
  },
  {
    id: 5,
    date: '2024-06-25',
    salesCompany: '(주)썬파워',
    constructionCompany: '',
    status: '발전사업허가 접수요청',
    capacity: '156.90',
    location: '경기 파주시 오도동 654',
    installationType: '지상',
    projectName: '프로젝트 5',
    powerPlantName: '경기 파주시 오도동 654번지 발전소'
  }
];

export function BasicTablesSection() {
	const [currentPage, setCurrentPage] = useState(1);

  // Status dot color mapping
  const getStatusDotColor = (status: string): string => {
    const statusColors: Record<string, string> = {
      '신규접수': '#243c84',
      '발전사업허가 접수요청': '#7C3AED',
      '시공사 배정': '#9AA3AF',
      '실사': '#B7791F',
      '운영': '#1F7A5A'
    };
    return statusColors[status] || statusColors['신규접수'];
  };

	return (
		<div>
			{/* Table 1: Notice List Style (공지사항 스타일) */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] overflow-hidden mb-8">
        {/* Section Title */}
        <div className="px-8 pt-8 pb-6 min-h-[88px]">
          <h2 className="text-[20px] font-bold tracking-tight text-gray-900 dark:text-gray-100">
            공지사항 스타일 테이블
          </h2>
          <p className="text-[13px] mt-2 text-gray-600 dark:text-gray-400">
            공지사항 목록 페이지에서 사용되는 테이블 스타일
          </p>
        </div>

        {/* 테이블 헤더 (PC만 표시) */}
        <div className="hidden md:grid md:grid-cols-12 gap-4 px-5 py-4 border-b bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700">
          <div className="col-span-1 text-sm text-gray-600 dark:text-gray-400">번호</div>
          <div className="col-span-6 text-sm text-gray-600 dark:text-gray-400">제목</div>
          <div className="col-span-1 text-sm text-gray-600 dark:text-gray-400">분류</div>
          <div className="col-span-1 text-sm text-gray-600 dark:text-gray-400">작성자</div>
          <div className="col-span-2 text-sm text-gray-600 dark:text-gray-400">등록일</div>
          <div className="col-span-1 text-sm text-right text-gray-600 dark:text-gray-400">조회</div>
        </div>

        {/* 공지사항 목록 */}
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {noticesData.map((notice) => (
            <div className="px-4 md:px-5 py-4 transition-colors cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50"
              key={notice.id}>
              {/* 모바일 레이아웃 */}
              <div className="md:hidden">                
                <div className="flex items-start gap-2 mb-2">
                  {notice.isPinned && (
                    <Pin className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#243c84] dark:text-blue-300" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${
                        notice.category === '중요' 
                          ? 'bg-[#243c84] dark:bg-blue-800 text-white' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                      }`}>
                        {notice.category}
                      </span>
                    </div>
                    <h3 className={`text-sm mb-2 break-words font-medium ${
                      notice.category === '중요' 
                        ? 'text-[#243c84] dark:text-blue-300' 
                        : 'text-gray-900 dark:text-gray-50'
                    }`}>
                      {notice.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
                      <span>{notice.author}</span>
                      <span>{notice.date}</span>
                      <span>조회 {notice.views}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* PC 레이아웃 */}
              <div className="hidden md:grid md:grid-cols-12 gap-4 items-center">
                <div className="col-span-1 text-sm font-medium text-gray-600 dark:text-gray-300">
                  {notice.isPinned ? (
                    <Pin className="w-4 h-4 text-[#243c84] dark:text-blue-300" />
                  ) : (
                    <span>{notice.id}</span>
                  )}
                </div>
                <div className="col-span-6">
                  <div className="flex items-center gap-2">
                    {notice.isPinned && (
                      <Pin className="w-4 h-4 flex-shrink-0 text-[#243c84] dark:text-blue-300" />
                    )}
                    <span className={`text-sm font-medium ${
                      notice.category === '중요' 
                        ? 'text-[#243c84] dark:text-blue-300' 
                        : 'text-gray-900 dark:text-gray-100'
                    }`}>
                      {notice.title}
                    </span>
                  </div>
                </div>
                <div className="col-span-1">
                  <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                    notice.category === '중요' 
                      ? 'bg-[#243c84] dark:bg-blue-800 text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                  }`}>
                    {notice.category}
                  </span>
                </div>
                <div className="col-span-1 text-sm text-gray-600 dark:text-gray-300">{notice.author}</div>
                <div className="col-span-2 text-sm text-gray-600 dark:text-gray-300">{notice.date}</div>
                <div className="col-span-1 text-sm text-right text-gray-600 dark:text-gray-300">{notice.views}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Table 2: Project List Style (프로젝트 목록 스타일) */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] overflow-hidden mb-8">
        {/* Section Title */}
        <div className="px-8 pt-8 pb-6 max-md:px-6 min-h-[88px]">
          <h2 className="text-[20px] font-bold tracking-tight text-gray-900 dark:text-gray-100">
            프로젝트 목록 스타일 테이블
          </h2>
          <p className="text-[13px] mt-2 text-gray-600 dark:text-gray-400">
            프로젝트 조회 페이지에서 사용되는 테이블 스타일
          </p>
        </div>

        {/* Desktop Table */}
        <div className="overflow-x-auto hidden md:block">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <th className="pl-4 pr-2 py-4 text-center text-sm font-semibold text-gray-600 dark:text-gray-400">
                  진행관리
                </th>
                <th className="px-2 py-4 text-center text-sm font-semibold text-gray-600 dark:text-gray-400">
                  정보조회
                </th>
                <th className="px-2 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-400">
                  접수일자
                </th>
                <th className="px-2 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-400">
                  영업사
                </th>
                <th className="px-2 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-400">
                  시공사
                </th>
                <th className="px-2 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-400">
                  진행상태
                </th>
                <th className="px-2 py-4 text-right text-sm font-semibold text-gray-600 dark:text-gray-400">
                  예상용량
                </th>
                <th className="px-2 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-400">
                  위치
                </th>
                <th className="pr-4 pl-2 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-400">
                  설치유형
                </th>
              </tr>
            </thead>
            <tbody>
              {projectsData.map((project, index) => (
                <tr className={index !== projectsData.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''}
                  key={project.id}>
                  <td className="pl-4 pr-2 py-4 text-center">
                    <button className="px-2 py-2 rounded-lg text-sm font-medium transition-all bg-[#243c84] hover:bg-[#1e3367] text-white border-0">
                      진행관리
                    </button>
                  </td>
                  <td className="px-2 py-4 text-center">
                    <button className="px-4 py-2 rounded-lg text-sm font-medium transition-all bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-50 border border-gray-300 dark:border-gray-600">
                      조회
                    </button>
                  </td>
                  <td className="px-2 py-4 text-sm text-gray-600 dark:text-gray-300">
                    {project.date}
                  </td>
                  <td className="px-2 py-4 text-sm text-gray-600 dark:text-gray-300">
                    {project.salesCompany}
                  </td>
                  <td className="px-2 py-4 text-sm text-gray-400">
                    {project.constructionCompany || '-'}
                  </td>
                  <td className="px-2 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: getStatusDotColor(project.status) }}/>
                      <span className="text-sm text-gray-900 dark:text-gray-50">
                        {project.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-sm text-right text-gray-600 dark:text-gray-300">
                    {project.capacity}
                  </td>
                  <td className="px-2 py-4 text-sm text-gray-600 dark:text-gray-300">
                    {project.location}
                  </td>
                  <td className="pr-4 pl-2 py-4">
                    <span className="inline-flex px-4 py-1.5 rounded-md text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                      {project.installationType}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card Layout */}
        <div className="md:hidden divide-y border-t border-gray-200 dark:border-gray-700">
          {projectsData.map((project) => (
            <div className="p-5 border-b border-gray-200 dark:border-gray-700"
              key={project.id}>
              {/* 상태와 설치유형 */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: getStatusDotColor(project.status) }}/>
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
                    {project.status}
                  </span>
                </div>
                <span className="inline-flex px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                  {project.installationType}
                </span>
              </div>

              {/* 영업사 & 시공사 */}
              <div className="mb-3">
                <div className="text-sm font-semibold mb-1 text-gray-900 dark:text-gray-100">
                  {project.salesCompany}
                </div>
                {project.constructionCompany && (
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    시공: {project.constructionCompany}
                  </div>
                )}
              </div>

              {/* 위치 */}
              <div className="text-sm mb-3 text-gray-600 dark:text-gray-300">
                {project.location}
              </div>

              {/* 용량 & 접수일자 */}
              <div className="flex items-center justify-between text-xs mb-4 text-gray-600 dark:text-gray-400">
                <span>예상용량: {project.capacity} kW</span>
                <span>{project.date}</span>
              </div>

              {/* 버튼 */}
              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all bg-[#243c84] text-white border-0">
                  진행관리
                </button>
                <button className="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-50 border border-gray-300 dark:border-gray-600">
                  정보조회
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Table 3: Simple Data Table with Actions */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[10px] overflow-hidden">
        {/* Section Title */}
        <div className="px-8 pt-8 pb-6 max-md:px-6 min-h-[88px]">
          <h2 className="text-[20px] font-bold tracking-tight text-gray-900 dark:text-gray-100">
            심플 데이터 테이블
          </h2>
          <p className="text-[13px] mt-2 text-gray-600 dark:text-gray-400">
            체크박스와 액션 버튼이 있는 기본 테이블 스타일
          </p>
        </div>

        {/* Desktop Table */}
        <div className="overflow-x-auto hidden md:block">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <th className="px-6 py-4 w-12">
                  <input className="w-4 h-4 rounded accent-[#243c84]"
                    type="checkbox" />
                </th>
                <th className="px-6 py-4 text-left text-[12px] font-semibold tracking-wider uppercase text-gray-600 dark:text-gray-400">
                  프로젝트명
                </th>
                <th className="px-6 py-4 text-left text-[12px] font-semibold tracking-wider uppercase text-gray-600 dark:text-gray-400">
                  발전소명
                </th>
                <th className="px-6 py-4 text-left text-[12px] font-semibold tracking-wider uppercase text-gray-600 dark:text-gray-400">
                  영업사
                </th>
                <th className="px-6 py-4 text-left text-[12px] font-semibold tracking-wider uppercase text-gray-600 dark:text-gray-400">
                  등록일
                </th>
                <th className="px-6 py-4 text-center text-[12px] font-semibold tracking-wider uppercase text-gray-600 dark:text-gray-400">
                  작업
                </th>
              </tr>
            </thead>
            <tbody>
              {projectsData.map((project, index) => (
                <tr className={index !== projectsData.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''}
                  key={project.id}>
                  <td className="px-6 py-4">
                    <input className="w-4 h-4 rounded accent-[#243c84]"
                      type="checkbox" />
                  </td>
                  <td className="px-6 py-4 text-[14px] font-medium text-gray-900 dark:text-gray-50">
                    {project.projectName}
                  </td>
                  <td className="px-6 py-4 text-[14px] text-gray-600 dark:text-gray-300">
                    {project.powerPlantName}
                  </td>
                  <td className="px-6 py-4 text-[14px] text-gray-700 dark:text-gray-300">
                    {project.salesCompany}
                  </td>
                  <td className="px-6 py-4 text-[14px] text-gray-600 dark:text-gray-300">
                    {project.date}
                  </td>
                  <td className="py-4 pr-4 text-center">
                    <button className="transition-all inline-block text-gray-400 opacity-60 hover:text-[#d8442c] hover:opacity-100">
                      <Trash size={16} strokeWidth={1.5} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card Layout */}
        <div className="md:hidden divide-y border-t border-gray-200 dark:border-gray-700">
          {projectsData.map((project) => (
            <div className="p-5 border-b border-gray-200 dark:border-gray-700"
              key={project.id}>
              <div className="flex items-start gap-3">
                <input className="w-4 h-4 rounded mt-1 flex-shrink-0 accent-[#243c84]"
                  type="checkbox" />
                <div className="flex-1 min-w-0">
                  {/* 프로젝트명 */}
                  <div className="text-sm font-semibold mb-2 text-gray-900 dark:text-gray-50">
                    {project.projectName}
                  </div>
                  
                  {/* 발전소명 */}
                  <div className="text-xs mb-2 text-gray-600 dark:text-gray-300">
                    {project.powerPlantName}
                  </div>
                  
                  {/* 영업사 & 등록일 */}
                  <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                    <span>{project.salesCompany}</span>
                    <span>{project.date}</span>
                  </div>
                </div>
                
                {/* 삭제 버튼 */}
                <button className="transition-all flex-shrink-0 mt-1 text-gray-400 opacity-60">
                  <Trash size={16} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
	);
}