"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Reviews", href: "#testimonials" }
  ],
  services: [
    { label: "Interior & Exterior", href: "/services/interior-exterior" },
    { label: "Commercial Painting", href: "/services/commercial" },
    { label: "Cabinet Painting", href: "/services/cabinet" },
    { label: "Epoxy", href: "/services/epoxy" },
    { label: "Venetian Plaster", href: "/services/venetian-plaster" },
    { label: "Lime Base Wash", href: "/services/lime-base-wash" }
  ],
  resources: [
    { label: "Project Gallery", href: "/projects" },
    { label: "Free Estimates", href: "#contact" }
  ]
};

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/construx", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/construx", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/construx", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/construx", label: "LinkedIn" }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-dark-surface">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.png"
                alt="J&S Painters Logo"
                width={200}
                height={67}
                className="h-16 w-auto"
              />
              <span className="font-bold text-2xl text-white">J&S CONTRACTOR AND PAINTERS</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Transforming spaces with professional painting services. We deliver exceptional 
              results with quality craftsmanship and competitive pricing throughout Miami.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm">Miami-Dade County, Miami, FL</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:+17862981846" className="text-sm hover:text-primary transition-colors">
                  (786) 298-1846
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href="mailto:scardonas1@aol.com" className="text-sm hover:text-primary transition-colors">
                  scardonas1@aol.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-dark-surface border border-gray-600 rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors group"
                    aria-label={social.label}
                  >
                    <Icon size={18} className="text-gray-400 group-hover:text-primary" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} J&S Contractor Painters Corporation. All rights reserved.
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="tel:(786) 298-1846" className="text-gray-400 hover:text-primary transition-colors">
                Call Now
              </a>
              <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}