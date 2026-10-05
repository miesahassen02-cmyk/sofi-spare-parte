"use client";

import { useReveal } from "@/hooks/useReveal";

const CAR_PARTS = [
  { icon: "⚙️", name: "Engine Parts",   desc: "Core engine components for cars" },
  { icon: "🛢️", name: "Engine Oil",     desc: "Quality oils for all car types" },
  { icon: "🔄", name: "Oil Filters",    desc: "Oil and air filters" },
  { icon: "🔋", name: "Batteries",      desc: "Reliable car batteries" },
  { icon: "🛞", name: "Tires",          desc: "Tires in various sizes" },
  { icon: "⭕", name: "Wheels",         desc: "Wheels for different models" },
  { icon: "🚘", name: "Body Parts",     desc: "Exterior and body components" },
  { icon: "📦", name: "Other Parts",    desc: "Additional car accessories" },
];

const BAJAJ_PARTS = [
  { icon: "🔩", name: "Motor Parts",    desc: "Essential motor components" },
  { icon: "⚙️", name: "Engine Parts",   desc: "Engine components for Bajaj" },
  { icon: "🔧", name: "Pistons",        desc: "Pistons and related parts" },
  { icon: "🛢️", name: "Engine Oil",     desc: "Oils suited for Bajaj" },
  { icon: "🔄", name: "Filters",        desc: "Oil and air filters" },
  { icon: "🔋", name: "Batteries",      desc: "Bajaj batteries" },
  { icon: "🛞", name: "Tires & Wheels", desc: "Tires and wheels" },
  { icon: "📦", name: "Other Parts",    desc: "Additional Bajaj accessories" },
];

function PartCard({ icon, name, desc }: { icon: string; name: string; desc: string }) {
  return (
    <div className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl p-3 transition-all duration-200 hover:scale-[1.02] cursor-default">
      <span className="text-2xl w-9 shrink-0 text-center">{icon}</span>
      <div>
        <p className="font-semibold text-white text-sm">{name}</p>
        <p className="text-xs text-white/70">{desc}</p>
      </div>
    </div>
  );
}

export default function VehicleSections() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="spare-parts"
      ref={sectionRef}
      className="section-padding bg-white dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Spare Parts
          </span>
          <h2 className="section-title text-gray-900 dark:text-white">
            Parts for Every Vehicle
          </h2>
          <p className="section-subtitle text-gray-500 dark:text-gray-400">
            We serve two major vehicle groups. Choose your vehicle below to see
            what we carry.
          </p>
        </div>

        {/* Two vehicle cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* ── Car Spare Parts ────────────────────────────── */}
          <div className="reveal delay-100">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl h-full">
              {/* Card header */}
              <div className="bg-gradient-to-r from-brand-500 to-brand-700 p-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">🚗</div>
                  <div>
                    <h3 className="text-2xl font-black text-white">Car Spare Parts</h3>
                    <p className="text-brand-100 text-sm mt-1">
                      Isuzu and various car models
                    </p>
                  </div>
                </div>
              </div>

              {/* Parts grid */}
              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CAR_PARTS.map((p) => (
                  <PartCard key={p.name} {...p} />
                ))}
              </div>

              {/* Footer CTA */}
              <div className="px-6 pb-6">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block w-full text-center bg-brand-500 hover:bg-brand-600
                             text-white font-bold py-3 rounded-xl transition-all
                             hover:scale-[1.02] shadow-lg"
                >
                  Enquire About Car Parts
                </a>
              </div>
            </div>
          </div>

          {/* ── Bajaj Spare Parts ────────────────────── */}
          <div className="reveal delay-200">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl h-full">
              {/* Card header */}
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">🛺</div>
                  <div>
                    <h3 className="text-2xl font-black text-white">Bajaj Spare Parts</h3>
                    <p className="text-amber-100 text-sm mt-1">
                      Three-wheeler specialists
                    </p>
                  </div>
                </div>
              </div>

              {/* Parts grid */}
              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BAJAJ_PARTS.map((p) => (
                  <PartCard key={p.name} {...p} />
                ))}
              </div>

              {/* Footer CTA */}
              <div className="px-6 pb-6">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block w-full text-center bg-amber-500 hover:bg-amber-600
                             text-white font-bold py-3 rounded-xl transition-all
                             hover:scale-[1.02] shadow-lg"
                >
                  Enquire About Bajaj Parts
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
