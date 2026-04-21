import DocLayout from "@/components/DocLayout";

export default function Engine() {
  return (
    <DocLayout
      title="انجن"
      titleIcon={
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#9333ea] to-[#5b21b6] text-white font-semibold text-lg">
          4
        </span>
      }
      description="برنامج انجن لكول اوف ديوتي"
      breadcrumbs={[
        { label: "دليل الخطوات", href: "/" },
        { label: "قسم كول اوف ديوتي", href: "/cod/progress" },
      ]}
      prevPage={{ title: "اوينز V2", href: "/cod/owens-v2" }}
      lastUpdated="3 months ago"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#e2dfe0] mb-6 flex items-center gap-2">
          <a href="#about" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
          عن انجن 🎮
        </h2>

        <p className="text-[#a8a3a4] mb-6">
          برنامج انجن هو أحدث برامجنا لكول اوف ديوتي مع تقنيات متطورة.
        </p>

        <div className="p-6 bg-[#252525] rounded-xl border border-[#333] text-center">
          <p className="text-[#a8a3a4] mb-4">للحصول على شرح مفصل وتحميل البرنامج:</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#9333ea] to-[#6d28d9] text-white rounded-lg font-medium hover:opacity-90 transition-colors"
          >
            تواصل مع الدعم
          </a>
        </div>
      </section>
    </DocLayout>
  );
}
