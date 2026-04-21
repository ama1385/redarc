import DocLayout from "@/components/DocLayout";

export default function RedEngine() {
  return (
    <DocLayout
      title="قسم ريد انجن"
      titleIcon={
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#f40552] to-[#831a3c] text-white font-semibold text-lg">
          5M
        </span>
      }
      description="برنامج ريد انجن لـ FiveM"
      breadcrumbs={[
        { label: "دليل الخطوات", href: "/" },
        { label: "FiveM", href: "/fivem/red-engine" },
      ]}
      nextPage={{ title: "قسم منيو نيكسوس", href: "/fivem/nexus" }}
      lastUpdated="3 months ago"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#e2dfe0] mb-6 flex items-center gap-2">
          <a href="#about" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
          عن ريد انجن 🎮
        </h2>

        <p className="text-[#a8a3a4] mb-6">
          ريد انجن هو أقوى برنامج لـ FiveM مع مميزات متقدمة وأداء عالي.
        </p>

        <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4">المميزات:</h3>
        <ul className="space-y-3 text-[#a8a3a4] mr-4 mb-8">
          <li className="flex items-start gap-2">
            <span className="text-[#f40552]">✓</span>
            <span>ESP متقدم</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#f40552]">✓</span>
            <span>Aimbot ذكي</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#f40552]">✓</span>
            <span>واجهة سهلة</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#f40552]">✓</span>
            <span>تحديثات مستمرة</span>
          </li>
        </ul>

        <div className="p-6 bg-[#252525] rounded-xl border border-[#333] text-center">
          <p className="text-[#a8a3a4] mb-4">للحصول على شرح مفصل:</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#f40552] text-white rounded-lg font-medium hover:bg-[#c40442] transition-colors"
          >
            شاهد الشرح
          </a>
        </div>
      </section>
    </DocLayout>
  );
}
