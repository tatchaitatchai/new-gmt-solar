"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/#top", label: "หน้าแรก" },
  { href: "/#about", label: "เกี่ยวกับเรา" },
  { href: "/#pricing", label: "ราคา" },
  { href: "/#contact", label: "ติดต่อเรา" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-[0_4px_24px_-12px_rgba(15,23,42,0.18)] border-b border-slate-200/70"
          : "bg-white/70 backdrop-blur-md border-b border-transparent"
      }`}
    >
      {/* subtle brand accent line on top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-amber-400 via-blue-500 to-emerald-400 opacity-80"
      />

      <nav
        aria-label="เมนูหลัก"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:h-24 lg:px-8"
      >
        {/* Logo only */}
        <Link
          href="/"
          aria-label="GMT Smart Energy — หน้าแรก"
          className="group relative flex items-center"
        >
          <span className="relative block h-12 w-auto sm:h-14 lg:h-16">
            <Image
              src="/logo_2.webp"
              alt="GMT Smart Energy"
              width={320}
              height={128}
              priority
              className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative rounded-full px-4 py-2 text-[15px] font-medium text-slate-700 transition-colors duration-200 hover:text-blue-700"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 -z-0 scale-90 rounded-full bg-blue-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
                <span className="pointer-events-none absolute inset-x-4 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(37,99,235,0.55)] transition-all duration-300 hover:shadow-[0_12px_28px_-6px_rgba(37,99,235,0.7)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
          >
            <span className="relative z-10">ขอใบเสนอราคาฟรี</span>
            <svg
              className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:bg-slate-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 lg:hidden"
        >
          <span className="sr-only">เปิด/ปิดเมนู</span>
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition-all hover:bg-blue-50 hover:text-blue-700"
              >
                <span>{link.label}</span>
                <span className="text-blue-500">→</span>
              </Link>
            </li>
          ))}
          <li className="mt-2">
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 px-4 py-3.5 text-base font-semibold text-white shadow-[0_8px_24px_-8px_rgba(37,99,235,0.55)]"
            >
              ขอใบเสนอราคาฟรี
              <span aria-hidden>→</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
