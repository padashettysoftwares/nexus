import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-primary text-white text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold font-plus-jakarta mb-6">
          Ready to Grow Your Business?
        </h2>
        <p className="text-xl mb-10 text-white/90">
          Book a free consultation today and let our experts handle your compliance while you focus on growth.
        </p>
        <Link href="/contact">
          <Button variant="outline" size="lg" className="bg-white text-primary border-transparent hover:bg-surface-alt font-bold px-10 py-6 text-lg">
            Get Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
