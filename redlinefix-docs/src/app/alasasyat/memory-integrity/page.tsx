import DocLayout from "@/components/DocLayout";

export default function MemoryIntegrity() {
  const tocItems = [
    { id: "tatyl-memory-integrity", title: "تعطيل Memory Integrity", level: 1 },
    { id: "khtwat-tatyl", title: "خطوات التعطيل", level: 2 },
  ];

  return (
    <DocLayout
      title="تعطيل Memory Integrity"
      titleIcon={
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#4a6670] to-[#3a5560] text-white font-semibold text-lg">
          5
        </span>
      }
      description="هذي الصفحة راح تعلمك كيف تعطّل Memory Integrity في جهازك عشان البرنامج يشتغل بدون مشاكل."
      breadcrumbs={[
        { label: "دليل الخطوات", href: "/" },
        { label: "الأساسيات", href: "/alasasyat/mttlbat-alnzam" },
      ]}
      tocItems={tocItems}
      prevPage={{ title: "تفعيل Hyper-V", href: "/alasasyat/hyper-v" }}
      lastUpdated="8 months ago"
    >
      {/* تعطيل Memory Integrity */}
      <section id="tatyl-memory-integrity" className="mb-12">
        <h2 className="text-2xl font-bold text-[#e2dfe0] mb-6 flex items-center gap-2">
          <a href="#tatyl-memory-integrity" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
          تعطيل Memory Integrity 🛡️
        </h2>

        <p className="text-[#a8a3a4] mb-6">
          Memory Integrity (أو Core Isolation) هي ميزة أمان في Windows تمنع البرامج الضارة من الوصول إلى عمليات النظام الحساسة. لكن بعض البرامج تتطلب تعطيلها للعمل بشكل صحيح.
        </p>

        {/* خطوات التعطيل */}
        <section id="khtwat-tatyl" className="mb-10">
          <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4 flex items-center gap-2">
            <a href="#khtwat-tatyl" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
            خطوات التعطيل: 🔧
          </h3>

          <ol className="space-y-4 text-[#a8a3a4] list-decimal list-inside mr-4">
            <li className="leading-relaxed">
              افتح <strong className="text-[#e2dfe0]">Windows Security</strong> من شريط البحث.
            </li>
            <li className="leading-relaxed">
              اذهب إلى <strong className="text-[#e2dfe0]">Device Security</strong>.
            </li>
            <li className="leading-relaxed">
              اضغط على <strong className="text-[#e2dfe0]">Core Isolation Details</strong>.
            </li>
            <li className="leading-relaxed">
              عطّل خيار <strong className="text-[#e2dfe0]">Memory Integrity</strong>.
            </li>
            <li className="leading-relaxed">
              <strong className="text-[color:var(--accent-text)]">أعد تشغيل الجهاز</strong> لتفعيل التغييرات.
            </li>
          </ol>

          <div className="my-8">
            <div className="bg-[#252525] rounded-xl overflow-hidden border border-[#333]">
              <img
                src="https://ext.same-assets.com/3659576729/256290202.png"
                alt="Core Isolation"
                className="w-full"
              />
            </div>
            <p className="text-center text-sm text-[#85a1ac] mt-3 italic">Core Isolation Settings</p>
          </div>
        </section>

        <blockquote className="my-6 text-[#a8a3a4] py-2 border-r-4 border-[#586aac] pr-4">
          <strong style={{ color: "var(--text-primary)" }}>⚠️ ملاحظة:</strong> إذا كان الخيار رمادي ولا يمكن تغييره، قد تحتاج إلى:
          <ul className="mt-2 mr-4 space-y-1">
            <li>• تحديث تعريفات الجهاز</li>
            <li>• تعطيله من Registry Editor</li>
            <li>• التواصل مع فريق الدعم</li>
          </ul>
        </blockquote>

        <p className="text-[#a8a3a4] leading-relaxed">
          بعد إكمال الخطوات، Memory Integrity راح يكون معطّل. إذا واجهت أي مشاكل، تواصل مع فريق الدعم.
        </p>

        <div className="mt-8 p-4 bg-[#252525] rounded-xl border border-[#333]">
          <p className="text-[color:var(--accent-text)] font-semibold text-center">
            🎉 تهانينا! أنت الآن جاهز لاستخدام البرنامج
          </p>
          <p className="text-[#a8a3a4] text-center mt-2">
            بعد إكمال جميع الخطوات في قسم الأساسيات، جهازك جاهز لتشغيل برامجنا بدون مشاكل.
          </p>
        </div>
      </section>
    </DocLayout>
  );
}
