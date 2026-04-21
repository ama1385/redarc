import DocLayout from "@/components/DocLayout";

export default function ArkLoader() {
  return (
    <DocLayout
      title="تحميل اللودر"
      titleIcon={
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#6366f1] to-[#4f46e5] text-white font-semibold text-lg">
          🦖
        </span>
      }
      description="تحميل لودر آرك رايدرز"
      breadcrumbs={[
        { label: "دليل الخطوات", href: "/" },
        { label: "آرك رايدرز", href: "/ark/loader" },
      ]}
      nextPage={{ title: "حلول المشاكل", href: "/ark/solutions" }}
      lastUpdated="2 months ago"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#e2dfe0] mb-6">تحميل اللودر 📥</h2>

        <ol className="space-y-4 text-[#a8a3a4] list-decimal list-inside mr-4 mb-8">
          <li className="leading-relaxed">
            تأكد من إكمال خطوات <strong className="text-[#e2dfe0]">الأساسيات</strong>
          </li>
          <li className="leading-relaxed">
            حمّل اللودر من الرابط أدناه
          </li>
          <li className="leading-relaxed">
            استخرج الملفات
          </li>
          <li className="leading-relaxed">
            شغّل <strong className="text-[#e2dfe0]">Loader.exe</strong> كمسؤول
          </li>
          <li className="leading-relaxed">
            ادخل مفتاح التفعيل
          </li>
        </ol>

        <div className="p-6 bg-[#252525] rounded-xl border border-[#333] text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#6366f1] text-white rounded-lg font-medium hover:bg-[#5558dd] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            تحميل اللودر
          </a>
        </div>
      </section>
    </DocLayout>
  );
}
