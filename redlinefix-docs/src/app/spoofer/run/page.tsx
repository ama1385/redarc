import DocLayout from "@/components/DocLayout";

export default function SpooferRun() {
  return (
    <DocLayout
      title="تشغيل البرنامج"
      titleIcon={
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#22c55e] to-[#16a34a] text-white font-semibold text-lg">
          ▶️
        </span>
      }
      description="طريقة تشغيل السبوفر"
      breadcrumbs={[
        { label: "دليل الخطوات", href: "/" },
        { label: "سبوفر تيمب", href: "/spoofer/warning" },
      ]}
      prevPage={{ title: "التحذير", href: "/spoofer/warning" }}
      lastUpdated="2 months ago"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#e2dfe0] mb-6">تشغيل السبوفر 🚀</h2>

        <ol className="space-y-4 text-[#a8a3a4] list-decimal list-inside mr-4 mb-8">
          <li className="leading-relaxed">
            حمّل البرنامج من <strong className="text-[#e2dfe0]">اللودر</strong>
          </li>
          <li className="leading-relaxed">
            استخرج الملفات في مجلد جديد
          </li>
          <li className="leading-relaxed">
            شغّل <strong className="text-[#e2dfe0]">Spoofer.exe</strong> كمسؤول
          </li>
          <li className="leading-relaxed">
            اضغط على <strong className="text-[#e2dfe0]">Spoof</strong>
          </li>
          <li className="leading-relaxed">
            انتظر حتى تظهر رسالة <strong className="text-[#22c55e]">Success</strong>
          </li>
          <li className="leading-relaxed">
            <strong className="text-[color:var(--accent-text)]">أعد تشغيل الجهاز</strong>
          </li>
        </ol>

        <div className="p-4 bg-[#1a3d1a] border border-[#22c55e] rounded-xl">
          <p className="text-[#22c55e] font-semibold">✅ بعد إعادة التشغيل، جهازك جاهز للعب!</p>
        </div>
      </section>
    </DocLayout>
  );
}
