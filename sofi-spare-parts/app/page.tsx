import Navbar           from "@/components/Navbar";
import Hero             from "@/components/Hero";
import About            from "@/components/About";
import VehicleSections  from "@/components/VehicleSections";
import Categories       from "@/components/Categories";
import WhyChooseUs      from "@/components/WhyChooseUs";
import Gallery          from "@/components/Gallery";
import Location         from "@/components/Location";
import Contact          from "@/components/Contact";
import SocialMedia      from "@/components/SocialMedia";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer           from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <VehicleSections />
        <Categories />
        <WhyChooseUs />
        <Gallery />
        <Location />
        <Contact />
        <SocialMedia />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
