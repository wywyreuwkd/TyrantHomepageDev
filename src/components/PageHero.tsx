interface PageHeroProps {
  badge: {
    text: string;
    color: string;
  };
  title: string;
  description: string;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
}

export function PageHero({ 
  badge, 
  title, 
  description,
  gradientFrom = '#0F214A',
  gradientVia = '#15305A',
  gradientTo = '#273b82'
}: PageHeroProps) {
  return (
    <section 
      className="relative text-white overflow-hidden flex items-center"
      style={{
        background: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientVia}, ${gradientTo})`,
        minHeight: '480px'
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6B3D] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative mx-auto px-6 md:px-10 py-20 md:py-24 w-full" style={{ maxWidth: '1280px' }}>
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 mb-6" style={{ 
            background: `${badge.color}20`, 
            border: `1px solid ${badge.color}30`,
            borderRadius: '100px'
          }}>
            <span style={{ 
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: '14px',
              fontWeight: '600',
              color: badge.color
            }}>
              {badge.text}
            </span>
          </div>
          
          <h1 
            style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: 'clamp(36px, 6vw, 56px)',
              fontWeight: '700',
              lineHeight: '1.25',
              marginBottom: '24px',
              width: 'auto'
            }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          
          <p 
            style={{
              fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
              fontSize: 'clamp(16px, 3.5vw, 18px)',
              lineHeight: '1.56',
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: '400',
              width: 'auto',
              wordBreak: 'keep-all'
            }}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </section>
  );
}