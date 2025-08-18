"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Users, Clock, DollarSign } from "lucide-react";

const benefits = [
  {
    number: "01",
    icon: Award,
    title: "Premium Materials",
    description: "We use only high-quality paints and materials from trusted brands to ensure lasting beauty and protection."
  },
  {
    number: "02", 
    icon: Users,
    title: "Trusted Painters",
    description: "Our experienced painting team delivers consistent, professional results with attention to detail and customer satisfaction."
  },
  {
    number: "03",
    icon: Users,
    title: "Licensed & Insured",
    description: "Fully licensed and insured painting contractors providing peace of mind and professional protection for your property."
  },
  {
    number: "04",
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Fair, transparent pricing with detailed estimates and no hidden fees. Quality painting services at affordable rates."
  }
];

export default function WhyChooseUs() {
  return (
    <div className="space-y-16">
      {/* Section Header */}
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-text">
          Why choose <span className="text-primary">us</span>
        </h2>
        <p className="text-xl text-text-muted max-w-3xl mx-auto">
          We combine professional expertise with quality materials to deliver beautiful, long-lasting paint finishes that transform your space.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Benefits List */}
        <div className="space-y-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.number}
                className="flex gap-6 group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Number */}
                <div className="flex-shrink-0">
                  <div className="text-6xl font-black text-primary/20 group-hover:text-primary/30 transition-colors">
                    {benefit.number}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-text">{benefit.title}</h3>
                  </div>
                  <p className="text-text-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="/images/project-luxury-modern-12.jpg"
              alt="Luxury painting project showcasing professional results"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/20 to-transparent" />
          </div>

          {/* Floating Stats Card */}
          <motion.div
            className="absolute -bottom-8 -left-8 card p-6 bg-surface/95 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-text-muted">Homes Painted</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-text-muted">Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}