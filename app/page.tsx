import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import SelectedWork from "@/components/SelectedWork";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-[#0F172A]">
      <Header />
      <main id="snap-container" className="snap-container">
        <Hero />
        <Services />
        <SelectedWork />
        <Approach />
        <ContactForm />
      </main>
    </div>
  );
}
