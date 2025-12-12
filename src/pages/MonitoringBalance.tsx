import { PageHero } from "../components/PageHero";
import { Wallet, TrendingUp, DollarSign, Calendar, Download, ArrowUpRight, ArrowDownRight } from "lucide-react";

export function MonitoringBalance() {
  const transactions = [
    { date: "2024.01.25", type: "발전수익 입금", amount: 285000, balance: 3450000, status: "입금" },
    { date: "2024.01.20", type: "운영비 출금", amount: -45000, balance: 3165000, status: "출금" },
    { date: "2024.01.15", type: "발전수익 입금", amount: 310000, balance: 3210000, status: "입금" },
    { date: "2024.01.10", type: "정산금 입금", amount: 520000, balance: 2900000, status: "입금" },
    { date: "2024.01.05", type: "운영비 출금", amount: -45000, balance: 2380000, status: "출금" },
  ];

  const summary = {
    currentBalance: 3450000,
    monthlyIncome: 1115000,
    monthlyExpense: 90000,
    netIncome: 1025000,
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ paddingTop: '80px' }}>
      <PageHero
        badge={{ text: "MONITORING", color: "#FF6B3D" }}
        title="잔고조회"
        description="태양광 발전 수익과 지출 내역을 한눈에 확인하세요"
      />

      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 py-12 md:py-24 space-y-12">
        
        {/* 현재 잔고 카드 */}
        <div className="bg-gradient-to-br from-[#0F214A] to-[#15305A] rounded-2xl p-10 shadow-lg text-white">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-white/70 mb-2">현재 잔고</p>
              <p style={{ fontSize: '48px', fontWeight: '700' }}>
                {summary.currentBalance.toLocaleString()}원
              </p>
            </div>
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <Wallet className="w-8 h-8 text-[#FF6B3D]" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/20">
            <div>
              <p className="text-white/70 mb-2">이번 달 수익</p>
              <p className="text-green-400" style={{ fontSize: '24px', fontWeight: '700' }}>
                +{summary.monthlyIncome.toLocaleString()}원
              </p>
            </div>
            <div>
              <p className="text-white/70 mb-2">이번 달 지출</p>
              <p className="text-red-400" style={{ fontSize: '24px', fontWeight: '700' }}>
                -{summary.monthlyExpense.toLocaleString()}원
              </p>
            </div>
            <div>
              <p className="text-white/70 mb-2">순수익</p>
              <p className="text-[#FF6B3D]" style={{ fontSize: '24px', fontWeight: '700' }}>
                {summary.netIncome.toLocaleString()}원
              </p>
            </div>
          </div>
        </div>

        {/* 통계 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-[#0F214A]/70">월평균 수익</h3>
            </div>
            <p className="text-[#0F214A] mb-2" style={{ fontSize: '32px', fontWeight: '700' }}>
              ₩1,150,000
            </p>
            <p className="text-green-600">전월 대비 +8%</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-[#0F214A]/70">누적 수익</h3>
            </div>
            <p className="text-[#0F214A] mb-2" style={{ fontSize: '32px', fontWeight: '700' }}>
              ₩6,900,000
            </p>
            <p className="text-[#0F214A]/50">설치 후 6개월</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#FF6B3D]/10 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-[#FF6B3D]" />
              </div>
              <h3 className="text-[#0F214A]/70">회수 예상기간</h3>
            </div>
            <p className="text-[#0F214A] mb-2" style={{ fontSize: '32px', fontWeight: '700' }}>
              5.2년
            </p>
            <p className="text-[#0F214A]/50">총 투자금 기준</p>
          </div>
        </div>

        {/* 거래 내역 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[#0F214A]">최근 거래 내역</h2>
            <button className="flex items-center gap-2 px-6 py-3 border-2 border-[#0F214A] text-[#0F214A] rounded-xl hover:bg-[#0F214A] hover:text-white transition-all">
              <Download className="w-5 h-5" />
              <span>내역 다운로드</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#0F214A]">
                  <th className="text-left py-4 px-4 text-[#0F214A]">날짜</th>
                  <th className="text-left py-4 px-4 text-[#0F214A]">구분</th>
                  <th className="text-right py-4 px-4 text-[#0F214A]">금액</th>
                  <th className="text-right py-4 px-4 text-[#0F214A]">잔고</th>
                  <th className="text-center py-4 px-4 text-[#0F214A]">상태</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index} className="border-b border-[#0F214A]/10 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 text-[#0F214A]">{transaction.date}</td>
                    <td className="py-4 px-4 text-[#0F214A]">{transaction.type}</td>
                    <td className={`py-4 px-4 text-right ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`} style={{ fontWeight: '600' }}>
                      <div className="flex items-center justify-end gap-2">
                        {transaction.amount > 0 ? (
                          <ArrowUpRight className="w-4 h-4" />
                        ) : (
                          <ArrowDownRight className="w-4 h-4" />
                        )}
                        {transaction.amount > 0 ? '+' : ''}{transaction.amount.toLocaleString()}원
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right text-[#0F214A]" style={{ fontWeight: '600' }}>
                      {transaction.balance.toLocaleString()}원
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className={`px-3 py-1 rounded-lg ${
                        transaction.status === '입금' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`} style={{ fontSize: '16px', fontWeight: '600' }}>
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 조회 기간 설정 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-[#0F214A] mb-6">거래내역 조회 기간</h3>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-[#0F214A] text-white rounded-xl hover:bg-[#15305A] transition-all">
              1개월
            </button>
            <button className="px-6 py-3 border-2 border-[#0F214A]/20 text-[#0F214A] rounded-xl hover:border-[#0F214A] transition-all">
              3개월
            </button>
            <button className="px-6 py-3 border-2 border-[#0F214A]/20 text-[#0F214A] rounded-xl hover:border-[#0F214A] transition-all">
              6개월
            </button>
            <button className="px-6 py-3 border-2 border-[#0F214A]/20 text-[#0F214A] rounded-xl hover:border-[#0F214A] transition-all">
              1년
            </button>
            <div className="flex gap-2">
              <input 
                type="date" 
                className="px-4 py-3 border-2 border-[#0F214A]/20 rounded-xl focus:border-[#FF6B3D] outline-none"
              />
              <span className="flex items-center px-2">~</span>
              <input 
                type="date" 
                className="px-4 py-3 border-2 border-[#0F214A]/20 rounded-xl focus:border-[#FF6B3D] outline-none"
              />
            </div>
            <button className="px-8 py-3 bg-[#FF6B3D] text-white rounded-xl hover:bg-[#FF7C40] transition-all">
              조회
            </button>
          </div>
        </div>

        {/* 안내사항 */}
        <div className="bg-[#0F214A] rounded-2xl p-8 text-white">
          <h3 className="text-white mb-4" style={{ fontSize: '22px', fontWeight: '600' }}>
            잔고 조회 안내
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-[#FF6B3D] mt-1">•</span>
              <span>발전수익은 매월 25일에 정산되어 입금됩니다.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FF6B3D] mt-1">•</span>
              <span>운영비는 매월 5일과 20일에 자동 출금됩니다.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FF6B3D] mt-1">•</span>
              <span>거래내역은 최대 5년까지 조회 가능합니다.</span>
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