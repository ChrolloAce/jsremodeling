"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#process", label: "Process" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "backdrop-blur-md bg-dark/95 border-b border-dark-surface shadow-sm py-3" 
          : "bg-dark py-4"
      }`}
    >
      <div className="container flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 font-bold text-xl text-white hover:text-primary transition-colors">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-sm">J&S</span>
          </div>
          J&S PAINTERS
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a 
            href="tel:+17862981846" 
            className="flex items-center gap-2 px-3 py-2 bg-dark-surface border border-gray-600 rounded-full text-gray-300 hover:border-primary hover:text-primary transition-colors"
          >
            <Phone size={16} />
            (786) 298-1846
          </a>
          <a href="#contact" className="btn btn-primary">
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-300 hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-dark/95 backdrop-blur-md border-b border-dark-surface">
          <div className="container py-6">
            <nav className="flex flex-col gap-4 mb-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <a 
                href="tel:+17862981846" 
                className="flex items-center gap-2 px-3 py-2 bg-dark-surface border border-gray-600 rounded-full text-gray-300 hover:border-primary hover:text-primary transition-colors justify-center"
              >
                <Phone size={16} />
                (786) 298-1846
              </a>
              <a 
                href="#contact" 
                className="btn btn-primary justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}