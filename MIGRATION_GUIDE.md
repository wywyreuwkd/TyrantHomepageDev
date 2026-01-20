# App Router 구조 전환 가이드

## 📋 개요

기존 단일 페이지 애플리케이션(SPA) 구조에서 Next.js App Router의 파일 기반 라우팅 구조로 전환한 변경 사항을 정리한 문서입니다.

---

## 🔄 주요 변경 사항

### 1. **라우팅 방식 변경**

#### ❌ 기존 구조 (Client-Side State 기반)
```tsx
// src/app/page.tsx (기존)
"use client"
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"home" | "company" | ...>("home");
  
  return (
    <>
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      {currentPage === "home" ? <Hero /> : 
       currentPage === "company" ? <CompanyIntro /> : ...}
    </>
  );
}
```

**문제점:**
- URL이 변경되지 않음 (모든 페이지가 `/`에서 동작)
- 브라우저 뒤로가기/앞으로가기 불가
- 직접 URL 접근 불가
- SEO 최적화 어려움
- 페이지 새로고침 시 상태 손실

#### ✅ 새로운 구조 (File-Based Routing)
```
app/
├── page.tsx                    # / (홈)
├── company/
│   ├── page.tsx                # /company
│   ├── group/
│   │   └── page.tsx            # /company/group
│   ├── history/
│   │   └── page.tsx            # /company/history
│   └── partners/
│       └── page.tsx            # /company/partners
└── business/
    ├── fs/
    │   └── page.tsx            # /business/fs
    ├── development/
    │   └── page.tsx            # /business/development
    └── ... (기타 8개 페이지)
```

**장점:**
- ✅ 각 페이지가 독립적인 URL을 가짐
- ✅ 브라우저 네비게이션 지원
- ✅ 직접 URL 접근 가능
- ✅ SEO 최적화 용이
- ✅ 서버 사이드 렌더링 지원

---

### 2. **Root Layout 패턴 적용**

#### ❌ 기존 구조
```tsx
// layout.tsx (기존)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}  // 각 페이지에서 Header/Footer를 개별적으로 관리
      </body>
    </html>
  );
}
```

#### ✅ 새로운 구조
```tsx
// src/app/layout.tsx
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />      {/* 공통 Header */}
        <main>{children}</main>
        <Footer />      {/* 공통 Footer */}
      </body>
    </html>
  );
}
```

**변경 사항:**
- ✅ Header와 Footer를 Root Layout에 포함
- ✅ 모든 페이지에서 자동으로 Header/Footer 렌더링
- ✅ 중복 코드 제거
- ✅ 일관된 레이아웃 유지

---

### 3. **Header 컴포넌트 리팩토링**

#### ❌ 기존 구조
```tsx
// Header.tsx (기존)
interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const handleMenuClick = (menuTitle: string, item: string) => {
    if (menuTitle === "회사소개" && item === "타이런트") {
      onNavigate("company");
    }
    // ... 복잡한 조건문들
  };
  
  return (
    <header>
      <div onClick={() => onNavigate("home")}>
        <Logo />
      </div>
      <a href="#" onClick={(e) => handleMenuClick(...)}>
        {item}
      </a>
    </header>
  );
}
```

**문제점:**
- Props drilling (onNavigate, currentPage 전달 필요)
- 복잡한 조건문으로 라우팅 처리
- `<a>` 태그 사용으로 실제 네비게이션 불가

#### ✅ 새로운 구조
```tsx
// Header.tsx (새로운)
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuData = [
  {
    title: "회사소개",
    items: [
      { label: "타이런트", href: "/company" },
      { label: "그룹사소개", href: "/company/group" },
      // ...
    ],
  },
  // ...
];

export function Header() {
  const pathname = usePathname();  // 현재 경로 자동 감지
  
  return (
    <header>
      <Link href="/">
        <Logo />
      </Link>
      {menu.items.map((item) => (
        <Link
          href={item.href}
          className={pathname === item.href ? 'active' : ''}
        >
          {item.label}
        </Link>
      ))}
    </header>
  );
}
```

**변경 사항:**
- ✅ Props 제거 (onNavigate, currentPage 불필요)
- ✅ Next.js `Link` 컴포넌트 사용
- ✅ `usePathname`으로 현재 경로 자동 감지
- ✅ 데이터 구조화로 라우팅 로직 단순화
- ✅ 활성 상태 자동 표시

---

### 4. **홈 페이지 단순화**

#### ❌ 기존 구조
```tsx
// page.tsx (기존)
"use client"
import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
// ... 모든 페이지 컴포넌트 import

export default function Home() {
  const [currentPage, setCurrentPage] = useState<...>("home");
  
  return (
    <div>
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>
        {currentPage === "home" ? (
          <>
            <Hero />
            <ServiceIntro />
            // ...
          </>
        ) : currentPage === "company" ? (
          <CompanyIntro />
        ) : // ... 14개의 조건문
      </main>
      <Footer />
    </div>
  );
}
```

**문제점:**
- 모든 페이지 컴포넌트를 한 파일에서 import
- 복잡한 조건부 렌더링
- 불필요한 클라이언트 사이드 상태 관리

#### ✅ 새로운 구조
```tsx
// page.tsx (새로운)
import type { Metadata } from "next";
import { Hero } from "./components/Hero";
import { ServiceIntro } from "./components/ServiceIntro";
// ... 홈 페이지에 필요한 컴포넌트만 import

export const metadata: Metadata = {
  title: "홈",
  description: "...",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0F214A] text-white">
      <Hero />
      <ServiceIntro />
      <Process />
      <RevenueComparison />
      <WhyNow />
    </div>
  );
}
```

**변경 사항:**
- ✅ Server Component로 변경 (기본값)
- ✅ 불필요한 상태 관리 제거
- ✅ 조건부 렌더링 제거
- ✅ 메타데이터 추가 (SEO)
- ✅ 필요한 컴포넌트만 import

---

### 5. **파일 기반 라우팅 구조 생성**

#### 새로 생성된 라우트 페이지들

**회사소개 라우트:**
- `app/company/page.tsx` → `/company`
- `app/company/group/page.tsx` → `/company/group`
- `app/company/history/page.tsx` → `/company/history`
- `app/company/partners/page.tsx` → `/company/partners`

**사업영역 라우트:**
- `app/business/fs/page.tsx` → `/business/fs`
- `app/business/development/page.tsx` → `/business/development`
- `app/business/materials/page.tsx` → `/business/materials`
- `app/business/construction/page.tsx` → `/business/construction`
- `app/business/investment/page.tsx` → `/business/investment`
- `app/business/monitoring/page.tsx` → `/business/monitoring`
- `app/business/insurance/page.tsx` → `/business/insurance`
- `app/business/duediligence/page.tsx` → `/business/duediligence`
- `app/business/datacenter/page.tsx` → `/business/datacenter`
- `app/business/education/page.tsx` → `/business/education`

**각 페이지 구조:**
```tsx
// 예: app/company/page.tsx
import type { Metadata } from "next";
import { CompanyIntro } from "../pages/menu_company/CompanyIntro";

export const metadata: Metadata = {
  title: "회사소개",
  description: "...",
};

export default function CompanyPage() {
  return <CompanyIntro />;
}
```

**특징:**
- ✅ 각 페이지가 독립적인 파일
- ✅ 페이지별 메타데이터 설정
- ✅ 기존 컴포넌트 재사용 (`pages/` 폴더의 컴포넌트)
- ✅ Server Component 기본 사용

---

### 6. **메타데이터 관리**

#### Root Layout 메타데이터
```tsx
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: "타이런트 - 태양광 전문 기업",
    template: "%s | 타이런트",  // 각 페이지 제목에 자동 추가
  },
  description: "태양광 발전 전문 기업 타이런트...",
  keywords: ["태양광", "태양광 발전", ...],
};
```

#### 페이지별 메타데이터
```tsx
// app/company/page.tsx
export const metadata: Metadata = {
  title: "회사소개",  // → "회사소개 | 타이런트"
  description: "...",
};
```

**장점:**
- ✅ SEO 최적화
- ✅ 소셜 미디어 공유 시 적절한 미리보기
- ✅ 브라우저 탭 제목 자동 설정

---

### 7. **Server/Client Components 분리**

#### Server Components (기본)
- `app/page.tsx` (홈)
- `app/company/page.tsx`
- `app/business/*/page.tsx`
- `app/components/Process.tsx`
- `app/components/ServiceIntro.tsx`
- `app/components/Footer.tsx`

#### Client Components ("use client" 필요)
- `app/components/Header.tsx` - `useState`, `usePathname` 사용
- `app/components/Hero.tsx` - `useState`, `useEffect`, `framer-motion` 사용
- `app/components/RevenueComparison.tsx` - `recharts` 사용
- `app/components/WhyNow.tsx` - `framer-motion` 사용
- `app/components/figma/ImageWithFallback.tsx` - `useState` 사용

**변경 사항:**
- ✅ `RevenueComparison.tsx`에 "use client" 추가 (recharts 라이브러리)
- ✅ `WhyNow.tsx`에 "use client" 추가 (framer-motion 라이브러리)
- ✅ 나머지는 Server Component로 유지

---

## 📊 구조 비교

### 기존 구조
```
src/app/
├── page.tsx              # 모든 페이지를 조건부 렌더링
├── layout.tsx            # 기본 레이아웃만
├── components/
│   ├── Header.tsx        # Props로 상태 관리
│   └── ...
└── pages/                # 컴포넌트만 존재
    ├── menu_company/
    └── menu_business/
```

### 새로운 구조
```
src/app/
├── page.tsx              # 홈 페이지만
├── layout.tsx            # Header, Footer 포함
├── company/
│   ├── page.tsx          # /company
│   ├── group/page.tsx    # /company/group
│   ├── history/page.tsx  # /company/history
│   └── partners/page.tsx # /company/partners
├── business/
│   ├── fs/page.tsx       # /business/fs
│   ├── development/page.tsx
│   └── ... (10개 페이지)
├── components/
│   ├── Header.tsx        # Next.js Link 사용
│   └── ...
└── pages/                # 기존 컴포넌트 재사용
    ├── menu_company/
    └── menu_business/
```

---

## 🎯 주요 개선 사항 요약

### 1. **라우팅**
- ❌ Client-side state 기반 → ✅ File-based routing
- ❌ 단일 URL (`/`) → ✅ 독립적인 URL들
- ❌ 조건부 렌더링 → ✅ 각 페이지 파일

### 2. **네비게이션**
- ❌ Props drilling → ✅ Next.js Link
- ❌ 수동 상태 관리 → ✅ 자동 경로 감지
- ❌ 복잡한 조건문 → ✅ 데이터 구조화

### 3. **성능**
- ❌ 모든 컴포넌트 클라이언트 렌더링 → ✅ Server Components 기본
- ❌ 불필요한 JavaScript 번들 → ✅ 필요한 부분만 클라이언트 사이드

### 4. **SEO**
- ❌ 메타데이터 없음 → ✅ 페이지별 메타데이터
- ❌ 단일 페이지 → ✅ 각 페이지 독립 URL

### 5. **유지보수성**
- ❌ 복잡한 조건부 로직 → ✅ 명확한 파일 구조
- ❌ 중복 코드 → ✅ 공통 레이아웃
- ❌ Props 전달 → ✅ 자동 상태 관리

---

## 📝 마이그레이션 체크리스트

- [x] Root Layout에 Header/Footer 포함
- [x] 파일 기반 라우팅 구조 생성
- [x] Header 컴포넌트를 Next.js Link로 변경
- [x] 홈 페이지 단순화 (Server Component)
- [x] 각 라우트 페이지 생성
- [x] 페이지별 메타데이터 추가
- [x] Client Component 지시어 추가 (RevenueComparison, WhyNow)
- [x] 기존 컴포넌트 재사용 유지

---

## 🚀 다음 단계 (선택사항)

1. **동적 라우팅**: 필요시 `[slug]` 패턴 사용
2. **레이아웃 중첩**: 특정 라우트 그룹에만 적용되는 레이아웃
3. **로딩 상태**: `loading.tsx` 파일로 로딩 UI 추가
4. **에러 처리**: `error.tsx` 파일로 에러 바운더리 추가
5. **서버 액션**: 폼 제출 등에 서버 액션 활용

---

## 📚 참고 자료

- [Next.js App Router 공식 문서](https://nextjs.org/docs/app)
- [Server and Client Components](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns)
- [File-based Routing](https://nextjs.org/docs/app/building-your-application/routing)

