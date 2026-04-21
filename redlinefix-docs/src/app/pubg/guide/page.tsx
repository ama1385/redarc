import DocLayout from "@/components/DocLayout";

export default function PubgGuide() {
  return (
    <DocLayout
      title="شرح ببجي"
      titleIcon={
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#f2a900] to-[#d4940a] text-white font-semibold text-lg">
          🎯
        </span>
      }
      description="شرح برنامج ببجي - PUBG"
      breadcrumbs={[
        { label: "دليل الخطوات", href: "/" },
        { label: "ببجي", href: "/pubg/guide" },
      ]}
      nextPage={{ title: "الإعدادات المثالية", href: "/pubg/settings" }}
      lastUpdated="1 month ago"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#e2dfe0] mb-6 flex items-center gap-2">
          <a href="#about" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
          عن برنامج ببجي 🎮
        </h2>

        <p className="text-[#a8a3a4] mb-6">
          برنامج ببجي المطور خصيصاً لتقديم أفضل تجربة لعب في PUBG: Battlegrounds.
        </p>

        <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4">المميزات:</h3>
        <ul className="space-y-3 text-[#a8a3a4] mr-4 mb-8">
          <li className="flex items-start gap-2">
            <span className="text-[#f2a900]">✓</span>
            <span>ESP متقدم للاعبين والمركبات</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#f2a900]">✓</span>
            <span>Aimbot ذكي مع تعديل السرعة</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#f2a900]">✓</span>
            <span>No Recoil</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#f2a900]">✓</span>
            <span>تحديثات مستمرة</span>
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4">المتطلبات:</h3>
        <div className="bg-[#252525] rounded-xl overflow-hidden border border-[#333] mb-8">
          <table className="w-full">
            <tbody>
              <tr className="border-b border-[#333]">
                <td className="text-[#a8a3a4] py-3 px-4">نظام التشغيل</td>
                <td className="text-[#e2dfe0] py-3 px-4">Windows 10/11</td>
              </tr>
              <tr className="border-b border-[#333]">
                <td className="text-[#a8a3a4] py-3 px-4">اللعبة</td>
                <td className="text-[#e2dfe0] py-3 px-4">PUBG Steam</td>
              </tr>
              <tr>
                <td className="text-[#a8a3a4] py-3 px-4">Windows Defender</td>
                <td className="text-[#e2dfe0] py-3 px-4">معطّل</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-[#252525] rounded-xl border border-[#333] text-center">
          <p className="text-[#a8a3a4] mb-4">للحصول على شرح مفصل:</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#f2a900] text-[#1c1c1c] rounded-lg font-medium hover:bg-[#d4940a] transition-colors"
          >
            شاهد الشرح
          </a>
        </div>
      </section>
    </DocLayout>
  );
}
