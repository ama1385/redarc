"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { StoreBrand } from "@/components/StoreBrand";
import Link from "next/link";
import { ChevronLeft, Copy, X } from "lucide-react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="flex min-h-screen flex-row-reverse">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-0 right-0 h-full w-[280px] shadow-2xl animate-slide-in-right overflow-auto"
            style={{ background: "var(--sidebar-bg)" }}>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 left-4 p-2 transition-colors z-10"
              style={{ color: "var(--text-secondary)" }}
              aria-label="إغلاق القائمة"
            >
              <X className="w-6 h-6" />
            </button>
            <div onClick={() => setIsMobileMenuOpen(false)}>
              <Sidebar />
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col min-w-0">
        <Header onMenuClick={() => setIsMobileMenuOpen(true)} />

        <main className="flex-1 min-w-0 overflow-auto">
          {/* Hero Banner */}
          <div className="relative w-full h-[280px] sm:h-[350px] overflow-hidden bg-gradient-to-br from-[#0f0a15] via-[#1a1225] to-[#0f0a15]">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(147,51,234,0.22),transparent_65%)]"
              aria-hidden
            />
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="text-center">
                <div className="flex justify-center mb-4 sm:mb-5 hero-text">
                  <StoreBrand variant="hero" />
                </div>
                <h2
                  className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 hero-text-delay"
                  style={{ color: "var(--accent-text)" }}
                >
                  ديمان خيارك الاول
                </h2>
                <div className="space-y-2 text-sm sm:text-base opacity-95" style={{ color: "#e8e0f0" }}>
                  <p className="flex items-center justify-center gap-2">
                    <span style={{ color: "var(--accent-text)" }} aria-hidden>⭐</span>
                    <span>
                      مو اليوم يدينًا من <strong>2016</strong> وحنا معكم
                    </span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span style={{ color: "var(--accent-text)" }} aria-hidden>
                      💜
                    </span>
                    <span>+112 ألف طلب موثّق</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span>👤</span>
                    <span>انضم وخلك جزء منّا</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
            {/* Page Header */}
            <div className="flex items-center justify-between gap-3 mb-4 sm:mb-6">
              <StoreBrand variant="header" className="hover:bg-transparent" />
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded-lg transition-colors hover:border-[color:var(--accent-color)]"
                style={{ color: "var(--text-muted)", borderColor: "var(--border-color)" }}>
                <Copy className="w-4 h-4" />
                <span className="hidden sm:inline">Copy</span>
              </button>
            </div>

            {/* Main Content */}
            <section className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
                <a href="#deman-store" className="transition-colors hover:text-[color:var(--accent-text)]" style={{ color: "var(--text-muted)" }}>#</a>
                deman.store
              </h2>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                ستجد في هذا التوثيق شرحًا تفصيليًا لكيفية استخدام منتجاتنا، بالإضافة إلى حلول للمشاكل الشائعة وخطوات استكشاف الأخطاء.
              </p>
            </section>

            {/* Navigation */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8" style={{ borderTop: "1px solid var(--border-color)" }}>
              <Link
                href="/alasasyat/mttlbat-alnzam"
                className="flex items-center gap-3 p-4 rounded-xl border transition-colors group hover:no-underline w-full card-hover"
                style={{ background: "var(--bg-secondary)", borderColor: "var(--border-color)" }}
              >
                <div className="flex-1 text-left">
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>Next</div>
                  <div className="text-sm group-hover:text-[color:var(--accent-text)] transition-colors" style={{ color: "var(--text-primary)" }}>الأساسيات</div>
                </div>
                <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" style={{ color: "var(--text-muted)" }} />
              </Link>
            </div>

            {/* Last Updated */}
            <p className="text-center text-sm mt-6 sm:mt-8" style={{ color: "var(--text-muted)" }}>
              Last updated 4 months ago
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
