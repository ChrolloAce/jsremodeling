"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Calculator, Hammer, CheckCircle, Key } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: MessageSquare,
    title: "Free Consultation",
    description: "We assess your space, discuss color preferences, and provide expert recommendations for your painting project."
  },
  {
    number: 2,
    icon: Calculator,
    title: "Detailed Estimate",
    description: "Receive a comprehensive quote with transparent pricing, timeline, and material specifications."
  },
  {
    number: 3,
    icon: Hammer,
    title: "Professional Painting",
    description: "Expert surface preparation and painting application using premium materials and proven techniques."
  },
  {
    number: 4,
    icon: CheckCircle,
    title: "Final Walkthrough",
    description: "Complete quality inspection and walkthrough to ensure your complete satisfaction with the results."
  }
];

export default function Process() {
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
          Our proven <span className="text-primary">process</span>
        </h2>
        <p className="text-xl text-text-muted max-w-3xl mx-auto">
          Our proven painting process ensures beautiful, long-lasting results with professional service from start to finish.
        </p>
      </motion.div>

      {/* Process Steps */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />
        <motion.div
          className="hidden lg:block absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 2, delay: 0.5 }}
          viewport={{ once: true }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                className="relative text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Icon Circle */}
                <div className="relative mx-auto mb-6">
                  <div className="w-20 h-20 bg-white border-4 border-gray-200 rounded-full flex items-center justify-center mx-auto relative z-10 group-hover:border-primary transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <Icon size={28} className="text-primary" />
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-lg font-bold text-white">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 px-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Timeline Connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-1/2 -bottom-4 w-0.5 h-8 bg-gray-200 -translate-x-1/2" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <a href="#contact" className="btn btn-primary">
          Start Your Project Today
        </a>
      </motion.div>
    </div>
  );
}