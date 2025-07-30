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
      { title: "Program", href: "/programs" },
    ],
  },
  {
    items: [
      { title: "Galeri", href: "/gallery" },
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
      <div className="h-full hidden lg:flex items-center justify-between max-w-screen-xl mx-auto sm:px-6 lg:px-8">
        <Navigation menuItems={navItems} index={0} />
        <Image
          src={"/important/logo.png"}
          alt="logo"
          width={100}
          height={100}
          className={`w-12 h-auto transition-all duration-300 ${isScrolled ? "md:w-14" : "md:w-16"}`}
        />
        <Navigation menuItems={navItems} index={1} />
      </div>

      {/* Mobile Navigation */}
      <div className="h-full flex items-center justify-center lg:hidden px-4 sm:px-6 relative">
        <Image
          src={"/important/logo.png"}
          alt="logo"
          width={100}
          height={100}
          className="w-10 md:w-16 h-auto"
        />
        <div className="absolute right-4 sm:right-6">
          <NavigationSheet />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
