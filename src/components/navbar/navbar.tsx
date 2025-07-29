import Image from "next/image";
import { NavigationSheet } from "./navigation-sheet";
import NavigationLeft from "./navigation-left";
import NavigationRight from "./navigation-right";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Navbar = () => {
  return (
    <div className={`min-h-screen bg-muted ${montserrat.className}`}>
      <nav className="h-16 md:h-20 bg-background">
        <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto sm:px-6 lg:px-8">
          <NavigationLeft />
          <Image src={"/important/logo.png"} alt="logo" width={100} height={100} className="w-12 h-auto" />
           <NavigationRight />
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
