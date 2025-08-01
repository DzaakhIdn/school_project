import { BentoGridDemo } from "@/components/Program/bento-grid-demo";
import { Space_Grotesk, Poppins, Montserrat } from "next/font/google";
import ScrollReveal from "@/animate/ScrollReveal";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Page() {
  return (
    <>
      <div className="min-h-screen md:mt-32 lg:mt-0 flex items-center justify-center flex-col">
        <div className="header_container my-16 lg:my-0 lg:mb-10 flex flex-col justify-center items-center gap-4 md:gap-3 max-w-6xl w-full mx-auto">
          <div
            className={`${spaceGrotesk.className} font-bold text-xl lg:text-base text-yellow-500`}
          >
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
              textClassName=""
            >
              {`< Visi & Misi />`}
            </ScrollReveal>
          </div>
          <div
            className={`${montserrat.className} text-center font-extrabold tracking-tight text-2xl text-blue-500 md:text-3xl`}
          >
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
            >
              Kami Tidak Mencetak Lulusan Biasa, Tapi Pemimpin yang Beradab
            </ScrollReveal>
          </div>
          <div className="content">
            <p
              className={`${poppins.className} text-center font-light text-base text-slate-900`}
            >
              HSI adalah pondok pesantren jenjang SMA yang memadukan pendidikan
              Qurani, akademik nasional, dan teknologi. Kami ingin anak-anak
              tumbuh menjadi pribadi yang kokoh akidah, kuat adab, dan cerdas
              menyikapi zaman.
            </p>
          </div>
        </div>
          <div className="mt-10">
            <BentoGridDemo />
          </div>
      </div>
    </>
  );
}
