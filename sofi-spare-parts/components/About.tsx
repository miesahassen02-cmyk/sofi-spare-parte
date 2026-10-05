"use client";

import { useRef } from "react";
import { MapPin, Truck, Clock, CheckCircle2 } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { BUSINESS } from "@/constants/business";

const HIGHLIGHTS = [
  { icon: CheckCircle2, text: "Car spare parts — engine, oil, filters, batteries, tires, wheels, body parts" },
  { icon: CheckCircle2, text: "Bajaj spare parts — motor, engine, pistons, oil, filters, batteries, tires" },
  { icon: CheckCircle2, text: "Support for Isuzu and various other car models" },
  { icon: Truck,        text: "Delivery available to your location" },
  { icon: MapPin,       text: "Conveniently located in Shashamane 01, Ethiopia" },
  { icon: Clock,        text: "Open 7 days a week for your convenience" },
];

export default function About() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="about"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="section-padding bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Image placeholder / visual ─────────── */}
          <div className="reveal-left">
            <div className="relative">
              {/* Main visual box */}
              <div className="bg-gradient-to-br from-brand-500 to-brand-700 rounded-3xl p-1 shadow-2xl shadow-brand-500/20">
                <div className="bg-gray-900 rounded-3xl overflow-hidden aspect-[4/3]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/shop.jpg"
                    alt="Sofi Spare Parts Shop — Shashamane 01, Ethiopia"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Stats cards */}
              <div className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700">
                <p className="text-2xl font-black text-brand-500">7</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Days a Week</p>
              </div>
              <div className="absolute -top-5 -left-5 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700">
                <p className="text-2xl font-black text-green-500">🚚</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Delivery Available</p>
              </div>
            </div>
          </div>

          {/* ── Right: Text ───────────────────────────────── */}
          <div className="reveal-right space-y-6">
            {/* Label */}
            <span className="inline-block bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-semibold px-4 py-1.5 rounded-full">
              About Us
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white leading-tight">
              Your Trusted Spare Parts
              <span className="brand-text"> Partner in Shashamane</span>
            </h2>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {BUSINESS.name} is a dedicated spare parts and automotive products
              shop serving vehicle owners in Shashamane and the surrounding
              areas. We stock a wide range of quality parts for both cars and
              Bajaj three-wheelers — everything from engine components and
              oils to filters, batteries, tires, and wheels.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our goal is simple: make it easy for you to find the right part,
              at the right price, as quickly as possible. Whether you drive a
              car or a Bajaj, we have a dedicated section for your vehicle.
              And if you cannot visit us in person, we offer delivery.
            </p>

            {/* Highlights list */}
            <ul className="space-y-3 pt-2">
              {HIGHLIGHTS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 brand-gradient text-white font-bold
                           px-6 py-3 rounded-xl hover:opacity-90 hover:scale-105
                           transition-all duration-200 shadow-lg shadow-brand-500/30"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
