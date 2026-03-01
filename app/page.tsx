import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import SelectedWork from "@/components/SelectedWork";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black font-sans selection:bg-zinc-800 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Approach />
        <SelectedWork />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
