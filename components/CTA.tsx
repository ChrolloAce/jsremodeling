"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-text">
                Ready to paint <span className="text-primary">your space?</span>
              </h2>
              <p className="text-xl text-text-muted leading-relaxed">
                Let's discuss your painting project and transform your space with professional results. 
                Our team is ready to provide you with a free estimate and color consultation.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-text">Call us directly</div>
                  <a 
                    href="tel:+17862981846" 
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    (786) 298-1846
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-text">Send us an email</div>
                  <a 
                    href="mailto:info@jspainters.com" 
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    info@jspainters.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn btn-primary group">
                Get Free Estimate
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#projects" className="btn btn-ghost">
                View Our Work
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/residential-painting.webp"
                alt="Professional painter working on residential project"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
            </div>

            {/* Floating Achievement Card */}
            <motion.div
              className="absolute -bottom-6 -left-6 card p-4 bg-surface/95 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <ArrowRight size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-bold text-text">Quick Response</div>
                  <div className="text-sm text-text-muted">Within 24 hours</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}