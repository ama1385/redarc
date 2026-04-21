"use client";

import { useState, useEffect, useMemo } from "react";
import { Search, X, FileText, Hash } from "lucide-react";
import Link from "next/link";

interface SearchResult {
  title: string;
  description: string;
  href: string;
  section: string;
  content?: string[];
  keywords?: string[];
}

const searchData: SearchResult[] = [
  {
    title: "متطلبات النظام الأساسية",
    description: "إعداد Windows Security وتعطيل Defender",
    href: "/alasasyat/mttlbat-alnzam",
    section: "الأساسيات",
    content: ["Windows Security", "Defender Control", "Firewall", "Core Isolation", "تعطيل الحماية"],
    keywords: ["defender", "windows", "security", "حماية", "نظام"]
  },
  {
    title: "تمكين Virtualization",
    description: "تفعيل المحاكاة الافتراضية من BIOS",
    href: "/alasasyat/virtualization",
    section: "الأساسيات",
    content: ["BIOS", "Intel Virtualization", "AMD SVM", "Task Manager"],
    keywords: ["virtualization", "bios", "intel", "amd", "محاكاة"]
  },
  {
    title: "تعطيل Secure Boot",
    description: "إيقاف Secure Boot من إعدادات BIOS",
    href: "/alasasyat/secure-boot",
    section: "الأساسيات",
    content: ["BIOS", "Secure Boot State", "System Information"],
    keywords: ["secure", "boot", "bios", "إقلاع"]
  },
  {
    title: "تفعيل Hyper-V",
    description: "تفعيل Hyper-V عبر Windows Features",
    href: "/alasasyat/hyper-v",
    section: "الأساسيات",
    content: ["Windows Features", "PowerShell", "Microsoft-Hyper-V"],
    keywords: ["hyper-v", "virtual", "windows"]
  },
  {
    title: "تعطيل Memory Integrity",
    description: "إيقاف Core Isolation من Windows Security",
    href: "/alasasyat/memory-integrity",
    section: "الأساسيات",
    content: ["Core Isolation", "Device Security", "Memory Integrity"],
    keywords: ["memory", "integrity", "core", "isolation"]
  },
  {
    title: "Support Tool",
    description: "أداة الدعم الفني لحل المشاكل",
    href: "/almshakl/support-tool",
    section: "المشاكل الشائعة",
    content: ["تشخيص", "معلومات النظام", "الدعم الفني"],
    keywords: ["support", "tool", "دعم", "مشكلة"]
  },
  {
    title: "بروقرس",
    description: "شرح برنامج بروقرس لكول اوف ديوتي",
    href: "/cod/progress",
    section: "قسم كول اوف ديوتي",
    content: ["COD", "Warzone", "Modern Warfare"],
    keywords: ["progress", "cod", "warzone", "كود"]
  },
  {
    title: "فكتورتي",
    description: "شرح برنامج فكتورتي",
    href: "/cod/victory",
    section: "قسم كول اوف ديوتي",
    keywords: ["victory", "cod"]
  },
  {
    title: "اوينز V2",
    description: "شرح برنامج اوينز الإصدار الثاني",
    href: "/cod/owens-v2",
    section: "قسم كول اوف ديوتي",
    keywords: ["owens", "v2", "cod"]
  },
  {
    title: "انجن",
    description: "شرح برنامج انجن",
    href: "/cod/engine",
    section: "قسم كول اوف ديوتي",
    keywords: ["engine", "cod"]
  },
  {
    title: "شرح فورت",
    description: "شرح برنامج فورتنايت",
    href: "/fortnite/guide",
    section: "فورت",
    content: ["Fortnite", "Battle Royale", "ESP", "Aimbot"],
    keywords: ["fortnite", "فورت", "فورتنايت"]
  },
  {
    title: "شرح ببجي",
    description: "شرح برنامج ببجي",
    href: "/pubg/guide",
    section: "ببجي",
    content: ["PUBG", "Battlegrounds", "ESP", "Aimbot", "No Recoil"],
    keywords: ["pubg", "ببجي", "battlegrounds"]
  },
  {
    title: "الإعدادات المثالية - ببجي",
    description: "أفضل إعدادات لبرنامج ببجي",
    href: "/pubg/settings",
    section: "ببجي",
    content: ["إعدادات ESP", "إعدادات Aimbot", "FOV", "Smoothness"],
    keywords: ["settings", "إعدادات", "pubg"]
  },
  {
    title: "شرح ابكس",
    description: "شرح برنامج ابكس ليجندز",
    href: "/apex/guide",
    section: "ابكس ليجندز",
    content: ["Apex Legends", "ESP", "Aimbot", "Glow ESP"],
    keywords: ["apex", "legends", "ابكس"]
  },
  {
    title: "حلول مشاكل ابكس",
    description: "حلول المشاكل الشائعة في ابكس",
    href: "/apex/solutions",
    section: "ابكس ليجندز",
    content: ["Easy Anti-Cheat", "تحديث", "مشاكل"],
    keywords: ["apex", "problems", "مشاكل"]
  },
  {
    title: "شرح رست",
    description: "شرح برنامج رست",
    href: "/rust/guide",
    section: "رست",
    content: ["Rust", "Survival", "ESP", "Resources"],
    keywords: ["rust", "رست"]
  },
  {
    title: "شرح R6",
    description: "شرح برنامج رينبو سيكس سيج",
    href: "/r6/guide",
    section: "رينبو سيكس",
    content: ["Rainbow Six", "Siege", "BattlEye", "ESP"],
    keywords: ["r6", "rainbow", "siege", "رينبو"]
  },
  {
    title: "شرح مارفل",
    description: "شرح برنامج مارفل رايفلز",
    href: "/marvel/guide",
    section: "مارفل رايفلز",
    content: ["Marvel Rivals"],
    keywords: ["marvel", "rivals", "مارفل"]
  },
  {
    title: "كرسي فالورانت",
    description: "شرح برنامج فالورانت",
    href: "/valorant/chair",
    section: "فالورانت",
    content: ["Valorant", "Riot", "Vanguard"],
    keywords: ["valorant", "فالورانت"]
  },
  {
    title: "سوان - اوفر واتش",
    description: "برنامج سوان لأوفر واتش",
    href: "/overwatch/swan",
    section: "اوفر واتش",
    keywords: ["overwatch", "swan", "اوفر"]
  },
  {
    title: "انفيرنو - اوفر واتش",
    description: "برنامج انفيرنو لأوفر واتش",
    href: "/overwatch/inferno",
    section: "اوفر واتش",
    keywords: ["overwatch", "inferno", "اوفر"]
  },
  {
    title: "تحميل لودر آرك",
    description: "تحميل لودر آرك رايدرز",
    href: "/ark/loader",
    section: "آرك رايدرز",
    keywords: ["ark", "loader", "آرك"]
  },
  {
    title: "حلول مشاكل آرك",
    description: "حلول المشاكل الشائعة في آرك",
    href: "/ark/solutions",
    section: "آرك رايدرز",
    keywords: ["ark", "problems", "مشاكل"]
  },
  {
    title: "ريد انجن - FiveM",
    description: "برنامج ريد انجن لـ FiveM",
    href: "/fivem/red-engine",
    section: "FiveM",
    keywords: ["fivem", "red", "engine", "gta"]
  },
  {
    title: "نيكسوس - FiveM",
    description: "منيو نيكسوس لـ FiveM",
    href: "/fivem/nexus",
    section: "FiveM",
    keywords: ["fivem", "nexus", "menu"]
  },
  {
    title: "تي زد - FiveM",
    description: "منيو تي زد لـ FiveM",
    href: "/fivem/tz",
    section: "FiveM",
    keywords: ["fivem", "tz", "menu"]
  },
  {
    title: "ميشو - FiveM",
    description: "برنامج ميشو لـ FiveM",
    href: "/fivem/misho",
    section: "FiveM",
    keywords: ["fivem", "misho"]
  },
  {
    title: "تحذير السبوفر",
    description: "تحذيرات مهمة قبل استخدام السبوفر",
    href: "/spoofer/warning",
    section: "سبوفر تيمب",
    keywords: ["spoofer", "warning", "سبوفر", "تحذير"]
  },
  {
    title: "تشغيل السبوفر",
    description: "طريقة تشغيل السبوفر",
    href: "/spoofer/run",
    section: "سبوفر تيمب",
    keywords: ["spoofer", "run", "تشغيل"]
  },
  {
    title: "شرح فيفا",
    description: "شرح برنامج فيفا",
    href: "/fifa/guide",
    section: "فيفا",
    content: ["FIFA", "EA FC", "Auto Skills"],
    keywords: ["fifa", "ea", "fc", "فيفا"]
  },
  {
    title: "تواصل معنا",
    description: "طرق التواصل مع فريق الدعم",
    href: "/contact",
    section: "الدعم",
    content: ["Discord", "Telegram", "Email", "دعم", "تواصل"],
    keywords: ["contact", "support", "تواصل", "دعم", "مساعدة", "discord", "telegram"]
  },
];

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();

    return searchData.filter((item) => {
      // Search in title
      if (item.title.toLowerCase().includes(lowerQuery)) return true;
      // Search in description
      if (item.description.toLowerCase().includes(lowerQuery)) return true;
      // Search in section
      if (item.section.toLowerCase().includes(lowerQuery)) return true;
      // Search in content
      if (item.content?.some(c => c.toLowerCase().includes(lowerQuery))) return true;
      // Search in keywords
      if (item.keywords?.some(k => k.toLowerCase().includes(lowerQuery))) return true;
      return false;
    }).slice(0, 10); // Limit results
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative w-full max-w-xl mx-4 rounded-xl border shadow-2xl overflow-hidden"
        style={{ background: "var(--bg-main)", borderColor: "var(--border-color)" }}>
        {/* Search Input */}
        <div className="flex items-center gap-3 p-4" style={{ borderBottom: "1px solid var(--border-color)" }}>
          <Search className="w-5 h-5" style={{ color: "var(--text-muted)" }} />
          <input
            type="text"
            placeholder="ابحث في التوثيق..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none text-lg"
            style={{ color: "var(--text-primary)" }}
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 transition-colors"
            style={{ color: "var(--text-muted)" }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-auto">
          {query.trim() === "" ? (
            <div className="p-8 text-center" style={{ color: "var(--text-muted)" }}>
              <Search className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>ابدأ بالكتابة للبحث...</p>
              <p className="text-sm mt-2">يمكنك البحث عن الألعاب، البرامج، أو الإعدادات</p>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center" style={{ color: "var(--text-muted)" }}>
              <p>لا توجد نتائج لـ "{query}"</p>
              <p className="text-sm mt-2">جرب كلمات مختلفة أو تصفح القائمة الجانبية</p>
            </div>
          ) : (
            <div className="p-2">
              {results.map((result, index) => (
                <Link
                  key={index}
                  href={result.href}
                  onClick={onClose}
                  className="block p-3 rounded-lg transition-colors hover:no-underline"
                  style={{
                    color: "var(--text-primary)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--bg-secondary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <FileText className="w-4 h-4" style={{ color: "var(--text-muted)" }} />
                    <span className="text-xs px-2 py-0.5 rounded"
                      style={{ background: "var(--bg-tertiary)", color: "var(--text-secondary)" }}>
                      {result.section}
                    </span>
                  </div>
                  <h4 className="font-medium" style={{ color: "var(--text-primary)" }}>{result.title}</h4>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>{result.description}</p>
                  {result.content && result.content.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {result.content.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-xs px-1.5 py-0.5 rounded"
                          style={{ background: "var(--bg-tertiary)", color: "var(--text-muted)" }}>
                          <Hash className="w-3 h-3 inline mr-0.5" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 flex items-center justify-between text-xs"
          style={{ borderTop: "1px solid var(--border-color)", color: "var(--text-muted)" }}>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded border"
                style={{ background: "var(--bg-secondary)", borderColor: "var(--border-color)" }}>↵</kbd>
              <span>للفتح</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded border"
                style={{ background: "var(--bg-secondary)", borderColor: "var(--border-color)" }}>↑↓</kbd>
              <span>للتنقل</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded border"
              style={{ background: "var(--bg-secondary)", borderColor: "var(--border-color)" }}>Esc</kbd>
            <span>للإغلاق</span>
          </div>
        </div>
      </div>
    </div>
  );
}
