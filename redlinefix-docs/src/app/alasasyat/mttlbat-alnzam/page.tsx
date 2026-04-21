import DocLayout from "@/components/DocLayout";
import Link from "next/link";

export default function SystemRequirements() {
  const tocItems = [
    { id: "iadad-windows-security", title: "إعداد Windows Security", level: 1 },
    { id: "afth-windows-security", title: "افتح Windows Security", level: 2 },
    { id: "virus-threat-protection", title: "روح على Virus & Threat Protection", level: 2 },
    { id: "idarh-aliadadat", title: "إدارة الإعدادات", level: 2 },
    { id: "defender-control", title: "حمّل Defender Control", level: 2 },
    { id: "takd-tatyl-defender", title: "تأكد من تعطيل Windows Defender", level: 2 },
    { id: "firewalls", title: "طفي الجدران النارية", level: 2 },
    { id: "app-browser-control", title: "إعداد App & Browser Control", level: 2 },
    { id: "core-isolation", title: "تعطيل Core Isolation", level: 2 },
  ];

  return (
    <DocLayout
      title="متطلبات النظام الأساسية"
      titleIcon={
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#4a6670] to-[#3a5560] text-white font-semibold text-lg">
          1
        </span>
      }
      description="متطلبات النظام الأساسية"
      breadcrumbs={[
        { label: "دليل الخطوات", href: "/" },
        { label: "الأساسيات", href: "/alasasyat/mttlbat-alnzam" },
      ]}
      tocItems={tocItems}
      prevPage={{ title: "الرئيسية", href: "/" }}
      nextPage={{ title: "تمكين Virtualization", href: "/alasasyat/virtualization" }}
      lastUpdated="2 months ago"
    >
      {/* Download Links */}
      <div className="mb-8 p-4 bg-[#252525] rounded-xl border border-[#333]">
        <p className="text-[color:var(--accent-text)] font-semibold mb-2">
          ايضا من الافضل تثبت تعريفات الجهاز
        </p>
        <p className="text-[#a8a3a4]">
          <span className="font-semibold">التحميل:</span>{" "}
          <a
            href="https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#85a1ac] hover:underline"
          >
            Visual C++ ↗
          </a>
          {" "}
          <a
            href="https://www.microsoft.com/en-us/download/details.aspx?id=6812"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#85a1ac] hover:underline"
          >
            DirectX ↗
          </a>
        </p>
      </div>

      {/* Windows Security Section */}
      <section id="iadad-windows-security" className="mb-12">
        <h2 className="text-2xl font-bold text-[#e2dfe0] mb-6 flex items-center gap-2">
          <a href="#iadad-windows-security" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
          إعداد Windows Security: 🔧
        </h2>

        {/* Step 1 */}
        <section id="afth-windows-security" className="mb-8">
          <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4 flex items-center gap-2">
            <a href="#afth-windows-security" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
            1. افتح Windows Security:
          </h3>
          <ul className="space-y-3 text-[#a8a3a4] mr-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#746c6d] mt-2"></span>
              <span>اكتب <strong className="text-[#e2dfe0]">"Windows Security"</strong> في شريط البحث واضغط Enter.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#746c6d] mt-2"></span>
              <span>راح تشوف شاشة مثل اللي تحت (ممكن تختلف شوي بين Windows 10 و Windows 11):</span>
            </li>
          </ul>

          <div className="my-6">
            <div className="bg-[#252525] rounded-xl overflow-hidden border border-[#333]">
              <img
                src="https://ext.same-assets.com/3659576729/3979228231.png"
                alt="Windows Security Home"
                className="w-full"
              />
            </div>
            <p className="text-center text-sm text-[#85a1ac] mt-3 italic">Windows Security Home</p>
          </div>
        </section>

        {/* Step 2 */}
        <section id="virus-threat-protection" className="mb-8">
          <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4 flex items-center gap-2">
            <a href="#virus-threat-protection" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
            2. روح على Virus & Threat Protection:
          </h3>
          <ul className="space-y-3 text-[#a8a3a4] mr-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#746c6d] mt-2"></span>
              <span>اضغط على <strong className="text-[#e2dfe0]">Virus & Threat Protection</strong>. راح تظهر لك هذي الشاشة:</span>
            </li>
          </ul>

          <div className="my-6">
            <div className="bg-[#252525] rounded-xl overflow-hidden border border-[#333]">
              <img
                src="https://ext.same-assets.com/3659576729/1541564718.png"
                alt="Virus & Threat Protection"
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* Step 3 */}
        <section id="idarh-aliadadat" className="mb-8">
          <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4 flex items-center gap-2">
            <a href="#idarh-aliadadat" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
            3. إدارة الإعدادات:
          </h3>
          <ul className="space-y-3 text-[#a8a3a4] mr-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#746c6d] mt-2"></span>
              <span>تحت <strong className="text-[#e2dfe0]">Virus & Threat Protection Settings</strong> اضغط على <strong className="text-[#e2dfe0]">Manage Settings</strong>. راح تظهر هذي الشاشة:</span>
            </li>
          </ul>

          <div className="my-6">
            <div className="bg-[#252525] rounded-xl overflow-hidden border border-[#333]">
              <img
                src="https://ext.same-assets.com/3659576729/2683993798.png"
                alt="Manage Settings"
                className="w-full"
              />
            </div>
            <p className="text-center text-sm text-[#85a1ac] mt-3 italic">Manage Settings</p>
          </div>

          <p className="text-[#a8a3a4]">
            طفي <strong className="text-[#e2dfe0]">Real-Time Protection</strong> وكل الخيارات اللي تحت.
          </p>
        </section>

        {/* Step 4 - Defender Control */}
        <section id="defender-control" className="mb-8">
          <blockquote className="border-r-4 border-[#586aac] pr-4 py-2 my-6">
            <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4 flex items-center gap-2">
              <a href="#defender-control" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
              4. حمّل Defender Control:
            </h3>
            <ul className="space-y-3 text-[#a8a3a4]">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#746c6d] mt-2"></span>
                <span>لتعطيل Windows Defender تحتاج تطفي باستخدام <strong className="text-[#e2dfe0]">Defender Control</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#746c6d] mt-2"></span>
                <span>
                  حمله من هنا:{" "}
                  <a
                    href="https://www.sordum.org/downloads/?st-defender-control"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#85a1ac] hover:underline"
                  >
                    Defender Control ↗
                  </a>
                  {" "}كلمة المرور: <code className="code-block text-xs">sordum</code> (بالأحرف الصغيرة).
                </span>
              </li>
            </ul>

            <div className="my-6">
              <div className="bg-[#1c1c1c] rounded-xl overflow-hidden border border-[#333]">
                <img
                  src="https://redline-1.gitbook.io/redlinefix/~gitbook/image?url=https%3A%2F%2F3481922497-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252Frh3oAA7MtofrN5CCB9Yk%252Fuploads%252FNz9flW9XTB59PYenouE4%252Fimage.png%3Falt%3Dmedia%26token%3D47be86df-d83f-469b-99f5-ebb039961cc5&width=768&dpr=3&quality=100&sign=539197a9&sv=2"
                  alt="Defender Control Main"
                  className="w-full max-w-md mx-auto"
                />
              </div>
              <p className="text-center text-sm text-[#85a1ac] mt-3 italic">Defender Control Main</p>
            </div>
          </blockquote>

          <ul className="space-y-3 text-[#a8a3a4] mr-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#746c6d] mt-2"></span>
              <span>اضغط على <strong className="text-[#e2dfe0]">Disable Windows Defender</strong> (وإذا احتجت، تقدر تعيده بنفس الطريقة).</span>
            </li>
          </ul>
        </section>

        {/* Step 5 */}
        <section id="takd-tatyl-defender" className="mb-8">
          <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4 flex items-center gap-2">
            <a href="#takd-tatyl-defender" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
            5. تأكد من تعطيل Windows Defender:
          </h3>
          <ul className="space-y-3 text-[#a8a3a4] mr-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#746c6d] mt-2"></span>
              <span>إذا صار المؤشر أحمر مثل اللي في الصورة، معناها Windows Defender معطل:</span>
            </li>
          </ul>

          <div className="my-6">
            <div className="bg-[#1c1c1c] rounded-xl overflow-hidden border border-[#333]">
              <img
                src="https://redline-1.gitbook.io/redlinefix/~gitbook/image?url=https%3A%2F%2F3481922497-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252Frh3oAA7MtofrN5CCB9Yk%252Fuploads%252FeiwOdVhcGmIxYwZSxrqv%252Fimage.png%3Falt%3Dmedia%26token%3D18afa315-07a8-4325-a34f-3ca6ae032d72&width=768&dpr=3&quality=100&sign=1df873f9&sv=2"
                alt="Defender Disabled"
                className="w-full max-w-md mx-auto"
              />
            </div>
            <p className="text-center text-sm text-[#85a1ac] mt-3 italic">Defender Disabled</p>
          </div>
        </section>

        {/* Step 6 - Firewalls */}
        <section id="firewalls" className="mb-8">
          <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4 flex items-center gap-2">
            <a href="#firewalls" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
            6. طفي الجدران النارية (Firewalls):
          </h3>
          <ul className="space-y-3 text-[#a8a3a4] mr-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#746c6d] mt-2"></span>
              <span>ارجع إلى <strong className="text-[#e2dfe0]">Windows Security</strong> واضغط على <strong className="text-[#e2dfe0]">Firewalls & Network Protection</strong>. راح تشوف الشاشة التالية:</span>
            </li>
          </ul>

          <div className="my-6">
            <div className="bg-[#252525] rounded-xl overflow-hidden border border-[#333]">
              <img
                src="https://ext.same-assets.com/3659576729/469790154.png"
                alt="Firewalls"
                className="w-full"
              />
            </div>
            <p className="text-center text-sm text-[#85a1ac] mt-3 italic">Firewalls</p>
          </div>

          <p className="text-[#a8a3a4]">طفي كل الجدران النارية الثلاثة.</p>
        </section>

        {/* Step 7 - App & Browser Control */}
        <section id="app-browser-control" className="mb-8">
          <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4 flex items-center gap-2">
            <a href="#app-browser-control" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
            7. إعداد App & Browser Control:
          </h3>
          <ul className="space-y-3 text-[#a8a3a4] mr-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#746c6d] mt-2"></span>
              <span>روح على <strong className="text-[#e2dfe0]">App & Browser Control</strong> واطفي كل الخيارات الموجودة:</span>
            </li>
          </ul>

          <div className="my-6">
            <div className="bg-[#252525] rounded-xl overflow-hidden border border-[#333]">
              <img
                src="https://ext.same-assets.com/3659576729/1505151484.png"
                alt="App & Browser Control"
                className="w-full"
              />
            </div>
            <p className="text-center text-sm text-[#85a1ac] mt-3 italic">App & Browser Control</p>
          </div>
        </section>

        {/* Step 8 - Core Isolation */}
        <section id="core-isolation" className="mb-8">
          <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4 flex items-center gap-2">
            <a href="#core-isolation" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
            8. تعطيل Core Isolation:|
          </h3>
          <ul className="space-y-3 text-[#a8a3a4] mr-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#746c6d] mt-2"></span>
              <span>ادخل على <strong className="text-[#e2dfe0]">Device Security</strong> وطفّئ خيار <strong className="text-[#e2dfe0]">Core Isolation</strong> زي ما هو واضح بالصورة:</span>
            </li>
          </ul>

          <div className="my-6">
            <div className="bg-[#252525] rounded-xl overflow-hidden border border-[#333]">
              <img
                src="https://ext.same-assets.com/3659576729/256290202.png"
                alt="Core Isolation"
                className="w-full"
              />
            </div>
            <p className="text-center text-sm text-[#85a1ac] mt-3 italic">Core Isolation</p>
          </div>

          <p className="text-[color:var(--accent-text)] font-semibold text-center">
            بعد كذا، أعد تشغيل الجهاز (Restart).
          </p>
          <p className="text-[#a8a3a4] mt-4">
            بعد ما تخلص الخطوات هذي، راح يكون النظام جاهز لتشغيل البرنامج. إذا واجهت أي مشكلة، تواصل مع فريق الدعم.
          </p>
        </section>
      </section>
    </DocLayout>
  );
}
