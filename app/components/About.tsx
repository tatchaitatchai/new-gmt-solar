import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "สำรวจหน้างานฟรี",
    desc: "ประเมินการใช้ไฟ ทิศทางแสง และพื้นที่หลังคาอย่างละเอียด",
  },
  {
    title: "ออกแบบระบบเฉพาะคุณ",
    desc: "วิศวกรออกแบบให้เหมาะกับบ้าน โรงงาน หรือธุรกิจของคุณ",
  },
  {
    title: "ติดตั้งตามมาตรฐาน",
    desc: "ทีมช่างไฟฟ้ามืออาชีพ ติดตั้งตามมาตรฐานความปลอดภัย",
  },
  {
    title: "บริการหลังการขาย",
    desc: "ดูแลต่อเนื่อง ล้างแผง ตรวจเช็คระบบ รับประกันยาว",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-20 overflow-hidden bg-white py-20 sm:scroll-mt-24 sm:py-28 lg:scroll-mt-28 lg:py-32"
    >
      {/* subtle background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Image side */}
        <div className="relative order-last lg:order-first">
          {/* Decorative frame */}
          <div
            aria-hidden
            className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 blur-xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 hidden h-32 w-32 rounded-2xl border-2 border-blue-500/30 sm:block"
          />
          <div
            aria-hidden
            className="absolute -top-4 -right-4 hidden h-24 w-24 rounded-2xl bg-gradient-to-br from-amber-400 to-emerald-400 opacity-80 sm:block"
          />

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-2xl shadow-blue-500/10">
            <Image
              src="/about-us.webp"
              alt="ทีมงาน GMT Smart Energy ติดตั้งแผงโซลาร์เซลล์"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* overlay gradient for a subtle premium feel */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/20 via-transparent to-transparent"
            />

            {/* Floating badge */}
            <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-white/30 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md sm:bottom-6 sm:left-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M12 2L4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>
              <div>
                <div className="text-sm font-semibold text-slate-900">ทีมวิศวกรมืออาชีพ</div>
                <div className="text-xs text-slate-500">มาตรฐานการติดตั้งระดับสากล</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content side */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-700 sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            เกี่ยวกับเรา
          </span>

          <h2
            id="about-heading"
            className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            พลังงานสะอาดที่{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              เข้าถึงง่าย
            </span>
            <br className="hidden sm:block" />
            คุ้มค่า และได้มาตรฐาน
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            <p>
              <strong className="font-semibold text-slate-900">GMT Smart Energy</strong>{" "}
              คือผู้ให้บริการติดตั้งโซลาร์เซลล์ครบวงจร
              สำหรับบ้านพักอาศัย ธุรกิจ และโรงงาน
              โดยทีมงานที่มีพื้นฐานด้านระบบไฟฟ้าและประสบการณ์ภาคสนามมายาวนาน
            </p>
            <p>
              เราเชื่อว่าพลังงานสะอาดควรเป็นเรื่องเข้าถึงง่าย คุ้มค่า
              และติดตั้งอย่างถูกต้องตามมาตรฐาน พร้อมดูแลตั้งแต่การสำรวจหน้างาน
              ออกแบบระบบ ติดตั้ง ไปจนถึงบริการหลังการขาย
            </p>
          </div>

          {/* Features grid */}
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <li
                key={f.title}
                className="group relative rounded-2xl border border-slate-200 bg-white/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 text-white shadow-sm">
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path fillRule="evenodd" d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.5 7.55a1 1 0 0 1-1.42 0l-3.5-3.525a1 1 0 0 1 1.42-1.408l2.79 2.81 6.79-6.835a1 1 0 0 1 1.414-.006Z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600 sm:text-sm">{f.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
            >
              ดูแพ็กเกจราคา
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-blue-300 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              ปรึกษาฟรี
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
