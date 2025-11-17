import partnerImage from "../assets/a1f7ca076bee9c69717df0093bffe7922bc05fcb.png";

export function Partners() {
  return (
    <section className="py-20 bg-[#F5F6FA] border-t border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-center mb-16 text-4xl text-gray-900">
          믿을 수 있는 <span className="text-[#4A76FF] font-bold">대기업 파트너</span>
        </h2>
        
        <div className="bg-white rounded-3xl p-16 shadow-sm border border-gray-100">
          <img 
            src={partnerImage.src} 
            alt="한화시스템, JBCORP, DAEBO 파트너 로고" 
            className="w-full max-w-5xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
}