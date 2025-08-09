"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/ui/Navbar";
import { useState } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0
  }
};

const staggerChildren = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  // Carrusel de proyectos
  const projects = [
    {
      image: "https://ext.same-assets.com/319956013/1658223507.jpeg",
      title: "The Waterfront, CCQ",
      location: "GOSFORD, NSW",
      status: "NOW SELLING"
    },
    {
      image: "https://ext.same-assets.com/319956013/1019608060.jpeg",
      title: "ESTE",
      location: "LITTLE BAY, NSW",
      status: "NOW SELLING"
    },
    {
      image: "https://ext.same-assets.com/319956013/1366628589.png",
      title: "The Halston",
      location: "NORTH STRATHFIELD, NSW",
      status: "NOW SELLING"
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  // Para mostrar siempre 3 imágenes (previa, actual, siguiente)
  const getVisibleProjects = () => {
    const prev = (currentIndex - 1 + projects.length) % projects.length;
    const next = (currentIndex + 1) % projects.length;
    return [projects[prev], projects[currentIndex], projects[next]];
  };

  // Nueva animación de slide robusta
  const slideFadeVariants = {
    hiddenLeft: { opacity: 0, x: -100 },
    hiddenRight: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full object-cover -z-10"
        style={{
          backgroundImage: `url('https://ext.same-assets.com/319956013/1723194561.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Navbar with transparent hero support */}
      <Navbar transparentOnHero={true} heroHeight={600} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          {/* Hero content removed to match design */}
        </section>

        {/* Inspired Section */}
        <motion.section
          className="py-24 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
            >
              Inspired by You.<br />
              Built by Us.
            </motion.h1>
            <motion.p
              className="text-lg md:text-2xl"
              variants={fadeInUp}
            >
              Creamos experiencias únicas que comunican tu visión al mundo.
            </motion.p>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="py-20 bg-gray-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <h3 className="text-sm font-medium text-gray-500 mb-4 tracking-wide">ABOUT US</h3>
                <h2 className="text-4xl font-bold text-black mb-6">
                  We don't just build houses; we shape neighbourhoods and create spaces where everyone feels at home.
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Whether it's a first home, a growing family's next step, or a place to truly belong, our focus is on quality, smart design, and lasting impact.
                </p>
                <Button variant="outline" className="rounded-full px-8 py-6 text-base">
                  About us
                </Button>
              </motion.div>
              <motion.div className="relative" variants={fadeInRight}>
                <img
                  src="https://ext.same-assets.com/319956013/275813924.jpeg"
                  alt="Modern apartment building"
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 px-3 py-1 text-xs text-gray-600">
                  Artist's impression only*
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="py-20 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-5xl font-bold text-center text-black mb-16"
              variants={fadeInUp}
            >
              Places We're Creating.
            </motion.h2>

            {/* Carrusel Mejorado: reemplaza el div relativo actual por esto */}
            <div className="relative mb-16">
              {/* Flechas - moved a top-outside (fuera de la imagen) */}
              <div className="absolute -top-6 right-0 translate-x-full flex space-x-2 z-30">
                <button onClick={handlePrev} className="transition flex items-center justify-center" aria-label="Anterior">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 21 19"
                    fill="none"
                    className="h-5 w-auto text-black"
                  >
                    <path stroke="currentColor" strokeWidth="1.5" d="M20.959 9.379H1.999" />
                    <path stroke="currentColor" strokeWidth="1.5" d="m10.379 1-8.38 8.379 8.38 8.379" />
                  </svg>
                </button>
                <button onClick={handleNext} className="transition flex items-center justify-center" aria-label="Siguiente">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 21 19"
                    fill="none"
                    className="h-5 w-auto text-black"
                  >
                    <g transform="scale(-1,1) translate(-21,0)">
                      <path stroke="currentColor" strokeWidth="1.5" d="M20.959 9.379H1.999" />
                      <path stroke="currentColor" strokeWidth="1.5" d="m10.379 1-8.38 8.379 8.38 8.379" />
                    </g>
                  </svg>
                </button>
              </div>
              <div className="w-screen left-1/2 -translate-x-1/2 relative overflow-visible">
                {/* Ajusté gap-x para reducir el espacio entre tarjetas */}
                <div className="grid grid-cols-1 md:[grid-template-columns:1fr_auto_1fr] justify-center items-centermin-h-[34rem] gap-x-4 px-4 md:px-0">
                  {(() => {
                    const visible = getVisibleProjects();
                    const [left, center, right] = visible;

                    /* Variants para la animación con dirección */
                    const centerVariants = {
                      enter: (dir) => ({ x: dir > 0 ? 220 : -220, opacity: 0, scale: 0.98 }),
                      center: { x: 0, opacity: 1, scale: 1 },
                      exit: (dir) => ({ x: dir > 0 ? -220 : 220, opacity: 0, scale: 0.98 }),
                    };

                    const sideVariants = {
                      hiddenLeft: { x: -60, opacity: 0.6, scale: 0.95 },
                      visible: { x: 0, opacity: 0.75, scale: 0.95 },
                      hiddenRight: { x: 60, opacity: 0.6, scale: 0.95 },
                    };

                    return (
                      <>
                        {/* IZQUIERDA */}
                        <div className="flex justify-start">
                          <motion.div
                            key={`left-${currentIndex}`}
                            className="transition-all duration-300 w-[50vw] md:w-[280px] scale-90 opacity-70 pointer-events-none"
                            variants={sideVariants}
                            initial="hiddenLeft"
                            animate="visible"
                            transition={{ type: "tween", duration: 0.45 }}
                          >
                            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                              <div className="relative">
                                <img src={left.image} alt={left.title} className="w-full h-[24rem] object-cover rounded-md" />
                                <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 px-2 py-1 text-xs text-gray-600">
                                  Artist's impression only*
                                </div>
                              </div>
                              <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-black mb-2">{left.title}</h3>
                                <p className="text-sm text-gray-500 mb-1">{left.location}</p>
                                <p className="text-sm font-medium text-black">{left.status}</p>
                              </CardContent>
                            </Card>
                          </motion.div>
                        </div>

                        {/* CENTRO (AnimatePresence para slide limpio) */}
                        <div className="flex justify-center">
                          <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                              key={currentIndex}             // importante: key cambia al cambiar currentIndex
                              custom={direction}             // pasa la dirección al variant
                              variants={centerVariants}
                              initial="enter"
                              animate="center"
                              exit="exit"
                              transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
                              className="transition-all duration-300 w-[75vw] md:w-[460px] z-20"
                              style={{ pointerEvents: 'auto' }}
                            >
                              <Card className="overflow-hidden border-0 shadow-2xl hover:shadow-xl transition-shadow duration-300 w-full">
                                <div className="relative">
                                  <img src={center.image} alt={center.title} className="w-full h-[24rem] object-cover rounded-md" />
                                  <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 px-2 py-1 text-xs text-gray-600">
                                    Artist's impression only*
                                  </div>
                                </div>
                                <CardContent className="p-6">
                                  <h3 className="text-xl font-bold text-black mb-2">{center.title}</h3>
                                  <p className="text-sm text-gray-500 mb-1">{center.location}</p>
                                  <p className="text-sm font-medium text-black">{center.status}</p>
                                </CardContent>
                              </Card>
                            </motion.div>
                          </AnimatePresence>
                        </div>

                        {/* DERECHA */}
                        <div className="flex justify-end">
                          <motion.div
                            key={`right-${currentIndex}`}
                            className="transition-all duration-300 w-[50vw] md:w-[280px] scale-90 opacity-70 pointer-events-none"
                            variants={sideVariants}
                            initial="hiddenRight"
                            animate="visible"
                            transition={{ type: "tween", duration: 0.45 }}
                          >
                            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                              <div className="relative">
                                <img src={right.image} alt={right.title} className="w-full h-[24rem] object-cover rounded-md" />
                                <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 px-2 py-1 text-xs text-gray-600">
                                  Artist's impression only*
                                </div>
                              </div>
                              <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-black mb-2">{right.title}</h3>
                                <p className="text-sm text-gray-500 mb-1">{right.location}</p>
                                <p className="text-sm font-medium text-black">{right.status}</p>
                              </CardContent>
                            </Card>
                          </motion.div>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>

            <motion.div className="text-center" variants={fadeInUp}>
              <Link href="/projects" className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                View All Projects
              </Link>
            </motion.div>

            {/* Development Types */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 mt-20"
              variants={staggerChildren}
            >
              <motion.div variants={fadeInLeft}>
                <img
                  src="https://ext.same-assets.com/319956013/722020479.jpeg"
                  alt="Development types"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </motion.div>
              <motion.div className="space-y-4" variants={fadeInRight}>
                {["Residential", "Mixed-Use", "Retail", "Build-to-Rent"].map((type, index) => (
                  <motion.div
                    key={type}
                    className="border-b border-gray-200 py-4"
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button className="flex justify-between items-center w-full text-left hover:opacity-80 transition-opacity">
                      <span className="text-xl font-bold text-black">{type}</span>
                      <span className="text-2xl text-gray-400">+</span>
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Philosophy Section */}
        <motion.section
          className="py-20 bg-gray-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              className="text-5xl font-bold text-black mb-20"
              variants={fadeInUp}
            >
              No shortcuts. No compromises. Just great places, built for living.
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div className="text-left" variants={fadeInLeft}>
                <h3 className="text-sm font-medium text-gray-500 mb-4 tracking-wide">OUR APPROACH</h3>
                <h2 className="text-3xl font-bold text-black mb-6">
                  Professional where it counts. Personal where it matters.
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  We take care of every step, from planning to delivery, with the experience of a skilled team and the care of a family-run business. We're proud to be iCIRT-rated and the first developer in Australia to offer 10-year Latent Defects Insurance, we give buyers lasting confidence in the homes we build.
                </p>
                <Button variant="outline" className="rounded-full px-8 py-6 text-base">
                  Learn more
                </Button>
              </motion.div>
              <motion.div variants={fadeInRight}>
                <img
                  src="https://ext.same-assets.com/319956013/2867624394.jpeg"
                  alt="Modern building approach"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Awards Section */}
        <motion.section
          className="py-20 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h3
              className="text-sm font-medium text-gray-500 mb-8 tracking-wide text-center"
              variants={fadeInUp}
            >
              AWARDED FOR WHAT MATTERS
            </motion.h3>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerChildren}
            >
              {[
                {
                  image: "https://ext.same-assets.com/319956013/3904024081.jpeg",
                  title: "Best Affordable Housing Development",
                  subtitle: "Innovation Excellence Awards",
                  year: "Finalist, 2024 (Navali)"
                },
                {
                  image: "https://ext.same-assets.com/319956013/2846244642.png",
                  title: "UDIA Young Leader's Award",
                  subtitle: "Winner, 2024",
                  year: ""
                },
                {
                  image: "https://ext.same-assets.com/319956013/3683434962.png",
                  title: "UDIA Apartments Mid-Rise",
                  subtitle: "Winner, 2024 (Navali)",
                  year: ""
                }
              ].map((award, index) => (
                <motion.div key={index} className="text-center" variants={fadeInUp}>
                  <img
                    src={award.image}
                    alt={`Award ${index + 1}`}
                    className="w-24 h-24 mx-auto mb-4"
                  />
                  <p className="text-sm font-medium text-black">{award.title}</p>
                  <p className="text-sm text-gray-500">{award.subtitle}</p>
                  {award.year && <p className="text-sm text-gray-500">{award.year}</p>}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* News Section */}
        <motion.section
          id="news"
          className="py-20 bg-gray-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="flex justify-between items-center mb-16"
              variants={fadeInUp}
            >
              <h2 className="text-5xl font-bold text-black">In the Spotlight</h2>
              <Button variant="outline" className="rounded-full px-8 py-6 text-base">
                Read all news
              </Button>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerChildren}
            >
              {[
                {
                  image: "https://ext.same-assets.com/319956013/1285078760.jpeg",
                  date: "JUNE 27, 2025",
                  title: "Official Opening - The Halston, North Strathfield"
                },
                {
                  image: "https://ext.same-assets.com/319956013/1930492882.jpeg",
                  date: "MAY 29, 2025",
                  title: "Topping Out - The Waterfront at Central Coast Quarter"
                },
                {
                  image: "https://ext.same-assets.com/319956013/3706610620.jpeg",
                  date: "DECEMBER 1, 2024",
                  title: "Walk through of Central Coast Quarter Display Suite"
                }
              ].map((news, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6">
                      <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                      <h3 className="text-xl font-bold text-black">{news.title}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        id="contact"
        className="bg-black text-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerChildren}
            >
              <motion.div variants={fadeInUp}>
                <h3 className="text-lg font-medium mb-4">Navigate</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/" className="hover:text-white">Home</Link></li>
                  <li><Link href="/about" className="hover:text-white">About</Link></li>
                  <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="text-lg font-medium mb-4">Information</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
                  <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                  <li><a href="#" className="hover:text-white">Cookie Declaration</a></li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="text-lg font-medium mb-4">Contact</h3>
                <div className="text-gray-300 space-y-2">
                  <p>Suite 110, Level 1</p>
                  <p>180-186 Burwood Road</p>
                  <p>Burwood NSW 2134</p>
                  <p className="mt-4">(02) 9744 3333</p>
                  <p>reception@urbanpropertygroup.com.au</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="text-lg font-medium mb-4">Connect</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-white">Instagram</a></li>
                  <li><a href="#" className="hover:text-white">Facebook</a></li>
                  <li><a href="#" className="hover:text-white">YouTube</a></li>
                  <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-medium mb-4">Get Urban Updates</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-300">First name*</Label>
                    <Input
                      id="firstName"
                      className="bg-transparent border-gray-600 text-white placeholder-gray-400"
                      placeholder="Your First Name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-300">Last name*</Label>
                    <Input
                      id="lastName"
                      className="bg-transparent border-gray-600 text-white placeholder-gray-400"
                      placeholder="Your Last Name"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-300">Email address*</Label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-transparent border-gray-600 text-white placeholder-gray-400"
                    placeholder="Your email address"
                  />
                </div>
                <div className="flex items-start space-x-2">
                  <input type="checkbox" id="terms" className="mt-1" />
                  <label htmlFor="terms" className="text-sm text-gray-300">
                    I agree to the Privacy Policy and accept the Terms of Use
                  </label>
                </div>
                <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6">
                  Submit
                </Button>
              </form>
            </motion.div>
          </div>

          {/* Bottom Footer */}
          <motion.div
            className="border-t border-gray-800 mt-12 pt-8"
            variants={fadeInUp}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                <p>Urban Property Group acknowledges the Traditional Custodians of the land which our business operates. We pay our respects to Aboriginal and Torres Strait Islanders Elders past, present and future.</p>
              </div>
              <div className="flex items-center">
                <h1 className="text-2xl font-bold">URBAN</h1>
                <span className="ml-2 text-sm text-gray-400">PROPERTY</span>
              </div>
            </div>
            <div className="text-center text-gray-400 text-sm mt-4">
              © Urban Property Group 2025
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
