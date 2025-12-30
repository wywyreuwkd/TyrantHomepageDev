export function RevenueDiagramRenderer() {
  return (
    <>
      {/* SVG 다이어그램 - 세로 방향 */}
      <div className="w-full flex justify-center">
        <svg 
          viewBox="0 0 800 900" 
          className="w-full max-w-[800px] h-auto"
        >
          {/* 상단 큰 원 - 태양광 발전소 이익 */}
          <circle cx="400" cy="110" r="77" fill="#273B82" />
          <text x="400" y="110" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="700">
            <tspan x="400" dy="-0.5em">태양광 발전소</tspan>
            <tspan x="400" dy="1.6em">전기판매 수익</tspan>
          </text>

          {/* 중앙 화살표 (사업 진행) - 세로 */}
          <polygon 
            points="360,230 360,680 400,720 440,680 440,230" 
            fill="#15305A" 
          />
          <text x="400" y="400" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="700">
            <tspan x="400" dy="0.0em">사</tspan>
            <tspan x="400" dy="1.5em">업</tspan>
            <tspan x="400" dy="1.5em">진</tspan>
            <tspan x="400" dy="1.5em">행</tspan>
          </text>

          {/* 왼쪽 분기 - 보증보험료, 영업비 */}
          {/* 보증보험료 */}
          <path d="M270,315 L360,315" stroke="#999999" strokeWidth="3" fill="none" />
          <rect x="20" y="270" width="250" height="90" rx="8" fill="#15305A" />
          <text x="145" y="310" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="600">보증보험료</text>
          <text x="145" y="340" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="18">(2~3억/MW)</text>

          {/* 개발사 */}
          <path d="M270,435 L360,435" stroke="#999999" strokeWidth="3" fill="none" />
          <rect x="20" y="390" width="250" height="90" rx="8" fill="#15305A" />
          <text x="145" y="430" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="600">개발사</text>
          <text x="145" y="460" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="18">(개발이익)</text>

          {/* 시공사 */}
          <path d="M270,555 L360,555" stroke="#999999" strokeWidth="3" fill="none" />
          <rect x="20" y="510" width="250" height="90" rx="8" fill="#15305A" />
          <text x="145" y="550" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="600">시공사</text>
          <text x="145" y="580" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="18">(시공이익 과다)</text>

          {/* 오른쪽 분기 - 개발사, 기자재공급사, 시공사, 사업주 */}
          {/* 영업비 */}
          <path d="M530,315 L440,315" stroke="#999999" strokeWidth="3" fill="none" />
          <rect x="530" y="270" width="250" height="90" rx="8" fill="#15305A" />
          <text x="655" y="310" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="600">영업비</text>
          <text x="655" y="340" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="18">(영업비 과다)</text>

          {/* 기자재 공급사 */}
          <path d="M530,435 L440,435" stroke="#999999" strokeWidth="3" fill="none" />
          <rect x="530" y="390" width="250" height="90" rx="8" fill="#15305A" />
          <text x="655" y="430" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="600">기자재 공급사</text>
          <text x="655" y="460" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="18">(기자재 마진)</text>

          {/* 사업주 */}
          <path d="M530,555 L440,555" stroke="#999999" strokeWidth="3" fill="none" />
          <rect x="530" y="510" width="250" height="90" rx="8" fill="#15305A" />
          <text x="655" y="550" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="600">발전사업자</text>
          <text x="655" y="580" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="18">(운영수익)</text>

          {/* 하단 작은 원 - 건물주 이익 */}
          <circle cx="400" cy="815" r="50" fill="rgb(102,102,102)" stroke="rgb(102, 102, 102)" strokeWidth="2" />
          <text x="400" y="840" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="700">
            <tspan x="400" dy="-1.5em">건물주</tspan>
            <tspan x="400" dy="1.5em">임대수익</tspan>
          </text>
        </svg>
      </div>
    </>
  );
}

export function RevenueDiagramSolarO() {
  return (
    <>
      {/* SVG 다이어그램 - 세로 방향 */}
      <div className="w-full flex justify-center">
        <svg 
          viewBox="0 0 800 900" 
          className="w-full max-w-[800px] h-auto"
        >
          {/* 상단 큰 원 - 태양광 발전소 이익 */}
          <circle cx="400" cy="110" r="100" fill="#273B82" />
          <text x="400" y="110" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="700">
            <tspan x="400" dy="-0.5em">태양광 발전소</tspan>
            <tspan x="400" dy="1.6em">전기판매 수익</tspan>
          </text>

          {/* 중앙 화살표 (사업 진행) - 세로 */}
          <polygon 
            points="360,230 360,680 400,720 440,680 440,230" 
            fill="#15305A" 
          />
          <text x="400" y="400" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="700">
            <tspan x="400" dy="0.0em">사</tspan>
            <tspan x="400" dy="1.5em">업</tspan>
            <tspan x="400" dy="1.5em">진</tspan>
            <tspan x="400" dy="1.5em">행</tspan>
          </text>

          {/* 왼쪽 분기 - 보증보험료, 영업비 */}
          {/* 보증보험료 */}
          <path d="M270,315 L360,315" stroke="#999999" strokeWidth="3" fill="none" />
          <rect x="20" y="270" width="250" height="90" rx="8" fill="#15305A" />
          <text x="145" y="310" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="600">보증보험료</text>
          <text x="145" y="340" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="18">(비용제거)</text>

          {/* 개발사 */}
          <path d="M270,435 L360,435" stroke="#999999" strokeWidth="3" fill="none" />
          <rect x="20" y="390" width="250" height="90" rx="8" fill="#15305A" />
          <text x="145" y="430" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="600">개발사</text>
          <text x="145" y="460" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="18">(이익제거)</text>

          {/* 시공사 */}
          <path d="M270,555 L360,555" stroke="#999999" strokeWidth="3" fill="none" />
          <rect x="20" y="510" width="250" height="90" rx="8" fill="#15305A" />
          <text x="145" y="550" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="600">시공사</text>
          <text x="145" y="580" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="18">(마진 적정화)</text>

          {/* 오른쪽 분기 - 개발사, 기자재공급사, 시공사, 사업주 */}
          {/* 영업비 */}
          <path d="M530,315 L440,315" stroke="#999999" strokeWidth="3" fill="none" />
          <rect x="530" y="270" width="250" height="90" rx="8" fill="#15305A" />
          <text x="655" y="310" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="600">영업비</text>
          <text x="655" y="340" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="18">(영업비 최소화)</text>

          {/* 기자재 공급사 */}
          <path d="M530,435 L440,435" stroke="#999999" strokeWidth="3" fill="none" />
          <rect x="530" y="390" width="250" height="90" rx="8" fill="#15305A" />
          <text x="655" y="430" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="600">기자재 공급사</text>
          <text x="655" y="460" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="18">(마진 적정화)</text>

          {/* 사업주 */}
          <path d="M530,555 L440,555" stroke="#999999" strokeWidth="3" fill="none" />
          <rect x="530" y="510" width="250" height="90" rx="8" fill="#15305A" />
          <text x="655" y="550" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="600">발전사업자</text>
          <text x="655" y="580" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="18">(운영수익 공유)</text>

          {/* 하단 작은 원 - 건물주 이익 */}
          <circle cx="400" cy="815" r="80" fill="#FF6B3D" stroke="#FF6B3D" strokeWidth="2" />
          <text x="400" y="840" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="700">
            <tspan x="400" dy="-1.5em">건물주</tspan>
            <tspan x="400" dy="1.5em">수익 배분</tspan>
          </text>
        </svg>
      </div>
    </>
  );
}