"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cat, ArrowRight } from "lucide-react";

export function NewsletterCTA() {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
            <Cat className="w-full h-full" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the Purrrfect Club
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter for exclusive offers, fashion tips, and feline lifestyle inspiration.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button size="lg" className="group">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}