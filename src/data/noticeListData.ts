export interface NoticeData {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  views: number;
  isPinned?: boolean;  
}

export const notices: NoticeData[] = [
  { id: 1, title: '[중요] 2026년 1월 시스템 점검 안내', category: '중요', author: '관리자', date: '2026-01-15', views: 245, isPinned: true },  
  { id: 2, title: '[중요] 프로젝트 접수 시 필수 제출 서류 변경 안내', category: '중요', author: '관리자', date: '2026-01-14', views: 189, isPinned: true },
  { id: 3, title: '2026년 1분기 협력사 간담회 일정 안내', category: '일반', author: '운영팀', date: '2026-01-13', views: 156 },
  { id: 4, title: '설 연휴 고객센터 운영 안내', category: '일반', author: '고객지원팀', date: '2026-01-12', views: 98 },
  { id: 5, title: '신규 협력사 등록 절차 안내', category: '일반', author: '운영팀', date: '2026-01-11', views: 234 },
  { id: 6, title: '서식 다운로드 페이지 업데이트 안내', category: '일반', author: '운영팀', date: '2026-01-10', views: 145 },
  { id: 7, title: '[중요] 개인정보 처리방침 개정 안내', category: '중요', author: '관리자', date: '2026-01-09', views: 287 },
  { id: 8, title: '협력사 교육 프로그램 신청 안내', category: '일반', author: '교육팀', date: '2026-01-08', views: 167 },
  { id: 9, title: '월별 우수 협력사 선정 결과', category: '일반', author: '운영팀', date: '2026-01-07', views: 203 },
  { id: 10, title: '시공 참여 조건 변경 안내', category: '일반', author: '관리자', date: '2026-01-06', views: 178 },
  { id: 11, title: 'FAQ 페이지 업데이트 안내', category: '일반', author: '고객지원팀', date: '2026-01-05', views: 92 },
  { id: 12, title: '[중요] 보안 강화를 위한 비밀번호 변경 권장', category: '중요', author: '보안팀', date: '2026-01-04', views: 312 },
]