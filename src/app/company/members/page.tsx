'use client';

import type { Metadata } from "next";
import { useState } from "react";
import { X, Briefcase, Mail, Phone, Eye } from "lucide-react";

// export const metadata: Metadata = {
//   title: "핵심인력",
//   description: "타이런트 그룹을 이끌어가는 핵심 리더들을 소개합니다.",
// };

interface TeamMember {
  id: number;
  name: string;
  position: string;
  company: string;
  photo?: string;
  bio?: string;
  email?: string;
  phone?: string;
}

export default function Members() {
	const teamMembers = [
		{
    		id: 1,
    		name: "조경석",
    		position: "타이런트그룹 회장",
    		company: "타이런트에이치 대표이사",
    		bio: "타이런트그룹 회장 및 타이런트에이치 대표이사로서 회사의 전반적인 경영을 총괄하고 있습니다.",
    		email: "kyungsuk.cho@tyrant.co.kr",
    		phone: "02-1234-5678"
  		},
  		{
    		id: 2,
    		name: "정용욱",
    		position: "타이런트씨 대표이사",
    		company: "",
    		bio: "타이런트씨 대표이사로서 사업 전략 수립 및 실행을 주도하고 있습니다.",
    		email: "yongwook.jung@tyrant.co.kr",
    		phone: "02-1234-5679"
  		},
  		{
    		id: 3,
    		name: "박창훈",
    		position: "타이런트에스 대표이사",
    		company: "",
    		bio: "타이런트에스 대표이사로서 시공 및 EPC 사업을 이끌고 있습니다.",
    		email: "changhoon.park@tyrants.co.kr",
    		phone: "02-1234-5680"
  		},
  		{
		    id: 4,
		    name: "이경건",
		    position: "타이런트이 대표이사",
		    company: "",
		    bio: "타이런트이 대표이사로서 운영 및 유지보수 사업을 선도하고 있습니다.",
		    email: "kyunggun.lee@tyrante.co.kr",
		    phone: "02-1234-5681"
		 },
		 {
		    id: 5,
		    name: "최재황",
		    position: "타이런트아이 대표이사",
		    company: "",
		    bio: "타이런트아이 대표이사로서 설계 및 자재 공급 사업을 총괄하고 있습니다.",
		    email: "jaehwang.choi@tyranti.co.kr",
		    phone: "02-1234-5682"
		 },
		 {
		    id: 6,
		    name: "신정철",
		    position: "타이런트아이 영업총괄",
		    company: "",
		    bio: "타이런트아이 영업총괄로서 고객 관계 관리 및 영업 전략을 수립하고 있습니다.",
		    email: "jungchul.shin@tyranti.co.kr",
		    phone: "02-1234-5683"
		 },
		 {
		    id: 7,
		    name: "윤두환",
		    position: "타이런트아이 CSO",
		    company: "",
		    bio: "타이런트아이 CSO(Chief Strategy Officer)로서 회사의 전략적 방향을 설정하고 있습니다.",
		    email: "doohwan.yoon@tyranti.co.kr",
		    phone: "02-1234-5684"
		 },
		 {
		    id: 8,
		    name: "홍금표",
		    position: "타이런트아이 CTO",
		    company: "",
		    bio: "타이런트아이 CTO(Chief Technology Officer)로서 기술 개발 및 혁신을 이끌고 있습니다.",
		    email: "kumpyo.hong@tyranti.co.kr",
		    phone: "02-1234-5685"
		 }
	];

	const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

	return (
    	<div className="min-h-screen bg-white" style={{ paddingTop: '80px' }}>
      		{/* Hero Section */}
      		<section className="relative bg-gradient-to-br from-[#0F214A] via-[#15305A] to-[#273b82] text-white overflow-hidden">
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
                			MEMBERS
                			</span>
                		</div>

            			<h1 style={{
              				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              				fontSize: 'clamp(32px, 5vw, 56px)',
              				fontWeight: '700',
              				lineHeight: '1.3',
              				marginBottom: '24px'
              			}}>
              			핵심인력
              			</h1>
            
            			<p style={{
              				fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              				fontSize: '18px',
              				lineHeight: '1.7',
              				color: 'rgba(255, 255, 255, 0.9)',
              				marginBottom: '32px'
            			}}>
              			타이런트 그룹을 이끌어가는<br className="hidden md:block" />
              			핵심 리더들을 소개합니다.
            			</p>
          			</div>
        		</div>
      		</section>

      {/* Board Members Section */}
      <div 
        className="mx-auto px-6 md:px-10"
        style={{ 
          maxWidth: '1280px',
          marginBottom: '120px'
        }}
      >
        {/*<div style={{ 
          marginBottom: '48px',
          paddingBottom: '16px',
          borderBottom: '2px solid #E5E7EB'
        }}>
          <h2
            style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '24px',
              fontWeight: '700',
              color: '#0F214A',
              lineHeight: '1.4',
              letterSpacing: '-0.02em'
            }}
          >
            Board Members
          </h2>
        </div>*/}

        {/* Team Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{marginTop: '80px'}}>
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative"
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #E5E7EB',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer'
              }}
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
              }}
            >
              {/* Eye Icon - Card Top Right */}
              <div
                className="absolute top-4 right-4 z-10"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.95)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  opacity: 0
                }}
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
                }}
              >
                <Eye size={16} stroke="#0F214A" strokeWidth={2.5} />
              </div>

              {/* Photo Area */}
              <div
                style={{
                  width: '100%',
                  paddingBottom: '125%',
                  position: 'relative',
                  background: 'linear-gradient(135deg, #EEF2F8 0%, #E1E8F2 100%)',
                  borderBottom: '1px solid #E5E7EB'
                }}
              >
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '28px',
                    fontWeight: '600',
                    color: '#9CA3AF',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {member.name}
                </div>
              </div>

              {/* Info Area */}
              <div style={{ padding: '20px' }}>
                <h3
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#0F214A',
                    lineHeight: '1.4',
                    marginBottom: '6px',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#273b82',
                    lineHeight: '1.5',
                    marginBottom: member.company ? '4px' : '0'
                  }}
                >
                  {member.position}
                </p>
                {member.company && (
                  <p
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '13px',
                      fontWeight: '400',
                      color: '#6B7280',
                      lineHeight: '1.5'
                    }}
                  >
                    {member.company}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: 'rgba(0, 0, 0, 0.7)',
            padding: '24px'
          }}
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative bg-white"
            style={{
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 24px 48px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              flexDirection: 'row'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-6 right-6 z-10"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.95)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#FF6B3D';
                e.currentTarget.querySelector('svg')!.setAttribute('stroke', '#FFFFFF');
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                e.currentTarget.querySelector('svg')!.setAttribute('stroke', '#0F214A');
              }}
            >
              <X size={24} stroke="#0F214A" strokeWidth={2} />
            </button>

            {/* Left Side - Photo (40% width) */}
            <div
              style={{
                width: '40%',
                background: 'linear-gradient(135deg, #0F214A 0%, #273b82 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '60px 40px',
                position: 'relative',
                minHeight: '600px'
              }}
            >
              <div
                style={{
                  width: '100%',
                  maxWidth: '280px',
                  paddingBottom: '140%',
                  position: 'relative',
                  background: 'linear-gradient(135deg, #E8EEF7 0%, #D4E1F5 100%)',
                  border: '4px solid #FFFFFF',
                  borderRadius: '16px',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.2)'
                }}
              >
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '48px',
                    fontWeight: '700',
                    color: 'rgba(255, 255, 255, 0.9)',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {selectedMember.name}
                </div>
              </div>
            </div>

            {/* Right Side - Info (60% width) */}
            <div
              style={{
                width: '60%',
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'auto',
                maxHeight: '90vh'
              }}
            >
              {/* Header */}
              <div
                style={{
                  padding: '60px 40px 32px',
                  borderBottom: '2px solid #E5E7EB'
                }}
              >
                <h2
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '36px',
                    fontWeight: '700',
                    color: '#0F214A',
                    lineHeight: '1.3',
                    marginBottom: '12px',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {selectedMember.name}
                </h2>
                <p
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#FF6B3D',
                    lineHeight: '1.5',
                    marginBottom: '6px'
                  }}
                >
                  {selectedMember.position}
                </p>
                <p
                  style={{
                    fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                    fontSize: '16px',
                    fontWeight: '500',
                    color: '#6B7280',
                    lineHeight: '1.5'
                  }}
                >
                  {selectedMember.company}
                </p>
              </div>

              {/* Body */}
              <div
                style={{
                  padding: '40px',
                  flex: 1
                }}
              >
                {/* Bio */}
                {selectedMember.bio && (
                  <div style={{ marginBottom: '32px' }}>
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase size={20} color="#0F214A" />
                      <h3
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '18px',
                          fontWeight: '700',
                          color: '#0F214A',
                          lineHeight: '1.4'
                        }}
                      >
                        소개
                      </h3>
                    </div>
                    <p
                      style={{
                        fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                        fontSize: '15px',
                        fontWeight: '400',
                        color: '#333333',
                        lineHeight: '1.7',
                        paddingLeft: '28px'
                      }}
                    >
                      {selectedMember.bio}
                    </p>
                  </div>
                )}

                {/* Contact Info */}
                <div
                  style={{
                    background: '#F5F8FA',
                    borderRadius: '16px',
                    padding: '24px'
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                      fontSize: '16px',
                      fontWeight: '700',
                      color: '#0F214A',
                      lineHeight: '1.4',
                      marginBottom: '16px'
                    }}
                  >
                    연락처
                  </h3>

                  {selectedMember.email && (
                    <div className="flex items-center gap-3 mb-3">
                      <Mail size={18} color="#273b82" />
                      <span
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '15px',
                          fontWeight: '500',
                          color: '#333333',
                          lineHeight: '1.4'
                        }}
                      >
                        {selectedMember.email}
                      </span>
                    </div>
                  )}

                  {selectedMember.phone && (
                    <div className="flex items-center gap-3">
                      <Phone size={18} color="#273b82" />
                      <span
                        style={{
                          fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                          fontSize: '15px',
                          fontWeight: '500',
                          color: '#333333',
                          lineHeight: '1.4'
                        }}
                      >
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
  );
}