"use client";

import { useReveal } from "@/hooks/useReveal";
import {
  ShieldCheck,
  MapPin,
  Truck,
  MessageCircle,
  Star,
  Car,
} from "lucide-react";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Quality Products",
    desc: "We stock spare parts and automotive products selected to meet the real needs of vehicle owners. Quality you can count on.",
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    icon: Car,
    title: "Wide Selection",
    desc: "Parts available for cars — including Isuzu — and Bajaj three-wheelers. Engine, oil, filters, batteries, tires, wheels, body parts and more.",
    color: "text-brand-500",
    bg: "bg-brand-50 dark:bg-brand-900/20",
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    desc: "Located in Shashamane 01, Ethiopia. Easy to find via Google Maps and open every day of the week.",
    color: "text-green-500",
    bg: "bg-green-50 dark:bg-green-900/20",
  },
  {
    icon: Truck,
    title: "Delivery Available",
    desc: "Can't visit in person? We offer delivery so you can get the parts you need without leaving your home or workshop.",
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-900/20",
  },
  {
    icon: MessageCircle,
    title: "Easy Communication",
    desc: "Reach us instantly by phone, WhatsApp, or Telegram. We're here to help you find the right part.",
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    icon: Star,
    title: "Trusted by Customers",
    desc: "Vehicle owners in Shashamane and surrounding areas rely on us for quality parts and helpful service — every day.",
    color: "text-yellow-500",
    bg: "bg-yellow-50 dark:bg-yellow-900/20",
  },
];

const DELAYS = ["", "delay-100", "delay-200", "", "delay-100", "delay-200"];

export default function WhyChooseUs() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="section-padding bg-white dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="section-title text-gray-900 dark:text-white">
            Why Customers Choose{" "}
            <span className="brand-text">Sofi Spare Parts</span>
          </h2>
          <p className="section-subtitle">
            Here is what makes us the go-to spare parts shop in Shashamane.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, title, desc, color, bg }, i) => (
            <div
              key={title}
              className={`reveal ${DELAYS[i]} group relative rounded-2xl border
                          border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900
                          p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>

              {/* Checkmark badge */}
              <div className="absolute top-4 right-4 w-7 h-7 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <span className="text-green-600 dark:text-green-400 text-xs font-black">✓</span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-14 reveal">
          <div className="brand-gradient rounded-3xl p-8 text-white text-center shadow-2xl shadow-brand-500/30">
            <div className="text-4xl mb-3">🚚</div>
            <h3 className="text-2xl font-black mb-2">Delivery Available</h3>
            <p className="text-brand-100 max-w-md mx-auto mb-6">
              Order your parts and we will deliver them to you. Contact us on
              WhatsApp or by phone to arrange delivery.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white text-brand-600 font-bold px-6 py-3 rounded-xl
                           hover:bg-brand-50 hover:scale-105 transition-all duration-200 shadow-md"
              >
                Contact Us
              </a>
              <a
                href="#location"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("location")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white/20 hover:bg-white/30 text-white font-bold px-6 py-3
                           rounded-xl hover:scale-105 transition-all duration-200 border border-white/30"
              >
                Find Our Shop
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
