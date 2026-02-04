"use client"

import Link from "next/link";
import { Search, Settings, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

// 프로젝트 데이터 타입
interface Project {
  id: number;
  date: string;
  salesCompany: string;
  constructionCompany: string;
  status: string;
  capacity: string;
  installationType: string;
  projectName: string;
  powerPlantName: string;
}

// 직원 데이터 타입
interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  joinDate: string;
}

// 샘플 프로젝트 데이터
const projectsData: Project[] = [
  {
    id: 1,
    date: '2024-06-15',
    salesCompany: '(주)한양에너지',
    constructionCompany: '(주)한양에너지',
    status: '신규접수',
    capacity: '245.50',
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
    installationType: '지상',
    projectName: '프로젝트 5',
    powerPlantName: '경기 파주시 오도동 654번지 발전소'
  }
];

// 샘플 직원 데이터
const employeesData: Employee[] = [
  { id: 1, name: '김철수', position: '팀장', department: '개발팀', email: 'kim@example.com', phone: '010-1234-5678', joinDate: '2020-03-15' },
  { id: 2, name: '이영희', position: '대리', department: '디자인팀', email: 'lee@example.com', phone: '010-2345-6789', joinDate: '2021-05-20' },
  { id: 3, name: '박민수', position: '과장', department: '영업팀', email: 'park@example.com', phone: '010-3456-7890', joinDate: '2019-07-10' },
  { id: 4, name: '정수진', position: '사원', department: '마케팅팀', email: 'jung@example.com', phone: '010-4567-8901', joinDate: '2022-01-05' },
  { id: 5, name: '최동욱', position: '부장', department: '인사팀', email: 'choi@example.com', phone: '010-5678-9012', joinDate: '2018-11-25' }
];

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

export function DataTablesSection() {
	const [searchTerm1, setSearchTerm1] = useState('');

	return (
		<div>
			{/* Table 1: 프로젝트 관리 테이블 */}
      <div className="rounded-[10px] border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-4 md:p-5 mb-8 md:mx-0">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-[20px] font-bold tracking-tight mb-2 text-gray-900 dark:text-gray-100">
            프로젝트 데이터 테이블 (진행관리 + 정보조회)
          </h2>
          <p className="text-[13px] text-gray-600 dark:text-gray-400">
            프로젝트 목록을 조회하고 진행 관리 및 상세 정보를 확인할 수 있습니다
          </p>
        </div>

        {/* Controls */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
          <div className="relative w-full md:w-[300px]">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
              <Search className="w-[15px] h-[15px] text-gray-600 dark:text-gray-400" />
            </div>
            <input className="w-full h-[36px] pl-10 pr-4 text-[13px] outline-none transition-colors bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-100"
              type="text"
              placeholder="프로젝트명, 영업사로 검색"
              value={searchTerm1}
              onChange={(e) => setSearchTerm1(e.target.value)} />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[13px] text-gray-600 dark:text-gray-400">
              총 {projectsData.length}개 프로젝트
            </span>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <th className="pl-6 pr-4 py-4 text-center text-sm font-semibold text-gray-600 dark:text-gray-400">
                    진행관리
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-gray-600 dark:text-gray-400">
                    정보조회
                  </th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-400">
                    접수일자
                  </th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-400">
                    영업사
                  </th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-400">
                    진행상태
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-gray-600 dark:text-gray-400">
                    예상용량
                  </th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-400">
                    설치유형
                  </th>
                  <th className="pr-6 pl-4 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-400">
                    프로젝트명
                  </th>
                </tr>
              </thead>
              <tbody>
                {projectsData.map((project, index) => (
                  <tr className="border-t border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800"
                    key={project.id}>
                    {/* 진행관리 */}
                    <td className="pl-6 pr-4 py-4 text-center">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium cursor-pointer transition-colors bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#243c84]">
                        <Settings size={16} strokeWidth={2.5} />
                        <span>진행관리</span>
                      </div>
                    </td>

                    {/* 정보조회 */}
                    <td className="px-4 py-4 text-center">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium cursor-pointer transition-colors bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#243c84]">
                        <FileText size={16} strokeWidth={2.5} />
                        <span>정보조회</span>
                      </div>
                    </td>

                    {/* 접수일자 */}
                    <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300">
                      {project.date}
                    </td>

                    {/* 영업사 */}
                    <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300">
                      {project.salesCompany}
                    </td>

                    {/* 진행상태 */}
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: getStatusDotColor(project.status) }}/>
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          {project.status}
                        </span>
                      </div>
                    </td>

                    {/* 예상용량 */}
                    <td className="px-4 py-4 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
                      {project.capacity}
                    </td>

                    {/* 설치유형 */}
                    <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300">
                      {project.installationType}
                    </td>

                    {/* 프로젝트명 */}
                    <td className="pr-6 pl-4 py-4 text-sm font-medium text-gray-900 dark:text-gray-50">
                      {project.projectName}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Card Layout */}
        <div className="md:hidden flex flex-col gap-3">
          {projectsData.map((project) => (
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex flex-col gap-3"
              key={project.id}>
              {/* 프로젝트명 (Bold) */}
              <div className="text-[15px] font-bold text-gray-900 dark:text-gray-50">
                {project.projectName}
              </div>

              {/* 접수일자 */}
              <div className="text-[13px] text-gray-600 dark:text-gray-400">
                접수일자: {project.date}
              </div>

              {/* 영업사 */}
              <div className="text-[13px] text-gray-700 dark:text-gray-300">
                영업사: {project.salesCompany}
              </div>

              {/* 진행상태 */}
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: getStatusDotColor(project.status) }}
                />
                <span className="text-[13px] font-medium text-gray-800 dark:text-gray-200">
                  {project.status}
                </span>
              </div>

              {/* 예상용량 & 설치유형 */}
              <div className="text-[13px] text-gray-600 dark:text-gray-400">
                예상용량: {project.capacity}kW / 설치유형: {project.installationType}
              </div>

              {/* 버튼 영역 */}
              <div className="flex items-center gap-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                <button className="flex-1 flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 rounded-md text-sm font-medium cursor-pointer transition-colors bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#243c84]">
                  <Settings size={16} strokeWidth={2.5} />
                  <span>진행관리</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 rounded-md text-sm font-medium cursor-pointer transition-colors bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#243c84]">
                  <FileText size={16} strokeWidth={2.5} />
                  <span>정보조회</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="text-[13px] text-gray-600 dark:text-gray-400">
            총 {projectsData.length}개 프로젝트 중 1-{projectsData.length}개 표시
          </span>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 opacity-50 cursor-not-allowed transition-colors"
              disabled>
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <button className="min-w-[40px] h-10 px-3 rounded-lg text-sm font-medium bg-[#243c84] text-white">
              1
            </button>
            <button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 opacity-50 cursor-not-allowed transition-colors"
              disabled>
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Table 2: 직원 관리 테이블 */}
      <div className="rounded-[10px] border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-4 md:p-5 md:mx-0">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-[20px] font-bold tracking-tight mb-2 text-gray-900 dark:text-gray-100">
            직원 관리 테이블 (체크박스 선택)
          </h2>
          <p className="text-[13px] text-gray-600 dark:text-gray-400">
            다중 선택 및 일괄 작업이 가능한 직원 관리 스타일 테이블
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  <th className="px-6 py-4 w-[50px]">
                    <input className="w-4 h-4 rounded accent-[#243c84]"
                      type="checkbox" />
                  </th>
                  <th className="px-6 py-4 text-left text-[12px] font-semibold tracking-wider uppercase text-gray-600 dark:text-gray-400">
                    이름
                  </th>
                  <th className="px-6 py-4 text-left text-[12px] font-semibold tracking-wider uppercase text-gray-600 dark:text-gray-400">
                    직책
                  </th>
                  <th className="px-6 py-4 text-left text-[12px] font-semibold tracking-wider uppercase text-gray-600 dark:text-gray-400">
                    부서
                  </th>
                  <th className="px-6 py-4 text-left text-[12px] font-semibold tracking-wider uppercase text-gray-600 dark:text-gray-400">
                    이메일
                  </th>
                  <th className="px-6 py-4 text-left text-[12px] font-semibold tracking-wider uppercase text-gray-600 dark:text-gray-400">
                    전화번호
                  </th>
                  <th className="px-6 py-4 text-left text-[12px] font-semibold tracking-wider uppercase text-gray-600 dark:text-gray-400">
                    입사일
                  </th>
                </tr>
              </thead>
              <tbody>
                {employeesData.map((employee, index) => (
                  <tr className={`bg-white dark:bg-gray-800 ${index !== employeesData.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''}`}
                    key={employee.id}>
                    <td className="px-6 py-4">
                      <input className="w-4 h-4 rounded accent-[#243c84]"
                        type="checkbox" />
                    </td>
                    <td className="px-6 py-4 text-[14px] font-medium text-gray-900 dark:text-gray-50">
                      {employee.name}
                    </td>
                    <td className="px-6 py-4 text-[14px] text-gray-600 dark:text-gray-300">
                      {employee.position}
                    </td>
                    <td className="px-6 py-4 text-[14px] text-gray-700 dark:text-gray-300">
                      {employee.department}
                    </td>
                    <td className="px-6 py-4 text-[14px] text-gray-600 dark:text-gray-300">
                      {employee.email}
                    </td>
                    <td className="px-6 py-4 text-[14px] text-gray-600 dark:text-gray-300">
                      {employee.phone}
                    </td>
                    <td className="px-6 py-4 text-[14px] text-gray-600 dark:text-gray-300">
                      {employee.joinDate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Card Layout */}
        <div className="md:hidden flex flex-col gap-3">
          {employeesData.map((employee) => (
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex flex-col gap-3"
              key={employee.id}>
              {/* 체크박스 & 이름 */}
              <div className="flex items-center gap-3">
                <input className="w-4 h-4 rounded accent-[#243c84] flex-shrink-0"
                  type="checkbox" />
                <div className="text-[15px] font-bold text-gray-900 dark:text-gray-50">
                  {employee.name}
                </div>
              </div>

              {/* 직책 & 부서 */}
              <div className="text-[13px] text-gray-600 dark:text-gray-400">
                {employee.position} / {employee.department}
              </div>

              {/* 이메일 */}
              <div className="text-[13px] text-gray-700 dark:text-gray-300">
                {employee.email}
              </div>

              {/* 전화번호 */}
              <div className="text-[13px] text-gray-700 dark:text-gray-300">
                {employee.phone}
              </div>

              {/* 입사일 */}
              <div className="text-[13px] text-gray-600 dark:text-gray-400">
                입사일: {employee.joinDate}
              </div>
            </div>
          ))}
        </div>
      </div>
		</div>
	);
}