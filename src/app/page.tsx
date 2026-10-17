"use client";

import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Project from "@/components/sections/Project";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 pb-8 sm:px-6">
        <Hero />
        <Skills />
        <Project />
        <Contact />
      </main>
    </>
  );
}
