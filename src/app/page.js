"use client"
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <main className="container mx-auto bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <section>
        <About />
      </section>
      <section>
        <Skills />
      </section>
      <Footer />
    </main>
  );
}