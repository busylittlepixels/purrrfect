"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart } from "lucide-react";
import Link from "next/link";
import { products } from "@/app/store/data";

export function BentoGrid() {
  const featuredProducts = products.slice(0, 5);

  return (
    <section className="relative">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Featured Products</h2>
        <Link href="/store">
          <Button variant="outline">View All Products</Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[600px]">
        {/* Large featured item */}
        <Link href={`/store/product/${featuredProducts[0].id}`} className="col-span-2 row-span-2">
          <Card className="group relative overflow-hidden h-full hover:shadow-lg transition-all duration-300">
            <div className="absolute inset-0">
              <img
                src={featuredProducts[0].image}
                alt={featuredProducts[0].name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <Badge variant="secondary" className="w-fit bg-white/90 text-black mb-2">
                <Star className="h-3 w-3 fill-yellow-400 stroke-yellow-400 mr-1" />
                {featuredProducts[0].rating}
              </Badge>
              
              <h3 className="text-2xl font-bold text-white mb-2">
                {featuredProducts[0].name}
              </h3>
              
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-white">
                  ${featuredProducts[0].price}
                </span>
                <div className="flex gap-2">
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" className="rounded-full">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Link>

        {/* Top right items */}
        {featuredProducts.slice(1, 3).map((product) => (
          <Link href={`/store/product/${product.id}`} key={product.id} className="col-span-2">
            <Card className="group relative overflow-hidden h-full hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <Badge variant="secondary" className="w-fit bg-white/90 text-black mb-2">
                  <Star className="h-3 w-3 fill-yellow-400 stroke-yellow-400 mr-1" />
                  {product.rating}
                </Badge>
                
                <h3 className="text-lg font-bold text-white mb-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-white">
                    ${product.price}
                  </span>
                  <Button size="sm" className="rounded-full">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </Link>
        ))}

        {/* Bottom right items */}
        {featuredProducts.slice(3, 5).map((product) => (
          <Link href={`/store/product/${product.id}`} key={product.id}>
            <Card className="group relative overflow-hidden h-full hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <Badge variant="secondary" className="w-fit bg-white/90 text-black mb-2">
                  <Star className="h-3 w-3 fill-yellow-400 stroke-yellow-400 mr-1" />
                  {product.rating}
                </Badge>
                
                <h3 className="text-sm font-bold text-white mb-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white">
                    ${product.price}
                  </span>
                  <Button size="sm" variant="secondary" className="rounded-full w-8 h-8 p-0">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}