"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Phone, Mail } from "lucide-react";

const features = [
  "Natural antimicrobial properties",
  "Breathable wall finish",
  "Eco-friendly application",
  "UV resistant formula",
  "Self-healing properties",
  "Mold and mildew resistant",
  "Natural mineral pigments",
  "Zero VOC emissions"
];

const benefits = [
  {
    title: "Natural Health Benefits",
    description: "Lime wash naturally inhibits bacteria and mold growth, creating healthier indoor environments."
  },
  {
    title: "Eco-Friendly",
    description: "Made from natural lime and mineral pigments with zero harmful chemicals or VOCs."
  },
  {
    title: "Breathable Surface",
    description: "Allows walls to breathe naturally, preventing moisture buildup and maintaining air quality."
  },
  {
    title: "Self-Healing",
    description: "Minor cracks and imperfections naturally heal over time as the lime continues to carbonate."
  }
];

const process = [
  {
    step: "01",
    title: "Surface Assessment",
    description: "We evaluate your walls and recommend the best preparation method for optimal lime wash adhesion."
  },
  {
    step: "02", 
    title: "Wall Preparation",
    description: "Proper cleaning and priming ensure the lime wash bonds correctly with your wall surface."
  },
  {
    step: "03",
    title: "Lime Wash Application",
    description: "Multiple thin coats applied with traditional techniques for even coverage and natural texture."
  },
  {
    step: "04",
    title: "Carbonation Process",
    description: "The lime wash continues to harden and develop its full protective properties over time."
  }
];

export default function LimeBaseWashPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-painting.webp"
          alt="Lime Base Wash Services"
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
            Natural Lime
            <span className="text-primary block">Base Wash</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Eco-friendly lime-based wall treatments with natural antimicrobial properties and breathable finishes
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
                Natural & Healthy
                <span className="text-primary block">Wall Finishes</span>
              </h2>
              <p className="text-xl text-text-muted mb-8">
                Experience the benefits of traditional lime wash - a natural, eco-friendly wall treatment that promotes healthier indoor environments.
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
                src="/images/residential-painting.webp"
                alt="Lime base wash application"
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
              Why Choose
              <span className="text-primary block">Lime Base Wash?</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Discover the natural benefits of lime wash for healthier, more sustainable wall finishes.
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
              Our Natural
              <span className="text-primary block">Application Process</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              We use traditional techniques to ensure your lime wash application provides maximum benefits and longevity.
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
              Ready for Natural Wall Finishes?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get a free consultation for your lime base wash project. Create healthier, more sustainable walls.
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
    </div>
  );
}
