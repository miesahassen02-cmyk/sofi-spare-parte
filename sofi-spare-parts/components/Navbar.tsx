"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { BUSINESS } from "@/constants/business";

const NAV_LINKS = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Spare Parts", href: "#spare-parts" },
  { label: "Categories", href: "#categories" },
  { label: "Gallery",    href: "#gallery" },
  { label: "Location",   href: "#location" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen]           = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [active, setActive]       = useState("#home");

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active link tracking
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(`#${id}`); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    setActive(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? "bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm shadow-md"
          : "bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button
            onClick={() => handleLink("#home")}
            className="flex items-center gap-2 group"
            aria-label="Go to top"
          >
            <div className="w-9 h-9 rounded-lg overflow-hidden shadow-md group-hover:scale-105 transition-transform">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.jpg" alt="Sofi Spare Parts logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-lg text-gray-900 dark:text-white leading-tight">
              Sofi<br />
              <span className="text-brand-500 text-sm font-semibold">Spare Parts</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLink(link.href)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${active === link.href
                    ? "text-brand-500 bg-brand-50 dark:bg-brand-900/30"
                    : "text-gray-600 dark:text-gray-300 hover:text-brand-500 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right side: theme + hamburger */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 px-4 pb-4 pt-2 space-y-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all
                ${active === link.href
                  ? "text-brand-500 bg-brand-50 dark:bg-brand-900/30"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
            >
              {link.label}
            </button>
          ))}

          {/* Mobile contact shortcuts */}
          <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
            <p className="text-xs text-gray-400 dark:text-gray-500 px-4 pb-2">Quick Contact</p>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors"
            >
              📞 {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
