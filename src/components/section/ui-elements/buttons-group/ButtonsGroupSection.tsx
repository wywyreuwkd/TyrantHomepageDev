"use client"

import Link from "next/link";
import { Home, ChevronRight, LayoutGrid, List, Calendar, ChevronDown, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify, Maximize2, Download, Share2, MoreHorizontal, Eye, Edit, Trash2, Copy, Star, Heart, Bookmark, ZoomIn, ZoomOut, RotateCcw, Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { useState } from 'react';

export function ButtonsGroupSection() {
	
	const [viewMode, setViewMode] = useState<'grid' | 'list' | 'calendar'>('grid');
  const [textAlign, setTextAlign] = useState<'left' | 'center' | 'right' | 'justify'>('left');
  const [selectedFormats, setSelectedFormats] = useState<string[]>([]);
  const [favorited, setFavorited] = useState(false);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const toggleFormat = (format: string) => {
    setSelectedFormats(prev => 
      prev.includes(format) ? prev.filter(f => f !== format) : [...prev, format]
    );
  };

	return (
    <div>
      {/* Segmented Controls */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          Segmented Controls
        </h2>
        <p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          단일 선택 옵션 그룹 (뷰 모드, 필터 등)
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[14px] font-semibold mb-4 text-gray-600 dark:text-gray-50">
              View Mode Selector
            </h3>
            <div className="inline-flex p-1 bg-slate-100 dark:bg-gray-700 rounded-lg gap-1">
              <button className={`h-9 px-4 text-[14px] font-semibold rounded-md border-0 cursor-pointer transition-all flex items-center gap-2 ${viewMode === 'grid' ? 'bg-white text-[#243c84] shadow-md' : 'bg-transparent text-slate-500'}`}
                onClick={() => setViewMode('grid')}>
                <LayoutGrid size={16} />
                그리드
              </button>

              <button className={`h-9 px-4 text-[14px] font-semibold rounded-md border-0 cursor-pointer transition-all flex items-center gap-2 ${viewMode === 'list' ? 'bg-white text-[#243c84] shadow-md' : 'bg-transparent text-slate-500'}`}
                onClick={() => setViewMode('list')}>
                <List size={16} />
                리스트
              </button>

              <button className={`h-9 px-4 text-[14px] font-semibold rounded-md border-0 cursor-pointer transition-all flex items-center gap-2 ${viewMode === 'calendar' ? 'bg-white text-[#243c84] shadow-md' : 'bg-transparent text-slate-500'}`}
                onClick={() => setViewMode('calendar')}>
                <Calendar size={16} />
                캘린더
              </button>
            </div>
          </div>

          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[14px] font-semibold mb-4 text-gray-600 dark:text-gray-50">
              Text Alignment
            </h3>
            <div className="inline-flex p-1 bg-slate-100 dark:bg-gray-700 rounded-lg gap-1">
              <button className={`w-9 h-9 p-0 rounded-md border-0 cursor-pointer transition-all flex items-center justify-center ${textAlign === 'left' ? 'bg-white text-[#243c84] shadow-md' : 'bg-transparent text-slate-500'}`}
                onClick={() => setTextAlign('left')}>
                <AlignLeft size={16} />
              </button>

              <button className={`w-9 h-9 p-0 rounded-md border-0 cursor-pointer transition-all flex items-center justify-center ${textAlign === 'center' ? 'bg-white text-[#243c84] shadow-md' : 'bg-transparent text-slate-500'}`}
                onClick={() => setTextAlign('center')}>
                <AlignCenter size={16} />
              </button>

              <button className={`w-9 h-9 p-0 rounded-md border-0 cursor-pointer transition-all flex items-center justify-center ${textAlign === 'right' ? 'bg-white text-[#243c84] shadow-md' : 'bg-transparent text-slate-500'}`}
                onClick={() => setTextAlign('right')}>
                <AlignRight size={16} />
              </button>

              <button className={`w-9 h-9 p-0 rounded-md border-0 cursor-pointer transition-all flex items-center justify-center ${textAlign === 'justify' ? 'bg-white text-[#243c84] shadow-md' : 'bg-transparent text-slate-500'}`}
                onClick={() => setTextAlign('justify')}>
                <AlignJustify size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Connected Button Groups */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          Connected Button Groups
        </h2>
        <p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          서로 연결된 관련 작업 버튼
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[14px] font-semibold mb-4 text-gray-600 dark:text-gray-50">
              Outlined Group
            </h3>
            <div className="inline-flex">
              <button className="h-10 px-5 bg-transparent hover:bg-slate-50 text-[#243c84] text-[14px] font-semibold rounded-l-md border-[1.5px] border-[#243c84] border-r-0 cursor-pointer transition-all flex items-center gap-2">
                <Eye size={16} />
                보기
              </button>

              <button className="h-10 px-5 bg-transparent hover:bg-slate-50 text-[#243c84] text-[14px] font-semibold rounded-none border-[1.5px] border-[#243c84] border-r-0 cursor-pointer transition-all flex items-center gap-2">
                <Edit size={16} />
                수정
              </button>

              <button className="h-10 px-5 bg-transparent hover:bg-slate-50 text-[#243c84] text-[14px] font-semibold rounded-r-md border-[1.5px] border-[#243c84] cursor-pointer transition-all flex items-center gap-2">
                <Trash2 size={16} />
                삭제
              </button>
            </div>
          </div>

          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[14px] font-semibold mb-4 text-gray-600 dark:text-gray-50">
              Icon Group
            </h3>
            <div className="inline-flex">
              <button className="w-10 h-10 p-0 bg-transparent hover:bg-slate-100 hover:text-[#243c84] text-slate-500 rounded-l-md border border-slate-200 border-r-0 cursor-pointer transition-all flex items-center justify-center">
                <ZoomIn size={18} />
              </button>

              <button className="w-10 h-10 p-0 bg-transparent hover:bg-slate-100 hover:text-[#243c84] text-slate-500 rounded-none border border-slate-200 border-r-0 cursor-pointer transition-all flex items-center justify-center">
                <ZoomOut size={18} />
              </button>

              <button className="w-10 h-10 p-0 bg-transparent hover:bg-slate-100 hover:text-[#243c84] text-slate-500 rounded-none border border-slate-200 border-r-0 cursor-pointer transition-all flex items-center justify-center">
                <RotateCcw size={18} />
              </button>

              <button className="w-10 h-10 p-0 bg-transparent hover:bg-slate-100 hover:text-[#243c84] text-slate-500 rounded-r-md border border-slate-200 cursor-pointer transition-all flex items-center justify-center">
                <Maximize2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Button Groups */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          Toggle Button Groups
        </h2>
        <p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          다중 선택 가능한 토글 버튼 (텍스트 포맷, 필터 등)
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[14px] font-semibold mb-4 text-gray-600 dark:text-gray-50">
              Text Formatting
            </h3>
            <div className="inline-flex">
              <button className={`w-10 h-10 p-0 rounded-l-md border border-r-0 cursor-pointer transition-all flex items-center justify-center ${selectedFormats.includes('bold') ? 'bg-[#243c84] text-white border-[#243c84]' : 'bg-transparent hover:bg-slate-100 text-slate-500 border-slate-200'}`}
                onClick={() => toggleFormat('bold')}>
                <Bold size={18} />
              </button>

              <button className={`w-10 h-10 p-0 rounded-none border border-r-0 cursor-pointer transition-all flex items-center justify-center ${selectedFormats.includes('italic') ? 'bg-[#243c84] text-white border-[#243c84]' : 'bg-transparent hover:bg-slate-100 text-slate-500 border-slate-200'}`}
                onClick={() => toggleFormat('italic')}>
                <Italic size={18} />
              </button>

              <button className={`w-10 h-10 p-0 rounded-r-md border cursor-pointer transition-all flex items-center justify-center ${selectedFormats.includes('underline') ? 'bg-[#243c84] text-white border-[#243c84]' : 'bg-transparent hover:bg-slate-100 text-slate-500 border-slate-200'}`}
                onClick={() => toggleFormat('underline')}>
                <Underline size={18} />
              </button>
            </div>
          </div>

          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[14px] font-semibold mb-4 text-gray-600 dark:text-gray-50">
              Action Toggles
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              <button className={`h-10 px-4 text-[14px] font-semibold rounded-md border cursor-pointer transition-all flex items-center gap-2 ${favorited ? 'bg-amber-100 text-amber-600 border-amber-400' : 'bg-transparent text-slate-500 border-slate-200'}`}
                onClick={() => setFavorited(!favorited)}>
                <Star size={16} fill={favorited ? '#fbbf24' : 'none'} />
                즐겨찾기
              </button>

              <button className={`h-10 px-4 text-[14px] font-semibold rounded-md border cursor-pointer transition-all flex items-center gap-2 ${liked ? 'bg-red-100 text-red-600 border-red-400' : 'bg-transparent text-slate-500 border-slate-200'}`}
                onClick={() => setLiked(!liked)}>
                <Heart size={16} fill={liked ? '#f87171' : 'none'} />
                좋아요
              </button>

              <button className={`h-10 px-4 text-[14px] font-semibold rounded-md border cursor-pointer transition-all flex items-center gap-2 ${bookmarked ? 'bg-blue-100 text-blue-600 border-blue-400' : 'bg-transparent text-slate-500 border-slate-200'}`}
                onClick={() => setBookmarked(!bookmarked)}>
                <Bookmark size={16} fill={bookmarked ? '#60a5fa' : 'none'} />
                북마크
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Split Buttons */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          Split Buttons
        </h2>
        <p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          기본 동작과 추가 옵션이 결합된 버튼
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[14px] font-semibold mb-4 text-gray-600 dark:text-gray-50">
              Primary Split
            </h3>
            <div className="inline-flex">
              <button className="h-10 px-5 bg-[#243c84] hover:bg-[#1d3069] text-white text-[14px] font-semibold rounded-l-md border-0 cursor-pointer shadow-sm transition-all">
                저장하기
              </button>

              <div className="w-px h-10 bg-white/30" />

              <button className="w-10 h-10 p-0 bg-[#243c84] hover:bg-[#1d3069] text-white rounded-r-md border-0 cursor-pointer shadow-sm transition-all flex items-center justify-center">
                <ChevronDown size={16} />
              </button>
            </div>
          </div>

          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[14px] font-semibold mb-4 text-gray-600 dark:text-gray-50">
              Secondary Split
            </h3>
            <div className="inline-flex">
              <button className="h-10 px-5 bg-transparent hover:bg-slate-50 text-[#243c84] text-[14px] font-semibold rounded-l-md border-[1.5px] border-[#243c84] border-r-0 cursor-pointer transition-all flex items-center gap-2">
                <Download size={16} />
                다운로드
              </button>

              <button className="w-10 h-10 p-0 bg-transparent hover:bg-slate-50 text-[#243c84] rounded-r-md border-[1.5px] border-[#243c84] cursor-pointer transition-all flex items-center justify-center">
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Action Toolbars */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-2 text-gray-900 dark:text-gray-50">
          Action Toolbars
        </h2>
        <p className="text-[13px] mb-6 text-gray-600 dark:text-gray-400">
          관련 작업을 그룹화한 툴바
        </p>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[14px] font-semibold mb-4 text-gray-600 dark:text-gray-50">
              Table Actions
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              <button className="h-10 px-5 bg-[#243c84] hover:bg-[#1d3069] text-white text-[14px] font-semibold rounded-md border-0 cursor-pointer shadow-sm transition-all flex items-center gap-2">
                <Download size={16} />
                내보내기
              </button>

              <div className="w-px h-6 bg-gray-200 dark:bg-gray-600" />

              <button className="h-10 px-4 bg-transparent hover:bg-slate-100 hover:text-[#243c84] text-slate-500 text-[14px] font-semibold rounded-md border border-slate-200 cursor-pointer transition-all flex items-center gap-2">
                <Copy size={16} />
                복사
              </button>

              <button className="h-10 px-4 bg-transparent hover:bg-slate-100 hover:text-[#243c84] text-slate-500 text-[14px] font-semibold rounded-md border border-slate-200 cursor-pointer transition-all flex items-center gap-2">
                <Share2 size={16} />
                공유
              </button>

              <div className="w-px h-6 bg-gray-200 dark:bg-gray-600" />

              <button className="w-10 h-10 p-0 bg-transparent hover:bg-slate-100 hover:text-[#243c84] text-slate-500 rounded-md border border-slate-200 cursor-pointer transition-all flex items-center justify-center">
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>

          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[14px] font-semibold mb-4 text-gray-600 dark:text-gray-50">
              Media Controls
            </h3>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 p-0 bg-transparent hover:bg-slate-100 hover:text-[#243c84] text-slate-500 rounded-md border border-slate-200 cursor-pointer transition-all flex items-center justify-center">
                <SkipBack size={18} />
              </button>

              <button className="w-12 h-12 p-0 bg-[#243c84] hover:bg-[#1d3069] text-white rounded-full border-0 cursor-pointer shadow-md hover:shadow-lg transition-all flex items-center justify-center">
                <Play size={20} fill="#ffffff" />
              </button>

              <button className="w-10 h-10 p-0 bg-transparent hover:bg-slate-100 hover:text-[#243c84] text-slate-500 rounded-md border border-slate-200 cursor-pointer transition-all flex items-center justify-center">
                <SkipForward size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
}