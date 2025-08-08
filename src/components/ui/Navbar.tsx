"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  transparentOnHero?: boolean; // Whether to be transparent when at top
  heroHeight?: number; // Height of hero section for scroll detection
}

export default function Navbar({ transparentOnHero = false, heroHeight = 400 }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldShowBackground = transparentOnHero ? scrollTop > heroHeight * 0.3 : true;
      setIsScrolled(shouldShowBackground);
    };

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [transparentOnHero, heroHeight]);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/careers", label: "Careers" },
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
    px-3 py-2 text-sm font-medium transition-colors duration-200
    ${isScrolled || !transparentOnHero
      ? active
        ? 'text-black border-b-2 border-black'
        : 'text-gray-700 hover:text-black'
      : active
        ? 'text-white border-b-2 border-white'
        : 'text-white/80 hover:text-white'
    }
  `;
  
  return (
    <header className={navbarClasses}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className={`text-2xl font-bold transition-colors duration-200 ${textClasses}`}>
              URBAN
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkClasses(isActive(link.href))}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`p-2 rounded-md transition-colors duration-200 ${textClasses} hover:bg-black/10`}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
