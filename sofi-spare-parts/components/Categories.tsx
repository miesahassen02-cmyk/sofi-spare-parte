"use client";

import { useReveal } from "@/hooks/useReveal";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_HREF } from "@/constants/business";

interface Category {
  icon: string;
  tag: string;
  title: string;
  amharic: string;
  desc: string;
  pills: string[];
  extra: number;
  gradient: string;
  bg: string;
  border: string;
  text: string;
  pillBg: string;
  btnBg: string;
}

const CATEGORIES: Category[] = [
  {
    icon: "🔧",
    tag: "Cars & Bajaj Overhauls",
    title: "Engine Parts & Kits",
    amharic: "የሞተር ክፍሎች",
    desc: "Pistons, gaskets, valves, timing belts, water pumps, and complete overhaul kits.",
    pills: ["Pistons & Rings", "Cylinder Heads", "Timing Belts", "Gasket Sets"],
    extra: 2,
    gradient: "from-blue-500 to-blue-700",
    bg: "bg-blue-50 dark:bg-blue-950/40",
    border: "border-blue-200 dark:border-blue-800",
    text: "text-blue-700 dark:text-blue-300",
    pillBg: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700",
    btnBg: "bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-500 border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300 hover:text-white hover:border-blue-500",
  },
  {
    icon: "🛢️",
    tag: "Cars, Isuzu & Bajaj",
    title: "Engine Oils & Lubricants",
    amharic: "የሞተር ዘይት",
    desc: "Top-tier synthetic, semi-synthetic, mineral oils, transmission fluid, and brake oil.",
    pills: ["20W-50 Engine Oil", "15W-40 Heavy Duty", "5W-30 Synthetic", "2T & 4T Lubricants"],
    extra: 2,
    gradient: "from-amber-500 to-amber-700",
    bg: "bg-amber-50 dark:bg-amber-950/40",
    border: "border-amber-200 dark:border-amber-800",
    text: "text-amber-700 dark:text-amber-300",
    pillBg: "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-700",
    btnBg: "bg-amber-100 dark:bg-amber-900/30 hover:bg-amber-500 border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300 hover:text-white hover:border-amber-500",
  },
  {
    icon: "🔻",
    tag: "Engine Protection",
    title: "Filters (Oil, Air & Fuel)",
    amharic: "ፊልትሮች",
    desc: "High-filtration oil filters, heavy-duty air filter elements, and fuel sedimenters.",
    pills: ["Spin-on Oil Filters", "Pleated Air Filters", "Diesel Fuel Filters", "Cabin Air Filters"],
    extra: 1,
    gradient: "from-green-500 to-green-700",
    bg: "bg-green-50 dark:bg-green-950/40",
    border: "border-green-200 dark:border-green-800",
    text: "text-green-700 dark:text-green-300",
    pillBg: "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700",
    btnBg: "bg-green-100 dark:bg-green-900/30 hover:bg-green-500 border-green-300 dark:border-green-700 text-green-700 dark:text-green-300 hover:text-white hover:border-green-500",
  },
  {
    icon: "🔋",
    tag: "Instant Start & Power",
    title: "Batteries & Electricals",
    amharic: "ባትሪ እና ኤሌክትሪክ",
    desc: "Long-lasting sealed maintenance-free batteries, alternators, starter motors, and bulbs.",
    pills: ["12V Car Batteries", "Compact Bajaj Batteries", "Alternators", "Starter Motors"],
    extra: 2,
    gradient: "from-yellow-500 to-yellow-600",
    bg: "bg-yellow-50 dark:bg-yellow-950/40",
    border: "border-yellow-200 dark:border-yellow-800",
    text: "text-yellow-700 dark:text-yellow-300",
    pillBg: "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700",
    btnBg: "bg-yellow-100 dark:bg-yellow-900/30 hover:bg-yellow-500 border-yellow-300 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300 hover:text-white hover:border-yellow-500",
  },
  {
    icon: "🛞",
    tag: "All Vehicle Types",
    title: "Tires & Wheels",
    amharic: "ጎማ እና ዊልስ",
    desc: "Car tires, Bajaj front and rear tires, steel rims, inner tubes, and valve stems.",
    pills: ["Car Tires", "Bajaj Front Tires", "Bajaj Rear Tires", "Steel Rims"],
    extra: 2,
    gradient: "from-gray-600 to-gray-800",
    bg: "bg-gray-50 dark:bg-gray-800/40",
    border: "border-gray-200 dark:border-gray-700",
    text: "text-gray-700 dark:text-gray-300",
    pillBg: "bg-gray-100 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600",
    btnBg: "bg-gray-100 dark:bg-gray-700/40 hover:bg-gray-600 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:text-white hover:border-gray-600",
  },
  {
    icon: "🚘",
    tag: "Cars & Isuzu",
    title: "Body Parts",
    amharic: "የሰውነት ክፍሎች",
    desc: "Side mirrors, headlights, tail lights, bumper guards, door handles, and wipers.",
    pills: ["Side Mirrors", "Headlight Assembly", "Tail Lights", "Door Handles"],
    extra: 2,
    gradient: "from-purple-500 to-purple-700",
    bg: "bg-purple-50 dark:bg-purple-950/40",
    border: "border-purple-200 dark:border-purple-800",
    text: "text-purple-700 dark:text-purple-300",
    pillBg: "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700",
    btnBg: "bg-purple-100 dark:bg-purple-900/30 hover:bg-purple-500 border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:text-white hover:border-purple-500",
  },
  {
    icon: "🔩",
    tag: "Bajaj Specialists",
    title: "Motor & Bajaj Parts",
    amharic: "የባጃጅ ክፍሎች",
    desc: "Bajaj pistons, crankshafts, chain sprockets, clutch plates, carburetors, and spark plugs.",
    pills: ["Piston Sets", "Chain Sprocket", "Clutch Plate", "Carburetor"],
    extra: 3,
    gradient: "from-orange-500 to-orange-700",
    bg: "bg-orange-50 dark:bg-orange-950/40",
    border: "border-orange-200 dark:border-orange-800",
    text: "text-orange-700 dark:text-orange-300",
    pillBg: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-700",
    btnBg: "bg-orange-100 dark:bg-orange-900/30 hover:bg-orange-500 border-orange-300 dark:border-orange-700 text-orange-700 dark:text-orange-300 hover:text-white hover:border-orange-500",
  },
  {
    icon: "📦",
    tag: "General Repairs",
    title: "Other Spare Parts",
    amharic: "ሌሎች መለዋወጫዎች",
    desc: "Brake pads, shock absorbers, CV joints, steering tie rods, belts, bulbs, and fuses.",
    pills: ["Brake Pads", "Shock Absorbers", "Fan Belts", "Bulbs & Fuses"],
    extra: 2,
    gradient: "from-teal-500 to-teal-700",
    bg: "bg-teal-50 dark:bg-teal-950/40",
    border: "border-teal-200 dark:border-teal-800",
    text: "text-teal-700 dark:text-teal-300",
    pillBg: "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-700",
    btnBg: "bg-teal-100 dark:bg-teal-900/30 hover:bg-teal-500 border-teal-300 dark:border-teal-700 text-teal-700 dark:text-teal-300 hover:text-white hover:border-teal-500",
  },
];

const DELAYS = ["", "delay-100", "delay-200", "delay-300", "delay-100", "delay-200", "delay-300", "delay-400"];

function CategoryCard({ cat, delay }: { cat: Category; delay: string }) {
  return (
    <div
      className={`reveal ${delay} flex flex-col ${cat.bg} border ${cat.border}
                  rounded-2xl p-5 hover:shadow-xl transition-all duration-300
                  hover:-translate-y-1`}
    >
      {/* Top row: icon + tag */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.gradient}
                         flex items-center justify-center text-lg shrink-0 shadow-md`}>
          {cat.icon}
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${cat.pillBg}`}>
          {cat.tag}
        </span>
      </div>

      {/* Title */}
      <h3 className={`font-bold text-base leading-tight mb-0.5 ${cat.text}`}>
        {cat.title}
      </h3>

      {/* Amharic subtitle */}
      <p className="text-gray-500 dark:text-gray-500 text-sm mb-3">{cat.amharic}</p>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
        {cat.desc}
      </p>

      {/* Pills */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {cat.pills.slice(0, 4).map((pill) => (
          <span
            key={pill}
            className={`text-xs px-2.5 py-1 rounded-full border ${cat.pillBg}`}
          >
            {pill}
          </span>
        ))}
        {cat.extra > 0 && (
          <span className={`text-xs font-semibold px-1 py-1 ${cat.text}`}>
            +{cat.extra} more
          </span>
        )}
      </div>

      {/* Check Availability button */}
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl
                    border text-sm font-semibold transition-all duration-200 ${cat.btnBg}`}
      >
        <MessageCircle className="w-4 h-4" />
        Check Availability
      </a>
    </div>
  );
}

export default function Categories() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="categories"
      ref={sectionRef}
      className="section-padding bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-block bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Product Categories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What We Carry
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            High-grade components, lubricants, and hardware ready for collection in
            Shashamane 01 or direct dispatch.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.title} cat={cat} delay={DELAYS[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}
