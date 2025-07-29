"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Montserrat } from "next/font/google";

gsap.registerPlugin(ScrollTrigger);

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const leftNavLinks = [
  { title: "Beranda", href: "/" },
  { title: "Tentang", href: "/about" },
];

const rightNavLinks = [
  { title: "Program", href: "/programs" },
  { title: "Fasilitas", href: "/facilities" },
  { title: "Kontak", href: "/contact" },
];

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const leftLinksRef = useRef<HTMLDivElement>(null);
  const rightLinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!navRef.current) return;

    const nav = navRef.current;
    const logo = logoRef.current;
    const leftLinks = leftLinksRef.current;
    const rightLinks = rightLinksRef.current;

    // Initial state
    gsap.set(nav, {
      backgroundColor: "rgba(255, 255, 255, 0)",
      backdropFilter: "blur(0px)",
      borderBottomColor: "rgba(229, 231, 235, 0)",
    });

    // Scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "100px top",
        end: "200px top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          // Navbar background and blur
          gsap.to(nav, {
            backgroundColor: `rgba(255, 255, 255, ${0.95 * progress})`,
            backdropFilter: `blur(${12 * progress}px)`,
            borderBottomColor: `rgba(229, 231, 235, ${progress})`,
            duration: 0.3,
          });

          // Logo scale animation
          if (logo) {
            gsap.to(logo, {
              scale: 1 - 0.08 * progress,
              duration: 0.3,
            });
          }

          // Links subtle animation
          if (leftLinks && rightLinks) {
            gsap.to([leftLinks.children, rightLinks.children], {
              y: -1 * progress,
              duration: 0.3,
              stagger: 0.03,
            });
          }
        },
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Mobile menu toggle animation
  useEffect(() => {
    const mobileMenu = document.querySelector(".mobile-menu");
    if (!mobileMenu) return;

    if (isOpen) {
      gsap.fromTo(
        mobileMenu,
        {
          opacity: 0,
          y: -20,
          height: 0,
        },
        {
          opacity: 1,
          y: 0,
          height: "auto",
          duration: 0.4,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        mobileMenu.children,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          stagger: 0.08,
          delay: 0.2,
          ease: "power2.out",
        }
      );
    }
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Left Navigation Links */}
          <div
            ref={leftLinksRef}
            className="hidden lg:flex items-center space-x-8 flex-1 justify-start"
          >
            {leftNavLinks.map(({ title, href }) => (
              <Link
                key={title}
                href={href}
                className={`${montserrat.className} relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group`}
              >
                {title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <div ref={logoRef} className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src="/important/logo.png"
                  alt="HSI Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="hidden sm:block">
                <span
                  className={`${montserrat.className} font-semibold text-lg text-gray-800 transition-colors duration-300 group-hover:text-blue-600`}
                >
                  HSI Boarding School
                </span>
              </div>
            </Link>
          </div>

          {/* Right Navigation Links */}
          <div
            ref={rightLinksRef}
            className="hidden lg:flex items-center space-x-8 flex-1 justify-end"
          >
            {rightNavLinks.map(({ title, href }) => (
              <Link
                key={title}
                href={href}
                className={`${montserrat.className} relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group`}
              >
                {title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Button
              className={`${montserrat.className} bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 ml-4`}
            >
              Daftar Sekarang
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 ml-4"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isOpen ? "rotate-45 opacity-0" : "rotate-0 opacity-100"
                }`}
              >
                <Menu size={24} />
              </span>
              <span
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isOpen ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"
                }`}
              >
                <X size={24} />
              </span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mobile-menu lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {[...leftNavLinks, ...rightNavLinks].map(({ title, href }) => (
                <Link
                  key={title}
                  href={href}
                  className={`${montserrat.className} text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 px-4 py-2 rounded-lg font-medium`}
                  onClick={() => setIsOpen(false)}
                >
                  {title}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button
                  className={`${montserrat.className} bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-lg transition-all duration-300`}
                >
                  Daftar Sekarang
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar2;
