import { Palette, Type, Layout, Layers, Image, MessageSquare, CheckCircle2, XCircle, Award } from "lucide-react";
import { ImageWithFallback } from "@components/shared/ImageWithFallback";
import { ComponentSpecifications } from "./styleGuideComponents";

import tyrantFullLogo from "@public/styleguide/a26d32a4cda9524da2386b79a668d32e665e1946.png";
import tyrantSymbol from "@public/styleguide/42084a9ed76544286cbbc6eee3e051e537b81c35.png";


export default function StyleGuide() {
	return (
		<div className="min-h-screen bg-white" style={{ paddingTop: '80px' }}>
      		{/* Hero Section */}
      		<section className="relative bg-gradient-to-br from-[#0F214A] via-[#15305A] to-[#273b82] text-white overflow-hidden mb-32">
        		<div className="absolute inset-0 opacity-10">
          			<div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6B3D] rounded-full blur-3xl"></div>
          			<div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        		</div>
        
        		<div className="relative mx-auto px-6 md:px-10 py-20 md:py-32" style={{ maxWidth: '1280px' }}>
          			<div className="max-w-3xl">
            			<div className="inline-block px-4 py-2 bg-[#FF6B3D]/20 border border-[#FF6B3D]/30 mb-6" style={{ borderRadius: '100px' }}>
              				<span style={{ 
                				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                				fontSize: '14px',
                				fontWeight: '600',
                				color: '#FF6B3D'
                			}}>
                			STYLE GUIDE
                			</span>
                		</div>

            			<h1 style={{
              				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              				fontSize: 'clamp(32px, 5vw, 56px)',
              				fontWeight: '700',
              				lineHeight: '1.3',
              				marginBottom: '24px'
              			}}>
              			스타일 가이드
              			</h1>
            
            			<p style={{
              				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              				fontSize: '18px',
              				lineHeight: '1.7',
              				color: 'rgba(255, 255, 255, 0.9)',
              				marginBottom: '32px'
            			}}>
              			타이런트 솔라오 웹사이트의 브랜드 아이덴티티, 디자인 원칙, UI 컴포넌트를 정의합니다.<br className="hidden md:block" />
              			모든 디자인 요소는 일관성과 전문성을 유지하기 위해 본 가이드를 준수해야 합니다.
            			</p>
          			</div>
        		</div>
      		</section>

      		{/* 1. Brand Identity */}
      		<section id="section-brand-identity" className="mb-32">
      			<div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
      				<div className="flex items-center gap-3 mb-12">
      					<div className="w-12 h-12 bg-[#273b82] rounded-xl flex items-center justify-center">
      						<Award className="text-white" size={24} />
      					</div>
      					<div>
      						<h2 style={{
      							fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
      							fontSize: '36px',
      							fontWeight: '700',
      							color: '#0F214A',
      							marginBottom: '4px'
      						}}>
      						1. Brand Identity
      					</h2>
      					<p style={{
      						fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
      						fontSize: '16px',
      						fontWeight: '400',
      						color: '#666'
      					}}>
      					브랜드 정체성 및 로고 사용 규칙
      				</p>
      			</div>
      		</div>

          {/* Brand Concept */}
      		<div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
      			<h3 style={{
      				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
      				fontSize: '20px',
      				fontWeight: '600',
      				color: '#0F214A',
      				marginBottom: '20px'
      			}}>
      			브랜드 컨셉
      		</h3>

      		<div className="bg-gradient-to-r from-[#273b82]/5 to-[#FF6B3D]/5 border border-[#273b82]/10 rounded-xl p-6 mb-6">
      			<p style={{
      				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
      				fontSize: '18px',
      				fontWeight: '600',
      				color: '#0F214A',
      				lineHeight: '1.7',
      				marginBottom: '16px'
      			}}>
      			"청정 에너지로 지속 가능한 미래를 선도하는 기술 혁신 기업"
      		</p>
      		<div className="flex flex-wrap gap-3">
      			<span className="px-4 py-2 bg-[#273b82] text-white rounded-full" style={{
      				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
      				fontSize: '14px',
      				fontWeight: '600'
      			}}>혁신</span>
      			<span className="px-4 py-2 bg-[#0F214A] text-white rounded-full" style={{
      				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
      				fontSize: '14px',
      				fontWeight: '600'
      			}}>신뢰</span>
      			<span className="px-4 py-2 bg-[#FF6B3D] text-white rounded-full" style={{
      				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
      				fontSize: '14px',
      				fontWeight: '600'
      			}}>기술 중심</span>
      		</div>
      	</div>

            {/* 로고 소개 (2가지 의미) */}
      	<div className="space-y-4">
      		<h4 style={{
      			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
      			fontSize: '16px',
      			fontWeight: '600',
      			color: '#273b82',
      			marginBottom: '16px'
      		}}>로고 심볼의 의미</h4>

              {/* 의미 1: 태양광 시장의 지배자 */}
      		<div className="bg-[#F7FAFD] border border-[#273b82]/10 rounded-xl p-5">
      			<div className="flex items-start gap-3">
      				<div style={{
      					width: '24px',
      					height: '24px',
      					borderRadius: '50%',
      					background: 'linear-gradient(135deg, #273b82 0%, #15305A 100%)',
      					color: 'white',
      					display: 'flex',
      					alignItems: 'center',
      					justifyContent: 'center',
      					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
      					fontSize: '13px',
      					fontWeight: '700',
      					flexShrink: 0
      				}}>
      				1
      			</div>
      			<div>
      				<h5 style={{
      					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
      					fontSize: '15px',
      					fontWeight: '700',
      					color: '#0F214A',
      					marginBottom: '6px'
      				}}>태양광 시장의 패러다임을 변환시키겠다는 강력한 의지 표명</h5>
      				<p style={{
      					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
      					fontSize: '14px',
      					fontWeight: '400',
      					color: '#666',
      					lineHeight: '1.6'
      				}}>
      				<strong style={{ color: '#273b82' }}>왕관 + 방패</strong> = 지배자(Tyrant) 상징 / <strong style={{ color: '#273b82' }}>가운데 조형물</strong> = 태양광 모듈
      			</p>
      		</div>
      	</div>
      </div>

              {/* 의미 2: 지구를 보호하는 기업 */}
      <div className="bg-[#F7FAFD] border border-[#FF6B3D]/10 rounded-xl p-5">
      	<div className="flex items-start gap-3">
      		<div style={{
      			width: '24px',
      			height: '24px',
      			borderRadius: '50%',
      			background: 'linear-gradient(135deg, #FF6B3D 0%, #e55a35 100%)',
      			color: 'white',
      			display: 'flex',
      			alignItems: 'center',
      			justifyContent: 'center',
      			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
      			fontSize: '13px',
      			fontWeight: '700',
      			flexShrink: 0
      		}}>
      		2
      	</div>
      	<div>
      		<h5 style={{
      			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
      			fontSize: '15px',
      			fontWeight: '700',
      			color: '#0F214A',
      			marginBottom: '6px'
      		}}>타이런트가 지구를 보호하겠다는 의미</h5>
      		<p style={{
      			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
      			fontSize: '14px',
      			fontWeight: '400',
      			color: '#666',
      			lineHeight: '1.6'
      		}}>
      		<strong style={{ color: '#FF6B3D' }}>가운데 조형물</strong> = 지구 / <strong style={{ color: '#FF6B3D' }}>왕관</strong> = 타이런트 회사 / <strong style={{ color: '#FF6B3D' }}>방패</strong> = 지구를 지킴
      	</p>
      </div>
  </div>
</div>
</div>
</div>

          {/* Logo Versions */}
<div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
	<h3 style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '20px',
		fontWeight: '600',
		color: '#0F214A',
		marginBottom: '24px'
	}}>
	로고 버전
</h3>

            {/* Full Logo - Navy Background */}
<div className="mb-8">
	<p style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '15px',
		fontWeight: '600',
		color: '#0F214A',
		marginBottom: '12px'
	}}>Primary Logo (Full Version)</p>
	<div className="bg-white border border-gray-200 rounded-xl p-12 flex items-center justify-center">
		<ImageWithFallback
            src={tyrantFullLogo.src}
			alt="타이런트 풀 로고"
			style={{ maxWidth: '500px', width: '100%', height: 'auto', display: 'block' }}
		/>
	</div>
	<p style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '13px',
		fontWeight: '400',
		color: '#999',
		marginTop: '8px'
	}}>※ 어두운 배경에 사용 (메인 웹사이트 헤더 등)</p>
</div>

            {/* Symbol Logo - White Background */}
<div className="mb-8">
	<p style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '15px',
		fontWeight: '600',
		color: '#0F214A',
		marginBottom: '12px'
	}}>Symbol Logo (Icon Version)</p>
	<div className="bg-white border border-gray-200 rounded-xl p-12 flex items-center justify-center">
		<div style={{ maxWidth: '200px', width: '100%' }}>
			<ImageWithFallback
                src={tyrantSymbol.src}
				alt="타이런트 심볼 로고"
				style={{ width: '100%', height: 'auto', display: 'block' }}
			/>
		</div>
	</div>
	<p style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '13px',
		fontWeight: '400',
		color: '#999',
		marginTop: '8px'
	}}>※ 단독 사용 (파비콘, SNS 프로필, 앱 아이콘 등)</p>
</div>
</div>

          {/* Logo Usage Rules */}
<div className="grid md:grid-cols-2 gap-6">
            {/* Logo Display */}
	<div className="bg-white rounded-2xl p-8 shadow-sm">
		<h3 style={{
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '18px',
			fontWeight: '600',
			color: '#0F214A',
			marginBottom: '20px'
		}}>
		로고 사용 규칙
	</h3>

	<div className="space-y-3">
		<div className="flex items-start gap-2">
			<CheckCircle2 className="text-[#273b82] flex-shrink-0 mt-0.5" size={18} />
			<p style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '14px',
				fontWeight: '400',
				color: '#333',
				lineHeight: '1.6'
			}}>
			<strong>최소 사이즈:</strong> Full Logo 200px / Symbol 60px (width)
		</p>
	</div>
	<div className="flex items-start gap-2">
		<CheckCircle2 className="text-[#273b82] flex-shrink-0 mt-0.5" size={18} />
		<p style={{
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '14px',
			fontWeight: '400',
			color: '#333',
			lineHeight: '1.6'
		}}>
		<strong>클리어 스페이스:</strong> 로고 높이의 25% 이상 여백 확보
	</p>
</div>
<div className="flex items-start gap-2">
	<CheckCircle2 className="text-[#273b82] flex-shrink-0 mt-0.5" size={18} />
	<p style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '14px',
		fontWeight: '400',
		color: '#333',
		lineHeight: '1.6'
	}}>
	<strong>비율 유지:</strong> 원본 가로/세로 비율 필수 유지
</p>
</div>
<div className="flex items-start gap-2">
	<CheckCircle2 className="text-[#273b82] flex-shrink-0 mt-0.5" size={18} />
	<p style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '14px',
		fontWeight: '400',
		color: '#333',
		lineHeight: '1.6'
	}}>
	<strong>배경 사용:</strong> Full Logo는 어두운 배경, Symbol은 밝은 배경 권장
</p>
</div>
<div className="flex items-start gap-2">
	<CheckCircle2 className="text-[#273b82] flex-shrink-0 mt-0.5" size={18} />
	<p style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '14px',
		fontWeight: '400',
		color: '#333',
		lineHeight: '1.6'
	}}>
	<strong>파일 형식:</strong> PNG (투명 배경) 또는 SVG 형식 사용
</p>
</div>
</div>
</div>

            {/* Logo Don'ts */}
<div className="bg-white rounded-2xl p-8 shadow-sm">
	<h3 style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '18px',
		fontWeight: '600',
		color: '#0F214A',
		marginBottom: '20px'
	}}>
	로고 변형 금지 규칙
</h3>

<div className="space-y-3">
	<div className="flex items-start gap-2">
		<XCircle className="text-[#FF6B3D] flex-shrink-0 mt-0.5" size={18} />
		<p style={{
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '14px',
			fontWeight: '400',
			color: '#333',
			lineHeight: '1.6'
		}}>
		비율 왜곡 금지 (가로/세로 임의 변경)
	</p>
</div>
<div className="flex items-start gap-2">
	<XCircle className="text-[#FF6B3D] flex-shrink-0 mt-0.5" size={18} />
	<p style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '14px',
		fontWeight: '400',
		color: '#333',
		lineHeight: '1.6'
	}}>
	색상 변경 금지 (원본 색상만 사용)
</p>
</div>
<div className="flex items-start gap-2">
	<XCircle className="text-[#FF6B3D] flex-shrink-0 mt-0.5" size={18} />
	<p style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '14px',
		fontWeight: '400',
		color: '#333',
		lineHeight: '1.6'
	}}>
	회전, 기울임 금지
</p>
</div>
<div className="flex items-start gap-2">
	<XCircle className="text-[#FF6B3D] flex-shrink-0 mt-0.5" size={18} />
	<p style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '14px',
		fontWeight: '400',
		color: '#333',
		lineHeight: '1.6'
	}}>
	외곽선, 그림자 효과 임의 추가 금지
</p>
</div>
<div className="flex items-start gap-2">
	<XCircle className="text-[#FF6B3D] flex-shrink-0 mt-0.5" size={18} />
	<p style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '14px',
		fontWeight: '400',
		color: '#333',
		lineHeight: '1.6'
	}}>
	복잡한 배경 위 사용 금지 (명도 대비 확보 필수)
</p>
</div>
<div className="flex items-start gap-2">
	<XCircle className="text-[#FF6B3D] flex-shrink-0 mt-0.5" size={18} />
	<p style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '14px',
		fontWeight: '400',
		color: '#333',
		lineHeight: '1.6'
	}}>
	60px 이하 축소 금지 (가독성 저하)
</p>
</div>
</div>
</div>
</div>
</div>
</section>

        {/* 2. Color System */}
<section id="section-color-system" className="mb-32">
	<div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
		<div className="flex items-center gap-3 mb-12">
			<div className="w-12 h-12 bg-[#FF6B3D] rounded-xl flex items-center justify-center">
				<Palette className="text-white" size={24} />
			</div>
			<div>
				<h2 style={{
					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
					fontSize: '36px',
					fontWeight: '700',
					color: '#0F214A',
					marginBottom: '4px'
				}}>
				2. Color System
			</h2>
			<p style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '16px',
				fontWeight: '400',
				color: '#666'
			}}>
			브랜드 컬러 팔레트 및 사용 가이드
		</p>
	</div>
</div>

          {/* Primary Colors */}
<div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
	<h3 style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '20px',
		fontWeight: '600',
		color: '#273b82',
		marginBottom: '16px'
	}}>
	Primary Colors - Navy
</h3>
<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
	{[
		{ name: 'Navy Primary', hex: '#273b82', rgb: '39, 59, 130', usage: '메인 브랜드 컬러, 헤더, 주요 텍스트' },
		{ name: 'Navy Dark 1', hex: '#0F214A', rgb: '15, 33, 74', usage: '헤딩, 강조 텍스트, 다크 배경' },
		{ name: 'Navy Dark 2', hex: '#15305A', rgb: '21, 48, 90', usage: '서브 배경, 카드 헤더' },
		{ name: 'Navy Dark 3', hex: '#0E1C45', rgb: '14, 28, 69', usage: '푸터, 깊은 배경' },
		{ name: 'Navy Dark 4', hex: '#152556', rgb: '21, 37, 86', usage: '호버 상태, 액센트' },
	].map((color, i) => (
		<div key={i}>
			<div className="rounded-xl mb-3" style={{ height: '120px', backgroundColor: color.hex }}></div>
			<p style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '15px',
				fontWeight: '600',
				color: '#0F214A',
				marginBottom: '6px'
			}}>{color.name}</p>
			<p style={{
				fontFamily: 'monospace',
				fontSize: '13px',
				fontWeight: '500',
				color: '#666',
				marginBottom: '4px'
			}}>{color.hex}</p>
			<p style={{
				fontFamily: 'monospace',
				fontSize: '12px',
				fontWeight: '400',
				color: '#999',
				marginBottom: '8px'
			}}>RGB({color.rgb})</p>
			<p style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '13px',
				fontWeight: '400',
				color: '#666',
				lineHeight: '1.5'
			}}>{color.usage}</p>
		</div>
		))}
</div>
</div>

          {/* Accent Colors */}
<div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
	<h3 style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '20px',
		fontWeight: '600',
		color: '#FF6B3D',
		marginBottom: '16px'
	}}>
	Accent Colors - Orange
</h3>
<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
	{[
		{ name: 'Orange Primary', hex: '#FF6B3D', rgb: '255, 107, 61', usage: 'CTA 버튼, 중요 강조, 링크' },
		{ name: 'Orange Hover 1', hex: '#e55a35', rgb: '229, 90, 53', usage: '주 버튼 호버 상태 (Hero, 주요 CTA)' },
		{ name: 'Orange Hover 2', hex: '#FF7C40', rgb: '255, 124, 64', usage: '보조 버튼 호버 상태 (Group Companies)' },
	].map((color, i) => (
		<div key={i}>
			<div className="rounded-xl mb-3" style={{ height: '120px', backgroundColor: color.hex }}></div>
			<p style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '15px',
				fontWeight: '600',
				color: '#0F214A',
				marginBottom: '6px'
			}}>{color.name}</p>
			<p style={{
				fontFamily: 'monospace',
				fontSize: '13px',
				fontWeight: '500',
				color: '#666',
				marginBottom: '4px'
			}}>{color.hex}</p>
			<p style={{
				fontFamily: 'monospace',
				fontSize: '12px',
				fontWeight: '400',
				color: '#999',
				marginBottom: '8px'
			}}>RGB({color.rgb})</p>
			<p style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '13px',
				fontWeight: '400',
				color: '#666',
				lineHeight: '1.5'
			}}>{color.usage}</p>
		</div>
		))}
</div>
</div>

          {/* Grayscale */}
<div className="bg-white rounded-2xl p-8 shadow-sm">
	<h3 style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '20px',
		fontWeight: '600',
		color: '#666',
		marginBottom: '16px'
	}}>
	Grayscale Palette
</h3>
<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
	{[
		{ name: 'Gray 100', hex: '#F7FAFD', rgb: '247, 250, 253', usage: '라이트 배경, 섹션 구분' },
		{ name: 'Gray 200', hex: '#E5E7EB', rgb: '229, 231, 235', usage: '테두리, 구분선' },
		{ name: 'Gray 400', hex: '#999999', rgb: '153, 153, 153', usage: '비활성 텍스트, 캡션' },
		{ name: 'Gray 600', hex: '#666666', rgb: '102, 102, 102', usage: '본문 서브 텍스트' },
		{ name: 'Gray 900', hex: '#333333', rgb: '51, 51, 51', usage: '본문 주 텍스트' },
	].map((color, i) => (
		<div key={i}>
			<div className="rounded-xl mb-3 border border-gray-200" style={{ height: '120px', backgroundColor: color.hex }}></div>
			<p style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '15px',
				fontWeight: '600',
				color: '#0F214A',
				marginBottom: '6px'
			}}>{color.name}</p>
			<p style={{
				fontFamily: 'monospace',
				fontSize: '13px',
				fontWeight: '500',
				color: '#666',
				marginBottom: '4px'
			}}>{color.hex}</p>
			<p style={{
				fontFamily: 'monospace',
				fontSize: '12px',
				fontWeight: '400',
				color: '#999',
				marginBottom: '8px'
			}}>RGB({color.rgb})</p>
			<p style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '13px',
				fontWeight: '400',
				color: '#666',
				lineHeight: '1.5'
			}}>{color.usage}</p>
		</div>
		))}
</div>
</div>
</div>
</section>

        {/* 3. Typography */}
<section id="section-typography" className="mb-32">
	<div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
		<div className="flex items-center gap-3 mb-12">
			<div className="w-12 h-12 bg-[#0F214A] rounded-xl flex items-center justify-center">
				<Type className="text-white" size={24} />
			</div>
			<div>
				<h2 style={{
					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
					fontSize: '36px',
					fontWeight: '700',
					color: '#0F214A',
					marginBottom: '4px'
				}}>
				3. Typography
			</h2>
			<p style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '16px',
				fontWeight: '400',
				color: '#666'
			}}>
			타이포그래피 시스템 및 사용 규칙
		</p>
	</div>
</div>

<div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
	<div className="bg-[#273b82]/5 border border-[#273b82]/10 rounded-xl p-6 mb-8">
		<p style={{
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '16px',
			fontWeight: '600',
			color: '#273b82',
			marginBottom: '8px'
		}}>
		기본 폰트: Pretendard
	</p>
	<p style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '14px',
		fontWeight: '400',
		color: '#666'
	}}>
	※ globals.css에서 H1, H2, H3, P, Label, Button의 기본 스타일이 정의되어 있습니다.
</p>
</div>

{[
	{ name: 'H1', size: '56px', weight: '700', lineHeight: '70px', usage: '히어로 섹션 메인 타이틀', sample: '청정 에너지로 지속 가능한 미래를' },
	{ name: 'H2', size: '48px', weight: '700', lineHeight: '60px', usage: '섹션 제목 (회사소개)', sample: '타이런트 CI' },
	{ name: 'H3', size: '36px', weight: '700', lineHeight: '48px', usage: '섹션 메인 제목', sample: '솔라오(SOLAR O) 서비스 소개' },
	{ name: 'H4', size: '20px', weight: '700', lineHeight: '30px', usage: '서브섹션 제목, 카드 타이틀', sample: '무상 설치, 수익 공유 모델' },
	{ name: 'P (본문)', size: '18px', weight: '400', lineHeight: '28px', usage: '일반 본문 텍스트', sample: '산업단지 물류센터를 대상으로 한 수익공유형 태양광 무상설치 프로젝트입니다.' },
	{ name: 'Body (설명)', size: '16px', weight: '400', lineHeight: '26px', usage: '서브 본문, 설명 텍스트', sample: '최소 투자 비용으로 최대 수익을 창출합니다.' },
	{ name: 'Label / Button', size: '16px', weight: '700', lineHeight: 'auto', usage: '버튼 텍스트, 라벨', sample: '빠른 상담 신청' },
].map((type, i) => (
	<div key={i} className="border-b border-gray-100 py-8 last:border-0">
		<div className="grid md:grid-cols-3 gap-6">
			<div>
				<p style={{
					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
					fontSize: '16px',
					fontWeight: '600',
					color: '#0F214A',
					marginBottom: '12px'
				}}>{type.name}</p>
				<div className="space-y-1">
					<p style={{
						fontFamily: 'monospace',
						fontSize: '13px',
						fontWeight: '400',
						color: '#666'
					}}>Size: {type.size}</p>
					<p style={{
						fontFamily: 'monospace',
						fontSize: '13px',
						fontWeight: '400',
						color: '#666'
					}}>Weight: {type.weight}</p>
					<p style={{
						fontFamily: 'monospace',
						fontSize: '13px',
						fontWeight: '400',
						color: '#666'
					}}>Line-height: {type.lineHeight}</p>
				</div>
				<p style={{
					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
					fontSize: '13px',
					fontWeight: '400',
					color: '#999',
					marginTop: '12px',
					lineHeight: '1.5'
				}}>{type.usage}</p>
			</div>
			<div className="md:col-span-2 flex items-center">
				<p style={{
					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
					fontSize: type.size,
					fontWeight: type.weight,
					lineHeight: type.lineHeight,
					color: '#0F214A'
				}}>
				{type.sample}
			</p>
		</div>
	</div>
</div>
))}
</div>
</div>
</section>

        {/* 4. Layout & Grid */}
<section id="section-layout" className="mb-32">
	<div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
		<div className="flex items-center gap-3 mb-12">
			<div className="w-12 h-12 bg-[#FF6B3D] rounded-xl flex items-center justify-center">
				<Layout className="text-white" size={24} />
			</div>
			<div>
				<h2 style={{
					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
					fontSize: '36px',
					fontWeight: '700',
					color: '#0F214A',
					marginBottom: '4px'
				}}>
				4. Layout & Grid
			</h2>
			<p style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '16px',
				fontWeight: '400',
				color: '#666'
			}}>
			그리드 시스템 및 반응형 레이아웃 규칙
		</p>
	</div>
</div>

<div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
	<h3 style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '20px',
		fontWeight: '600',
		color: '#0F214A',
		marginBottom: '20px'
	}}>
	Container & Grid System
</h3>

<div className="grid md:grid-cols-2 gap-8">
	<div>
		<h4 style={{
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '16px',
			fontWeight: '600',
			color: '#273b82',
			marginBottom: '12px'
		}}>컨테이너 설정</h4>
		<div className="space-y-3">
			<div className="flex justify-between items-center py-2 border-b border-gray-100">
				<span style={{
					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
					fontSize: '14px',
					color: '#666'
				}}>Max Width</span>
				<code style={{
					fontFamily: 'monospace',
					fontSize: '14px',
					fontWeight: '600',
					color: '#FF6B3D'
				}}>1280px</code>
			</div>
			<div className="flex justify-between items-center py-2 border-b border-gray-100">
				<span style={{
					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
					fontSize: '14px',
					color: '#666'
				}}>Horizontal Padding (Mobile)</span>
				<code style={{
					fontFamily: 'monospace',
					fontSize: '14px',
					fontWeight: '600',
					color: '#FF6B3D'
				}}>24px</code>
			</div>
			<div className="flex justify-between items-center py-2 border-b border-gray-100">
				<span style={{
					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
					fontSize: '14px',
					color: '#666'
				}}>Horizontal Padding (Desktop)</span>
				<code style={{
					fontFamily: 'monospace',
					fontSize: '14px',
					fontWeight: '600',
					color: '#FF6B3D'
				}}>40px</code>
			</div>
			<div className="flex justify-between items-center py-2">
				<span style={{
					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
					fontSize: '14px',
					color: '#666'
				}}>Grid System</span>
				<code style={{
					fontFamily: 'monospace',
					fontSize: '14px',
					fontWeight: '600',
					color: '#FF6B3D'
				}}>12 Columns</code>
			</div>
		</div>
	</div>

	<div>
		<h4 style={{
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '16px',
			fontWeight: '600',
			color: '#273b82',
			marginBottom: '12px'
		}}>섹션 간격</h4>
		<div className="space-y-3">
			<div className="flex justify-between items-center py-2 border-b border-gray-100">
				<span style={{
					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
					fontSize: '14px',
					color: '#666'
				}}>Section Padding (Mobile)</span>
				<code style={{
					fontFamily: 'monospace',
					fontSize: '14px',
					fontWeight: '600',
					color: '#FF6B3D'
				}}>60px</code>
			</div>
			<div className="flex justify-between items-center py-2 border-b border-gray-100">
				<span style={{
					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
					fontSize: '14px',
					color: '#666'
				}}>Section Padding (Desktop)</span>
				<code style={{
					fontFamily: 'monospace',
					fontSize: '14px',
					fontWeight: '600',
					color: '#FF6B3D'
				}}>120px</code>
			</div>
			<div className="flex justify-between items-center py-2">
				<span style={{
					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
					fontSize: '14px',
					color: '#666'
				}}>Component Spacing</span>
				<code style={{
					fontFamily: 'monospace',
					fontSize: '14px',
					fontWeight: '600',
					color: '#FF6B3D'
				}}>24-40px</code>
			</div>
		</div>
	</div>
</div>
</div>

          {/* Responsive Breakpoints */}
<div className="bg-white rounded-2xl p-8 shadow-sm">
	<h3 style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '20px',
		fontWeight: '600',
		color: '#0F214A',
		marginBottom: '20px'
	}}>
	Responsive Breakpoints
</h3>

<div className="grid md:grid-cols-3 gap-6">
	<div className="bg-[#F7FAFD] rounded-xl p-6 border-2 border-[#273b82]/20">
		<p style={{
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '16px',
			fontWeight: '600',
			color: '#273b82',
			marginBottom: '8px'
		}}>Mobile</p>
		<code style={{
			fontFamily: 'monospace',
			fontSize: '20px',
			fontWeight: '700',
			color: '#0F214A'
		}}>&lt; 768px</code>
		<p style={{
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '13px',
			color: '#666',
			marginTop: '12px'
		}}>1 Column Layout<br />Padding: 24px</p>
	</div>

	<div className="bg-[#F7FAFD] rounded-xl p-6 border-2 border-[#273b82]/20">
		<p style={{
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '16px',
			fontWeight: '600',
			color: '#273b82',
			marginBottom: '8px'
		}}>Tablet</p>
		<code style={{
			fontFamily: 'monospace',
			fontSize: '20px',
			fontWeight: '700',
			color: '#0F214A'
		}}>768px - 1023px</code>
		<p style={{
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '13px',
			color: '#666',
			marginTop: '12px'
		}}>2-3 Column Layout<br />Padding: 32px</p>
	</div>

	<div className="bg-[#F7FAFD] rounded-xl p-6 border-2 border-[#FF6B3D]/30">
		<p style={{
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '16px',
			fontWeight: '600',
			color: '#FF6B3D',
			marginBottom: '8px'
		}}>Desktop</p>
		<code style={{
			fontFamily: 'monospace',
			fontSize: '20px',
			fontWeight: '700',
			color: '#0F214A'
		}}>&gt;= 1024px</code>
		<p style={{
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '13px',
			color: '#666',
			marginTop: '12px'
		}}>3-4 Column Layout<br />Padding: 40px</p>
	</div>
</div>
</div>
</div>
</section>

        {/* 5. Border Radius (모서리) */}
<section id="section-border-radius" className="mb-32">
	<div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
		<div className="flex items-center gap-3 mb-12">
			<div className="w-12 h-12 bg-[#FF6B3D] rounded-xl flex items-center justify-center">
				<div className="w-5 h-5 border-2 border-white rounded-lg"></div>
			</div>
			<div>
				<h2 style={{
					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
					fontSize: '36px',
					fontWeight: '700',
					color: '#0F214A',
					marginBottom: '4px'
				}}>
				5. Border Radius (모서리)
			</h2>
			<p style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '16px',
				fontWeight: '400',
				color: '#666'
			}}>
			실제 사용되는 모서리 둥글기
		</p>
	</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Small - 12px */}
	<div className="bg-white rounded-2xl p-8 shadow-sm">
		<div className="bg-[#273b82] rounded-xl h-32 mb-6"></div>
		<div className="text-center">
			<h3 style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '18px',
				fontWeight: '600',
				color: '#0F214A',
				marginBottom: '4px'
			}}>Small</h3>
			<code style={{
				fontFamily: 'monospace',
				fontSize: '14px',
				color: '#666',
				display: 'block',
				marginBottom: '8px'
			}}>12px</code>
			<p style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '13px',
				color: '#999'
			}}>버튼, 입력 필드, 작은 카드<br />rounded-xl</p>
		</div>
	</div>

            {/* Medium - 16px */}
	<div className="bg-white rounded-2xl p-8 shadow-sm">
		<div className="bg-[#273b82] rounded-2xl h-32 mb-6"></div>
		<div className="text-center">
			<h3 style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '18px',
				fontWeight: '600',
				color: '#0F214A',
				marginBottom: '4px'
			}}>Medium</h3>
			<code style={{
				fontFamily: 'monospace',
				fontSize: '14px',
				color: '#666',
				display: 'block',
				marginBottom: '8px'
			}}>16px</code>
			<p style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '13px',
				color: '#999'
			}}>메인 카드, 섹션, 컨테이너<br />rounded-2xl</p>
		</div>
	</div>

            {/* Full - 100% */}
	<div className="bg-white rounded-2xl p-8 shadow-sm">
		<div className="bg-[#273b82] rounded-full h-32 mb-6"></div>
		<div className="text-center">
			<h3 style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '18px',
				fontWeight: '600',
				color: '#0F214A',
				marginBottom: '4px'
			}}>Full (Badge)</h3>
			<code style={{
				fontFamily: 'monospace',
				fontSize: '14px',
				color: '#666',
				display: 'block',
				marginBottom: '8px'
			}}>100%</code>
			<p style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '13px',
				color: '#999'
			}}>원형 버튼, 아바타<br />rounded-full</p>
		</div>
	</div>
</div>
</div>
</section>

        {/* 6. Component Specifications */}
<div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>	
        <ComponentSpecifications />
    </div>

        {/* 7. Tone & Voice */}
<section id="section-tone-voice" className="mb-32">
	<div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1280px' }}>
		<div className="flex items-center gap-3 mb-12">
			<div className="w-12 h-12 bg-[#0F214A] rounded-xl flex items-center justify-center">
				<Image className="text-white" size={24} />
			</div>
			<div>
				<h2 style={{
					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
					fontSize: '36px',
					fontWeight: '700',
					color: '#0F214A',
					marginBottom: '4px'
				}}>
				7. Tone & Voice
			</h2>
			<p style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '16px',
				fontWeight: '400',
				color: '#666'
			}}>
			브랜드 메시지 및 이미지 스타일 가이드
		</p>
	</div>
</div>

<div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* 선호 스타일 */}
	<div className="bg-white rounded-2xl p-8 shadow-sm">
		<div className="flex items-center gap-2 mb-6">
			<CheckCircle2 className="text-[#273b82]" size={24} />
			<h3 style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '20px',
				fontWeight: '600',
				color: '#0F214A'
			}}>
			선호 스타일
		</h3>
	</div>

	<div className="space-y-4">
		<div className="border-l-4 border-[#273b82] pl-4">
			<h4 style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '15px',
				fontWeight: '600',
				color: '#273b82',
				marginBottom: '6px'
			}}>사진 톤 & 스타일</h4>
			<ul className="space-y-2">
				<li style={{
					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
					fontSize: '14px',
					color: '#666',
					lineHeight: '1.6'
				}}>• 고대비, 선명한 색감</li>
				<li style={{
					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
					fontSize: '14px',
					color: '#666',
					lineHeight: '1.6'
				}}>• 미니멀하고 깔끔한 구도</li>
				<li style={{
					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
					fontSize: '14px',
					color: '#666',
					lineHeight: '1.6'
				}}>• 기술/산업 이미지 선호</li>
				<li style={{
					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
					fontSize: '14px',
					color: '#666',
					lineHeight: '1.6'
				}}>• 태양광 패널, 청정 에너지 관련</li>
				<li style={{
					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
					fontSize: '14px',
					color: '#666',
					lineHeight: '1.6'
				}}>• 자연광 활용, 밝은 톤</li>
			</ul>
		</div>

		<div className="border-l-4 border-[#273b82] pl-4">
			<h4 style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '15px',
				fontWeight: '600',
				color: '#273b82',
				marginBottom: '6px'
			}}>일러스트 스타일</h4>
			<ul className="space-y-2">
				<li style={{
					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
					fontSize: '14px',
					color: '#666',
					lineHeight: '1.6'
				}}>• 심플하고 모던한 라인</li>
				<li style={{
					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
					fontSize: '14px',
					color: '#666',
					lineHeight: '1.6'
				}}>• 선명한 라인, 단색 강조</li>
				<li style={{
					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
					fontSize: '14px',
					color: '#666',
					lineHeight: '1.6'
				}}>• 브랜드 컬러 활용 (Navy, Orange)</li>
				<li style={{
					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
					fontSize: '14px',
					color: '#666',
					lineHeight: '1.6'
				}}>• 아이콘은 Lucide React 사용</li>
			</ul>
		</div>
	</div>
</div>

            {/* 금지 스타일 */}
<div className="bg-white rounded-2xl p-8 shadow-sm">
	<div className="flex items-center gap-2 mb-6">
		<XCircle className="text-[#FF6B3D]" size={24} />
		<h3 style={{
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '20px',
			fontWeight: '600',
			color: '#0F214A'
		}}>
		금지 스타일
	</h3>
</div>

<div className="space-y-4">
	<div className="border-l-4 border-[#FF6B3D] pl-4">
		<h4 style={{
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '15px',
			fontWeight: '600',
			color: '#FF6B3D',
			marginBottom: '6px'
		}}>사용 금지 이미지</h4>
		<ul className="space-y-2">
			<li style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '14px',
				color: '#666',
				lineHeight: '1.6'
			}}>✗ 저화질, 픽셀 깨짐</li>
			<li style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '14px',
				color: '#666',
				lineHeight: '1.6'
			}}>✗ 과한 필터, 비네팅 효과</li>
			<li style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '14px',
				color: '#666',
				lineHeight: '1.6'
			}}>✗ 어둡고 침침한 톤</li>
			<li style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '14px',
				color: '#666',
				lineHeight: '1.6'
			}}>✗ 복잡하고 산만한 구도</li>
			<li style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '14px',
				color: '#666',
				lineHeight: '1.6'
			}}>✗ 워터마크, 로고 중첩</li>
			<li style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '14px',
				color: '#666',
				lineHeight: '1.6'
			}}>✗ 관련 없는 주제 이미지</li>
		</ul>
	</div>

	<div className="border-l-4 border-[#FF6B3D] pl-4">
		<h4 style={{
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '15px',
			fontWeight: '600',
			color: '#FF6B3D',
			marginBottom: '6px'
		}}>일러스트 금지 사항</h4>
		<ul className="space-y-2">
			<li style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '14px',
				color: '#666',
				lineHeight: '1.6'
			}}>✗ 유치하거나 캐주얼한 스타일</li>
			<li style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '14px',
				color: '#666',
				lineHeight: '1.6'
			}}>✗ 과도한 그라데이션</li>
			<li style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '14px',
				color: '#666',
				lineHeight: '1.6'
			}}>✗ 브랜드 컬러 외 색상 남용</li>
			<li style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '14px',
				color: '#666',
				lineHeight: '1.6'
			}}>✗ 3D 렌더링, 사실적 일러스트</li>
		</ul>
	</div>
</div>
</div>
</div>

          {/* Image Quality Standards */}
<div className="bg-white rounded-2xl p-8 shadow-sm">
	<h3 style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '20px',
		fontWeight: '600',
		color: '#0F214A',
		marginBottom: '16px'
	}}>
	이미지 품질 기준
</h3>
<div className="grid md:grid-cols-3 gap-6">
	<div className="text-center">
		<div className="bg-[#273b82]/5 rounded-xl p-6 mb-4">
			<p style={{
				fontFamily: 'monospace',
				fontSize: '28px',
				fontWeight: '700',
				color: '#273b82'
			}}>1920px+</p>
		</div>
		<p style={{
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '14px',
			fontWeight: '600',
			color: '#0F214A'
		}}>최소 가로 해상도</p>
	</div>
	<div className="text-center">
		<div className="bg-[#273b82]/5 rounded-xl p-6 mb-4">
			<p style={{
				fontFamily: 'monospace',
				fontSize: '28px',
				fontWeight: '700',
				color: '#273b82'
			}}>72 DPI+</p>
		</div>
		<p style={{
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '14px',
			fontWeight: '600',
			color: '#0F214A'
		}}>웹 해상도</p>
	</div>
	<div className="text-center">
		<div className="bg-[#273b82]/5 rounded-xl p-6 mb-4">
			<p style={{
				fontFamily: 'monospace',
				fontSize: '28px',
				fontWeight: '700',
				color: '#273b82'
			}}>JPG/PNG</p>
		</div>
		<p style={{
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '14px',
			fontWeight: '600',
			color: '#0F214A'
		}}>권장 포맷</p>
	</div>
</div>
</div>

          {/* Tone Guide */}
<div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
	<h3 style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '20px',
		fontWeight: '600',
		color: '#0F214A',
		marginBottom: '20px'
	}}>
	브랜드 메시지 톤
</h3>

<div className="bg-gradient-to-r from-[#273b82]/5 to-[#FF6B3D]/5 border border-[#273b82]/10 rounded-xl p-6 mb-6">
	<p style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '17px',
		fontWeight: '600',
		color: '#0F214A',
		lineHeight: '1.7',
		marginBottom: '12px'
	}}>
	"전문적이지만 친근한 톤 - 기술 전문성과 신뢰감을 유지하되, 고객과의 거리감을 줄입니다."
</p>
<div className="flex flex-wrap gap-2">
	<span className="px-3 py-1 bg-white rounded-full text-sm" style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontWeight: '500',
		color: '#666'
	}}>전문적</span>
	<span className="px-3 py-1 bg-white rounded-full text-sm" style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontWeight: '500',
		color: '#666'
	}}>신뢰감</span>
	<span className="px-3 py-1 bg-white rounded-full text-sm" style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontWeight: '500',
		color: '#666'
	}}>친절함</span>
	<span className="px-3 py-1 bg-white rounded-full text-sm" style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontWeight: '500',
		color: '#666'
	}}>명확함</span>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6">
	<div className="bg-[#F7FAFD] rounded-xl p-6">
		<h4 style={{
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '16px',
			fontWeight: '600',
			color: '#273b82',
			marginBottom: '12px'
		}}>핵심 키워드</h4>
		<ul className="space-y-2">
			{['혁신', '기술', '신뢰', '지속 가능', '청정 에너지', '미래'].map((keyword, i) => (
				<li key={i} style={{
					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
					fontSize: '14px',
					color: '#666'
				}}>• {keyword}</li>
				))}
		</ul>
	</div>

	<div className="bg-[#F7FAFD] rounded-xl p-6">
		<h4 style={{
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '16px',
			fontWeight: '600',
			color: '#273b82',
			marginBottom: '12px'
		}}>문장 스타일</h4>
		<ul className="space-y-2">
			{['간결한 확신형 문장', '능동태 사용', '구체적 수치 제시', '명사형 종결 지양', '전문 용어 최소화'].map((style, i) => (
				<li key={i} style={{
					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
					fontSize: '14px',
					color: '#666'
				}}>• {style}</li>
				))}
		</ul>
	</div>

	<div className="bg-[#F7FAFD] rounded-xl p-6">
		<h4 style={{
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '16px',
			fontWeight: '600',
			color: '#273b82',
			marginBottom: '12px'
		}}>어조 원칙</h4>
		<ul className="space-y-2">
			{['~합니다 (정중)', '~해요 (친근)', '단정적 표현 사용', '고객 중심 관점', '긍정적 어조 유지'].map((tone, i) => (
				<li key={i} style={{
					fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
					fontSize: '14px',
					color: '#666'
				}}>• {tone}</li>
				))}
		</ul>
	</div>
</div>
</div>

          {/* Examples */}
<div className="grid md:grid-cols-2 gap-6">
            {/* Good Examples */}
	<div className="bg-white rounded-2xl p-8 shadow-sm">
		<div className="flex items-center gap-2 mb-6">
			<CheckCircle2 className="text-[#273b82]" size={24} />
			<h3 style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '20px',
				fontWeight: '600',
				color: '#0F214A'
			}}>
			권장 표현
		</h3>
	</div>

	<div className="space-y-4">
		<div className="bg-[#273b82]/5 border border-[#273b82]/20 rounded-xl p-4">
			<p style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '14px',
				color: '#0F214A',
				lineHeight: '1.7'
			}}>
			✓ "청정 에너지로 지속 가능한 미래를 만듭니다."
		</p>
	</div>
	<div className="bg-[#273b82]/5 border border-[#273b82]/20 rounded-xl p-4">
		<p style={{
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '14px',
			color: '#0F214A',
			lineHeight: '1.7'
		}}>
		✓ "15년 이상의 태양광 시공 경험을 보유하고 있습니다."
	</p>
</div>
<div className="bg-[#273b82]/5 border border-[#273b82]/20 rounded-xl p-4">
	<p style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '14px',
		color: '#0F214A',
		lineHeight: '1.7'
	}}>
	✓ "고객의 성공이 우리의 목표입니다."
</p>
</div>
<div className="bg-[#273b82]/5 border border-[#273b82]/20 rounded-xl p-4">
	<p style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '14px',
		color: '#0F214A',
		lineHeight: '1.7'
	}}>
	✓ "무상 설치로 초기 비용 부담을 없앴습니다."
</p>
</div>
</div>
</div>

            {/* Bad Examples */}
<div className="bg-white rounded-2xl p-8 shadow-sm">
	<div className="flex items-center gap-2 mb-6">
		<XCircle className="text-[#FF6B3D]" size={24} />
		<h3 style={{
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '20px',
			fontWeight: '600',
			color: '#0F214A'
		}}>
		피해야 할 표현
	</h3>
</div>

<div className="space-y-4">
	<div className="bg-[#FF6B3D]/5 border border-[#FF6B3D]/20 rounded-xl p-4">
		<p style={{
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '14px',
			color: '#666',
			lineHeight: '1.7'
		}}>
		✗ "대충 해봤는데 괜찮은 것 같습니다."<br />
		<span style={{ fontSize: '12px', color: '#999' }}>(비전문적, 불확실한 표현)</span>
	</p>
</div>
<div className="bg-[#FF6B3D]/5 border border-[#FF6B3D]/20 rounded-xl p-4">
	<p style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '14px',
		color: '#666',
		lineHeight: '1.7'
	}}>
	✗ "아마도 수익이 날 수 있을 것으로 예상됨."<br />
	<span style={{ fontSize: '12px', color: '#999' }}>(불확실한 명사형 종결)</span>
</p>
</div>
<div className="bg-[#FF6B3D]/5 border border-[#FF6B3D]/20 rounded-xl p-4">
	<p style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '14px',
		color: '#666',
		lineHeight: '1.7'
	}}>
	✗ "저희가 최고입니다!!!"<br />
	<span style={{ fontSize: '12px', color: '#999' }}>(과장된 표현, 느낌표 남용)</span>
</p>
</div>
<div className="bg-[#FF6B3D]/5 border border-[#FF6B3D]/20 rounded-xl p-4">
	<p style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '14px',
		color: '#666',
		lineHeight: '1.7'
	}}>
	✗ "타사 대비 월등한 CAPEX ROI를 실현함."<br />
	<span style={{ fontSize: '12px', color: '#999' }}>(과도한 전문 용어, 명사형 종결)</span>
</p>
</div>
</div>
</div>
</div>

          {/* 예시 섹션 - 3단 그리드 */}
<div className="mt-12">
	<h3 style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '24px',
		fontWeight: '600',
		color: '#0F214A',
		marginBottom: '24px'
	}}>
	실전 예시
</h3>

<div className="grid md:grid-cols-3 gap-6">
              {/* ① 사진·이미지 예시 */}
	<div style={{
		background: '#F8F9FC',
		borderRadius: '16px',
		padding: '24px'
	}}>
	<h4 style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '20px',
		fontWeight: '600',
		color: '#0F214A',
		lineHeight: '30px',
		marginBottom: '16px'
	}}>
	이미지 스타일
</h4>

<div className="grid grid-cols-2 gap-3">
                  {/* Good Image */}
	<div>
		<div className="relative">
			<ImageWithFallback 
				src="https://images.unsplash.com/photo-1626793369994-a904d2462888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwaW5zdGFsbGF0aW9uJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NTM1Mzc2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
				alt="Good"
				style={{
					width: '100%',
					height: '140px',
					objectFit: 'cover',
					borderRadius: '12px',
					border: '3px solid #273b82'
				}}
			/>
			<div style={{
				position: 'absolute',
				top: '8px',
				right: '8px',
				background: '#273b82',
				color: 'white',
				padding: '4px 10px',
				borderRadius: '6px',
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '12px',
				fontWeight: '600'
			}}>
			✓
		</div>
	</div>
	<p style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '13px',
		fontWeight: '400',
		color: '#0F214A',
		lineHeight: '20px',
		marginTop: '6px'
	}}>
	전문적이고 깔끔한 현장
</p>
</div>

                  {/* Bad Image */}
<div>
	<div className="relative">
		<ImageWithFallback 
			src="https://images.unsplash.com/photo-1660196585845-6719349155f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBkYW1hZ2VkJTIwc29sYXIlMjBwYW5lbHxlbnwxfHx8fDE3NjUzNTM3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
			alt="Bad"
			style={{
				width: '100%',
				height: '140px',
				objectFit: 'cover',
				borderRadius: '12px',
				border: '3px solid #FF6B3D',
				opacity: 0.6
			}}
		/>
		<div style={{
			position: 'absolute',
			top: '8px',
			right: '8px',
			background: '#FF6B3D',
			color: 'white',
			padding: '4px 10px',
			borderRadius: '6px',
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '12px',
			fontWeight: '600'
		}}>
		✗
	</div>
</div>
<p style={{
	fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
	fontSize: '13px',
	fontWeight: '400',
	color: '#666',
	lineHeight: '20px',
	marginTop: '6px'
}}>
낡고 어두운 이미지
</p>
</div>
</div>
</div>

              {/* ② 좋은 문장 예시 카드 3개 */}
<div style={{
	background: '#F8F9FC',
	borderRadius: '16px',
	padding: '24px'
}}>
<h4 style={{
	fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
	fontSize: '20px',
	fontWeight: '600',
	color: '#0F214A',
	lineHeight: '30px',
	marginBottom: '16px'
}}>
좋은 문장 예시
</h4>

<div className="space-y-4">
	<div className="bg-white rounded-xl p-4 border-l-4 border-[#273b82]">
		<p style={{
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '16px',
			fontWeight: '400',
			color: '#0F214A',
			lineHeight: '26px'
		}}>
		"산업단지 옥상에 태양광을 무상으로 설치하고, 발전 수익을 공유합니다."
	</p>
</div>

<div className="bg-white rounded-xl p-4 border-l-4 border-[#273b82]">
	<p style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '16px',
		fontWeight: '400',
		color: '#0F214A',
		lineHeight: '26px'
	}}>
	"초기 투자 없이 월 평균 300만원의 수익을 창출할 수 있습니다."
</p>
</div>

<div className="bg-white rounded-xl p-4 border-l-4 border-[#273b82]">
	<p style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '16px',
		fontWeight: '400',
		color: '#0F214A',
		lineHeight: '26px'
	}}>
	"15년간 1,200개 이상의 프로젝트를 성공적으로 완료했습니다."
</p>
</div>
</div>
</div>

              {/* ③ Before-After 비교 */}
<div style={{
	background: '#F8F9FC',
	borderRadius: '16px',
	padding: '24px'
}}>
<h4 style={{
	fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
	fontSize: '20px',
	fontWeight: '600',
	color: '#0F214A',
	lineHeight: '30px',
	marginBottom: '16px'
}}>
Before → After
</h4>

<div className="space-y-4">
                  {/* Example 1 */}
	<div>
		<div className="bg-[#FF6B3D]/10 rounded-lg p-3 mb-2">
			<p style={{
				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
				fontSize: '14px',
				fontWeight: '400',
				color: '#666',
				lineHeight: '22px'
			}}>
			❌ "태양광 사업은 좋은 것 같습니다."
		</p>
	</div>
	<div className="bg-[#273b82]/10 rounded-lg p-3">
		<p style={{
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '14px',
			fontWeight: '400',
			color: '#0F214A',
			lineHeight: '22px'
		}}>
		✅ "태양광 사업은 안정적인 수익을 제공합니다."
	</p>
</div>
</div>

                  {/* Example 2 */}
<div>
	<div className="bg-[#FF6B3D]/10 rounded-lg p-3 mb-2">
		<p style={{
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '14px',
			fontWeight: '400',
			color: '#666',
			lineHeight: '22px'
		}}>
		❌ "설치가 완료될 예정임."
	</p>
</div>
<div className="bg-[#273b82]/10 rounded-lg p-3">
	<p style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '14px',
		fontWeight: '400',
		color: '#0F214A',
		lineHeight: '22px'
	}}>
	✅ "3월 15일에 설치를 완료합니다."
</p>
</div>
</div>

                  {/* Example 3 */}
<div>
	<div className="bg-[#FF6B3D]/10 rounded-lg p-3 mb-2">
		<p style={{
			fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
			fontSize: '14px',
			fontWeight: '400',
			color: '#666',
			lineHeight: '22px'
		}}>
		❌ "ROI 극대화를 도모함."
	</p>
</div>
<div className="bg-[#273b82]/10 rounded-lg p-3">
	<p style={{
		fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
		fontSize: '14px',
		fontWeight: '400',
		color: '#0F214A',
		lineHeight: '22px'
	}}>
	✅ "투자 대비 최대 수익을 실현합니다."
</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
        </section>
    	</div>
	);
}