"use client";

import { useReveal } from "@/hooks/useReveal";
import { Star, Quote } from "lucide-react";

// Placeholder testimonials — replace with real customer reviews before going live
const TESTIMONIALS = [
  {
    id: 1,
    name: "Abebe Tadesse",
    vehicle: "Isuzu owner",
    rating: 5,
    review:
      "I found the engine oil filter I needed right away. Good selection and helpful staff. Will definitely come back.",
    avatar: "👨",
  },
  {
    id: 2,
    name: "Tigist Bekele",
    vehicle: "Bajaj driver",
    rating: 5,
    review:
      "They had the Bajaj piston I was looking for. Quick service and the price was fair. Recommended.",
    avatar: "👩",
  },
  {
    id: 3,
    name: "Dawit Hailu",
    vehicle: "Car owner",
    rating: 5,
    review:
      "I ordered a battery and they delivered it to my location. Very convenient. Good quality product.",
    avatar: "👨",
  },
  {
    id: 4,
    name: "Meron Girma",
    vehicle: "Bajaj driver",
    rating: 5,
    review:
      "The shop has a wide range of Bajaj spare parts. I found everything I needed in one visit.",
    avatar: "👩",
  },
  {
    id: 5,
    name: "Solomon Yohannes",
    vehicle: "Isuzu truck owner",
    rating: 5,
    review:
      "Great stock of Isuzu parts. The staff knew exactly what I needed and helped me choose the right parts.",
    avatar: "👨",
  },
  {
    id: 6,
    name: "Hana Tesfaye",
    vehicle: "Bajaj owner",
    rating: 5,
    review:
      "Sofi Spare Parts is my go-to shop. They always have what I need and the service is quick.",
    avatar: "👩",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="section-padding bg-white dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Customer Reviews
          </span>
          <h2 className="section-title text-gray-900 dark:text-white">
            What Our Customers Say
          </h2>
          <p className="section-subtitle">
            Real feedback from vehicle owners who shop at Sofi Spare Parts.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              className={`reveal delay-${Math.min(i * 100, 400)} relative bg-gray-50 dark:bg-gray-900
                          border border-gray-100 dark:border-gray-800 rounded-2xl p-6
                          hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-brand-200 dark:text-brand-900">
                <Quote className="w-8 h-8" />
              </div>

              {/* Stars */}
              <StarRating rating={t.rating} />

              {/* Review text */}
              <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed italic">
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-200 dark:border-gray-800">
                <div className="w-10 h-10 bg-brand-100 dark:bg-brand-900/40 rounded-full flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">{t.name}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">{t.vehicle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder notice */}
        <div className="mt-10 text-center reveal">
          <div className="inline-block bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl px-6 py-3">
            <p className="text-yellow-700 dark:text-yellow-400 text-sm">
              ⚠️ These are placeholder reviews. Replace with real customer reviews before going live.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
