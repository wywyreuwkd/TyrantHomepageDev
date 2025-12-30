// 화살표 마커 정의 (재사용 가능)
const ArrowMarkers = () => (
  <defs>
    <marker
      id="arrowUp"
      markerWidth="6"
      markerHeight="6"
      refX="3"
      refY="3"
      orient="auto"
      markerUnits="strokeWidth"
    >
      <path d="M6,0 L0,3 L6,6 Z" fill="var(--gray-400)" />
    </marker>
    <marker
      id="arrowDown"
      markerWidth="6"
      markerHeight="6"
      refX="3"
      refY="3"
      orient="auto"
      markerUnits="strokeWidth"
    >
      <path d="M0,0 L6,3 L0,6 Z" fill="var(--gray-400)" />
    </marker>
  </defs>
);

export function ProjectDiagram_Investment() {
  return (
    <svg
      viewBox="0 0 800 600"
      className="w-full max-w-[800px] h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 화살표 마커 */}
      <ArrowMarkers />

      {/* 건물주 - 건물 연결선 (좌측 수직선) */}
      <line x1="150" y1="110" x2="150" y2="490" stroke="var(--gray-400)" strokeWidth="4" />
      <text x="110" y="280" textAnchor="middle" fill="var(--primary-dark-5)" fontSize="22" fontWeight="bold">
        건물
      </text>
      <text x="110" y="320" textAnchor="middle" fill="var(--primary-dark-5)" fontSize="22" fontWeight="bold">
        소유
      </text>

      {/* 건물주 → 태양광발전 법인 대각선 1 (건물지붕 임대차 계약 체결) */}
      <line x1="230" y1="110" x2="560" y2="480" stroke="var(--gray-400)" strokeWidth="4" markerEnd="url(#arrowDown)" />
      <rect x="230" y="246" width="270" height="90" fill="var(--color-white-70)" />
      <text x="240" y="280" textAnchor="start" fill="var(--primary-dark-5)" fontSize="22" fontWeight="bold">
        ① 건물지붕 임대차 계약 체결
      </text>
      <text x="240" y="320" textAnchor="start" fill="var(--primary-dark-5)" fontSize="22" fontWeight="bold">
        ② 발전법인 지분확보 (90%)
      </text>

      {/* 타이런트 → 태양광발전 법인 연결선 (우측 수직선) */}
      <line x1="650" y1="110" x2="650" y2="477" stroke="var(--gray-400)" strokeWidth="4" markerEnd="url(#arrowDown)" />
      <rect x="540" y="246" width="270" height="90" fill="var(--color-white-70)" />
      <text x="550" y="280" textAnchor="start" fill="var(--primary-dark-5)" fontSize="22" fontWeight="bold">
        ① 사업비 지급(차입금 포함)
      </text>
      <text x="550" y="320" textAnchor="start" fill="var(--primary-dark-5)" fontSize="22" fontWeight="bold">
        ② 발전법인 지분확보 (10%)
      </text>

      {/* 건물 - 태양광발전 법인 연결선 (하단 수평선) */}
      <line x1="273" y1="535" x2="540" y2="535" stroke="var(--gray-400)" strokeWidth="4" markerStart="url(#arrowUp)" />
      <text x="300" y="520" textAnchor="start" fill="var(--primary-dark-5)" fontSize="22" fontWeight="bold">
        ③ 지붕 위 발전설비 설치
      </text>

      {/* 건물주 박스 (좌상단) */}
      <rect x="40" y="20" width="220" height="90" rx="12" fill="var(--primary-dark-2)" />
      <text x="150" y="65" textAnchor="middle" dominantBaseline="middle" fill="var(--color-white)" fontSize="24" fontWeight="bold">
        건물주
      </text>

      {/* 타이런트 박스 (우상단) */}
      <rect x="540" y="20" width="220" height="90" rx="12" fill="var(--accent)" />
      <text x="650" y="65" textAnchor="middle" dominantBaseline="middle" fill="var(--color-white)" fontSize="24" fontWeight="bold">
        타이런트
      </text>

      {/* 건물 박스 (좌하단) */}
      <rect x="40" y="490" width="220" height="90" rx="12" fill="var(--gray-600)" />
      <text x="150" y="535" textAnchor="middle" dominantBaseline="ideographic" fill="var(--color-white)" fontSize="24" fontWeight="bold">
        건물
      </text>
      <text x="150" y="545" textAnchor="middle" dominantBaseline="hanging" fill="var(--color-white)" fontSize="18">
        (공장, 창고 등)
      </text>

      {/* 태양광발전 법인 박스 (우하단) */}
      <rect x="540" y="490" width="220" height="90" rx="12" fill="var(--gray-600)" />
      <text x="650" y="535" textAnchor="middle" dominantBaseline="ideographic" fill="var(--color-white)" fontSize="24" fontWeight="bold">
        태양광발전 법인
      </text>
      <text x="650" y="545" textAnchor="middle" dominantBaseline="hanging" fill="var(--color-white)" fontSize="18">
        (태양광발전설비 소유)
      </text>
    </svg>
  );
}


export function ProjectDiagram_Cashflow() {
  return (
    <svg
      viewBox="0 0 800 600"
      className="w-full max-w-[800px] h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 화살표 마커 */}
      <ArrowMarkers />

      {/* 건물주 - 건물 연결선 (좌측 수직선) */}
      <line x1="150" y1="110" x2="150" y2="490" stroke="var(--gray-400)" strokeWidth="4" />
      <text x="110" y="280" textAnchor="middle" fill="var(--primary-dark-5)" fontSize="22" fontWeight="bold">
        건물
      </text>
      <text x="110" y="320" textAnchor="middle" fill="var(--primary-dark-5)" fontSize="22" fontWeight="bold">
        소유
      </text>

      {/* 건물주 → 태양광발전 법인 대각선 1 (건물지붕 임대차 계약 체결) */}
      <line x1="240" y1="120" x2="570" y2="490" stroke="var(--gray-400)" strokeWidth="4" markerStart="url(#arrowUp)" />
      <rect x="245" y="246" width="250" height="90" fill="var(--color-white-70)" />
      <text x="260" y="300" textAnchor="start" fill="var(--primary-dark-5)" fontSize="22" fontWeight="bold">
        ③ 잔여이익의 50% 배분
      </text>

      {/* 타이런트 → 태양광발전 법인 연결선 (우측 수직선) */}
      <line x1="650" y1="123" x2="650" y2="490" stroke="var(--gray-400)" strokeWidth="4" markerStart="url(#arrowUp)" />
      <rect x="540" y="246" width="270" height="90" fill="var(--color-white-70)" />
      <text x="550" y="280" textAnchor="start" fill="var(--primary-dark-5)" fontSize="22" fontWeight="bold">
        ② 차입원리금 및 사업운영비
      </text>
      <text x="550" y="320" textAnchor="start" fill="var(--primary-dark-5)" fontSize="22" fontWeight="bold">
        ③ 잔여이익의 50% 배분
      </text>

      {/* 건물 - 태양광발전 법인 연결선 (하단 수평선) */}
      <line x1="260" y1="535" x2="527" y2="535" stroke="var(--gray-400)" strokeWidth="4" markerEnd="url(#arrowDown)" />
      <text x="285" y="520" textAnchor="start" fill="var(--primary-dark-5)" fontSize="22" fontWeight="bold">
        ① 전기판매 수익 발생
      </text>

      {/* 건물주 박스 (좌상단) */}
      <rect x="40" y="20" width="220" height="90" rx="12" fill="var(--primary-dark-2)" />
      <text x="150" y="65" textAnchor="middle" dominantBaseline="middle" fill="var(--color-white)" fontSize="24" fontWeight="bold">
        건물주
      </text>

      {/* 타이런트 박스 (우상단) */}
      <rect x="540" y="20" width="220" height="90" rx="12" fill="var(--accent)" />
      <text x="650" y="65" textAnchor="middle" dominantBaseline="middle" fill="var(--color-white)" fontSize="24" fontWeight="bold">
        타이런트
      </text>

      {/* 건물 박스 (좌하단) */}
      <rect x="40" y="490" width="220" height="90" rx="12" fill="var(--gray-600)" />
      <text x="150" y="535" textAnchor="middle" dominantBaseline="ideographic" fill="var(--color-white)" fontSize="24" fontWeight="bold">
        건물
      </text>
      <text x="150" y="545" textAnchor="middle" dominantBaseline="hanging" fill="var(--color-white)" fontSize="18">
        (공장, 창고 등)
      </text>

      {/* 태양광발전 법인 박스 (우하단) */}
      <rect x="540" y="490" width="220" height="90" rx="12" fill="var(--gray-600)" />
      <text x="650" y="535" textAnchor="middle" dominantBaseline="ideographic" fill="var(--color-white)" fontSize="24" fontWeight="bold">
        태양광발전 법인
      </text>
      <text x="650" y="545" textAnchor="middle" dominantBaseline="hanging" fill="var(--color-white)" fontSize="18">
        (태양광발전설비 소유)
      </text>
    </svg>
  );
}

export function ProjectDiagram_AfterLoan() {
  return (
    <svg
      viewBox="0 0 800 600"
      className="w-full max-w-[800px] h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 화살표 마커 */}
      <ArrowMarkers />

      {/* 건물주 - 건물 연결선 (좌측 수직선) */}
      <line x1="150" y1="110" x2="150" y2="490" stroke="var(--gray-400)" strokeWidth="4" />
      <text x="110" y="280" textAnchor="middle" fill="var(--primary-dark-5)" fontSize="22" fontWeight="bold">
        건물
      </text>
      <text x="110" y="320" textAnchor="middle" fill="var(--primary-dark-5)" fontSize="22" fontWeight="bold">
        소유
      </text>

      {/* 건물주 → 태양광발전 법인 대각선 1 (건물지붕 임대차 계약 체결) */}
      <line x1="240" y1="120" x2="570" y2="490" stroke="var(--gray-400)" strokeWidth="4" markerStart="url(#arrowUp)" />
      <rect x="245" y="246" width="250" height="90" fill="var(--color-white-70)" />
      <text x="260" y="300" textAnchor="start" fill="var(--primary-dark-5)" fontSize="22" fontWeight="bold">
        ③ 잔여이익의 50% 배분
      </text>

      {/* 타이런트 → 태양광발전 법인 연결선 (우측 수직선) */}
      <line x1="650" y1="123" x2="650" y2="490" stroke="var(--gray-400)" strokeWidth="4" markerStart="url(#arrowUp)" />
      <rect x="540" y="246" width="270" height="90" fill="var(--color-white-70)" />
      <text x="550" y="280" textAnchor="start" fill="var(--primary-dark-5)" fontSize="22" fontWeight="bold">
        ② 사업운영비 지급
      </text>
      <text x="550" y="320" textAnchor="start" fill="var(--primary-dark-5)" fontSize="22" fontWeight="bold">
        ③ 잔여이익의 50% 배분
      </text>

      {/* 건물 - 태양광발전 법인 연결선 (하단 수평선) */}
      <line x1="260" y1="535" x2="527" y2="535" stroke="var(--gray-400)" strokeWidth="4" markerEnd="url(#arrowDown)" />
      <text x="285" y="520" textAnchor="start" fill="var(--primary-dark-5)" fontSize="22" fontWeight="bold">
        ① 전기판매 수익 발생
      </text>

      {/* 건물주 박스 (좌상단) */}
      <rect x="40" y="20" width="220" height="90" rx="12" fill="var(--primary-dark-2)" />
      <text x="150" y="65" textAnchor="middle" dominantBaseline="middle" fill="var(--color-white)" fontSize="24" fontWeight="bold">
        건물주
      </text>

      {/* 타이런트 박스 (우상단) */}
      <rect x="540" y="20" width="220" height="90" rx="12" fill="var(--accent)" />
      <text x="650" y="65" textAnchor="middle" dominantBaseline="middle" fill="var(--color-white)" fontSize="24" fontWeight="bold">
        타이런트
      </text>

      {/* 건물 박스 (좌하단) */}
      <rect x="40" y="490" width="220" height="90" rx="12" fill="var(--gray-600)" />
      <text x="150" y="535" textAnchor="middle" dominantBaseline="ideographic" fill="var(--color-white)" fontSize="24" fontWeight="bold">
        건물
      </text>
      <text x="150" y="545" textAnchor="middle" dominantBaseline="hanging" fill="var(--color-white)" fontSize="18">
        (공장, 창고 등)
      </text>

      {/* 태양광발전 법인 박스 (우하단) */}
      <rect x="540" y="490" width="220" height="90" rx="12" fill="var(--gray-600)" />
      <text x="650" y="535" textAnchor="middle" dominantBaseline="ideographic" fill="var(--color-white)" fontSize="24" fontWeight="bold">
        태양광발전 법인
      </text>
      <text x="650" y="545" textAnchor="middle" dominantBaseline="hanging" fill="var(--color-white)" fontSize="18">
        (태양광발전설비 소유)
      </text>
    </svg>
  );
}

export function ProjectDiagram_AfterInvestment() {
  return (
    <svg
      viewBox="0 0 800 600"
      className="w-full max-w-[800px] h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 화살표 마커 */}
      <ArrowMarkers />

      {/* 건물주 - 건물 연결선 (좌측 수직선) */}
      <line x1="150" y1="123" x2="150" y2="490" stroke="var(--gray-400)" strokeWidth="4" markerStart="url(#arrowUp)" />
      <rect x="50" y="246" width="190" height="90" fill="var(--color-white-70)" />
      <text x="70" y="280" textAnchor="start" fill="var(--primary-dark-5)" fontSize="22" fontWeight="bold">
        ③ 전기판매 수익
      </text>
      <text x="95" y="320" textAnchor="start" fill="var(--primary-dark-5)" fontSize="22" fontWeight="bold">
        100% 확보
      </text>

      {/* 건물주 - 타이런트 연결선 (상단 수평선) */}
      <line x1="273" y1="65" x2="540" y2="65" stroke="var(--gray-400)" strokeWidth="4" markerStart="url(#arrowUp)" />
      <text x="305" y="50" textAnchor="start" fill="var(--primary-dark-5)" fontSize="22" fontWeight="bold">
        ① 발전법인 지분(10%) 
      </text>
      <text x="330" y="95" textAnchor="start" fill="var(--primary-dark-5)" fontSize="22" fontWeight="bold">
        무상 양도 
      </text>

      {/* 건물주 → 태양광발전 법인 대각선 1 (건물지붕 임대차 계약 체결) */}
      <line x1="240" y1="120" x2="570" y2="490" stroke="var(--gray-400)" strokeWidth="4" markerStart="url(#arrowUp)" />
      <rect x="290" y="246" width="200" height="90" fill="var(--color-white-70)" />
      <text x="310" y="280" textAnchor="start" fill="var(--primary-dark-5)" fontSize="22" fontWeight="bold">
        ② 태양광발전설비
      </text>
      <text x="335" y="320" textAnchor="start" fill="var(--primary-dark-5)" fontSize="22" fontWeight="bold">
        소유권 무상 이전
      </text>

      {/* 타이런트 → 태양광발전 법인 연결선 (우측 수직선) */}
      {/* <line x1="650" y1="123" x2="650" y2="490" stroke="var(--gray-400)" strokeWidth="4" markerStart="url(#arrowUp)" />
      <rect x="540" y="246" width="270" height="90" fill="var(--color-white-70)" />
      <text x="550" y="280" textAnchor="start" fill="var(--primary-dark-5)" fontSize="22" fontWeight="bold">
        ② 사업운영비 지급
      </text>
      <text x="550" y="320" textAnchor="start" fill="var(--primary-dark-5)" fontSize="22" fontWeight="bold">
        ③ 잔여이익의 50% 배분
      </text> */}

      {/* 건물 - 태양광발전 법인 연결선 (하단 수평선) */}
      {/* <line x1="260" y1="535" x2="527" y2="535" stroke="var(--gray-400)" strokeWidth="4" markerEnd="url(#arrowDown)" />
      <text x="285" y="520" textAnchor="start" fill="var(--primary-dark-5)" fontSize="22" fontWeight="bold">
        ③ 전기판매 수익 발생
      </text> */}

      {/* 건물주 박스 (좌상단) */}
      <rect x="40" y="20" width="220" height="90" rx="12" fill="var(--primary-dark-2)" />
      <text x="150" y="65" textAnchor="middle" dominantBaseline="middle" fill="var(--color-white)" fontSize="24" fontWeight="bold">
        건물주
      </text>

      {/* 타이런트 박스 (우상단) */}
      <rect x="540" y="20" width="220" height="90" rx="12" fill="var(--accent)" />
      <text x="650" y="65" textAnchor="middle" dominantBaseline="middle" fill="var(--color-white)" fontSize="24" fontWeight="bold">
        타이런트
      </text>

      {/* 건물 박스 (좌하단) */}
      <rect x="40" y="490" width="220" height="90" rx="12" fill="var(--gray-600)" />
      <text x="150" y="535" textAnchor="middle" dominantBaseline="ideographic" fill="var(--color-white)" fontSize="24" fontWeight="bold">
        건물
      </text>
      <text x="150" y="545" textAnchor="middle" dominantBaseline="hanging" fill="var(--color-white)" fontSize="18">
        (공장, 창고 등)
      </text>

      {/* 태양광발전 법인 박스 (우하단) */}
      <rect x="540" y="490" width="220" height="90" rx="12" fill="var(--gray-600)" />
      <text x="650" y="535" textAnchor="middle" dominantBaseline="ideographic" fill="var(--color-white)" fontSize="24" fontWeight="bold">
        태양광발전 법인
      </text>
      <text x="650" y="545" textAnchor="middle" dominantBaseline="hanging" fill="var(--color-white)" fontSize="18">
        (태양광발전설비 소유)
      </text>
    </svg>
  );
}