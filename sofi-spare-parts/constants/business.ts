// ─────────────────────────────────────────────────────────────
//  SOFI SPARE PARTS — Business Constants
//  Edit this file to update contact details, links, and address.
//  Every part of the website reads from here.
// ─────────────────────────────────────────────────────────────

export const BUSINESS = {
  name:        "Sofi Spare Parts",
  tagline:     "Quality Spare Parts & Automotive Products",
  description:
    "Your trusted source for car and Bajaj spare parts in Shashamane. Engine parts, oil, filters, batteries, tires, wheels, and more — with delivery available.",
  location:    "Shashamane 01, Ethiopia",
  hours:       "Open 7 Days a Week",

  // ── Contact ──────────────────────────────────────────────
  phone:     "+251000000000",          // replace with real number
  whatsapp:  "+251000000000",          // replace with real WhatsApp number
  telegram:  "https://t.me/sofiSpare", // replace with real Telegram link

  // ── Social Media ─────────────────────────────────────────
  tiktok:    "https://tiktok.com/@sofiSpare",    // replace with real link
  instagram: "https://instagram.com/sofiSpare",  // replace with real link
  facebook:  "https://facebook.com/sofiSpare",   // replace with real link

  // ── Google Maps ──────────────────────────────────────────
  // Paste the full Google Maps embed src URL here
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.0!2d38.6!3d7.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTInMDAuMCJOIDM4wrAzNicwMC4wIkU!5e0!3m2!1sen!2set!4v0000000000000!5m2!1sen!2set",
  // Direct link that opens Google Maps navigation
  mapsLink:
    "https://www.google.com/maps/search/Shashamane+01+Ethiopia",

  // ── WhatsApp pre-filled message ───────────────────────────
  whatsappMessage: "Hello, I found your website. I need spare parts.",
} as const;

// Derived helpers
export const PHONE_HREF     = `tel:${BUSINESS.phone}`;
export const WHATSAPP_HREF  = `https://wa.me/${BUSINESS.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;
export const TELEGRAM_HREF  = BUSINESS.telegram;
