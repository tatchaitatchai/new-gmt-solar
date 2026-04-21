import Image from "next/image";
import Link from "next/link";

const packages = [
  {
    src: "/pricing/4.webp",
    title: "Hybrid 5 kW",
    phase: "1 Phase",
    alt: "แพ็กเกจโซลาร์เซลล์ Hybrid 5 kW 1 Phase ราคาเริ่มต้น 135,500 บาท พร้อมตัวเลือก Deye Battery 11.8 kWh และ 16 kWh",
    tagline: "เหมาะกับบ้านพักอาศัยขนาดเล็ก-กลาง",
  },
  {
    src: "/pricing/5.webp",
    title: "Hybrid 10 kW",
    phase: "1 Phase",
    alt: "แพ็กเกจโซลาร์เซลล์ Hybrid 10 kW 1 Phase พร้อม Deye Battery",
    tagline: "เหมาะกับบ้านขนาดกลาง-ใหญ่ ใช้ไฟสูง",
  },
  {
    src: "/pricing/6.webp",
    title: "Hybrid 10 kW",
    phase: "3 Phase",
    alt: "แพ็กเกจโซลาร์เซลล์ Hybrid 10 kW 3 Phase พร้อม Deye Battery",
    tagline: "เหมาะกับบ้าน/ธุรกิจขนาดกลาง ระบบ 3 เฟส",
  },
  {
    src: "/pricing/7.webp",
    title: "Hybrid 20 kW",
    phase: "3 Phase",
    alt: "แพ็กเกจโซลาร์เซลล์ Hybrid 20 kW 3 Phase พร้อม Deye Battery 16 kWh",
    tagline: "เหมาะกับโรงงานและธุรกิจที่ใช้ไฟสูง",
  },
];

const includes = [
  "ประเมินหน้างาน และให้คำปรึกษาฟรี",
  "ดำเนินการขอใบอนุญาตจากการไฟฟ้า",
  "รับประกันการติดตั้ง 3 ปี",
  "รับประกัน Deye Inverter + Battery 10 ปี",
  "รับประกันแผงโซลาร์เซลล์ 30 ปี",
  "ล้างแผงฟรี 5 ครั้ง",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative scroll-mt-20 overflow-hidden bg-slate-50 py-20 sm:scroll-mt-24 sm:py-28 lg:scroll-mt-28 lg:py-32"
    >
      {/* background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl"
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-700 sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            แพ็กเกจราคา
          </span>
          <h2
            id="pricing-heading"
            className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            ราคา{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              โปร่งใส
            </span>{" "}
            เลือกแพ็กเกจที่เหมาะกับคุณ
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            แพ็กเกจโซลาร์เซลล์ <strong className="font-semibold text-slate-900">Hybrid</strong>{" "}
            ครบวงจร พร้อม Deye Inverter และ Battery คุณภาพสูง
            รับประกันยาว พร้อมบริการหลังการขายโดยทีมวิศวกรมืออาชีพ
          </p>
        </div>

        {/* Packages grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 md:gap-8">
          {packages.map((pkg) => (
            <article
              key={pkg.src}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/15"
            >
              {/* Image */}
              <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                <Image
                  src={pkg.src}
                  alt={pkg.alt}
                  width={1024}
                  height={1024}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Caption */}
              <div className="flex flex-col gap-3 border-t border-slate-100 bg-gradient-to-br from-white to-slate-50 px-5 py-4 sm:px-6 sm:py-5 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
                <div className="min-w-0">
                  <h3 className="flex flex-wrap items-center gap-2 text-lg font-bold text-slate-900 sm:text-xl">
                    <span>{pkg.title}</span>
                    <span className="inline-block rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                      {pkg.phase}
                    </span>
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">{pkg.tagline}</p>
                </div>
                <Link
                  href="/#contact"
                  aria-label={`สอบถามแพ็กเกจ ${pkg.title} ${pkg.phase}`}
                  className="inline-flex flex-none items-center gap-1.5 self-start rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-blue-600 sm:text-sm lg:self-auto"
                >
                  สอบถาม
                  <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Includes summary */}
        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:mt-16 sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
            <div className="max-w-md">
              <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                ทุกแพ็กเกจรวม
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                ดูแลครบทุกขั้นตอน ตั้งแต่สำรวจหน้างาน ติดตั้ง
                ไปจนถึงบริการหลังการขาย
              </p>
              <Link
                href="/#contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/35"
              >
                ขอใบเสนอราคาฟรี
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            <ul className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:max-w-xl">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700 sm:text-base">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 text-white">
                    <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path fillRule="evenodd" d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.5 7.55a1 1 0 0 1-1.42 0l-3.5-3.525a1 1 0 0 1 1.42-1.408l2.79 2.81 6.79-6.835a1 1 0 0 1 1.414-.006Z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Note */}
        <p className="mt-6 text-center text-xs text-slate-500 sm:text-sm">
          * ราคาอาจเปลี่ยนแปลงตามสภาพหน้างาน
          กรุณาติดต่อเพื่อรับใบเสนอราคาที่แม่นยำตามการใช้งานจริง
        </p>
      </div>
    </section>
  );
}
