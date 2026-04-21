import DocLayout from "@/components/DocLayout";

export default function Progress() {
  const tocItems = [
    { id: "about", title: "عن البرنامج", level: 1 },
    { id: "features", title: "المميزات", level: 2 },
    { id: "requirements", title: "المتطلبات", level: 2 },
    { id: "how-to-use", title: "طريقة الاستخدام", level: 2 },
  ];

  return (
    <DocLayout
      title="بروقرس"
      titleIcon={
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#9333ea] to-[#5b21b6] text-white font-semibold text-lg">
          1
        </span>
      }
      description="برنامج بروقرس لكول اوف ديوتي - أفضل تجربة لعب"
      breadcrumbs={[
        { label: "دليل الخطوات", href: "/" },
        { label: "قسم كول اوف ديوتي", href: "/cod/progress" },
      ]}
      tocItems={tocItems}
      nextPage={{ title: "فكتورتي", href: "/cod/victory" }}
      lastUpdated="3 months ago"
    >
      <section id="about" className="mb-12">
        <h2 className="text-2xl font-bold text-[#e2dfe0] mb-6 flex items-center gap-2">
          <a href="#about" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
          عن البرنامج 🎮
        </h2>

        <p className="text-[#a8a3a4] mb-6">
          برنامج بروقرس هو أحد أفضل البرامج لكول اوف ديوتي، يوفر تجربة لعب سلسة ومميزات متقدمة.
        </p>

        <section id="features" className="mb-10">
          <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4 flex items-center gap-2">
            <a href="#features" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
            المميزات: ⭐
          </h3>

          <ul className="space-y-3 text-[#a8a3a4] mr-4">
            <li className="flex items-start gap-2">
              <span className="text-[#85a1ac]">✓</span>
              <span>واجهة سهلة الاستخدام</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#85a1ac]">✓</span>
              <span>تحديثات مستمرة</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#85a1ac]">✓</span>
              <span>دعم فني على مدار الساعة</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#85a1ac]">✓</span>
              <span>أمان عالي</span>
            </li>
          </ul>
        </section>

        <section id="requirements" className="mb-10">
          <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4 flex items-center gap-2">
            <a href="#requirements" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
            المتطلبات: 📋
          </h3>

          <div className="bg-[#252525] rounded-xl overflow-hidden border border-[#333]">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-[#333]">
                  <td className="text-[#a8a3a4] py-3 px-4">نظام التشغيل</td>
                  <td className="text-[#e2dfe0] py-3 px-4">Windows 10/11</td>
                </tr>
                <tr className="border-b border-[#333]">
                  <td className="text-[#a8a3a4] py-3 px-4">Virtualization</td>
                  <td className="text-[#e2dfe0] py-3 px-4">مفعّل</td>
                </tr>
                <tr className="border-b border-[#333]">
                  <td className="text-[#a8a3a4] py-3 px-4">Secure Boot</td>
                  <td className="text-[#e2dfe0] py-3 px-4">معطّل</td>
                </tr>
                <tr>
                  <td className="text-[#a8a3a4] py-3 px-4">Windows Defender</td>
                  <td className="text-[#e2dfe0] py-3 px-4">معطّل</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="how-to-use" className="mb-10">
          <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4 flex items-center gap-2">
            <a href="#how-to-use" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
            طريقة الاستخدام: 🚀
          </h3>

          <ol className="space-y-4 text-[#a8a3a4] list-decimal list-inside mr-4">
            <li className="leading-relaxed">
              تأكد من إكمال جميع خطوات <strong className="text-[#e2dfe0]">الأساسيات</strong>.
            </li>
            <li className="leading-relaxed">
              حمّل البرنامج من <strong className="text-[#e2dfe0]">اللودر</strong>.
            </li>
            <li className="leading-relaxed">
              شغّل البرنامج <strong className="text-[#e2dfe0]">كمسؤول</strong>.
            </li>
            <li className="leading-relaxed">
              ادخل <strong className="text-[#e2dfe0]">مفتاح التفعيل</strong>.
            </li>
            <li className="leading-relaxed">
              افتح <strong className="text-[#e2dfe0]">اللعبة</strong> واستمتع!
            </li>
          </ol>

          <blockquote className="mt-6 border-r-4 border-[color:var(--accent-color)] pr-4 py-2">
            <p className="text-[#a8a3a4]">
              <strong className="text-[color:var(--accent-text)]">⚠️ مهم:</strong> لا تشارك مفتاح التفعيل مع أي شخص.
            </p>
          </blockquote>
        </section>
      </section>
    </DocLayout>
  );
}
