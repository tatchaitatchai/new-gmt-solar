import Image from "next/image";
import Link from "next/link";

const PHONE_DISPLAY = "093-824-9469";
const PHONE_TEL = "+66938249469";
const EMAIL = "sales@gmt-solar.com";

const quickLinks = [
  { href: "/#top", label: "หน้าแรก" },
  { href: "/#about", label: "เกี่ยวกับเรา" },
  { href: "/#pricing", label: "ราคา" },
  { href: "/#contact", label: "ติดต่อเรา" },
];

const socials = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M13.5 9H16V6h-2.5C11.57 6 10 7.57 10 9.5V11H8v3h2v7h3v-7h2.5l.5-3H13V9.5c0-.28.22-.5.5-.5z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "#",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9.52a8.16 8.16 0 0 0 4.77 1.52V7.6a4.85 4.85 0 0 1-1.84-.91Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white">
      {/* subtle top accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-amber-400 via-blue-500 to-emerald-400 opacity-80"
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/#top" aria-label="GMT Smart Energy หน้าแรก" className="inline-flex items-center">
              <Image
                src="/logo_2.webp"
                alt="GMT Smart Energy"
                width={240}
                height={80}
                className="h-12 w-auto sm:h-14"
              />
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
              GMT Smart Energy ผู้ให้บริการติดตั้งโซลาร์เซลล์ครบวงจร
              สำหรับบ้าน โรงงาน และธุรกิจ ด้วยทีมวิศวกรมืออาชีพ
              ประกันยาว บริการครบทุกขั้นตอน
            </p>

            {/* Socials */}
            <ul className="mt-6 flex items-center gap-2">
              {socials.map((s) => (
                <li key={s.name}>
                  <Link
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`ติดตามเราบน ${s.name}`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {s.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <nav aria-label="ลิงก์ด่วน">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              เมนู
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-600 transition-colors hover:text-blue-700"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              ติดต่อ
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="group flex items-start gap-2.5 text-sm text-slate-600 transition-colors hover:text-blue-700"
                >
                  <svg className="mt-0.5 h-4 w-4 flex-none text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="font-medium">{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-start gap-2.5 text-sm text-slate-600 transition-colors hover:text-blue-700"
                >
                  <svg className="mt-0.5 h-4 w-4 flex-none text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <rect x="2" y="4" width="20" height="16" rx="3" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                  <span className="break-all">{EMAIL}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500 sm:text-sm">
            © {year} GMT Smart Energy. สงวนลิขสิทธิ์ทุกประการ
          </p>
          <p className="text-xs text-slate-500 sm:text-sm">
            Powering a Cleaner Tomorrow
          </p>
        </div>
      </div>
    </footer>
  );
}
