import DocLayout from "@/components/DocLayout";

export default function FifaGuide() {
  return (
    <DocLayout
      title="شرح التشغيل"
      titleIcon={
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#1e6b30] to-[#0d3318] text-white font-semibold text-lg">
          ⚽
        </span>
      }
      description="شرح برنامج فيفا"
      breadcrumbs={[
        { label: "دليل الخطوات", href: "/" },
        { label: "فيفا", href: "/fifa/guide" },
      ]}
      lastUpdated="1 month ago"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#e2dfe0] mb-6">عن برنامج فيفا ⚽</h2>

        <p className="text-[#a8a3a4] mb-6">
          برنامج فيفا المطور خصيصاً لـ EA FC (FIFA).
        </p>

        <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4">المميزات:</h3>
        <ul className="space-y-3 text-[#a8a3a4] mr-4 mb-8">
          <li className="flex items-start gap-2">
            <span className="text-[#22c55e]">✓</span>
            <span>Auto Skills</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#22c55e]">✓</span>
            <span>Perfect Timing</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#22c55e]">✓</span>
            <span>Vision Assist</span>
          </li>
        </ul>

        <div className="p-6 bg-[#252525] rounded-xl border border-[#333] text-center">
          <p className="text-[#a8a3a4] mb-4">للحصول على شرح مفصل:</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e6b30] text-white rounded-lg font-medium hover:bg-[#165524] transition-colors"
          >
            شاهد الشرح
          </a>
        </div>
      </section>
    </DocLayout>
  );
}
