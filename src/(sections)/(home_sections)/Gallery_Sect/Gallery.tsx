import { Space_Grotesk, Montserrat } from "next/font/google";
import ScrollReveal from "@/animate/ScrollReveal";
import { ModalDialogImage } from "@/components/alert/modal_dialog";
import { useRef, useState } from "react";
import { useClientRect } from "minimal-shared/hooks";
import {
  m,
  useSpring,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Gallery() {
  return (
    <>
      <div className=" md:mt-32 lg:mt-0 flex items-center justify-center flex-col transition-all duration-300 border border-black">
        <div className="my-10 lg:my-0 lg:mb-10 flex flex-col justify-center px-6 items-center gap-4 md:gap-3 max-w-6xl w-full mx-auto">
          <div className="text-container flex flex-col justify-center items-center">
            <div
              className={`${spaceGrotesk.className} font-bold text-yellow-500 text-xl lg:text-3xl`}
            >
              <p>{`< Kegiatan Seru Santri />`}</p>
            </div>
            <div
              className={`${montserrat.className} text-center font-extrabold tracking-tight text-2xl text-blue-500 md:text-3xl`}
            >
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={0}
                blurStrength={10}
              >
                Keseruan Santri di HSI Boarding School
              </ScrollReveal>
            </div>
            <div className="desc_Sect">
              <p
                className={`${montserrat.className} text-center text-sm md:text-base lg:text-lg text-slate-700`}
              >
                Selama belajar di HSI, para santri nggak cuma fokus akademik dan
                tahfidz, tapi juga aktif ikut berbagai acara seru yang
                menumbuhkan ukhuwah, kepemimpinan, dan semangat belajar. Yuk,
                intip beberapa momen terbaik mereka!
              </p>
            </div>
          </div>
          {/* Full width gallery container */}
        </div>
      </div>
    </>
  );
}

//

function scrollableContent() {
  return (
    <div className="w-full overflow-hidden p-5">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-6">
        {/* First row */}
        <div className="flex-shrink-0 w-64 h-64">
          <ModalDialogImage
            image_triger="/assets/thumbnail/img-thumb-1.jpg"
            image="/assets/thumbnail/img-thumb-1.jpg"
            title="Kegiatan 1"
            description="Deskripsi Kegiatan 1"
          />
        </div>
        <div className="flex-shrink-0 w-64 h-64">
          <ModalDialogImage
            image_triger="/assets/thumbnail/img-thumb-2.jpg"
            image="/assets/thumbnail/img-thumb-2.jpg"
            title="Kegiatan 2"
            description="Deskripsi Kegiatan 2"
          />
        </div>
        <div className="flex-shrink-0 w-64 h-64">
          <ModalDialogImage
            image_triger="/assets/thumbnail/img-thumb-3.jpg"
            image="/assets/thumbnail/img-thumb-3.jpg"
            title="Kegiatan 3"
            description="Deskripsi Kegiatan 3"
          />
        </div>
        <div className="flex-shrink-0 w-64 h-64">
          <ModalDialogImage
            image_triger="/assets/thumbnail/img-thumb-4.jpg"
            image="/assets/thumbnail/img-thumb-4.jpg"
            title="Kegiatan 4"
            description="Deskripsi Kegiatan 4"
          />
        </div>
        <div className="flex-shrink-0 w-64 h-64">
          <ModalDialogImage
            image_triger="/assets/thumbnail/img-thumb-1.jpg"
            image="/assets/thumbnail/img-thumb-1.jpg"
            title="Kegiatan 5"
            description="Deskripsi Kegiatan 5"
          />
        </div>
        <div className="flex-shrink-0 w-64 h-64">
          <ModalDialogImage
            image_triger="/assets/thumbnail/img-thumb-2.jpg"
            image="/assets/thumbnail/img-thumb-2.jpg"
            title="Kegiatan 6"
            description="Deskripsi Kegiatan 6"
          />
        </div>
        <div className="flex-shrink-0 w-64 h-64">
          <ModalDialogImage
            image_triger="/assets/thumbnail/img-thumb-3.jpg"
            image="/assets/thumbnail/img-thumb-3.jpg"
            title="Kegiatan 7"
            description="Deskripsi Kegiatan 7"
          />
        </div>
        <div className="flex-shrink-0 w-64 h-64">
          <ModalDialogImage
            image_triger="/assets/thumbnail/img-thumb-4.jpg"
            image="/assets/thumbnail/img-thumb-4.jpg"
            title="Kegiatan 8"
            description="Deskripsi Kegiatan 8"
          />
        </div>
      </div>
    </div>
  );
}
