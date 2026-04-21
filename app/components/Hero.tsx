import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="แนะนำ GMT Smart Energy"
      className="relative isolate scroll-mt-20 overflow-hidden bg-slate-950 text-white sm:scroll-mt-24 lg:scroll-mt-28"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-60 motion-reduce:hidden"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden
      >
        <source src="/hero-section-video.mp4" type="video/mp4" />
      </video>

      {/* Fallback gradient (shown while video loads or if reduced-motion) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-30 bg-[radial-gradient(ellipse_at_top,_#1e3a8a_0%,_#0f172a_55%,_#020617_100%)]"
      />

      {/* Dim + brand tint overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/75 via-slate-950/55 to-slate-950/90"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,_rgba(37,99,235,0.35),_transparent_55%),radial-gradient(circle_at_80%_70%,_rgba(16,185,129,0.28),_transparent_55%)]"
      />

      {/* Decorative grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
      />

      {/* Floating orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-emerald-400/25 blur-3xl"
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        {/* Eyebrow */}
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/90 backdrop-blur-sm sm:text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          พลังงานสะอาด · อนาคตยั่งยืน
        </span>

        {/* Heading */}
        <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block text-white">เปลี่ยนแสงอาทิตย์</span>
          <span className="mt-2 block bg-gradient-to-r from-amber-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">
            ให้เป็นพลังงานของคุณ
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200/90 sm:text-lg md:text-xl">
          GMT Smart Energy ออกแบบ ติดตั้ง และดูแลระบบ <strong className="font-semibold text-white">โซลาร์เซลล์ครบวงจร</strong>{" "}
          สำหรับบ้าน โรงงาน และธุรกิจ ลดค่าไฟได้จริง คืนทุนไว ด้วยทีมวิศวกรมืออาชีพ
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/#contact"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-emerald-400 px-7 py-3.5 text-base font-semibold text-slate-950 shadow-[0_12px_40px_-10px_rgba(59,130,246,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_-8px_rgba(59,130,246,0.85)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <span className="relative z-10">ขอใบเสนอราคาฟรี</span>
            <svg className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
            </svg>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>
          <Link
            href="/#pricing"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            ดูแพ็กเกจราคา
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path fillRule="evenodd" d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-4.158a.75.75 0 1 1 1.08 1.04l-5.25 5.5a.75.75 0 0 1-1.08 0l-5.25-5.5a.75.75 0 1 1 1.08-1.04l3.96 4.158V3.75A.75.75 0 0 1 10 3Z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        {/* Stats */}
        <dl className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm md:grid-cols-4">
          {[
            { value: "5 ครั้ง", label: "ล้างแผงฟรี" },
            { value: "15+ ปี", label: "ประสบการณ์ทีมวิศวกร" },
            { value: "30 ปี", label: "รับประกันแผงโซลาร์" },
            { value: "3 ปี", label: "รับประกันการติดตั้ง" },
          ].map((s) => (
            <div key={s.label} className="bg-slate-950/40 px-6 py-6 text-center">
              <dt className="text-2xl font-bold text-white sm:text-3xl">{s.value}</dt>
              <dd className="mt-1 text-xs text-slate-300 sm:text-sm">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white"
      />
    </section>
  );
}
