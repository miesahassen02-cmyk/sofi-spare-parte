"use client";

import { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";
import { WHATSAPP_HREF, BUSINESS } from "@/constants/business";

export default function FloatingWhatsApp() {
  const [visible, setVisible]   = useState(false);
  const [tooltip, setTooltip]   = useState(false);

  // Show button after user scrolls a bit
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-show tooltip once after 3 s
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => {
      setTooltip(true);
      const hide = setTimeout(() => setTooltip(false), 4000);
      return () => clearTimeout(hide);
    }, 3000);
    return () => clearTimeout(t);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-2">

      {/* Tooltip */}
      {tooltip && (
        <div className="flex items-start gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-3 shadow-xl max-w-xs animate-fade-up">
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Need spare parts?
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Chat with {BUSINESS.name} on WhatsApp
            </p>
          </div>
          <button
            onClick={() => setTooltip(false)}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 mt-0.5"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* WhatsApp button */}
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600
                   text-white rounded-full shadow-2xl shadow-green-500/50
                   hover:scale-110 transition-all duration-200"
        onClick={() => setTooltip(false)}
      >
        <MessageCircle className="w-7 h-7" />
        {/* Pulse ring */}
        <span className="absolute w-14 h-14 rounded-full bg-green-400 animate-ping opacity-25 pointer-events-none" />
      </a>
    </div>
  );
}
