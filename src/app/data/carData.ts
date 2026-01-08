export interface CarListing {
  id: number;
  name: string;
  image: string;
  rentPrice: string;
  leasePrice: string;
  releaseDate: string;
  carType: string;
  fuel: string;
  displacement: string;
  fuelEfficiency: string;
}

export const carListings: CarListing[] = [
  {
    id: 1,
    name: '쉐보레 말리부 1.5 터보 LT',
    image: 'https://images.unsplash.com/photo-1652454420939-c4a80fe071c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeXVuZGFpJTIwY2FyJTIwc2hvd3Jvb218ZW58MXx8fHwxNzY3Nzc4NjkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rentPrice: '130,000',
    leasePrice: '145,000',
    releaseDate: '2025년12월',
    carType: '준중형',
    fuel: '가솔린',
    displacement: '2,497~3470cc',
    fuelEfficiency: '복합연비 8.2~10.6km/L'
  },
  {
    id: 2,
    name: '현대 에쿠스 VS380 익스클루시브',
    image: 'https://images.unsplash.com/photo-1707268229618-84641aa3c9d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWElMjBzZWRhbnxlbnwxfHx8fDE3Njc3Nzg2OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rentPrice: '150,000',
    leasePrice: '165,000',
    releaseDate: '2024년08월',
    carType: '대형',
    fuel: '가솔린',
    displacement: '3,778cc',
    fuelEfficiency: '복합연비 7.8~9.2km/L'
  },
  {
    id: 3,
    name: '현대 싸타페 가솔린 2.5T 2WD',
    image: 'https://images.unsplash.com/photo-1714348938045-0c74379cd4d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5lc2lzJTIwbHV4dXJ5JTIwY2FyfGVufDF8fHx8MTc2NzY1NzI0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    rentPrice: '290,000',
    leasePrice: '310,000',
    releaseDate: '2024년03월',
    carType: 'SUV',
    fuel: '가솔린',
    displacement: '2,497cc',
    fuelEfficiency: '복합연비 9.8~11.2km/L'
  },
  {
    id: 4,
    name: 'KG모빌리티(쌍용) 티볼리 2WD',
    image: 'https://images.unsplash.com/photo-1646844371347-e7eab6275747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGV2cm9sZXQlMjBzdXZ8ZW58MXx8fHwxNzY3Nzc4NjkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rentPrice: '106,000',
    leasePrice: '118,000',
    releaseDate: '2025년01월',
    carType: '소형SUV',
    fuel: '디젤',
    displacement: '1,597cc',
    fuelEfficiency: '복합연비 12.5~14.2km/L'
  },
  {
    id: 5,
    name: '현대 제네시스 G330 모던',
    image: 'https://images.unsplash.com/photo-1682845485707-f5029d736001?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibXclMjBzZWRhbnxlbnwxfHx8fDE3Njc3Nzg2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rentPrice: '78,000',
    leasePrice: '88,000',
    releaseDate: '2023년11월',
    carType: '중형',
    fuel: '가솔린',
    displacement: '3,342cc',
    fuelEfficiency: '복합연비 8.5~9.8km/L'
  },
  {
    id: 6,
    name: '기아 쏘렌토 디젤 2.2 2WD',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXJjZWRlcyUyMGJlbnp8ZW58MXx8fHwxNzY3Nzc4NjkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rentPrice: '98,000',
    leasePrice: '109,000',
    releaseDate: '2024년06월',
    carType: 'SUV',
    fuel: '디젤',
    displacement: '2,151cc',
    fuelEfficiency: '복합연비 11.3~13.1km/L'
  },
  {
    id: 7,
    name: '현대 벨로스터 2.0 N',
    image: 'https://images.unsplash.com/photo-1758217209786-95458c5d30a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdXYlMjB2ZWhpY2xlfGVufDF8fHx8MTc2NzcxMDQ5MHww&ixlib=rb-4.1.0&q=80&w=1080',
    rentPrice: '133,000',
    leasePrice: '148,000',
    releaseDate: '2024년09월',
    carType: '스포츠',
    fuel: '가솔린',
    displacement: '1,998cc',
    fuelEfficiency: '복합연비 10.2~11.5km/L'
  },
  {
    id: 8,
    name: '기아 쏘렌토 디젤 2WD 2.2 노블레스',
    image: 'https://images.unsplash.com/photo-1701314860844-cd2152fa9071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYWN0JTIwY2FyfGVufDF8fHx8MTc2Nzc1NzQ0OXww&ixlib=rb-4.1.0&q=80&w=1080',
    rentPrice: '135,000',
    leasePrice: '152,000',
    releaseDate: '2025년02월',
    carType: 'SUV',
    fuel: '디젤',
    displacement: '2,151cc',
    fuelEfficiency: '복합연비 11.5~13.3km/L'
  },
  {
    id: 9,
    name: '현대 그랜저 3.3 GDi 익스클루시브',
    image: 'https://images.unsplash.com/photo-1652454420939-c4a80fe071c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeXVuZGFpJTIwY2FyJTIwc2hvd3Jvb218ZW58MXx8fHwxNzY3Nzc4NjkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rentPrice: '165,000',
    leasePrice: '182,000',
    releaseDate: '2024년05월',
    carType: '대형',
    fuel: '가솔린',
    displacement: '3,342cc',
    fuelEfficiency: '복합연비 8.9~10.2km/L'
  },
  {
    id: 10,
    name: '기아 K5 2.0 가솔린 터보 시그니처',
    image: 'https://images.unsplash.com/photo-1707268229618-84641aa3c9d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWElMjBzZWRhbnxlbnwxfHx8fDE3Njc3Nzg2OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rentPrice: '142,000',
    leasePrice: '158,000',
    releaseDate: '2024년11월',
    carType: '중형',
    fuel: '가솔린',
    displacement: '1,999cc',
    fuelEfficiency: '복합연비 10.1~11.8km/L'
  },
  {
    id: 11,
    name: '현대 아이오닉5 롱레인지 2WD',
    image: 'https://images.unsplash.com/photo-1714348938045-0c74379cd4d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5lc2lzJTIwbHV4dXJ5JTIwY2FyfGVufDF8fHx8MTc2NzY1NzI0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    rentPrice: '195,000',
    leasePrice: '215,000',
    releaseDate: '2025년01월',
    carType: '전기SUV',
    fuel: '전기',
    displacement: '전기모터',
    fuelEfficiency: '1회 충전 주행거리 484km'
  },
  {
    id: 12,
    name: '기아 카니발 11인승 시그니처',
    image: 'https://images.unsplash.com/photo-1646844371347-e7eab6275747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGV2cm9sZXQlMjBzdXZ8ZW58MXx8fHwxNzY3Nzc4NjkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rentPrice: '172,000',
    leasePrice: '189,000',
    releaseDate: '2024년07월',
    carType: 'RV',
    fuel: '디젤',
    displacement: '2,199cc',
    fuelEfficiency: '복합연비 10.5~12.1km/L'
  },
  {
    id: 13,
    name: '제네시스 GV80 3.5T AWD 스포츠 프레스티지',
    image: 'https://images.unsplash.com/photo-1682845485707-f5029d736001?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibXclMjBzZWRhbnxlbnwxfHx8fDE3Njc3Nzg2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rentPrice: '425,000',
    leasePrice: '468,000',
    releaseDate: '2024년10월',
    carType: '대형SUV',
    fuel: '가솔린',
    displacement: '3,470cc',
    fuelEfficiency: '복합연비 7.9~8.5km/L'
  },
  {
    id: 14,
    name: '기아 스포티지 1.6 하이브리드 2WD',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXJjZWRlcyUyMGJlbnp8ZW58MXx8fHwxNzY3Nzc4NjkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rentPrice: '128,000',
    leasePrice: '141,000',
    releaseDate: '2024년12월',
    carType: 'SUV',
    fuel: '하이브리드',
    displacement: '1,598cc',
    fuelEfficiency: '복합연비 15.2~16.8km/L'
  },
  {
    id: 15,
    name: '현대 코나 1.6 터보 하이브리드',
    image: 'https://images.unsplash.com/photo-1758217209786-95458c5d30a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdXYlMjB2ZWhpY2xlfGVufDF8fHx8MTc2NzcxMDQ5MHww&ixlib=rb-4.1.0&q=80&w=1080',
    rentPrice: '118,000',
    leasePrice: '130,000',
    releaseDate: '2025년03월',
    carType: '소형SUV',
    fuel: '하이브리드',
    displacement: '1,580cc',
    fuelEfficiency: '복합연비 17.3~18.2km/L'
  },
  {
    id: 16,
    name: '쉐보레 트레일블레이저 2.0 터보 디젤',
    image: 'https://images.unsplash.com/photo-1701314860844-cd2152fa9071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYWN0JTIwY2FyfGVufDF8fHx8MTc2Nzc1NzQ0OXww&ixlib=rb-4.1.0&q=80&w=1080',
    rentPrice: '138,000',
    leasePrice: '152,000',
    releaseDate: '2024년04월',
    carType: 'SUV',
    fuel: '디젤',
    displacement: '1,995cc',
    fuelEfficiency: '복합연비 12.8~14.1km/L'
  },
  {
    id: 17,
    name: '현대 쏘나타 2.0 가솔린 터보 스마트',
    image: 'https://images.unsplash.com/photo-1652454420939-c4a80fe071c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeXVuZGFpJTIwY2FyJTIwc2hvd3Jvb218ZW58MXx8fHwxNzY3Nzc4NjkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rentPrice: '125,000',
    leasePrice: '138,000',
    releaseDate: '2024년09월',
    carType: '중형',
    fuel: '가솔린',
    displacement: '1,999cc',
    fuelEfficiency: '복합연비 10.5~11.9km/L'
  },
  {
    id: 18,
    name: '기아 EV6 롱레인지 2WD',
    image: 'https://images.unsplash.com/photo-1707268229618-84641aa3c9d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWElMjBzZWRhbnxlbnwxfHx8fDE3Njc3Nzg2OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rentPrice: '188,000',
    leasePrice: '207,000',
    releaseDate: '2025년02월',
    carType: '전기SUV',
    fuel: '전기',
    displacement: '전기모터',
    fuelEfficiency: '1회 충전 주행거리 528km'
  },
  {
    id: 19,
    name: '기아 모닝 1.0 가솔린 디럭스',
    image: 'https://images.unsplash.com/photo-1714348938045-0c74379cd4d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5lc2lzJTIwbHV4dXJ5JTIwY2FyfGVufDF8fHx8MTc2NzY1NzI0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    rentPrice: '52,000',
    leasePrice: '58,000',
    releaseDate: '2024년01월',
    carType: '경차',
    fuel: '가솔린',
    displacement: '998cc',
    fuelEfficiency: '복합연비 13.8~15.2km/L'
  },
  {
    id: 20,
    name: '현대 팰리세이드 3.8 GDI 7인승 캘리그래피',
    image: 'https://images.unsplash.com/photo-1646844371347-e7eab6275747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGV2cm9sZXQlMjBzdXZ8ZW58MXx8fHwxNzY3Nzc4NjkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rentPrice: '298,000',
    leasePrice: '328,000',
    releaseDate: '2024년06월',
    carType: '대형SUV',
    fuel: '가솔린',
    displacement: '3,778cc',
    fuelEfficiency: '복합연비 8.1~9.3km/L'
  },
  {
    id: 21,
    name: '제네시스 G90 3.3T AWD 롱휠베이스',
    image: 'https://images.unsplash.com/photo-1682845485707-f5029d736001?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibXclMjBzZWRhbnxlbnwxfHx8fDE3Njc3Nzg2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rentPrice: '528,000',
    leasePrice: '581,000',
    releaseDate: '2024년08월',
    carType: '대형',
    fuel: '가솔린',
    displacement: '3,342cc',
    fuelEfficiency: '복합연비 7.5~8.8km/L'
  },
];
