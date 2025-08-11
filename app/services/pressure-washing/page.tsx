"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Star, Phone, Mail, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PressureWashingPage() {
  const features = [
    "Professional surface preparation for painting",
    "Mold and mildew removal services",
    "Driveway and walkway deep cleaning",
    "Deck and patio restoration",
    "Building exterior washing",
    "Concrete and brick cleaning",
    "Eco-friendly cleaning solutions",
    "High-pressure and soft-wash techniques"
  ];

  const benefits = [
    "Enhanced curb appeal instantly",
    "Prevents long-term damage",
    "Improves paint adhesion",
    "Removes harmful contaminants",
    "Extends surface lifespan",
    "Healthier outdoor environment"
  ];

  const process = [
    {
      step: 1,
      title: "Surface Assessment",
      description: "Evaluate surfaces and determine the best cleaning approach and pressure settings."
    },
    {
      step: 2,
      title: "Preparation & Protection",
      description: "Protect landscaping and nearby items, apply cleaning solutions as needed."
    },
    {
      step: 3,
      title: "Professional Washing",
      description: "Use appropriate pressure and techniques to safely and effectively clean surfaces."
    },
    {
      step: 4,
      title: "Final Inspection",
      description: "Review results and ensure all areas are properly cleaned and rinsed."
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-painting.webp"
            alt="Professional pressure washing service"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        </div>

        <div className="container relative z-10 pt-20 pb-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                href="/#services" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
              >
                <ArrowLeft size={20} />
                Back to Services
              </Link>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Pressure Washing
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Professional pressure washing services to prepare surfaces for painting and maintain your property's appearance. 
                We restore your surfaces to like-new condition.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn btn-primary group">
                  Get Free Quote
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="tel:+17862981846" className="btn btn-ghost text-white border-white/30 hover:bg-white/10 hover:border-white">
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <main>
        {/* Features Section */}
        <section className="py-24 bg-surface">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                  Professional Pressure Washing Services
                </h2>
                <p className="text-text-muted mb-8 leading-relaxed">
                  Our pressure washing services prepare surfaces for painting and restore the beauty of your property. 
                  We use the right pressure and techniques for each surface type.
                </p>
                
                <div className="grid gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={14} className="text-primary" />
                      </div>
                      <span className="text-text">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative h-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/exterior-painting.webp"
                    alt="Pressure washing service in action"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24">
          <div className="container">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                Benefits of Professional Pressure Washing
              </h2>
              <p className="text-xl text-text-muted max-w-3xl mx-auto">
                Regular pressure washing maintains your property's appearance and prepares surfaces for optimal painting results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="card p-6 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star size={24} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-text mb-2">{benefit}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-surface">
          <div className="container">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                Our Pressure Washing Process
              </h2>
              <p className="text-xl text-text-muted max-w-3xl mx-auto">
                We use professional equipment and techniques to safely and effectively clean all types of surfaces.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl font-bold text-white">{item.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-text mb-3">{item.title}</h3>
                  <p className="text-text-muted leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-24 bg-gradient-to-r from-primary to-primary-dark">
          <div className="container">
            <motion.div
              className="text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Restore Your Property?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Get a free consultation and detailed quote for your pressure washing project. 
                Prepare your surfaces for painting or just restore their beauty.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+17862981846" className="btn bg-white text-primary hover:bg-gray-100 group">
                  <Phone size={18} />
                  Call (786) 298-1846
                </a>
                <a href="mailto:info@jspainters.com" className="btn border-white text-white hover:bg-white/10">
                  <Mail size={18} />
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}