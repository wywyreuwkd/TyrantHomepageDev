"use client"

import Link from "next/link";
import { Search, Plus, ChevronDown, ChevronUp, ChevronRight, Settings, FileText, ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { useState } from "react";
import React from "react";
import { Badge } from "@/components/ui/badge/badge";
import { projects } from "@/data/projectListData";

const LABELS = {
  pageTitle: '프로젝트 목록',
  pageSubtitle: '프로젝트 진행 현황 및 정보를 관리합니다',
  searchPlaceholder: '프로젝트명, 영업사, 발전소명으로 검색',
  filters: {
    salesCompany: '영업사',
    constructionCompany: '시공사',
    status: '진행상태',
    location: '위치',
    installationType: '설치유형',
    all: '전체'
  },
  buttons: {
    newProject: '신규 프로젝트',
    manage: '진행관리',
    view: '조회',
    search: '검색',
    reset: '초기화'
  },
  columns: {
    manage: '진행\n관리',
    view: '정보\n조회',
    date: '접수일자',
    sales: '영업사',
    construction: '시공사',
    status: '진행상태',
    capacity: '예상\n용량',
    location: '위치',
    type: '설치\n유형',
    project: '프로젝트명',
    powerPlant: '발전소명'
  },
  pagination: {
    total: '총',
    items: '개 프로젝트',
    rowsPerPage: '보기:',
    jumpTo: '페이지 이동:'
  }
};

export function ProjectListSection() {

  const projectList = projects; // 프로젝트 테스트 데이터 가져오기
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('전체');
  const [searchScope, setSearchScope] = useState<'전체' | '영업사' | '시공사' | '진행상태' | '위치' | '설치유형' | '프로젝트명' | '발전소명'>('전체');
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  const [jumpToPage, setJumpToPage] = useState('1');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [mobileDisplayCount, setMobileDisplayCount] = useState(10);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  // Toggle card expansion
  const toggleCard = (projectId: number) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  // Get placeholder based on search scope
  const getPlaceholder = () => {
    switch (searchScope) {
      case '영업사':
        return '영업사명으로 검색';
      case '시공사':
        return '시공사명으로 검색';
      case '진행상태':
        return '진행상태로 검색 (예: 신규접수, 운영)';
      case '위치':
        return '위치로 검색 (예: 경기, 충남)';
      case '설치유형':
        return '설치유형으로 검색 (지붕/지상/수상)';
      case '프로젝트명':
        return '프로젝트명으로 검색';
      case '발전소명':
        return '발전소명으로 검색';
      default:
        return '프로젝트명 · 영업사 · 발전소명 검색';
    }
  };

  // Calculate pagination
  const totalPages = Math.ceil(projectList.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage + 1;
  const endIndex = Math.min(currentPage * rowsPerPage, projectList.length);

  // Generate page numbers (current ±2)
  const getPageNumbers = () => {
    const pages: number[] = [];
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    return pages;
  };

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

  // Get paginated data
  const paginatedProjects = projectList.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return(
    <div>
      {/* Search & Filter Section - Tab Based Layout */}
      <div className="mb-8">
        {/* Desktop Search & Filter */}
        <div className="hidden md:flex flex-col gap-4">
          {/* Top - Search Scope Tabs */}
          <div className="flex items-center h-[52px]">
            {(['전체', '영업사', '시공사', '진행상태', '위치', '설치유형', '프로젝트명', '발전소명'] as const).map((scope, index) => (
              <div key={scope} className="flex items-center">
                {index > 0 && (
                  <div className="w-px h-4 flex-shrink-0 bg-gray-200 dark:bg-gray-700" />
                )}
                <button className={`px-5 h-9 mt-2 transition-all relative rounded-md text-sm whitespace-nowrap border-none ${
                    searchScope === scope
                      ? 'bg-slate-100 text-slate-900 font-semibold'
                      : 'bg-transparent text-slate-400 font-normal hover:bg-slate-50 hover:text-slate-600'
                  }`}
                  onClick={() => setSearchScope(scope)}>
                  {scope}
                </button>
              </div>
            ))}
          </div>

          {/* Bottom - Search Input + Buttons */}
          <div className="flex items-center gap-3">
            <div className="w-[520px]">
              <div className="relative">
                <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 opacity-80" />
                <input className="w-full h-12 pl-11 pr-4 rounded-lg text-sm outline-none transition-all bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-900 dark:text-gray-50 focus:border-slate-600"
                  type="text"
                  placeholder={getPlaceholder()}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}/>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="h-12 min-w-[72px] px-6 rounded-lg text-sm font-medium transition-all bg-[#243c84] hover:bg-[#1e3268] text-white border-none">
                {LABELS.buttons.search}
              </button>
              <button className="text-[13px] font-normal transition-all bg-transparent text-slate-400 hover:text-slate-600 pl-2.5">
                {LABELS.buttons.reset}
              </button>
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Sort Button */}
            <button className="h-12 px-4 rounded-lg text-sm font-medium transition-all flex items-center gap-2 bg-white dark:bg-gray-800 text-slate-600 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-slate-300"
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
              {sortOrder === 'desc' ? (
                <ArrowDown size={16} className="text-slate-600" />
              ) : (
                <ArrowUp size={16} className="text-slate-600" />
              )}
              <span>{sortOrder === 'desc' ? '내림차순' : '오름차순'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Search & Filter */}
        <div className="md:hidden">
          {/* Filter Chips - Horizontal Scroll */}
          <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
            <style>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
            {(['전체', '영업사', '시공사', '진행상태', '위치', '설치유형', '프로젝트명', '발전소명'] as const).map((scope) => (
              <button className={`px-4 py-2 rounded-full text-[13px] font-medium whitespace-nowrap transition-all border-none flex-shrink-0 ${
                  searchScope === scope
                    ? 'bg-[#243c84] text-white'
                    : 'bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-gray-300'
                }`}
                key={scope}
                onClick={() => setSearchScope(scope)}>
                {scope}
              </button>
            ))}
          </div>

          {/* Search Bar + Sort Button */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1 relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input className="w-full pl-10 pr-3 py-2.5 rounded-lg text-[14px] outline-none bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-900 dark:text-gray-50"
                type="text"
                placeholder="프로젝트 검색"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}/>
            </div>
            <button className="p-2.5 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-600 dark:text-gray-300"
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
              {sortOrder === 'desc' ? (
                <ArrowDown size={18} />
              ) : (
                <ArrowUp size={18} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div>
        {/* Desktop Table */}
        <div className="hidden md:block rounded-xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <div className="overflow-x-auto">
            <table className="w-full min-w-full">
              <thead>
                <tr className="bg-slate-50 dark:bg-gray-900 whitespace-pre-wrap">
                  <th className="pl-[10px] pr-[6px] py-4 text-center text-sm font-semibold text-slate-600 dark:text-gray-400">
                    {LABELS.columns.manage}
                  </th>
                  <th className="px-[6px] py-4 text-center text-sm font-semibold text-slate-600 dark:text-gray-400">
                    {LABELS.columns.view}
                  </th>
                  <th className="pl-[4px] pr-[1px] py-4 text-left text-sm font-semibold text-slate-600 dark:text-gray-400">
                    {LABELS.columns.date}
                  </th>
                  <th className="px-[3px] py-4 text-left text-sm font-semibold text-slate-600 dark:text-gray-400">
                    {LABELS.columns.sales}
                  </th>
                  <th className="px-[2px] py-4 text-left text-sm font-semibold text-slate-600 dark:text-gray-400">
                    {LABELS.columns.construction}
                  </th>
                  <th className="px-[3px] py-4 text-left text-sm font-semibold text-slate-600 dark:text-gray-400">
                    {LABELS.columns.status}
                  </th>
                  <th className="px-[3px] py-4 text-center text-sm font-semibold text-slate-600 dark:text-gray-400">
                    {LABELS.columns.capacity}
                  </th>
                  <th className="px-[6px] py-4 text-left text-sm font-semibold text-slate-600 dark:text-gray-400">
                    {LABELS.columns.type}
                  </th>
                  <th className="px-[6px] max-w-[180px] py-4 text-left text-sm font-semibold text-slate-600 dark:text-gray-400">
                    {LABELS.columns.project}
                  </th>
                  <th className="pl-[6px] max-w-[200px] pr-[10px] py-4 text-left text-sm font-semibold text-slate-600 dark:text-gray-400">
                    {LABELS.columns.powerPlant}
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedProjects.map((project, index) => {
                  return (
                    <tr className="border-t border-slate-100 dark:border-gray-700 bg-white dark:bg-gray-800 whitespace-pre-wrap"
                      key={project.id}>
                      {/* 진행관리 */}
                      <td className="pl-[10px] pr-[6px] py-4 text-center">
                        <Link href="/project-management">
                          <div className="inline-flex items-center justify-center w-8 h-8 rounded-md cursor-pointer transition-colors text-slate-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-700 hover:text-[#243c84]">
                            {/*onClick={() => onNavigate?.('project-management', project.id)}>*/}
                            <Settings 
                              size={16} 
                              strokeWidth={2.5}/>
                          </div>
                        </Link>
                      </td>

                      {/* 정보조회 */}
                      <td className="px-[6px] py-4 text-center">
                        <Link href="/project-detail">
                          <div className="inline-flex items-center justify-center w-8 h-8 rounded-md cursor-pointer transition-colors text-slate-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-700 hover:text-[#243c84]">
                            {/*// onClick={() => onNavigate?.('project-detail', project.id)}>*/}
                            <FileText 
                              size={16} 
                              strokeWidth={2.5}/>
                          </div>
                        </Link>
                      </td>

                      {/* 접수일자 */}
                      <td className="pl-[4px] pr-[1px] py-4 text-sm whitespace-nowrap text-slate-700 dark:text-gray-300">
                        {project.date}
                      </td>

                      {/* 영업사 */}
                      <td className="px-[6px] py-4 text-sm text-slate-700 dark:text-gray-300">
                        {project.salesCompany}
                      </td>

                      {/* 시공사 */}
                      <td className="px-[2px] py-4 text-sm text-slate-400 dark:text-gray-500">
                        {project.constructionCompany || '-'}
                      </td>

                      {/* 진행상태 */}
                      <td className="px-[3px] py-4">
                        <div className="flex items-center gap-2">
                          {/* Status Dot */}
                          <div className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{
                              backgroundColor: getStatusDotColor(project.status)
                            }}
                          />
                          {/* Status Text */}
                          <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
                            {project.status}
                          </span>
                        </div>
                      </td>

                      {/* 예상용량 */}
                      <td className="px-[3px] py-4 text-center text-sm font-medium text-slate-700 dark:text-gray-300">
                        {project.capacity}
                      </td>

                      {/* 설치유형 */}
                      <td className="px-[6px] py-4 text-sm text-slate-700 dark:text-gray-300">
                        {project.installationType}
                      </td>

                      {/* 프로젝트명 */}
                      <td className="px-[6px] max-w-[180px] py-4 text-sm font-medium text-slate-900 dark:text-gray-50">
                        {project.projectName}
                      </td>

                      {/* 발전소명 */}
                      <td className="pl-[6px] max-w-[200px] pr-[10px] py-4 text-sm text-slate-600 dark:text-gray-400">
                        {project.powerPlantName}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Table Footer Bar */}
          <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 px-6">
            {/* Left - Result Summary */}
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
              총 {projects.length}개 프로젝트
              <span className="ml-2 text-sm font-normal text-gray-400 dark:text-gray-600">
                ({startIndex}–{endIndex} / {projects.length})
              </span>
            </div>

            {/* Center - Jump to Page (Low Priority) */}
            <div className="flex items-center gap-2 opacity-70">
              <label className="text-sm text-slate-600 dark:text-gray-400">
                페이지 이동
              </label>
              <input className="w-[60px] px-2 py-1 text-sm text-center outline-none transition-all bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-slate-900 dark:text-gray-50 focus:border-[#243c84]"
                type="number"
                min="1"
                max={totalPages}
                value={jumpToPage}
                onChange={(e) => setJumpToPage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const pageNum = parseInt(jumpToPage);
                    if (pageNum > 0 && pageNum <= totalPages) {
                      setCurrentPage(pageNum);
                    }
                  }
                }}/>
            </div>

            {/* Right - Rows Per Page & Pagination */}
            <div className="flex items-center gap-4">
              {/* Rows Per Page Control */}
              <div className="flex items-center gap-2">
                <label className="text-sm text-slate-600 dark:text-gray-400">
                  페이지당 항목 수
                </label>
                <div className="relative">
                  <select className="min-w-[70px] pl-2 pr-7 py-1 text-sm outline-none transition-all appearance-none cursor-pointer bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-slate-900 dark:text-gray-50 focus:border-[#243c84]"
                    value={rowsPerPage}
                    onChange={(e) => {
                      setRowsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                      setJumpToPage('1');
                    }}>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 dark:text-gray-600"  
                    size={14}/>
                </div>
              </div>

              {/* Pagination Buttons */}
              <div className="flex items-center gap-1">
                {/* Previous Button */}
                <button className={`w-8 h-8 rounded-md text-sm font-medium transition-colors flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 ${
                    currentPage === 1 
                      ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed opacity-50' 
                      : 'text-slate-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => {
                    if (currentPage > 1) {
                      setCurrentPage(currentPage - 1);
                      setJumpToPage(String(currentPage - 1));
                    }
                  }}
                  disabled={currentPage === 1}>
                  ‹
                </button>

                {/* Page Numbers */}
                {getPageNumbers().map((page) => (
                  <button className={`w-8 h-8 rounded-md text-sm font-medium transition-colors ${
                      page === currentPage
                        ? 'bg-[#243c84] text-white'
                        : 'bg-white dark:bg-gray-800 text-slate-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                      setJumpToPage(String(page));
                    }}>
                    {page}
                  </button>
                ))}

                {/* Next Button */}
                <button className={`w-8 h-8 rounded-md text-sm font-medium transition-colors flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 ${
                    currentPage === totalPages
                      ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed opacity-50'
                      : 'text-slate-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => {
                    if (currentPage < totalPages) {
                      setCurrentPage(currentPage + 1);
                      setJumpToPage(String(currentPage + 1));
                    }
                  }}
                  disabled={currentPage === totalPages}>
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Card List */}
        <div className="md:hidden">
          <div className="flex flex-col gap-3">
            {projects.slice(0, mobileDisplayCount).map((project) => {
              const isExpanded = expandedCards.has(project.id);
              
              return (
                <div className="p-4 rounded-xl bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
                  key={project.id}>
                  {/* Collapsed State - Always Visible */}
                  <div className="cursor-pointer"
                    onClick={() => toggleCard(project.id)} >
                    {/* Top Row: Project Name + Toggle Icon */}
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-[15px] font-semibold leading-[22px] flex-1 text-slate-900 dark:text-gray-50">
                        {project.projectName}
                      </h3>
                      <button className="ml-2 p-1 text-slate-600 dark:text-gray-400 bg-transparent border-none">
                        {isExpanded ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}
                      </button>
                    </div>

                    {/* Basic Info Grid - 2 columns */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-3">
                      {/* Status */}
                      <div>
                        <div className="text-[12px] font-medium leading-[18px] mb-1 text-slate-600 dark:text-gray-400">
                          진행상태
                        </div>
                        <div className="flex items-center gap-2">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{
                              backgroundColor: getStatusDotColor(project.status)
                            }}
                          />
                          <span className="text-[14px] font-normal leading-[1.5] text-slate-900 dark:text-gray-50">
                            {project.status}
                          </span>
                        </div>
                      </div>

                      {/* Capacity */}
                      <div>
                        <div className="text-[12px] font-medium leading-[18px] mb-1 text-slate-600 dark:text-gray-400">
                          예상용량
                        </div>
                        <div className="text-[14px] font-normal leading-[1.5] text-slate-900 dark:text-gray-50">
                          {project.capacity} kW
                        </div>
                      </div>

                      {/* Installation Type */}
                      <div>
                        <div className="text-[12px] font-medium leading-[18px] mb-1 text-slate-600 dark:text-gray-400">
                          설치유형
                        </div>
                        <div className="text-[14px] font-normal leading-[1.5] text-slate-900 dark:text-gray-50">
                          {project.installationType}
                        </div>
                      </div>

                      {/* Date */}
                      <div>
                        <div className="text-[12px] font-medium leading-[18px] mb-1 text-slate-600 dark:text-gray-400">
                          접수일자
                        </div>
                        <div className="text-[14px] font-normal leading-[1.5] text-slate-900 dark:text-gray-50">
                          {project.date}
                        </div>
                      </div>
                    </div>

                    {/* Expand Indicator */}
                    <div className="text-[12px] font-medium leading-[18px] flex items-center gap-1 text-[#243c84] dark:text-blue-400">
                      {isExpanded ? '접기' : '상세보기'}
                    </div>
                  </div>

                  {/* Expanded State - Conditional */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-600">
                      {/* Additional Info Grid */}
                      <div className="grid grid-cols-1 gap-3 mb-4">
                        {/* Sales Company */}
                        <div>
                          <div className="text-[12px] font-medium leading-[18px] mb-1 text-slate-600 dark:text-gray-400">
                            영업사
                          </div>
                          <div className="text-[14px] font-normal leading-[1.5] text-slate-900 dark:text-gray-50">
                            {project.salesCompany}
                          </div>
                        </div>

                        {/* Construction Company */}
                        <div>
                          <div className="text-[12px] font-medium leading-[18px] mb-1 text-slate-600 dark:text-gray-400">
                            시공사
                          </div>
                          <div className="text-[14px] font-normal leading-[1.5] text-slate-900 dark:text-gray-50">
                            {project.constructionCompany || '-'}
                          </div>
                        </div>

                        {/* Power Plant Name */}
                        <div>
                          <div className="text-[12px] font-medium leading-[18px] mb-1 text-slate-600 dark:text-gray-400">
                            발전소명
                          </div>
                          <div className="text-[14px] font-normal leading-[1.5] text-slate-900 dark:text-gray-50">
                            {project.powerPlantName}
                          </div>
                        </div>

                        {/* Location */}
                        <div>
                          <div className="text-[12px] font-medium leading-[18px] mb-1 text-slate-600 dark:text-gray-400">
                            위치
                          </div>
                          <div className="text-[14px] font-normal leading-[1.5] text-slate-900 dark:text-gray-50">
                            {project.location}
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3 pt-3 border-t border-gray-100 dark:border-gray-600">
                        <Link href="/project-management">
                          <button className="flex items-center gap-1.5 text-[13px] font-medium px-3 py-2 rounded-lg text-[#243c84] dark:text-blue-400 bg-gray-50 dark:bg-gray-600 border-none">
                            <Settings size={14} strokeWidth={2.5} />
                            <span>진행관리</span>
                          </button>
                        </Link>
                        <Link href="/project-detail">
                          <button className="flex items-center gap-1.5 text-[13px] font-medium px-3 py-2 rounded-lg text-[#243c84] dark:text-blue-400 bg-gray-50 dark:bg-gray-600 border-none">
                            <FileText size={14} strokeWidth={2.5} />
                            <span>정보조회</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Load More Button */}
          {mobileDisplayCount < projects.length && (
            <div className="mt-4">
              <button className="w-full py-3 rounded-xl text-[14px] font-semibold bg-gray-50 dark:bg-gray-700 text-slate-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                onClick={() => setMobileDisplayCount(prev => prev + 10)}>
                더 보기 ({mobileDisplayCount} / {projects.length})
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}