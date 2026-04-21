import DocLayout from "@/components/DocLayout";

export default function SecureBoot() {
  const tocItems = [
    { id: "khtwat-tatyl-secure-boot", title: "خطوات تعطيل Secure Boot", level: 1 },
    { id: "awlaan-althqq-mn-halh-secure-boot", title: "أولاً: التحقق من حالة Secure Boot", level: 2 },
    { id: "itha-kan-secure-boot-mfa-l-enabled", title: "إذا كان Secure Boot مفعّل (Enabled)", level: 2 },
    { id: "khtwat-tatyl-secure-boot-mn-bios", title: "خطوات تعطيل Secure Boot من BIOS", level: 2 },
  ];

  return (
    <DocLayout
      title="تعطيل Secure Boot"
      titleIcon={
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#4a6670] to-[#3a5560] text-white font-semibold text-lg">
          3
        </span>
      }
      description="في نظامك عشان تضمن تشغيل Secure Boot هذي الصفحة راح تعلمك كيف تطفّي برنامجنا بشكل سلس."
      breadcrumbs={[
        { label: "دليل الخطوات", href: "/" },
        { label: "الأساسيات", href: "/alasasyat/mttlbat-alnzam" },
      ]}
      tocItems={tocItems}
      prevPage={{ title: "تمكين Virtualization", href: "/alasasyat/virtualization" }}
      nextPage={{ title: "تفعيل Hyper-V", href: "/alasasyat/hyper-v" }}
      lastUpdated="8 months ago"
    >
      {/* Section: خطوات تعطيل Secure Boot */}
      <section id="khtwat-tatyl-secure-boot" className="mb-12">
        <h2 className="text-2xl font-bold text-[#e2dfe0] mb-6 flex items-center gap-2">
          <a href="#khtwat-tatyl-secure-boot" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
          خطوات تعطيل Secure Boot 🔧
        </h2>

        {/* Subsection: أولاً: التحقق من حالة Secure Boot */}
        <section id="awlaan-althqq-mn-halh-secure-boot" className="mb-10">
          <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4 flex items-center gap-2">
            <a href="#awlaan-althqq-mn-halh-secure-boot" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
            أولاً: التحقق من حالة Secure Boot 🔍
          </h3>

          <ol className="space-y-4 text-[#a8a3a4] list-decimal list-inside mr-4">
            <li className="leading-relaxed">
              افتح <strong className="text-[#e2dfe0]">شريط البحث</strong> في Windows واكتب:
              <code className="code-block mx-2">System Information</code>
            </li>
            <li className="leading-relaxed">
              افتح تطبيق <strong className="text-[#e2dfe0]">System Information</strong>.
            </li>
            <li className="leading-relaxed">
              ابحث عن الخيار: <strong className="text-[#e2dfe0]">Secure Boot State</strong>
              <ul className="mt-3 mr-6 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#746c6d]"></span>
                  إذا كانت الحالة: <strong className="text-[#e2dfe0]">On</strong> ← Secure Boot مفعّل
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#746c6d]"></span>
                  إذا كانت الحالة: <strong className="text-[#e2dfe0]">Off</strong> ← Secure Boot معطّل بالفعل
                </li>
              </ul>
            </li>
          </ol>

          {/* System Information Image */}
          <div className="my-8">
            <div className="bg-[#252525] rounded-xl overflow-hidden border border-[#333]">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#2a2a2a] border-b border-[#333]">
                <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <span className="text-sm text-[#a8a3a4]">System Information</span>
              </div>
              <div className="p-0">
                <img
                  src="https://redline-1.gitbook.io/redlinefix/~gitbook/image?url=https%3A%2F%2F3481922497-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252Frh3oAA7MtofrN5CCB9Yk%252Fuploads%252FVTMi4n8gtpkC4666JZts%252Fimage.png%3Falt%3Dmedia%26token%3Dd29fe9ca-d06d-40c2-947d-b3d20ac3007b&width=768&dpr=3&quality=100&sign=af47726f&sv=2"
                  alt="Secure Boot State"
                  className="w-full"
                />
              </div>
            </div>
            <p className="text-center text-sm text-[#85a1ac] mt-3">Secure Boot State</p>
          </div>
        </section>

        {/* Subsection: إذا كان Secure Boot مفعّل (Enabled) */}
        <section id="itha-kan-secure-boot-mfa-l-enabled" className="mb-10">
          <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4 flex items-center gap-2">
            <a href="#itha-kan-secure-boot-mfa-l-enabled" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
            إذا كان Secure Boot مفعّل (Enabled) 🔐
          </h3>

          <p className="text-[#a8a3a4] mb-6">
            لتعطيله يدويًا ستحتاج إلى الدخول على <strong className="text-[#e2dfe0]">BIOS</strong>.
          </p>

          {/* الخطوة الأولى */}
          <h4 className="text-lg font-semibold text-[#e2dfe0] mb-4 flex items-center gap-2">
            <a href="#" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
            الخطوة الأولى: معرفة الشركة المصنعة للوحة الأم 🔍
          </h4>

          <ol className="space-y-4 text-[#a8a3a4] list-decimal list-inside mr-4 mb-6">
            <li className="leading-relaxed">
              افتح <strong className="text-[#e2dfe0]">شريط البحث</strong> في Windows واكتب:
              <code className="code-block mx-2">System Information</code>
            </li>
            <li className="leading-relaxed">
              ابحث عن:
              <ul className="mt-3 mr-6 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#746c6d]"></span>
                  <strong className="text-[#e2dfe0]">BaseBoard Manufacturer</strong> ← اسم الشركة المصنعة (مثال: ASUS, MSI, GIGABYTE)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#746c6d]"></span>
                  <strong className="text-[#e2dfe0]">BaseBoard Product</strong> ← رقم موديل اللوحة الأم
                </li>
              </ul>
            </li>
          </ol>

          {/* Note */}
          <blockquote className="my-6 text-[#a8a3a4] py-2 border-r-4 border-[#586aac] pr-4">
            ستستخدم هذه المعلومات لمعرفة مكان خيار Secure Boot داخل BIOS حسب نوع اللوحة 💡
          </blockquote>

          {/* BaseBoard Info Table */}
          <div className="my-8">
            <div className="bg-[#252525] rounded-xl overflow-hidden border border-[#333]">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-[#333]">
                    <td className="text-[#a8a3a4] py-3 px-4">BaseBoard Manufacturer</td>
                    <td className="text-[#e2dfe0] py-3 px-4">ASUSTeK COMPUTER INC.</td>
                  </tr>
                  <tr>
                    <td className="text-[#a8a3a4] py-3 px-4">BaseBoard Product</td>
                    <td className="text-[#e2dfe0] py-3 px-4">ROG STRIX B550-A GAMING</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-sm text-[#85a1ac] mt-3">BaseBoard Info</p>
          </div>
        </section>

        {/* Subsection: خطوات تعطيل Secure Boot من BIOS */}
        <section id="khtwat-tatyl-secure-boot-mn-bios" className="mb-10">
          <h3 className="text-xl font-semibold text-[#e2dfe0] mb-4 flex items-center gap-2">
            <a href="#khtwat-tatyl-secure-boot-mn-bios" className="text-[#746c6d] hover:text-[#a8a3a4]">#</a>
            خطوات تعطيل Secure Boot من BIOS 🔧
          </h3>

          {/* Warning Note */}
          <blockquote className="my-6 text-[#a8a3a4] py-2 border-r-4 border-[#586aac] pr-4">
            <span style={{ color: "var(--text-muted)" }}>⚠️ </span>
            <strong style={{ color: "var(--text-primary)" }}>ملاحظة مهمة:</strong> بعض الأجهزة لا تسمح بتعطيله إلا بعد تغيير كلمة مرور لـ BIOS أو تبديل Boot وضع إلى Legacy/CSM.
          </blockquote>

          <ol className="space-y-4 text-[#a8a3a4] list-decimal list-inside mr-4">
            <li className="leading-relaxed">
              أعد تشغيل الجهاز وادخل إلى إعدادات BIOS
              <blockquote className="mt-2 mr-6 py-1 text-sm border-r-4 border-[#586aac] pr-4">
                (غالبًا بالضغط على <code className="code-block mx-1 text-xs">Del</code> أو <code className="code-block mx-1 text-xs">F2</code> أثناء الإقلاع)
              </blockquote>
            </li>
            <li className="leading-relaxed">
              اذهب إلى تبويب <strong className="text-[#e2dfe0]">Boot</strong> أو <strong className="text-[#e2dfe0]">Security</strong> (حسب نوع اللوحة)
            </li>
            <li className="leading-relaxed">
              ابحث عن خيار: <strong className="text-[#e2dfe0]">Secure Boot</strong>
            </li>
            <li className="leading-relaxed">
              غيّره إلى: <strong className="text-[#e2dfe0]">Disabled</strong>
            </li>
            <li className="leading-relaxed">
              احفظ التغييرات (<code className="code-block mx-1 text-xs">F10</code>) وأعد تشغيل الجهاز
            </li>
          </ol>

          {/* BIOS Table */}
          <div className="my-8">
            <div className="bg-[#252525] rounded-xl overflow-hidden border border-[#333]">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="text-[#a8a3a4] py-3 px-4">Secure Boot State</td>
                    <td className="text-[#e2dfe0] py-3 px-4">Off</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-sm text-[#85a1ac] mt-3">BIOS Secure Boot</p>
          </div>

          {/* Success Message */}
          <p className="text-[#a8a3a4] leading-relaxed">
            بإتمام الخطوات هذي، <strong className="text-[#e2dfe0]">Secure Boot</strong> راح يكون معطّل، وجهازك جاهز لتشغيل البرنامج. إذا واجهت أي مشاكل، تواصل مع الدعم.
          </p>
        </section>
      </section>
    </DocLayout>
  );
}
