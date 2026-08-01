"use client";

import { UploadCloud, File, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function DocumentUpload() {
  return (
    <div className="bg-white rounded-3xl border border-border p-8 shadow-card">
      <h3 className="text-2xl font-bold font-plus-jakarta text-text-primary mb-2">Secure Document Upload</h3>
      <p className="text-text-secondary mb-8">Drag and drop your files here or click to browse.</p>
      
      <div className="border-2 border-dashed border-primary/30 rounded-2xl p-12 flex flex-col items-center justify-center bg-primary/5 cursor-pointer hover:bg-primary/10 transition-colors mb-8">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm mb-4">
          <UploadCloud className="w-8 h-8 text-primary" />
        </div>
        <p className="text-text-primary font-medium mb-1">Click to upload or drag and drop</p>
        <p className="text-sm text-text-secondary">PDF, JPG, PNG (Max 10MB)</p>
      </div>

      <div className="space-y-4">
        <h4 className="font-semibold text-text-primary mb-4">Required Documents Checklist</h4>
        {[
          { name: "PAN Card Copy", status: "uploaded" },
          { name: "Aadhaar Card Copy", status: "uploaded" },
          { name: "Bank Statement (Last 3 months)", status: "pending" },
          { name: "Address Proof", status: "pending" },
        ].map((doc, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center justify-between p-4 rounded-xl border border-border bg-background"
          >
            <div className="flex items-center gap-3">
              <File className={`w-5 h-5 ${doc.status === 'uploaded' ? 'text-primary' : 'text-text-secondary'}`} />
              <span className={`font-medium ${doc.status === 'uploaded' ? 'text-text-primary' : 'text-text-secondary'}`}>
                {doc.name}
              </span>
            </div>
            {doc.status === 'uploaded' ? (
              <span className="flex items-center gap-1 text-sm font-medium text-primary">
                <CheckCircle2 className="w-4 h-4" /> Uploaded
              </span>
            ) : (
              <span className="text-sm font-medium text-text-secondary bg-surface-alt px-3 py-1 rounded-full border border-border">
                Pending
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
