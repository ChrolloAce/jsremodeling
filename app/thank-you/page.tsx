"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Phone, Mail, ArrowLeft, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary/5 to-surface">
        <div className="container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Success Animation */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              className="mb-8"
            >
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={48} className="text-green-600" />
              </div>
            </motion.div>

            {/* Thank You Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
                Thank You! 🎉
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
                Your Free Estimate Request Has Been Received
              </h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
                We appreciate your interest in J&S Painters! Our team will review your request and contact you within 24 hours to schedule your free consultation.
              </p>
            </motion.div>

            {/* What Happens Next */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-text mb-8">What Happens Next?</h3>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="card p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h4 className="font-bold text-text mb-2">We Review Your Request</h4>
                  <p className="text-text-muted text-sm">Our team carefully reviews your project details and requirements.</p>
                </div>

                <div className="card p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h4 className="font-bold text-text mb-2">We Contact You</h4>
                  <p className="text-text-muted text-sm">Expect a call or email within 24 hours to schedule your consultation.</p>
                </div>

                <div className="card p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h4 className="font-bold text-text mb-2">Free Consultation</h4>
                  <p className="text-text-muted text-sm">We visit your property and provide a detailed, no-obligation estimate.</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-12"
            >
              <div className="card p-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-text mb-6">Need to Reach Us Sooner?</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <a 
                    href="tel:+17862981846"
                    className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone size={20} className="text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-text">Call Us</div>
                      <div className="text-primary font-bold">(786) 298-1846</div>
                    </div>
                  </a>

                  <a 
                    href="mailto:info@jspainters.com"
                    className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail size={20} className="text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-text">Email Us</div>
                      <div className="text-primary font-bold">info@jspainters.com</div>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/" className="btn btn-primary group">
                <Home size={18} />
                Back to Homepage
              </Link>
              
              <Link href="/#services" className="btn btn-ghost group">
                <ArrowLeft size={18} />
                View Our Services
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-12 pt-8 border-t border-line"
            >
              <p className="text-text-muted text-sm mb-4">
                Join hundreds of satisfied customers in Miami-Dade County
              </p>
              <div className="flex justify-center items-center gap-8 text-sm text-text-muted">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span>Free Estimates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/5 rounded-full blur-2xl"></div>
      </section>

      <Footer />
    </>
  );
}