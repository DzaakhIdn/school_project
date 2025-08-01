"use client";
// import Image from "next/image";
import HeroHome from "@/components/(home_components)/heroHome/HeroHome";
import Program from "@/components/(home_components)/Program_Sect/Programs-sect";
import VisiSect from "@/components/(home_components)/Visi_Sect/visi-sect";

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <VisiSect />
      <Program />
    </>
  );
}
