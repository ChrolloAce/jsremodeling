"use client";

import { useState } from "react";
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
  const [activeService, setActiveService] = useState(services[0]);

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

      {/* Services Content */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Service Selector */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <button
              key={service.id}
              className={`w-full text-left p-4 rounded-lg border transition-all ${
                activeService.id === service.id
                  ? "bg-surface border-primary text-text"
                  : "bg-transparent border-line text-text-muted hover:border-primary/50 hover:text-text"
              }`}
              onClick={() => setActiveService(service)}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold">{service.name}</span>
                <span className="text-2xl font-bold text-primary opacity-50">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Active Service Details */}
        <motion.div
          className="card p-8 card-hover"
          key={activeService.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
            <Image
              src={activeService.image}
              alt={activeService.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-text mb-3">
                {activeService.name}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {activeService.description}
              </p>
            </div>

            <div className="space-y-3">
              {activeService.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                    <Check size={14} className="text-primary" />
                  </div>
                  <span className="text-text">{feature}</span>
                </div>
              ))}
            </div>

            <button className="btn btn-primary group">
              More Details
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}