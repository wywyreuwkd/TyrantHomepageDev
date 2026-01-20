import React from 'react';
import { Button } from '@components/ui/button';
import { LogOut, Users, FileText } from 'lucide-react';
import { useRouter } from "next/navigation"

interface AdminHeaderProps {
  activeMenu?: 'applicants' | 'users';
  onMenuChange?: (menu: 'applicants' | 'users') => void;
}

export function AdminHeader({ activeMenu = 'applicants', onMenuChange }: AdminHeaderProps) {
  const router = useRouter()

  const handleLogout = () => {
    // TODO: 실제 로그아웃 로직 구현
    console.log('Logout');
    router.push('/pages/Admin/Login')
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 타이틀 */}
          <div className="flex items-center gap-3">
            <div className="text-xl md:text-2xl font-bold text-gray-900">
              대한민카 관리자 페이지
            </div>
          </div>

          {/* 네비게이션 버튼들 */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="ghost"
              className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all ${
                activeMenu === 'applicants'
                  ? 'text-blue-600 bg-blue-50 font-bold'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
              onClick={() => onMenuChange?.('applicants')}
            >
              <FileText className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline text-sm md:text-base font-semibold">신청자 정보</span>
            </Button>

            <Button
              variant="ghost"
              className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all ${
                activeMenu === 'users'
                  ? 'text-blue-600 bg-blue-50 font-bold'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
              onClick={() => onMenuChange?.('users')}
            >
              <Users className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline text-sm md:text-base font-semibold">사용자 관리</span>
            </Button>

            <Button
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 md:px-4 py-2 rounded-lg transition-all hover:shadow-lg"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline text-sm md:text-base font-semibold">로그아웃</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}