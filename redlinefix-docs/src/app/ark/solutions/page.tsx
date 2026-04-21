import DocLayout from "@/components/DocLayout";

export default function ArkSolutions() {
  return (
    <DocLayout
      title="حلول المشاكل"
      titleIcon={
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#6366f1] to-[#4f46e5] text-white font-semibold text-lg">
          🔧
        </span>
      }
      description="حلول مشاكل آرك رايدرز"
      breadcrumbs={[
        { label: "دليل الخطوات", href: "/" },
        { label: "آرك رايدرز", href: "/ark/loader" },
      ]}
      prevPage={{ title: "تحميل اللودر", href: "/ark/loader" }}
      lastUpdated="2 months ago"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#e2dfe0] mb-6">حلول المشاكل الشائعة 🔧</h2>

        <div className="space-y-6">
          <div className="p-4 bg-[#252525] rounded-xl border border-[#333]">
            <h3 className="text-lg font-semibold text-[#e2dfe0] mb-2">البرنامج لا يفتح</h3>
            <p className="text-[#a8a3a4]">تأكد من تشغيله كمسؤول وتعطيل Windows Defender.</p>
          </div>

          <div className="p-4 bg-[#252525] rounded-xl border border-[#333]">
            <h3 className="text-lg font-semibold text-[#e2dfe0] mb-2">خطأ في المفتاح</h3>
            <p className="text-[#a8a3a4]">تأكد من نسخ المفتاح بشكل صحيح بدون مسافات.</p>
          </div>

          <div className="p-4 bg-[#252525] rounded-xl border border-[#333]">
            <h3 className="text-lg font-semibold text-[#e2dfe0] mb-2">اللعبة تغلق</h3>
            <p className="text-[#a8a3a4]">تأكد من تحديث اللعبة وتعطيل Secure Boot.</p>
          </div>
        </div>

        <blockquote className="mt-6 border-r-4 border-[#6366f1] pr-4 py-2">
          <p className="text-[#a8a3a4]">
            إذا استمرت المشكلة، تواصل مع فريق الدعم.
          </p>
        </blockquote>
      </section>
    </DocLayout>
  );
}
