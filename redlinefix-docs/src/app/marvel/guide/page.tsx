import DocLayout from "@/components/DocLayout";

export default function MarvelGuide() {
  return (
    <DocLayout
      title="شرح مارفل"
      titleIcon={
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#ed1d24] to-[#1a1a1a] text-white font-semibold text-lg">
          M
        </span>
      }
      description="شرح برنامج مارفل رايفلز"
      breadcrumbs={[
        { label: "دليل الخطوات", href: "/" },
        { label: "مارفل رايفلز", href: "/marvel/guide" },
      ]}
      lastUpdated="1 month ago"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#e2dfe0] mb-6 flex items-center gap-2">
          <a href="#about" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
          عن مارفل رايفلز 🦸
        </h2>

        <p className="text-[#a8a3a4] mb-6">
          برنامج مارفل رايفلز للعبة Marvel Rivals الجديدة.
        </p>

        <div className="p-6 bg-[#252525] rounded-xl border border-[#333] text-center">
          <p className="text-[#a8a3a4] mb-4">للحصول على شرح مفصل:</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#ed1d24] text-white rounded-lg font-medium hover:bg-[#c4181e] transition-colors"
          >
            شاهد الشرح
          </a>
        </div>
      </section>
    </DocLayout>
  );
}
