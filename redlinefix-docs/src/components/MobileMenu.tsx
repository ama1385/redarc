"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden p-2 text-[#a8a3a4] hover:text-[#e2dfe0] transition-colors"
        aria-label="فتح القائمة"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar Container */}
          <div className="absolute top-0 right-0 h-full w-[280px] bg-[#1c1c1c] shadow-2xl animate-slide-in-right">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 left-4 p-2 text-[#a8a3a4] hover:text-[#e2dfe0] transition-colors z-10"
              aria-label="إغلاق القائمة"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Sidebar Content */}
            <div onClick={() => setIsOpen(false)}>
              <Sidebar />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
