import { PageHero } from "../components/PageHero";
import { Calendar, Clock, Zap, TrendingUp, Sun, Moon } from "lucide-react";
import { useState } from "react";

export function MonitoringGenerationTime() {
  const [selectedDate, setSelectedDate] = useState("2024-01");
  
  const monthlyData = [
    { month: "01월", hours: 145, generation: "2,850 kWh", efficiency: "94%" },
    { month: "02월", hours: 138, generation: "2,720 kWh", efficiency: "93%" },
    { month: "03월", hours: 162, generation: "3,180 kWh", efficiency: "95%" },
    { month: "04월", hours: 175, generation: "3,450 kWh", efficiency: "96%" },
    { month: "05월", hours: 188, generation: "3,710 kWh", efficiency: "97%" },
    { month: "06월", hours: 195, generation: "3,850 kWh", efficiency: "96%" },
  ];

  const dailyData = [
    { date: "01/01", dayHours: 5.2, nightHours: 0, total: "102 kWh" },
    { date: "01/02", dayHours: 6.1, nightHours: 0, total: "118 kWh" },
    { date: "01/03", dayHours: 4.8, nightHours: 0, total: "95 kWh" },
    { date: "01/04", dayHours: 5.9, nightHours: 0, total: "115 kWh" },
    { date: "01/05", dayHours: 6.3, nightHours: 0, total: "122 kWh" },
  ];

  return (
    <div className="min-h-screen bg-gray-50" style={{ paddingTop: '80px' }}>
      <PageHero
        badge={{ text: "MONITORING", color: "#FF6B3D" }}
        title="발전시간 조회"
        description="실시간 태양광 발전 시간과 발전량을 확인하세요"
      />

      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 py-12 md:py-24 space-y-12">
        
        {/* 기간 선택 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-6 h-6 text-[#FF6B3D]" />
            <h2 className="text-[#0F214A]">조회 기간 선택</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <input
              type="month"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-6 py-3 border-2 border-[#0F214A]/20 rounded-xl focus:border-[#FF6B3D] outline-none transition-colors"
            />
            <button className="px-8 py-3 bg-[#FF6B3D] text-white rounded-xl hover:bg-[#FF7C40] transition-all">
              조회하기
            </button>
          </div>
        </div>

        {/* 요약 통계 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#FF6B3D]/10 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#FF6B3D]" />
              </div>
              <h3 className="text-[#0F214A]/70">총 발전시간</h3>
            </div>
            <p className="text-[#0F214A] mb-2" style={{ fontSize: '32px', fontWeight: '700' }}>1,003시간</p>
            <p className="text-[#0F214A]/50">지난달 대비 +8%</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#0F214A]/10 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#0F214A]" />
              </div>
              <h3 className="text-[#0F214A]/70">총 발전량</h3>
            </div>
            <p className="text-[#0F214A] mb-2" style={{ fontSize: '32px', fontWeight: '700' }}>19,760 kWh</p>
            <p className="text-[#0F214A]/50">지난달 대비 +12%</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-[#0F214A]/70">평균 효율</h3>
            </div>
            <p className="text-[#0F214A] mb-2" style={{ fontSize: '32px', fontWeight: '700' }}>95.2%</p>
            <p className="text-green-600">정상 운영 중</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                <Sun className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-[#0F214A]/70">일평균 발전</h3>
            </div>
            <p className="text-[#0F214A] mb-2" style={{ fontSize: '32px', fontWeight: '700' }}>329 kWh</p>
            <p className="text-[#0F214A]/50">6개월 평균</p>
          </div>
        </div>

        {/* 월별 발전시간 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-[#0F214A] mb-8">월별 발전시간 및 발전량</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#0F214A]">
                  <th className="text-left py-4 px-4 text-[#0F214A]">월</th>
                  <th className="text-left py-4 px-4 text-[#0F214A]">발전시간</th>
                  <th className="text-left py-4 px-4 text-[#0F214A]">발전량</th>
                  <th className="text-left py-4 px-4 text-[#0F214A]">효율</th>
                  <th className="text-left py-4 px-4 text-[#0F214A]">상태</th>
                </tr>
              </thead>
              <tbody>
                {monthlyData.map((row, index) => (
                  <tr key={index} className="border-b border-[#0F214A]/10 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 text-[#0F214A]">{row.month}</td>
                    <td className="py-4 px-4 text-[#0F214A]">{row.hours}시간</td>
                    <td className="py-4 px-4 text-[#0F214A]">{row.generation}</td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg" style={{ fontSize: '16px', fontWeight: '600' }}>
                        {row.efficiency}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg" style={{ fontSize: '16px', fontWeight: '600' }}>
                        정상
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 일별 발전시간 상세 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <Sun className="w-6 h-6 text-[#FF6B3D]" />
            <h2 className="text-[#0F214A]">일별 발전시간 상세</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {dailyData.map((day, index) => (
              <div key={index} className="flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-6">
                  <p className="text-[#0F214A]" style={{ fontSize: '18px', fontWeight: '600', minWidth: '80px' }}>
                    {day.date}
                  </p>
                  <div className="flex items-center gap-2">
                    <Sun className="w-5 h-5 text-yellow-500" />
                    <span className="text-[#0F214A]/70">주간: {day.dayHours}시간</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Moon className="w-5 h-5 text-blue-500" />
                    <span className="text-[#0F214A]/70">야간: {day.nightHours}시간</span>
                  </div>
                </div>
                <p className="text-[#0F214A]" style={{ fontSize: '18px', fontWeight: '700' }}>
                  {day.total}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 안내 사항 */}
        <div className="bg-[#0F214A] rounded-2xl p-8 text-white">
          <h3 className="text-white mb-4" style={{ fontSize: '22px', fontWeight: '600' }}>
            발전시간 조회 안내
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-[#FF6B3D] mt-1">•</span>
              <span>발전시간은 일사량에 따라 매일 달라질 수 있습니다.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FF6B3D] mt-1">•</span>
              <span>날씨가 흐리거나 비가 오는 날은 발전량이 감소할 수 있습니다.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FF6B3D] mt-1">•</span>
              <span>데이터는 10분마다 자동으로 업데이트됩니다.</span>
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