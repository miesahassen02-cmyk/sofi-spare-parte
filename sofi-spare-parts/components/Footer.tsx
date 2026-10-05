"use client";

import { Phone, MessageCircle, Send, MapPin, Truck } from "lucide-react";
import { BUSINESS, PHONE_HREF, WHATSAPP_HREF, TELEGRAM_HREF } from "@/constants/business";

const QUICK_LINKS = [
  { label: "Home",        href: "#home" },
  { label: "About",       href: "#about" },
  { label: "Spare Parts", href: "#spare-parts" },
  { label: "Categories",  href: "#categories" },
  { label: "Gallery",     href: "#gallery" },
  { label: "Reviews",     href: "#reviews" },
  { label: "Location",    href: "#location" },
  { label: "Contact",     href: "#contact" },
];

const SOCIALS = [
  { name: "TikTok",     href: BUSINESS.tiktok,    label: "🎵" },
  { name: "Instagram",  href: BUSINESS.instagram,  label: "📷" },
  { name: "Facebook",   href: BUSINESS.facebook,   label: "f" },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">

          {/* ── Brand column ─────────────────────────────── */}
          <div className="lg:col-span-1 space-y-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.jpg" alt="Sofi Spare Parts logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-black text-white text-lg leading-none">Sofi</p>
                <p className="text-brand-400 text-sm font-semibold">Spare Parts</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              {BUSINESS.description}
            </p>

            {/* Delivery badge */}
            <div className="flex items-center gap-2 text-sm text-green-400">
              <Truck className="w-4 h-4" />
              Delivery Available
            </div>

            {/* Open hours */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              {BUSINESS.hours}
            </div>
          </div>

          {/* ── Quick links ───────────────────────────────── */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-400 hover:text-brand-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ───────────────────────────────────── */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 text-gray-400 hover:text-brand-400 text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-green-400 text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={TELEGRAM_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-sky-400 text-sm transition-colors"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  Telegram
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                {BUSINESS.location}
              </li>
            </ul>
          </div>

          {/* ── Social + Location ─────────────────────────── */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Follow Us
            </h3>
            <div className="flex gap-3 mb-6">
              {/* TikTok */}
              <a
                href={BUSINESS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 bg-gray-800 hover:bg-black border border-gray-700 hover:border-gray-500
                           rounded-xl flex items-center justify-center text-gray-400 hover:text-white
                           transition-all duration-200 hover:scale-110"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-gray-800 border border-gray-700 hover:border-transparent
                           rounded-xl flex items-center justify-center text-gray-400 hover:text-white
                           transition-all duration-200 hover:scale-110
                           hover:[background:linear-gradient(135deg,#833AB4,#FD1D1D,#F77737)]"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href={BUSINESS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-gray-800 hover:bg-[#1877F2] border border-gray-700 hover:border-[#1877F2]
                           rounded-xl flex items-center justify-center text-gray-400 hover:text-white
                           transition-all duration-200 hover:scale-110"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>

            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-3">
              Location
            </h3>
            <a
              href={BUSINESS.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-gray-400 hover:text-brand-400 text-sm transition-colors"
            >
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              {BUSINESS.location}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {year} {BUSINESS.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-400">{BUSINESS.hours}</span>
            <span className="mx-2">·</span>
            <span>Shashamane, Ethiopia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
