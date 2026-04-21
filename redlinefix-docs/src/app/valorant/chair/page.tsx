import DocLayout from "@/components/DocLayout";

export default function ValorantChair() {
  return (
    <DocLayout
      title="كرسي فالورانت"
      titleIcon={
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#ff4655] to-[#0f1923] text-white font-semibold text-lg">
          V
        </span>
      }
      description="شرح برنامج فالورانت"
      breadcrumbs={[
        { label: "دليل الخطوات", href: "/" },
        { label: "فالورانت", href: "/valorant/chair" },
      ]}
      lastUpdated="2 months ago"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#e2dfe0] mb-6 flex items-center gap-2">
          <a href="#about" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
          عن برنامج فالورانت 🎮
        </h2>

        <p className="text-[#a8a3a4] mb-6">
          برنامج فالورانت المتطور مع مميزات حصرية.
        </p>

        <blockquote className="my-6 border-r-4 border-[#ff4655] pr-4 py-2">
          <p className="text-[#a8a3a4]">
            <strong className="text-[#ff4655]">⚠️ تنبيه:</strong> تأكد من إكمال جميع خطوات الأساسيات قبل استخدام البرنامج.
          </p>
        </blockquote>

        <div className="p-6 bg-[#252525] rounded-xl border border-[#333] text-center">
          <p className="text-[#a8a3a4] mb-4">للحصول على شرح مفصل:</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff4655] text-white rounded-lg font-medium hover:bg-[#cc3844] transition-colors"
          >
            تواصل مع الدعم
          </a>
        </div>
      </section>
    </DocLayout>
  );
}
