"use client";

import { useState, useEffect } from "react";
import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  transparentOnHero?: boolean; // Whether to be transparent when at top
  heroHeight?: number; // Height of hero section for scroll detection
}

export default function Navbar({ transparentOnHero = false, heroHeight = 400 }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > heroHeight);

      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    // Ejecuta una vez al montar para el estado inicial
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroHeight]);

  // Cierra el menú móvil al cambiar de ruta
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => pathname === href;

  // Dynamic styling based on scroll and background
  const navbarClasses = `
    fixed top-0 w-full z-50 transition-all duration-300 ease-in-out
    ${isScrolled || !transparentOnHero
      ? 'bg-white border-b border-gray-100 shadow-sm'
      : 'bg-transparent'
    }
  `;

  const textClasses = `
    ${isScrolled || !transparentOnHero
      ? 'text-black'
      : 'text-white'
    }
  `;

  const linkClasses = (active: boolean) => `
    relative px-3 py-2 text-sm font-medium transition-colors duration-200 group
    ${isScrolled || !transparentOnHero
      ? active
        ? 'text-black'
        : 'text-gray-700 hover:text-black'
      : active
        ? 'text-white'
        : 'text-white/80 hover:text-white'
    }
  `;

  const underlineClasses = (active: boolean) => `
    absolute bottom-0 left-1/2 h-0.5 bg-current transform -translate-x-1/2 transition-all duration-300 ease-out
    ${active
      ? 'w-full'
      : 'w-0 group-hover:w-full'
    }
  `;

  // Color del icono hamburguesa según fondo
  const burgerColor = isScrolled || !transparentOnHero ? "#000" : "#fff";

  return (
    <header className={`${navbarClasses} transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
      <nav className="font-graphik max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left aligned */}
          <div className="flex-shrink-0">
            <Link href="/" className={`text-[2rem] font-bold transition-colors duration-200 ${textClasses}`}>
              URBAN
            </Link>
          </div>

          {/* Centered Navigation - Desktop */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkClasses(isActive(link.href)) + " text-3xl pt-6"}
                >
                  {link.label}
                  <span className={underlineClasses(isActive(link.href))} />
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button - Right aligned */}
          <div className="md:hidden">
            <button
              type="button"
              className={`p-2 rounded-md transition-colors duration-200 focus:outline-none`}
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((open) => !open)}
            >
              <svg className="w-7 h-7" fill="none" stroke={burgerColor} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Empty div to balance the flex layout */}
          <div className="hidden md:block w-20"></div>
        </div>
        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className={`
              md:hidden absolute top-20 left-0 w-full z-40
              ${isScrolled || !transparentOnHero ? "bg-white border-b border-gray-100" : "bg-black/80"}
              transition-all duration-300
            `}
          >
            <div className="flex flex-col items-center py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    text-2xl font-medium w-full text-center py-2
                    ${isScrolled || !transparentOnHero
                      ? isActive(link.href) ? "text-black" : "text-gray-700 hover:text-black"
                      : isActive(link.href) ? "text-white" : "text-white/80 hover:text-white"
                    }
                  `}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
