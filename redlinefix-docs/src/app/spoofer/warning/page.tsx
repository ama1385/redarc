import DocLayout from "@/components/DocLayout";

export default function SpooferWarning() {
  return (
    <DocLayout
      title="التحذير"
      titleIcon={
        <span
          className="w-10 h-10 flex items-center justify-center rounded-lg font-semibold text-lg"
          style={{ background: "var(--bg-tertiary)", color: "var(--text-primary)" }}
        >
          ⚠️
        </span>
      }
      description="تحذيرات مهمة قبل استخدام السبوفر"
      breadcrumbs={[
        { label: "دليل الخطوات", href: "/" },
        { label: "سبوفر تيمب", href: "/spoofer/warning" },
      ]}
      nextPage={{ title: "تشغيل البرنامج", href: "/spoofer/run" }}
      lastUpdated="2 months ago"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
          <a href="#warning" className="hover:opacity-80" style={{ color: "var(--text-muted)" }}>
            #
          </a>
          تحذيرات مهمة ⚠️
        </h2>

        <div className="p-6 rounded-xl mb-6 border" style={{ background: "var(--bg-secondary)", borderColor: "var(--border-color)" }}>
          <h3 className="text-lg font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
            قبل استخدام السبوفر:
          </h3>
          <ul className="space-y-3" style={{ color: "var(--text-secondary)" }}>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--accent-text)" }}>1.</span>
              <span>
                تأكد من إكمال جميع خطوات <strong style={{ color: "var(--text-primary)" }}>الأساسيات</strong>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--accent-text)" }}>2.</span>
              <span>أغلق جميع البرامج الأخرى</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--accent-text)" }}>3.</span>
              <span>
                شغّل البرنامج <strong style={{ color: "var(--text-primary)" }}>كمسؤول</strong>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--accent-text)" }}>4.</span>
              <span>لا تغلق البرنامج أثناء العمل</span>
            </li>
          </ul>
        </div>

        <blockquote className="border-r-4 pr-4 py-2" style={{ borderColor: "var(--accent-color)" }}>
          <p style={{ color: "var(--text-secondary)" }}>
            <strong style={{ color: "var(--text-primary)" }}>تنبيه:</strong> استخدام السبوفر بشكل خاطئ قد يسبب مشاكل. اتبع التعليمات بدقة.
          </p>
        </blockquote>
      </section>
    </DocLayout>
  );
}
