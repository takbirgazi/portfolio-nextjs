"use client"
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Navbar />
      <Hero />
      <section>
        <About />
      </section>
      <Footer />
    </main>
  );
}