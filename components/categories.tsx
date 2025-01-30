"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Cat, ShoppingBag, Heart, Coffee } from "lucide-react";

export function Categories() {
  const categories = [
    {
      icon: Cat,
      title: "Pet Care",
      description: "Essential products for your feline friend"
    },
    {
      icon: ShoppingBag,
      title: "Accessories",
      description: "Stylish accessories for cats and owners"
    },
    {
      icon: Heart,
      title: "Wellness",
      description: "Health and wellness products"
    },
    {
      icon: Coffee,
      title: "Lifestyle",
      description: "Cat-inspired lifestyle products"
    }
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Card 
              key={index}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <Icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}