"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Star, Phone, Mail, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ExteriorPaintingPage() {
  const features = [
    "Complete exterior surface preparation",
    "Power washing and cleaning services",
    "Weather-resistant premium paints",
    "Siding, trim, and shutter painting",
    "Deck and fence staining/painting",
    "Garage door and entry door painting",
    "Gutter and downspout painting",
    "Caulking and minor repairs"
  ];

  const benefits = [
    "Enhanced curb appeal and property value",
    "Protection from Miami's harsh weather",
    "UV-resistant paint prevents fading",
    "Prevents wood rot and deterioration",
    "Energy efficiency improvements",
    "Long-lasting, durable finish"
  ];

  const process = [
    {
      step: 1,
      title: "Property Assessment",
      description: "Thorough inspection of exterior surfaces and detailed project planning."
    },
    {
      step: 2,
      title: "Surface Preparation",
      description: "Power washing, scraping, sanding, and priming all exterior surfaces."
    },
    {
      step: 3,
      title: "Professional Painting",
      description: "Application of premium exterior paints with proper techniques and tools."
    },
    {
      step: 4,
      title: "Quality Assurance",
      description: "Final inspection and touch-ups to ensure perfect results."
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/exterior-painting.webp"
            alt="Professional exterior painting service"
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
                Exterior Painting
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Protect and beautify your home's exterior with our professional painting services. 
                We use weather-resistant paints designed for Miami's climate.
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
                  Comprehensive Exterior Painting Services
                </h2>
                <p className="text-text-muted mb-8 leading-relaxed">
                  Our exterior painting services are designed to withstand Miami's tropical climate 
                  while enhancing your home's beauty and value.
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
                    src="/images/hero-painting.webp"
                    alt="Exterior painting work in progress"
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
                Why Choose Professional Exterior Painting?
              </h2>
              <p className="text-xl text-text-muted max-w-3xl mx-auto">
                Professional exterior painting is an investment that pays dividends in protection and value.
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
                Our Exterior Painting Process
              </h2>
              <p className="text-xl text-text-muted max-w-3xl mx-auto">
                We follow industry best practices to ensure your exterior paint job lasts for years to come.
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
                Ready to Enhance Your Home's Exterior?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Get a free consultation and detailed quote for your exterior painting project. 
                Protect your investment with professional quality.
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