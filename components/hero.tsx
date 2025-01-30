"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroProps {
  parallaxOffset: number;
}

export function Hero({ parallaxOffset }: HeroProps) {
  return (
    <div className="h-[80vh] relative overflow-hidden">
      <div 
        className="w-full h-full relative"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1920&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${parallaxOffset * 0.5}px)`
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="container mx-auto px-4 text-center"
            style={{
              transform: `translateY(${-parallaxOffset * 0.2}px)`,
            }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Discover the Latest in Feline Fashion
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Your one-stop destination for cat lifestyle, fashion, and more
            </p>
            <Link href="/store">
              <Button size="lg" className="mr-4">Shop Now</Button>
            </Link>
            <Link href="/blog">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                Read Articles
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}