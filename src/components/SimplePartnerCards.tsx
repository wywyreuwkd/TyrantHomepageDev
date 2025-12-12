import hanganAssetLogo from "figma:asset/f7aaf2db9063f7b6ff417fbee394ac0de33cb005.png";
import hanwhaLogo from "figma:asset/268a440f6b0528ed937ecf6374929a1886a3d203.png";
import daeboLogo from "figma:asset/e17149cd9b6f26ea9d34e78f047a7b27d0e0c724.png";

export function SimplePartnerCards() {
  const partners = [
    {
      logo: hanganAssetLogo,
      name: "HANGANG ASSET",
      description: "· 신재생에너지 전문 투자사\n· 상품 및 투자구조 설계, 자산관리 등"
    },
    {
      logo: hanwhaLogo,
      name: "한화시스템",
      description: "· EPC 공동 도급사\n· 기자재 공급 및 공정관련 자재 보충"
    },
    {
      logo: daeboLogo,
      name: "DAEBO",
      description: "· EPC 공동 도급사\n· 태양광 시공 및 공정관련 자재 보충"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {partners.map((partner, index) => (
        <div
          key={index}
          style={{
            background: 'white',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid #E5E5E5',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(15, 33, 74, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
          }}
        >
          {/* Logo Section */}
          <div
            style={{
              height: '200px',
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              borderBottom: '1px solid #F0F0F0'
            }}
          >
            <img
              src={partner.logo}
              alt={partner.name}
              style={{
                width: '280px',
                height: '100px',
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Content Section */}
          <div style={{ padding: '32px' }}>
            <h3
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '20px',
                fontWeight: '700',
                color: '#0F214A',
                marginBottom: '20px',
                textAlign: 'center'
              }}
            >
              {partner.name}
            </h3>

            <div
              style={{
                fontFamily: 'Pretendard, -apple-system, "Noto Sans KR", sans-serif',
                fontSize: '15px',
                color: '#555',
                lineHeight: '1.9',
                fontWeight: '500',
                whiteSpace: 'pre-line'
              }}
            >
              {partner.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
