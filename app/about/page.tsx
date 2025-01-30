"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Cat, Heart, Award, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Purrrfect</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're passionate about bringing style and comfort to cats and their owners worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2024, Purrrfect began with a simple mission: to create high-quality, 
              stylish products that both cats and their owners would love. What started as a 
              small passion project has grown into a global community of cat fashion enthusiasts.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe that every cat deserves to feel special, and every owner deserves 
              to have access to beautifully designed, functional products that enhance their 
              daily lives with their feline friends.
            </p>
          </div>
          <div className="relative aspect-square">
            <img
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80"
              alt="Cat with style"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: Heart,
              title: "Quality First",
              description: "We use only the finest materials and craftsmanship in all our products."
            },
            {
              icon: Award,
              title: "Design Excellence",
              description: "Every product is thoughtfully designed for both style and functionality."
            },
            {
              icon: Users,
              title: "Community Driven",
              description: "We're built on feedback from our passionate community of cat lovers."
            }
          ].map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center p-6">
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <Cat className="w-12 h-12 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Be part of our growing family of cat fashion enthusiasts. Subscribe to our 
              newsletter for exclusive updates, special offers, and feline fashion inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}