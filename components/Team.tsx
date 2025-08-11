"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "John Rodriguez",
    role: "Master Craftsman",
    experience: "25+ years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    specialties: ["Framing", "Finish Carpentry", "Project Management"]
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Project Manager",
    experience: "15+ years",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    specialties: ["Scheduling", "Quality Control", "Client Relations"]
  },
  {
    id: 3,
    name: "Mike Thompson",
    role: "Electrical Foreman",
    experience: "20+ years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    specialties: ["Commercial Wiring", "Smart Home Systems", "Code Compliance"]
  },
  {
    id: 4,
    name: "Lisa Chen",
    role: "Site Supervisor",
    experience: "12+ years",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    specialties: ["Safety Management", "Team Coordination", "Quality Assurance"]
  }
];

export default function Team() {
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
          Meet our expert <span className="text-primary">team</span>
        </h2>
        <p className="text-xl text-text-muted max-w-3xl mx-auto">
          Our skilled professionals bring decades of combined experience to every project, ensuring exceptional results and craftsmanship.
        </p>
      </motion.div>

      {/* Team Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            className="group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="card overflow-hidden card-hover">
              {/* Member Photo */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
                
                {/* Experience Badge */}
                <div className="absolute top-4 right-4">
                  <div className="badge bg-surface/90 backdrop-blur-sm flex items-center gap-1">
                    <Calendar size={14} />
                    {member.experience}
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium">
                    {member.role}
                  </p>
                </div>

                {/* Specialties */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-text-muted text-sm">
                    <Award size={16} />
                    <span>Specialties:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="space-y-4">
          <p className="text-text-muted">
            Ready to work with our experienced team?
          </p>
          <a href="#contact" className="btn btn-primary">
            Start Your Project
          </a>
        </div>
      </motion.div>
    </div>
  );
}