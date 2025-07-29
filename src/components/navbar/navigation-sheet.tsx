import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavMenu } from "./nav-menu";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
       <SheetContent>
        <div className={`title flex w-full items-center h-20 border ${montserrat.className} text-blue-500 font-bold text-lg px-3`}>
          <h1>HSI Boarding School</h1>
        </div>
        <NavMenu orientation="vertical" className="mt-12" />
        <div className="mt-auto p-3">
          <Button className="w-full bg-blue-500 hover:bg-blue-600 hover:cursor-pointer">
            Kenali Kami
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
