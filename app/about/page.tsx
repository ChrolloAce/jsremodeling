"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Phone, Mail, Star, Users, Calendar, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { icon: Users, number: "500+", label: "Happy Clients" },
  { icon: Calendar, number: "5+", label: "Years Experience" },
  { icon: Award, number: "100%", label: "Satisfaction Rate" },
  { icon: Star, number: "50+", label: "5-Star Reviews" }
];

const values = [
  {
    title: "Quality First",
    description: "We never compromise on quality. Every project receives our full attention to detail and professional craftsmanship."
  },
  {
    title: "Reliable Service",
    description: "On-time delivery and clear communication throughout your project. You can count on us to deliver as promised."
  },
  {
    title: "Expert Team",
    description: "Our skilled painters bring years of experience and continuous training to ensure the best results for your property."
  },
  {
    title: "Customer Focused",
    description: "Your satisfaction is our priority. We work closely with you to ensure your vision becomes reality."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/adolfo.jpeg"
          alt="Adolfo - J&S Painters Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About
            <span className="text-primary block">J&S Painters</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            High-end quality painting services with expert craftsmanship and professional results
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-text mb-8">
                Our Story &
                <span className="text-primary block">Mission</span>
              </h2>
              <div className="space-y-6 text-lg text-text-muted">
                <p>
                  J&S Contractor Painters Corporation was founded with a simple mission: to provide 
                  high-end quality painting services that transform spaces and exceed expectations.
                </p>
                <p>
                  Based in Miami, we have built our reputation on delivering exceptional craftsmanship, 
                  using premium materials, and maintaining the highest standards of professionalism 
                  in every project we undertake.
                </p>
                <p>
                  Our team combines years of experience with continuous training in the latest 
                  techniques and materials, ensuring that every client receives the best possible 
                  results for their investment.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/commercial-painting.webp"
                alt="Professional painting work"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
              Our
              <span className="text-primary block">Achievements</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-text mb-2">{stat.number}</div>
                <div className="text-text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
              Our
              <span className="text-primary block">Values</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              The principles that guide everything we do and ensure exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-text mb-4">{value.title}</h3>
                <p className="text-text-muted leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Adolfo's Image */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Meet Our
                <span className="text-white block">Expert Team</span>
              </h2>
              <div className="space-y-6 text-lg">
                <p>
                  Our team is led by experienced professionals who are passionate about 
                  delivering exceptional painting services. We believe that quality work 
                  comes from skilled hands and attention to detail.
                </p>
                <p>
                  Every member of our team is trained in the latest techniques and safety 
                  protocols, ensuring that your project is completed to the highest standards 
                  while maintaining a clean and professional work environment.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/adolfo.jpeg"
                alt="Adolfo - J&S Painters Team Member"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-text-muted mb-8 max-w-2xl mx-auto">
              Contact us today for a free estimate and discover why we're Miami's trusted painting professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(786) 298-1846" className="btn btn-primary">
                <Phone size={20} />
                Call (786) 298-1846
              </a>
              <a href="mailto:info@jspainters.com" className="btn btn-ghost">
                <Mail size={20} />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
