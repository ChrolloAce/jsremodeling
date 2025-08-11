"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "5 Essential Tips for Planning Your Home Renovation",
    excerpt: "Planning a home renovation can be overwhelming. Here are the key considerations to ensure your project runs smoothly.",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Renovation",
    author: "Sarah Mitchell",
    date: "March 15, 2024",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Sustainable Construction Practices for Modern Buildings",
    excerpt: "Discover how green building practices are shaping the future of construction and benefiting both clients and the environment.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Sustainability",
    author: "Mike Thompson",
    date: "March 10, 2024",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Understanding Construction Permits: A Complete Guide",
    excerpt: "Navigate the complex world of construction permits with our comprehensive guide to approvals and regulations.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Legal",
    author: "John Rodriguez",
    date: "March 5, 2024",
    readTime: "6 min read"
  }
];

export default function Blog() {
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
          Latest <span className="text-primary">insights</span>
        </h2>
        <p className="text-xl text-text-muted max-w-3xl mx-auto">
          Stay informed with our latest articles on construction trends, tips, and industry insights.
        </p>
      </motion.div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="card overflow-hidden card-hover h-full">
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="badge bg-surface/90 backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Post Meta */}
                <div className="space-y-3 pt-4 border-t border-line">
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <div className="flex items-center gap-2">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-text-muted">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all text-sm">
                      <span>Read More</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* View All Posts CTA */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <a href="/blog" className="btn btn-ghost group">
          View All Posts
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </div>
  );
}