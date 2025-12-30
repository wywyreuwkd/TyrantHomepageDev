// 데이터 타입 정의
export interface RevenueData {
  year: number | string;
  perkw: number | string;
  peryear: number | string;
  permonth: number | string;
  bgColor?: string;
  textColor?: string;
  isTotal?: boolean;
}

export const revenueData_roof: RevenueData[] = [
  { year: 0, perkw: '-', peryear: '-', permonth: '-', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 1, perkw: '50', peryear: '50,000', permonth: '4,167', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 2, perkw: '50', peryear: '50,000', permonth: '4,167', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 3, perkw: '50', peryear: '50,000', permonth: '4,167', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 4, perkw: '50', peryear: '50,000', permonth: '4,167', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 5, perkw: '50', peryear: '50,000', permonth: '4,167', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 6, perkw: '50', peryear: '50,000', permonth: '4,167', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 7, perkw: '52', peryear: '52,000', permonth: '4,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 8, perkw: '56', peryear: '56,000', permonth: '4,667', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 9, perkw: '60', peryear: '60,000', permonth: '5,000', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 10, perkw: '63', peryear: '63,000', permonth: '5,250', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 11, perkw: '110', peryear: '110,000', permonth: '9,167', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 12, perkw: '110', peryear: '110,000', permonth: '9,167', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 13, perkw: '110', peryear: '110,000', permonth: '9,167', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 14, perkw: '110', peryear: '110,000', permonth: '9,167', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 15, perkw: '130', peryear: '130,000', permonth: '10,833', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 16, perkw: '296', peryear: '296,000', permonth: '24,667', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 17, perkw: '295', peryear: '295,000', permonth: '24,583', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 18, perkw: '294', peryear: '294,000', permonth: '24,500', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 19, perkw: '293', peryear: '293,000', permonth: '24,417', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 20, perkw: '293', peryear: '293,000', permonth: '24,417', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: '계', perkw: '2,572', peryear: '2,572,000', permonth: '', bgColor: 'bg-white/40', textColor: 'color-white' },
];

export const revenueData_roof_prepaid: RevenueData[] = [
  { year: 0, perkw: '200', peryear: '200,000', permonth: '-', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 1, perkw: '-', peryear: '-', permonth: '-', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 2, perkw: '-', peryear: '-', permonth: '-', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 3, perkw: '-', peryear: '-', permonth: '-', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 4, perkw: '-', peryear: '-', permonth: '-', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 5, perkw: '-', peryear: '-', permonth: '-', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 6, perkw: '30', peryear: '30,000', permonth: '2,500', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 7, perkw: '31', peryear: '31,000', permonth: '2,583', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 8, perkw: '34', peryear: '34,000', permonth: '2,833', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 9, perkw: '36', peryear: '36,000', permonth: '3,000', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 10, perkw: '38', peryear: '38,000', permonth: '3,167', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 11, perkw: '66', peryear: '66,000', permonth: '5,500', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 12, perkw: '66', peryear: '66,000', permonth: '5,500', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 13, perkw: '66', peryear: '66,000', permonth: '5,500', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 14, perkw: '66', peryear: '66,000', permonth: '5,500', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 15, perkw: '78', peryear: '78,000', permonth: '6,500', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 16, perkw: '296', peryear: '296,000', permonth: '24,667', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 17, perkw: '295', peryear: '295,000', permonth: '24,583', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 18, perkw: '294', peryear: '294,000', permonth: '24,500', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 19, perkw: '293', peryear: '293,000', permonth: '24,417', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 20, perkw: '293', peryear: '293,000', permonth: '24,417', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: '계', perkw: '2,182', peryear: '2,182,000', permonth: '', bgColor: 'bg-white/40', textColor: 'color-white' },
];

// 컬럼 정의
const columns = [
  { key: 'year', label: '연차', width: 'w-[19%]' },
  { key: 'perkw', label: '지급금액/kW', width: 'w-[27%]' },
  { key: 'peryear', label: '연 지급금액', width: 'w-[27%]' },
  { key: 'permonth', label: '매월 지급금액', width: 'w-[27%]' },
]

interface RevenueTableProps {
  data?: RevenueData[];
}

export function RevenueTable({ data = revenueData_roof }: RevenueTableProps) {
  return (
    <>
      <table className="w-full text-center border-collapse text-sm table-fixed">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th
                key={col.key}
                className={`
                  color-white font-bold py-2 px-2 bg-primary-dark-5
                  ${col.width ? `${col.width}` : ''}
                  `}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {/* 연차 */}
              <td className={`py-2 px-2 ${row.bgColor} ${row.textColor}`}>
                {row.year}
              </td>

              {/* 지급금액/kW */}
              <td className={`py-2 px-2 ${row.bgColor} ${row.textColor}`}>
                {row.perkw}
              </td>

              {/* 연 지급금액 */}
              <td className={`py-2 px-2 ${row.bgColor} ${row.textColor}`}>
                {row.peryear}
              </td>

              {/* 매월 지급금액 */}
              <td className={`py-2 px-2 ${row.bgColor} ${row.textColor}`}>
                {row.permonth}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
