export interface ProjectData {
  id: number;
  date: string;
  salesCompany: string;
  constructionCompany: string;
  status: string;
  capacity: string;
  location: string;
  installationType: string;
  projectName: string;
  powerPlantName: string;
}

const statuses = ['신규접수', '시공사\n배정', '실사', '발전사업허가\n접수요청', '운영'];
const types = ['지붕', '지상', '수상'];

export const projects: ProjectData[] = [
  {
    id: 1,
    date: "2026-01-01",
    salesCompany: "(주)한양에너지",
    constructionCompany: "(주)그린에너지",
    status: statuses[0],
    capacity: "120",
    location: "강원특별자치도 춘천시",
    installationType: types[0],
    projectName: "강원특별자치도 춘천시 한림대학길 1 한림대학교",
    powerPlantName: "강원특별자치도 춘천시 한림대학길 1 한림대학교 태양광발전소"
  },
  {
    id: 2,
    date: "2026-01-01",
    salesCompany: "(주)가온SNC",
    constructionCompany: "주식회사 자연에너지",
    status: statuses[1],
    capacity: "510",
    location: "경기도 양주시",
    installationType: types[1],
    projectName: "경기도 양주시 회암동 산 12-3",
    powerPlantName: "경기도 양주시 회암동 산 12-3 태양광발전소"
  },
  {
    id: 3,
    date: "2026-01-01",
    salesCompany: "주식회사 다인스",
    constructionCompany: "주식회사 다인스",
    status: statuses[2],
    capacity: "510",
    location: "경기도 양주시",
    installationType: types[2],
    projectName: "경기도 포천시 소흘읍 이동교리 705 외 3필지",
    powerPlantName: "경기도 포천시 소흘읍 이동교리 705 외 3필지 태양광발전소"
  },
  {
    id: 4,
    date: "2026-01-01",
    salesCompany: "(주)썬파워",
    constructionCompany: "주식회사 다인스",
    status: statuses[3],
    capacity: "510",
    location: "경기도 양주시",
    installationType: types[3],
    projectName: "충북 충주시 용탄농공1길 11",
    powerPlantName: "충북 충주시 용탄농공1길 11 태양광발전소"
  },
  {
    id: 5,
    date: "2026-01-01",
    salesCompany: "(주)태양광산업",
    constructionCompany: "주식회사 자연에너지",
    status: statuses[4],
    capacity: "510",
    location: "경기도 양주시",
    installationType: types[4],
    projectName: "충남 천안시 동남구 목천읍 삼성리 308-2",
    powerPlantName: "충남 천안시 동남구 목천읍 삼성리 308-2 태양광발전소"
  },
  {
    id: 6,
    date: "2026-01-01",
    salesCompany: "(주)한양에너지",
    constructionCompany: "(주)그린에너지",
    status: statuses[0],
    capacity: "120",
    location: "강원특별자치도 춘천시",
    installationType: types[0],
    projectName: "강원특별자치도 춘천시 한림대학길 1 한림대학교",
    powerPlantName: "강원특별자치도 춘천시 한림대학길 1 한림대학교 태양광발전소"
  },
  {
    id: 7,
    date: "2026-01-01",
    salesCompany: "(주)가온SNC",
    constructionCompany: "주식회사 자연에너지",
    status: statuses[1],
    capacity: "510",
    location: "경기도 양주시",
    installationType: types[1],
    projectName: "경기도 양주시 회암동 산 12-3",
    powerPlantName: "경기도 양주시 회암동 산 12-3 태양광발전소"
  },
  {
    id: 8,
    date: "2026-01-01",
    salesCompany: "주식회사 다인스",
    constructionCompany: "주식회사 다인스",
    status: statuses[2],
    capacity: "510",
    location: "경기도 양주시",
    installationType: types[2],
    projectName: "경기도 포천시 소흘읍 이동교리 705 외 3필지",
    powerPlantName: "경기도 포천시 소흘읍 이동교리 705 외 3필지 태양광발전소"
  },
  {
    id: 9,
    date: "2026-01-01",
    salesCompany: "(주)썬파워",
    constructionCompany: "주식회사 다인스",
    status: statuses[3],
    capacity: "510",
    location: "경기도 양주시",
    installationType: types[3],
    projectName: "충북 충주시 용탄농공1길 11",
    powerPlantName: "충북 충주시 용탄농공1길 11 태양광발전소"
  },
  {
    id: 10,
    date: "2026-01-01",
    salesCompany: "(주)태양광산업",
    constructionCompany: "주식회사 자연에너지",
    status: statuses[4],
    capacity: "510",
    location: "경기도 양주시",
    installationType: types[4],
    projectName: "충남 천안시 동남구 목천읍 삼성리 308-2",
    powerPlantName: "충남 천안시 동남구 목천읍 삼성리 308-2 태양광발전소"
  },
  {
    id: 11,
    date: "2026-01-01",
    salesCompany: "(주)한양에너지",
    constructionCompany: "(주)그린에너지",
    status: statuses[0],
    capacity: "120",
    location: "강원특별자치도 춘천시",
    installationType: types[0],
    projectName: "강원특별자치도 춘천시 한림대학길 1 한림대학교",
    powerPlantName: "강원특별자치도 춘천시 한림대학길 1 한림대학교 태양광발전소"
  },
  {
    id: 12,
    date: "2026-01-01",
    salesCompany: "(주)가온SNC",
    constructionCompany: "주식회사 자연에너지",
    status: statuses[1],
    capacity: "510",
    location: "경기도 양주시",
    installationType: types[1],
    projectName: "경기도 양주시 회암동 산 12-3",
    powerPlantName: "경기도 양주시 회암동 산 12-3 태양광발전소"
  },
  {
    id: 13,
    date: "2026-01-01",
    salesCompany: "주식회사 다인스",
    constructionCompany: "주식회사 다인스",
    status: statuses[2],
    capacity: "510",
    location: "경기도 양주시",
    installationType: types[2],
    projectName: "경기도 포천시 소흘읍 이동교리 705 외 3필지",
    powerPlantName: "경기도 포천시 소흘읍 이동교리 705 외 3필지 태양광발전소"
  },
  {
    id: 14,
    date: "2026-01-01",
    salesCompany: "(주)썬파워",
    constructionCompany: "주식회사 다인스",
    status: statuses[3],
    capacity: "510",
    location: "경기도 양주시",
    installationType: types[3],
    projectName: "충북 충주시 용탄농공1길 11",
    powerPlantName: "충북 충주시 용탄농공1길 11 태양광발전소"
  },
  {
    id: 15,
    date: "2026-01-01",
    salesCompany: "(주)태양광산업",
    constructionCompany: "주식회사 자연에너지",
    status: statuses[4],
    capacity: "510",
    location: "경기도 양주시",
    installationType: types[4],
    projectName: "충남 천안시 동남구 목천읍 삼성리 308-2",
    powerPlantName: "충남 천안시 동남구 목천읍 삼성리 308-2 태양광발전소"
  },
]

// const companies = [
//   '(주)한양에너지', 
//   '(주)가온SNC', 
//   '주식회사 자연에너지', 
//   '주식회사 다인스', 
//   '(주)썬파워', 
//   '(주)그린에너지', 
//   '(주)태양광산업',
//   '(주)한국태양광',
//   '주식회사 에코솔라',
//   '(주)신재생에너지'
// ];



// const locations = [
//   '경기 화성시 서신면 전곡리',
//   '충북 충주시 중앙탑면 미륵대로',
//   '충남 천안시 동남구 목천읍 삼성리',
//   '대전 유성구 성북동',
//   '경기 파주시 오도동',
//   '경기 용인시 처인구',
//   '강원 원주시 문막읍',
//   '전북 전주시 덕진구',
//   '경남 김해시 진영읍',
//   '충남 아산시 탕정면',
//   '경북 경주시 외동읍',
//   '전남 나주시 봉황면',
//   '경기 이천시 백사면',
//   '강원 홍천군 내면',
//   '충북 제천시 봉양읍',
//   '경남 사천시 축동면',
//   '전북 김제시 백구면',
//   '경기 안성시 죽산면',
//   '충남 보령시 청라면',
//   '강원 평창군 대관령면'
// ];

// const projectNames = [
//   '강원특별자치도 춘천시 한림대학길 1 한림대학교',
//   '경기도 양주시 회암동 산 12-3',
//   '경기도 포천시 소흘읍 이동교리 705 외 3필지',
//   '충북 충주시 용탄농공1길 11',
//   '충남 천안시 동남구 목천읍 삼성리 308-2',
//   '대전 유성구 성북동 307',
//   '대전 유성구 성북동 315-1',
//   '경기 파주시 오도동 37-42',
//   '경기 화성시 팔탄면 서근리 103-29',
//   '경기 파주시 월롱면 도내리 273-10',
//   '경북 경주시 외동읍 석계리 1379-1',
//   '전남 나주시 봉황면 학산리 456-7',
//   '경기 이천시 백사면 송말리 89-12',
//   '강원 홍천군 내면 율전리 234',
//   '충북 제천시 봉양읍 구곡리 567-8',
//   '경남 사천시 축동면 가산리 123-45',
//   '전북 김제시 백구면 월봉리 678-9',
//   '경기 안성시 죽산면 칠곡리 345-6',
//   '충남 보령시 청라면 의평리 890-1',
//   '강원 평창군 대관령면 횡계리 234-56'
// ];

// export const generateProjects = (): ProjectData[] => {
//   const projects: ProjectData[] = [];
  
//   for (let i = 1; i <= 100; i++) {
//     const randomCompany = companies[Math.floor(Math.random() * companies.length)];
//     const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
//     const randomType = types[Math.floor(Math.random() * types.length)];
//     const randomLocation = locations[Math.floor(Math.random() * locations.length)];
//     const hasConstruction = Math.random() > 0.4; // 60% 확률로 시공사 있음
    
//     const year = 2024;
//     const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
//     const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
    
//     // 용량은 50kW ~ 550kW 사이의 값
//     const capacity = (Math.random() * 500 + 50).toFixed(2);
    
//     projects.push({
//       id: i,
//       date: `${year}-${month}-${day}`,
//       salesCompany: randomCompany,
//       constructionCompany: hasConstruction ? companies[Math.floor(Math.random() * companies.length)] : '',
//       status: randomStatus,
//       capacity: capacity,
//       location: randomLocation + ' ' + (Math.floor(Math.random() * 999) + 100) + '번지',
//       installationType: randomType,
//       projectName: projectNames[(i - 1) % projectNames.length],
//       powerPlantName: `${randomLocation.split(' ')[randomLocation.split(' ').length - 1]} ${Math.floor(Math.random() * 900) + 100}번지 태양광발전소`
//     });
//   }
  
//   return projects;
// };

// // Status dot color mapping
// export const getStatusDotColor = (status: string): string => {
//   const statusColors: Record<string, string> = {
//     '신규접수': '#243c84',
//     '발전사업허가 접수요청': '#7C3AED',
//     '시공사 배정': '#9AA3AF',
//     '실사': '#B7791F',
//     '운영': '#1F7A5A'
//   };

//   return statusColors[status] || statusColors['신규접수'];
// };
