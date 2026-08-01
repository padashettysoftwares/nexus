"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const packages = [
  { name: "GST Registration", features: ["ARN Generation", "GSTIN Allocation", "Dedicated Expert"] },
  { name: "FSSAI License", features: ["State/Central License", "Document Preparation", "Govt. Follow-up"] },
  { name: "Trademark Registration", features: ["TM Search", "Application Filing", "Hearing Support"] },
  { name: "ISO Certification", features: ["9001:2015 Cert", "Quality Audit", "Certificate Issuance"] },
  { name: "Private Limited", features: ["DIN & DSC", "MOA & AOA", "PAN & TAN"] },
];

export function PopularPackagesSection() {
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
              Our Most Requested Services
            </h2>
            <p className="text-lg text-text-secondary">
              High-quality corporate compliance services tailored to your specific business needs.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/services">
              <Button variant="outline" size="lg" className="bg-white">View All Services</Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-white hover:border-primary transition-all hover:-translate-y-1 hover:shadow-card">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-plus-jakarta">{pkg.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow pb-2">
                  <div className="mb-2">
                    <span className="text-sm text-text-secondary block mb-1">Key Deliverables</span>
                  </div>
                  <ul className="space-y-2 mt-6 border-t border-border pt-4">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                        <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-4">
                  <Link href="/contact" className="w-full">
                    <Button variant="outline" className="w-full font-semibold border-border hover:bg-primary hover:text-white hover:border-primary">
                      Get Started
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
