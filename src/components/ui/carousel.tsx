"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Carrusel usando translate3d + track flex, mostrando exactamente 3 slides visibles (left, center, right)
// Ajustes solicitados:
// 1) Asegurar que todas las imágenes tengan la misma altura.
// 2) Hacer que las imágenes laterales sean más anchas / estén más pegadas a los laterales (reducir gap).
// 3) Mantener la distribución (centro más grande) pero evitar diferencias de altura visual.

export default function CarouselTranslate3d({ projects }: { projects?: Array<{ image: string; title: string; location: string; status: string }> }) {
  const defaultProjects = [
    {
      image: "https://ext.same-assets.com/319956013/1658223507.jpeg",
      title: "The Waterfront, CCQ",
      location: "GOSFORD, NSW",
      status: "NOW SELLING",
    },
    {
      image: "https://ext.same-assets.com/319956013/1019608060.jpeg",
      title: "ESTE",
      location: "LITTLE BAY, NSW",
      status: "NOW SELLING",
    },
    {
      image: "https://ext.same-assets.com/319956013/1366628589.png",
      title: "The Halston",
      location: "NORTH STRATHFIELD, NSW",
      status: "NOW SELLING",
    },
  ];

  const slidesSource = projects && projects.length ? projects : defaultProjects;
  // clones for looping
  const slides = [slidesSource[slidesSource.length - 1], ...slidesSource, slidesSource[0]];

  const trackRef = useRef(null);
  // refs array to measure each slide width
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [slideWidths, setSlideWidths] = useState<number[]>([]);
  const [currentSlide, setCurrentSlide] = useState(1); // index in slides (1..n)
  const [transitioning, setTransitioning] = useState(false);
  const GAP_PX = 80; // reduje gap para que los laterales estén más cerca
  const [viewportWidth, setViewportWidth] = useState<number | null>(null);

  // measure widths of all slides
  const measureAll = () => {
    const widths = slides.map((_, i) => {
      const el = slideRefs.current[i];
      return el ? Math.round((el as HTMLDivElement).getBoundingClientRect().width) : 0;
    });
    setSlideWidths(widths);

    // compute visible viewport (left + center + right + 2 gaps)
    const leftIndex = Math.max(0, currentSlide - 1);
    const centerIndex = currentSlide;
    const rightIndex = Math.min(slides.length - 1, currentSlide + 1);
    const lw = widths[leftIndex] || 0;
    const cw = widths[centerIndex] || 0;
    const rw = widths[rightIndex] || 0;
    setViewportWidth(lw + cw + rw + GAP_PX * 2);
  };

  useLayoutEffect(() => {
    // measure after render
    measureAll();
    const onResize = () => window.requestAnimationFrame(measureAll);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // whenever currentSlide or slideWidths change, recompute viewport width
  useEffect(() => {
    if (!slideWidths.length) return;
    const leftIndex = currentSlide - 1;
    const centerIndex = currentSlide;
    const rightIndex = currentSlide + 1;
    const lw = slideWidths[leftIndex] || 0;
    const cw = slideWidths[centerIndex] || 0;
    const rw = slideWidths[rightIndex] || 0;
    setViewportWidth(lw + cw + rw + GAP_PX * 2); // GAP_PX * 2 es correcto si hay 3 tarjetas y 2 espacios entre ellas
  }, [currentSlide, slideWidths]);

  // compute cumulative offset before index i (sum widths + gaps)
  const offsetBefore = (idx: number) => {
    let sum = 0;
    for (let i = 0; i < idx; i++) {
      sum += (slideWidths[i] || 0) + GAP_PX;
    }
    return sum;
  };

  // transform X: we want the left visible slide to sit at x=0 inside the viewport
  const leftVisibleIndex = Math.max(0, currentSlide - 1);
  const transformX = slideWidths.length ? -(offsetBefore(leftVisibleIndex)) : 0;

  // handlers
  const goNext = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentSlide((s) => s + 1);
  };
  const goPrev = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentSlide((s) => s - 1);
  };

  // after transition ends, handle clones jump (instant, no transition)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onTransitionEnd = () => {
      // if moved to right clone (last index)
      if (currentSlide === slides.length - 1) {
        // jump without transition to real first
        setTransitioning(false);
        setCurrentSlide(1);
      } else if (currentSlide === 0) {
        // jumped to left clone -> go to real last
        setTransitioning(false);
        setCurrentSlide(slides.length - 2);
      } else {
        setTransitioning(false);
      }
    };

    (track as HTMLElement).addEventListener("transitionend", onTransitionEnd);
        return () => (track as HTMLElement).removeEventListener("transitionend", onTransitionEnd);
  }, [currentSlide, slides.length]);

  // when we programmatically change currentSlide to the 'real' position after hitting a clone,
  // the transform will update (no transition) and everything stays smooth.

  return (
    <div className="relative mb-16">
      {/* Controls */}
      <div className="absolute -top-6 right-0 translate-x-full flex space-x-2 z-30">
        <button onClick={goPrev} aria-label="Anterior" className="transition flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 19" fill="none" className="h-5 w-auto text-black">
            <path stroke="currentColor" strokeWidth="1.5" d="M20.959 9.379H1.999" />
            <path stroke="currentColor" strokeWidth="1.5" d="m10.379 1-8.38 8.379 8.38 8.379" />
          </svg>
        </button>
        <button onClick={goNext} aria-label="Siguiente" className="transition flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 19" fill="none" className="h-5 w-auto text-black">
            <g transform="scale(-1,1) translate(-21,0)">
              <path stroke="currentColor" strokeWidth="1.5" d="M20.959 9.379H1.999" />
              <path stroke="currentColor" strokeWidth="1.5" d="m10.379 1-8.38 8.379 8.38 8.379" />
            </g>
          </svg>
        </button>
      </div>

      {/* Centered viewport with exact width to show only 3 slides */}
      <div
        className="mx-auto relative overflow-hidden"
        style={{
          width: viewportWidth ? `${viewportWidth}px` : "100%",
          maxWidth: "100vw", // <-- Limita el ancho máximo al viewport
          transition: "width 160ms"
        }}
      >
        <div
          ref={trackRef}
          className="flex items-center"
          style={{
            gap: `${GAP_PX}px`,
            transform: `translate3d(${transformX}px, 0, 0)`,
            transition: transitioning ? "transform 0.5s ease" : "none",
            willChange: "transform",
            alignItems: "center",
            minWidth: "100%", // <-- Asegura que el track no sea menor que el contenedor
          }}
        >
          {slides.map((p, i) => {
            // detect whether this slide is left, center, or right relative to currentSlide
            const leftIdx = currentSlide - 1;
            const centerIdx = currentSlide;
            const rightIdx = currentSlide + 1;
            const isLeft = i === leftIdx;
            const isCenter = i === centerIdx;
            const isRight = i === rightIdx;

            // Proporciones: centro más grande; laterales más anchas que antes
            const base = isCenter
              ? "w-[65vw] max-w-[400px] z-20"
              : "w-[58vw] max-w-[340px] pointer-events-none"; // <-- Añadido max-w para evitar desbordes

            // Assign refs so we can measure widths
            const setRef = (el: HTMLDivElement | null) => {
                          slideRefs.current[i] = el;
            };

            return (
              <div key={`${p.title}-${i}`} className="flex-shrink-0" ref={setRef}>
                <div className={`${base} transition-transform duration-300`}>
                  <Card className={`overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-full ${isCenter ? "shadow-2xl" : "shadow-lg"}`}>
                    {/* Imagen con contenedor de altura fija para que todas queden iguales */}
                    <div className="h-[24rem] overflow-hidden">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover rounded-md" />
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-black mb-2">{p.title}</h3>
                      <p className="text-sm text-gray-500 mb-1">{p.location}</p>
                      <p className="text-sm font-medium text-black">{p.status}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
