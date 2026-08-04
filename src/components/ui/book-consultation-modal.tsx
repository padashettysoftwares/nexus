"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, CheckCircle2, MessageCircle, Phone } from "lucide-react";

interface BookConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceContext?: string;
}

export function BookConsultationModal({
  isOpen,
  onClose,
  serviceContext = "",
}: BookConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;

    const contextLine = serviceContext
      ? `Service of Interest: ${serviceContext}\n`
      : service
      ? `Service of Interest: ${service}\n`
      : "";

    const message = encodeURIComponent(
      `Hello Nexus Solutions! 👋\n\nI would like to book a free consultation.\n\nName: ${name}\nPhone: +91 ${phone}\n${contextLine}\nPlease get back to me at your earliest convenience. Thank you!`
    );
    const whatsappUrl = `https://wa.me/919483486111?text=${message}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const handleClose = () => {
    setSubmitted(false);
    setLoading(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal Panel */}
      <div className="relative w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden z-10">
        
        {/* Top gradient bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#991b1b] to-[#dc2626]" />

        {/* Drag handle (mobile only) */}
        <div className="flex justify-center pt-4 pb-0 sm:hidden">
          <div className="w-10 h-1 bg-gray-300 rounded-full" />
        </div>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 flex items-center justify-center bg-gray-100 hover:bg-red-50 hover:text-[#dc2626] rounded-full transition-colors z-20"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="px-5 sm:px-6 pb-8 pt-5 sm:pt-6">
          {!submitted ? (
            <>
              <div className="mb-5 pr-10">
                <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
                  Book a <span className="text-[#dc2626]">Free Consultation</span>
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {serviceContext
                    ? `For: ${serviceContext}`
                    : "Our experts will call you back within 2 hours"}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="modal-name" className="text-sm font-bold text-gray-700 mb-1.5 block">
                    Full Name / Company Name
                  </Label>
                  <Input
                    id="modal-name"
                    name="name"
                    required
                    placeholder="e.g. Rahul Sharma / XYZ Pvt Ltd"
                    className="h-12 bg-gray-50 border-gray-200 rounded-xl font-medium text-gray-800 placeholder:text-gray-400 focus-visible:ring-[#dc2626] text-sm"
                  />
                </div>

                <div>
                  <Label htmlFor="modal-phone" className="text-sm font-bold text-gray-700 mb-1.5 block">
                    Mobile Number
                  </Label>
                  <div className="flex">
                    <div className="flex items-center px-3 bg-gray-100 border border-r-0 border-gray-200 rounded-l-xl text-sm font-bold text-gray-600 whitespace-nowrap">
                      🇮🇳 +91
                    </div>
                    <Input
                      id="modal-phone"
                      name="phone"
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="98765 43210"
                      className="h-12 bg-gray-50 border-gray-200 rounded-l-none rounded-r-xl font-medium text-gray-800 placeholder:text-gray-400 focus-visible:ring-[#dc2626] text-sm"
                    />
                  </div>
                </div>

                {!serviceContext && (
                  <div>
                    <Label htmlFor="modal-service" className="text-sm font-bold text-gray-700 mb-1.5 block">
                      Service You Need
                    </Label>
                    <select
                      id="modal-service"
                      name="service"
                      required
                      className="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl px-3 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                    >
                      <option value="">Select a service...</option>
                      <option>Business Registration</option>
                      <option>GST &amp; Tax Filing</option>
                      <option>Trade Licences</option>
                      <option>ISO Certifications</option>
                      <option>Trademark Registration</option>
                      <option>Govt. Registrations (MSME)</option>
                      <option>Accounting &amp; Audits</option>
                      <option>Web Development</option>
                      <option>Other</option>
                    </select>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-base rounded-xl shadow-lg shadow-red-500/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-2"
                >
                  {loading ? (
                    <span className="animate-pulse">Opening WhatsApp...</span>
                  ) : (
                    <>
                      <MessageCircle className="w-5 h-5" />
                      Book via WhatsApp
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-gray-400">
                  Opens WhatsApp with your details. No spam, ever.
                </p>
              </form>
            </>
          ) : (
            <div className="py-4 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                Thank You! 🎉
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-1">
                Your request has been sent on WhatsApp.
              </p>
              <p className="text-gray-500 text-sm mb-6">
                We will get back to you <strong>shortly!</strong>
              </p>
              <div className="bg-gray-50 rounded-xl border border-gray-100 p-4 w-full text-left flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Call us directly</p>
                  <p className="text-sm font-bold text-gray-800">+91 9483486111</p>
                  <p className="text-sm font-bold text-gray-800">+91 8073726564</p>
                </div>
              </div>
              <Button
                onClick={handleClose}
                className="w-full rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 transition-colors"
              >
                Close
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
