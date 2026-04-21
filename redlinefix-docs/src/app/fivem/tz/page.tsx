import DocLayout from "@/components/DocLayout";

export default function TZ() {
  return (
    <DocLayout
      title="منيو تي زد"
      titleIcon={
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#f40552] to-[#831a3c] text-white font-semibold text-lg">
          5M
        </span>
      }
      description="منيو تي زد لـ FiveM"
      breadcrumbs={[
        { label: "دليل الخطوات", href: "/" },
        { label: "FiveM", href: "/fivem/red-engine" },
      ]}
      prevPage={{ title: "قسم منيو نيكسوس", href: "/fivem/nexus" }}
      nextPage={{ title: "ميشو", href: "/fivem/misho" }}
      lastUpdated="3 months ago"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#e2dfe0] mb-6">عن منيو تي زد 🎮</h2>
        <p className="text-[#a8a3a4] mb-6">منيو تي زد هو منيو مميز لـ FiveM.</p>
        <div className="p-6 bg-[#252525] rounded-xl border border-[#333] text-center">
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-[#f40552] text-white rounded-lg font-medium hover:bg-[#c40442] transition-colors">
            شاهد الشرح
          </a>
        </div>
      </section>
    </DocLayout>
  );
}
