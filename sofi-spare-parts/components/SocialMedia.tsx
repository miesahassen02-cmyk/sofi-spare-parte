"use client";

import { useReveal } from "@/hooks/useReveal";
import { BUSINESS } from "@/constants/business";

// TikTok official SVG
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
  </svg>
);

// Instagram official SVG
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

// Facebook official SVG
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const SOCIALS = [
  {
    name: "TikTok",
    handle: "@sofi_spare",
    href: BUSINESS.tiktok,
    icon: <TikTokIcon />,
    className: "bg-gray-800 hover:bg-black border border-gray-700 hover:border-black text-gray-300 hover:text-white",
    label: "Follow on TikTok",
  },
  {
    name: "Instagram",
    handle: "@sofi_spare",
    href: BUSINESS.instagram,
    icon: <InstagramIcon />,
    className: "bg-gray-800 hover:bg-gradient-to-br border border-gray-700 text-gray-300 hover:text-white group-hover-instagram",
    label: "Follow on Instagram",
  },
  {
    name: "Facebook",
    handle: "Sofi Spare Parts",
    href: BUSINESS.facebook,
    icon: <FacebookIcon />,
    className: "bg-gray-800 hover:bg-[#1877F2] border border-gray-700 hover:border-[#1877F2] text-gray-300 hover:text-white",
    label: "Follow on Facebook",
  },
];

export default function SocialMedia() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="social"
      ref={sectionRef}
      className="section-padding bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-2xl mx-auto text-center">

        {/* Header */}
        <div className="reveal">
          <span className="inline-block bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Follow Us
          </span>
          <h2 className="section-title text-gray-900 dark:text-white">
            Stay Connected
          </h2>
          <p className="section-subtitle">
            Follow Sofi Spare Parts on social media to stay up to date with new
            products, offers, and shop news.
          </p>
        </div>

        {/* Social buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 reveal delay-100">

          {/* TikTok */}
          <a
            href={BUSINESS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on TikTok"
            className="group flex items-center gap-3 bg-gray-800 border border-gray-700
                       hover:bg-black hover:border-gray-500
                       text-gray-300 hover:text-white font-bold px-6 py-4 rounded-2xl
                       shadow-md hover:scale-105 transition-all duration-200 min-w-[180px]"
          >
            <div className="w-10 h-10 bg-gray-700 group-hover:bg-white/10 rounded-xl flex items-center justify-center shrink-0 transition-colors">
              <TikTokIcon />
            </div>
            <div className="text-left">
              <p className="text-base font-bold leading-none">TikTok</p>
              <p className="text-xs opacity-70 mt-0.5">@sofi_spare</p>
            </div>
          </a>

          {/* Instagram */}
          <a
            href={BUSINESS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on Instagram"
            className="group flex items-center gap-3 bg-gray-800 border border-gray-700
                       text-gray-300 hover:text-white font-bold px-6 py-4 rounded-2xl
                       shadow-md hover:scale-105 transition-all duration-200 min-w-[180px]
                       hover:[background:linear-gradient(135deg,#833AB4,#FD1D1D,#F77737)]
                       hover:border-transparent"
          >
            <div className="w-10 h-10 bg-gray-700 group-hover:bg-white/20 rounded-xl flex items-center justify-center shrink-0 transition-colors">
              <InstagramIcon />
            </div>
            <div className="text-left">
              <p className="text-base font-bold leading-none">Instagram</p>
              <p className="text-xs opacity-70 mt-0.5">@sofi_spare</p>
            </div>
          </a>

          {/* Facebook */}
          <a
            href={BUSINESS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on Facebook"
            className="group flex items-center gap-3 bg-gray-800 border border-gray-700
                       hover:bg-[#1877F2] hover:border-[#1877F2]
                       text-gray-300 hover:text-white font-bold px-6 py-4 rounded-2xl
                       shadow-md hover:scale-105 transition-all duration-200 min-w-[180px]"
          >
            <div className="w-10 h-10 bg-gray-700 group-hover:bg-white/20 rounded-xl flex items-center justify-center shrink-0 transition-colors">
              <FacebookIcon />
            </div>
            <div className="text-left">
              <p className="text-base font-bold leading-none">Facebook</p>
              <p className="text-xs opacity-70 mt-0.5">Sofi Spare Parts</p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
