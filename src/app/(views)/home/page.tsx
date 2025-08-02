"use client";
// import Image from "next/image";
import HeroHome from "@/(sections)/(home_sections)/Hero_Home/HeroHome";
import Program from "@/(sections)/(home_sections)/Program_Sect/Programs-sect";
import VisiSect from "@/(sections)/(home_sections)/Visi_Sect/visi-sect";
import Gallery from "@/(sections)/(home_sections)/Gallery_Sect/Gallery";

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <VisiSect />
      <Program />
      <Gallery />
    </>
  );
}
