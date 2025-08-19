"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Star, Phone, Mail, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CabinetPaintingPage() {
  const features = [
    "Kitchen and bathroom cabinet refinishing",
    "Professional surface preparation and sanding",
    "High-quality primer and paint application",
    "Hardware removal and reinstallation",
    "Custom color matching and consultation",
    "Durable, long-lasting finishes",
    "Soft-close hardware upgrades available",
    "Complete cabinet transformation"
  ];

  const benefits = [
    "Cost-effective kitchen renovation",
    "Increase home value significantly",
    "Modern, updated appearance",
    "Durable, easy-to-clean finish",
    "Custom color options available",
    "Faster than full cabinet replacement"
  ];

  const process = [
    {
      step: 1,
      title: "Cabinet Assessment",
      description: "Evaluate cabinet condition and discuss your vision and color preferences."
    },
    {
      step: 2,
      title: "Preparation & Removal",
      description: "Remove hardware, clean, sand, and prime all cabinet surfaces thoroughly."
    },
    {
      step: 3,
      title: "Professional Painting",
      description: "Apply high-quality paint using spray and brush techniques for smooth finish."
    },
    {
      step: 4,
      title: "Hardware & Final Details",
      description: "Reinstall hardware, adjust doors, and complete final quality inspection."
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/project-luxury-modern-5.jpg"
            alt="Professional cabinet painting service"
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
                Cabinet Painting
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Transform your kitchen or bathroom with professional cabinet painting and refinishing. 
                Get the look of new cabinets at a fraction of the cost.
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
                  Professional Cabinet Refinishing
                </h2>
                <p className="text-text-muted mb-8 leading-relaxed">
                  Our cabinet painting service completely transforms your kitchen or bathroom 
                  with professional techniques and high-quality materials.
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
                    src="/images/project-luxury-modern-5.jpg"
                    alt="Cabinet painting transformation"
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
                Why Choose Cabinet Painting?
              </h2>
              <p className="text-xl text-text-muted max-w-3xl mx-auto">
                Cabinet painting offers an affordable way to completely update your kitchen or bathroom appearance.
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
                Our Cabinet Painting Process
              </h2>
              <p className="text-xl text-text-muted max-w-3xl mx-auto">
                We follow a meticulous process to ensure your cabinets look professionally finished and last for years.
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
                Ready to Transform Your Cabinets?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Get a free consultation and detailed quote for your cabinet painting project. 
                Update your kitchen or bathroom affordably.
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