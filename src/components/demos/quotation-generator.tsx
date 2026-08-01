"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, FileDown, Loader2 } from "lucide-react";
import { generateQuotationPdf } from "@/lib/generateQuotationPdf";

export function QuotationGenerator() {
  const [step, setStep] = useState(1);
  const [businessType, setBusinessType] = useState("");
  const [service, setService] = useState("");

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (step === 3) {
      timeout = setTimeout(() => setStep(4), 1500);
    }
    return () => clearTimeout(timeout);
  }, [step]);

  const handleDownloadPDF = async () => {
    try {
      setIsGeneratingPdf(true);
      await generateQuotationPdf({
        businessType: businessType || "New Entity",
        service: service || "Consulting Services",
        profFee: 1999,
        govtFee: 500,
        gst: 450,
        total: 2949
      });
    } catch (error) {
      console.error("Failed to generate PDF:", error);
      alert("There was an error generating your PDF. Please try again.");
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-border shadow-card overflow-hidden">
      {/* Header */}
      <div className="bg-surface-alt px-8 py-6 border-b border-border">
        <h3 className="text-2xl font-bold font-plus-jakarta text-text-primary">Quote Generator</h3>
        <p className="text-text-secondary text-sm">Estimate your compliance costs instantly</p>
        
        {/* Progress Bar */}
        <div className="flex items-center mt-6 gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-primary" : "bg-border"}`} />
          ))}
        </div>
      </div>

      <div className="p-8">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-text-primary">Select Business Type</h4>
              <div className="grid grid-cols-2 gap-4">
                {["Private Limited", "LLP", "Partnership", "Sole Proprietorship"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setBusinessType(type)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      businessType === type 
                        ? "border-primary bg-primary/5 text-primary" 
                        : "border-border hover:border-primary/50 text-text-primary"
                    }`}
                  >
                    <span className="font-medium">{type}</span>
                  </button>
                ))}
              </div>
              <div className="flex justify-end pt-4">
                <Button variant="primary" onClick={handleNext} disabled={!businessType}>
                  Next <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-text-primary">Select Service</h4>
              <div className="grid grid-cols-1 gap-4">
                {["New Registration", "Annual Compliance", "GST Registration & Filing", "Trademark Registration"].map((srv) => (
                  <button
                    key={srv}
                    onClick={() => setService(srv)}
                    className={`p-4 rounded-xl border text-left flex items-center justify-between transition-all ${
                      service === srv 
                        ? "border-primary bg-primary/5 text-primary" 
                        : "border-border hover:border-primary/50 text-text-primary"
                    }`}
                  >
                    <span className="font-medium">{srv}</span>
                    {service === srv && <Check className="w-5 h-5" />}
                  </button>
                ))}
              </div>
              <div className="flex justify-between pt-4">
                <Button variant="ghost" onClick={handleBack}>Back</Button>
                <Button variant="primary" onClick={handleNext} disabled={!service}>
                  Calculate <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full"
                  />
                </div>
                <h4 className="text-lg font-semibold text-text-primary">Generating your customized quote...</h4>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 md:p-12"
            >
              <div className="text-center mb-8 border-b border-border pb-8">
                <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-[#25D366]" />
                </div>
                <h3 className="text-2xl font-bold font-plus-jakarta text-text-primary mb-2">Estimation Ready</h3>
                <p className="text-text-secondary">Based on your requirements, here is your preliminary estimate.</p>
              </div>

              <div className="bg-surface-alt p-6 rounded-xl border border-border mb-8 space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-border border-dashed">
                  <span className="text-text-secondary font-medium">Professional Fee</span>
                  <span className="font-bold text-text-primary">₹1,999</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border border-dashed">
                  <span className="text-text-secondary font-medium">Government Fee</span>
                  <span className="font-bold text-text-primary">₹500</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border border-dashed">
                  <span className="text-text-secondary font-medium">GST (18%)</span>
                  <span className="font-bold text-text-primary">₹450</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-bold text-text-primary">Estimated Total Cost</span>
                  <span className="text-2xl font-bold text-primary">₹2,949*</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-white border border-border rounded-lg shadow-sm">
                  <div className="text-xs uppercase font-bold text-text-secondary mb-1">Expected Timeline</div>
                  <div className="font-bold text-text-primary">3-5 Working Days</div>
                </div>
                <div className="p-4 bg-white border border-border rounded-lg shadow-sm">
                  <div className="text-xs uppercase font-bold text-text-secondary mb-1">Required Docs</div>
                  <div className="font-bold text-text-primary">PAN, Aadhaar, Bank</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" className="flex-1 py-6 text-lg font-bold">
                  Book Consultation
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 py-6 text-lg font-bold flex items-center justify-center gap-2" 
                  onClick={handleDownloadPDF}
                  disabled={isGeneratingPdf}
                >
                  {isGeneratingPdf ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <FileDown className="w-5 h-5" />
                  )}
                  {isGeneratingPdf ? "Generating..." : "Download Quotation"}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
