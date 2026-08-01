"use client";

import { motion } from "framer-motion";
import { BookOpen, FileText, Download, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const resources = [
  { category: "Updates", title: "Latest GST Amendments 2026", icon: FileText },
  { category: "Guide", title: "Business Registration Full Guide", icon: BookOpen },
  { category: "Guide", title: "Trademark Filing Process", icon: BookOpen },
  { category: "Downloads", title: "FSSAI Compliance Checklist", icon: Download },
  { category: "Calendar", title: "Monthly Tax Due Dates", icon: FileText },
  { category: "FAQ", title: "Top ISO Certification Questions", icon: HelpCircle },
];

export function KnowledgeCenterSection() {
  return (
    <section className="py-24 bg-surface-alt">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-plus-jakarta mb-4 text-text-primary">
              Knowledge Center
            </h2>
            <p className="text-lg text-text-secondary">
              Stay updated with the latest government compliance guides, checklists, and expert articles.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/resources">
              <Button variant="outline" size="lg" className="bg-white">View All Resources</Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((res, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-border hover:border-primary hover:shadow-card transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-surface-alt rounded-xl flex items-center justify-center">
                  <res.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-text-secondary px-3 py-1 bg-surface-alt rounded-full">
                  {res.category}
                </span>
              </div>
              <h4 className="text-xl font-bold font-plus-jakarta text-text-primary mb-4 group-hover:text-primary transition-colors">
                {res.title}
              </h4>
              <Link href="#" className="flex items-center gap-2 text-sm font-bold text-primary">
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
