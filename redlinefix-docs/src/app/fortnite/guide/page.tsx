import DocLayout from "@/components/DocLayout";

export default function FortniteGuide() {
  return (
    <DocLayout
      title="شرح فورت"
      titleIcon={
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#9945FF] to-[#14F195] text-white font-semibold text-lg">
          🎯
        </span>
      }
      description="شرح برنامج فورتنايت"
      breadcrumbs={[
        { label: "دليل الخطوات", href: "/" },
        { label: "فورت", href: "/fortnite/guide" },
      ]}
      lastUpdated="2 months ago"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#e2dfe0] mb-6 flex items-center gap-2">
          <a href="#about" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
          عن برنامج فورتنايت 🎮
        </h2>

        <p className="text-[#a8a3a4] mb-6">
          برنامج فورتنايت المطور خصيصاً لتقديم أفضل تجربة لعب.
        </p>

        <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4">المتطلبات:</h3>
        <ul className="space-y-3 text-[#a8a3a4] mr-4 mb-8">
          <li className="flex items-start gap-2">
            <span className="text-[#85a1ac]">✓</span>
            <span>إكمال خطوات الأساسيات</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#85a1ac]">✓</span>
            <span>فورتنايت محدثة لآخر إصدار</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#85a1ac]">✓</span>
            <span>مفتاح تفعيل ساري</span>
          </li>
        </ul>

        <div className="p-6 bg-[#252525] rounded-xl border border-[#333] text-center">
          <p className="text-[#a8a3a4] mb-4">للحصول على شرح مفصل:</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#9945FF] text-white rounded-lg font-medium hover:bg-[#7a35cc] transition-colors"
          >
            شاهد الشرح
          </a>
        </div>
      </section>
    </DocLayout>
  );
}
