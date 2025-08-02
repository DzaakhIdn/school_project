"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import { Montserrat, Space_Grotesk, Poppins } from "next/font/google";
import BlurText from "@/animate/BlurText";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
    <div className="min-h-screen md:mt-32 lg:mt-0 flex items-center justify-center">
      <div
        id="heroHome"
        className="max-w-6xl w-full mx-auto grid lg:grid-cols-2 gap-12 py-12 px-6 xl:px-0"
      >
        <div>
          <div className="flex justify-center lg:justify-start w-full">
            <BlurText
              className={`${spaceGrotesk.className} flex justify-center lg:justify-start items-center mt-6 max-w-[17ch] text-blue-500 text-4xl md:text-5xl lg:text-[3rem] xl:text-5xl font-bold !leading-[1.2]`}
              text="Membina Generasi Rabbani di Era Digital"
              delay={150}
              animateBy="words"
              direction="top"
            />
          </div>

          <p
            className={`${poppins.className} mt-6 max-w-3xl mx-auto text-base font-normal text-center lg:text-left`}
          >
            Anakmu butuh lebih dari sekadar ijazah. Di HSI Boarding School, kami
            bentuk pemuda Qurani yang fasih bahasa, tangguh adab, dan melek
            teknologi. Mondok. Hafal Qur’an. Bisa Bahasa. Jago IT.
          </p>
          <div className="mt-8 flex items-center flex-col lg:flex-row gap-4 justify-center lg:justify-start">
            <Button
              variant="default"
              className={`${montserrat.className} bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-sm py-5 sm:py-6 px-6 w-full lg:w-auto`}
            >
              Get Started <ArrowUpRight className="!h-5 !w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-md text-base shadow-none hover:cursor-pointer py-5 sm:py-6 px-6 w-full lg:w-auto"
            >
              <CirclePlay className="!h-5 !w-5" /> Tonton Video
            </Button>
          </div>
        </div>

        <div
          id="video"
          className="video_container transition-transform duration-500"
        >
          <div className="aspect-video bg-gray-200 rounded-lg shadow-md border-2 border-amber-400"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
