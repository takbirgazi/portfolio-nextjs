"use client"
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import SectionHeader from "@/components/SectionHeader";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section>
        <SectionHeader />
      </section>
      <Footer />
    </main>
  );
}