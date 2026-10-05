"use client";

import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport the class "visible" is added,
 * triggering the CSS transitions defined in globals.css (.reveal, etc.).
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll<HTMLElement>(
            ".reveal, .reveal-left, .reveal-right"
          ).forEach((child) => child.classList.add("visible"));
          // Also add visible to the container itself if it has the class
          if (
            el.classList.contains("reveal") ||
            el.classList.contains("reveal-left") ||
            el.classList.contains("reveal-right")
          ) {
            el.classList.add("visible");
          }
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
