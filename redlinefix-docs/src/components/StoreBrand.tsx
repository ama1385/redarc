import Link from "next/link";
import { DemanLogo } from "@/components/DemanLogo";

type StoreBrandVariant = "header" | "sidebar" | "hero";

const styles: Record<
  StoreBrandVariant,
  { wrap: string; logo: string; name: string; accent: string }
> = {
  header: {
    wrap:
      "flex shrink-0 items-center gap-2 sm:gap-2.5 rounded-xl px-1.5 py-1 sm:px-2 sm:py-1.5 -my-0.5 transition-colors hover:bg-[var(--bg-tertiary)]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-color)]/35",
    logo: "w-8 h-8 sm:w-9 sm:h-9 rounded-lg shadow-sm ring-1 ring-black/[0.08] dark:ring-white/[0.12]",
    name: "text-sm sm:text-[0.95rem] font-semibold tracking-wide leading-none whitespace-nowrap",
    accent: "text-[color:var(--accent-text)]",
  },
  sidebar: {
    wrap:
      "flex shrink-0 items-center gap-3 rounded-xl px-2 py-2.5 -mx-0.5 transition-colors hover:bg-[var(--bg-tertiary)]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-color)]/35",
    logo: "w-10 h-10 rounded-xl shadow-md ring-1 ring-black/[0.08] dark:ring-white/[0.12]",
    name: "text-[1.05rem] font-semibold tracking-wide leading-none",
    accent: "text-[color:var(--accent-text)]",
  },
  hero: {
    wrap:
      "flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 rounded-2xl px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-color)]/45",
    logo: "w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] rounded-2xl shadow-lg ring-2 ring-[#9333ea]/50",
    name: "text-3xl sm:text-5xl font-bold tracking-wide leading-none",
    accent: "text-[color:var(--accent-text)]",
  },
};

export function StoreBrand({
  variant,
  className = "",
}: {
  variant: StoreBrandVariant;
  className?: string;
}) {
  const s = styles[variant];
  const nameStyle =
    variant === "hero"
      ? undefined
      : ({ color: "var(--text-primary)" } as const);
  return (
    <Link href="/" className={`${s.wrap} ${className}`.trim()} aria-label="DEMAN.STORE — الرئيسية">
      <DemanLogo className={s.logo} />
      <span
        className={`min-w-0 ${s.name} ${variant === "hero" ? "text-[#f0e8f8]" : ""}`.trim()}
        style={nameStyle}
      >
        DEMAN<span className={s.accent}>.STORE</span>
      </span>
    </Link>
  );
}
