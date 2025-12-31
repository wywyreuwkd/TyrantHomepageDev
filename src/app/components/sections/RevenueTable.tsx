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

export const revenueData_bareLand: RevenueData[] = [
  { year: 1, perkw: '32', peryear: '32,000', permonth: '2,667', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 2, perkw: '32', peryear: '32,000', permonth: '2,667', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 3, perkw: '32', peryear: '32,000', permonth: '2,667', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 4, perkw: '32', peryear: '32,000', permonth: '2,667', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 5, perkw: '32', peryear: '32,000', permonth: '2,667', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 6, perkw: '40', peryear: '40,000', permonth: '3,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 7, perkw: '40', peryear: '40,000', permonth: '3,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 8, perkw: '40', peryear: '40,000', permonth: '3,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 9, perkw: '40', peryear: '40,000', permonth: '3,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 10, perkw: '40', peryear: '40,000', permonth: '3,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 11, perkw: '40', peryear: '40,000', permonth: '3,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 12, perkw: '40', peryear: '40,000', permonth: '3,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 13, perkw: '40', peryear: '40,000', permonth: '3,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 14, perkw: '40', peryear: '40,000', permonth: '3,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 15, perkw: '40', peryear: '40,000', permonth: '3,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 16, perkw: '40', peryear: '40,000', permonth: '3,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 17, perkw: '80', peryear: '80,000', permonth: '6,667', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 18, perkw: '80', peryear: '80,000', permonth: '6,667', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 19, perkw: '80', peryear: '80,000', permonth: '6,667', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 20, perkw: '80', peryear: '80,000', permonth: '6,667', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 21, perkw: '226', peryear: '226,371', permonth: '18,864', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 22, perkw: '226', peryear: '225,788', permonth: '18,816', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 23, perkw: '225', peryear: '225,206', permonth: '18,767', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 24, perkw: '225', peryear: '224,626', permonth: '18,719', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 25, perkw: '224', peryear: '224,048', permonth: '18,671', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 26, perkw: '223', peryear: '223,472', permonth: '18,623', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 27, perkw: '223', peryear: '222,897', permonth: '18,575', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 28, perkw: '222', peryear: '222,324', permonth: '18,527', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 29, perkw: '222', peryear: '221,753', permonth: '18,479', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 30, perkw: '221', peryear: '221,183', permonth: '18,432', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: '계', perkw: '3,158', peryear: '3,157,668', permonth: '', bgColor: 'bg-white/40', textColor: 'color-white' }  
]

export const revenueData_forestLand: RevenueData[] = [
  { year: 1, perkw: '28', peryear: '28,000', permonth: '2,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 2, perkw: '28', peryear: '28,000', permonth: '2,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 3, perkw: '28', peryear: '28,000', permonth: '2,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 4, perkw: '28', peryear: '28,000', permonth: '2,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 5, perkw: '28', peryear: '28,000', permonth: '2,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 6, perkw: '28', peryear: '28,000', permonth: '2,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 7, perkw: '28', peryear: '28,000', permonth: '2,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 8, perkw: '28', peryear: '28,000', permonth: '2,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 9, perkw: '28', peryear: '28,000', permonth: '2,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 10, perkw: '28', peryear: '28,000', permonth: '2,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 11, perkw: '28', peryear: '28,000', permonth: '2,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 12, perkw: '28', peryear: '28,000', permonth: '2,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 13, perkw: '28', peryear: '28,000', permonth: '2,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 14, perkw: '28', peryear: '28,000', permonth: '2,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 15, perkw: '28', peryear: '28,000', permonth: '2,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 16, perkw: '28', peryear: '28,000', permonth: '2,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 17, perkw: '56', peryear: '56,000', permonth: '4,667', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 18, perkw: '56', peryear: '56,000', permonth: '4,667', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 19, perkw: '56', peryear: '56,000', permonth: '4,667', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 20, perkw: '56', peryear: '56,000', permonth: '4,667', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 21, perkw: '210', peryear: '210,034', permonth: '17,503', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 22, perkw: '209', peryear: '209,499', permonth: '17,458', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 23, perkw: '209', peryear: '208,967', permonth: '17,414', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 24, perkw: '208', peryear: '208,435', permonth: '17,370', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 25, perkw: '208', peryear: '207,906', permonth: '17,325', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 26, perkw: '207', peryear: '207,378', permonth: '17,281', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 27, perkw: '207', peryear: '206,851', permonth: '17,238', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 28, perkw: '206', peryear: '206,327', permonth: '17,194', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 29, perkw: '206', peryear: '205,803', permonth: '17,150', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 30, perkw: '205', peryear: '205,282', permonth: '17,107', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: '계', perkw: '2,748', peryear: '2,748,482', permonth: '', bgColor: 'bg-white/40', textColor: 'color-white' },
]

export const revenueData_parkingPublic: RevenueData[] = [
  { year: 1, perkw: '52', peryear: '52,000', permonth: '4,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 2, perkw: '52', peryear: '52,000', permonth: '4,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 3, perkw: '51', peryear: '51,000', permonth: '4,250', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 4, perkw: '51', peryear: '51,000', permonth: '4,250', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 5, perkw: '51', peryear: '51,000', permonth: '4,250', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 6, perkw: '50', peryear: '50,000', permonth: '4,167', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 7, perkw: '50', peryear: '50,000', permonth: '4,167', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 8, perkw: '50', peryear: '50,000', permonth: '4,167', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 9, perkw: '50', peryear: '50,000', permonth: '4,167', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 10, perkw: '49', peryear: '49,000', permonth: '4,083', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 11, perkw: '49', peryear: '49,000', permonth: '4,083', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 12, perkw: '49', peryear: '49,000', permonth: '4,083', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 13, perkw: '49', peryear: '49,000', permonth: '4,083', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 14, perkw: '48', peryear: '48,000', permonth: '4,000', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 15, perkw: '48', peryear: '48,000', permonth: '4,000', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 16, perkw: '94', peryear: '94,000', permonth: '7,833', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 17, perkw: '94', peryear: '94,000', permonth: '7,833', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 18, perkw: '94', peryear: '94,000', permonth: '7,833', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 19, perkw: '94', peryear: '94,000', permonth: '7,833', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 20, perkw: '93', peryear: '93,000', permonth: '7,750', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 21, perkw: '224', peryear: '224,000', permonth: '18,667', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 22, perkw: '223', peryear: '223,000', permonth: '18,583', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 23, perkw: '221', peryear: '221,000', permonth: '18,417', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 24, perkw: '220', peryear: '220,000', permonth: '18,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 25, perkw: '219', peryear: '219,000', permonth: '18,250', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 26, perkw: '217', peryear: '217,000', permonth: '18,083', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 27, perkw: '216', peryear: '216,000', permonth: '18,000', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 28, perkw: '215', peryear: '215,000', permonth: '17,917', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 29, perkw: '213', peryear: '213,000', permonth: '17,750', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 30, perkw: '212', peryear: '212,000', permonth: '17,667', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: '계', perkw: '3,398', peryear: '3,398,000', permonth: '', bgColor: 'bg-white/40', textColor: 'color-white' },
]

export const revenueData_parkingPrivate: RevenueData[] = [
  { year: 1, perkw: '40', peryear: '40,000', permonth: '3,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 2, perkw: '40', peryear: '40,000', permonth: '3,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 3, perkw: '40', peryear: '40,000', permonth: '3,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 4, perkw: '40', peryear: '40,000', permonth: '3,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 5, perkw: '40', peryear: '40,000', permonth: '3,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 6, perkw: '40', peryear: '40,000', permonth: '3,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 7, perkw: '40', peryear: '40,000', permonth: '3,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 8, perkw: '40', peryear: '40,000', permonth: '3,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 9, perkw: '40', peryear: '40,000', permonth: '3,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 10, perkw: '40', peryear: '40,000', permonth: '3,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 11, perkw: '40', peryear: '40,000', permonth: '3,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 12, perkw: '40', peryear: '40,000', permonth: '3,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 13, perkw: '40', peryear: '40,000', permonth: '3,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 14, perkw: '40', peryear: '40,000', permonth: '3,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 15, perkw: '40', peryear: '40,000', permonth: '3,333', bgColor: 'bg-white/90', textColor: 'color-primary-dark-5' },
  { year: 16, perkw: '246', peryear: '246,000', permonth: '20,500', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 17, perkw: '245', peryear: '245,000', permonth: '20,417', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 18, perkw: '244', peryear: '244,000', permonth: '20,333', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 19, perkw: '243', peryear: '243,000', permonth: '20,250', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 20, perkw: '243', peryear: '243,000', permonth: '20,250', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 21, perkw: '224', peryear: '224,000', permonth: '18,667', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 22, perkw: '223', peryear: '223,000', permonth: '18,583', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 23, perkw: '221', peryear: '221,000', permonth: '18,417', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 24, perkw: '220', peryear: '220,000', permonth: '18,333', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 25, perkw: '219', peryear: '219,000', permonth: '18,250', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 26, perkw: '217', peryear: '217,000', permonth: '18,083', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 27, perkw: '216', peryear: '216,000', permonth: '18,000', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 28, perkw: '215', peryear: '215,000', permonth: '17,917', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 29, perkw: '213', peryear: '213,000', permonth: '17,750', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: 30, perkw: '212', peryear: '212,000', permonth: '17,667', bgColor: 'bg-white/80', textColor: 'color-primary-dark-5' },
  { year: '계', perkw: '4,001', peryear: '4,001,000', permonth: '', bgColor: 'bg-white/40', textColor: 'color-white' },
]

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
