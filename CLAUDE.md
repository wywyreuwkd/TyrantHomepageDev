# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

타이런트(Tyrant) 태양광 전문 기업 홈페이지. Next.js 16 App Router 기반 한국어 기업 웹사이트.

## Development Commands

```bash
npm run dev      # 개발 서버 (http://localhost:3000)
npm run build    # 프로덕션 빌드 (standalone 출력)
npm run start    # 프로덕션 서버 실행 (node server.js)
npm run lint     # ESLint 실행
```

## Architecture

### Tech Stack
- Next.js 16 with App Router, React 19, TypeScript
- Tailwind CSS for styling
- Radix UI + shadcn/ui components
- Framer Motion for animations
- Recharts for data visualization
- React Compiler enabled (`reactCompiler: true`)
- Standalone output for deployment (`output: "standalone"`)

### Path Aliases
```
@/*          → ./src/*
@app/*       → ./src/app/*
@components/* → ./src/app/components/*
@public/*    → ./public/*
```

### Directory Structure
```
src/app/
├── page.tsx                 # 홈 페이지 (/)
├── layout.tsx               # Root Layout (Header/Footer 포함)
├── globals.css
├── company/                 # /company 라우트
│   ├── page.tsx             # 타이런트 소개
│   ├── group/page.tsx       # 그룹사 소개
│   ├── history/page.tsx     # 연혁
│   ├── partners/page.tsx    # 파트너사
│   ├── ci/page.tsx          # CI
│   └── members/page.tsx     # 구성원
├── business/                # /business 라우트 (사업영역)
│   ├── fs/page.tsx          # FS (사업타당성)
│   ├── development/page.tsx # 개발
│   ├── materials/page.tsx   # 자재
│   ├── construction/page.tsx # 시공
│   ├── investment/page.tsx  # 투자
│   ├── monitoring/page.tsx  # 모니터링
│   ├── insurance/page.tsx   # 보험
│   ├── duediligence/page.tsx # 실사
│   ├── datacenter/page.tsx  # 데이터센터
│   └── education/page.tsx   # 교육
├── styleguide/              # 스타일 가이드 페이지
└── components/
    ├── layout/              # Header, Footer
    ├── sections/            # Hero, ServiceIntro, Process, WhyNow, RevenueComparison
    ├── shared/              # Logo, ImageWithFallback, HeroSection, SectionLabel
    └── ui/                  # shadcn/ui 컴포넌트
```

### Server vs Client Components
- 대부분의 페이지는 Server Components (기본)
- Client Components (`"use client"` 필요):
  - `Header.tsx` - usePathname, useState
  - `Hero.tsx` - useState, useEffect, framer-motion
  - `WhyNow.tsx` - framer-motion
  - `RevenueComparison.tsx` - recharts

## Deployment

Self-hosted GitHub Actions runner 사용. `master` 브랜치 push 시 자동 배포:
1. `npm ci` → `npm run build` → standalone 번들 생성
2. tar.gz 압축 후 `/srv/tyrant/releases/` 에 배포
3. `systemctl restart tyrant` 로 서비스 재시작
