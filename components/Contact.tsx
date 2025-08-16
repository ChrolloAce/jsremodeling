"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, MapPin, Phone, Mail, Clock } from "lucide-react";
import { validateEmail, validatePhone } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  serviceType?: string;
  message?: string;
  consent?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
    consent: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service type";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    if (!formData.consent) {
      newErrors.consent = "Please agree to be contacted";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          zipCode: 'N/A', // Contact form doesn't have zip code
          message: formData.message,
          serviceType: formData.serviceType
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "",
          message: "",
          consent: false
        });
      } else {
        const errorData = await response.json();
        console.error('Form submission failed:', response.status);
        console.error('Error details:', errorData);
        // You could show an error message to the user here
        alert('❌ Something went wrong. Please try again or call us directly at (786) 298-1846.');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert('❌ Something went wrong. Please try again or call us directly at (786) 298-1846.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="space-y-16">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle size={40} className="text-success" />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-text">Thank You!</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              We've received your message and will get back to you within 24 hours. 
              Our team is excited to discuss your project!
            </p>
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="btn btn-ghost"
          >
            Send Another Message
          </button>
        </motion.div>
      </div>
    );
  }

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
          Let's discuss your <span className="text-primary">painting project</span>
        </h2>
        <p className="text-xl text-text-muted max-w-3xl mx-auto">
          Have questions or need a detailed quote? We're here to help you every step of the way. Contact J&S Painters today!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-text mb-2">Phone</h3>
                <a 
                  href="tel:+17862981846" 
                  className="text-text-muted hover:text-primary transition-colors"
                >
                  (786) 298-1846
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-text mb-2">Email</h3>
                <a 
                  href="mailto:scardonas1@aol.com" 
                  className="text-text-muted hover:text-primary transition-colors"
                >
                  scardonas1@aol.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-text mb-2">Business Hours</h3>
                <div className="text-text-muted space-y-1">
                  <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                  <p>Saturday: 8:00 AM - 4:00 PM</p>
                  <p>Sunday: Available for estimates</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-text font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full p-3 bg-bg border rounded-lg text-text placeholder-text-muted transition-colors ${
                      errors.name ? "border-red-500" : "border-line focus:border-primary"
                    } focus:outline-none`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-text font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full p-3 bg-bg border rounded-lg text-text placeholder-text-muted transition-colors ${
                      errors.email ? "border-red-500" : "border-line focus:border-primary"
                    } focus:outline-none`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-text font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full p-3 bg-bg border rounded-lg text-text placeholder-text-muted transition-colors ${
                      errors.phone ? "border-red-500" : "border-line focus:border-primary"
                    } focus:outline-none`}
                    placeholder="(123) 456-7890"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-text font-medium mb-2">
                    Service Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className={`w-full p-3 bg-bg border rounded-lg text-text transition-colors ${
                      errors.serviceType ? "border-red-500" : "border-line focus:border-primary"
                    } focus:outline-none`}
                  >
                    <option value="">Select a service</option>
                    <option value="Interior & Exterior Painting">Interior & Exterior Painting</option>
                    <option value="Commercial Painting">Commercial Painting</option>
                    <option value="Cabinet Painting">Cabinet Painting</option>
                    <option value="Epoxy">Epoxy</option>
                    <option value="Venetian Plaster">Venetian Plaster</option>
                    <option value="Lime Base Wash">Lime Base Wash</option>
                    <option value="Color Consultation">Color Consultation</option>
                  </select>
                  {errors.serviceType && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.serviceType}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-text font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full p-3 bg-bg border rounded-lg text-text placeholder-text-muted transition-colors resize-vertical ${
                    errors.message ? "border-red-500" : "border-line focus:border-primary"
                  } focus:outline-none`}
                  placeholder="Tell us about your painting project, preferred colors, timeline, and any specific requirements..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-primary bg-bg border-line rounded focus:ring-primary focus:ring-2"
                />
                <label htmlFor="consent" className="text-sm text-text-muted">
                  I agree to be contacted by J&S Contractor Painters Corporation regarding my painting project inquiry. 
                  This consent allows J&S Painters to reach out via phone, email, or text message.
                </label>
              </div>
              {errors.consent && (
                <p className="text-red-500 text-sm flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.consent}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-bg border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}