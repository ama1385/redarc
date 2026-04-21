import DocLayout from "@/components/DocLayout";

export default function Swan() {
  return (
    <DocLayout
      title="سوان"
      titleIcon={
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#fa9c1e] to-[#f06414] text-white font-semibold text-lg">
          1
        </span>
      }
      description="برنامج سوان لأوفر واتش"
      breadcrumbs={[
        { label: "دليل الخطوات", href: "/" },
        { label: "اوفر واتش", href: "/overwatch/swan" },
      ]}
      nextPage={{ title: "انفيرنو", href: "/overwatch/inferno" }}
      lastUpdated="2 months ago"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#e2dfe0] mb-6 flex items-center gap-2">
          <a href="#about" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
          عن سوان 🎮
        </h2>

        <p className="text-[#a8a3a4] mb-6">
          برنامج سوان لأوفر واتش 2 مع مميزات متقدمة.
        </p>

        <div className="p-6 bg-[#252525] rounded-xl border border-[#333] text-center">
          <p className="text-[#a8a3a4] mb-4">للحصول على شرح مفصل:</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#fa9c1e] text-[#1c1c1c] rounded-lg font-medium hover:bg-[#e08a18] transition-colors"
          >
            شاهد الشرح
          </a>
        </div>
      </section>
    </DocLayout>
  );
}
