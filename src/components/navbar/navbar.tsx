import Image from "next/image";
import { NavigationSheet } from "./navigation-sheet";
import Navigation from "./navigation";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Navbar = () => {
  return (
    <div className={` ${montserrat.className}`}>
      <nav className="h-16 md:h-20 lg:h-24 shadow">
        <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto sm:px-6 lg:px-8">
          <Navigation />
          <Image
            src={"/important/logo.png"}
            alt="logo"
            width={100}
            height={100}
            className="w-12 md:w-16 h-auto"
          />
          {/* <NavigationRight /> */}
          <Navigation />
          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile Menu */}
            <NavigationSheet />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
