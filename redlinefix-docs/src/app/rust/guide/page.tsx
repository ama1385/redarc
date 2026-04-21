import DocLayout from "@/components/DocLayout";

export default function RustGuide() {
  return (
    <DocLayout
      title="شرح رست"
      titleIcon={
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#cd412b] to-[#8a2a1c] text-white font-semibold text-lg">
          🛠️
        </span>
      }
      description="شرح برنامج رست - Rust"
      breadcrumbs={[
        { label: "دليل الخطوات", href: "/" },
        { label: "رست", href: "/rust/guide" },
      ]}
      lastUpdated="3 weeks ago"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#e2dfe0] mb-6 flex items-center gap-2">
          <a href="#about" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
          عن برنامج رست 🎮
        </h2>

        <p className="text-[#a8a3a4] mb-6">
          برنامج رست المتقدم للعبة Rust مع مميزات قوية للبقاء والسيطرة.
        </p>

        <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4">المميزات:</h3>
        <ul className="space-y-3 text-[#a8a3a4] mr-4 mb-8">
          <li className="flex items-start gap-2">
            <span className="text-[#cd412b]">✓</span>
            <span>ESP للاعبين والحيوانات</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#cd412b]">✓</span>
            <span>ESP للموارد والصناديق</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#cd412b]">✓</span>
            <span>Aimbot مع إعدادات متقدمة</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#cd412b]">✓</span>
            <span>No Recoil للأسلحة</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#cd412b]">✓</span>
            <span>Admin Radar</span>
          </li>
        </ul>

        <blockquote className="my-6 border-r-4 border-[#cd412b] pr-4 py-2">
          <p className="text-[#a8a3a4]">
            <strong className="text-[#cd412b]">⚠️ تنبيه:</strong> تأكد من استخدام البرنامج في سيرفرات مناسبة فقط.
          </p>
        </blockquote>

        <div className="p-6 bg-[#252525] rounded-xl border border-[#333] text-center">
          <p className="text-[#a8a3a4] mb-4">للحصول على شرح مفصل:</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#cd412b] text-white rounded-lg font-medium hover:bg-[#a83522] transition-colors"
          >
            شاهد الشرح
          </a>
        </div>
      </section>
    </DocLayout>
  );
}
