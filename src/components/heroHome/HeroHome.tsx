import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";
import { Space_Grotesk, Poppins } from "next/font/google";
import BlurText from "@/animate/BlurText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
const HeroHome = () => {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="mt-8 lg:mt-32 flex items-center justify-center">
      <div id="heroHome" className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
        <div>
          <div className="flex justify-center lg:justify-start w-full">
            <BlurText
              className={`${spaceGrotesk.className} flex justify-center lg:justify-start items-center mt-6 max-w-[17ch] text-blue-500 text-4xl md:text-5xl lg:text-[2.80rem] xl:text-5xl font-bold !leading-[1.2]`}
              text="Membina Generasi Rabbani di Era Digital"
              delay={150}
              animateBy="words"
              direction="top"
            />
          </div>

          <p
            className={`${poppins.className} mt-6 max-w-[60ch] text-base font-normal text-center lg:text-left`}
          >
            Anakmu butuh lebih dari sekadar ijazah. Di HSI Boarding School, kami
            bentuk pemuda Qurani yang fasih bahasa, tangguh adab, dan melek
            teknologi. Mondok. Hafal Qur’an. Bisa Bahasa. Jago IT.
          </p>
          <div className="mt-10 flex justify-center lg:justify-start items-center gap-4">
            <Button
              size="lg"
              className={`${poppins.className} bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-sm py-4 sm:py-6 px-6 w-full sm:w-auto`}
            >
              Get Started <ArrowUpRight className="!h-5 !w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className={`${poppins.className} text-sm py-4 sm:py-6 px-6 hover:cursor-pointer w-full sm:w-auto`}
            >
              <CirclePlay className="!h-5 !w-5" /> Tonton Video
            </Button>
          </div>
        </div>
        <div id="video" className="w-full aspect-video bg-accent rounded-xl"></div>
      </div>
    </div>
  );
};

export default HeroHome;
