import DocLayout from "@/components/DocLayout";

export default function Misho() {
  return (
    <DocLayout
      title="ميشو"
      titleIcon={
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#f40552] to-[#831a3c] text-white font-semibold text-lg">
          5M
        </span>
      }
      description="برنامج ميشو لـ FiveM"
      breadcrumbs={[
        { label: "دليل الخطوات", href: "/" },
        { label: "FiveM", href: "/fivem/red-engine" },
      ]}
      prevPage={{ title: "منيو تي زد", href: "/fivem/tz" }}
      lastUpdated="3 months ago"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#e2dfe0] mb-6">عن ميشو 🎮</h2>
        <p className="text-[#a8a3a4] mb-6">ميشو هو برنامج مميز لـ FiveM.</p>
        <div className="p-6 bg-[#252525] rounded-xl border border-[#333] text-center">
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-[#f40552] text-white rounded-lg font-medium hover:bg-[#c40442] transition-colors">
            شاهد الشرح
          </a>
        </div>
      </section>
    </DocLayout>
  );
}
