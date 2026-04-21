import DocLayout from "@/components/DocLayout";

export default function HyperV() {
  const tocItems = [
    { id: "tfayl-hyper-v", title: "تفعيل Hyper-V", level: 1 },
    { id: "windows-features", title: "عبر Windows Features", level: 2 },
    { id: "powershell", title: "عبر PowerShell", level: 2 },
  ];

  return (
    <DocLayout
      title="تفعيل Hyper-V"
      titleIcon={
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#4a6670] to-[#3a5560] text-white font-semibold text-lg">
          4
        </span>
      }
      description="هذي الصفحة راح تعلمك كيف تفعّل Hyper-V في جهازك عشان البرنامج يشتغل بدون مشاكل."
      breadcrumbs={[
        { label: "دليل الخطوات", href: "/" },
        { label: "الأساسيات", href: "/alasasyat/mttlbat-alnzam" },
      ]}
      tocItems={tocItems}
      prevPage={{ title: "تعطيل Secure Boot", href: "/alasasyat/secure-boot" }}
      nextPage={{ title: "تعطيل Memory Integrity", href: "/alasasyat/memory-integrity" }}
      lastUpdated="8 months ago"
    >
      {/* تفعيل Hyper-V */}
      <section id="tfayl-hyper-v" className="mb-12">
        <h2 className="text-2xl font-bold text-[#e2dfe0] mb-6 flex items-center gap-2">
          <a href="#tfayl-hyper-v" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
          تفعيل Hyper-V 🖥️
        </h2>

        <p className="text-[#a8a3a4] mb-6">
          Hyper-V هي ميزة في Windows تسمح بتشغيل أنظمة تشغيل افتراضية. بعض البرامج تتطلب تفعيلها.
        </p>

        {/* عبر Windows Features */}
        <section id="windows-features" className="mb-10">
          <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4 flex items-center gap-2">
            <a href="#windows-features" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
            عبر Windows Features: 🔧
          </h3>

          <ol className="space-y-4 text-[#a8a3a4] list-decimal list-inside mr-4">
            <li className="leading-relaxed">
              افتح <strong className="text-[#e2dfe0]">شريط البحث</strong> في Windows واكتب:
              <code className="code-block mx-2">Turn Windows features on or off</code>
            </li>
            <li className="leading-relaxed">
              ابحث عن <strong className="text-[#e2dfe0]">Hyper-V</strong> في القائمة.
            </li>
            <li className="leading-relaxed">
              ضع علامة ✓ بجانب <strong className="text-[#e2dfe0]">Hyper-V</strong> وكل الخيارات الفرعية.
            </li>
            <li className="leading-relaxed">
              اضغط <strong className="text-[#e2dfe0]">OK</strong> وانتظر حتى يكتمل التثبيت.
            </li>
            <li className="leading-relaxed">
              <strong className="text-[color:var(--accent-text)]">أعد تشغيل الجهاز</strong> لتفعيل التغييرات.
            </li>
          </ol>
        </section>

        {/* عبر PowerShell */}
        <section id="powershell" className="mb-10">
          <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4 flex items-center gap-2">
            <a href="#powershell" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
            عبر PowerShell: 💻
          </h3>

          <ol className="space-y-4 text-[#a8a3a4] list-decimal list-inside mr-4">
            <li className="leading-relaxed">
              افتح <strong className="text-[#e2dfe0]">PowerShell</strong> كـ Administrator.
            </li>
            <li className="leading-relaxed">
              اكتب الأمر التالي:
              <div className="my-4 bg-[#1a1a1a] rounded-lg p-4 border border-[#333]">
                <code className="text-[#85a1ac] font-mono text-sm" dir="ltr">
                  Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
                </code>
              </div>
            </li>
            <li className="leading-relaxed">
              اضغط <strong className="text-[#e2dfe0]">Enter</strong> وانتظر حتى يكتمل التثبيت.
            </li>
            <li className="leading-relaxed">
              <strong className="text-[color:var(--accent-text)]">أعد تشغيل الجهاز</strong> عند الطلب.
            </li>
          </ol>
        </section>

        <blockquote className="my-6 text-[#a8a3a4] py-2 border-r-4 border-[#586aac] pr-4">
          <strong style={{ color: "var(--text-primary)" }}>⚠️ ملاحظة:</strong> Hyper-V متوفر فقط في إصدارات Windows 10/11 Pro و Enterprise و Education. إذا كنت تستخدم إصدار Home، قد تحتاج لتفعيلها بطريقة مختلفة.
        </blockquote>

        <p className="text-[#a8a3a4] leading-relaxed">
          بعد إكمال الخطوات، Hyper-V راح يكون مفعّل وجاهز للاستخدام. إذا واجهت أي مشاكل، تواصل مع فريق الدعم.
        </p>
      </section>
    </DocLayout>
  );
}
