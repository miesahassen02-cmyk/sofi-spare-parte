"use client";

import { Phone, MessageCircle, Send, MapPin, Truck } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { BUSINESS, PHONE_HREF, WHATSAPP_HREF, TELEGRAM_HREF } from "@/constants/business";

const CONTACT_METHODS = [
  {
    icon: Phone,
    label: "Phone",
    value: BUSINESS.phone,
    desc: "Call us directly",
    href: PHONE_HREF,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-800",
    btnClass: "bg-blue-500 hover:bg-blue-600 shadow-blue-500/30",
    btnLabel: "Call Now",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "faizaemi24",
    desc: "Chat on WhatsApp",
    href: WHATSAPP_HREF,
    color: "text-green-500",
    bg: "bg-green-50 dark:bg-green-900/20",
    border: "border-green-200 dark:border-green-800",
    btnClass: "bg-green-500 hover:bg-green-600 shadow-green-500/30",
    btnLabel: "Open WhatsApp",
  },
  {
    icon: Send,
    label: "Telegram",
    value: "@sbajaj54",
    desc: "Reach us on Telegram",
    href: TELEGRAM_HREF,
    color: "text-sky-500",
    bg: "bg-sky-50 dark:bg-sky-900/20",
    border: "border-sky-200 dark:border-sky-800",
    btnClass: "bg-sky-500 hover:bg-sky-600 shadow-sky-500/30",
    btnLabel: "Open Telegram",
  },
  {
    icon: MapPin,
    label: "Location",
    value: BUSINESS.location,
    desc: "Get directions",
    href: BUSINESS.mapsLink,
    color: "text-brand-500",
    bg: "bg-brand-50 dark:bg-brand-900/20",
    border: "border-brand-200 dark:border-brand-800",
    btnClass: "bg-brand-500 hover:bg-brand-600 shadow-brand-500/30",
    btnLabel: "Get Directions",
  },
];

export default function Contact() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-white dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="section-title text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="section-subtitle">
            Call us, send a WhatsApp message, or find us on the map. We are
            ready to help you find the right spare part.
          </p>
        </div>

        {/* Contact method cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {CONTACT_METHODS.map(
            ({ icon: Icon, label, value, desc, href, color, bg, border, btnClass, btnLabel }, i) => (
              <div
                key={label}
                className={`reveal delay-${i * 100} flex flex-col ${bg} border ${border}
                             rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1
                             transition-all duration-300`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 bg-white dark:bg-gray-900 rounded-xl flex items-center justify-center mb-4 shadow-sm`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>

                <p className="font-bold text-gray-900 dark:text-white text-base">{label}</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-1 font-medium">{value}</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 mb-auto">{desc}</p>

                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`mt-4 flex items-center justify-center gap-2 ${btnClass}
                              text-white font-bold py-3 rounded-xl transition-all
                              hover:scale-[1.03] shadow-md text-sm`}
                >
                  <Icon className="w-4 h-4" />
                  {btnLabel}
                </a>
              </div>
            )
          )}
        </div>

        {/* Delivery callout */}
        <div className="reveal">
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-16 h-16 brand-gradient rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-1">
                Delivery Available
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Cannot come to the shop? Contact us on WhatsApp or by phone to
                arrange delivery of your spare parts.
              </p>
            </div>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600
                         text-white font-bold px-6 py-3 rounded-xl shrink-0
                         hover:scale-105 transition-all duration-200 shadow-md shadow-green-500/30"
            >
              <MessageCircle className="w-5 h-5" />
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
