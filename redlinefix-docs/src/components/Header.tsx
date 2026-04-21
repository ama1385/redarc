"use client";

import { useState, useEffect } from "react";
import { Search, Globe, ChevronDown, Menu, Sun, Moon, BookOpen } from "lucide-react";
import SearchDialog from "./SearchDialog";
import { useTheme } from "@/lib/theme";
import { getReadProgress } from "@/lib/readPages";
import { StoreBrand } from "@/components/StoreBrand";
import { DiscordIcon } from "@/components/DiscordIcon";

interface HeaderProps {
  onMenuClick?: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [language, setLanguage] = useState<"ar" | "en">("ar");
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [readProgress, setReadProgress] = useState({ read: 0, total: 30, percentage: 0 });
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setReadProgress(getReadProgress());
  }, []);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        className="h-14 border-b flex items-center justify-between gap-2 px-3 sm:px-4 sticky top-0 z-50 bg-[var(--header-bg)]"
        style={{ borderColor: "var(--border-color)" }}
      >
        <div className="flex items-center gap-1 sm:gap-2 min-w-0">
          <a
            href="https://discord.gg/deman"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 p-2 rounded-lg transition-colors hover:bg-[var(--bg-tertiary)]/60"
            style={{ color: "var(--accent-text)" }}
            aria-label="Discord — DEMAN"
          >
            <DiscordIcon className="w-5 h-5" />
          </a>
          {onMenuClick && (
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 -mr-1 shrink-0 rounded-lg transition-colors hover:bg-[var(--bg-tertiary)]/50"
              style={{ color: "var(--text-secondary)" }}
              aria-label="فتح القائمة"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}
          <StoreBrand variant="header" />
        </div>

        {/* Read Progress - Desktop */}
        <div className="hidden lg:flex items-center gap-2 flex-1 justify-start min-w-0 mr-2">
          <BookOpen className="w-4 h-4" style={{ color: "var(--text-muted)" }} />
          <div className="flex items-center gap-2">
            <div className="w-24 h-1.5 rounded-full overflow-hidden" style={{ background: "var(--bg-tertiary)" }}>
              <div
                className="h-full transition-[width] duration-200 ease-out"
                style={{
                  width: `${readProgress.percentage}%`,
                  background: "linear-gradient(90deg, var(--accent-color), var(--accent-light))",
                }}
              />
            </div>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              {readProgress.read}/{readProgress.total}
            </span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-colors"
            style={{ color: "var(--text-secondary)" }}
            aria-label={theme === "dark" ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              className="flex items-center gap-1 sm:gap-1.5 text-sm transition-colors p-2"
              style={{ color: "var(--text-secondary)" }}
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{language === "ar" ? "العربية" : "English"}</span>
              <ChevronDown className="w-3.5 h-3.5 hidden sm:block" />
            </button>
            {/* Dropdown */}
            {showLangDropdown && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowLangDropdown(false)}
                />
                <div className="absolute left-0 top-full mt-1 py-1 rounded-lg border min-w-[120px] z-50 shadow-xl"
                  style={{ background: "var(--bg-secondary)", borderColor: "var(--border-color)" }}>
                  <button
                    onClick={() => { setLanguage("ar"); setShowLangDropdown(false); }}
                    className="w-full px-3 py-2 text-sm text-right transition-colors"
                    style={{ color: language === "ar" ? "var(--accent-text)" : "var(--text-secondary)" }}
                  >
                    العربية
                  </button>
                  <button
                    onClick={() => { setLanguage("en"); setShowLangDropdown(false); }}
                    className="w-full px-3 py-2 text-sm text-right transition-colors"
                    style={{ color: language === "en" ? "var(--accent-text)" : "var(--text-secondary)" }}
                  >
                    English
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Search */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-2 rounded-lg px-2 sm:px-3 py-1.5 border transition-colors cursor-pointer"
            style={{
              background: "var(--bg-secondary)",
              borderColor: "var(--border-color)",
              color: "var(--text-muted)"
            }}
          >
            <Search className="w-4 h-4" />
            <span className="text-sm hidden md:inline">Search...</span>
            <div className="items-center gap-1 hidden sm:flex">
              <kbd className="px-1.5 py-0.5 text-[10px] rounded border"
                style={{ background: "var(--bg-main)", borderColor: "var(--border-color)" }}>
                Ctrl
              </kbd>
              <kbd className="px-1.5 py-0.5 text-[10px] rounded border"
                style={{ background: "var(--bg-main)", borderColor: "var(--border-color)" }}>
                K
              </kbd>
            </div>
          </button>
        </div>
      </header>

      {/* Search Dialog */}
      <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
