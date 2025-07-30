"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface MenuItem {
  title: string;
  href: string;
}
interface MenuGrup {
  items: MenuItem[];
}
interface navbarProps {
  menuItems: MenuGrup[];
  index: number;
  align?: string;
}
const Navigation = ({menuItems, index, align = "center" }: navbarProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const justifyClass = {
    end: "justify-end",
    start: "justify-start",
    center: "justify-center",
  }[align];

  useEffect(() => {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach((item) => {
      const link = item.querySelector("a");
      const underline = item.querySelector(".nav-underline");
      const text = item.querySelector(".nav-text");

      if (!link || !underline || !text) return;

      gsap.set(underline, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      const handleMouseEnter = () => {
        const itemTitle = item.getAttribute("data-item");
        setActiveItem(itemTitle);

        // Animate underline
        gsap.to(underline, {
          scaleX: 1,
          duration: 0.4,
          ease: "power2.out",
        });

        // Animate text
        gsap.to(text, {
          y: -3,
          scale: 1.05,
          color: "#3b82f6",
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        setActiveItem(null);

        // Animate underline
        gsap.to(underline, {
          scaleX: 0,
          duration: 0.3,
          ease: "power2.out",
        });

        // Animate text back
        gsap.to(text, {
          y: 0,
          scale: 1,
          color: "#374151",
          duration: 0.3,
          ease: "power2.out",
        });
      };

      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      navItems.forEach((item) => {
        item.removeEventListener("mouseenter", () => {});
        item.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <nav ref={navRef} className="relative py-6 md:py-8 lg:py-10">
        <ul className={`flex gap-8 md:gap-12 lg:gap-16 items-center ${justifyClass}`}>
          {menuItems[index].items.map((item, index) => (
            <li
              key={item.title}
              className="nav-item relative"
              data-item={item.title}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
            <Link
              href={item.href}
              className="relative block px-2 py-1"
            >
              <span
                className={`nav-text relative z-10 text-base text-gray-700 transition-all duration-300 ${montserrat.className}`}
              >
                {item.title}
              </span>
              <span
                className="nav-underline absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                style={{ transform: "scaleX(0)" }}
              />
            </Link>
          </li>
          ))}
        </ul>
    </nav>
  );
};

export default Navigation;
