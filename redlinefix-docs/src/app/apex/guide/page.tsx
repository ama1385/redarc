import DocLayout from "@/components/DocLayout";

export default function ApexGuide() {
  return (
    <DocLayout
      title="شرح ابكس"
      titleIcon={
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#da292a] to-[#8b1a1a] text-white font-semibold text-lg">
          🔥
        </span>
      }
      description="شرح برنامج ابكس ليجندز - Apex Legends"
      breadcrumbs={[
        { label: "دليل الخطوات", href: "/" },
        { label: "ابكس ليجندز", href: "/apex/guide" },
      ]}
      nextPage={{ title: "حلول المشاكل", href: "/apex/solutions" }}
      lastUpdated="2 weeks ago"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#e2dfe0] mb-6 flex items-center gap-2">
          <a href="#about" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
          عن برنامج ابكس ليجندز 🎮
        </h2>

        <p className="text-[#a8a3a4] mb-6">
          برنامج ابكس ليجندز المتطور مع مميزات حصرية للعبة Apex Legends.
        </p>

        <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4">المميزات:</h3>
        <ul className="space-y-3 text-[#a8a3a4] mr-4 mb-8">
          <li className="flex items-start gap-2">
            <span className="text-[#da292a]">✓</span>
            <span>ESP للاعبين والعناصر</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#da292a]">✓</span>
            <span>Aimbot مع Prediction</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#da292a]">✓</span>
            <span>No Recoil متقدم</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#da292a]">✓</span>
            <span>Glow ESP</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#da292a]">✓</span>
            <span>تحديثات فورية مع كل باتش</span>
          </li>
        </ul>

        <div className="p-6 bg-[#252525] rounded-xl border border-[#333] text-center">
          <p className="text-[#a8a3a4] mb-4">للحصول على شرح مفصل:</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#da292a] text-white rounded-lg font-medium hover:bg-[#b52223] transition-colors"
          >
            شاهد الشرح
          </a>
        </div>
      </section>
    </DocLayout>
  );
}
