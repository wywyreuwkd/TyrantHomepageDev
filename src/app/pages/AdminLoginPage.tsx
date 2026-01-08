import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function AdminLoginPage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 실제 로그인 로직 구현
    console.log('Login attempt:', { username, password });
    
    // 로그인 성공 시 관리자 페이지로 이동
    navigate('/admin');
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-1 w-full"
    >
      <div className="w-full min-h-[calc(100vh-200px)] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-[480px] w-full mx-auto px-4">
          {/* 로그인 카드 */}
          <div
            className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* 아이콘 */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Lock className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* 제목 */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
              관리자 로그인
            </h1>
            <p className="text-sm md:text-base text-gray-600 text-center mb-8">
              관리자 계정으로 로그인하세요
            </p>

            {/* 로그인 폼 */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 아이디 입력 */}
              <div>
                <label htmlFor="username" className="block text-sm font-semibold text-gray-900 mb-2">
                  아이디
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="아이디를 입력하세요"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* 비밀번호 입력 */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-2">
                  비밀번호
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호를 입력하세요"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* 로그인 버튼 */}
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 text-base font-semibold rounded-xl transition-all hover:shadow-lg hover:scale-[1.02] active:scale-95"
              >
                로그인
              </Button>
            </form>

            {/* 추가 정보 */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                관리자 계정이 필요하신 경우 시스템 관리자에게 문의하세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}