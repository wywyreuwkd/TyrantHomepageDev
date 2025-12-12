import { PageHero } from "../components/PageHero";
import { DollarSign, TrendingUp, PieChart, Download, Calendar, BarChart3 } from "lucide-react";

export function MonitoringFinancialReport() {
  const monthlyFinance = [
    { month: "2024.01", revenue: 2850000, expense: 180000, net: 2670000, roi: "8.9%" },
    { month: "2023.12", revenue: 2720000, expense: 180000, net: 2540000, roi: "8.5%" },
    { month: "2023.11", revenue: 2580000, expense: 180000, net: 2400000, roi: "8.0%" },
    { month: "2023.10", revenue: 2650000, expense: 180000, net: 2470000, roi: "8.2%" },
    { month: "2023.09", revenue: 2780000, expense: 180000, net: 2600000, roi: "8.7%" },
    { month: "2023.08", revenue: 2920000, expense: 180000, net: 2740000, roi: "9.1%" },
  ];

  const expenseBreakdown = [
    { category: "O&M 비용", amount: 120000, percentage: "66.7%" },
    { category: "보험료", amount: 35000, percentage: "19.4%" },
    { category: "모니터링", amount: 15000, percentage: "8.3%" },
    { category: "기타", amount: 10000, percentage: "5.6%" },
  ];

  return (
    <div className="min-h-screen bg-gray-50" style={{ paddingTop: '80px' }}>
      <PageHero
        badge={{ text: "MONITORING", color: "#FF6B3D" }}
        title="자금관리 보고서"
        description="발전수익과 운영비용을 체계적으로 관리하세요"
      />

      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 py-12 md:py-24 space-y-12">
        
        {/* 재무 요약 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-[#0F214A]/70">월평균 수익</h3>
            </div>
            <p className="text-[#0F214A] mb-2" style={{ fontSize: '32px', fontWeight: '700' }}>
              ₩2,750,000
            </p>
            <p className="text-green-600">전월 대비 +4.8%</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-[#0F214A]/70">월평균 지출</h3>
            </div>
            <p className="text-[#0F214A] mb-2" style={{ fontSize: '32px', fontWeight: '700' }}>
              ₩180,000
            </p>
            <p className="text-[#0F214A]/50">고정 비용</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#FF6B3D]/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#FF6B3D]" />
              </div>
              <h3 className="text-[#0F214A]/70">월평균 순수익</h3>
            </div>
            <p className="text-[#0F214A] mb-2" style={{ fontSize: '32px', fontWeight: '700' }}>
              ₩2,570,000
            </p>
            <p className="text-green-600">안정적 수익</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                <PieChart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-[#0F214A]/70">평균 ROI</h3>
            </div>
            <p className="text-[#0F214A] mb-2" style={{ fontSize: '32px', fontWeight: '700' }}>
              8.6%
            </p>
            <p className="text-[#0F214A]/50">6개월 평균</p>
          </div>
        </div>

        {/* 월별 재무 현황 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[#0F214A]">월별 재무 현황</h2>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-6 py-3 border-2 border-[#0F214A] text-[#0F214A] rounded-xl hover:bg-[#0F214A] hover:text-white transition-all">
                <Calendar className="w-5 h-5" />
                <span>기간 설정</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-[#FF6B3D] text-white rounded-xl hover:bg-[#FF7C40] transition-all">
                <Download className="w-5 h-5" />
                <span>다운로드</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#0F214A]">
                  <th className="text-left py-4 px-4 text-[#0F214A]">월</th>
                  <th className="text-right py-4 px-4 text-[#0F214A]">발전수익</th>
                  <th className="text-right py-4 px-4 text-[#0F214A]">운영비용</th>
                  <th className="text-right py-4 px-4 text-[#0F214A]">순수익</th>
                  <th className="text-center py-4 px-4 text-[#0F214A]">ROI</th>
                </tr>
              </thead>
              <tbody>
                {monthlyFinance.map((row, index) => (
                  <tr key={index} className="border-b border-[#0F214A]/10 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 text-[#0F214A]">{row.month}</td>
                    <td className="py-4 px-4 text-right text-green-600" style={{ fontWeight: '600' }}>
                      +₩{row.revenue.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-right text-red-600" style={{ fontWeight: '600' }}>
                      -₩{row.expense.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-right text-[#0F214A]" style={{ fontWeight: '700' }}>
                      ₩{row.net.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg" style={{ fontSize: '16px', fontWeight: '600' }}>
                        {row.roi}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 비용 분석 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 비용 구성 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-[#0F214A] mb-8">월별 비용 구성</h2>
            <div className="space-y-4">
              {expenseBreakdown.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#0F214A]">{item.category}</span>
                    <span className="text-[#0F214A]" style={{ fontWeight: '600' }}>
                      ₩{item.amount.toLocaleString()} ({item.percentage})
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-[#FF6B3D] h-3 rounded-full transition-all"
                      style={{ width: item.percentage }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 누적 재무 현황 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-[#0F214A] mb-8">누적 재무 현황</h2>
            <div className="space-y-6">
              <div className="p-6 bg-green-50 rounded-xl">
                <p className="text-green-700 mb-2">누적 발전수익</p>
                <p className="text-green-800" style={{ fontSize: '32px', fontWeight: '700' }}>
                  ₩16,500,000
                </p>
              </div>
              <div className="p-6 bg-red-50 rounded-xl">
                <p className="text-red-700 mb-2">누적 운영비용</p>
                <p className="text-red-800" style={{ fontSize: '32px', fontWeight: '700' }}>
                  ₩1,080,000
                </p>
              </div>
              <div className="p-6 bg-[#0F214A] rounded-xl text-white">
                <p className="text-white/80 mb-2">누적 순수익</p>
                <p style={{ fontSize: '32px', fontWeight: '700' }}>
                  ₩15,420,000
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 투자 회수 현황 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-[#0F214A] mb-8">투자 회수 현황</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-[#0F214A]/70 mb-3">총 투자금액</p>
              <p className="text-[#0F214A] mb-4" style={{ fontSize: '28px', fontWeight: '700' }}>
                ₩90,000,000
              </p>
              <p className="text-[#0F214A]/50">초기 설치비용</p>
            </div>
            <div>
              <p className="text-[#0F214A]/70 mb-3">회수 완료</p>
              <p className="text-green-600 mb-4" style={{ fontSize: '28px', fontWeight: '700' }}>
                ₩15,420,000
              </p>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-green-600 h-4 rounded-full" style={{ width: '17.1%' }} />
              </div>
            </div>
            <div>
              <p className="text-[#0F214A]/70 mb-3">예상 회수기간</p>
              <p className="text-[#FF6B3D] mb-4" style={{ fontSize: '28px', fontWeight: '700' }}>
                5.2년
              </p>
              <p className="text-[#0F214A]/50">현재 속도 기준</p>
            </div>
          </div>
        </div>

        {/* 세부 보고서 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-[#0F214A] mb-6">상세 재무 보고서</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="p-6 border-2 border-[#0F214A]/20 rounded-xl hover:border-[#FF6B3D] transition-all text-left">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[#0F214A] mb-2" style={{ fontSize: '18px', fontWeight: '600' }}>
                    2024년 1분기 재무보고서
                  </h3>
                  <p className="text-[#0F214A]/70">발행일: 2024.04.05</p>
                </div>
                <Download className="w-6 h-6 text-[#FF6B3D]" />
              </div>
            </button>
            <button className="p-6 border-2 border-[#0F214A]/20 rounded-xl hover:border-[#FF6B3D] transition-all text-left">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[#0F214A] mb-2" style={{ fontSize: '18px', fontWeight: '600' }}>
                    2023년 4분기 재무보고서
                  </h3>
                  <p className="text-[#0F214A]/70">발행일: 2024.01.05</p>
                </div>
                <Download className="w-6 h-6 text-[#FF6B3D]" />
              </div>
            </button>
          </div>
        </div>

        {/* 안내사항 */}
        <div className="bg-[#0F214A] rounded-2xl p-8 text-white">
          <h3 className="text-white mb-4" style={{ fontSize: '22px', fontWeight: '600' }}>
            자금관리 보고서 안내
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-[#FF6B3D] mt-1">•</span>
              <span>재무보고서는 분기별로 자동 생성되며, 이메일로 발송됩니다.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FF6B3D] mt-1">•</span>
              <span>발전수익은 한국전력공사의 정산 기준을 따릅니다.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FF6B3D] mt-1">•</span>
              <span>세무 관련 문의는 전담 세무사와 상담 가능합니다.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FF6B3D] mt-1">•</span>
              <span>문의사항은 고객센터(1588-0000)로 연락주시기 바랍니다.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}