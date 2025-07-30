"use client";
import Image from "next/image";
import { NavigationSheet } from "./navigation-sheet";
import Navigation from "./navigation";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

const navItems = [
  {
    items: [
      { title: "Beranda", href: "/" },
      { title: "Tentang", href: "/about" },
      { title: "Galeri", href: "/gallery" },
    ],
  },
  {
    items: [
      { title: "Program", href: "/programs" },
      { title: "Blog", href: "/blog" },
      { title: "Kontak", href: "/contact" },
    ],
  },
];

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });
  return (
    <motion.nav
      initial={false}
      className={`h-16 md:h-20 fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md h-20"
          : "bg-transparent lg:h-24"
      }`}
    >
      {/* Desktop Navigation */}
      <div className="h-full hidden lg:flex items-center justify-between max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="flex-1 flex justify-start">
          <Navigation menuItems={navItems} index={0} align="start" />
        </div>
        
        <div className="flex-shrink-0 mx-8">
          <Image
            src={"/important/logo.png"}
            alt="logo"
            width={100}
            height={100}
            className={`w-12 h-auto transition-all duration-300 ${
              isScrolled ? "md:w-14" : "md:w-16"
            }`}
          />
        </div>
        
        <div className="flex-1 flex justify-end">
          <Navigation menuItems={navItems} index={1} align="end" />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="h-full flex items-center lg:hidden px-4 sm:px-6 relative">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src={"/important/logo.png"}
            alt="logo"
            width={100}
            height={100}
            className={`h-auto transition-all duration-300 ${isScrolled ? "w-14 md:w-16" : "w-12 md:w-12"}`}
          />
        </div>
        
        <div className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2">
          <NavigationSheet />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;


