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
    id: "interior-exterior",
    name: "Interior & Exterior Painting",
    description: "Complete painting services for both indoor and outdoor spaces with premium paints and professional application.",
    image: "/images/project-luxury-modern-2.jpg",
    features: [
      "Interior & exterior surfaces",
      "Premium paint brands",
      "Weather-resistant coatings"
    ]
  },
  {
    id: "commercial",
    name: "Commercial Painting",
    description: "Professional painting services for offices, retail spaces, and commercial buildings.",
    image: "/images/project-luxury-modern-8.jpg",
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
    image: "/images/project-luxury-modern-5.jpg",
    features: [
      "Cabinet refinishing",
      "Hardware replacement",
      "Durable finishes"
    ]
  },

  {
    id: "epoxy",
    name: "Epoxy Coating",
    description: "Durable epoxy floor coatings for garages, basements, and commercial spaces with long-lasting protection.",
    image: "/images/project-luxury-modern-10.jpg",
    features: [
      "Chemical resistant coating",
      "Non-slip finish options",
      "Easy maintenance"
    ]
  },
  {
    id: "venetian-plaster",
    name: "Venetian Plaster",
    description: "Elegant decorative wall finishes that add luxury and sophistication to any interior space.",
    image: "/images/project-luxury-modern-6.jpg",
    features: [
      "Luxury wall finishes",
      "Custom textures",
      "Timeless elegance"
    ]
  },
  {
    id: "lime-base-wash",
    name: "Lime Base Wash",
    description: "Natural lime-based wall treatments that provide beautiful, breathable finishes with antimicrobial properties.",
    image: "/images/project-luxury-modern-11.jpg",
    features: [
      "Natural antimicrobial properties",
      "Breathable wall finish",
      "Eco-friendly application"
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
          <motion.a
            key={service.id}
            href={`/services/${service.id}`}
            className="group relative overflow-hidden rounded-2xl cursor-pointer block h-80 shadow-lg hover:shadow-2xl transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Background Image */}
            <Image
              src={service.image}
              alt={service.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 group-hover:via-black/60 transition-all duration-500" />
            
            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </div>

            {/* Service Number */}
            <div className="absolute top-6 right-6 w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
              <span className="text-white font-bold">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Service Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              {/* Service Name */}
              <div className="space-y-4">
                <h3 className="text-3xl font-bold group-hover:text-primary transition-colors duration-300">
                  {service.name}
                </h3>

                {/* Learn More Indicator */}
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}