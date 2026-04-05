import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import TechMarquee from "@/components/TechMarquee";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import SelectedWork from "@/components/SelectedWork";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <TechMarquee />
        <Services />
        <Approach />
        <SelectedWork />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
