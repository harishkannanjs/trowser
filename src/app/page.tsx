import CTA from "@/components/CTA";
import FAQs from "@/components/FAQs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <FAQs />
      <Reviews />
      <CTA /> 
      <Footer />
    </div>
  );
}