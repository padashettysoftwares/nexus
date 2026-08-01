"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { QuotationGenerator } from "@/components/demos/quotation-generator";

const plans = [
  {
    name: "Essential",
    description: "Perfect for startups and small businesses looking for basic compliance.",
    price: "Contact Us",
    features: [
      "Company Registration Support",
      "Basic GST Filing (Monthly)",
      "Annual ROC Compliance",
      "Email Support",
    ]
  },
  {
    name: "Professional",
    description: "Ideal for growing companies needing comprehensive financial oversight.",
    price: "Contact Us",
    isPopular: true,
    features: [
      "Everything in Essential",
      "Advanced GST & TDS Filing",
      "Dedicated Account Manager",
      "Trademark Registration Support",
      "Priority Phone Support",
    ]
  },
  {
    name: "Enterprise",
    description: "Full-scale compliance and advisory for large-scale operations.",
    price: "Contact Us",
    features: [
      "Everything in Professional",
      "Virtual CFO Services",
      "ISO Certification Assistance",
      "International Tax Advisory",
      "24/7 Premium Support",
    ]
  }
];

export default function PricingPage() {
  return (
    <div className="pt-24 pb-24 bg-surface-alt/50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-plus-jakarta text-text-primary mb-6">
              Transparent, Premium Pricing
            </h1>
            <p className="text-lg text-text-secondary">
              Invest in peace of mind. Choose a comprehensive compliance package tailored to your business scale and requirements.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className={`h-full flex flex-col relative ${plan.isPopular ? 'border-primary shadow-soft' : ''}`}>
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="h-12">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-8">
                    <span className="text-3xl font-bold text-text-primary">{plan.price}</span>
                  </div>
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button variant={plan.isPopular ? "primary" : "outline"} className="w-full">
                      Request Quote
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-32">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-plus-jakarta text-text-primary mb-4">
              Need a Custom Estimate?
            </h2>
            <p className="text-text-secondary">
              Use our interactive quote generator to instantly estimate costs based on your specific business type and service requirements.
            </p>
          </div>
          <QuotationGenerator />
        </div>
      </div>
    </div>
  );
}
