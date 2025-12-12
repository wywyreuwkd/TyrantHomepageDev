import { PageHero } from "../components/PageHero";
import { FileText, Download, Calendar, AlertCircle, CheckCircle2, TrendingUp, Wrench, Shield } from "lucide-react";

export function MonitoringManagementReport() {
  const reports = [
    {
      month: "2024년 1월",
      date: "2024.02.05",
      status: "완료",
      inspections: 4,
      issues: 0,
      efficiency: "96%",
    },
    {
      month: "2023년 12월",
      date: "2024.01.05",
      status: "완료",
      inspections: 4,
      issues: 1,
      efficiency: "94%",
    },
    {
      month: "2023년 11월",
      date: "2023.12.05",
      status: "완료",
      inspections: 4,
      issues: 0,
      efficiency: "95%",
    },
  ];

  const maintenanceHistory = [
    { date: "2024.01.20", type: "정기점검", detail: "인버터 및 모니터링 시스템 점검", status: "완료" },
    { date: "2024.01.15", type: "청소", detail: "태양광 패널 세척 작업", status: "완료" },
    { date: "2023.12.28", type: "수리", detail: "케이블 교체 작업", status: "완료" },
    { date: "2023.12.15", type: "정기점검", detail: "계절별 정기 점검", status: "완료" },
  ];

  return (
    <div className="min-h-screen bg-gray-50" style={{ paddingTop: '80px' }}>
      <PageHero
        badge={{ text: "MONITORING", color: "#FF6B3D" }}
        title="관리운영 보고서"
        description="태양광 발전소의 유지관리 현황과 운영 보고서를 확인하세요"
      />

      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 py-12 md:py-24 space-y-12">
        
        {/* 현황 요약 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-[#0F214A]/70">정기점검</h3>
            </div>
            <p className="text-[#0F214A] mb-2" style={{ fontSize: '32px', fontWeight: '700' }}>12회</p>
            <p className="text-[#0F214A]/50">지난 3개월</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                <Wrench className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-[#0F214A]/70">유지보수</h3>
            </div>
            <p className="text-[#0F214A] mb-2" style={{ fontSize: '32px', fontWeight: '700' }}>3건</p>
            <p className="text-[#0F214A]/50">완료됨</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#FF6B3D]/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#FF6B3D]" />
              </div>
              <h3 className="text-[#0F214A]/70">평균 효율</h3>
            </div>
            <p className="text-[#0F214A] mb-2" style={{ fontSize: '32px', fontWeight: '700' }}>95%</p>
            <p className="text-green-600">정상 운영 중</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-[#0F214A]/70">주의사항</h3>
            </div>
            <p className="text-[#0F214A] mb-2" style={{ fontSize: '32px', fontWeight: '700' }}>0건</p>
            <p className="text-[#0F214A]/50">발견 없음</p>
          </div>
        </div>

        {/* 월별 보고서 목록 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[#0F214A]">월별 운영 보고서</h2>
            <button className="flex items-center gap-2 px-6 py-3 border-2 border-[#0F214A] text-[#0F214A] rounded-xl hover:bg-[#0F214A] hover:text-white transition-all">
              <Calendar className="w-5 h-5" />
              <span>기간 설정</span>
            </button>
          </div>

          <div className="space-y-4">
            {reports.map((report, index) => (
              <div key={index} className="p-6 border-2 border-[#0F214A]/10 rounded-xl hover:border-[#FF6B3D] transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-[#0F214A]/10 rounded-xl flex items-center justify-center">
                      <FileText className="w-7 h-7 text-[#0F214A]" />
                    </div>
                    <div>
                      <h3 className="text-[#0F214A] mb-2" style={{ fontSize: '22px', fontWeight: '600' }}>
                        {report.month} 관리운영 보고서
                      </h3>
                      <div className="flex flex-wrap gap-4 text-[#0F214A]/70">
                        <span>• 발행일: {report.date}</span>
                        <span>• 점검횟수: {report.inspections}회</span>
                        <span>• 이슈: {report.issues}건</span>
                        <span>• 효율: {report.efficiency}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-4 py-2 rounded-lg ${
                      report.status === '완료' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`} style={{ fontSize: '16px', fontWeight: '600' }}>
                      {report.status}
                    </span>
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#FF6B3D] text-white rounded-xl hover:bg-[#FF7C40] transition-all">
                      <Download className="w-5 h-5" />
                      <span>다운로드</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 유지보수 이력 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <Wrench className="w-6 h-6 text-[#FF6B3D]" />
            <h2 className="text-[#0F214A]">유지보수 이력</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#0F214A]">
                  <th className="text-left py-4 px-4 text-[#0F214A]">날짜</th>
                  <th className="text-left py-4 px-4 text-[#0F214A]">구분</th>
                  <th className="text-left py-4 px-4 text-[#0F214A]">상세내용</th>
                  <th className="text-center py-4 px-4 text-[#0F214A]">상태</th>
                </tr>
              </thead>
              <tbody>
                {maintenanceHistory.map((item, index) => (
                  <tr key={index} className="border-b border-[#0F214A]/10 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 text-[#0F214A]">{item.date}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-lg ${
                        item.type === '정기점검' 
                          ? 'bg-blue-100 text-blue-700' 
                          : item.type === '청소'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-orange-100 text-orange-700'
                      }`} style={{ fontSize: '16px', fontWeight: '600' }}>
                        {item.type}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-[#0F214A]">{item.detail}</td>
                    <td className="py-4 px-4 text-center">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg" style={{ fontSize: '16px', fontWeight: '600' }}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 관리 항목 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#0F214A]/10 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-[#0F214A]" />
              </div>
              <h3 className="text-[#0F214A]">정기 점검 항목</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[#0F214A]/70">
                <span className="text-[#FF6B3D] mt-1">•</span>
                <span>태양광 패널 상태 확인</span>
              </li>
              <li className="flex items-start gap-3 text-[#0F214A]/70">
                <span className="text-[#FF6B3D] mt-1">•</span>
                <span>인버터 동작 점검</span>
              </li>
              <li className="flex items-start gap-3 text-[#0F214A]/70">
                <span className="text-[#FF6B3D] mt-1">•</span>
                <span>전기 연결부 이상 유무 확인</span>
              </li>
              <li className="flex items-start gap-3 text-[#0F214A]/70">
                <span className="text-[#FF6B3D] mt-1">•</span>
                <span>모니터링 시스템 확인</span>
              </li>
              <li className="flex items-start gap-3 text-[#0F214A]/70">
                <span className="text-[#FF6B3D] mt-1">•</span>
                <span>안전설비 점검</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FF6B3D]/10 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#FF6B3D]" />
              </div>
              <h3 className="text-[#0F214A]">안전 관리 항목</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[#0F214A]/70">
                <span className="text-[#FF6B3D] mt-1">•</span>
                <span>화재 안전설비 점검</span>
              </li>
              <li className="flex items-start gap-3 text-[#0F214A]/70">
                <span className="text-[#FF6B3D] mt-1">•</span>
                <span>낙뢰 방지 시스템 확인</span>
              </li>
              <li className="flex items-start gap-3 text-[#0F214A]/70">
                <span className="text-[#FF6B3D] mt-1">•</span>
                <span>접지 시스템 점검</span>
              </li>
              <li className="flex items-start gap-3 text-[#0F214A]/70">
                <span className="text-[#FF6B3D] mt-1">•</span>
                <span>구조물 안전성 확인</span>
              </li>
              <li className="flex items-start gap-3 text-[#0F214A]/70">
                <span className="text-[#FF6B3D] mt-1">•</span>
                <span>보험 갱신 및 관리</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 안내사항 */}
        <div className="bg-[#0F214A] rounded-2xl p-8 text-white">
          <h3 className="text-white mb-4" style={{ fontSize: '22px', fontWeight: '600' }}>
            관리운영 보고서 안내
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-[#FF6B3D] mt-1">•</span>
              <span>월별 보고서는 매월 5일에 자동으로 생성됩니다.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FF6B3D] mt-1">•</span>
              <span>정기점검은 분기별로 실시되며, 결과는 보고서에 포함됩니다.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FF6B3D] mt-1">•</span>
              <span>긴급 보수가 필요한 경우 즉시 연락드립니다.</span>
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