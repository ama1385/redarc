"use client";

import { useState } from "react";
import DocLayout from "@/components/DocLayout";
import { Send, MessageCircle, Mail, Globe, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <DocLayout
      title="تواصل معنا"
      titleIcon={
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#9333ea] to-[#5b21b6] text-white">
          <MessageCircle className="w-5 h-5" />
        </span>
      }
      description="نحن هنا لمساعدتك! تواصل معنا عبر أي من الطرق التالية"
      breadcrumbs={[
        { label: "دليل الخطوات", href: "/" },
        { label: "تواصل معنا", href: "/contact" },
      ]}
      lastUpdated="اليوم"
    >
      {/* Contact Methods */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
          <a href="#methods" className="hover:text-[color:var(--accent-text)]" style={{ color: "var(--text-muted)" }}>#</a>
          طرق التواصل
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {/* Discord */}
          <a
            href="https://discord.gg/deman"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl border transition-all hover:border-[color:var(--accent-color)] hover:no-underline group card-hover animate-fadeIn"
            style={{ background: "var(--bg-secondary)", borderColor: "var(--border-color)", animationDelay: "0.1s" }}
          >
            <div className="w-12 h-12 rounded-lg bg-[#5865F2] flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold group-hover:text-[color:var(--accent-text)]" style={{ color: "var(--text-primary)" }}>Discord</h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>انضم لسيرفر الدسكورد</p>
            </div>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/demanstore"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl border transition-all hover:border-[color:var(--accent-color)] hover:no-underline group card-hover animate-fadeIn"
            style={{ background: "var(--bg-secondary)", borderColor: "var(--border-color)", animationDelay: "0.2s" }}
          >
            <div className="w-12 h-12 rounded-lg bg-[#0088cc] flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold group-hover:text-[color:var(--accent-text)]" style={{ color: "var(--text-primary)" }}>Telegram</h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>تواصل عبر تيليجرام</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:support@deman.store"
            className="flex items-center gap-4 p-4 rounded-xl border transition-all hover:border-[color:var(--accent-color)] hover:no-underline group card-hover animate-fadeIn"
            style={{ background: "var(--bg-secondary)", borderColor: "var(--border-color)", animationDelay: "0.3s" }}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#9333ea] to-[#5b21b6] flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold group-hover:text-[color:var(--accent-text)]" style={{ color: "var(--text-primary)" }}>البريد الإلكتروني</h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>support@deman.store</p>
            </div>
          </a>

          {/* Website */}
          <a
            href="https://deman.store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl border transition-all hover:border-[color:var(--accent-color)] hover:no-underline group card-hover animate-fadeIn"
            style={{ background: "var(--bg-secondary)", borderColor: "var(--border-color)", animationDelay: "0.4s" }}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#9333ea] flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold group-hover:text-[color:var(--accent-text)]" style={{ color: "var(--text-primary)" }}>الموقع الرسمي</h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>deman.store</p>
            </div>
          </a>
        </div>
      </section>

      {/* Working Hours */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
          <a href="#hours" className="hover:text-[color:var(--accent-text)]" style={{ color: "var(--text-muted)" }}>#</a>
          ساعات العمل
        </h2>

        <div className="p-6 rounded-xl border" style={{ background: "var(--bg-secondary)", borderColor: "var(--border-color)" }}>
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-5 h-5 text-[color:var(--accent-text)]" />
            <span className="font-semibold" style={{ color: "var(--text-primary)" }}>فريق الدعم متاح</span>
          </div>
          <div className="space-y-2" style={{ color: "var(--text-secondary)" }}>
            <p className="flex items-center gap-2">
              <span className="text-[color:var(--accent-text)]">•</span>
              <span>السبت - الخميس: 10:00 ص - 12:00 م</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[color:var(--accent-text)]">•</span>
              <span>الجمعة: مغلق</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[color:var(--accent-text)]">•</span>
              <span>الرد خلال 24 ساعة كحد أقصى</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
          <a href="#form" className="hover:text-[color:var(--accent-text)]" style={{ color: "var(--text-muted)" }}>#</a>
          نموذج التواصل
        </h2>

        {submitted ? (
          <div className="p-6 rounded-xl border border-[color:var(--accent-color)] bg-[rgba(147,51,234,0.12)] text-center">
            <CheckCircle className="w-12 h-12 text-[color:var(--accent-text)] mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-[color:var(--accent-text)] mb-2">تم الإرسال بنجاح!</h3>
            <p style={{ color: "var(--text-secondary)" }}>سنرد عليك في أقرب وقت ممكن</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
                  الاسم
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border outline-none transition-colors focus:border-[color:var(--accent-color)]"
                  style={{
                    background: "var(--bg-secondary)",
                    borderColor: "var(--border-color)",
                    color: "var(--text-primary)"
                  }}
                  placeholder="أدخل اسمك"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border outline-none transition-colors focus:border-[color:var(--accent-color)]"
                  style={{
                    background: "var(--bg-secondary)",
                    borderColor: "var(--border-color)",
                    color: "var(--text-primary)"
                  }}
                  placeholder="example@email.com"
                  dir="ltr"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
                الموضوع
              </label>
              <input
                type="text"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg border outline-none transition-colors focus:border-[color:var(--accent-color)]"
                style={{
                  background: "var(--bg-secondary)",
                  borderColor: "var(--border-color)",
                  color: "var(--text-primary)"
                }}
                placeholder="موضوع الرسالة"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
                الرسالة
              </label>
              <textarea
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border outline-none transition-colors focus:border-[color:var(--accent-color)] resize-none"
                style={{
                  background: "var(--bg-secondary)",
                  borderColor: "var(--border-color)",
                  color: "var(--text-primary)"
                }}
                placeholder="اكتب رسالتك هنا..."
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-[#9333ea] to-[#6d28d9] text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
              <span>إرسال الرسالة</span>
            </button>
          </form>
        )}
      </section>

      {/* FAQ Note */}
      <div className="p-4 rounded-xl border-r-4 border-[color:var(--accent-color)]" style={{ background: "var(--bg-secondary)" }}>
        <p style={{ color: "var(--text-secondary)" }}>
          <strong className="text-[color:var(--accent-text)]">💡 نصيحة:</strong> قبل التواصل معنا، تأكد من مراجعة صفحات التوثيق وقسم المشاكل الشائعة، قد تجد إجابة سؤالك هناك!
        </p>
      </div>

      {/* Card Hover Animations */}
      <style jsx global>{`
        .card-hover {
          box-shadow: 0 0 0 0 rgba(168, 85, 247, 0);
          transform: translateY(0) scale(1);
          transition:
            box-shadow 0.25s cubic-bezier(0.4,0,0.2,1),
            transform 0.25s cubic-bezier(0.4,0,0.2,1);
        }
        .card-hover:hover, .card-hover:focus-visible {
          box-shadow: 0 8px 32px 0 rgba(168, 85, 247, 0.18), 0 1.5px 6px 0 rgba(0,0,0,0.04);
          transform: translateY(-4px) scale(1.025);
        }
        .animate-fadeIn {
          opacity: 0;
          animation: fadeInCard 0.7s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        @keyframes fadeInCard {
          from { opacity: 0; transform: translateY(16px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </DocLayout>
  );
}
