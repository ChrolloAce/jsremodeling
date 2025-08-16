"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, X, ZoomIn } from "lucide-react";
import { useState } from "react";

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
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
            onClick={() => setSelectedProject(project)}
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
                
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-primary/90 backdrop-blur-sm rounded-full p-2">
                    <ZoomIn size={16} className="text-white" />
                  </div>
                </div>
                
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
                  <span>Click to View</span>
                  <ZoomIn size={16} />
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

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-surface rounded-lg shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-dark/80 hover:bg-dark text-white rounded-full p-2 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Project Image */}
              <div className="relative h-96 md:h-[500px] overflow-hidden rounded-t-lg">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="badge bg-primary text-white">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-text mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-text-muted text-lg leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Project Stats */}
                <div className="flex items-center gap-4 text-text-muted">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span className="font-medium">{selectedProject.duration}</span>
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-line">
                  <a
                    href="tel:(786) 298-1846"
                    className="btn btn-primary flex-1 justify-center"
                  >
                    Get Similar Quote
                  </a>
                  <a
                    href="#contact"
                    className="btn btn-ghost flex-1 justify-center"
                    onClick={() => setSelectedProject(null)}
                  >
                    Request Consultation
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}