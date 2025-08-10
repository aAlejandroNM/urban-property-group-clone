"use client";

import React, { useEffect, useState } from "react";

type Project = {
  id: number;
  name: string;
  location: string;
  image: string;
};

interface CarouselProjectsProps {
  projects: Project[];
}

const CarouselProjects: React.FC<CarouselProjectsProps> = ({ projects }) => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(true);
    const fadeTimeout = setTimeout(() => setFade(false), 19500); // Empieza a difuminar 1s antes de cambiar
    const changeTimeout = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
      setFade(true); // Reinicia el fade para la nueva imagen
    }, 20000); // Cambia cada 20s

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(changeTimeout);
    };
  }, [current, projects.length]);

  const project = projects[current];

  return (
    <section className="relative h-screen flex items-end pb-20 overflow-hidden">
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"}`}
        style={{ backgroundImage: `url('${project.image}')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.name}</h1>
          <p className="text-lg opacity-90">{project.location.toUpperCase()}</p>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {projects.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${i === current ? "bg-white" : "bg-white bg-opacity-50"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default CarouselProjects;
