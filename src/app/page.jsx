'use client'
import About from "@/Components/About";
import AchievEx from "@/Components/AchievEx";
import Contact from "@/Components/Contact";
import HeroSection from "@/Components/HeroSection";
import Project from "@/Components/Project";
import { JsonProvider } from "./Context/JsonProvider";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function Home() {

  useEffect(() => {
    Aos.init({
      duration: 800, 
      once: false, 
    });
  }, []);
  return (
    <>
      {/* // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      /* <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"> */
      /* </main> */
    /* </div> */}
    <div className=" bg-[#0b1118]">
      
      <JsonProvider>
        <HeroSection />
        <About />
        <AchievEx />
        <Project />
        <Contact />
      </JsonProvider>
    </div>
    </>
  );
}
