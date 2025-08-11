"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Homes Painted" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "50+", label: "Commercial Projects" },
  { value: "5+", label: "Years Experience" }
];

export default function StatBar() {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="container">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-text-muted text-sm font-medium">
                {stat.label}
              </div>
              
              {/* Divider line (except for last item) */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-line" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}