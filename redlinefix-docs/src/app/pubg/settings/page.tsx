import DocLayout from "@/components/DocLayout";

export default function PubgSettings() {
  return (
    <DocLayout
      title="الإعدادات المثالية"
      titleIcon={
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#f2a900] to-[#d4940a] text-white font-semibold text-lg">
          ⚙️
        </span>
      }
      description="أفضل إعدادات لبرنامج ببجي"
      breadcrumbs={[
        { label: "دليل الخطوات", href: "/" },
        { label: "ببجي", href: "/pubg/guide" },
      ]}
      prevPage={{ title: "شرح ببجي", href: "/pubg/guide" }}
      lastUpdated="1 month ago"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#e2dfe0] mb-6">الإعدادات المثالية ⚙️</h2>

        <div className="space-y-6">
          <div className="p-4 bg-[#252525] rounded-xl border border-[#333]">
            <h3 className="text-lg font-semibold text-[#e2dfe0] mb-2">إعدادات ESP</h3>
            <ul className="space-y-2 text-[#a8a3a4]">
              <li>• Box ESP: مفعّل</li>
              <li>• Distance: 500m</li>
              <li>• Health Bar: مفعّل</li>
              <li>• Name Tags: مفعّل</li>
            </ul>
          </div>

          <div className="p-4 bg-[#252525] rounded-xl border border-[#333]">
            <h3 className="text-lg font-semibold text-[#e2dfe0] mb-2">إعدادات Aimbot</h3>
            <ul className="space-y-2 text-[#a8a3a4]">
              <li>• FOV: 60</li>
              <li>• Smoothness: 5</li>
              <li>• Target: Head</li>
              <li>• Visibility Check: مفعّل</li>
            </ul>
          </div>

          <div className="p-4 bg-[#252525] rounded-xl border border-[#333]">
            <h3 className="text-lg font-semibold text-[#e2dfe0] mb-2">إعدادات Misc</h3>
            <ul className="space-y-2 text-[#a8a3a4]">
              <li>• No Recoil: 70%</li>
              <li>• No Spread: 50%</li>
            </ul>
          </div>
        </div>

        <blockquote className="mt-6 border-r-4 border-[#f2a900] pr-4 py-2">
          <p className="text-[#a8a3a4]">
            <strong className="text-[#f2a900]">💡 نصيحة:</strong> جرّب الإعدادات وعدّلها حسب أسلوب لعبك.
          </p>
        </blockquote>
      </section>
    </DocLayout>
  );
}
