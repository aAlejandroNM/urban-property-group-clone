// components/ui/Reveal.tsx
import { useEffect, useRef, PropsWithChildren } from "react";

type RevealProps = {
  className?: string;
  rootMargin?: string;
  threshold?: number;
  once?: boolean;
  delay?: number; // en segundos (ej: 0.08, 0.16)
};

export default function Reveal({
  children,
  className = "",
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.06,
  once = true,
  delay = 0,
}: PropsWithChildren<RevealProps>) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // aplica delay en inline-style para permitir stagger por item
    if (delay) {
      el.style.transitionDelay = `${delay}s`;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-revealed");
            if (once) observer.unobserve(el);
          }
        });
      },
      { root: null, rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold, once, delay]);

  return (
    <div ref={ref} className={`reveal-item ${className}`}>
      {children}
    </div>
  );
}
