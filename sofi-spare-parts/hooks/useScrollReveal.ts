"use client";

import { useEffect } from "react";

/**
 * Attaches an IntersectionObserver that adds the "visible" class
 * to every element that has the "reveal", "reveal-left", or "reveal-right" class.
 * Import this hook once in the root page component.
 */
export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
