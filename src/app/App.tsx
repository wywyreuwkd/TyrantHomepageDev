import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { RentLeasePage } from './pages/RentLeasePage';
import { PricePage } from './pages/PricePage';
import { ConsultationPage } from './pages/ConsultationPage';
import { CarDetailPage } from './pages/CarDetailPage';
import { AdminLoginPage } from './pages/AdminLoginPage';
import { AdminPage } from './pages/AdminPage';

// 페이지 전환 시 스크롤을 최상단으로 이동
function ScrollToTop() {
  const location = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return null;
}

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname === '/price' ? 'price' 
    : location.pathname === '/rent-lease' ? 'rent-lease' 
    : location.pathname === '/consultation' ? 'consultation'
    : location.pathname === '/admin-login' ? 'admin'
    : 'home';

  const handleNavigate = (page: string, brand?: string) => {
    if (page === 'price') {
      if (brand) {
        navigate(`/price?manufacturer=${encodeURIComponent(brand)}`);
      } else {
        navigate('/price');
      }
    } else if (page === 'rent-lease') {
      navigate('/rent-lease');
    } else if (page === 'consultation') {
      navigate('/consultation');
    } else if (page === 'admin') {
      navigate('/admin-login');
    } else {
      navigate('/');
    }
  };

  // 관리자 페이지인지 확인
  const isAdminPage = location.pathname === '/admin';

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {!isAdminPage && <Header currentPage={currentPage} onNavigate={handleNavigate} />}
      <ScrollToTop />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/rent-lease" element={<RentLeasePage />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/car/:id" element={<CarDetailPage />} />
          <Route path="/admin-login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </AnimatePresence>
      
      {!isAdminPage && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}