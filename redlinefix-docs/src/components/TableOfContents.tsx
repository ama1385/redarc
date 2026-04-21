"use client";

interface TocItem {
  id: string;
  title: string;
  level: number;
}

const tocItems: TocItem[] = [
  { id: "khtwat-tatyl-secure-boot", title: "خطوات تعطيل Secure Boot", level: 1 },
  { id: "awlaan-althqq-mn-halh-secure-boot", title: "أولاً: التحقق من حالة Secure Boot", level: 2 },
  { id: "itha-kan-secure-boot-mfa-l-enabled", title: "إذا كان Secure Boot مفعّل (Enabled)", level: 2 },
  { id: "khtwat-tatyl-secure-boot-mn-bios", title: "خطوات تعطيل Secure Boot من BIOS", level: 2 },
];

export default function TableOfContents() {
  return (
    <nav className="text-sm">
      <ul className="space-y-2 border-r border-[#333] pr-4">
        {tocItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block text-[#746c6d] hover:text-[#a8a3a4] transition-colors leading-relaxed ${
                item.level === 2 ? "text-xs pr-3" : "font-medium"
              }`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
