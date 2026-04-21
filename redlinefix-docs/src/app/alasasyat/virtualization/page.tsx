import DocLayout from "@/components/DocLayout";

export default function Virtualization() {
  const tocItems = [
    { id: "check-virtualization", title: "التحقق من دعم Virtualization عبر Task Manager", level: 1 },
    { id: "steps-virtualization", title: "خطوات تمكين/التحقق من Virtualization", level: 1 },
    { id: "bios-virtualization", title: "تفعيل المحاكاة الافتراضية من BIOS", level: 1 },
    { id: "general-steps", title: "الخطوات العامة", level: 2 },
    { id: "intel-steps", title: "إذا كنت تستخدم معالج Intel", level: 2 },
    { id: "amd-steps", title: "إذا كنت تستخدم معالج AMD", level: 2 },
  ];

  return (
    <DocLayout
      title="تمكين Virtualization"
      titleIcon={
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#4a6670] to-[#3a5560] text-white font-semibold text-lg">
          2
        </span>
      }
      description="هذي الصفحة راح تعلمك كيف تفعّل Virtualization في جهازك عشان البرنامج يشتغل بدون مشاكل."
      breadcrumbs={[
        { label: "دليل الخطوات", href: "/" },
        { label: "الأساسيات", href: "/alasasyat/mttlbat-alnzam" },
      ]}
      tocItems={tocItems}
      prevPage={{ title: "متطلبات النظام الأساسية", href: "/alasasyat/mttlbat-alnzam" }}
      nextPage={{ title: "تعطيل Secure Boot", href: "/alasasyat/secure-boot" }}
      lastUpdated="8 months ago"
    >
      {/* Check if Virtualization is enabled */}
      <section className="mb-10">
        <p className="text-[#a8a3a4] mb-6">
          هل Virtualization مفعّلة بالفعل؟ 🤔
        </p>

        <ol className="space-y-4 text-[#a8a3a4] list-decimal list-inside mr-4">
          <li className="leading-relaxed">
            افتح <strong className="text-[#e2dfe0]">Task Manager</strong> بالضغط على <code className="code-block text-xs mx-1">Ctrl + Shift + Esc</code>.
          </li>
          <li className="leading-relaxed">
            اذهب إلى تبويب <strong className="text-[#e2dfe0]">Performance</strong>.
          </li>
          <li className="leading-relaxed">
            اختر <strong className="text-[#e2dfe0]">CPU</strong> من القائمة الجانبية.
          </li>
          <li className="leading-relaxed">
            في الأسفل ستجد حالة <strong className="text-[#e2dfe0]">Virtualization: Enabled</strong> أو <strong className="text-[#e2dfe0]">Disabled</strong>
            <blockquote className="mt-3 border-r-4 border-[#586aac] pr-4 py-2">
              <p>إذا كانت <strong className="text-[#e2dfe0]">Enabled</strong> فأنت جاهز ✅</p>
              <p>إذا كانت <strong className="text-[#e2dfe0]">Disabled</strong> اتبع الخطوات السابقة لتفعيلها من BIOS</p>
            </blockquote>
          </li>
        </ol>

        <div className="my-8">
          <div className="bg-[#252525] rounded-xl overflow-hidden border border-[#333]">
            <img
              src="https://ext.same-assets.com/3659576729/1309291376.png"
              alt="Task Manager Virtualization"
              className="w-full"
            />
          </div>
          <p className="text-center text-sm text-[#85a1ac] mt-3 italic">Task Manager Virtualization</p>
        </div>
      </section>

      {/* Check Virtualization via Task Manager */}
      <section id="check-virtualization" className="mb-10">
        <h2 className="text-2xl font-bold text-[#e2dfe0] mb-6 flex items-center gap-2">
          <a href="#check-virtualization" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
          التحقق من دعم Virtualization عبر Task Manager 🔍
        </h2>
      </section>

      {/* Steps to enable/check Virtualization */}
      <section id="steps-virtualization" className="mb-10">
        <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4 flex items-center gap-2">
          <a href="#steps-virtualization" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
          خطوات تمكين/التحقق من Virtualization:
        </h3>

        <ol className="space-y-4 text-[#a8a3a4] list-decimal list-inside mr-4">
          <li className="leading-relaxed">
            افتح <strong className="text-[#e2dfe0]">شريط البحث</strong> في Windows واكتب: <code className="code-block text-xs mx-1">System Information</code>
          </li>
          <li className="leading-relaxed">
            افتح التطبيق، وابحث عن:
            <ul className="mt-3 mr-6 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#746c6d]"></span>
                <strong className="text-[#e2dfe0]">BaseBoard Manufacturer</strong> (الشركة المصنعة للوحة الأم)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#746c6d]"></span>
                <strong className="text-[#e2dfe0]">BaseBoard Product</strong> (موديل اللوحة)
              </li>
            </ul>
          </li>
        </ol>

        <blockquote className="mt-6 border-r-4 border-[#586aac] pr-4 py-2">
          <p className="text-[#a8a3a4]">
            ستحتاج هذه المعلومات لاحقًا للدخول إلى موقع الشركة والتأكد من دعم المحاكاة الافتراضية (Virtualization). 💡
          </p>
        </blockquote>

        <div className="my-8">
          <div className="bg-[#252525] rounded-xl overflow-hidden border border-[#333]">
            <img
              src="https://ext.same-assets.com/3659576729/892496983.png"
              alt="System Information"
              className="w-full"
            />
          </div>
          <p className="text-center text-sm text-[#85a1ac] mt-3 italic font-semibold">System Information</p>
        </div>
      </section>

      {/* Enable Virtualization from BIOS */}
      <section id="bios-virtualization" className="mb-10">
        <h2 className="text-2xl font-bold text-[#e2dfe0] mb-6 flex items-center gap-2">
          <a href="#bios-virtualization" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
          تفعيل المحاكاة الافتراضية ⚙️ (Virtualization) من BIOS
        </h2>

        <p className="text-[#a8a3a4] mb-6">
          لتجنب مشاكل في تشغيل بعض الأدوات، قد تحتاج إلى{" "}
          <span className="text-[color:var(--accent-text)] font-semibold">تفعيل المحاكاة الافتراضية</span>{" "}
          من إعدادات <strong className="text-[#e2dfe0]">(Virtualization)</strong> BIOS.
        </p>

        {/* General Steps */}
        <section id="general-steps" className="mb-8">
          <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4 flex items-center gap-2">
            <a href="#general-steps" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
            الخطوات العامة: 📋
          </h3>

          <ol className="space-y-4 text-[#a8a3a4] list-decimal list-inside mr-4">
            <li className="leading-relaxed">
              <strong className="text-[#e2dfe0]">أعد تشغيل جهازك</strong>.
            </li>
            <li className="leading-relaxed">
              أثناء الإقلاع، اضغط على المفتاح الذي يفتح إعدادات الـ <strong className="text-[#e2dfe0]">BIOS</strong>
              <blockquote className="mt-2 border-r-4 border-[#586aac] pr-4 py-1">
                <p className="text-sm">(حسب نوع جهازك) غالبًا يكون <code className="code-block text-xs mx-1">F2</code> أو <code className="code-block text-xs mx-1">Del</code>.</p>
              </blockquote>
            </li>
          </ol>
        </section>

        {/* Intel Steps */}
        <section id="intel-steps" className="mb-8">
          <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4 flex items-center gap-2">
            <a href="#intel-steps" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
            إذا كنت تستخدم معالج Intel: 💻
          </h3>

          <ol className="space-y-3 text-[#a8a3a4] list-decimal list-inside mr-4">
            <li className="leading-relaxed">
              انتقل إلى تبويب <strong className="text-[#e2dfe0]">Advanced</strong>.
            </li>
            <li className="leading-relaxed">
              اختر <strong className="text-[#e2dfe0]">CPU Configuration</strong>.
            </li>
            <li className="leading-relaxed">
              فعّل الخيار: <strong className="text-[#e2dfe0]">Intel Virtualization Technology</strong>.
            </li>
            <li className="leading-relaxed">
              احفظ التغييرات (عادة بالضغط على <code className="code-block text-xs mx-1">F10</code>) ثم اخرج من BIOS.
            </li>
          </ol>
        </section>

        {/* AMD Steps */}
        <section id="amd-steps" className="mb-8">
          <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4 flex items-center gap-2">
            <a href="#amd-steps" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
            إذا كنت تستخدم معالج AMD: 💻
          </h3>

          <ol className="space-y-3 text-[#a8a3a4] list-decimal list-inside mr-4">
            <li className="leading-relaxed">
              انتقل إلى تبويب <strong className="text-[#e2dfe0]">Advanced</strong>.
            </li>
            <li className="leading-relaxed">
              اختر <strong className="text-[#e2dfe0]">CPU Configuration</strong>.
            </li>
            <li className="leading-relaxed">
              فعّل الخيار: <strong className="text-[#e2dfe0]">SVM Mode</strong>.
            </li>
            <li className="leading-relaxed">
              احفظ التغييرات ثم اخرج من BIOS.
            </li>
          </ol>
        </section>

        {/* BIOS Example Table */}
        <div className="my-8">
          <div className="bg-[#252525] rounded-xl overflow-hidden border border-[#333]">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-[#333]">
                  <td className="text-[#a8a3a4] py-3 px-4">BaseBoard Manufacturer</td>
                  <td className="text-[#e2dfe0] py-3 px-4">ASUSTeK COMPUTER INC.</td>
                </tr>
                <tr>
                  <td className="text-[#a8a3a4] py-3 px-4">BaseBoard Product</td>
                  <td className="text-[#e2dfe0] py-3 px-4">ROG STRIX B550-A GAMING</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-[#85a1ac] mt-3 italic">BIOS Example</p>
        </div>

        <p className="text-[color:var(--accent-text)] font-semibold text-center">
          إذا واجهت أي مشاكل أثناء التفعيل، تواصل مع فريق الدعم عشان يساعدونك.
        </p>
      </section>
    </DocLayout>
  );
}
