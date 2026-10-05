"use client";

import { MapPin, Navigation, Clock, Truck } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { BUSINESS } from "@/constants/business";

export default function Location() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="location"
      ref={sectionRef}
      className="section-padding bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Find Us
          </span>
          <h2 className="section-title text-gray-900 dark:text-white">
            Our Location
          </h2>
          <p className="section-subtitle">
            Visit us in Shashamane. Open every day — or contact us and we will
            deliver to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">

          {/* ── Map ─────────────────────────────────────────── */}
          <div className="lg:col-span-2 reveal-left">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 aspect-video relative">
              <iframe
                src={BUSINESS.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sofi Spare Parts location on Google Maps"
              />
            </div>

            {/* Get Directions button below map */}
            <div className="mt-4 flex justify-center">
              <a
                href={BUSINESS.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 brand-gradient text-white font-bold
                           px-8 py-3.5 rounded-xl hover:opacity-90 hover:scale-105
                           transition-all duration-200 shadow-lg shadow-brand-500/30"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </a>
            </div>
          </div>

          {/* ── Info cards ───────────────────────────────────── */}
          <div className="space-y-4 reveal-right">

            {/* Address */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 shadow-md">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-brand-100 dark:bg-brand-900/30 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-500" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">Address</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {BUSINESS.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 shadow-md">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">Opening Hours</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {BUSINESS.hours}
                  </p>
                  <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">
                    
                  </p>
                </div>
              </div>
            </div>

            {/* Delivery */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 shadow-md">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">Delivery</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Delivery is available. Contact us to arrange.
                  </p>
                </div>
              </div>
            </div>

            {/* Directions CTA (mobile-friendly large button) */}
            <a
              href={BUSINESS.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full
                         bg-gray-900 dark:bg-white text-white dark:text-gray-900
                         font-bold py-4 rounded-2xl hover:opacity-90
                         hover:scale-[1.02] transition-all duration-200 shadow-md"
            >
              <MapPin className="w-5 h-5" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
