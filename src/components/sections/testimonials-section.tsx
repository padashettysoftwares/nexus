"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rohan Desai",
    role: "Founder, TechNova Solutions",
    content: "Nexus Solutions made our company incorporation incredibly smooth. Their team is knowledgeable, professional, and always available to answer queries.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Director, GreenLeaf Organics",
    content: "We rely on Nexus for all our GST and compliance needs. Their proactive approach has saved us both time and money. Highly recommended.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "CEO, Patel & Co. Logistics",
    content: "The level of expertise and premium service provided by Nexus is unmatched in Kalaburagi. They truly act as a partner in our growth.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-plus-jakarta mb-6 text-text-primary">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-text-secondary">
              Don't just take our word for it. Here is what our esteemed clients have to say about partnering with Nexus Solutions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-text-secondary text-lg mb-8 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h4 className="font-semibold text-text-primary font-plus-jakarta">{testimonial.name}</h4>
                    <p className="text-sm text-text-secondary">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
