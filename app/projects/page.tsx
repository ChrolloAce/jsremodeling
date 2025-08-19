"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, X, ZoomIn, Home } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allProjects = [
  {
    id: 1,
    title: "Luxury Waterfront Estate",
    category: "Exterior Painting",
    image: "/images/hero-luxury-home.jpg",
    duration: "3 weeks",
    description: "Complete exterior transformation of waterfront estate with premium marine-grade finishes and modern color palette."
  },
  {
    id: 2,
    title: "Modern Miami Villa",
    category: "Interior & Exterior",
    image: "/images/project-luxury-modern-1.jpg",
    duration: "4 weeks",
    description: "Full interior and exterior painting of contemporary villa with clean lines and sophisticated neutral tones."
  },
  {
    id: 3,
    title: "Contemporary Pool House",
    category: "Residential",
    image: "/images/project-luxury-modern-2.jpg",
    duration: "2 weeks",
    description: "Modern pool house painting with seamless indoor-outdoor flow and weather-resistant finishes."
  },
  {
    id: 4,
    title: "Architectural Masterpiece",
    category: "Luxury Residential",
    image: "/images/project-luxury-modern-3.jpg",
    duration: "5 weeks",
    description: "High-end residential project featuring custom color matching and premium architectural finishes."
  },
  {
    id: 5,
    title: "Miami Beach Modern Home",
    category: "Exterior Painting",
    image: "/images/project-luxury-modern-4.jpg",
    duration: "3 weeks",
    description: "Stunning modern home exterior with crisp white finishes and bold architectural details."
  },
  {
    id: 6,
    title: "Luxury Estate Renovation",
    category: "Interior & Exterior",
    image: "/images/project-luxury-modern-5.jpg",
    duration: "6 weeks",
    description: "Complete renovation painting project with custom millwork and specialty finishes throughout."
  },
  {
    id: 7,
    title: "Contemporary Family Home",
    category: "Residential",
    image: "/images/project-luxury-modern-6.jpg",
    duration: "3 weeks",
    description: "Modern family home with warm neutral palette and durable finishes for high-traffic areas."
  },
  {
    id: 8,
    title: "Tropical Modern Villa",
    category: "Luxury Residential",
    image: "/images/project-luxury-modern-7.jpg",
    duration: "4 weeks",
    description: "Tropical modern villa featuring natural wood accents and contemporary color schemes."
  },
  {
    id: 9,
    title: "Sleek Urban Residence",
    category: "Interior & Exterior",
    image: "/images/project-luxury-modern-8.jpg",
    duration: "3 weeks",
    description: "Urban residence with sleek modern finishes and sophisticated color coordination."
  },
  {
    id: 10,
    title: "Designer Showcase Home",
    category: "Luxury Residential",
    image: "/images/project-luxury-modern-9.jpg",
    duration: "4 weeks",
    description: "Designer showcase home featuring premium finishes and meticulous attention to detail."
  },
  {
    id: 11,
    title: "Waterfront Modern Estate",
    category: "Exterior Painting",
    image: "/images/project-luxury-modern-10.jpg",
    duration: "5 weeks",
    description: "Waterfront estate with stunning modern architecture and weather-resistant luxury finishes."
  },
  {
    id: 12,
    title: "Elegant Miami Residence",
    category: "Luxury Residential",
    image: "/images/project-luxury-modern-11.jpg",
    duration: "4 weeks",
    description: "Elegant Miami residence with sophisticated color palette and premium interior finishes."
  },
  {
    id: 13,
    title: "Luxury Coastal Home",
    category: "Exterior Painting",
    image: "/images/project-luxury-modern-12.jpg",
    duration: "3 weeks",
    description: "Coastal luxury home with weather-resistant finishes and stunning architectural details."
  }
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<typeof allProjects[0] | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", "Residential", "Exterior Painting", "Interior & Exterior", "Luxury Residential"];
  
  const filteredProjects = filter === "all" 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);

  return (
    <>
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section bg-surface">
          <div className="container">
            <motion.div
              className="text-center space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-2 text-text-muted">
                <Home size={16} />
                <span>Projects</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text">
                Our <span className="text-primary">Portfolio</span>
              </h1>
              <p className="text-xl text-text-muted max-w-3xl mx-auto">
                Explore our extensive portfolio of luxury residential and commercial painting projects throughout Miami-Dade County.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="section">
          <div className="container">
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-3 rounded-pill font-medium transition-all ${
                    filter === category
                      ? 'bg-primary text-white shadow-glow'
                      : 'bg-surface text-text-muted border border-line hover:border-primary hover:text-primary'
                  }`}
                >
                  {category === "all" ? "All Projects" : category}
                </button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
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
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
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

            {/* Back to Home CTA */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="/" className="btn btn-primary group">
                <Home size={18} />
                Back to Home
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </section>

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
                      href="/#contact"
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
      </main>
      
      <Footer />
    </>
  );
}
