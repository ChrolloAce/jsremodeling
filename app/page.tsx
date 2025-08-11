import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StatBar from "@/components/StatBar";

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
        <StatBar />
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="testimonials">
          <Testimonials />
        </Section>
        <Section id="blog">
          <Blog />
        </Section>
        <CTA />
        <Section id="contact">
          <Contact />
        </Section>
      </main>
      <Footer />
    </>
  );
}