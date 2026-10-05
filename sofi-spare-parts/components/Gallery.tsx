"use client";

import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

type Category = "All" | "Shop" | "Car Parts" | "Bajaj" | "Engine & Oil";

const FILTERS: Category[] = ["All", "Shop", "Car Parts", "Bajaj", "Engine & Oil"];

// Placeholder gallery items — replace emoji+label with real <Image /> tags
const GALLERY_ITEMS: { id: number; category: string; emoji: string; label: string; bg: string; isPhoto?: boolean; photoSrc?: string }[] = [
  { id: 1, category: "Shop", emoji: "🏪", label: "Shop Exterior",  bg: "from-gray-700 to-gray-900", isPhoto: true, photoSrc: "/shop-exterior.jpg" },
  { id: 2, category: "Shop", emoji: "🛒", label: "Shop Interior",  bg: "from-gray-600 to-gray-800", isPhoto: true, photoSrc: "/shop.jpg" },
  { id: 3, category: "Car Parts",   emoji: "⚙️", label: "Engine Parts",         bg: "from-blue-700 to-blue-900" },
  { id: 4, category: "Car Parts",   emoji: "🛞", label: "Tires & Wheels",       bg: "from-gray-700 to-gray-900" },
  { id: 5, category: "Car Parts",   emoji: "🔋", label: "Batteries",            bg: "from-yellow-700 to-yellow-900" },
  { id: 6, category: "Car Parts",   emoji: "🚘", label: "Body Parts",           bg: "from-purple-700 to-purple-900" },
  { id: 7, category: "Bajaj",   emoji: "🛺", label: "Bajaj Parts",      bg: "from-orange-700 to-orange-900" },
  { id: 8, category: "Bajaj",   emoji: "🔩", label: "Motor Components",     bg: "from-amber-700 to-amber-900" },
  { id: 9, category: "Bajaj",   emoji: "🔧", label: "Pistons & Rings",      bg: "from-red-700 to-red-900" },
  { id: 10, category: "Engine & Oil", emoji: "🛢️", label: "Engine Oil",         bg: "from-teal-700 to-teal-900" },
  { id: 11, category: "Engine & Oil", emoji: "🔄", label: "Filters",            bg: "from-green-700 to-green-900" },
  { id: 12, category: "Shop",        emoji: "📦", label: "Stock & Products",    bg: "from-indigo-700 to-indigo-900" },
];

export default function Gallery() {
  const sectionRef  = useReveal() as React.RefObject<HTMLElement>;
  const [active, setActive]       = useState<Category>("All");
  const [lightbox, setLightbox]   = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  const filtered =
    active === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category === active);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="section-padding bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 reveal">
          <span className="inline-block bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Gallery
          </span>
          <h2 className="section-title text-gray-900 dark:text-white">
            Our Shop &amp; Products
          </h2>
          <p className="section-subtitle">
            A look at our shop, parts, and products. Add your real photos here
            once the site goes live.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200
                ${active === f
                  ? "brand-gradient text-white shadow-md shadow-brand-500/30"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-brand-300"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setLightbox(item)}
              className={`reveal delay-${Math.min(i * 100, 500)} group relative rounded-2xl overflow-hidden
                          aspect-square cursor-pointer hover:scale-[1.03] transition-all duration-300
                          shadow-md hover:shadow-xl`}
              aria-label={`View ${item.label}`}
            >
              <div className={`w-full h-full bg-gradient-to-br ${item.bg} flex flex-col items-center justify-center`}>
                {item.isPhoto ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.photoSrc ?? "/shop.jpg"}
                    alt={item.label}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {item.emoji}
                    </span>
                    <span className="text-white/80 text-xs mt-2 font-medium">{item.label}</span>
                  </>
                )}
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white" />
              </div>
              {/* Category badge */}
              <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full">
                {item.category}
              </div>
            </button>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-gray-400 dark:text-gray-500 text-sm mt-8 reveal">
          Replace placeholder cards with real shop and product photos in the{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">public/</code> folder.
        </p>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.label}
        >
          <div
            className="relative max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`bg-gradient-to-br ${lightbox.bg} rounded-3xl overflow-hidden shadow-2xl`}>
              {lightbox.isPhoto ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={lightbox.photoSrc ?? "/shop.jpg"}
                  alt={lightbox.label}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              ) : (
                <div className="aspect-square flex flex-col items-center justify-center">
                  <span className="text-9xl">{lightbox.emoji}</span>
                  <p className="text-white text-xl font-bold mt-4">{lightbox.label}</p>
                  <p className="text-white/60 text-sm mt-1">{lightbox.category}</p>
                </div>
              )}
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
