"use client"

import { motion } from "motion/react";
import { useState } from "react";
import { Calendar as CalendarIcon, MapPin, Clock, Users as UsersIcon, ChevronLeft, ChevronRight } from "lucide-react";

export function CalendarSection() {
  const today = new Date();
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedYear] = useState(today.getFullYear());

  const events = [
    // 1월
    { date: "2026-01-15", title: "신년 하례회", location: "레이크우드 골프클럽", time: "06:00 AM", participants: 48, type: "regular" },
    { date: "2026-01-25", title: "신년 친선대회", location: "스카이72 골프클럽", time: "07:00 AM", participants: 56, type: "tournament" },
    // 2월
    { date: "2026-02-08", title: "설날 특별 행사", location: "남서울 골프클럽", time: "06:30 AM", participants: 40, type: "tournament" },
    { date: "2026-02-20", title: "정기 월례회", location: "썬밸리 골프클럽", time: "06:00 AM", participants: 32, type: "regular" },
    // 3월
    { date: "2026-03-05", title: "삼일절 기념 라운딩", location: "블랙스톤 골프클럽", time: "07:00 AM", participants: 28, type: "casual" },
    { date: "2026-03-15", title: "봄맞이 친선대회", location: "베어크리크 골프클럽", time: "06:00 AM", participants: 64, type: "tournament" },
    { date: "2026-03-22", title: "정기 월례회", location: "오크밸리 골프클럽", time: "06:30 AM", participants: 36, type: "regular" },
    // 4월
    { date: "2026-04-05", title: "식목일 기념 행사", location: "비발디파크 골프클럽", time: "06:00 AM", participants: 44, type: "casual" },
    { date: "2026-04-18", title: "정기 월례회", location: "레이크우드 골프클럽", time: "06:00 AM", participants: 32, type: "regular" },
    { date: "2026-04-26", title: "봄꽃 라운딩", location: "용평 골프클럽", time: "07:00 AM", participants: 52, type: "casual" },
    // 5월
    { date: "2026-05-05", title: "어린이날 가족 행사", location: "엘리시안 골프클럽", time: "08:00 AM", participants: 60, type: "tournament" },
    { date: "2026-05-16", title: "정기 월례회", location: "썬밸리 골프클럽", time: "06:00 AM", participants: 36, type: "regular" },
    { date: "2026-05-25", title: "회장배 골프대회", location: "블랙스톤 골프클럽", time: "06:00 AM", participants: 72, type: "tournament" },
    // 6월
    { date: "2026-06-06", title: "현충일 추모 라운딩", location: "파인비치 골프클럽", time: "06:30 AM", participants: 24, type: "casual" },
    { date: "2026-06-14", title: "정기 월례회", location: "남서울 골프클럽", time: "06:00 AM", participants: 32, type: "regular" },
    { date: "2026-06-28", title: "하계 친선대회", location: "스카이72 골프클럽", time: "05:30 AM", participants: 68, type: "tournament" },
    // 7월
    { date: "2026-07-11", title: "여름 야간 라운딩", location: "레이크우드 골프클럽", time: "05:00 PM", participants: 40, type: "casual" },
    { date: "2026-07-19", title: "정기 월례회", location: "베어크리크 골프클럽", time: "05:30 AM", participants: 28, type: "regular" },
    { date: "2026-07-26", title: "한여름 나이트 골프", location: "오크밸리 골프클럽", time: "05:30 PM", participants: 36, type: "casual" },
    // 8월
    { date: "2026-08-08", title: "휴가철 특별 라운딩", location: "비발디파크 골프클럽", time: "06:00 AM", participants: 32, type: "casual" },
    { date: "2026-08-15", title: "광복절 기념 대회", location: "용평 골프클럽", time: "06:30 AM", participants: 56, type: "tournament" },
    { date: "2026-08-22", title: "정기 월례회", location: "엘리시안 골프클럽", time: "06:00 AM", participants: 32, type: "regular" },
    // 9월
    { date: "2026-09-06", title: "추석 특별 행사", location: "썬밸리 골프클럽", time: "07:00 AM", participants: 48, type: "tournament" },
    { date: "2026-09-19", title: "정기 월례회", location: "블랙스톤 골프클럽", time: "06:00 AM", participants: 36, type: "regular" },
    { date: "2026-09-27", title: "가을 라운딩", location: "파인비치 골프클럽", time: "06:30 AM", participants: 40, type: "casual" },
    // 10월
    { date: "2026-10-03", title: "개천절 기념 라운딩", location: "남서울 골프클럽", time: "07:00 AM", participants: 32, type: "casual" },
    { date: "2026-10-17", title: "정기 월례회", location: "스카이72 골프클럽", time: "06:00 AM", participants: 32, type: "regular" },
    { date: "2026-10-24", title: "가을 정기대회", location: "레이크우드 골프클럽", time: "06:30 AM", participants: 64, type: "tournament" },
    // 11월
    { date: "2026-11-07", title: "단풍 라운딩", location: "베어크리크 골프클럽", time: "07:00 AM", participants: 36, type: "casual" },
    { date: "2026-11-15", title: "정기 월례회", location: "오크밸리 골프클럽", time: "06:30 AM", participants: 32, type: "regular" },
    { date: "2026-11-28", title: "송년 대비 친선대회", location: "비발디파크 골프클럽", time: "07:00 AM", participants: 52, type: "tournament" },
    // 12월
    { date: "2026-12-12", title: "정기 월례회", location: "용평 골프클럽", time: "07:00 AM", participants: 28, type: "regular" },
    { date: "2026-12-20", title: "연말 시상식 및 대회", location: "엘리시안 골프클럽", time: "06:30 AM", participants: 80, type: "tournament" },
    { date: "2026-12-27", title: "송년 골프 모임", location: "썬밸리 골프클럽", time: "07:00 AM", participants: 44, type: "casual" },
  ];

  const getEventTypeStyle = (type: string) => {
    switch (type) {
      case "tournament":
        return "from-[var(--accent-gold)] to-[var(--accent-gold-dark)]";
      case "regular":
        return "from-[var(--accent-green)] to-[var(--accent-green-dark)]";
      default:
        return "from-[var(--accent-blue)] to-[var(--accent-blue-dark)]";
    }
  };

  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case "tournament":
        return "대회";
      case "regular":
        return "월례회";
      default:
        return "라운딩";
    }
  };

  const monthNames = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    setSelectedMonth((prev) => (prev === 0 ? 11 : prev - 1));
  };

  const handleNextMonth = () => {
    setSelectedMonth((prev) => (prev === 11 ? 0 : prev + 1));
  };

  const daysInMonth = getDaysInMonth(selectedYear, selectedMonth);
  const firstDayOfMonth = getFirstDayOfMonth(selectedYear, selectedMonth);
  const monthEvents = events.filter((e) => {
    const eventDate = new Date(e.date);
    return eventDate.getMonth() === selectedMonth && eventDate.getFullYear() === selectedYear;
  });

  return (
    <div className="min-h-screen py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="font-display font-bold text-4xl lg:text-6xl text-[var(--text-primary)] mb-6">
            일정 캘린더
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent mx-auto mb-6"></div>
          <p className="font-body text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            마포구 골프협회의 다가오는 행사와 대회 일정을 확인하세요.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[var(--bg-card)] rounded-3xl p-8 border border-[var(--border-gold)]/30"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display font-semibold text-3xl text-[var(--text-primary)]">
                {selectedYear}년 {monthNames[selectedMonth]}
              </h2>
              <div className="flex gap-2">
                {selectedMonth > 0 && (
                  <button
                    onClick={handlePrevMonth}
                    className="p-2 hover:bg-[var(--accent-gold)]/10 rounded-lg transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-[var(--text-secondary)]" />
                  </button>
                )}
                {selectedMonth < 11 && (
                  <button
                    onClick={handleNextMonth}
                    className="p-2 hover:bg-[var(--accent-gold)]/10 rounded-lg transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-[var(--text-secondary)]" />
                  </button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-4">
              {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
                <div
                  key={day}
                  className="text-center font-body font-semibold text-sm text-[var(--text-secondary)] py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {[...Array(firstDayOfMonth)].map((_, i) => (
                <div key={`empty-${i}`} className="aspect-square"></div>
              ))}
              {[...Array(daysInMonth)].map((_, i) => {
                const day = i + 1;
                const dateStr = `${selectedYear}-${String(selectedMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                const hasEvent = events.some((e) => e.date === dateStr);
                const isToday = day === today.getDate() && selectedMonth === today.getMonth() && selectedYear === today.getFullYear();

                return (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`aspect-square rounded-xl font-body font-medium transition-all duration-300 relative ${
                      isToday
                        ? "bg-gradient-to-br from-[var(--accent-gold)] to-[var(--accent-gold-dark)] text-[var(--text-inverse)] shadow-lg"
                        : hasEvent
                        ? "bg-[var(--accent-green)]/20 text-[var(--text-primary)] hover:bg-[var(--accent-green)]/30"
                        : "text-[var(--text-secondary)] hover:bg-[var(--bg-hover)]"
                    }`}
                  >
                    {day}
                    {hasEvent && !isToday && (
                      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[var(--accent-gold)] rounded-full"></div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="font-display font-semibold text-3xl text-[var(--text-primary)] mb-6">
              {monthNames[selectedMonth]} 일정
            </h2>
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
              {monthEvents.length > 0 ? monthEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="bg-[var(--bg-card)] rounded-2xl p-6 border border-[var(--border-gold)]/30 hover:border-[var(--accent-gold)] transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${getEventTypeStyle(event.type)} flex flex-col items-center justify-center text-[var(--text-inverse)] flex-shrink-0`}>
                      <div className="font-display font-bold text-2xl">
                        {new Date(event.date).getDate()}
                      </div>
                      <div className="font-body text-xs opacity-90">
                        {new Date(event.date).toLocaleDateString("ko-KR", { month: "short" })}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-display font-semibold text-xl text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors">
                          {event.title}
                        </h3>
                        <span className={`px-2 py-1 bg-gradient-to-r ${getEventTypeStyle(event.type)} text-[var(--text-inverse)] text-xs font-body font-semibold rounded-full`}>
                          {getEventTypeLabel(event.type)}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2 font-body text-sm text-[var(--text-secondary)]">
                          <MapPin size={14} />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2 font-body text-sm text-[var(--text-secondary)]">
                          <Clock size={14} />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2 font-body text-sm text-[var(--text-secondary)]">
                          <UsersIcon size={14} />
                          {event.participants}명 참여 예정
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )) : (
                <div className="text-center py-12">
                  <p className="font-body text-[var(--text-secondary)]">이번 달에 예정된 행사가 없습니다.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            { icon: CalendarIcon, title: "정기 월례회", description: "매월 정기적으로 개최" },
            { icon: UsersIcon, title: "친선 대회", description: "분기별 특별 이벤트" },
            { icon: MapPin, title: "다양한 코스", description: "수도권 우수 골프장" },
          ].map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[var(--accent-green)]/10 to-[var(--accent-gold)]/10 rounded-2xl p-6 text-center border border-[var(--border-gold)]/30"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-gold)] to-[var(--accent-gold-dark)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-[var(--text-inverse)]" size={24} />
                </div>
                <h3 className="font-display font-semibold text-xl text-[var(--text-primary)] mb-2">
                  {info.title}
                </h3>
                <p className="font-body text-[var(--text-secondary)]">{info.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}