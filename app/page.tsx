import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Cases from "@/components/Cases";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg">
      <Header />
      <Hero />
      <Services />
      <Cases />
      <Pricing />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
