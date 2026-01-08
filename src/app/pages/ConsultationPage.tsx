import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from '../components/ui/dialog';
import { useNavigate } from 'react-router-dom';

export function ConsultationPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    carModel: ''
  });
  const [privacyAgreed, setPrivacyAgreed] = React.useState(false);
  const [showPrivacyDialog, setShowPrivacyDialog] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!privacyAgreed) {
      alert('개인정보 수집 및 이용에 동의해 주세요.');
      return;
    }
    
    // 폼 제출 로직
    alert('상담 신청이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.main 
      className="flex-1 w-full bg-gray-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              무료 상담 신청
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              조&김 렌터카 전문가가 고객님께 최적의 솔루션을 제안해 드립니다.<br />
              정확한 견적과 상담을 원하시면 아래 양식을 작성해 주세요.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="w-full py-10 md:py-16">
        <div className="max-w-[800px] mx-auto px-4 md:px-10">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-6 md:p-12">
            <div className="space-y-6">
              {/* 이름 */}
              <div>
                <Label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  이름 <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="홍길동"
                />
              </div>

              {/* 연락처 */}
              <div>
                <Label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  연락처 <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="010-0000-0000"
                />
              </div>

              {/* 차량 모델 */}
              <div>
                <Label htmlFor="carModel" className="block text-sm font-semibold text-gray-900 mb-2">
                  희망 차량 모델
                </Label>
                <Input
                  type="text"
                  id="carModel"
                  name="carModel"
                  value={formData.carModel}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="예: 그랜저, 쏘나타, K5 등"
                />
              </div>

              {/* 개인정보 동의 */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="privacyAgreement"
                    checked={privacyAgreed}
                    onCheckedChange={(checked) => setPrivacyAgreed(checked === true)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <Label htmlFor="privacyAgreement" className="text-xs md:text-sm text-gray-700 cursor-pointer">
                      <span className="text-red-500">*</span> 개인정보 수집 및 이용에 동의합니다.{' '}
                      <button
                        type="button"
                        onClick={() => setShowPrivacyDialog(true)}
                        className="text-blue-600 underline hover:text-blue-700 text-xs md:text-sm"
                      >
                        자세히 보기
                      </button>
                    </Label>
                    <p className="text-xs text-gray-500 mt-1">
                      상담을 위해 필요한 최소한의 개인정보를 수집하며, 목적 달성 후 즉시 파기됩니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 제출 버튼 */}
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-base rounded-lg font-semibold"
                >
                  상담 신청하기
                </Button>
              </div>

              {/* 안내 문구 */}
              <div className="pt-2">
                <p className="text-xs text-gray-500 text-center">
                  * 표시는 필수 입력 항목입니다.<br />
                  상담 신청 후 영업일 기준 1~2일 이내에 연락드립니다.
                </p>
              </div>
            </div>
          </form>

          {/* 가 정보 섹션 */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="font-semibold text-gray-900 mb-2">전화 상담</h3>
              <p className="text-sm text-gray-600 mb-3">평일 09:00 - 18:00</p>
              <p className="text-lg font-semibold text-blue-600">1588-0000</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="font-semibold text-gray-900 mb-2">카카오톡 상담</h3>
              <p className="text-sm text-gray-600 mb-3">연중무휴 24시간</p>
              <p className="text-lg font-semibold text-blue-600">@조앤김</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="font-semibold text-gray-900 mb-2">이메일 문의</h3>
              <p className="text-sm text-gray-600 mb-3">24시간 접수</p>
              <p className="text-lg font-semibold text-blue-600">info@jokim.com</p>
            </div>
          </div>

          {/* 하단 버튼 영역 */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-end">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all px-6 py-3 rounded-lg border border-gray-200"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-semibold">이전으로 돌아가기</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 개인정보 처리방침 다이얼로그 */}
      <Dialog open={showPrivacyDialog} onOpenChange={setShowPrivacyDialog}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-900">
              개인정보 수집 및 이용 안내
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4 space-y-4 text-sm text-gray-700">
            <section>
              <h3 className="font-semibold text-gray-900 mb-2">1. 수집하는 개인정보 항목</h3>
              <p className="mb-2">회사는 상담 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다:</p>
              <p><strong>필수항목:</strong> 이름, 연락처</p>
              <p><strong>선택항목:</strong> 희망 차량 모델</p>
            </section>
            <section>
              <h3 className="font-semibold text-gray-900 mb-2">2. 개인정보의 수집 및 이용 목적</h3>
              <p>수집된 개인정보는 다음의 목적을 위해 활용됩니다:</p>
              <p>- 렌터카 및 리스 서비스 상담 제공</p>
              <p>- 고객 문의 및 요청사항 처리</p>
              <p>- 견적 제공 및 계약 진행</p>
              <p>- 서비스 개선을 위한 분석</p>
            </section>
            <section>
              <h3 className="font-semibold text-gray-900 mb-2">3. 개인정보의 보유 및 이용기간</h3>
              <p>회사는 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.</p>
              <p>- 상담 완료 후: 즉시 파기</p>
              <p>- 계약 체결 시: 관련 법령에 따라 보관 (전자상거래법에 따라 5년)</p>
              <p>- 관련 법령에 의한 보관: 법령이 정한 기간</p>
            </section>
            <section>
              <h3 className="font-semibold text-gray-900 mb-2">4. 동의를 거부할 권리 및 불이익</h3>
              <p>귀하는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다.</p>
              <p>다만, 필수항목에 대한 동의를 거부하실 경우 상담 서비스 제공이 제한될 수 있습니다.</p>
            </section>
            <section>
              <h3 className="font-semibold text-gray-900 mb-2">5. 개인정보의 제3자 제공</h3>
              <p>회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다.</p>
              <p>다만, 아래의 경우에는 예외로 합니다:</p>
              <p>- 이용자가 사전에 동의한 경우</p>
              <p>- 법령의 규정에 의거하거나 수사기관의 요구가 있는 경우</p>
            </section>
          </div>
        </DialogContent>
      </Dialog>
    </motion.main>
  );
}