"use client";

import { ReactNode, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { ChevronLeft, Copy, List, X, CheckCircle } from "lucide-react";
import Link from "next/link";
import { markPageAsRead, isPageRead } from "@/lib/readPages";

interface DocLayoutProps {
  children: ReactNode;
  title: string;
  titleIcon?: ReactNode;
  description?: string;
  breadcrumbs: { label: string; href: string }[];
  tocItems?: { id: string; title: string; level: number }[];
  prevPage?: { title: string; href: string };
  nextPage?: { title: string; href: string };
  lastUpdated?: string;
}

export default function DocLayout({
  children,
  title,
  titleIcon,
  description,
  breadcrumbs,
  tocItems = [],
  prevPage,
  nextPage,
  lastUpdated = "8 months ago",
}: DocLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [pageRead, setPageRead] = useState(false);
  const pathname = usePathname();

  // Mark page as read when it loads
  useEffect(() => {
    if (pathname) {
      markPageAsRead(pathname);
      setPageRead(isPageRead(pathname));
    }
  }, [pathname]);

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

        <div className="flex-1 flex flex-row-reverse">
          {/* Table of Contents - Desktop only */}
          {tocItems.length > 0 && (
            <div className="hidden xl:block w-[220px] p-6 border-l sticky top-14 h-[calc(100vh-3.5rem)] overflow-auto shrink-0"
              style={{ borderColor: "var(--border-color)" }}>
              <nav className="text-sm">
                <ul className="space-y-2 border-r pr-4" style={{ borderColor: "var(--border-color)" }}>
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={`block transition-colors leading-relaxed hover:text-[color:var(--accent-text)] ${
                          item.level === 2 ? "text-xs pr-3" : "font-medium"
                        }`}
                        style={{ color: "var(--text-muted)" }}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}

          {/* Main Content */}
          <main className="flex-1 min-w-0 overflow-auto">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-sm mb-4 sm:mb-6 flex-wrap"
                style={{ color: "var(--text-muted)" }}>
                {breadcrumbs.map((crumb, index) => (
                  <div key={crumb.href} className="flex items-center gap-2">
                    {index > 0 && <ChevronLeft className="w-4 h-4" />}
                    <Link href={crumb.href} className="flex items-center gap-1 hover:text-[color:var(--accent-text)]">
                      {index === 0 && (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2L2 7l10 5 10-5-10-5z" />
                          <path d="M2 17l10 5 10-5" />
                          <path d="M2 12l10 5 10-5" />
                        </svg>
                      )}
                      <span>{crumb.label}</span>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Page Actions */}
              <div className="flex items-center gap-2 justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded-lg transition-colors hover:border-[color:var(--accent-color)]"
                    style={{ color: "var(--text-muted)", borderColor: "var(--border-color)" }}>
                    <Copy className="w-4 h-4" />
                    <span className="hidden sm:inline">Copy</span>
                  </button>
                  <button className="p-1.5 border rounded-lg transition-colors hover:border-[color:var(--accent-color)]"
                    style={{ color: "var(--text-muted)", borderColor: "var(--border-color)" }}>
                    <List className="w-4 h-4" />
                  </button>
                </div>
                {pageRead && (
                  <div className="flex items-center gap-1 text-xs text-[color:var(--accent-text)]">
                    <CheckCircle className="w-4 h-4" />
                    <span>تمت القراءة</span>
                  </div>
                )}
              </div>

              {/* Page Title */}
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                {titleIcon}
                <h1 className="text-2xl sm:text-3xl font-bold" style={{ color: "var(--text-primary)" }}>{title}</h1>
              </div>

              {/* Description */}
              {description && (
                <p className="mb-8 sm:mb-10 leading-relaxed" style={{ color: "var(--text-secondary)" }}>{description}</p>
              )}

              {/* Page Content */}
              <div className="prose prose-invert max-w-none">
                {children}
              </div>

              {/* Navigation */}
              {(prevPage || nextPage) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 sm:mt-12 pt-6 sm:pt-8 border-t"
                  style={{ borderColor: "var(--border-color)" }}>
                  {prevPage ? (
                    <Link
                      href={prevPage.href}
                      className="flex items-center gap-3 p-4 rounded-xl border transition-colors group hover:no-underline hover:border-[color:var(--accent-color)]"
                      style={{ background: "var(--bg-secondary)", borderColor: "var(--border-color)" }}
                    >
                      <ChevronLeft className="w-5 h-5 rotate-180" style={{ color: "var(--text-muted)" }} />
                      <div className="text-right">
                        <div className="text-xs" style={{ color: "var(--text-muted)" }}>Previous</div>
                        <div className="text-sm" style={{ color: "var(--text-primary)" }}>{prevPage.title}</div>
                      </div>
                    </Link>
                  ) : (
                    <div className="hidden sm:block" />
                  )}
                  {nextPage ? (
                    <Link
                      href={nextPage.href}
                      className="flex items-center gap-3 p-4 rounded-xl border transition-colors group justify-end hover:no-underline hover:border-[color:var(--accent-color)]"
                      style={{ background: "var(--bg-secondary)", borderColor: "var(--border-color)" }}
                    >
                      <div className="text-left">
                        <div className="text-xs" style={{ color: "var(--text-muted)" }}>Next</div>
                        <div className="text-sm" style={{ color: "var(--text-primary)" }}>{nextPage.title}</div>
                      </div>
                      <ChevronLeft className="w-5 h-5" style={{ color: "var(--text-muted)" }} />
                    </Link>
                  ) : (
                    <div className="hidden sm:block" />
                  )}
                </div>
              )}

              {/* Last Updated */}
              <p className="text-center text-sm mt-6 sm:mt-8" style={{ color: "var(--text-muted)" }}>
                Last updated {lastUpdated}
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
