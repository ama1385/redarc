"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown, ChevronLeft, Check } from "lucide-react";
import { navigationSections, type NavItem, type NavSection } from "@/lib/navigation";
import { isPageRead, getReadPages } from "@/lib/readPages";
import { StoreBrand } from "@/components/StoreBrand";

const accent = "var(--accent-text)";

function NavItemComponent({ item, isActive }: { item: NavItem; isActive: boolean }) {
  const isRead = isPageRead(item.href);

  return (
    <Link
      href={item.href}
      prefetch
      className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:no-underline"
      style={{
        background: isActive ? "var(--bg-tertiary)" : "transparent",
        color: isActive ? accent : "var(--text-secondary)",
        fontWeight: isActive ? 600 : 400,
      }}
    >
      <span className="flex-1">{item.title}</span>
      {isRead && !isActive && (
        <Check className="w-3.5 h-3.5 shrink-0" style={{ color: accent }} />
      )}
      {isActive && <ChevronLeft className="w-4 h-4 shrink-0" style={{ color: accent }} />}
    </Link>
  );
}

function NavSectionComponent({ section, pathname }: { section: NavSection; pathname: string }) {
  const hasActiveItem = section.items.some((item) => pathname === item.href);
  const [isOpen, setIsOpen] = useState(section.defaultOpen || hasActiveItem);

  const readCount = (() => {
    const readPages = getReadPages();
    return section.items.filter((item) => readPages.includes(item.href)).length;
  })();

  useEffect(() => {
    if (hasActiveItem) setIsOpen(true);
  }, [hasActiveItem]);

  return (
    <div className="rounded-md">
      <button
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        className="flex items-center gap-2 w-full px-3 py-2 text-sm font-medium rounded-md hover:bg-[var(--bg-tertiary)]/50 text-right"
        style={{ color: "var(--text-primary)" }}
      >
        <ChevronDown className={`w-4 h-4 shrink-0 ${isOpen ? "" : "-rotate-90"}`} />
        <span className="flex-1">{section.title}</span>
        {readCount > 0 && (
          <span
            className="text-xs px-1.5 py-0.5 rounded-full shrink-0"
            style={{ background: "var(--bg-tertiary)", color: "var(--text-muted)" }}
          >
            {readCount}/{section.items.length}
          </span>
        )}
      </button>
      {isOpen ? (
        <div className="pr-1">
          {section.items.map((item) => (
            <NavItemComponent
              key={`${section.id}-${item.id}`}
              item={item}
              isActive={pathname === item.href}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function Sidebar() {
  const pathname = usePathname() ?? "";

  return (
    <aside
      className="w-[260px] border-r flex flex-col h-screen sticky top-0 shrink-0"
      style={{ background: "var(--sidebar-bg)", borderColor: "var(--border-color)" }}
    >
      <div className="px-3 pt-4 pb-3 border-b" style={{ borderColor: "var(--border-color)" }}>
        <StoreBrand variant="sidebar" />
      </div>

      <div className="flex-1 overflow-y-auto px-2 py-3 min-h-0 overscroll-contain">
        <div className="space-y-1">
          <div className="px-3 py-2">
            <Link
              href="/"
              prefetch
              className="flex items-center gap-2 text-sm hover:no-underline transition-colors"
              style={{
                color: pathname === "/" ? accent : "var(--text-secondary)",
                fontWeight: pathname === "/" ? 600 : 400,
              }}
            >
              <svg
                className="w-4 h-4 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <span>دليل الخطوات</span>
            </Link>
          </div>

          {navigationSections.map((section) => (
            <NavSectionComponent key={section.id} section={section} pathname={pathname} />
          ))}
        </div>
      </div>

      <div className="p-4 border-t" style={{ borderColor: "var(--border-color)" }}>
        <a
          href="https://deman.store"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs transition-colors hover:no-underline"
          style={{ color: "var(--text-muted)" }}
        >
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span>© 2024 DEMAN.STORE</span>
        </a>
      </div>
    </aside>
  );
}
