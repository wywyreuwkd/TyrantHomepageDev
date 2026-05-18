"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import logoImage from "@/public/main_logo.png";

export function Header() {
  const pathName = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathName]);

  const navItems = [
    { path: "/", label: "협회소개" },
    { path: "/gallery", label: "포토갤러리" },
    { path: "/calendar", label: "일정캘린더" },
    { path: "/officers", label: "운영진소개" },
    { path: "/partners", label: "참여협력사" },
  ];

  return (
    <div className="absolute min-h-screen bg-[var(--bg-main)]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-nav)]/95 backdrop-blur-md border-b border-[var(--border-gold)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src={logoImage.src}
                alt="마포구 골프협회 로고"
                className="h-12 w-auto transform group-hover:scale-105 transition-transform duration-300"
              />
              <div>
                <h1 className="font-display font-semibold text-xl text-[var(--text-primary)] tracking-tight">
                  골프협회
                </h1>
                <p className="font-body text-xs text-[var(--text-secondary)]">Golf Association</p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathName === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="relative px-6 py-3 font-body font-medium text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors duration-300"
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-gold-dark)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 z-40 bg-[var(--bg-nav)]/98 backdrop-blur-lg border-b border-[var(--border-gold)] lg:hidden"
          >
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item, index) => {
                const isActive = pathName === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg font-body font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-[var(--accent-gold)] text-[var(--text-inverse)]"
                          : "text-[var(--text-primary)] hover:bg-[var(--bg-card)] hover:text-[var(--accent-gold)]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
  </div>
    )
}