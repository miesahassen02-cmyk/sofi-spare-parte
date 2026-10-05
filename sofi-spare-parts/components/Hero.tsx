"use client";

import { Phone, MessageCircle, MapPin, Truck, ChevronDown } from "lucide-react";
import { BUSINESS, PHONE_HREF, WHATSAPP_HREF } from "@/constants/business";

export default function Hero() {
  const scrollDown = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-gray-950/70" />
        {/* Subtle brand-color gradient on top of overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-transparent to-brand-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-2xl">

          {/* ── Text ─────────────────────────────────── */}
          <div className="text-white space-y-6">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-500/20 border border-brand-500/40 rounded-full px-4 py-1.5 text-brand-300 text-sm font-medium animate-fade-in">
              <Truck className="w-4 h-4" />
              Delivery Available · Shashamane 01, Ethiopia
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight animate-fade-up">
              {BUSINESS.name}
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl font-semibold text-brand-400 animate-fade-up delay-100">
              Quality Spare Parts &amp; Automotive Products
              <br />
              <span className="text-white/80 text-lg font-normal">
                for Cars and Bajaj Three-Wheelers
              </span>
            </p>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl animate-fade-up delay-200">
              Find engine parts, engine oil, filters, batteries, tires, wheels,
              body parts, and more. Serving Shashamane and surrounding areas —
              7 days a week.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2 animate-fade-up delay-300">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 bg-brand-500 hover:bg-brand-600
                           text-white font-bold px-6 py-3.5 rounded-xl shadow-lg
                           hover:shadow-brand-500/40 hover:scale-105 transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>

              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600
                           text-white font-bold px-6 py-3.5 rounded-xl shadow-lg
                           hover:shadow-green-500/40 hover:scale-105 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>

              <a
                href={BUSINESS.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20
                           border border-white/20 text-white font-bold px-6 py-3.5
                           rounded-xl hover:scale-105 transition-all duration-200"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
            </div>

            {/* Hours + Delivery badges */}
            <div className="flex flex-wrap gap-3 pt-1 animate-fade-up delay-400">
              <span className="flex items-center gap-1.5 text-sm text-gray-400">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                {BUSINESS.hours}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-gray-400">
                <Truck className="w-4 h-4 text-brand-400" />
                Delivery Available
              </span>
            </div>
          </div>

        </div>

        {/* Scroll down cue */}
        <div className="flex justify-center mt-16 animate-fade-in delay-500">
          <button
            onClick={scrollDown}
            aria-label="Scroll down"
            className="text-gray-400 hover:text-brand-400 transition-colors animate-float"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
