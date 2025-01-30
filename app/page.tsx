"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { FeaturedArticles } from "@/components/featured-articles";
import { Categories } from "@/components/categories";
import { NewsletterCTA } from "@/components/newsletter-cta";
import { Footer } from "@/components/footer";
import { BentoGrid } from "@/components/bento-grid";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="relative">
        <Hero parallaxOffset={scrollY} />
        <div className="relative bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
	          <BentoGrid />
            <p>TESTING</p>
            <FeaturedArticles />
            <Categories />
          </div>
          <NewsletterCTA />
        </div>
      </div>
      <Footer />
    </main>
  );
}
