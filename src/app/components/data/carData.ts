import CarImage1 from "@public/car/car_image_1.jpeg";
import CarImage2 from "@public/car/car_image_2.jpeg";
import CarImage3 from "@public/car/car_image_3.jpeg";
import CarImage4 from "@public/car/car_image_4.jpeg";
import CarImage5 from "@public/car/car_image_5.jpeg";
import CarImage6 from "@public/car/car_image_6.jpeg";
import CarImage7 from "@public/car/car_image_7.jpeg";
import CarImage8 from "@public/car/car_image_8.jpeg";

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
    image: CarImage1.src,
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
    image: CarImage2.src,
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
    image: CarImage3.src,
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
    image: CarImage4.src,
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
    image: CarImage5.src,
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
    image: CarImage6.src,
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
    image: CarImage7.src,
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
    image: CarImage8.src,
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
    image: CarImage1.src,
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
    image: CarImage2.src,
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
    image: CarImage3.src,
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
    image: CarImage4.src,
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
    image: CarImage5.src,
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
    image: CarImage6.src,
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
    image: CarImage7.src,
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
    image: CarImage8.src,
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
    image: CarImage1.src,
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
    image: CarImage2.src,
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
    image: CarImage3.src,
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
    image: CarImage4.src,
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
    image: CarImage5.src,
    rentPrice: '528,000',
    leasePrice: '581,000',
    releaseDate: '2024년08월',
    carType: '대형',
    fuel: '가솔린',
    displacement: '3,342cc',
    fuelEfficiency: '복합연비 7.5~8.8km/L'
  },
];
