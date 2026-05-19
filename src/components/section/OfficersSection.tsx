"use client"

import { motion } from "motion/react";
import { Mail, Phone } from "lucide-react";

export function OfficersSection() {
  const officers = [
    {
      name: "고정무",
      position: "회장",
      description: "마포구 골프협회를 이끌며 지역 골프 문화 발전에 힘쓰고 있습니다.",
      email: "",
      phone: "",
    },
    // {
    //   name: "이수진",
    //   position: "부회장",
    //   description: "회원 복지 및 대외 협력 업무를 담당하고 있습니다.",
    //   email: "vice@mapogolf.or.kr",
    //   phone: "010-2345-6789",
    // },    
    {
      name: "이수영",
      position: "사무국장",
      description: "일상적인 협회 업무 및 회원 관리를 담당합니다.",
      email: "",
      phone: "",
    },
    {
      name: "문대근",
      position: "재무국장",
      description: "협회 운영 및 재정 관리를 책임지고 있습니다.",
      email: "",
      phone: "",
    },
    {
      name: "박윤규",
      position: "경기위원장",
      description: "각종 대회 기획 및 운영을 총괄하고 있습니다.",
      email: "",
      phone: "",
    },
    // {
    //   name: "강미래",
    //   position: "홍보이사",
    //   description: "협회 홍보 및 대외 커뮤니케이션을 담당합니다.",
    //   email: "pr@mapogolf.or.kr",
    //   phone: "010-6789-0123",
    // },
  ];

  const joinClick = () => {
    alert("카카오톡 또는 전화 연결 되도록 구현 예정 입니다.")
  }

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
            운영진 소개
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent mx-auto mb-6"></div>
          <p className="font-body text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            마포구 골프협회를 이끌어가는 운영진을 소개합니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {officers.map((officer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-gold)]/20 to-[var(--accent-green)]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="relative bg-[var(--bg-card)] rounded-3xl overflow-hidden border border-[var(--border-gold)]/30 hover:border-[var(--accent-gold)] transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-[var(--accent-green)] to-[var(--accent-green-dark)] relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-gold)] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--accent-gold-dark)] rounded-full blur-3xl"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--bg-card)] to-transparent"></div>
                </div>

                <div className="p-8 -mt-12 relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-[var(--accent-gold)] to-[var(--accent-gold-dark)] rounded-full mb-4 flex items-center justify-center shadow-2xl ring-4 ring-[var(--bg-card)]">
                    <span className="font-display font-bold text-3xl text-[var(--text-inverse)]">
                      {officer.name.charAt(0)}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-display font-semibold text-3xl text-[var(--text-primary)] mb-1">
                      {officer.name}
                    </h3>
                    <div className="inline-block px-4 py-1 bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-gold-dark)] text-[var(--text-inverse)] font-body font-semibold text-sm rounded-full">
                      {officer.position}
                    </div>
                  </div>

                  <p className="font-body text-[var(--text-secondary)] leading-relaxed mb-6">
                    {officer.description}
                  </p>

                  <div className="space-y-2 border-t border-[var(--border-gold)]/30 pt-4">
                    <a
                      href={`mailto:${officer.email}`}
                      className="flex items-center gap-2 font-body text-sm text-[var(--text-secondary)] hover:text-[var(--accent-gold)] transition-colors duration-300"
                    >
                      <Mail size={16} />
                      {officer.email}
                    </a>
                    <a
                      href={`tel:${officer.phone}`}
                      className="flex items-center gap-2 font-body text-sm text-[var(--text-secondary)] hover:text-[var(--accent-gold)] transition-colors duration-300"
                    >
                      <Phone size={16} />
                      {officer.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 bg-gradient-to-r from-[var(--accent-green)]/10 to-[var(--accent-gold)]/10 rounded-3xl p-12 text-center border border-[var(--border-gold)]/30"
        >
          <h2 className="font-display font-semibold text-4xl text-[var(--text-primary)] mb-4">
            함께하고 싶으신가요?
          </h2>
          <p className="font-body text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            마포구 골프협회는 열정적인 골퍼들을 언제나 환영합니다.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-gold-dark)] text-[var(--text-inverse)] font-body font-semibold text-lg rounded-full shadow-2xl hover:shadow-[var(--accent-gold)]/50 transition-all duration-300"
            onClick={joinClick}
          >
            가입 문의하기
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
