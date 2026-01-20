"use client"

import { useState, useEffect } from "react";
import { X, Briefcase, Mail, Phone, Eye, ArrowLeft } from "lucide-react";

import chiefCho from "@public/profile/profile_chief_cho_2.png";
import choijaehwang from "@public/profile/profile_choijaehwang.png";
import choijaehwang2 from "@public/profile/profile_choijaehwang2.png";
import hongkeumpyo from "@public/profile/profile_hongkeumpyo.png";
import kimkilhong from "@public/profile/profile_kimkilhong.png";
import kimtaehoon from "@public/profile/profile_kimtaehoon.png";
import parkchanghoon from "@public/profile/profile_parkchanghoon.png";
import yoondoohwan from "@public/profile/profile_yoondoohwan.png";
import leekyungkun from "@public/profile/profile_leekyungkun.png";
import bangyousung from "@public/profile/profile_bangyousung.png";
import kongyunbae from "@public/profile/profile_kongyunbae.png";
import parkhyungjun from "@public/profile/profile_parkhyungjun.png";
import jungyongook from "@public/profile/profile_jungyongook.png";
import shinjungcheol from "@public/profile/profile_shinjungcheol.png";
import leenaun from "@public/profile/profile_leenaun.png";
import limincheol from "@public/profile/profile_limincheol.png";


import profile_temp1 from "@public/profile/profile_temp1.png";
import profile_temp2 from "@public/profile/profile_temp2.png";
import profile_temp3 from "@public/profile/profile_temp3.png";
import profile_temp4 from "@public/profile/profile_temp4.png";
import profile_temp5 from "@public/profile/profile_temp5.png";
import profile_temp6 from "@public/profile/profile_temp6.png";
import profile_temp7 from "@public/profile/profile_temp7.png";
import profile_temp8 from "@public/profile/profile_temp8.png";
import profile_temp9 from "@public/profile/profile_temp9.png";
import profile_temp10 from "@public/profile/profile_temp10.png";

interface TeamMember {
  id: number;
  name: string;
  education?: string[];
  position: string;
  company?: string;
  photo?: string;
  bio?: string;
  email?: string;
  phone?: string;
  badge?: string;
  organization?: string;
  careers?: string[];
  capabilities?: string[];
  projects?: string[];
  comments?: string[];
  portfolio?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "조경석",
    position: "타이런트그룹 회장",
    company: "타이런트에이치 대표이사",
    photo: chiefCho.src,
    bio: "타이런트그룹 회장 및 타이런트에이치 대표이사로서 회사의 전반적인 경영을 총괄하고 있습니다.",
    email: "solaro@tyrant.co.kr",
    badge: "회장/대표이사",
    organization: "TYRANT Group",
    careers: [
      "현) 타이런트 그룹 회장",
      "현) 타이런트에이치 대표이사",
      "이천전기",
      "일진전기 부사장",
      "영인전기 고문",
      "POSCO 인재개발원 강사",
      "한국발전교육원 강사",
    ],
    capabilities: [
      "기계공학 전공",
      "기계 특급 기술자",
      "해외산 펌프의 국내 설계 및 국산화를 국내 최초로 주도하여, 기술 검증(제휴)-설계-제작 성공",
    ],
    comments: [
      "기술은 결국 현장에서 증명되어야 하며, 기업의 경쟁력은 사람과 기술을 얼마나 오래, 그리고 제대로 축적하느냐에 달려 있습니다.",
      "타이런트 그룹은 기계·전력·에너지 산업 전반에서 축적된 기술 경험을 바탕으로, 단기적인 성과가 아닌 지속 가능한 기술 경쟁력과 책임 있는 경영을 지향해 왔습니다.",
      "저는 기계공학 엔지니어이자 기술자로서, 설계와 제작, 검증을 직접 경험해 온 현장의 기준을 그룹의 모든 의사결정의 출발점으로 삼고 있습니다.",
      "타이런트 그룹은 앞으로도 기술의 본질을 이해하는 기업으로서 사람을 키우고, 기술을 축적하며, 신뢰받는 산업 파트너로 오래 남는 그룹이 되겠습니다.",
    ]
  },
  {
    id: 2,
    name: "정용욱",
    position: "타이런트씨 대표이사",
    company: "",
    photo: jungyongook.src,
    bio: "타이런트씨 대표이사로서 당사 태양광상품의 금융조달 전반에 대한 전략 수립 및 실행을 주도하고 있으며 태양광사업성분석(FS), 기술실사 등 태양광과 관련된 전반적인 자문을 수행합니다.",
    email: "solaro@tyrant.co.kr",
    badge: "대표이사",
    organization: "TYRANT-C Co., Ltd.",
    careers: [
      "현) 타이런트씨 대표이사",
      "현) (주)제이엔제이금융자문 대표이사",
      "한화자산운용 대체투자사업본부 상무이사",
      "대한생명 대체투자사업부",
      "대한생명 증권부(채권운용역)",
      "PIMAC(KDI 공공투자관리센터) 민간투자사업 평가위원",
      "경찰공제회 외부 심사위원",
    ],
    projects: [
      "제주가시리 태양광 외 태양광프로젝트 72건",
      "탐라해상풍력사업 : 국내 최초 해상풍력사업, 30MW",
      "제2영동고속도로 민간투자사업: 광주-원주간도로, BTO, 주무관청 국토부",
      "제3경인고속도로 민간투자사업: 시흥-남동간도로, BTO, 주무관청 경기도",
      "경기고속도로 민간투자사업: 서수원~오산~평택간도로, BTO, 주무관청 국토부",
      "서울-문산고속도로 민간투자사업: BTO, 주무관청 국토부",
      "지하철9호선 민간투자사업: 9호선 1단계사업, 주무관청 서울시",
      "제주해양과학관 민간투자사업 : 아쿠아리움, BOT, 주무관청 제주도",
      "부산영화박물관 외 BTL 민간투자사업 20건",
      "시흥상공휴게소 : 외곽순환도로 휴게소",
    ],
    education: [
      "한국외국어대학교 무역학과 졸업",
      "사회기반시설 투자자산운용사",
      "부동산 투자자산운용사",
      "금융투자상품 투자자산운용사",
    ],
    comments: [
      "태양광 사업의 성패는 설비가 아니라 숫자와 구조, 그리고 판단의 정확성에서 결정됩니다.",
      "타이런트씨는 15년 이상 축적된 태양광 컨설팅과 금융 자문 경험을 기반으로, 사업성 분석(FS)부터 프로젝트 파이낸싱(PF), 기술 실사까지 투자와 실행을 연결하는 실질적인 기준을 제시하는 회사입니다.",
      "저는 금융기관과 투자자의 관점, 그리고 사업자의 현실을 모두 이해하는 컨설턴트로서 불확실성을 줄이고 의사결정의 근거를 명확히 하는 데 집중해 왔습니다.",
      "앞으로도 타이런트씨는 데이터와 경험에 기반한 분석을 통해 신뢰할 수 있는 투자 판단과 지속 가능한 태양광 사업 환경을 만들어 가겠습니다.",
    ]
  },
  {
    id: 3,
    name: "박창훈",
    position: "타이런트에스 대표이사",
    company: "",
    photo: parkchanghoon.src,
    portfolio: "/projectPortfolio/portfolio_parkchanghoon.pdf",
    bio: "타이런트에스 대표이사로서 솔라오 사업의 프로젝트 사무관리를 총괄하고 있습니다.",
    email: "chpark@tyrant.co.kr",
    badge: "대표이사",
    organization: "TYRANT-S Co., Ltd.",
    careers: [
      "현) 타이런트에스 대표이사",
      "태양광 200MW 규모의 300개 이상 SPC 사무수탁",
      "우리은행, 농협, 수협, 신협 등 PF 대출 및 리파이낸싱 컨설팅",
      "국내최초 지자체 협업 산업단지 지붕형태양광 사업 진행",
      "국공립 학교태양광 사업 진행",
      "전국 노인정 태양광 사업 진행",
      "경영 및 IR컨설팅 (디에이투자파트너스)",
      "대부업 운영 (스카이제로대부주식회사)",
      "확인영어 호남권 영업 총괄 관리 (토익 만점 강사)",
      "플레이소프트 코딩학원 호남, 제주본부 총괄 관리",
    ],
    capabilities: [
      "상장 및 비상장 기업의 사업지원서비스에 20년 종사한 IR 자료 관련 자문 및 컨설팅 전문가",
      "M&A 대상업체 및 신규사업 서치 및 투자관련 자문업무",
      "대부업(대부업등록증 보유) 운영 경력을 통한 복잡한 금융구조 전문가",
      "손해보험대리점(설계사) 자격 보유로 조립보험, 운영보험(기계보험, 기업휴지손해보험, 영업배상책임보험) 등 다양한 보험 컨설팅 전문가",
      "신재생 에너지 관련 PF 대출을 위한 투자구조 및 사업구조 컨설팅 (태양광 SPC 100개 이상)",
      "태양광 200MW 규모의 300개 이상 발전소 자금관리, 시장 정산 및 회계 및 세무 관리",
      "프렌차이즈 가입사 유치 지원 업무 및  관리 지원 서비스",
    ],
    education: [
      "한국외국어대학교 경제학과",
      "한국대부금융협회 정회원(대부업등록증 보유)",
      "손해보험대리점(설계사) 자격 보유"
    ],
    comments: [
      "우리는 업무에 경계를 두지 않습니다.",
      "사무수탁업무는 보유 자산에 대한 전사적 측면의 관리 솔루션 모색이 필요함과 동시에 고도화된 금융구조에 따른 업무 수행을 위한 전문 자산관리 인력이 필요합니다.",
      "우리는 적시에 질적인 정보를 전달하는 것에 집중합니다.",
      "업무의 질은 유용한 정보를 제공해야 할 뿐만 아니라 적시에 전달되어야 합니다.",
      "서브 담당자 지정, 예비 인력에 대한 현황 공유를 통해 담당자 부재 등의 이슈로 인한 고객사의 걱정을 줄이고, 신속하고 정확한, 그리고 일관된 업무처리 방식을 통해 신뢰를 쌓아 나가고 있습니다.",
    ]
  },
  {
    id: 4,
    name: "이경건",
    position: "타이런트이 대표이사",
    company: "",
    photo: leekyungkun.src,
    bio: "타이런트이 대표이사로서 솔라오 사업의 프로젝트 관리 및 기자재 구매 관리를 총괄하고 있습니다.",
    email: "guns@tyrant.co.kr",
    badge: "대표이사",
    organization: "TYRANT-E Co., Ltd.",
    careers: [
      "현) 타이런트이 대표이사",
      "현) 베스트솔라 대표이사",
      "SDN (불가리아 주재원/전략기획,영업,구매팀장)",
      "Canada British Columbia 대학 근무",
          ],
    projects: [
      "태양광 및 신재생에너지 산업 전반에 걸친 사업개발, 실행 중심의 실무형 전문가",
      "태양광 발전사업 사업성 검토, 인허가, 설계, 금융 연계까지 전 과정 실무 총괄",
      "해외태양광 사업 검토 및 개발 (남아공 츠와니 프로젝트 20MW)",
      "해외태양광 사업 현지 관리 및 실사 대응(불가리아 총 60MW)",
      "EDCF 사업 참여 (베트남 동호이 OFF-GRID PV 입찰 참여)",
      "지붕형·주차장·카포트·농지·유휴부지 등 다양한 유형의 태양광 사업 모델 기획 및 실행 경험",
      "태양광 모듈·인버터·구조물 등 설비 선정 및 기술 검토 능력 보유",
      "금융기관 및 투자자 관점의 PF 구조 이해 및 사업 설명(제안서·IR) 역량",
      "발전소 운영 단계의 정산 구조, 유지관리(O&M) 관점까지 고려한 사업 설계",
    ],
    education: [
      "전남대학교 경영학부",
    ],
    comments: [
      "태양광 사업의 시작부터 운영까지,",
      "현장에서 검증된 실행력으로 사업의 완성도를 높입니다.",
      "타이런트이는 기술과 금융, 그리고 사업성을 연결하는 실무 중심의 신재생에너지 파트너입니다.",
    ]
  },
  {
    id: 5,
    name: "최재황",
    position: "타이런트아이 대표이사",
    company: "",
    photo: choijaehwang2.src,
    portfolio: "/projectPortfolio/portfolio_choijaehwang.pdf",
    bio: "타이런트아이 대표이사로서 솔라오 사업을 총괄하고 있습니다.",
    email: "cj.choi@tyrant.co.kr",
    badge: "대표이사",
    organization: "TYRANT-I Co., Ltd.",
    careers: [
      "현) 타이런트아이 대표이사",
      "현) 유클릭 Energy Service Group Leader(전무)",
      "한강에셋자산운용 인프라사업본부 신재생에너지팀 상무",
      "한화자산운용 인프라사업본부 신재생에너지파트 파트장",
      "한화에너지 태양광 IPP사업팀",
      "한화큐셀코리아 투자금융팀",
      "SDN (불가리아 주재원)",
      "한영회계법인 감사본부"
    ],
    capabilities: [
      "태양광 분야에만 18년 종사한 국내 최고 태양광 전문가",
      "국내최초 공인회계사 및 전기관련 자격증(3종) 보유",
      "국내최초 해외태양광 국내 PF 성공(불가리아 RES, ASM프로젝트 42MW)",
      "국내최초 해외태양광 현지 PF 성공 (불가리아 Ostar Kamak 외 2건 총 18MW)",
      "국내최초 광역지자체와 산업단지 지붕형 태양광 공동개발 협약 체결(대구, 부산 등)",
      "수익공유형 태양광 상품 기획 및 출시(솔라오, 솔라로지스리드, 솔라파킹, 솔라워터)",
      "산단태양광활성화를 위한 국회 토론회 발제(발제 내용 23년 입법 발의)",
      "금융지식과 전기지식을 기반으로 한 고객 맞춤형 투자구조 및 사업구조 컨설팅",
      "재무회계 및 태양광 강의, 유투브 채널 운영(TYRANT-PV)",
    ],
    education: [
      "연세대학교 경영학과",
      "서울대학교 공학전문대학원 석사과정(전기에너지 전공)",
      "공인회계사(KICPA) / 세무사(CTA)",
      "전기기사 / 전기공사기사 / 신재생에너지발전설비기사",
      "소방설비기사(전기) / 소방설비기사(기계)",
      "투자자산운용사(금융상품 및 SOC)",
      "외국환업무전문인력(금융투자협회 & 한국금융연수원)",
    ],
    comments: [
      "시장에 많은 태양광 플레이어가 있지만 금융과 태양광기술을 모두 이해하고 있는 진정한 태양광 전문가는 별로 없습니다.",
      "태양광 개발, 설계, 시공, 금융, 관리운영, 사무수탁 업무 모두를 직접 해본 경험을 바탕으로 태양광의 사업구조 및 투자구조의 패러다임을 변화시켜 당사의 상품이 시장의 표준이 되도록 만들겠습니다."
    ]
  },
  {
    id: 6,
    name: "신정철",
    position: "타이런트아이 영업총괄",
    company: "",
    photo: shinjungcheol.src,
    bio: "타이런트아이 영업총괄로서 영업사 및 고객사를 관리하며 솔라오 사업이 시장에 자리잡을 수 있게 전국적인 네트워크 조직을 관리 및 운영하고 있습니다.",
    email: "jungchul.shin@tyrant.co.kr",
    badge: "영업총괄",
    organization: "TYRANT-I Co., Ltd.",
    careers: [
      "현) 타이런트아이 영업총괄 전무",
      "SG종합건설사 대표이사",
      "SG글로벌 에너지코리아 CEO",
    ],
    // projects: [
    //   "산업단지 태양광 발전소 무상설치 영업",
    //   "주요 기업 태양광 프로젝트 수주",
    //   "신규 고객 발굴 및 관리",
    // ],
    education: [
      "목포과학대학 건축과 졸업",
      "국가건축중급기사자격증",
      "국가방수자격증 보유",
    ],
    comments: [
      "영업은 설득이 아니라, 고객의 사업과 현장을 정확히 이해하는 것에서 시작됩니다.",
      "저는 건설·에너지 분야에서의 실무 경험을 바탕으로 태양광 사업이 적용되는 현장의 구조, 시공 여건, 그리고 운영 현실을 함께 고려한 실질적인 영업 전략을 수행해 왔습니다.",
      "타이런트아이는 고객의 입장에서 고민하고, 단기적인 계약보다 장기적인 신뢰 관계를 우선하는 영업을 지향합니다.",
      "앞으로도 현장 중심의 판단과 책임 있는 실행을 통해 고객에게 가장 신뢰할 수 있는 에너지 파트너가 되겠습니다.",
    ]
  },
  {
    id: 7,
    name: "윤두환",
    position: "타이런트아이 CSO",
    company: "",
    photo: yoondoohwan.src,
    bio: "타이런트아이 CSO(Chief Strategy Officer)로서 솔라오 사업의 마케팅을 총괄하고 있으며 회사의 전략적 방향을 설정하고 있습니다.",
    email: "shine.yoon@tyrant.co.kr",
    badge: "CSO",
    organization: "TYRANT-I Co., Ltd.",
    careers: [
      "현) 타이런트아이 최고전략책임자",
      "한화그룹 (주)한화 전략실",
      "한화그룹 인재경영원",
      "한화투자증권 IB본부 Infra금융팀 / 해외사업팀",
      "저서 ‘시크릿캡슐’ (ISBN 978-89-92404-46-13190)",
      "실용신안 출원: 2중밀봉형 타임캡슐의 구조",
      "Mensa(IQ 156): IUI-06222",
      "Life Ownership Training 개발",
      "Cross Cultural Consultant(Culture Link Germany)",
    ],
    capabilities: [
      "금융·투자 전문성을 기반으로 한 태양광 프로젝트 개발(Development) 전 과정의 깊은 실무 경험 보유 - 사업성 분석, 금융 구조화, 리스크 관리, 투자자 커뮤니케이션까지 Full-cycle 이해",
      "국내 주요 태양광 시공사·자산운용사·EPC·O&M 및 다양한 영업사와의 폭넓은 네트워크 구축 - 대규모 프로젝트 딜 소싱 및 파트너십 전략 수립 가능",
      "국내외 태양광 개발 및 운영 사업 경험 다수",
      "태양광 발전소 개인 지분 5MW 직접 보유 및 운영 중 - 실질적 운영 데이터와 현장 기반의 사업 인사이트 보유",
    ],
    projects: [
      "미국 California PV M&A Advisory USD 198mn(309MW)",
      "일본 Ebino PV Solar Senior Loan JPY 9bn(40MW)",
      "일본 Oita Kyusu PV Solar Senior Loan JPY 4bn(26MW)",
      "일본 Tokyu Hotel Mezz Loan JPY 5bn",
      "영국 London Gatwick Airport Equity GBP 100mn",
      "영국 UK Infrastructure Equity & Sub–loan GBP 57mn",
      "스페인 Solar Portfolio Term Loan EUR 150mn(250MW)",
      "국내 태양광 프로젝트 다수(정선, 양양, 진주, 춘천 등)",
    ],
    education: [
      "아주대학교 사회과학부",
      "영국 Aston Business School MBA",
      "투자자산운용사",
      "펀드투자권유자문인력",
      "파생상품투자권유자문인력"
    ],
    comments: [
      "타이런트는 ‘지속 가능한 에너지의 미래’를 만들기 위해 전략과 실행을 하나로 연결합니다.",
      "정확한 전략과 확실한 실행을 기반으로 브랜드 가치를 세우고, 시장의 신뢰를 디자인하며 파트너십의 가치를 확장해 태양광 개발 산업의 새로운 미래를 제시하겠습니다.",

    ]
  },
  {
    id: 8,
    name: "홍금표",
    position: "타이런트아이 CTO",
    company: "",
    photo: hongkeumpyo.src,
    bio: "타이런트아이 CTO(Chief Technology Officer)로서 인허가접수 관리시스템 개발을 비롯하여 타이런트 그룹의 AI기반 ERP구축 및 업무효율화를 위한 혁신을 이끌고 있습니다.",
    email: "kphong@tyrant.co.kr",
    badge: "CTO",
    organization: "TYRANT-I Co., Ltd.",
    careers: [
      "현) 타이런트아이 CTO",
      "현) 유클릭 Energy Service Group 이사",
      "현) 프로그래밍 언어로 기획하는 재무모델링 강사(기업 및 공공기관 등 출강)",
      "스타트업, 경영데이터 관리 및 분석 시스템 개발 총괄",
      "KB증권, 부동산 프로젝트 파이낸싱팀",
      "메리츠증권, 부동산 프로젝트 파이낸싱팀"
    ],
    projects: [
      "현) 인허가 관리 시스템 및 발전 현장 관리 시스템 개발 총괄",
      "사업별 매출, 비용 자동화 시스템 개발 총괄(주요 데이터 API 연동 및 대시보드를 포함한 SaaS 기반 시스템)",
      "사업 총괄 데이터 관리/운영 시스템 개발 총괄(제반 경영 데이터 취합 및 관리/분석 SaaS 기반 시스템)",
      "파이썬 재무모델링 라이브러리 개발 및 현업 적용",
      "전남 신안군 풍력발전단지 개발사업(99MW)",
      "충남 당진 물류단지 개발사업 등 각종 토지개발 사업",
    ],
    education: [
      "연세대학교 경제학과",
      "투자자산운용사",
      "금융회사에서 투자업무로 이력을 시작했으며, 실무에 프로그래밍 언어를 적용하는 것을 즐겨합니다. 처음에는 데이터 분석을 목적으로 시작한 일이 커져서, 다수의 SaaS 기반 데이터 관리 시스템을 개발하게 되었습니다."
    ],
    comments: [
      "타이런트는 태양광 개발사업을 기반으로 시작하여, 깨끗하고 효율적인 에너지 전환을 실현하고자 끊임없이 연구하고, 노력하고 있습니다.",
      "안정적인 개발 역량과 철저한 사업관리 경험을 바탕으로, 고객/지역사회/환경이 모두 공존하는 에너지 프로젝트를 만들어가고자 합니다.",
      "지속 가능한 미래를 향해 더 나은 에너지 가치를 제공하도록 최선을 다하겠습니다."
    ]
  }
];

const additionalAdvisory: TeamMember[] = [
  {
    id: 9,
    name: "임인철",
    position: "타이런트 기술연구소",
    company: "",
    photo: limincheol.src,
    bio: "타이런트 기술연구소에서 신기술 연구 및 개발을 담당하고 있습니다.",
    email: "solaro@tyrant.co.kr",
    badge: "연구소장",
    organization: "타이런트 기술연구소",
    careers: [
      "탑인프라 부회장 (2023-2024)",
      "지산홀딩스 대표이사 (2012-2022)",
      "SDN 부사장 및 연구소장 (2003-2012)",
      "CATech 대표이사 (2001-2003)",
      "한국에너지공단 산업진단팀장, 투자사업팀장 (1996-2000)",
    ],
    projects: [
      "UN CDM 산자부 평가위원",
      "국내외 200여개 태양광프로젝트 기획 및 실행",
      "불가리아 3개 사이트(47MW) 태양광발전소 개발 및 실행",
      "국내 최초 프로젝트파이낸싱 태양광발전소 실행(1,650kW)",
      "산자부 1MW 태양광실증테스트 R&D 총괄",
      "80MW 태양전지판 자동화조립 및 검사라인 구축",
      "필리핀 루손섬 20MW 태양광발전소 개발",
      "일본 대규모 태양광발전소 설계 검토 및 자문 (합계 70MW)",
      "국내 가변속양수발전소들 기술 자문",
      "국내 특허 17건 보유"
    ],
    education: [
      "조지아 공과대학교 공학박사",
      "조지아 공과대학교 기계공학 석사",
      "서울대학교 공과대학 항공우주공학 학사 및 석사",
    ],
  },
  {
    id: 10,
    name: "김현우",
    position: "타이런트 기술연구소",
    company: "",
    photo: profile_temp4.src,
    bio: "타이런트 기술연구소에서 기술 혁신 및 연구개발을 주도하고 있습니다.",
    email: "solaro@tyrant.co.kr",
    badge: "수석연구원",
    organization: "타이런트 기술연구소",
    careers: [
      "타이런트 기술연구소 수석연구원",
      "전력전자 및 제어 시스템 15년 경력",
      "인버터 및 컨버터 설계 전문가",
      "전력 변환 효율 최적화",
      "시스템 통합 및 테스트"
    ],
  },
  {
    id: 11,
    name: "김길홍",
    position: "타이런트 자문변호사",
    company: "",
    photo: kimkilhong.src,
    bio: "타이런트 자문변호사로서 법률 자문 및 계약 검토를 담당하고 있습니다.",
    email: "solaro@tyrant.co.kr",
    badge: "변호사",
    organization: "법무법인(유한) 강남",
    careers: [
      "현) 법무법인(유한) 강남 변호사",
      "법무법인 제현 구성원 변호사",
      "법무법인 영진 구성원 변호사",
      "법무법인 한울 변호사",
      "금융감독원 고문변호사(2016~2017)",
      "서울시 민간투자사업 평가위원",
    ],
    projects: [
      "수도권북부 내륙화물기지 사업 실시협약 등 법률자문",
      "영남권 복합화물터미널 및 내륙컨테이너기지 사업 법률자문",
      "진주시 하수관거 정비사업 등 실시협약, 금융약정 법률자문",
      "태양광 사업 관련 OCI 법률자문",
      "행복도시 호수공원 태양광, 큐원솔라 태양광 등 법률자문",
      "영암풍력, 거창풍력 등 법률자문 등 신재생에너지 관련 자문",
    ],
    education: [
      "서울대학교 자연과학대학 물리학과(학사)",
      "건국대학교 부동산대학원 졸업(석사)",
      "변호사",
    ]
  },
  {
    id: 12,
    name: "박형준",
    position: "타이런트 세무자문",
    company: "",
    photo: parkhyungjun.src,
    bio: "타이런트 세무자문으로서 세무 계획 및 세무 컴플라이언스를 담당하고 있습니다.",
    email: "solaro@tyrant.co.kr",
    badge: "공인회계사/세무사",
    organization: "나우회계법인",
    careers: [
      "현) 나우회계법인",
      "현) 국가보조금 회계감사 및 검증기관(기획재정부, 행정안전부)",
      "국세청(서대문세무서) 납세자보호위원",
      "중소기업 경영지원단 자문위원(중소벤처기업부)",
    ],
    projects: [
      "제조업체 회계감사: 삼성물산, 코리아나화장품, 신라교역, 에스디엔, 대영초음파, 소프트아이텍, 에스앤티시 등 다수 기업에 대하여 감사 업무 수행",
      "에스디엔 불가리아 발전소 매각 자문",
      "태양광발전소 사무처리업무 대행",
      "BC카드, 라이나생명보험 및 중소기업 경영지원단 등 경영자문업무",
    ],
    education: [
      "전남대학교 경영학부 회계학 전공",
      "공인회계사(경력20년), 세무사, 공인중개사",
      "회계감사, 재무실사, 경영자문, 세무기장 및 결산 업무 경험",
    ]
  },
  {
    id: 13,
    name: "이나운",
    position: "타이런트 인허가자문",
    company: "",
    photo: leenaun.src,
    bio: "타이런트 인허가자문으로서 각종 인허가 관련된 환경 및 재해영향 등 개발행위허가 전반에 대한 자문 업무를 수행하고 있습니다.",
    email: "solaro@tyrant.co.kr",
    badge: "자문위원",
    organization: "인허가자문",
    careers: [
      "현) 타이런트 인허가 자문위원",
      "현) (주)어스에코 대표이사",
      "현 서울시 규형발전위원회 위원",
      "(주)이츠플랜 대표이사",
      "환경부 환경영향평가 심의위원",
      "(주)아라기술 근무",
      "(주)삼우환경컨설턴트 근무",
    ],
    projects: [
      "태양광발전시설 설치사업 소규모환경영향평가 다수 수행",
    ],
    education: [
      "한양대학교 환경과학과 박사수료",
    ]
  },
  {
    id: 14,
    name: "김태훈",
    position: "타이런트 보험자문",
    company: "",
    photo: kimtaehoon.src,
    bio: "타이런트 보험자문으로서 리스크 관리 및 보험 전략을 수립하고 있습니다.",
    email: "solaro@tyrant.co.kr",
    badge: "이사/팀장",
    organization: "Energy & Infra. Team (ENI), Lockton Korea",
    careers: [
      "보험회사 및 기업보험중개사에서 22년 동안 Underwriting(인수심사, 재보험), Claim(손해사정), Broking(중개) 등 보험업 서비스의 주요 분야에 근무한 경험을 바탕으로 최적의 보험조건 설계뿐만 아니라 특히, 보험사고 발생시 대응 및 처리에 핵심역량을 발휘하고 있음",
      "현) Lockton Korea(록톤 코리아) 에너지팀 팀장",
      "HIS 보험중개, 마케팅 및 재보험 이사",
      "하나손보 기업보험업무팀",
      "삼성화재 공채 입사",
    ],
    capabilities: [
      "Renewable Energy (신재생에너지)",
      "Property (재물보험)",
      "Engineering (공사보험)",
      "Casualty (배상책임보험)",
      "Claim Advocacy (보험사고 조직, 손해사정)",
      "Global Programmes (해외 보험사고)"
    ],
    projects: [
      "미국 신재생에너지 프로젝트(해상풍력, 태양광) 보험자문",
      "한국남부발전 보험조건 개선(안) 프로젝트 자문수행",
      "국내 수상태양광 보험조건 현실화 및 다수 보험자문 수행",
      "서울보증 이행보증상품(철거) 개선(안) 설계 및 협의",
      "ESS 화재사고 대응 및 처리, 보험금 지급 조력 성과",
      "ESS 제조사와 합동대응반 TF 참여 및 ESS 보험인수 설명회 개최",
      "BESS 신규사업 OPEX Modeling 보험자문 수행",
      "국내 주요 해상풍력발전 사업 보험자문 수행 중",
      "국내 지붕형태양광 배상책임관련 최대 보상한도 프로그램 운영 중"
    ],
    education: [
      "손해보험중개사(금융감독원)",
    ]
  },
  {
    id: 15,
    name: "방유성",
    position: "타이런트 부동산자문",
    company: "",
    photo: bangyousung.src,
    bio: "타이런트아이 부동산자문으로서 부동산 개발 및 관리 측면에서의 자문을 담당하고 있습니다.",
    email: "solaro@tyrant.co.kr",
    badge: "자문위원",
    organization: "부동산 자문",
    careers: [
      "건국대학교 부동산대학원 건설개발 전공, 부동산학 박사과정",
      "신안산대 부동산학과 교수, 건국대학교 미래지식교육원 건축주대학 강사",
      "저서: 하루30분 부동산투자(무불출판사)",
      "연재: 하루30분 부동산투자(부동산114)",
      "주간동아, 건국대학교 테크포럼 등 다수의 강의 및 강연 진행",
    ],
    education: [
      "부동산개발 전문인력",
      "유통관리사",
      "소방안전관리자",
    ]
  },
  {
    id: 16,
    name: "공윤배",
    position: "타이런트 전담주치의",
    company: "",
    photo: kongyunbae.src,
    bio: "타이런트아이 전담주치의로서 임직원들의 건강 관리 및 진단을 담당하고 있습니다.",
    email: "solaro@tyrant.co.kr",
    badge: "자문위원",
    organization: "전담주치의",
    careers: [
      "가톨릭대학교 의과대학 정형외과 교실수료",
      "가톨릭대학교 서울성모병원 정형외과 전문의",
      "가톨릭대학교 여의도 성모병원 임상교수",
      "청양병원 정형외과 과장",
      "KOICA 국제협력의사",
      "현대유비스병원 관절센터 과장",
      "AAHS 미국수부관절 학회 Fellowship 이수",
      "2017 FIFA U-17 월드컵 의료 담당의",
    ],
  },
];

interface CoreTeamProps {
  advisory: boolean;
}

export function CoreTeam({ advisory }: CoreTeamProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  let memberList = []
  if (advisory) {
    memberList = additionalAdvisory
  } else {
  	memberList = teamMembers
  }

  return (
  	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
       	{memberList.map((member) => (
            <div
              key={member.id}
              className="group relative bg-white rounded-[1rem] overflow-hidden border border-[#E5E7EB] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer"              
              onClick={() => setSelectedMember(member)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px -4px rgba(15, 33, 74, 0.12), 0 8px 16px -4px rgba(15, 33, 74, 0.08)';
                e.currentTarget.style.borderColor = '#273b82';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#E5E7EB';
              }}>

              {/* Eye Icon - Card Top Right */}
              <div
                className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 opacity-0 shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#FF6B3D';
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) svg.setAttribute('stroke', '#FFFFFF');
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) svg.setAttribute('stroke', '#0F214A');
                }}
                ref={(el) => {
                  if (el) {
                    const card = el.closest('.group');
                    if (card) {
                      card.addEventListener('mouseenter', () => {
                        el.style.opacity = '1';
                      });
                      card.addEventListener('mouseleave', () => {
                        el.style.opacity = '0';
                      });
                    }
                  }
                }}>

                <Eye size={16} stroke="#0F214A" strokeWidth={2.5} />
              </div>

              {/* Photo Area */}
              <div className="relative w-full pb-[125%] overflow-hidden border-b border-[#E5E7EB] bg-[linear-gradient(135deg,#EEF2F8_0%,#E1E8F2_100%)]">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover"/>
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center font-['Pretendard',_-apple-system,_-bold_'Noto_Sans_KR',_sans-serif] text-[1.75rem] font-semibold text-[#9CA3AF] tracking-tight">
                    {member.name}
                  </div>
                )}
              </div>

              {/* Info Area */}
              <div className="p-5">
                <h3 className="font-['Pretendard,_-apple-system,_Noto_Sans_KR,_sans-serif'] text-[0.9375rem] font-bold text-[#0F214A] leading-[1.4] mb-[0.375rem] tracking-[-0.02em]">
                  {member.name}
                </h3>
                <p className="font-pretendard text-[0.8125rem] font-semibold text-[#273b82] leading-[1.5]"
                  style={{
                    marginBottom: member.company ? '4px' : '0'
                  }}>
                  {member.position}
                </p>
                {member.company && (
                  <p className="font-['Pretendard',_-apple-system,_'Noto_Sans_KR',_sans-serif] text-[0.75rem] font-normal text-[#6B7280] leading-[1.5]">
                    {member.company}
                  </p>
                )}
              </div>
            </div>
          	))
       	}

		{/* Profile Modal */}
      	{selectedMember && !isMobile && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          onClick={() => setSelectedMember(null)}>
          <div
            className="relative bg-white max-w-[60rem] w-full max-h-[90vh] rounded-[1.5rem] overflow-hidden shadow-[0_1.5rem_3rem_rgba(0,0,0,0.25)] flex flex-row"            
            onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/95 flex items-center justify-center shadow-md transition-all duration-200 ease-in-out"              
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#FF6B3D';
                e.currentTarget.querySelector('svg')!.setAttribute('stroke', '#FFFFFF');
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                e.currentTarget.querySelector('svg')!.setAttribute('stroke', '#0F214A');
              }}>
              <X size={24} stroke="#0F214A" strokeWidth={2} />
            </button>

            {/* Left Side - Photo (40% width) */}
            <div className="w-[40%] bg-[linear-gradient(135deg,#0F214A_0%,#273b82_100%)] flex flex-col items-center justify-center py-[3.75rem] px-[2.5rem] relative min-h-[37.5rem]">
              <div className="w-full max-w-[18.5rem] pb-[140%] relative bg-gradient-to-br from-[#E8EEF7] to-[#D4E1F5] border-[4px] border-white rounded-[1rem] shadow-[0_12px_32px_rgba(0,0,0,0.2)] overflow-hidden">
                {selectedMember.photo ? (
                  <img
                    src={selectedMember.photo}
                    alt={selectedMember.name}
                    className="absolute inset-0 w-full h-full object-cover"/>
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center font-['Pretendard',_-apple-system,_-bold_'Noto_Sans_KR',_sans-serif] text-[3rem] font-bold text-white/90 shadow-sm">
                    {selectedMember.name}
                  </div>
                )}
              </div>
              {selectedMember.comments && selectedMember.comments.length > 0 && (
                <div className="color-gray-200 mt-2 max-h-[300px] overflow-y-auto pr-2">
                  {selectedMember.comments.map((comment, index) => (
                    <div key={index} className="flex gap-2 mt-2">
                      {/* <span className="color-white font-normal text-xl tracking-wider font-signature-nanum-pen-script"> */}
                      <span className="color-white font-normal text-base tracking-wider">
                        {comment}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Side - Info (60% width) */}
            <div className="w-[60%] flex flex-col overflow-y-auto max-h-[56.25rem]">
              {/* Header */}
              <div className="pt-[60px] px-10 pb-8 border-b-2 border-[#E5E7EB]">
                <h2 className="font-['Pretendard,_-apple-system,_'Noto_Sans_KR',_sans-serif'] text-[2.25rem] font-bold text-[#0F214A] leading-[1.3] mb-[0.75rem] tracking-[-0.02em]">
                  {selectedMember.name}
                </h2>
                
                {/* Badge (if exists) */}
                {selectedMember.badge && (
                  <div className="inline-block mb-3 bg-[#E0F2F1] text-[#00897B] px-[0.75rem] py-[0.375rem] rounded-[6px] text-[0.8125rem] font-semibold font-['Pretendard',_-apple-system,_'Noto_Sans_KR',_sans-serif]">
                    {selectedMember.badge}
                  </div>
                )}
                
                <p className="font-['Pretendard',_-apple-system,_-bold] text-[1.125rem] font-semibold text-[#FF6B3D] leading-1.5 mb-[0.375rem]">
                  {selectedMember.position}
                </p>
                
                {/* Organization or Company */}
                {(selectedMember.organization || selectedMember.company) && (
                  <p className="font-sans text-base font-medium text-gray-500 leading-normal">
                  	{selectedMember.organization || selectedMember.company}
                  </p>
              	)}
              </div>

              {/* Body */}
              <div className="p-10 flex-1">
              	{/* Bio */}
              	{selectedMember.bio && (
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase size={20} color="#0F214A" />
                      <h3 className="font-['Pretendard',_-apple-system,_-bold] text-[1.125rem] font-bold text-[#0F214A] leading-[1.4]">
                        소개
                      </h3>
                    </div>
                    <p className="font-['Pretendard',_-apple-system,_-'Noto_Sans_KR',_sans-serif] text-[0.9375rem] font-normal text-[#333333] leading-[1.7] pl-[1.75rem]">
                      {selectedMember.bio}
                    </p>
                  </div>
                )}

                {/* Careers (주요 경력) */}
                {selectedMember.careers && selectedMember.careers.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-['Pretendard',_-apple-system,_-apple-system,_'Noto_Sans_KR',_sans-serif] text-[1.125rem] font-bold text-[#0F214A] leading-[1.4] mb-4">
                      ■ 주요 경력
                    </h3>
                    <div className="pl-4">
                      {selectedMember.careers.map((career, index) => (
                        <div key={index} className="mb-[0.625rem] flex gap-2">
                          <span className="text-[#FF6B3D] shrink-0">-</span>
                          <p className="font-['Pretendard',_-apple-system,_-bold_'Noto_Sans_KR',_sans-serif] text-[0.875rem] font-normal text-gray-600 leading-[1.6] m-0">
                            {career}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Capabilities (주요 업무 분야) */}
                {selectedMember.capabilities && selectedMember.capabilities.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-['Pretendard',_-apple-system,_-'Noto_Sans_KR',_sans-serif] text-[1.125rem] font-bold text-[#0F214A] leading-[1.4] mb-4">
                      ■ 전문 역량
                    </h3>
                    <div className="ml-4">
                      {selectedMember.capabilities.map((capability, index) => (
                        <div key={index} className="mb-2.5 flex gap-2">
                          <span className="text-[#FF6B3D] shrink-0">-</span>
                          <p className="font-sans text-sm font-normal text-gray-600 leading-relaxed m-0">
                            {capability}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Projects (주요 업무이력) */}
                {selectedMember.projects && selectedMember.projects.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-sans text-[1.125rem] font-bold text-[#0F214A] leading-[1.4] mb-4">
                      ■ 주요 업무이력
                    </h3>
                    <div className="pl-4">
                      {selectedMember.projects.map((project, index) => (
                        <div key={index} className="flex gap-2 mb-2.5">
                          <span className="text-[#FF6B3D] shrink-0">-</span>
                          <p className="font-['Pretendard',_-apple-system,_-bold_'Noto_Sans_KR',_sans-serif] text-[0.875rem] font-normal text-gray-600 leading-relaxed m-0">
                            {project}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Portfolio (수행 프로젝트 다운로드) */}
                {selectedMember.portfolio && (
                  <div className="mb-8">
                    <h3 className="font-sans text-[1.125rem] font-bold text-[#0F214A] leading-[1.4] mb-4">
                      ■ 수행 프로젝트
                    </h3>
                    <a
                      href={selectedMember.portfolio}
                      download
                      className="inline-flex items-center gap-2 px-5 bg-accent/10 hover:bg-accent/20 text-accent font-semibold rounded-lg transition-all hover:scale-[1.02]"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      상세 수행 프로젝트 내역 다운로드
                    </a>
                  </div>
                )}

                {/* Education (학력 및 전문자격) */}
                {selectedMember.education && selectedMember.education.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-sans text-[1.125rem] font-bold text-[#0F214A] leading-[1.4] mb-4">
                      ■ 학력 및 전문자격
                    </h3>
                    <div className="pl-4">
                      {selectedMember.education.map((education, index) => (
                        <div key={index} className="flex gap-2 mb-2.5">
                          <span className="text-[#FF6B3D] shrink-0">-</span>
                          <p className="font-['Pretendard',_-apple-system,_-bold_'Noto_Sans_KR',_sans-serif] text-[0.875rem] font-normal text-gray-600 leading-relaxed m-0">
                            {education}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact Info */}
                <div className="bg-[#F5F8FA] rounded-[1rem] p-[1.5rem]">
                  <h3 className="font-['Pretendard',-apple-system,'Noto_Sans_KR',sans-serif] text-[1rem] font-bold text-[#0F214A] leading-[1.4] mb-[1rem]">
                    연락처
                  </h3>

                  {selectedMember.email && (
                    <div className="flex items-center gap-3 mb-3">
                      <Mail size={18} color="#273b82" />
                      <span className="font-['Pretendard',_-apple-system,_-bold_'Noto_Sans_KR',_sans-serif] text-[0.9375rem] font-medium text-[#333333] leading-[1.4]">
                        {selectedMember.email}
                      </span>
                    </div>
                  )}

                  {selectedMember.phone && (
                    <div className="flex items-center gap-3">
                      <Phone size={18} color="#273b82" />
                      <span className="font-['Pretendard',_-apple-system,_-bold_'Noto_Sans_KR',_sans-serif] text-[0.9375rem] font-medium text-[#333333] leading-[1.4]">
                        {selectedMember.phone}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Profile Detail Page */}
      {selectedMember && isMobile && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5"
          onClick={() => setSelectedMember(null)}>
          <div
            className="relative bg-white w-full max-w-[28.75rem] max-h-[90vh] rounded-[1.5rem] overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.25)] flex flex-col"
            onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/95 border-none cursor-pointer flex items-center justify-center shadow-lg transition-all duration-200 ease-in-out"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#FF6B3D';
                e.currentTarget.querySelector('svg')!.setAttribute('stroke', '#FFFFFF');
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                e.currentTarget.querySelector('svg')!.setAttribute('stroke', '#0F214A');
              }}>
              <X size={22} stroke="#0F214A" strokeWidth={2} />
            </button>

            {/* Top Section - Photo with Navy Background */}
            <div className="relative flex items-center justify-center bg-[linear-gradient(135deg,#0F214A_0%,#273b82_100%)] px-8 py-12">
              <div className="relative w-[12.5rem] h-[15rem] rounded-[1rem] border-[4px] border-white overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.2)] bg-gradient-to-br from-[#E8EEF7] to-[#D4E1F5]">
                {selectedMember.photo ? (
                  <img
                    src={selectedMember.photo}
                    alt={selectedMember.name}
                    className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center font-['Pretendard',_-apple-system,_-'Noto_Sans_KR',_sans-serif] text-[2.25rem] font-bold text-white/90 shadow-sm">
                    {selectedMember.name}
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Section - Info (Scrollable) */}
            <div className="flex flex-col overflow-y-auto flex-1">
              {/* Header */}
              <div className="px-[1.75rem] pb-[1.5rem] pt-[2rem] border-b-2 border-[#E5E7EB]">
                <h2 className="font-['Pretendard',_-apple-system,_-bold,_'Noto_Sans_KR',_sans-serif] text-[1.75rem] font-bold text-[#0F214A] leading-[1.3] mb-[0.625rem] tracking-[-0.02em]">
                  {selectedMember.name}
                </h2>
                
                {/* Badge (if exists) */}
                {selectedMember.badge && (
                  <div className="inline-block mb-3 bg-[#E0F2F1] text-[#00897B] px-2.5 py-1 rounded-md text-xs font-semibold">
                    {selectedMember.badge}
                  </div>
                )}
                
                <p className="font-sans text-[1rem] font-semibold text-[#FF6B3D] leading-1.5 mb-[0.25rem]">
                  {selectedMember.position}
                </p>
                
                {/* Organization or Company */}
                {(selectedMember.organization || selectedMember.company) && (
                  <p className="font-['Pretendard,_-apple-system,_Noto_Sans_KR,_sans-serif'] text-[0.9375rem] font-medium text-[#6B7280] leading-1.5">
                    {selectedMember.organization || selectedMember.company}
                  </p>
                )}
              </div>

              {/* Body */}
              <div className="p-7 flex-1">
                {/* Bio */}
                {selectedMember.bio && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase size={20} color="#0F214A" />
                      <h3 className="font-['Pretendard,_-apple-system,_'Noto_Sans_KR',_sans-serif'] text-[1rem] font-bold text-[#0F214A] leading-[1.4]">
                        소개
                      </h3>
                    </div>
                    <p className="font-['Pretendard',_-apple-system,_-'Noto_Sans_KR',_sans-serif] text-[14px] font-normal text-[#333333] leading-[1.7] pl-[1.75rem]">
                      {selectedMember.bio}
                    </p>
                  </div>
                )}

                {/* Careers (주요 경력) */}
                {selectedMember.careers && selectedMember.careers.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-['Pretendard',_-apple-system,_-'Noto_Sans_KR',_sans-serif] text-[1rem] font-bold text-[#0F214A] leading-[1.4] mb-[0.75rem]">
                      ■ 주요 경력
                    </h3>
                    <div className="pl-3">
                      {selectedMember.careers.map((career, index) => (
                        <div key={index} className="mb-2 flex gap-2">
                          <span className="text-[#FF6B3D] shrink-0">-</span>
                          <p className="font-sans text-[0.8125rem] font-normal text-gray-600 leading-[1.6] m-0">
                            {career}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Capabilities (주요 업무 분야) */}
                {selectedMember.capabilities && selectedMember.capabilities.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-['Pretendard',_-apple-system,_'Noto_Sans_KR',_sans-serif] text-[1rem] font-bold text-[#0F214A] leading-[1.4] mb-[0.75rem]">
                      ■ 전문 역량
                    </h3>
                    <div className="pl-3">
                      {selectedMember.capabilities.map((capability, index) => (
                        <div key={index} className="mb-2 flex gap-2">
                          <span className="text-[#FF6B3D] shrink-0">-</span>
                          <p className="font-['Pretendard,_-apple-system,_'Noto_Sans_KR',_sans-serif'] text-[0.8125rem] font-normal text-[#4B5563] leading-[1.6] m-0">
                            {capability}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Projects (주요 업무이력 - 신재생에너지 분야) */}
                {selectedMember.projects && selectedMember.projects.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-['Pretendard,_-apple-system,_Noto_Sans_KR,_sans-serif'] text-[1rem] font-bold text-[#0F214A] leading-[1.4] mb-[0.75rem]">
                      ■ 주요 업무이력
                    </h3>
                    <div className="pl-3">
                      {selectedMember.projects.map((project, index) => (
                        <div key={index} className="mb-2 flex gap-2">
                          <span className="text-[#FF6B3D] shrink-0">-</span>
                          <p className="font-['Pretendard',_-apple-system,_-apple-system,_'Noto_Sans_KR',_sans-serif] text-[0.8125rem] font-normal text-gray-600 leading-[1.6] m-0">
                            {project}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Education (학력 및 전문자격) */}
                {selectedMember.education && selectedMember.education.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-['Pretendard,_-apple-system,_Noto_Sans_KR,_sans-serif'] text-[1rem] font-bold text-[#0F214A] leading-[1.4] mb-[0.75rem]">
                      ■ 학력 및 전문자격
                    </h3>
                    <div className="pl-3">
                      {selectedMember.education.map((education, index) => (
                        <div key={index} className="mb-2 flex gap-2">
                          <span className="text-[#FF6B3D] shrink-0">-</span>
                          <p className="font-['Pretendard',_-apple-system,_-apple-system,_'Noto_Sans_KR',_sans-serif] text-[0.8125rem] font-normal text-gray-600 leading-[1.6] m-0">
                            {education}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact Info */}
                <div className="bg-[#F5F8FA] rounded-[1rem] p-[1.25rem]">
                  <h3 className="font-['Pretendard',_-apple-system,_-'Noto_Sans_KR',_sans-serif] text-[0.9375rem] font-bold text-[#0F214A] leading-[1.4] mb-[0.875rem]">
                    연락처
                  </h3>

                  {selectedMember.email && (
                    <div className="flex items-center gap-3 mb-3">
                      <Mail size={18} color="#273b82" />
                      <span className="font-['Pretendard',_-apple-system,_-bold_'Noto_Sans_KR',_sans-serif] text-[0.875rem] font-medium text-[#333333] leading-[1.4]">
                        {selectedMember.email}
                      </span>
                    </div>
                  )}

                  {selectedMember.phone && (
                    <div className="flex items-center gap-3">
                      <Phone size={18} color="#273b82" />
                      <span className="font-['Pretendard',_-apple-system,_-bold_'Noto_Sans_KR',_sans-serif] text-[0.875rem] font-medium text-[#333333] leading-[1.4]">
                        {selectedMember.phone}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  	)
}
