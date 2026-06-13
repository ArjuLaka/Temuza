import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Ingredients from "@/components/Ingredients";
import BrewingSteps from "@/components/BrewingSteps";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top">
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Ingredients />
      <BrewingSteps />
      <Testimonials />
      <Footer />
    </main>
  );
}
