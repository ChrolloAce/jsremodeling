"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Phone, Mail } from "lucide-react";

const features = [
  "Luxury wall finishes",
  "Custom textures and patterns",
  "Timeless elegance",
  "Natural lime-based materials",
  "Unique artistic application",
  "Durable and long-lasting",
  "Breathable wall surface",
  "Expert craftsmanship"
];

const benefits = [
  {
    title: "Timeless Beauty",
    description: "Venetian plaster creates stunning, sophisticated finishes that never go out of style and add value to your property."
  },
  {
    title: "Custom Artistry",
    description: "Each application is unique, creating one-of-a-kind textures and patterns tailored to your space."
  },
  {
    title: "Natural Materials",
    description: "Made from natural lime and marble dust, Venetian plaster is eco-friendly and safe for indoor use."
  },
  {
    title: "Durability",
    description: "When properly applied, Venetian plaster becomes harder over time and can last for decades."
  }
];

const process = [
  {
    step: "01",
    title: "Design Consultation",
    description: "We discuss your vision and recommend the best textures, colors, and finishes for your space."
  },
  {
    step: "02", 
    title: "Surface Preparation",
    description: "Proper wall preparation ensures optimal adhesion and a smooth base for plaster application."
  },
  {
    step: "03",
    title: "Artistic Application",
    description: "Multiple coats applied with specialized techniques to achieve the desired texture and depth."
  },
  {
    step: "04",
    title: "Finishing & Sealing",
    description: "Final polishing and sealing to protect the surface and enhance the natural beauty."
  }
];

export default function VenetianPlasterPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/team-painter.webp"
          alt="Venetian Plaster Services"
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
            Venetian Plaster
            <span className="text-primary block">Artistry</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Elegant decorative wall finishes that add luxury and sophistication to any interior space
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
                Luxury Wall
                <span className="text-primary block">Finishes</span>
              </h2>
              <p className="text-xl text-text-muted mb-8">
                Transform your walls into works of art with authentic Venetian plaster techniques passed down through generations.
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
                src="/images/interior-painting.webp"
                alt="Venetian plaster application"
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
              <span className="text-primary block">Venetian Plaster?</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Experience the beauty and craftsmanship of traditional Italian plastering techniques.
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
              Our Artistic
              <span className="text-primary block">Process</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Each Venetian plaster project is a work of art, requiring skill, patience, and attention to detail.
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
              Ready for Luxury Wall Finishes?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get a free consultation for your Venetian plaster project. Transform your space with timeless elegance.
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
