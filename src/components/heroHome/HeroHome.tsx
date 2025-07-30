import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";
import { Space_Grotesk, Poppins } from "next/font/google";
import BlurText from "@/animate/BlurText";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
const HeroHome = () => {
  return (
    <div className="mt-8 lg:mt-32 flex items-center justify-center">
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
        <div>
          <div className="relative">
            <div className="flex justify-center lg:justify-start w-full">
              <BlurText
                className={`${spaceGrotesk.className} flex justify-center lg:justify-start items-center mt-6 max-w-[17ch] text-blue-500 text-4xl md:text-5xl lg:text-[2.80rem] xl:text-5xl font-bold !leading-[1.2]`}
                text="Membina Generasi Rabbani di Era Digital"
                delay={150}
                animateBy="words"
                direction="top"
              />
            </div>

            {/* SVG Draw Circle for "Digital" - Responsive */}
            <div className="absolute z-20 pointer-events-none 
                          bottom-0 right-0 translate-y-6 -translate-x-4
                          sm:bottom-0 sm:right-0 sm:translate-y-8 sm:-translate-x-8
                          md:bottom-0 md:-right-12 md:translate-y-10
                          lg:bottom-0 lg:-right-16 lg:translate-y-12
                          xl:bottom-0 xl:-right-20 xl:translate-y-14">
              <svg
                viewBox="0 0 180 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-48 h-auto
                          sm:w-56
                          md:w-72
                          lg:w-80
                          xl:w-96"
              >
                <path
                  d="M100.537 16.4642C101.106 1.10978 52.7676 1.10978 52.7676 1.10978C52.7676 1.10978 2.02686 -1.59748 1.01745 19.8763C-0.0312778 42.1864 46.5161 39.2311 55.0424 38.6429C63.5686 38.0547 105.088 36.9367 107.93 17.0329"
                  stroke="#C40000"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <p
            className={`${poppins.className} mt-6 max-w-[60ch] text-lg font-normal text-center lg:text-left`}
          >
            Anakmu butuh lebih dari sekadar ijazah. Di HSI Boarding School, kami
            bentuk pemuda Qurani yang fasih bahasa, tangguh adab, dan melek
            teknologi. Mondok. Hafal Qur’an. Bisa Bahasa. Jago IT.
          </p>
          <div className="mt-12 flex justify-center lg:justify-start items-center gap-4">
            <Button size="lg" className="rounded-full text-base">
              Get Started <ArrowUpRight className="!h-5 !w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none"
            >
              <CirclePlay className="!h-5 !w-5" /> Watch Demo
            </Button>
          </div>
        </div>
        <div className="w-full aspect-video bg-accent rounded-xl" />
      </div>
    </div>
  );
};

export default HeroHome;

