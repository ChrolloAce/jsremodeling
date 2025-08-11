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
    quote: "J&S Painters transformed our home with beautiful interior painting. Their attention to detail and professional service exceeded our expectations. Highly recommend!",
    rating: 5,
    date: "2 months ago"
  },
  {
    id: 2,
    name: "Carlos Mendez",
    role: "Property Manager",
    location: "Miami, FL",
    quote: "We use J&S for all our rental property painting needs. They're reliable, affordable, and always deliver quality work on time. Great communication throughout the process.",
    rating: 5,
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Lisa Garcia",
    role: "Business Owner",
    location: "Downtown Miami, FL",
    quote: "Our office painting project was completed with minimal disruption to our business. The team was professional, clean, and the results look amazing. Thank you J&S!",
    rating: 5,
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Roberto Silva",
    role: "Homeowner",
    location: "Doral, FL",
    quote: "Excellent exterior painting service! J&S helped us choose the perfect colors and the quality of work is outstanding. Our home looks brand new. Worth every penny!",
    rating: 5,
    date: "1 week ago"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
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

      {/* Testimonials Carousel */}
      <div 
        className="relative max-w-4xl mx-auto"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="card p-8 md:p-12"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center space-y-8">
                {/* Quote Icon */}
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Quote size={24} className="text-primary" />
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} size={20} className="text-primary fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-text leading-relaxed font-medium">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Author & Google Badge */}
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="font-bold text-text text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-text-muted text-sm">
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                    </div>
                    <div className="text-text-muted text-xs mt-1">
                      {testimonials[currentIndex].date}
                    </div>
                  </div>
                  
                  {/* Google Badge */}
                  <div className="flex items-center justify-center gap-2 text-sm text-text-muted">
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
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-surface border border-line rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} className="text-text" />
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-surface border border-line rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} className="text-text" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-line hover:bg-text-muted"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}