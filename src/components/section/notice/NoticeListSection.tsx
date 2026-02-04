"use client"

import { Menu, Search, Plus, ChevronLeft, ChevronRight, FileText, Pin, Home } from 'lucide-react';
import { useState } from 'react';
import { notices } from "@/data/noticeListData";

interface Notice {
  id: number;
  title: string;
  category: '일반' | '중요';
  author: string;
  date: string;
  views: number;
  isPinned?: boolean;
}

export function NoticeListSection() {

	const noticeList = notices; // 공지사항 테스트 데이터 가져오기
	
	const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'전체' | '일반' | '중요'>('전체');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;  

  // 필터링된 공지사항
  const filteredNotices = noticeList.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '전체' || notice.category === selectedCategory;
    	
    return matchesSearch && matchesCategory;
  });

  // 페이지네이션
  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNotices = filteredNotices.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPaginationRange = () => {
    const range = [];
    const maxButtons = 5;
    
    let start = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let end = Math.min(totalPages, start + maxButtons - 1);
    
    if (end - start < maxButtons - 1) {
      start = Math.max(1, end - maxButtons + 1);
    }
    
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    
    return range;
  };

  return(
  	<div>
  		{/* 검색 및 필터 영역 */}
      <div className="mb-6 rounded-[10px] p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row gap-4">
          {/* 검색창 */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-600"/>
            <input className="w-full pl-10 pr-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent text-sm md:text-base bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-50"
              type="text"
              placeholder="제목으로 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}/>
          </div>

          {/* 카테고리 필터 */}
          <div className="flex gap-2">
            {(['전체', '일반', '중요'] as const).map((category) => (
              <button className={`px-4 py-2.5 rounded-lg transition-colors text-sm md:text-base whitespace-nowrap hover:opacity-80 ${ selectedCategory === category ? 'bg-[#243c84] dark:bg-[#5a7bc8] text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400' }`}
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 공지사항 목록 */}
      <div className="rounded-[10px] overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        {/* 테이블 헤더 (PC만 표시) */}
        <div className="hidden md:grid md:grid-cols-12 gap-4 px-5 py-4 border-b bg-slate-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700">
          <div className="col-span-1 text-sm text-slate-600 dark:text-gray-400">번호</div>
          <div className="col-span-6 text-sm text-slate-600 dark:text-gray-400">제목</div>
          <div className="col-span-1 text-sm text-slate-600 dark:text-gray-400">분류</div>
          <div className="col-span-2 text-sm text-slate-600 dark:text-gray-400">작성자</div>
          <div className="col-span-1 text-sm text-slate-600 dark:text-gray-400">등록일</div>
          <div className="col-span-1 text-sm text-right text-slate-600 dark:text-gray-400">조회</div>
        </div>

        {/* 공지사항 목록 */}
        {currentNotices.length > 0 ? (
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {currentNotices.map((notice) => (
              <div className="px-4 md:px-5 py-4 transition-colors cursor-pointer hover:bg-slate-50 dark:hover:bg-gray-900 border-gray-200 dark:border-gray-700"
                key={notice.id} >
                {/* 모바일 레이아웃 */}
                <div className="md:hidden">
                  <div className="flex items-start gap-2 mb-2">
                    {notice.isPinned && (
                      <Pin className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#243c84] dark:text-[#5a7bc8]" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`inline-block px-2 py-0.5 rounded text-xs ${ notice.category === '중요' ? 'bg-red-50 dark:bg-red-950 text-[#d8442c] dark:text-red-400' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400' }`}>
                          {notice.category}
                        </span>
                      </div>
                      <h3 className={`text-sm mb-2 break-words ${ notice.category === '중요' ? 'text-[#243c84] dark:text-[#5a7bc8] font-semibold' : 'text-gray-900 dark:text-gray-50 font-normal'}`}>
                        {notice.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-gray-400">
                        <span>{notice.author}</span>
                        <span>{notice.date}</span>
                        <span>조회 {notice.views}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PC 레이아웃 */}
                <div className="hidden md:grid md:grid-cols-12 gap-4 items-center">
                  <div className="col-span-1 text-sm text-slate-600 dark:text-gray-400">
                    {notice.isPinned ? (
                      <Pin className="w-4 h-4 text-[#243c84] dark:text-[#5a7bc8]" />
                    ) : (
                      <span>{notice.id}</span>
                    )}
                  </div>
                  <div className="col-span-6">
                    <div className="flex items-center gap-2">
                      {notice.isPinned && (
                        <Pin className="w-4 h-4 flex-shrink-0 text-[#243c84] dark:text-[#5a7bc8]" />
                      )}
                      <span className={`text-sm ${ notice.category === '중요' ? 'text-[#243c84] dark:text-[#5a7bc8] font-semibold' : 'text-gray-900 dark:text-gray-50 font-normal' }`}>
                        {notice.title}
                      </span>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <span className={`inline-block px-2 py-1 rounded text-xs ${ notice.category === '중요' ? 'bg-red-50 dark:bg-red-950 text-[#d8442c] dark:text-red-400' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400' }`}>
                      {notice.category}
                    </span>
                  </div>
                  <div className="col-span-2 text-sm text-slate-600 dark:text-gray-400">{notice.author}</div>
                  <div className="col-span-1 text-sm text-slate-600 dark:text-gray-400">{notice.date}</div>
                  <div className="col-span-1 text-sm text-right text-slate-600 dark:text-gray-400">{notice.views}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="px-5 py-12 text-center">
            <FileText className="w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" />
            <p className="text-sm md:text-base text-slate-600 dark:text-gray-400">검색 결과가 없습니다</p>
          </div>
        )}
      </div>

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          <button className="p-2 rounded-lg hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}>
            <ChevronLeft className="w-5 h-5 text-slate-600 dark:text-gray-400" />
          </button>

          {getPaginationRange().map((page) => (
            <button className={`min-w-[40px] h-10 px-3 rounded-lg transition-colors text-sm md:text-base hover:opacity-80 ${ currentPage === page ? 'bg-[#243c84] dark:bg-[#5a7bc8] text-white border-none' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700' }`}
              key={page}
              onClick={() => handlePageChange(page)}>
              {page}
            </button>
          ))}

          <button className="p-2 rounded-lg hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}>
            <ChevronRight className="w-5 h-5 text-slate-600 dark:text-gray-400" />
          </button>
        </div>
      )}

      {/* 총 게시물 수 */}
      <div className="mt-4 text-center text-sm text-slate-600 dark:text-gray-400">
        전체 {filteredNotices.length}개의 공지사항
      </div>
  	</div>
  );
}