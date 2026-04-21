import DocLayout from "@/components/DocLayout";

export default function Inferno() {
  return (
    <DocLayout
      title="انفيرنو"
      titleIcon={
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#fa9c1e] to-[#f06414] text-white font-semibold text-lg">
          2
        </span>
      }
      description="برنامج انفيرنو لأوفر واتش"
      breadcrumbs={[
        { label: "دليل الخطوات", href: "/" },
        { label: "اوفر واتش", href: "/overwatch/swan" },
      ]}
      prevPage={{ title: "سوان", href: "/overwatch/swan" }}
      lastUpdated="2 months ago"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#e2dfe0] mb-6 flex items-center gap-2">
          <a href="#about" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
          عن انفيرنو 🔥
        </h2>

        <p className="text-[#a8a3a4] mb-6">
          برنامج انفيرنو لأوفر واتش 2 - الإصدار الأحدث.
        </p>

        <div className="p-6 bg-[#252525] rounded-xl border border-[#333] text-center">
          <p className="text-[#a8a3a4] mb-4">للحصول على شرح مفصل:</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#f06414] text-white rounded-lg font-medium hover:bg-[#d85812] transition-colors"
          >
            شاهد الشرح
          </a>
        </div>
      </section>
    </DocLayout>
  );
}
