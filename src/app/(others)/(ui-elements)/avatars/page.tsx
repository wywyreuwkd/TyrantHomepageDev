import type { Metadata } from "next";
import Link from "next/link";
import { Menu, Home, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Avatars | 타이런트 - 관리자",
  description: "타이런트 관리자 Avatars 페이지",
};

export default function Avatars() {
  
  // Avatar colors - Blue palette matching site design
  const avatarColors = [
    '#243c84', // Navy Blue (brand color)
    '#1e40af', // Royal Blue
    '#2563eb', // Bright Blue
    '#3b82f6', // Sky Blue
    '#0891b2', // Cyan Blue
    '#0ea5e9', // Light Blue
    '#06b6d4', // Aqua Blue
    '#1d4ed8', // Deep Blue
  ];

  const users = [
    { name: '김민수', initials: '김', color: avatarColors[0] },
    { name: '이지은', initials: '이', color: avatarColors[1] },
    { name: '박준호', initials: '박', color: avatarColors[2] },
    { name: '최서연', initials: '최', color: avatarColors[3] },
    { name: '정대현', initials: '정', color: avatarColors[4] },
    { name: '강유진', initials: '강', color: avatarColors[5] },
    { name: '윤재민', initials: '윤', color: avatarColors[6] },
    { name: '한소희', initials: '한', color: avatarColors[7] },
  ];

  return (
    <div className="contents-layout">
      {/* Page Header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="contents-title font-bold tracking-tight text-gray-900 dark:text-gray-50">
            아바타 컴포넌트
          </h1>
          <p className="contents-sub-title mt-2 text-gray-600 dark:text-gray-400">
            사용자 프로필을 나타내는 아바타 컴포넌트
          </p>
        </div>

        {/* Breadcrumb - PC만 표시 */}
        <nav className="hidden md:flex items-center gap-2 flex-shrink-0">
          <Link href="/main">
            <div className="flex items-center gap-1.5 cursor-pointer">
              <Home className="text-gray-400 dark:text-gray-600"
                size={14}/>
              <span className="contents-breadcrumb font-medium whitespace-nowrap text-gray-600 dark:text-gray-400">
                홈
              </span>
            </div>
          </Link>
          <ChevronRight size={12} className="text-gray-300 dark:text-gray-600" />
          <span className="contents-breadcrumb font-medium whitespace-nowrap text-gray-600 dark:text-gray-400">
            UI Elements
          </span>
          <ChevronRight size={12} className="text-gray-300 dark:text-gray-600" />
          <span className="contents-breadcrumb font-semibold whitespace-nowrap text-gray-900 dark:text-gray-50">
            Avatars
          </span>
        </nav>
      </div>

      {/* Sizes Section */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-6 text-gray-900 dark:text-gray-50">
          크기
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Extra Small */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              Extra Small (24px)
            </h3>
            <div className="flex items-center gap-3">
              {users.slice(0, 4).map((user, idx) => (
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-semibold text-white"
                  key={idx}                  
                  style={{ backgroundColor: user.color }}>
                  {user.initials}
                </div>
              ))}
            </div>
          </div>

          {/* Small */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              Small (32px)
            </h3>
            <div className="flex items-center gap-3">
              {users.slice(0, 4).map((user, idx) => (
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-semibold text-white"
                  key={idx}                  
                  style={{ backgroundColor: user.color }}>
                  {user.initials}
                </div>
              ))}
            </div>
          </div>

          {/* Medium */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              Medium (40px)
            </h3>
            <div className="flex items-center gap-3">
              {users.slice(0, 4).map((user, idx) => (
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-[15px] font-semibold text-white"
                  key={idx}                  
                  style={{ backgroundColor: user.color }}>
                  {user.initials}
                </div>
              ))}
            </div>
          </div>

          {/* Large */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              Large (48px)
            </h3>
            <div className="flex items-center gap-3">
              {users.slice(0, 4).map((user, idx) => (
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-[17px] font-semibold text-white"
                  key={idx}                  
                  style={{ backgroundColor: user.color }}>
                  {user.initials}
                </div>
              ))}
            </div>
          </div>

          {/* Extra Large */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              Extra Large (64px)
            </h3>
            <div className="flex items-center gap-3">
              {users.slice(0, 3).map((user, idx) => (
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-[22px] font-semibold text-white"
                  key={idx}                  
                  style={{ backgroundColor: user.color }}>
                  {user.initials}
                </div>
              ))}
            </div>
          </div>

          {/* 2XL */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              2XL (80px)
            </h3>
            <div className="flex items-center gap-4">
              {users.slice(0, 2).map((user, idx) => (
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-[28px] font-semibold text-white"
                  key={idx}                  
                  style={{ backgroundColor: user.color }}>
                  {user.initials}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Colors Section */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-6 text-gray-900 dark:text-gray-50">
          색상
        </h2>
        <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
            다양한 색상 아바타
          </h3>
          <div className="flex items-center gap-3 flex-wrap">
            {users.map((user, idx) => (
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-[15px] font-semibold text-white"
                key={idx}                
                style={{ backgroundColor: user.color }}>
                {user.initials}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Status Section */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-6 text-gray-900 dark:text-gray-50">
          상태 표시
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Online */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              온라인
            </h3>
            <div className="flex items-center gap-4">
              {users.slice(0, 3).map((user, idx) => (
                <div key={idx} className="relative">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-[15px] font-semibold text-white"
                    style={{ backgroundColor: user.color }}>
                    {user.initials}
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 bg-green-500 border-white dark:border-gray-800" />
                </div>
              ))}
            </div>
          </div>

          {/* Busy */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              다른 용무중
            </h3>
            <div className="flex items-center gap-4">
              {users.slice(3, 6).map((user, idx) => (
                <div key={idx} className="relative">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-[15px] font-semibold text-white"
                    style={{ backgroundColor: user.color }}>
                    {user.initials}
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 bg-yellow-500 border-white dark:border-gray-800" />
                </div>
              ))}
            </div>
          </div>

          {/* Offline */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              오프라인
            </h3>
            <div className="flex items-center gap-4">
              {users.slice(5, 8).map((user, idx) => (
                <div key={idx} className="relative">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-[15px] font-semibold text-white"
                    style={{ backgroundColor: user.color }}>
                    {user.initials}
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 bg-gray-500 border-white dark:border-gray-800" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Avatar Groups Section */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-6 text-gray-900 dark:text-gray-50">
          그룹 아바타
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Small Group */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              3명의 사용자
            </h3>
            <div className="flex items-center">
              {users.slice(0, 3).map((user, idx) => (
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-[15px] font-semibold border-2 text-white border-white dark:border-gray-800"
                  key={idx}                  
                  style={{backgroundColor: user.color,marginLeft: idx > 0 ? '-12px' : '0'}}>
                  {user.initials}
                </div>
              ))}
            </div>
          </div>

          {/* Medium Group */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              5명의 사용자
            </h3>
            <div className="flex items-center">
              {users.slice(0, 5).map((user, idx) => (
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-[15px] font-semibold border-2 text-white border-white dark:border-gray-800"
                  key={idx}                  
                  style={{backgroundColor: user.color,marginLeft: idx > 0 ? '-12px' : '0'}}>
                  {user.initials}
                </div>
              ))}
            </div>
          </div>

          {/* Large Group with Count */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              많은 사용자 (카운트 표시)
            </h3>
            <div className="flex items-center">
              {users.slice(0, 3).map((user, idx) => (
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-[15px] font-semibold border-2 text-white border-white dark:border-gray-800"
                  key={idx}                  
                  style={{backgroundColor: user.color,marginLeft: idx > 0 ? '-12px' : '0'}}>
                  {user.initials}
                </div>
              ))}
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-semibold border-2 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-200 border-white dark:border-gray-800 ml-[-12px]">
                +12
              </div>
            </div>
          </div>

          {/* Compact Group */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              컴팩트 그룹
            </h3>
            <div className="flex items-center">
              {users.slice(0, 4).map((user, idx) => (
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-semibold border-2 text-white border-white dark:border-gray-800"
                  key={idx}                  
                  style={{backgroundColor: user.color,marginLeft: idx > 0 ? '-10px' : '0'}}>
                  {user.initials}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Avatar with Info Section */}
      <div className="mb-12">
        <h2 className="text-[20px] font-semibold mb-6 text-gray-900 dark:text-gray-50">
          정보와 함께
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Avatar with Name */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              이름 표시
            </h3>
            <div className="space-y-4">
              {users.slice(0, 3).map((user, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-[15px] font-semibold flex-shrink-0 text-white"
                    style={{ backgroundColor: user.color }}>
                    {user.initials}
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-gray-900 dark:text-gray-50">
                      {user.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Avatar with Name and Role */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              이름과 역할 표시
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-[15px] font-semibold flex-shrink-0 text-white"
                  style={{ backgroundColor: users[0].color }}>
                  {users[0].initials}
                </div>
                <div>
                  <p className="text-[14px] font-medium text-gray-900 dark:text-gray-50">
                    {users[0].name}
                  </p>
                  <p className="text-[13px] text-gray-600 dark:text-gray-400">
                    프로젝트 매니저
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-[15px] font-semibold flex-shrink-0 text-white"
                  style={{ backgroundColor: users[1].color }}>
                  {users[1].initials}
                </div>
                <div>
                  <p className="text-[14px] font-medium text-gray-900 dark:text-gray-50">
                    {users[1].name}
                  </p>
                  <p className="text-[13px] text-gray-600 dark:text-gray-400">
                    UI/UX 디자이너
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-[15px] font-semibold flex-shrink-0 text-white"
                  style={{ backgroundColor: users[2].color }}>
                  {users[2].initials}
                </div>
                <div>
                  <p className="text-[14px] font-medium text-gray-900 dark:text-gray-50">
                    {users[2].name}
                  </p>
                  <p className="text-[13px] text-gray-600 dark:text-gray-400">
                    프론트엔드 개발자
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Avatar with Status Badge */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              상태 배지와 함께
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-[15px] font-semibold text-white"
                    style={{ backgroundColor: users[0].color }}>
                    {users[0].initials}
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 bg-green-500 border-white dark:border-gray-800" />
                </div>
                <div className="flex-1">
                  <p className="text-[14px] font-medium text-gray-900 dark:text-gray-50">
                    {users[0].name}
                  </p>
                  <p className="text-[13px] text-green-500">
                    온라인
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-[15px] font-semibold text-white"
                    style={{ backgroundColor: users[3].color }}>
                    {users[3].initials}
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 bg-yellow-500 border-white dark:border-gray-800" />
                </div>
                <div className="flex-1">
                  <p className="text-[14px] font-medium text-gray-900 dark:text-gray-50">
                    {users[3].name}
                  </p>
                  <p className="text-[13px] text-yellow-500">
                    다른 용무중
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-[15px] font-semibold text-white"
                    style={{ backgroundColor: users[5].color }}>
                    {users[5].initials}
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 bg-gray-500 border-white dark:border-gray-800" />
                </div>
                <div className="flex-1">
                  <p className="text-[14px] font-medium text-gray-900 dark:text-gray-50">
                    {users[5].name}
                  </p>
                  <p className="text-[13px] text-gray-600 dark:text-gray-400">
                    오프라인
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Avatar with Action Button */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              액션 버튼과 함께
            </h3>
            <div className="space-y-4">
              {users.slice(0, 3).map((user, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-[15px] font-semibold flex-shrink-0 text-white"
                    style={{ backgroundColor: user.color }}>
                    {user.initials}
                  </div>
                  <div className="flex-1">
                    <p className="text-[14px] font-medium text-gray-900 dark:text-gray-50">
                      {user.name}
                    </p>
                  </div>
                  <button className="px-3 py-1.5 rounded-lg text-[13px] font-medium transition-all hover:opacity-90 bg-[#243c84] text-white">
                    팔로우
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Squared Avatars Section */}
      <div>
        <h2 className="text-[20px] font-semibold mb-6 text-gray-900 dark:text-gray-50">
          사각형 아바타
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Rounded Square */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              둥근 사각형
            </h3>
            <div className="flex items-center gap-3">
              {users.slice(0, 4).map((user, idx) => (
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-[15px] font-semibold text-white"
                  key={idx}                  
                  style={{ backgroundColor: user.color }}>
                  {user.initials}
                </div>
              ))}
            </div>
          </div>

          {/* Square */}
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-[16px] font-semibold mb-4 text-gray-900 dark:text-gray-50">
              사각형
            </h3>
            <div className="flex items-center gap-3">
              {users.slice(4, 8).map((user, idx) => (
                <div className="w-10 h-10 flex items-center justify-center text-[15px] font-semibold text-white"
                  key={idx}                  
                  style={{ backgroundColor: user.color }}>
                  {user.initials}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
