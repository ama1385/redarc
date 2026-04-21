"use client";

const STORAGE_KEY = "redlinefix-read-pages";

export function getReadPages(): string[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function markPageAsRead(href: string): void {
  if (typeof window === "undefined") return;
  const readPages = getReadPages();
  if (!readPages.includes(href)) {
    readPages.push(href);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(readPages));
  }
}

export function isPageRead(href: string): boolean {
  return getReadPages().includes(href);
}

export function getReadProgress(): { read: number; total: number; percentage: number } {
  const readPages = getReadPages();
  const totalPages = 30; // Approximate total pages
  return {
    read: readPages.length,
    total: totalPages,
    percentage: Math.round((readPages.length / totalPages) * 100),
  };
}

export function clearReadPages(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(STORAGE_KEY);
  }
}
