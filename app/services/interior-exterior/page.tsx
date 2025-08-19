"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  "Premium paint brands and materials",
  "Interior walls, ceilings, and trim",
  "Exterior siding, stucco, and surfaces", 
  "Weather-resistant coatings",
  "Surface preparation and priming",
  "Color consultation included",
  "Clean, professional workmanship",
  "Flexible scheduling options"
];

const benefits = [
  {
    title: "Complete Coverage",
    description: "We handle both interior and exterior painting projects with the same level of expertise and attention to detail."
  },
  {
    title: "Premium Materials",
    description: "We use only high-quality paints and materials that provide long-lasting beauty and protection."
  },
  {
    title: "Expert Application",
    description: "Our skilled painters ensure smooth, even coverage and professional results that exceed expectations."
  },
  {
    title: "Weather Protection",
    description: "Exterior coatings provide superior protection against Miami's weather conditions including humidity and UV rays."
  }
];

const process = [
  {
    step: "01",
    title: "Free Consultation",
    description: "We assess your project needs and provide color recommendations and material suggestions."
  },
  {
    step: "02", 
    title: "Surface Preparation",
    description: "Proper cleaning, sanding, and priming ensure optimal paint adhesion and longevity."
  },
  {
    step: "03",
    title: "Professional Application",
    description: "Expert painting techniques deliver smooth, even coverage with attention to detail."
  },
  {
    step: "04",
    title: "Quality Inspection",
    description: "Final walkthrough and touch-ups ensure your complete satisfaction with the results."
  }
];

export default function InteriorExteriorPaintingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/project-luxury-modern-2.jpg"
          alt="Interior and Exterior Painting Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Interior & Exterior
            <span className="text-primary block">Painting Services</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Complete painting solutions for your home or business with premium materials and expert craftsmanship
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="tel:(786) 298-1846" className="btn btn-primary">
              <Phone size={20} />
              Call (786) 298-1846
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get Free Estimate
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-text mb-8">
                Complete Painting
                <span className="text-primary block">Solutions</span>
              </h2>
              <p className="text-xl text-text-muted mb-8">
                From interior walls to exterior siding, we provide comprehensive painting services that transform and protect your property.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-text">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/project-luxury-modern-1.jpg"
                alt="Professional painting services"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
              Why Choose Our
              <span className="text-primary block">Painting Services?</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              We combine quality materials, expert techniques, and professional service to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-text mb-4">{benefit.title}</h3>
                <p className="text-text-muted">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
              Our Proven
              <span className="text-primary block">Process</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              We follow a systematic approach to ensure quality results and your complete satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold text-text mb-4">{step.title}</h3>
                <p className="text-text-muted">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="section bg-primary text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get a free estimate for your interior and exterior painting project. Professional results guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(786) 298-1846" className="btn bg-white text-primary hover:bg-gray-100">
                <Phone size={20} />
                Call (786) 298-1846
              </a>
              <a href="mailto:info@jspainters.com" className="btn btn-ghost border-white text-white hover:bg-white hover:text-primary">
                <Mail size={20} />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
