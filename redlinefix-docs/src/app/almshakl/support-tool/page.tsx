import DocLayout from "@/components/DocLayout";

export default function SupportTool() {
  const tocItems = [
    { id: "support-tool", title: "أداة الدعم الفني", level: 1 },
    { id: "download", title: "تحميل الأداة", level: 2 },
    { id: "usage", title: "طريقة الاستخدام", level: 2 },
  ];

  return (
    <DocLayout
      title="Support Tool"
      titleIcon={
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#4a6670] to-[#3a5560] text-white font-semibold text-lg">
          1
        </span>
      }
      description="أداة الدعم الفني لجمع المعلومات اللازمة لحل المشاكل"
      breadcrumbs={[
        { label: "دليل الخطوات", href: "/" },
        { label: "المشاكل الشائعة", href: "/almshakl/support-tool" },
      ]}
      tocItems={tocItems}
      lastUpdated="6 months ago"
    >
      <section id="support-tool" className="mb-12">
        <h2 className="text-2xl font-bold text-[#e2dfe0] mb-6 flex items-center gap-2">
          <a href="#support-tool" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
          أداة الدعم الفني 🛠️
        </h2>

        <p className="text-[#a8a3a4] mb-6">
          أداة Support Tool تساعد فريق الدعم في تشخيص المشاكل بشكل أسرع من خلال جمع معلومات النظام الضرورية.
        </p>

        <section id="download" className="mb-10">
          <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4 flex items-center gap-2">
            <a href="#download" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
            تحميل الأداة: 📥
          </h3>

          <div className="p-4 bg-[#252525] rounded-xl border border-[#333] mb-6">
            <p className="text-[#a8a3a4] mb-4">
              حمّل أداة الدعم الفني من الرابط التالي:
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#85a1ac] text-[#1c1c1c] rounded-lg font-medium hover:bg-[#6b8a94] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              تحميل Support Tool
            </a>
          </div>
        </section>

        <section id="usage" className="mb-10">
          <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4 flex items-center gap-2">
            <a href="#usage" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
            طريقة الاستخدام: 📋
          </h3>

          <ol className="space-y-4 text-[#a8a3a4] list-decimal list-inside mr-4">
            <li className="leading-relaxed">
              <strong className="text-[#e2dfe0]">حمّل الأداة</strong> من الرابط أعلاه.
            </li>
            <li className="leading-relaxed">
              <strong className="text-[#e2dfe0]">شغّل الأداة</strong> كمسؤول (Run as Administrator).
            </li>
            <li className="leading-relaxed">
              <strong className="text-[#e2dfe0]">انتظر</strong> حتى تكتمل عملية جمع المعلومات.
            </li>
            <li className="leading-relaxed">
              <strong className="text-[#e2dfe0]">أرسل الملف الناتج</strong> إلى فريق الدعم عبر التذكرة.
            </li>
          </ol>

          <blockquote className="mt-6 border-r-4 border-[#586aac] pr-4 py-2">
            <p className="text-[#a8a3a4]">
              <strong className="font-semibold" style={{ color: "var(--text-primary)" }}>⚠️ ملاحظة:</strong> الأداة آمنة 100% ولا تجمع أي معلومات شخصية. فقط معلومات النظام اللازمة لحل المشكلة.
            </p>
          </blockquote>
        </section>
      </section>
    </DocLayout>
  );
}
