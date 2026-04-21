export interface NavItem {
  id: string;
  title: string;
  href: string;
  icon?: string;
}

export interface NavSection {
  id: string;
  title: string;
  icon?: string;
  items: NavItem[];
  defaultOpen?: boolean;
}

export const navigationSections: NavSection[] = [
  {
    id: "alasasyat",
    title: "الأساسيات",
    defaultOpen: true,
    items: [
      { id: "1", title: "متطلبات النظام الأساسية", href: "/alasasyat/mttlbat-alnzam" },
      { id: "2", title: "تمكين Virtualization", href: "/alasasyat/virtualization" },
      { id: "3", title: "تعطيل Secure Boot", href: "/alasasyat/secure-boot" },
      { id: "4", title: "تفعيل Hyper-V", href: "/alasasyat/hyper-v" },
      { id: "5", title: "تعطيل Memory Integrity", href: "/alasasyat/memory-integrity" },
    ],
  },
  {
    id: "almshakl",
    title: "المشاكل الشائعة",
    items: [{ id: "1", title: "Support Tool", href: "/almshakl/support-tool" }],
  },
  {
    id: "cod",
    title: "قسم كول اوف ديوتي",
    items: [
      { id: "1", title: "بروقرس", href: "/cod/progress" },
      { id: "2", title: "فكتورتي", href: "/cod/victory" },
      { id: "3", title: "اوينز V2", href: "/cod/owens-v2" },
      { id: "4", title: "انجن", href: "/cod/engine" },
    ],
  },
  {
    id: "fortnite",
    title: "فورت",
    items: [{ id: "1", title: "شرح فورت", href: "/fortnite/guide" }],
  },
  {
    id: "pubg",
    title: "ببجي",
    items: [
      { id: "1", title: "شرح ببجي", href: "/pubg/guide" },
      { id: "2", title: "الإعدادات المثالية", href: "/pubg/settings" },
    ],
  },
  {
    id: "apex",
    title: "ابكس ليجندز",
    items: [
      { id: "1", title: "شرح ابكس", href: "/apex/guide" },
      { id: "2", title: "حلول المشاكل", href: "/apex/solutions" },
    ],
  },
  {
    id: "rust",
    title: "رست",
    items: [{ id: "1", title: "شرح رست", href: "/rust/guide" }],
  },
  {
    id: "r6",
    title: "رينبو سيكس",
    items: [{ id: "1", title: "شرح R6", href: "/r6/guide" }],
  },
  {
    id: "marvel",
    title: "مارفل رايفلز",
    items: [{ id: "1", title: "شرح مارفل", href: "/marvel/guide" }],
  },
  {
    id: "valorant",
    title: "فالورانت",
    items: [{ id: "1", title: "كرسي فالورانت", href: "/valorant/chair" }],
  },
  {
    id: "overwatch",
    title: "اوفر واتش",
    items: [
      { id: "1", title: "سوان", href: "/overwatch/swan" },
      { id: "2", title: "انفيرنو", href: "/overwatch/inferno" },
    ],
  },
  {
    id: "ark",
    title: "آرك رايدرز",
    items: [
      { id: "1", title: "تحميل اللودر", href: "/ark/loader" },
      { id: "2", title: "حلول المشاكل", href: "/ark/solutions" },
    ],
  },
  {
    id: "fivem",
    title: "FiveM",
    items: [
      { id: "1", title: "قسم ريد انجن", href: "/fivem/red-engine" },
      { id: "2", title: "قسم منيو نيكسوس", href: "/fivem/nexus" },
      { id: "3", title: "منيو تي زد", href: "/fivem/tz" },
      { id: "4", title: "ميشو", href: "/fivem/misho" },
    ],
  },
  {
    id: "spoofer",
    title: "سبوفر تيمب",
    items: [
      { id: "1", title: "التحذير", href: "/spoofer/warning" },
      { id: "2", title: "تشغيل البرنامج", href: "/spoofer/run" },
    ],
  },
  {
    id: "fifa",
    title: "فيفا",
    items: [{ id: "1", title: "شرح التشغيل", href: "/fifa/guide" }],
  },
  {
    id: "contact",
    title: "الدعم",
    items: [{ id: "1", title: "تواصل معنا", href: "/contact" }],
  },
];

export const pageNavigation: Record<string, { prev?: { title: string; href: string }; next?: { title: string; href: string } }> = {
  "/": { next: { title: "الأساسيات", href: "/alasasyat/mttlbat-alnzam" } },
  "/alasasyat/mttlbat-alnzam": { prev: { title: "الرئيسية", href: "/" }, next: { title: "تمكين Virtualization", href: "/alasasyat/virtualization" } },
  "/alasasyat/virtualization": { prev: { title: "متطلبات النظام الأساسية", href: "/alasasyat/mttlbat-alnzam" }, next: { title: "تعطيل Secure Boot", href: "/alasasyat/secure-boot" } },
  "/alasasyat/secure-boot": { prev: { title: "تمكين Virtualization", href: "/alasasyat/virtualization" }, next: { title: "تفعيل Hyper-V", href: "/alasasyat/hyper-v" } },
  "/alasasyat/hyper-v": { prev: { title: "تعطيل Secure Boot", href: "/alasasyat/secure-boot" }, next: { title: "تعطيل Memory Integrity", href: "/alasasyat/memory-integrity" } },
  "/alasasyat/memory-integrity": { prev: { title: "تفعيل Hyper-V", href: "/alasasyat/hyper-v" } },
};
