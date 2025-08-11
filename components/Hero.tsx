"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zipCode: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          zipCode: formData.zipCode,
          serviceType: 'Free Estimate Request',
          message: `Free estimate request from ${formData.name} in ${formData.zipCode}`
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', zipCode: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/images/hero-painting.webp"
          alt="Professional painting services by J&S Contractor Painters Corporation"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 via-black/60 to-black/40" />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 pt-24 md:pt-20 pb-12 px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8 max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="badge inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Professional Painters
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Quality Painting
              <br />
              <span className="text-primary">&amp; Expert Service</span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Transform your space with professional painting services. We deliver 
              exceptional results with attention to detail, quality materials, and 
              competitive pricing throughout Miami.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="#contact" className="btn btn-primary group">
                Request a Quote
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#projects" className="btn btn-ghost group text-white border-white/30 hover:bg-white/10 hover:border-white">
                <Play size={18} />
                View Projects
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Lead Form */}
          <motion.div
            className="lg:justify-self-end w-full max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="card p-10 card-hover shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-text mb-3">Get Your Free Painting Estimate</h3>
                <p className="text-text-muted">Fill out this quick form and we'll contact you within 24 hours</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm font-medium">✅ Thank you! We'll contact you within 24 hours.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm font-medium">❌ Something went wrong. Please try again or call us directly.</p>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="w-full p-4 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-primary focus:outline-none transition-colors focus:ring-2 focus:ring-primary/20"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(786) 123-4567"
                      className="w-full p-4 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-primary focus:outline-none transition-colors focus:ring-2 focus:ring-primary/20"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full p-4 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-primary focus:outline-none transition-colors focus:ring-2 focus:ring-primary/20"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text mb-2">ZIP Code *</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    placeholder="33101"
                    className="w-full p-4 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-primary focus:outline-none transition-colors focus:ring-2 focus:ring-primary/20"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full btn btn-primary text-lg py-4 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Get My Free Estimate'}
                  <ArrowRight size={20} />
                </button>
                
                <p className="text-xs text-gray-600 text-center">
                  By submitting this form, you agree to receive calls and texts from J&S Painters at the number provided.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-primary opacity-60 hidden lg:block"
        initial={{ height: 0 }}
        animate={{ height: 128 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </div>
  );
}