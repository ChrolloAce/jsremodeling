"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
}

const services: Service[] = [
  {
    id: "interior",
    name: "Interior Painting",
    description: "Transform your indoor spaces with professional interior painting services using premium paints and finishes.",
    image: "/images/interior-painting.webp",
    features: [
      "Walls, ceilings & trim",
      "Premium paint brands",
      "Color consultation"
    ]
  },
  {
    id: "exterior",
    name: "Exterior Painting",
    description: "Protect and beautify your home's exterior with weather-resistant paints and expert application.",
    image: "/images/exterior-painting.webp",
    features: [
      "Weather-resistant coatings",
      "Surface preparation",
      "Power washing included"
    ]
  },
  {
    id: "commercial",
    name: "Commercial Painting",
    description: "Professional painting services for offices, retail spaces, and commercial buildings.",
    image: "/images/commercial-painting.webp",
    features: [
      "Minimal business disruption",
      "Industrial-grade paints",
      "Flexible scheduling"
    ]
  },
  {
    id: "cabinet",
    name: "Cabinet Painting",
    description: "Refresh your kitchen or bathroom cabinets with professional painting and refinishing services.",
    image: "/images/cabinet-painting.webp",
    features: [
      "Cabinet refinishing",
      "Hardware replacement",
      "Durable finishes"
    ]
  },
  {
    id: "residential",
    name: "Residential Painting",
    description: "Complete home painting services from single rooms to whole house transformations.",
    image: "/images/residential-painting.webp",
    features: [
      "Free color consultation",
      "Quality materials",
      "Clean, professional work"
    ]
  },
  {
    id: "pressure-washing",
    name: "Pressure Washing",
    description: "Professional pressure washing services to prepare surfaces and maintain your property's appearance.",
    image: "/images/hero-painting.webp",
    features: [
      "Surface preparation",
      "Mold & mildew removal",
      "Driveway & walkway cleaning"
    ]
  }
];

export default function Services() {
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
          We provide excellent painting
          <br />
          <span className="text-primary">services in Miami</span>
        </h2>
        <p className="text-xl text-text-muted max-w-3xl mx-auto">
          From residential interiors to commercial exteriors, we deliver quality painting services with professional results and competitive pricing.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </div>

            {/* Service Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Service Number */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Service Content */}
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Check size={10} className="text-primary" />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="w-full btn btn-primary group/btn text-sm">
                  Learn More
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}