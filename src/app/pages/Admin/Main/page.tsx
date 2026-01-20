"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { AdminHeader } from '@components/admin/AdminHeader';
import { Button } from '@components/ui/button';
import { Check, Clock, Search, X, Calendar as CalendarIcon, Shield, User, Trash2, Smartphone, Download } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@components/ui/dialog';
import { Calendar } from '@components/ui/calendar';
import { ko } from 'date-fns/locale';
import * as XLSX from 'xlsx';

// 신청자 데이터 타입
interface Applicant {
  id: number;
  name: string;
  phone: string;
  vehicleType: string;
  dateTime: string;
  referrer: string;
  device: string;
  status: 'pending' | 'completed';
}

// 사용자 데이터 타입
interface User {
  id: number;
  userId: string;
  name: string;
  lastAccess: string;
}

// 기기 데이터 타입
interface Device {
  id: number;
  deviceName: string;
  deviceType: string;
  registeredDate: string;
  status: 'active' | 'inactive';
}

// 임시 데이터 생성 함수
const generateMockApplicants = (): Applicant[] => {
  const names = ['김철수', '이영희', '박민수', '최지원', '정수진', '강민호', '윤서연', '임동현', '한예진', '오준혁'];
  const vehicles = ['현대 그랜저', '기아 K5', '제네시스 G80', '벤츠 E-Class', '쉐보레 말리부', 'BMW 5시리즈', '기아 카니발', '현대 아이오닉5', '제네시스 GV70', '벤츠 C-Class'];
  const referrers = ['네이버 검색', '구글 검색', '직접 방문', '카카오 광고', '페이스북 광고', '인스타그램', '지인 추천'];
  const devices = ['Desktop', 'Mobile', 'Tablet'];
  
  const applicants: Applicant[] = [];
  
  for (let i = 1; i <= 75; i++) {
    // 2026년 1월 19일부터 역순으로 날짜 생성
    const daysAgo = Math.floor((i - 1) / 10);
    const date = new Date(2026, 0, 19 - daysAgo);
    const hour = 9 + (i % 13); // 9시부터 21시까지
    const minute = (i * 7) % 60; // 0-59분
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hourStr = String(hour).padStart(2, '0');
    const minuteStr = String(minute).padStart(2, '0');
    
    applicants.push({
      id: i,
      name: names[i % names.length],
      phone: `010-${String(1000 + i).padStart(4, '0')}-${String(5678 + i).padStart(4, '0')}`,
      vehicleType: vehicles[i % vehicles.length],
      dateTime: `${year}-${month}-${day} ${hourStr}:${minuteStr}`,
      referrer: referrers[i % referrers.length],
      device: devices[i % devices.length],
      status: i % 3 === 0 ? 'completed' : 'pending',
    });
  }
  
  return applicants.reverse(); // 최신순 정렬
};

// 사용자 임시 데이터 생성 함수
const generateMockUsers = (): User[] => {
  const users: User[] = [
    {
      id: 1,
      userId: 'admin001',
      name: '조원식',
      lastAccess: '2026-01-19 14:23:45'
    },
    {
      id: 2,
      userId: 'admin002',
      name: '김산하',
      lastAccess: '2026-01-19 12:15:30'
    },
    {
      id: 3,
      userId: 'user003',
      name: '강준호',
      lastAccess: '2026-01-18 18:42:12'
    }
  ];
  
  return users;
};

// 기기 임시 데이터 생성 함수
const generateMockDevices = (): Device[] => {
  const devices: Device[] = [
    {
      id: 1,
      deviceName: 'A1B2C3D4E5F6G7H8',
      deviceType: 'Desktop',
      registeredDate: '2026-01-19 14:23:45',
      status: 'active'
    },
    {
      id: 2,
      deviceName: '9Z8Y7X6W5V4U3T2S',
      deviceType: 'Mobile',
      registeredDate: '2026-01-19 12:15:30',
      status: 'active'
    },
    {
      id: 3,
      deviceName: 'K3L4M5N6O7P8Q9R0',
      deviceType: 'Tablet',
      registeredDate: '2026-01-18 18:42:12',
      status: 'inactive'
    }
  ];
  
  return devices;
};

// 임시 데이터
const mockApplicants: Applicant[] = generateMockApplicants();
const mockUsers: User[] = generateMockUsers();
const mockDevices: Device[] = generateMockDevices();

export default function AdminPage() {
  const [activeMenu, setActiveMenu] = React.useState<'applicants' | 'users'>('applicants');
  const [applicants, setApplicants] = React.useState<Applicant[]>(mockApplicants);
  const [users, setUsers] = React.useState<User[]>(mockUsers);
  const [devices, setDevices] = React.useState<Device[]>(mockDevices);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchName, setSearchName] = React.useState('');
  const [searchDate, setSearchDate] = React.useState('');
  const [searchStatus, setSearchStatus] = React.useState<'all' | 'pending' | 'completed'>('all');
  const [tempSearchName, setTempSearchName] = React.useState('');
  const [tempSearchDate, setTempSearchDate] = React.useState('');
  const [tempSearchStatus, setTempSearchStatus] = React.useState<'all' | 'pending' | 'completed'>('all');
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(undefined);
  const [newUserName, setNewUserName] = React.useState('');
  const [newUserId, setNewUserId] = React.useState('');
  const [newDeviceName, setNewDeviceName] = React.useState('');
  const [newDeviceType, setNewDeviceType] = React.useState<'Desktop' | 'Mobile' | 'Tablet'>('Desktop');
  const itemsPerPage = 30;
  const [isDownloadDialogOpen, setIsDownloadDialogOpen] = React.useState(false);
  const [downloadStartIndex, setDownloadStartIndex] = React.useState('1');
  const [downloadEndIndex, setDownloadEndIndex] = React.useState('');

  // 검색 필터링
  const filteredApplicants = React.useMemo(() => {
    return applicants.filter((applicant) => {
      const matchesName = searchName === '' || applicant.name.includes(searchName);
      const matchesDate = searchDate === '' || applicant.dateTime.startsWith(searchDate);
      const matchesStatus = searchStatus === 'all' || applicant.status === searchStatus;
      return matchesName && matchesDate && matchesStatus;
    });
  }, [applicants, searchName, searchDate, searchStatus]);

  // 페이지네이션 계산
  const totalPages = Math.ceil(filteredApplicants.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentApplicants = filteredApplicants.slice(startIndex, endIndex);

  const handleStatusToggle = (id: number) => {
    setApplicants(prevApplicants =>
      prevApplicants.map(applicant =>
        applicant.id === id
          ? { ...applicant, status: applicant.status === 'completed' ? 'pending' : 'completed' }
          : applicant
      )
    );
  };

  const handleUserStatusToggle = (id: number) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === id
          ? { ...user, lastAccess: user.lastAccess === 'active' ? 'inactive' : 'active' }
          : user
      )
    );
  };

  const handleDeleteUser = (id: number) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
  };

  const handleDeleteDevice = (id: number) => {
    setDevices(prevDevices => prevDevices.filter(device => device.id !== id));
  };

  const handleAddUser = () => {
    if (!newUserName.trim() || !newUserId.trim()) {
      alert('이름과 아이디를 모두 입력해주세요.');
      return;
    }

    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

    const newUser: User = {
      id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
      userId: newUserId,
      name: newUserName,
      lastAccess: formattedDate
    };

    setUsers(prevUsers => [...prevUsers, newUser]);
    setNewUserName('');
    setNewUserId('');
  };

  const handleAddDevice = () => {
    if (!newDeviceName.trim()) {
      alert('기기명을 입력해주세요.');
      return;
    }

    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

    const newDevice: Device = {
      id: devices.length > 0 ? Math.max(...devices.map(d => d.id)) + 1 : 1,
      deviceName: newDeviceName,
      deviceType: newDeviceType,
      registeredDate: formattedDate,
      status: 'active'
    };

    setDevices(prevDevices => [...prevDevices, newDevice]);
    setNewDeviceName('');
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetSearch = () => {
    setSearchName('');
    setSearchDate('');
    setSearchStatus('all');
    setTempSearchName('');
    setTempSearchDate('');
    setTempSearchStatus('all');
    setSelectedDate(undefined);
    setCurrentPage(1);
  };

  const handleSearch = () => {
    setSearchName(tempSearchName);
    setSearchDate(tempSearchDate);
    setSearchStatus(tempSearchStatus);
  };

  // 검색어 변경 시 첫 페이지로 이동
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchName, searchDate, searchStatus]);

  // 페이지 버튼 생성
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const handleDownloadApplicants = () => {
    const totalCount = filteredApplicants.length;
    const startNo = parseInt(downloadStartIndex) || totalCount;
    const endNo = downloadEndIndex ? parseInt(downloadEndIndex) : 1;
    
    // No.를 배열 인덱스로 변환 (No.는 역순이므로)
    const startArrayIndex = totalCount - startNo;
    const endArrayIndex = totalCount - endNo + 1;
    
    // 유효성 검사
    if (startNo < 1 || startNo > totalCount || endNo < 1 || endNo > totalCount) {
      alert(`No.는 1부터 ${totalCount}까지 입력 가능합니다.`);
      return;
    }
    
    if (startNo < endNo) {
      alert('시작 No.는 종료 No.보다 크거나 같아야 합니다.');
      return;
    }
    
    const dataToExport = filteredApplicants.slice(startArrayIndex, endArrayIndex).map((applicant, index) => ({
      No: index + 1,
      이름: applicant.name,
      전화번호: applicant.phone,
      차량유형: applicant.vehicleType,
      날짜및시간: applicant.dateTime,
      접속경로: applicant.referrer,
      접속기기: applicant.device,
      처리여부: applicant.status === 'completed' ? '완료' : '미완료'
    }));
    
    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Applicants');
    XLSX.writeFile(workbook, 'applicants.xlsx');
    setIsDownloadDialogOpen(false);
    setDownloadStartIndex('1');
    setDownloadEndIndex('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full bg-gray-50 flex flex-col"
    >
      <AdminHeader activeMenu={activeMenu} onMenuChange={setActiveMenu} />
      
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-[1400px] mx-auto">
          {activeMenu === 'applicants' ? (
            <div>
              {/* 헤더 */}
              <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  신청자 정보
                </h1>
                
                {/* 검색 영역 */}
                <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
                  <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                    <div className="flex-1 w-full md:w-auto">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        이름 검색
                      </label>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="이름을 입력하세요"
                          value={tempSearchName}
                          onChange={(e) => setTempSearchName(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1 w-full md:w-auto">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        날짜 검색
                      </label>
                      <div className="relative">
                        <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="날짜를 선택하세요"
                          value={tempSearchDate}
                          onChange={(e) => setTempSearchDate(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          readOnly
                          onClick={() => setIsCalendarOpen(true)}
                        />
                        <Dialog open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                          <DialogContent className="p-0 overflow-hidden">
                            <DialogHeader className="px-4 py-5">
                              <DialogTitle className="text-lg font-bold text-gray-900">
                                날짜 선택
                              </DialogTitle>
                            </DialogHeader>
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              locale={ko}
                              className="p-4"
                            />
                            <div className="px-4 py-3 bg-gray-50 flex justify-end">
                              <Button
                                onClick={() => {
                                  if (selectedDate) {
                                    // 선택된 날짜에 1일 추가
                                    const nextDay = new Date(selectedDate);
                                    nextDay.setDate(nextDay.getDate() + 1);
                                    setTempSearchDate(nextDay.toISOString().split('T')[0]);
                                  }
                                  setIsCalendarOpen(false);
                                }}
                                className="px-4 py-2 text-sm font-bold rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all active:scale-95"
                              >
                                선택
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                    
                    <div className="flex-1 w-full md:w-auto">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        상태 검색
                      </label>
                      <select
                        value={tempSearchStatus}
                        onChange={(e) => setTempSearchStatus(e.target.value as 'all' | 'pending' | 'completed')}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="all">전체</option>
                        <option value="pending">미완료</option>
                        <option value="completed">완료</option>
                      </select>
                    </div>
                    
                    <div className="w-full md:w-auto md:pt-7 flex gap-2">
                      <Button
                        onClick={handleResetSearch}
                        className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all active:scale-95"
                      >
                        <X className="w-4 h-4" />
                        초기화
                      </Button>
                      <Button
                        onClick={handleSearch}
                        className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all active:scale-95 shadow-sm hover:shadow-md"
                      >
                        <Search className="w-4 h-4" />
                        검색
                      </Button>
                      <Button
                        onClick={() => setIsDownloadDialogOpen(true)}
                        className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all active:scale-95 shadow-sm hover:shadow-md"
                      >
                        <Download className="w-4 h-4" />
                        다운로드
                      </Button>
                    </div>
                  </div>
                  
                  {(searchName || searchDate || searchStatus !== 'all') && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600">
                        검색 결과: <span className="font-bold text-blue-600">{filteredApplicants.length}명</span>
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* 테이블 - 데스크톱 */}
              <div className="hidden lg:block bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">No.</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">이름</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">전화번호</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">차량 유형</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">날짜 및 시간</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">접속 경로</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">접속 기기</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">처리여부</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {currentApplicants.map((applicant, index) => (
                      <tr key={applicant.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                          {filteredApplicants.length - (currentPage - 1) * itemsPerPage - index}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">{applicant.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{applicant.phone}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{applicant.vehicleType}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{applicant.dateTime}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{applicant.referrer}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{applicant.device}</td>
                        <td className="px-6 py-4">
                          <Button
                            onClick={() => handleStatusToggle(applicant.id)}
                            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg shadow-sm transition-all hover:shadow-md active:scale-95 border ${
                              applicant.status === 'completed'
                                ? 'bg-green-600 text-white hover:bg-green-700 border-green-600'
                                : 'bg-yellow-500 text-white hover:bg-yellow-600 border-yellow-500'
                            }`}
                          >
                            {applicant.status === 'completed' ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                완료
                              </>
                            ) : (
                              <>
                                <Clock className="w-3.5 h-3.5" />
                                미완료
                              </>
                            )}
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 카드 - 모바일/태블릿 */}
              <div className="lg:hidden space-y-4">
                {currentApplicants.map((applicant, index) => (
                  <div key={applicant.id} className="bg-white rounded-xl shadow-sm p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-sm font-bold text-blue-700">
                            {filteredApplicants.length - (currentPage - 1) * itemsPerPage - index}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{applicant.name}</h3>
                          <p className="text-sm text-gray-600">{applicant.phone}</p>
                        </div>
                      </div>
                      <Button
                        onClick={() => handleStatusToggle(applicant.id)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                          applicant.status === 'completed'
                            ? 'bg-green-100 text-green-700 hover:bg-green-200'
                            : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                        }`}
                      >
                        {applicant.status === 'completed' ? '완료' : '미완료'}
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-500">차량:</span>
                        <span className="ml-2 text-gray-900">{applicant.vehicleType}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">기기:</span>
                        <span className="ml-2 text-gray-900">{applicant.device}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-gray-500">접속 경로:</span>
                        <span className="ml-2 text-gray-900">{applicant.referrer}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-gray-500">신청일시:</span>
                        <span className="ml-2 text-gray-900">{applicant.dateTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 페이지네이션 */}
              <div className="flex justify-center mt-8 mb-16">
                <nav className="inline-flex -space-x-px">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={`px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 ${
                      currentPage === 1 ? 'pointer-events-none opacity-50' : ''
                    }`}
                    disabled={currentPage === 1}
                  >
                    이전
                  </button>
                  {getPageNumbers().map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(typeof page === 'number' ? page : currentPage)}
                      className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                        typeof page === 'number' && page === currentPage ? 'bg-gray-200 text-gray-900' : ''
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={`px-3 py-2 mr-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 ${
                      currentPage === totalPages ? 'pointer-events-none opacity-50' : ''
                    }`}
                    disabled={currentPage === totalPages}
                  >
                    다음
                  </button>
                </nav>
              </div>
            </div>
          ) : (
            <div>
              {/* 헤더 */}
              <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  사용자 관리
                </h1>
              </div>

              {/* 사용자 관리 전체 영역 */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                {/* 테이블 - 데스크톱 */}
                <div className="hidden lg:block overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">No.</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">이름</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">아이디</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">최근 접속시간</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">삭제</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {users.map((user, index) => (
                        <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                            {users.length - index}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">{user.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-700">{user.userId}</td>
                          <td className="px-6 py-4 text-sm text-gray-700">{user.lastAccess}</td>
                          <td className="px-6 py-4">
                            <Button
                              onClick={() => handleDeleteUser(user.id)}
                              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-red-600 text-white hover:bg-red-700 transition-all active:scale-95 shadow-sm hover:shadow-md"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              삭제
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* 카드 - 모바일/태블릿 */}
                <div className="lg:hidden p-4 space-y-4">
                  {users.map((user, index) => (
                    <div key={user.id} className="bg-gray-50 rounded-xl shadow-sm p-4 space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <span className="text-sm font-bold text-blue-700">
                              {users.length - index}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">{user.name}</h3>
                            <p className="text-sm text-gray-600">{user.userId}</p>
                          </div>
                        </div>
                        <Button
                          onClick={() => handleDeleteUser(user.id)}
                          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-red-100 text-red-700 hover:bg-red-200 transition-all"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          삭제
                        </Button>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-gray-500">최근 접속시간:</span>
                          <span className="ml-2 text-gray-900">{user.lastAccess}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 사용자 추가 */}
                <div className="border-t border-gray-200 p-4 md:p-6 bg-gray-50">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    사용자 추가
                  </h2>
                  <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                    <div className="flex-1 w-full md:w-auto">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        이름
                      </label>
                      <input
                        type="text"
                        placeholder="이름을 입력하세요"
                        value={newUserName}
                        onChange={(e) => setNewUserName(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                      />
                    </div>
                    
                    <div className="flex-1 w-full md:w-auto">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        아이디
                      </label>
                      <input
                        type="text"
                        placeholder="아이디를 입력하세요"
                        value={newUserId}
                        onChange={(e) => setNewUserId(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                      />
                    </div>
                    
                    <div className="w-full md:w-auto md:pt-7 flex gap-2">
                      <Button
                        onClick={handleAddUser}
                        className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all active:scale-95 shadow-sm hover:shadow-md"
                      >
                        <User className="w-4 h-4" />
                        사용자 추가
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 등록된 기기 정보 */}
              <div className="mt-16">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  등록된 기기 정보
                </h1>

                {/* 기기 정보 전체 영역 */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-32">
                  {/* 테이블 - 데스크톱 */}
                  <div className="hidden lg:block overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">No.</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">기기명</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">기기 유형</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">등록일시</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">삭제</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {devices.map((device, index) => (
                          <tr key={device.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                              {devices.length - index}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900">{device.deviceName}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{device.deviceType}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{device.registeredDate}</td>
                            <td className="px-6 py-4">
                              <Button
                                onClick={() => handleDeleteDevice(device.id)}
                                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-red-600 text-white hover:bg-red-700 transition-all active:scale-95 shadow-sm hover:shadow-md"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                                삭제
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* 카드 - 모바일/태블릿 */}
                  <div className="lg:hidden p-4 space-y-4">
                    {devices.map((device, index) => (
                      <div key={device.id} className="bg-gray-50 rounded-xl shadow-sm p-4 space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <span className="text-sm font-bold text-blue-700">
                                {devices.length - index}
                              </span>
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-gray-900">{device.deviceName}</h3>
                              <p className="text-sm text-gray-600">{device.deviceType}</p>
                            </div>
                          </div>
                          <Button
                            onClick={() => handleDeleteDevice(device.id)}
                            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-red-100 text-red-700 hover:bg-red-200 transition-all"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            삭제
                          </Button>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="text-gray-500">등록일시:</span>
                            <span className="ml-2 text-gray-900">{device.registeredDate}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 기기 추가 */}
                  <div className="border-t border-gray-200 p-4 md:p-6 bg-gray-50">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      기기 추가
                    </h2>
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                      <div className="flex-1 w-full md:w-auto">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          기기명
                        </label>
                        <input
                          type="text"
                          placeholder="기기명을 입력하세요"
                          value={newDeviceName}
                          onChange={(e) => setNewDeviceName(e.target.value)}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                        />
                      </div>
                      
                      <div className="flex-1 w-full md:w-auto">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          기기 유형
                        </label>
                        <select
                          value={newDeviceType}
                          onChange={(e) => setNewDeviceType(e.target.value as 'Desktop' | 'Mobile' | 'Tablet')}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                        >
                          <option value="Desktop">데스크탑</option>
                          <option value="Mobile">스마트폰</option>
                          <option value="Tablet">태블릿</option>
                        </select>
                      </div>
                      
                      <div className="w-full md:w-auto md:pt-7 flex gap-2">
                        <Button
                          onClick={handleAddDevice}
                          className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all active:scale-95 shadow-sm hover:shadow-md"
                        >
                          <Smartphone className="w-4 h-4" />
                          기기 추가
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* 다운로드 다이얼로그 */}
      <Dialog open={isDownloadDialogOpen} onOpenChange={setIsDownloadDialogOpen}>
        <DialogContent className="p-0 overflow-hidden">
          <DialogHeader className="px-4 py-5">
            <DialogTitle className="text-lg font-bold text-gray-900">
              다운로드 범위 설정
            </DialogTitle>
          </DialogHeader>
          <div className="px-4 py-3 bg-gray-50 flex justify-end">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="flex-1 w-full md:w-auto">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  시작 인덱스
                </label>
                <input
                  type="text"
                  placeholder="시작 인덱스를 입력하세요"
                  value={downloadStartIndex}
                  onChange={(e) => setDownloadStartIndex(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                />
              </div>
              
              <div className="flex-1 w-full md:w-auto">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  종료 인덱스
                </label>
                <input
                  type="text"
                  placeholder="종료 인덱스를 입력하세요"
                  value={downloadEndIndex}
                  onChange={(e) => setDownloadEndIndex(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                />
              </div>
              
              <div className="w-full md:w-auto md:pt-7 flex gap-2">
                <Button
                  onClick={handleDownloadApplicants}
                  className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all active:scale-95 shadow-sm hover:shadow-md"
                >
                  다운로드
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}