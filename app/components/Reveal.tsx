"use client";
import React from "react";

export default function Reveal({ children, className = "", rootMargin = "-10% 0px" }: { children: React.ReactNode; className?: string; rootMargin?: string }) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("revealed");
            // Animate any children elements that expose a data-pct attribute
            const fills = el.querySelectorAll<HTMLElement>('[data-pct]');
            // debug
            // eslint-disable-next-line no-console
            console.debug("Reveal: element revealed", el, "fills:", fills.length);

            fills.forEach((f, i) => {
              try {
                const pct = f.getAttribute("data-pct");
                // ensure initial state (inline) to avoid specificity issues
                f.style.width = "0%";
                // apply a staggered transition delay per fill so bars animate sequentially
                const staggerMs = i * 120; // 120ms between each bar
                f.style.transitionDelay = `${staggerMs}ms`;
                if (pct) {
                  // eslint-disable-next-line no-console
                  console.debug(`Reveal: scheduling fill #${i} -> ${pct}% (delay ${staggerMs}ms)`);
                  requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                      f.style.width = pct + "%";
                    });
                  });
                }
              } catch (err) {
                // eslint-disable-next-line no-console
                console.debug("Reveal: error applying pct", err);
              }
            });

            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin }
    );
    el.classList.add("reveal");
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
