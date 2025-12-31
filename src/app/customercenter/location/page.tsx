import type { Metadata } from "next";
import heroImage from "@public/customercenter/location/0024c636377befe51b6250cd92257b6a9b2bc27e.png";
import busIcon from "@public/customercenter/location/6b35e2f0b4fcf1fdd71aa819bd6ca7472ca07b11.png";
import parkingIcon from "@public/customercenter/location/591cb68a1d56ac4fb32ee56e200d69855a3828f9.png";
import locationIcon from "@public/customercenter/location/37adc1f67b540059d7c38a56ceacf3ab1f860704.png";
import navigationIcon from "@public/customercenter/location/e8db3b50657909c451416f1861dea754059bf6ad.png";
import mapImage from "@public/customercenter/location/2a6ee4d924b1968157795cbc405f6e6895a1fb1f.png"
import { HeroSectionFeat } from "@components/shared/HeroSectionFeat";
import { ImageWithFallback } from "@components/shared/ImageWithFallback";

export const metadata: Metadata = {
  title: "오시는 길",
  description: "",
};

export default function Location() {
  return (
    <div className="min-h-screen pt-20">
      <HeroSectionFeat
        badge="LOCATION"
        title={<>오시는 길</>}
        description={<>타이런트로 오시는 고객 여러분을 위해 대중교통 및 차량 이용 기준의 이동 경로를 안내합니다.<br className="hidden md:block" /> 방문 목적에 맞는 최적의 경로를 확인해 주세요.</>}
        backgroundImage={heroImage}/>

        <section className="bg-primary-dark-1 p-[80px_0_60px]">
        <div className="mx-auto px-6 md:px-10 max-w">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
            <div>
              <p className="font-['Pretendard',_-apple-system,_'Noto_Sans_KR',_sans-serif] text-base text-white/60 mb-[16px] font-medium tracking-[0.5px]">
                Company location
              </p>
              <h2 className="font-['Pretendard',_-apple-system,_'Noto_Sans_KR',_sans-serif] text-5xl font-bold text-white leading-[1.3] m-0">
                타이런트는<br />
                고객과 함께 성장합니다.
              </h2>
            </div>

            {/* 버튼 영역 */}
            <div className="flex gap-3">              
              <a className="inline-flex items-center gap-[8px] p-[14px_32px] bg-accent text-white rounded-[8px] font-['Pretendard',_-apple-system,_'Noto_Sans_KR',_sans-serif] text-base font-semibold border-none cursor-pointer transition-all duration-300 ease-in-out whitespace-nowrap"                
                href="https://map.naver.com/p/directions/-/14135086.0710843,4497460.2519721,경기도%20과천시%20과천대로7길%2074,,ADDRESS_POI/-/car?c=14.60,0,0,0,dh hover:bg-accent-hover-1"
                target="_blank"
                rel="noopener noreferrer">
                <ImageWithFallback 
                  className="w-[18px] h-[18px] object-contain filter brightness-0 invert"
                  src={navigationIcon.src} 
                  alt="길찾기" />
                길찾기
              </a>
            </div>
          </div>

          {/* 주소 정보 - 버튼 아래, 라인 위, 오른쪽 정렬 */}
          <div className="flex items-start gap-3 mb-8 justify-end">
            <ImageWithFallback 
              className="w-[20px] h-[20px] object-contain mt-[3px] flex-shrink-0"
              src={locationIcon.src} 
              alt="위치" />
            <p className="font-['Pretendard',_-apple-system,_'Noto_Sans_KR',_sans-serif] text-lg text-white/80 m-0 leading-[1.6]">
              경기도 과천시 과천대로7길 74, 메가존산학연센터 B동 3층 302호
            </p>
          </div>

          {/* 구분선 */}
          <div className="border-t border-t-[1px] border-t-white/10" />
        </div>
      </section>

      {/* 지도 섹션 */}
      <section className="bg-primary-dark-1 p-0">
        <div className="mx-auto px-6 md:px-10 max-w">
          <div className="w-full rounded-[20px] overflow-hidden border border-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.15)]">
            <ImageWithFallback 
              className="w-full h-auto block"
              src={mapImage.src}
              alt="타이런트 위치 지도" />
          </div>          
        </div>

        {/*<div className="md:!h-[600px] w-full h-[400px] relative">
          <iframe
            className="w-[100%] h-[100%] border-0"
            src="https://map.naver.com/p/search/경기도%20과천시%20과천대로7길%2074/address/14135086.0710843,4497460.2519721,경기도%20과천시%20과천대로7길%2074?c=15.25,0,0,0,dh&isCorrectAnswer=true"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="타이런트 위치"
          />
        </div>*/}

        {/* 교통편 카드 2개 - 지도 바로 아래 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-10 py-12 bg-primary-dark-1 max-w mx-auto">
          {/* 대중교통 카드 */}
          <div className="bg-white/5 rounded-[20px] p-[40px] border border-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.15)]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-[52px] h-[52px] rounded-full bg-[rgba(255,107,61,0.15)] flex items-center justify-center shrink-0 border border-[rgba(255,107,61,0.3)]">
                <ImageWithFallback 
                  className="w-[28px] h-[28px] object-contain"
                  src={busIcon.src} 
                  alt="대중교통" />
              </div>
              <h4 className="font-['Pretendard',_-apple-system,_'Noto_Sans_KR',_sans-serif] text-2xl font-[700] text-white m-0 tracking-[-0.3px]">
                대중교통 안내
              </h4>
            </div>

            <div className="flex flex-col gap-[2rem]">
              <div>
                <h5 className="font-['Pretendard',_-apple-system,_'Noto_Sans_KR',_sans-serif] text-xl font-[600] color-accent mb-[16px] tracking-[-0.3px]">
                  지하철 이용
                </h5>
                <p className="font-['Pretendard',_-apple-system,_'Noto_Sans_KR',_sans-serif] text-lg leading-[1.7] text-white/85 m-0 tracking-[-0.2px]">
                  지하철 4호선 정부과천청사역 하차<br />
                  3번 출구 앞 버스정류장에서 3번 마을버스로 환승<br />
                  (임시)가일 정류장 하차<br />
                  → 도보 약 5분
                </p>
              </div>

              <div className="pt-[32px] border-t border-[rgba(255,255,255,0.1)]">
                <h5 className="font-['Pretendard',_-apple-system,_'Noto_Sans_KR',_sans-serif] text-xl font-[600] color-accent mb-[16px] tracking-[-0.3px]">
                  버스 이용
                </h5>
                <p className="font-['Pretendard',_-apple-system,_'Noto_Sans_KR',_sans-serif] text-lg leading-[1.7] text-white/85 m-0 tracking-[-0.2px]">
                  찬우물 정류장 하차(441, 502, 540, 541번 버스 이용)<br />
                  과천지식정보타운 정류장 하차(441, 502, 540, 541번 버스 이용)<br />
                  → 도보 약 15분<br />
                  (임시)가일 정류장(3번 마을버스 이용)<br />
                  → 도보 약 5분
                </p>
              </div>
            </div>
          </div>

          {/* 주차 카드 */}
          <div className="bg-white/5 rounded-[20px] p-[40px] border border-[rgba(255,255,255,0.1)] shadow-[0_2px_12px_rgba(0,0,0,0.15)]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-[52px] h-[52px] rounded-full bg-[rgba(255,107,61,0.15)] flex items-center justify-center shrink-0 border border-[rgba(255,107,61,0.3)]">
                <ImageWithFallback 
                  className="w-[24px] h-[24px] object-contain"
                  src={parkingIcon.src} 
                  alt="주차 안내" />
              </div>
              <h4 className="font-['Pretendard',_-apple-system,_'Noto_Sans_KR',_sans-serif] text-2xl font-bold text-white m-0 tracking-[-0.3px]">
                주차 안내
              </h4>
            </div>

            <div className="flex flex-col gap-[32px]">
              <div>
                <h5 className="font-['Pretendard',_-apple-system,_'Noto_Sans_KR',_sans-serif] text-xl font-semibold color-accent mb-[16px] tracking-[-0.3px]">
                  자동차로 오시는 길
                </h5>
                <p className="font-['Pretendard',_-apple-system,_'Noto_Sans_KR',_sans-serif] text-lg leading-[1.7] text-white/85 m-0 tracking-[-0.2px]">
                  내비게이션에 "경기도 과천시 과천대로7길 74" 
                  <br />
                  또는 "타이런트아이"로 검색하시면 됩니다.
                </p>
              </div>

              <div className="pt-[32px] border-t border-white/10">
                <h5 className="font-['Pretendard',_-apple-system,_'Noto_Sans_KR',_sans-serif] text-xl font-semibold color-accent mb-[16px] tracking-[-0.3px]">
                  주차장 이용
                </h5>
                <p className="font-['Pretendard',_-apple-system,_'Noto_Sans_KR',_sans-serif] text-lg leading-[1.7] text-white/85 m-0 tracking-[-0.2px]">
                  건물 내 지하주차장을 이용하실 수 있습니다.<br />
                  주차 공간이 충분하니 편안하게 방문해 주세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>    	
    </div>
  );
}