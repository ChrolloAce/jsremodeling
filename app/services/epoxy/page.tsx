"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



const features = [
  "Chemical resistant coating",
  "Non-slip finish options",
  "Easy maintenance and cleaning",
  "UV resistant formulations",
  "Custom color options",
  "Fast curing time",
  "Long-lasting durability",
  "Professional application"
];

const benefits = [
  {
    title: "Superior Durability",
    description: "Our epoxy coatings provide exceptional resistance to chemicals, abrasion, and heavy traffic."
  },
  {
    title: "Easy Maintenance",
    description: "Smooth, seamless surface makes cleaning simple and prevents dust and dirt accumulation."
  },
  {
    title: "Safety Features",
    description: "Non-slip additives available to provide safe walking surfaces in wet or oily conditions."
  },
  {
    title: "Cost Effective",
    description: "Long-lasting protection reduces maintenance costs and extends the life of your concrete floors."
  }
];

const process = [
  {
    step: "01",
    title: "Surface Assessment",
    description: "We evaluate your concrete surface and determine the best preparation and coating system."
  },
  {
    step: "02", 
    title: "Floor Preparation",
    description: "Proper grinding, cleaning, and repair ensure optimal adhesion and performance."
  },
  {
    step: "03",
    title: "Epoxy Application",
    description: "Professional application of primer, base coat, and topcoat for maximum durability."
  },
  {
    step: "04",
    title: "Curing & Inspection",
    description: "Proper curing time and final inspection ensure a perfect, long-lasting finish."
  }
];

export default function EpoxyCoatingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/exterior-painting.webp"
          alt="Epoxy Coating Services"
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
            Professional Epoxy
            <span className="text-primary block">Coating Services</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Durable, chemical-resistant floor coatings for garages, basements, and commercial spaces
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
                Durable Epoxy
                <span className="text-primary block">Floor Coatings</span>
              </h2>
              <p className="text-xl text-text-muted mb-8">
                Transform your concrete floors with high-performance epoxy coatings that provide long-lasting protection and beauty.
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
                src="/images/commercial-painting.webp"
                alt="Epoxy coating application"
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
              <span className="text-primary block">Epoxy Coatings?</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Our professional-grade epoxy systems provide superior performance and longevity.
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
              Our Professional
              <span className="text-primary block">Process</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              We follow industry best practices to ensure your epoxy coating performs for years to come.
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
              Ready for Durable Floor Protection?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get a free estimate for your epoxy coating project. Professional installation guaranteed.
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
