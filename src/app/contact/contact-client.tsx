"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactClient() {
  return (
    <div className="pt-24 pb-24 bg-surface-alt/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-plus-jakarta text-text-primary mb-6">
              Contact Nexus Solutions, Kalaburagi
            </h1>
            <p className="text-lg text-text-secondary mb-12 max-w-md leading-relaxed">
              Have questions about company registration, GST, licences or compliance? Our
              consultants in Kalaburagi are ready to help. Call, email, or send the form below.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-semibold text-text-primary mb-1 text-base">Office Address</h2>
                  <p className="text-text-secondary">#2-909/2967/4/14 Sharan Nilaya,<br />Near Andola Hospital, Gubbi Colony,<br />MG Road, Kalaburagi - 585 105</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-semibold text-text-primary mb-1 text-base">Phone</h2>
                  <p className="text-text-secondary">
                    <a href="tel:+919483486111" className="hover:text-primary">+91 94834 86111</a><br />
                    <a href="tel:+918073726564" className="hover:text-primary">+91 80737 26564</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-semibold text-text-primary mb-1 text-base">Email</h2>
                  <p className="text-text-secondary">
                    <a href="mailto:nexussolutionsglb@gmail.com" className="hover:text-primary">nexussolutionsglb@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-3xl border border-border shadow-card"
          >
            <h2 className="text-2xl font-bold font-plus-jakarta text-text-primary mb-8">Send us a Message</h2>
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const firstName = formData.get("firstName") as string;
              const lastName = formData.get("lastName") as string;
              const email = formData.get("email") as string;
              const service = formData.get("service") as string;
              const message = formData.get("message") as string;
              
              const text = encodeURIComponent(`Hello Nexus Solutions! 👋\n\nI would like to inquire about your services.\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nService Interested: ${service}\n\nMessage: ${message}\n\nPlease get back to me. Thank you!`);
              window.open(`https://wa.me/919483486111?text=${text}`, "_blank");
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-text-primary">First Name</label>
                  <input id="firstName" name="firstName" required type="text" className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-text-primary placeholder:text-gray-400" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-text-primary">Last Name</label>
                  <input id="lastName" name="lastName" required type="text" className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-text-primary placeholder:text-gray-400" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-text-primary">Email Address</label>
                <input id="email" name="email" required type="email" className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-text-primary placeholder:text-gray-400" placeholder="john@company.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-text-primary">Service Required</label>
                <select id="service" name="service" required className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-text-primary">
                  <option value="">Select a service...</option>
                  <option value="Business Registration">Business Registration</option>
                  <option value="GST & Tax">GST &amp; Tax</option>
                  <option value="Licences (FSSAI / Trade)">Licences (FSSAI / Trade)</option>
                  <option value="ISO Certification">ISO Certification</option>
                  <option value="Trademark / IP">Trademark / IP</option>
                  <option value="Accounting">Accounting</option>
                  <option value="Other Inquiry">Other Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-text-primary">Message</label>
                <textarea id="message" name="message" required className="w-full p-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[120px] resize-none text-text-primary placeholder:text-gray-400" placeholder="Tell us about your requirements..."></textarea>
              </div>
              <Button type="submit" variant="primary" size="lg" className="w-full">
                Send Message on WhatsApp
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
