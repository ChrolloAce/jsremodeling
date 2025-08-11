import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Section id="services">
          <Services />
        </Section>
        <Section id="why">
          <WhyChooseUs />
        </Section>
        <Section id="process">
          <Process />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="testimonials">
          <Testimonials />
        </Section>
        <Section id="blog">
          <Blog />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </main>
      <Footer />
    </>
  );
}