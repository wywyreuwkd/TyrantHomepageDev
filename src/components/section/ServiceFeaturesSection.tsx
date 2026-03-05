import { ImageWithFallback } from "@/components/shared/ImageWithFallback";

interface FeatureCard {
  image: string;
  title: string;
  subtitle: string;
}

const features: FeatureCard[] = [
  {
    image: 'https://images.unsplash.com/photo-1647510283848-1884fb01e887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmaW5hbmNpYWwlMjBjb21wYXJpc29uJTIwZGVza3xlbnwxfHx8fDE3NzE5OTg3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: '전 금융사 조건 비교',
    subtitle: '23개사 전격 비교로 최적 조건 제시'
  },
  {
    image: 'https://images.unsplash.com/photo-1609162554108-6490759499ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwbm90aWZpY2F0aW9uJTIwYWxlcnR8ZW58MXx8fHwxNzcxOTk4NzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: '특판·할인 차량 빠른 공유',
    subtitle: '매일 업데이트 되는 실시간 특가 정보'
  },
  {
    image: 'https://images.unsplash.com/photo-1653074281018-c08f358059ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFuc3BhcmVudCUyMHByaWNpbmclMjBjYWxjdWxhdG9yfGVufDF8fHx8MTc3MTk5ODczNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: '이용수수료 최저 정책',
    subtitle: '숨겨진 수수료 없이 투명한 가격'
  },
  {
    image: 'https://images.unsplash.com/photo-1768796370672-3931e5d1ded7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBtYW51ZmFjdHVyaW5nJTIwcHJvZHVjdGlvbiUyMGxpbmV8ZW58MXx8fHwxNzcxOTk4NzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: '즉시출고 & 생산발주 안내',
    subtitle: '원하는 일정에 맞춘 출고 플랜 제공'
  },
  {
    image: 'https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25zdWx0YW50JTIwbWVldGluZyUyMGNsaWVudHxlbnwxfHx8fDE3NzE5OTg3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: '경력자 1:1 맞춤 상담 서비스',
    subtitle: '전담 상담사가 처음부터 끝까지 진행'
  },
  {
    image: 'https://images.unsplash.com/photo-1771491237225-01931a752f58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY2FyJTIwaW50ZXJpb3IlMjBkZXRhaWxpbmd8ZW58MXx8fHwxNzcxOTk4NzM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: '딜러 신차패키지 서비스',
    subtitle: '썬팅 · 블랙박스 · 코일매트까지 기본 지원'
  }
];

export function ServiceFeaturesSection() {
	return (
		<div className="w-full flex justify-center items-center">
      		<div className="w-full max-w-[900px] mx-auto py-8 md:py-16 lg:py-20 px-4 md:px-6 bg-[#ebf4f9]">
        		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          			{features.map((feature, index) => (
            			<div key={index} className="group relative bg-white overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
              				{/* Image Container */}
              				<div className="relative overflow-hidden h-48">
                				<ImageWithFallback src={feature.image} alt={feature.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
              				</div>
              
              				{/* Text Container */}
              				<div className={`p-4 md:p-8 transition-colors duration-300 group-hover:bg-gray-50 bg-white border-t-4 ${index % 2 === 0 ? 'border-[#1a5dab]' : 'border-[#bb0305]'}`}>
                				<h3 className="mb-2 md:mb-3 transition-colors duration-300 font-sans text-[18px] font-bold tracking-tight leading-[1.4] text-[#1a1a1a]">
                  					{feature.title}
                				</h3>
                				<p className="transition-colors duration-300 font-sans text-[14px] font-normal leading-[1.7] tracking-[-0.01em] text-[#666666]">
                  					{feature.subtitle}
                				</p>
              				</div>
            			</div>
          			))}
        		</div>
      		</div>
    	</div>
	)
}