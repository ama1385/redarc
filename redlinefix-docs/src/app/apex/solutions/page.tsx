import DocLayout from "@/components/DocLayout";

export default function ApexSolutions() {
  return (
    <DocLayout
      title="حلول المشاكل"
      titleIcon={
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#da292a] to-[#8b1a1a] text-white font-semibold text-lg">
          🔧
        </span>
      }
      description="حلول مشاكل ابكس ليجندز"
      breadcrumbs={[
        { label: "دليل الخطوات", href: "/" },
        { label: "ابكس ليجندز", href: "/apex/guide" },
      ]}
      prevPage={{ title: "شرح ابكس", href: "/apex/guide" }}
      lastUpdated="2 weeks ago"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#e2dfe0] mb-6">حلول المشاكل الشائعة 🔧</h2>

        <div className="space-y-6">
          <div className="p-4 bg-[#252525] rounded-xl border border-[#333]">
            <h3 className="text-lg font-semibold text-[#e2dfe0] mb-2">البرنامج لا يعمل بعد التحديث</h3>
            <p className="text-[#a8a3a4]">انتظر تحديث البرنامج. عادة يتم التحديث خلال 24-48 ساعة بعد تحديث اللعبة.</p>
          </div>

          <div className="p-4 bg-[#252525] rounded-xl border border-[#333]">
            <h3 className="text-lg font-semibold text-[#e2dfe0] mb-2">خطأ Easy Anti-Cheat</h3>
            <p className="text-[#a8a3a4]">تأكد من تشغيل البرنامج قبل فتح اللعبة.</p>
          </div>

          <div className="p-4 bg-[#252525] rounded-xl border border-[#333]">
            <h3 className="text-lg font-semibold text-[#e2dfe0] mb-2">اللعبة تتوقف</h3>
            <p className="text-[#a8a3a4]">قلل إعدادات ESP أو أوقف بعض المميزات.</p>
          </div>
        </div>

        <blockquote className="mt-6 border-r-4 border-[#da292a] pr-4 py-2">
          <p className="text-[#a8a3a4]">
            إذا استمرت المشكلة، تواصل مع فريق الدعم.
          </p>
        </blockquote>
      </section>
    </DocLayout>
  );
}
