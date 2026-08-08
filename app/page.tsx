import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Companies from "@/components/Companies";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Companies />
      <Benefits />
      <Process />
      <FAQ />
      <Testimonials />
      <LeadForm />
      <Footer />
      <Footer />
    </>
  );
}