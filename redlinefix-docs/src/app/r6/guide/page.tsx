import DocLayout from "@/components/DocLayout";

export default function R6Guide() {
  return (
    <DocLayout
      title="شرح R6"
      titleIcon={
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#2a5298] to-[#1e3a6e] text-white font-semibold text-lg">
          🎖️
        </span>
      }
      description="شرح برنامج رينبو سيكس سيج - Rainbow Six Siege"
      breadcrumbs={[
        { label: "دليل الخطوات", href: "/" },
        { label: "رينبو سيكس", href: "/r6/guide" },
      ]}
      lastUpdated="1 month ago"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#e2dfe0] mb-6 flex items-center gap-2">
          <a href="#about" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
          عن برنامج رينبو سيكس 🎮
        </h2>

        <p className="text-[#a8a3a4] mb-6">
          برنامج Rainbow Six Siege المتطور مع مميزات تكتيكية متقدمة.
        </p>

        <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4">المميزات:</h3>
        <ul className="space-y-3 text-[#a8a3a4] mr-4 mb-8">
          <li className="flex items-start gap-2">
            <span className="text-[#2a5298]">✓</span>
            <span>ESP للاعبين عبر الجدران</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#2a5298]">✓</span>
            <span>ESP للأجهزة والكاميرات</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#2a5298]">✓</span>
            <span>Aimbot دقيق</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#2a5298]">✓</span>
            <span>No Recoil</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#2a5298]">✓</span>
            <span>Outline ESP</span>
          </li>
        </ul>

        <div className="bg-[#252525] rounded-xl overflow-hidden border border-[#333] mb-8">
          <table className="w-full">
            <tbody>
              <tr className="border-b border-[#333]">
                <td className="text-[#a8a3a4] py-3 px-4">نظام التشغيل</td>
                <td className="text-[#e2dfe0] py-3 px-4">Windows 10/11</td>
              </tr>
              <tr className="border-b border-[#333]">
                <td className="text-[#a8a3a4] py-3 px-4">المنصة</td>
                <td className="text-[#e2dfe0] py-3 px-4">Steam / Ubisoft</td>
              </tr>
              <tr>
                <td className="text-[#a8a3a4] py-3 px-4">Anti-Cheat</td>
                <td className="text-[#e2dfe0] py-3 px-4">BattlEye Bypass</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-[#252525] rounded-xl border border-[#333] text-center">
          <p className="text-[#a8a3a4] mb-4">للحصول على شرح مفصل:</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2a5298] text-white rounded-lg font-medium hover:bg-[#234480] transition-colors"
          >
            شاهد الشرح
          </a>
        </div>
      </section>
    </DocLayout>
  );
}
