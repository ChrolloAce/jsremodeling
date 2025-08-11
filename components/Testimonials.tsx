"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Maria Rodriguez",
    role: "Homeowner",
    location: "Coral Gables, FL",
    quote: "J&S Painters transformed our home with beautiful interior painting. Their attention to detail and professional service exceeded our expectations.",
    rating: 5,
    date: "2 months ago"
  },
  {
    id: 2,
    name: "Carlos Mendez",
    role: "Property Manager",
    location: "Miami, FL",
    quote: "We use J&S for all our rental property painting needs. They're reliable, affordable, and always deliver quality work on time.",
    rating: 5,
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Lisa Garcia",
    role: "Business Owner",
    location: "Downtown Miami, FL",
    quote: "Our office painting project was completed with minimal disruption to our business. The team was professional and results look amazing.",
    rating: 5,
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Roberto Silva",
    role: "Homeowner",
    location: "Doral, FL",
    quote: "Excellent exterior painting service! J&S helped us choose the perfect colors and the quality of work is outstanding. Our home looks brand new.",
    rating: 5,
    date: "1 week ago"
  },
  {
    id: 5,
    name: "Ana Martinez",
    role: "Homeowner",
    location: "Brickell, FL",
    quote: "Professional cabinet painting that completely transformed our kitchen. The finish is flawless and the team was incredibly respectful of our home.",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    id: 6,
    name: "David Chen",
    role: "Restaurant Owner",
    location: "South Beach, FL",
    quote: "J&S painted our restaurant during renovation. They worked around our schedule and delivered exceptional commercial painting results on time.",
    rating: 5,
    date: "1 month ago"
  }
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Group testimonials based on screen size
  const testimonialsPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);
  
  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

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
          What our <span className="text-primary">clients say</span>
        </h2>
        <p className="text-xl text-text-muted max-w-3xl mx-auto">
          Don't just take our word for it. Here's what our satisfied clients throughout Miami have to say about J&S Painters.
        </p>
      </motion.div>

      {/* Testimonials Grid Slider */}
      <div 
        className="relative container"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {testimonials
                .slice(currentSlide * testimonialsPerSlide, (currentSlide + 1) * testimonialsPerSlide)
                .map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    className="card p-6 space-y-4 h-full flex flex-col"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Quote Icon */}
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Quote size={16} className="text-primary" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} size={16} className="text-primary fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-text leading-relaxed flex-1">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author & Google Badge */}
                    <div className="space-y-3 pt-4 border-t border-line">
                      <div>
                        <div className="font-bold text-text">
                          {testimonial.name}
                        </div>
                        <div className="text-text-muted text-sm">
                          {testimonial.role} • {testimonial.location}
                        </div>
                        <div className="text-text-muted text-xs mt-1">
                          {testimonial.date}
                        </div>
                      </div>
                      
                      {/* Google Badge */}
                      <div className="flex items-center gap-2 text-sm text-text-muted">
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
                            <span className="text-white text-xs font-bold">G</span>
                          </div>
                          <span>Google Review</span>
                        </div>
                        <span>•</span>
                        <span>Verified</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        {totalSlides > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-surface border border-line rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} className="text-text" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-surface border border-line rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors z-10"
              aria-label="Next slide"
            >
              <ChevronRight size={20} className="text-text" />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {totalSlides > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-primary" : "bg-line hover:bg-text-muted"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}