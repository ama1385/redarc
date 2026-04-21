import Image from "next/image";

export function DemanLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <span className={`relative inline-block shrink-0 overflow-hidden ${className}`}>
      <Image
        src="/logo.png"
        alt="DEMAN.STORE"
        fill
        className="object-contain"
        sizes="64px"
        priority
      />
    </span>
  );
}
