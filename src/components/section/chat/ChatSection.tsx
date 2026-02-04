"use client"

import Link from "next/link";
import { useState } from "react";
import { Search, Phone, Video, MoreVertical, Paperclip, Smile, Send, Menu, ArrowLeft } from "lucide-react";

interface ChatRoom {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unread?: number;
  initials: string;
  color: string;
}

interface Message {
  id: string;
  sender: string;
  content: string;
  time: string;
  isMine: boolean;
  type: 'text' | 'image';
  imageUrl?: string;
}

const onMenuClick = () => {
  //
}

export function ChatSection() {
	const [selectedChat, setSelectedChat] = useState('chat1');
  const [messageInput, setMessageInput] = useState('');
  const [showChatContent, setShowChatContent] = useState(false); // 모바일에서 채팅 내용 표시 여부

  const chatRooms: ChatRoom[] = [
    { id: 'chat1', name: '김지민 과장', lastMessage: '프로젝트 진행 상황 공유드립니다', time: '오전 10시', initials: '김', color: '#243c84' },
    { id: 'chat2', name: '박지수 대리', lastMessage: '네 감사합니다', time: '오전 9시', initials: '박', color: '#1e40af' },
    { id: 'chat3', name: '최인 차장님', lastMessage: '알겠습니다', time: '오후 4시', unread: 2, initials: '최', color: '#2563eb' },
    { id: 'chat4', name: '이지혜 팀장', lastMessage: '수고하셨습니다', time: '오전 11시', initials: '이', color: '#3b82f6' },
    { id: 'chat5', name: '정민철 부장님', lastMessage: '회의 일정 조율', time: '어제', initials: '정', color: '#0891b2' },
    { id: 'chat6', name: '강민수 대리', lastMessage: '자료 전달드렸습니다', time: '어제', initials: '강', color: '#0ea5e9' },
    { id: 'chat7', name: '윤서연 과장', lastMessage: '네 확인했습니다', time: '2일 전', initials: '윤', color: '#06b6d4' },
    { id: 'chat8', name: '송현우 차장', lastMessage: '내일 오전 회의', time: '2일 전', initials: '송', color: '#1d4ed8' },    
  ];

  const messages: Record<string, Message[]> = {
    chat1: [
      { id: '1', sender: '김지민 과장', content: '내일 오전 2시30분터 5시 사이에 예방하기 위해 설치하겠습니다.', time: '오전 9:24', isMine: false, type: 'text' },
      { id: '2', sender: '김지민 과장', content: '내일 오전 2시30분터 5시 사이에 예방하기 위해 설치하겠습니다.', time: '오전 9:30', isMine: false, type: 'text' },
      { id: '3', sender: '나', content: '이번에 완성된 대시보드 공유 드립니다', time: '오전 9:32', isMine: true, type: 'text' },
      { id: '4', sender: '김지민 과장', content: '14-16세와 현장가를 참고하세요.', time: '오전 9:34', isMine: false, type: 'text' },
      { id: '5', sender: '나', content: '고객은 일반 고객에서 새로운 참고 자료를 요구합니다', time: '오전 9:36', isMine: true, type: 'text' },
      { id: '6', sender: '김지민 과장', content: '이미지를 업로드 주셨습니다.', time: '오전 9:38', isMine: false, type: 'text' },
      { id: '7', sender: '나', content: '테스트 메시지입니다. 스크롤이 생기는지 확인하기 위한 메시지입니다.', time: '오전 9:40', isMine: true, type: 'text' },
      { id: '8', sender: '김지민 과장', content: '네, 확인했습니다. 추가 자료가 필요하시면 말씀해 주세요.', time: '오전 9:42', isMine: false, type: 'text' },
      { id: '9', sender: '나', content: '다음 주 월요일까지 완료 가능할까요?', time: '오전 9:45', isMine: true, type: 'text' },
      { id: '10', sender: '김지민 과장', content: '네, 충분히 가능합니다. 중간 보고는 목요일에 드리겠습니다.', time: '오전 9:47', isMine: false, type: 'text' },
      { id: '11', sender: '나', content: '좋습니다. 그럼 목요일에 중간 점검 미팅을 잡을까요?', time: '오전 9:50', isMine: true, type: 'text' },
      { id: '12', sender: '김지민 과장', content: '네, 오후 2시는 어떠신가요?', time: '오전 9:52', isMine: false, type: 'text' },
      { id: '13', sender: '나', content: '완벽합니다. 회의실 예약해 두겠습니다.', time: '오전 9:54', isMine: true, type: 'text' },
      { id: '14', sender: '김지민 과장', content: '감사합니다. 미팅 전까지 자료 준비해서 공유드리겠습니다.', time: '오전 9:56', isMine: false, type: 'text' },
      { id: '15', sender: '나', content: '혹시 추가로 필요한 리소스가 있으신가요?', time: '오전 9:58', isMine: true, type: 'text' },
      { id: '16', sender: '김지민 과장', content: '디자인팀의 검토가 필요할 것 같습니다. 협조 요청 가능할까요?', time: '오전 10:00', isMine: false, type: 'text' },
      { id: '17', sender: '나', content: '물론입니다. 이따가 디자인팀에 연락해서 일정 조율해 보겠습니다.', time: '오전 10:02', isMine: true, type: 'text' },
      { id: '18', sender: '김지민 과장', content: '정말 감사합니다. 프로젝트가 순조롭게 진행되고 있습니다.', time: '오전 10:04', isMine: false, type: 'text' },
      { id: '19', sender: '나', content: '다들 수고 많으십니다. 좋은 결과 기대하겠습니다!', time: '오전 10:06', isMine: true, type: 'text' },
      { id: '20', sender: '김지민 과장', content: '네, 최선을 다하겠습니다!', time: '오전 10:08', isMine: false, type: 'text' },
    ],
    chat2: [
      { id: '1', sender: '박지수 대리', content: '안녕하세요!', time: '오전 9:00', isMine: false, type: 'text' },
      { id: '2', sender: '나', content: '네 안녕하세요', time: '오전 9:01', isMine: true, type: 'text' },
    ],
    chat3: [
      { id: '1', sender: '최인 차장님', content: '오늘 회의 자료 준비 부탁드립니다', time: '오후 4:00', isMine: false, type: 'text' },
      { id: '2', sender: '최인 차장님', content: '긴급합니다', time: '오후 4:01', isMine: false, type: 'text' },
    ],
  };

  const currentMessages = messages[selectedChat] || [];
  const currentChat = chatRooms.find(chat => chat.id === selectedChat);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // 메시지 전송 로직
      setMessageInput('');
    }
  };

	return (
		<div className="flex w-full h-[calc(100vh-72px-54px)] md:h-[calc(100vh-72px-54px)] bg-gray-50 dark:bg-slate-900">
      {/* 채팅방 목록 */}
      <div className={`w-full md:w-80 border-r flex flex-col bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 ${showChatContent ? 'hidden md:flex' : 'flex'}`}>
        {/* 헤더 */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between flex-shrink-0">
          <button className="p-2 rounded-lg transition-colors md:hidden text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={onMenuClick} >
            <Menu size={20} />
          </button>
          <h2 className="text-[14px] font-semibold text-gray-900 dark:text-gray-100">채팅</h2>
          <button className="p-2">
            <MoreVertical size={20} className="text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* 검색 */}
        <div className="p-3 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700">
            <Search size={16} className="text-gray-500 dark:text-gray-400" />
            <input className="flex-1 bg-transparent border-none outline-none text-[13px] text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
              type="text"
              placeholder="검색..." />
          </div>
        </div>

        {/* 채팅방 리스트 */}
        <div className="flex-1 overflow-y-auto">
          {chatRooms.map((room) => (
            <div className={`flex items-center gap-3 p-4 cursor-pointer transition-colors border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 ${selectedChat === room.id ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
              key={room.id}
              onClick={() => {
                setSelectedChat(room.id);
                setShowChatContent(true);
              }}>
              {/* 프로필 이니셜 */}
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0"
                style={{ backgroundColor: room.color }}>
                {room.initials}
              </div>

              {/* 채팅 정보 */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-[14px] text-gray-900 dark:text-gray-100">
                    {room.name}
                  </span>
                  <span className="text-[11px] text-gray-500 dark:text-gray-400">
                    {room.time}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[14px] truncate text-gray-500 dark:text-gray-400">
                    {room.lastMessage}
                  </p>
                  {room.unread && (
                    <span className="ml-2 px-2 py-0.5 rounded-full text-[11px] font-semibold text-white flex-shrink-0 bg-[#d8442c]">
                      {room.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 채팅 내용 */}
      <div className={`flex-1 flex flex-col ${showChatContent ? 'flex' : 'hidden md:flex'}`}>
        {/* 채팅 헤더 */}
        <div className="h-14 md:h-16 px-4 md:px-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between bg-white dark:bg-gray-800">
          <div className="flex items-center gap-2 md:gap-3">
            {/* 모바일 뒤로가기 버튼 */}
            <button className="md:hidden p-2 rounded-lg transition-colors text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setShowChatContent(false)} >
              <ArrowLeft size={20} />
            </button>
            {currentChat && (
              <>
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm md:text-base"
                  style={{ backgroundColor: currentChat.color }}>
                  {currentChat.initials}
                </div>
                <span className="text-[13px] md:text-[14px] font-medium text-gray-900 dark:text-gray-100">
                  {currentChat.name}
                </span>
              </>
            )}
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <button className="p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-700">
              <Phone size={18} className="md:w-5 md:h-5 text-gray-500 dark:text-gray-400" />
            </button>
            <button className="p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-700">
              <Video size={18} className="md:w-5 md:h-5 text-gray-500 dark:text-gray-400" />
            </button>
            <button className="p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-700">
              <MoreVertical size={18} className="md:w-5 md:h-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
        </div>

        {/* 메시지 영역 */}
        <div className="flex-1 overflow-y-auto px-4 md:px-6 py-4 md:py-6 bg-gray-100 dark:bg-gray-900">
          <div className="space-y-3 md:space-y-4">
            {currentMessages.map((message) => (
              <div className={`flex gap-3 ${message.isMine ? 'flex-row-reverse' : ''}`}
                key={message.id}>
                {!message.isMine && currentChat && (
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0"
                    style={{ backgroundColor: currentChat.color }}>
                    {currentChat.initials}
                  </div>
                )}
                <div className={`flex flex-col ${message.isMine ? 'items-end' : 'items-start'}`}>
                  {!message.isMine && (
                    <span className="text-[11px] mb-1 px-1 text-gray-500 dark:text-gray-400">
                      {message.sender}
                    </span>
                  )}
                  <div className={`px-4 py-2 rounded-lg max-w-md text-[14px] ${message.isMine ? 'bg-[#243c84] text-white' : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100'}`}>
                    {message.content}
                  </div>
                  <span className="text-[11px] mt-1 px-1 text-gray-400 dark:text-gray-500">
                    {message.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 메시지 입력 */}
        <div className="p-2.5 border-t border-gray-200 dark:border-slate-800 bg-slate-200 dark:bg-slate-900 flex-shrink-0">
          <div className="flex items-center gap-2 md:gap-3">
            <button className="hidden md:block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <Paperclip size={20} className="text-gray-500 dark:text-gray-400" />
            </button>
            <button className="hidden md:block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <Smile size={20} className="text-gray-500 dark:text-gray-400" />
            </button>
            <input className="flex-1 px-3 md:px-4 py-2 rounded-lg border outline-none text-[13px] md:text-[14px] bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="메시지를 입력하세요"/>
            <button className="p-2 rounded-lg bg-[#243c84]"
              onClick={handleSendMessage}>
              <Send size={18} className="md:w-5 md:h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
	);
}