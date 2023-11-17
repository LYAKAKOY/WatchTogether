"use client";

import BeginSection from "@/components/BeginSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";
import WatchSection from "@/components/WatchSection";

export default function Home() {
  return (
    <main>
      <div className="w-full sm:h-[700px] h-[500px]">
        <Navbar />
        <Intro />
      </div>
      <Navigation />
      <WatchSection />
      <BeginSection />
      <FAQ />
      <Footer />
    </main>
  );
}
