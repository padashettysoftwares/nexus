"use client";

import { motion } from "framer-motion";
import { CheckSquare2 } from "lucide-react";

interface DocCategory {
  title: string;
  docs: string[];
}

interface DocumentChecklistProps {
  categories: DocCategory[];
}

export function DocumentChecklist({ categories }: DocumentChecklistProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {categories.map((category, i) => (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          key={i} 
          className="bg-surface-alt rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors"
        >
          <h4 className="text-lg font-bold text-primary mb-4 font-plus-jakarta border-b border-border pb-3">
            {category.title}
          </h4>
          <ul className="space-y-3">
            {category.docs.map((doc, j) => (
              <li key={j} className="flex items-start gap-3">
                <CheckSquare2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-text-secondary font-medium leading-snug">{doc}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
