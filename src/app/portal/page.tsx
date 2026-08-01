"use client";

import { motion } from "framer-motion";
import { DocumentUpload } from "@/components/demos/document-upload";
import { ComplianceCalendar } from "@/components/demos/compliance-calendar";
import { FileText, Briefcase, Bell } from "lucide-react";

export default function PortalPage() {
  return (
    <div className="pt-24 pb-24 bg-surface-alt/30 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12 flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold font-plus-jakarta text-text-primary mb-2">
              Client Portal
            </h1>
            <p className="text-text-secondary">
              Welcome back, TechNova Solutions. Here is an overview of your active tasks and compliances.
            </p>
          </motion.div>
          <div className="hidden md:flex gap-4">
            <button className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-text-primary hover:text-primary hover:border-primary transition-all relative shadow-sm">
              <Bell className="w-5 h-5" />
              <span className="absolute top-3 right-3 w-2 h-2 bg-primary rounded-full" />
            </button>
            <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg shadow-sm">
              TS
            </div>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { title: "Active Applications", value: "3", icon: Briefcase },
            { title: "Pending Documents", value: "2", icon: FileText, alert: true },
            { title: "Upcoming Compliances", value: "5", icon: Bell },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-border shadow-card flex items-center justify-between"
            >
              <div>
                <p className="text-text-secondary font-medium mb-1">{stat.title}</p>
                <div className="flex items-center gap-3">
                  <h3 className="text-3xl font-bold text-text-primary">{stat.value}</h3>
                  {stat.alert && (
                    <span className="text-xs font-bold px-2 py-1 bg-primary/10 text-primary rounded-full">
                      ACTION REQUIRED
                    </span>
                  )}
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-surface-alt flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-text-secondary" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <DocumentUpload />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ComplianceCalendar />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
