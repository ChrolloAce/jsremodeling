"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern Miami Home Interior",
    category: "Residential",
    image: "/images/interior-painting.webp",
    duration: "1 week",
    description: "Complete interior painting transformation with premium finishes and contemporary color palette."
  },
  {
    id: 2,
    title: "Commercial Office Building",
    category: "Commercial",
    image: "/images/commercial-painting.webp",
    duration: "2 weeks",
    description: "Professional office space painting with minimal business disruption and industrial-grade materials."
  },
  {
    id: 3,
    title: "Exterior Home Makeover",
    category: "Exterior",
    image: "/images/exterior-painting.webp",
    duration: "1 week",
    description: "Complete exterior painting with weather-resistant coatings and professional surface preparation."
  },
  {
    id: 4,
    title: "Kitchen Cabinet Refinishing",
    category: "Cabinet Painting",
    image: "/images/cabinet-painting.webp",
    duration: "3 days",
    description: "Beautiful cabinet transformation with durable finishes and modern hardware upgrades."
  },
  {
    id: 5,
    title: "Luxury Residential Project",
    category: "Residential",
    image: "/images/residential-painting.webp",
    duration: "2 weeks",
    description: "High-end residential painting with custom colors and premium materials throughout."
  },
  {
    id: 6,
    title: "Venetian Plaster Installation",
    category: "Specialty Finishes",
    image: "/images/team-painter.webp",
    duration: "1 week",
    description: "Elegant Venetian plaster application creating luxury wall finishes with artistic textures."
  }
];

export default function Projects() {
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
          Explore recent <span className="text-primary">projects</span>
        </h2>
        <p className="text-xl text-text-muted max-w-3xl mx-auto">
          Browse our recent painting projects showcasing our professional craftsmanship and attention to detail in Miami.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="card overflow-hidden card-hover">
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="badge bg-surface/90 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-sm mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Stats */}
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <Calendar size={16} />
                  <span>{project.duration}</span>
                </div>

                {/* View Details Link */}
                <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  <span>View Details</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Projects CTA */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <a href="/projects" className="btn btn-ghost group">
          Explore All Projects
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </div>
  );
}