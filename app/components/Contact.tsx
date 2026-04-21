import Link from "next/link";

const PHONE_DISPLAY = "093-824-9469";
const PHONE_TEL = "+66938249469";
const EMAIL = "sales@gmt-solar.com";

const socials = [
  {
    name: "Facebook",
    href: "#",
    gradient: "from-blue-600 to-blue-500",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M13.5 9H16V6h-2.5C11.57 6 10 7.57 10 9.5V11H8v3h2v7h3v-7h2.5l.5-3H13V9.5c0-.28.22-.5.5-.5z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "#",
    gradient: "from-slate-900 to-slate-700",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9.52a8.16 8.16 0 0 0 4.77 1.52V7.6a4.85 4.85 0 0 1-1.84-.91Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    gradient: "from-pink-500 via-red-500 to-amber-500",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-20 overflow-hidden bg-slate-950 py-20 text-white sm:scroll-mt-24 sm:py-28 lg:scroll-mt-28 lg:py-32"
    >
      {/* background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,_rgba(37,99,235,0.35),_transparent_55%),radial-gradient(circle_at_80%_80%,_rgba(16,185,129,0.3),_transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
      />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/90 backdrop-blur-sm sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            ติดต่อเรา
          </span>
          <h2
            id="contact-heading"
            className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            พร้อมให้คำปรึกษา{" "}
            <span className="bg-gradient-to-r from-amber-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">
              ฟรี
            </span>{" "}
            ทุกขั้นตอน
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            มีคำถามเกี่ยวกับโซลาร์เซลล์? ติดต่อทีมงานของเราได้ทันที
            เรายินดีสำรวจหน้างานและเสนอราคาให้คุณฟรี
          </p>
        </div>

        {/* Contact cards */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:mt-16 md:grid-cols-2 md:gap-6">
          {/* Phone card */}
          <a
            href={`tel:${PHONE_TEL}`}
            aria-label={`โทรหาเรา ${PHONE_DISPLAY}`}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.08] sm:p-8"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 text-white shadow-lg shadow-blue-500/30 sm:h-14 sm:w-14">
                <svg className="h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">โทรเลย</div>
                <div className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {PHONE_DISPLAY}
                </div>
                <p className="mt-2 text-sm text-slate-400">จันทร์–เสาร์ · 08:00–18:00</p>
              </div>
            </div>
            <span className="pointer-events-none absolute right-6 bottom-6 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-300">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
              </svg>
            </span>
          </a>

          {/* Email card */}
          <a
            href={`mailto:${EMAIL}`}
            aria-label={`ส่งอีเมลหาเรา ${EMAIL}`}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/[0.08] sm:p-8"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-500 text-white shadow-lg shadow-emerald-500/30 sm:h-14 sm:w-14">
                <svg className="h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="2" y="4" width="20" height="16" rx="3" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">อีเมล</div>
                <div className="mt-1 break-all text-lg font-bold tracking-tight text-white sm:text-xl">
                  {EMAIL}
                </div>
                <p className="mt-2 text-sm text-slate-400">ตอบกลับภายใน 24 ชั่วโมง</p>
              </div>
            </div>
            <span className="pointer-events-none absolute right-6 bottom-6 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-emerald-300">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
              </svg>
            </span>
          </a>
        </div>

        {/* Socials */}
        <div className="mx-auto mt-12 max-w-3xl text-center sm:mt-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
            ติดตามเราได้ที่
          </p>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {socials.map((s) => (
              <li key={s.name}>
                <Link
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`ติดตามเราบน ${s.name}`}
                  className={`group relative inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 sm:h-16 sm:w-16`}
                >
                  <span
                    className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <span className="relative">{s.icon}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
