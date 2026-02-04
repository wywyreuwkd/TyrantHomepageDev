import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Info, AlertTriangle, AlertCircle, Home, ChevronRight, X, Megaphone, Bell } from 'lucide-react';

export const metadata: Metadata = {
  title: "Notifications | 타이런트 - 관리자",
  description: "타이런트 관리자 Notifications 페이지",
};

const BRAND_PRIMARY = '#243c84';
const BRAND_ACCENT = '#d8442c';

export default function Notifications() {
  
  return (
    <div className="py-6 md:px-6">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 mb-12">
        <div>
          <h1 className="text-[24px] md:text-[28px] font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Notifications
          </h1>
          <p className="text-[14px] mt-1 text-gray-600 dark:text-gray-400">
            프리미엄 알림 시스템
          </p>
        </div>

        <nav className="hidden md:flex items-center gap-2 flex-shrink-0">
          <Link href="/main">
            <div className="flex items-center gap-1.5 cursor-pointer">
              <Home className="text-gray-400 dark:text-gray-600"
                size={14}/>
              <span className="text-[13px] font-medium whitespace-nowrap text-gray-600 dark:text-gray-400">
                홈
              </span>
            </div>
          </Link>
          <ChevronRight size={12} className="text-gray-300 dark:text-gray-600" />
          <span className="text-[13px] font-medium whitespace-nowrap text-gray-600 dark:text-gray-400">
            UI Elements
          </span>
          <ChevronRight size={12} className="text-gray-300 dark:text-gray-600" />
          <span className="text-[13px] font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">
            Notifications
          </span>
        </nav>
      </div>

      {/* Announcement Bar */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-[#243c84]" />
          <h2 className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-50">
            공지 배너
          </h2>
        </div>
        
        <div className="space-y-3">
          <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 px-4 transition-all duration-200">
            <div className="flex items-center gap-3">
              <Megaphone className="text-[#243c84] shrink-0"
                size={16} />
              <div className="flex-1 min-w-0">
                <span className="text-[13px] font-medium text-gray-700 dark:text-gray-100">
                  신기능 출시: 모든 사용자에게 고급 분석 기능을 제공합니다.{' '}
                </span>
                <Link className="text-[13px] font-semibold underline text-[#243c84]"
                  href="#">
                  자세히 보기 →
                </Link>
              </div>
              <button className="w-6 h-6 flex items-center justify-center text-gray-600 dark:text-gray-400 bg-transparent border-0 rounded cursor-pointer transition-all duration-150 shrink-0 hover:bg-gray-200 dark:hover:bg-gray-700">
                <X size={14} />
              </button>
            </div>
          </div>

          <div className="bg-yellow-100 dark:bg-yellow-900/20 border border-yellow-400 dark:border-yellow-800 rounded-lg p-3 px-4 transition-all duration-200">
            <div className="flex items-center gap-3">
              <Info className="text-yellow-600 shrink-0"
                size={16} />
              <div className="flex-1 min-w-0">
                <span className="text-[13px] font-medium text-yellow-900 dark:text-yellow-100">
                  1월 20일 오전 2시-4시(UTC) 정기 점검이 예정되어 있습니다. 일시적으로 서비스 이용이 불가할 수 있습니다.
                </span>
              </div>
              <button className="w-6 h-6 flex items-center justify-center text-yellow-700 dark:text-yellow-400 bg-transparent border-0 rounded cursor-pointer transition-all duration-150 shrink-0 hover:bg-yellow-400/10 dark:hover:bg-yellow-400/10">
                <X size={14} />
              </button>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] rounded-lg p-2.5 px-4 transition-all duration-200">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[13px] font-medium text-gray-700 dark:text-gray-300">
                🎉 제품 v2.0이 출시되었습니다! 새로운 기능을 확인해보세요.
              </span>
              <div className="flex items-center gap-2">
                <button className="px-2.5 h-6 text-xs font-medium text-gray-900 dark:text-gray-50 bg-white dark:bg-[#2a2a2a] border border-gray-300 dark:border-gray-600 rounded cursor-pointer transition-all duration-150 whitespace-nowrap hover:bg-gray-100 dark:hover:bg-gray-700">
                  보기
                </button>
                <button className="w-6 h-6 flex items-center justify-center text-gray-600 dark:text-gray-400 bg-transparent border-0 rounded cursor-pointer transition-all duration-150 shrink-0 hover:bg-gray-100 dark:hover:bg-[#2a2a2a]">
                  <X size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-[#243c84]" />
          <h2 className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-50">
            토스트 알림
          </h2>
        </div>
        
        <div className="space-y-3">
          <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-[#2a2a2a] rounded-xl overflow-hidden shadow-lg dark:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)] max-w-md transition-all duration-200">
            <div className="p-3.5 px-4">
              <div className="flex items-start gap-3">
                <Bell className="text-[#243c84] shrink-0 mt-px"
                  size={18} />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium tracking-tight text-[#0a0a0a] dark:text-[#f5f5f5] mb-0.5">
                    파일 업로드 완료
                  </div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400">
                    문서.pdf • 2.4 MB
                  </div>
                </div>
                <button className="w-6 h-6 flex items-center justify-center text-neutral-500 dark:text-neutral-600 bg-transparent border-0 rounded cursor-pointer transition-all duration-150 shrink-0 hover:bg-neutral-100 dark:hover:bg-[#1f1f1f]">
                  <X size={14} />
                </button>
              </div>
            </div>
            <div className="w-full h-[3px] bg-neutral-200 dark:bg-[#2a2a2a]">
              <div className="w-[70%] h-full bg-[#243c84] transition-[width] duration-300" />
            </div>
          </div>

          <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-[#2a2a2a] rounded-[10px] p-3 px-3.5 shadow-lg dark:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)] max-w-xs transition-all duration-200">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-[#243c84] shrink-0"
                size={16} />
              <div className="flex-1 min-w-0">
                <span className="text-[13px] font-medium text-[#0a0a0a] dark:text-[#f5f5f5]">
                  설정 저장됨
                </span>
              </div>
              <button className="w-5 h-5 flex items-center justify-center text-neutral-500 dark:text-neutral-600 bg-transparent border-0 rounded cursor-pointer transition-all duration-150 shrink-0 hover:text-neutral-600 dark:hover:text-neutral-400">
                <X size={12} />
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-[#2a2a2a] rounded-xl p-3.5 px-4 shadow-lg dark:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4),0_2px_4px_-1px_rgba(0,0,0,0.3)] max-w-md transition-all duration-200">
            <div className="flex items-start gap-3">
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium tracking-tight text-[#0a0a0a] dark:text-[#f5f5f5] mb-1">
                  팀 초대 전송됨
                </div>
                <div className="text-[13px] text-neutral-600 dark:text-neutral-400 mb-2.5">
                  john@example.com님이 워크스페이스에 초대되었습니다.
                </div>
                <button className="px-3 h-[26px] text-xs font-medium text-white bg-[#243c84] border-0 rounded-md cursor-pointer transition-all duration-150 hover:bg-[#1a2f6b]">
                  초대 확인
                </button>
              </div>
              <button className="w-6 h-6 flex items-center justify-center text-neutral-500 dark:text-neutral-600 bg-transparent border-0 rounded cursor-pointer transition-all duration-150 shrink-0 hover:bg-neutral-100 dark:hover:bg-[#1f1f1f]">
                <X size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Notification */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-[#243c84]" />
          <h2 className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-50">
            성공
          </h2>
        </div>
        
        <div className="space-y-3">
          <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-[#2a2a2a] rounded-xl p-3.5 px-4 shadow-sm dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] transition-all duration-200 hover:border-neutral-200 dark:hover:border-neutral-700 hover:shadow-md dark:hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)]">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-green-500 shrink-0 mt-px"
                size={18} />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium tracking-tight text-[#0a0a0a] dark:text-[#f5f5f5] mb-1">
                  결제 완료
                </div>
                <div className="text-[13px] text-neutral-600 dark:text-neutral-400 leading-normal">
                  결제가 성공적으로 처리되었습니다.
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button className="px-3 h-7 text-xs font-medium text-[#0a0a0a] dark:text-[#f5f5f5] bg-transparent border border-neutral-200 dark:border-neutral-700 rounded-md cursor-pointer transition-all duration-150 whitespace-nowrap hover:bg-neutral-50 dark:hover:bg-[#1f1f1f] hover:border-neutral-300 dark:hover:border-neutral-600">
                  View
                </button>
                <button className="w-7 h-7 flex items-center justify-center text-neutral-500 dark:text-neutral-600 bg-transparent border-0 rounded-md cursor-pointer transition-all duration-150 hover:bg-neutral-100 dark:hover:bg-[#1f1f1f] hover:text-neutral-600 dark:hover:text-neutral-400">
                  <X size={14} />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-[#2a2a2a] rounded-xl p-3.5 px-4 shadow-sm dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] transition-all duration-200 hover:border-neutral-200 dark:hover:border-neutral-700 hover:shadow-md dark:hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)]">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-green-500 shrink-0 mt-px"
                size={18} />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium tracking-tight text-[#0a0a0a] dark:text-[#f5f5f5] mb-1">
                  변경사항 저장됨
                </div>
                <div className="text-[13px] text-neutral-600 dark:text-neutral-400 leading-normal">
                  변경사항이 성공적으로 저장되었습니다.
                </div>
              </div>
              <button className="w-7 h-7 flex items-center justify-center text-neutral-500 dark:text-neutral-600 bg-transparent border-0 rounded-md cursor-pointer transition-all duration-150 shrink-0 hover:bg-neutral-100 dark:hover:bg-[#1f1f1f] hover:text-neutral-600 dark:hover:text-neutral-400">
                <X size={14} />
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-[#2a2a2a] rounded-xl p-3.5 px-4 shadow-sm dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] transition-all duration-200 hover:border-neutral-200 dark:hover:border-neutral-700 hover:shadow-md dark:hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)]">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-green-500 shrink-0 mt-px"
                size={18} />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium tracking-tight text-[#0a0a0a] dark:text-[#f5f5f5] mb-1">
                  데이터 동기화 완료
                </div>
                <div className="text-[13px] text-neutral-600 dark:text-neutral-400 leading-normal">
                  모든 데이터가 성공적으로 동기화되었습니다.
                </div>
              </div>
              <button className="w-7 h-7 flex items-center justify-center text-neutral-500 dark:text-neutral-600 bg-transparent border-0 rounded-md cursor-pointer transition-all duration-150 shrink-0 hover:bg-neutral-100 dark:hover:bg-[#1f1f1f] hover:text-neutral-600 dark:hover:text-neutral-400">
                <X size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Info Notification */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-[#243c84]" />
          <h2 className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-50">
            정보
          </h2>
        </div>
        
        <div className="space-y-3">
          <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-[#2a2a2a] rounded-xl p-3.5 px-4 shadow-sm dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] transition-all duration-200 hover:border-neutral-200 dark:hover:border-neutral-700 hover:shadow-md dark:hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)]">
            <div className="flex items-start gap-3">
              <Info className="text-blue-500 shrink-0 mt-px"
                size={18} />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium tracking-tight text-[#0a0a0a] dark:text-[#f5f5f5] mb-1">
                  새로운 기능 출시
                </div>
                <div className="text-[13px] text-neutral-600 dark:text-neutral-400 leading-normal">
                  최신 업데이트 및 개선 사항을 확인하세요.
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button className="px-3 h-7 text-xs font-medium text-[#0a0a0a] dark:text-[#f5f5f5] bg-transparent border border-neutral-200 dark:border-neutral-700 rounded-md cursor-pointer transition-all duration-150 whitespace-nowrap hover:bg-neutral-50 dark:hover:bg-[#1f1f1f] hover:border-neutral-300 dark:hover:border-neutral-600">
                  Learn more
                </button>
                <button className="w-7 h-7 flex items-center justify-center text-neutral-500 dark:text-neutral-600 bg-transparent border-0 rounded-md cursor-pointer transition-all duration-150 hover:bg-neutral-100 dark:hover:bg-[#1f1f1f] hover:text-neutral-600 dark:hover:text-neutral-400">
                  <X size={14} />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-[#2a2a2a] rounded-xl p-3.5 px-4 shadow-sm dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] transition-all duration-200 hover:border-neutral-200 dark:hover:border-neutral-700 hover:shadow-md dark:hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)]">
            <div className="flex items-start gap-3">
              <Info className="text-blue-500 shrink-0 mt-px"
                size={18} />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium tracking-tight text-[#0a0a0a] dark:text-[#f5f5f5] mb-1">
                  시스템 업데이트
                </div>
                <div className="text-[13px] text-neutral-600 dark:text-neutral-400 leading-normal">
                  새로운 버전이 출시되었습니다. 지금 업데이트하세요.
                </div>
              </div>
              <button className="w-7 h-7 flex items-center justify-center text-neutral-500 dark:text-neutral-600 bg-transparent border-0 rounded-md cursor-pointer transition-all duration-150 shrink-0 hover:bg-neutral-100 dark:hover:bg-[#1f1f1f] hover:text-neutral-600 dark:hover:text-neutral-400">
                <X size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Warning Notification */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-[#243c84]" />
          <h2 className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-50">
            경고
          </h2>
        </div>
        
        <div className="space-y-3">
          <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-[#2a2a2a] rounded-xl p-3.5 px-4 shadow-sm dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] transition-all duration-200 hover:border-neutral-200 dark:hover:border-neutral-700 hover:shadow-md dark:hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-orange-500 shrink-0 mt-px"
                size={18} />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium tracking-tight text-[#0a0a0a] dark:text-[#f5f5f5] mb-1">
                  저장 공간 부족
                </div>
                <div className="text-[13px] text-neutral-600 dark:text-neutral-400 leading-normal">
                  저장 공간이 10%만 남았습니다. 파일 삭제를 고려하세요.
                </div>
              </div>
              <button className="w-7 h-7 flex items-center justify-center text-neutral-500 dark:text-neutral-600 bg-transparent border-0 rounded-md cursor-pointer transition-all duration-150 shrink-0 hover:bg-neutral-100 dark:hover:bg-[#1f1f1f] hover:text-neutral-600 dark:hover:text-neutral-400">
                <X size={14} />
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-[#2a2a2a] rounded-xl p-3.5 px-4 shadow-sm dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] transition-all duration-200 hover:border-neutral-200 dark:hover:border-neutral-700 hover:shadow-md dark:hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-orange-500 shrink-0 mt-px"
                size={18} />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium tracking-tight text-[#0a0a0a] dark:text-[#f5f5f5] mb-1">
                  보안 경고
                </div>
                <div className="text-[13px] text-neutral-600 dark:text-neutral-400 leading-normal">
                  비정상적인 로그인 시도가 감지되었습니다.
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button className="px-3 h-7 text-xs font-medium text-[#0a0a0a] dark:text-[#f5f5f5] bg-transparent border border-neutral-200 dark:border-neutral-700 rounded-md cursor-pointer transition-all duration-150 whitespace-nowrap hover:bg-neutral-50 dark:hover:bg-[#1f1f1f] hover:border-neutral-300 dark:hover:border-neutral-600">
                  Review
                </button>
                <button className="w-7 h-7 flex items-center justify-center text-neutral-500 dark:text-neutral-600 bg-transparent border-0 rounded-md cursor-pointer transition-all duration-150 hover:bg-neutral-100 dark:hover:bg-[#1f1f1f] hover:text-neutral-600 dark:hover:text-neutral-400">
                  <X size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Error Notification */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-[#243c84]" />
          <h2 className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-50">
            오류
          </h2>
        </div>
        
        <div className="space-y-3">
          <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-[#2a2a2a] rounded-xl p-3.5 px-4 shadow-sm dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] transition-all duration-200 hover:border-neutral-200 dark:hover:border-neutral-700 hover:shadow-md dark:hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)]">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-red-500 shrink-0 mt-px"
                size={18} />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium tracking-tight text-[#0a0a0a] dark:text-[#f5f5f5] mb-1">
                  결제 실패
                </div>
                <div className="text-[13px] text-neutral-600 dark:text-neutral-400 leading-normal">
                  결제를 처리하지 못했습니다. 다시 시도해주세요.
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button className="px-3 h-7 text-xs font-medium text-[#0a0a0a] dark:text-[#f5f5f5] bg-transparent border border-neutral-200 dark:border-neutral-700 rounded-md cursor-pointer transition-all duration-150 whitespace-nowrap hover:bg-neutral-50 dark:hover:bg-[#1f1f1f] hover:border-neutral-300 dark:hover:border-neutral-600">
                  Retry
                </button>
                <button className="w-7 h-7 flex items-center justify-center text-neutral-500 dark:text-neutral-600 bg-transparent border-0 rounded-md cursor-pointer transition-all duration-150 hover:bg-neutral-100 dark:hover:bg-[#1f1f1f] hover:text-neutral-600 dark:hover:text-neutral-400">
                  <X size={14} />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-[#2a2a2a] rounded-xl p-3.5 px-4 shadow-sm dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] transition-all duration-200 hover:border-neutral-200 dark:hover:border-neutral-700 hover:shadow-md dark:hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)]">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-red-500 shrink-0 mt-px"
                size={18} />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium tracking-tight text-[#0a0a0a] dark:text-[#f5f5f5] mb-1">
                  연결 오류
                </div>
                <div className="text-[13px] text-neutral-600 dark:text-neutral-400 leading-normal">
                  서버에 연결할 수 없습니다. 네트워크를 확인하세요.
                </div>
              </div>
              <button className="w-7 h-7 flex items-center justify-center text-neutral-500 dark:text-neutral-600 bg-transparent border-0 rounded-md cursor-pointer transition-all duration-150 shrink-0 hover:bg-neutral-100 dark:hover:bg-[#1f1f1f] hover:text-neutral-600 dark:hover:text-neutral-400">
                <X size={14} />
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-[#2a2a2a] rounded-xl p-3.5 px-4 shadow-sm dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] transition-all duration-200 hover:border-neutral-200 dark:hover:border-neutral-700 hover:shadow-md dark:hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)]">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-red-500 shrink-0 mt-px"
                size={18} />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium tracking-tight text-[#0a0a0a] dark:text-[#f5f5f5] mb-1">
                  업로드 실패
                </div>
                <div className="text-[13px] text-neutral-600 dark:text-neutral-400 leading-normal">
                  파일 크기가 너무 큽니다. 10MB 이하로 업로드하세요.
                </div>
              </div>
              <button className="w-7 h-7 flex items-center justify-center text-neutral-500 dark:text-neutral-600 bg-transparent border-0 rounded-md cursor-pointer transition-all duration-150 shrink-0 hover:bg-neutral-100 dark:hover:bg-[#1f1f1f] hover:text-neutral-600 dark:hover:text-neutral-400">
                <X size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
