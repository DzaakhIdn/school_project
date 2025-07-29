import Image from "next/image";
import { NavigationSheet } from "./navigation-sheet";
import Navigation from "./navigation";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
  return (
    <div className={` ${montserrat.className}`}>
      <nav className="h-16 md:h-20 lg:h-24 shadow">
        {/* Desktop Navigation */}
        <div className="h-full hidden lg:flex items-center justify-between max-w-screen-xl mx-auto sm:px-6 lg:px-8">
          <Navigation menuItems={navItems} />
          <Image
            src={"/important/logo.png"}
            alt="logo"
            width={100}
            height={100}
            className="w-12 md:w-16 h-auto"
          />
          <Navigation menuItems={navItems} />
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
      </nav>
    </div>
  );
};

export default Navbar;
