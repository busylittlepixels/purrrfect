"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Luxury Cat Bed",
    price: 79.99,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80",
    description: "Premium memory foam cat bed with plush cover"
  },
  {
    id: 2,
    name: "Interactive Laser Toy",
    price: 24.99,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=800&q=80",
    description: "Automatic rotating laser toy for endless entertainment"
  },
  {
    id: 3,
    name: "Designer Cat Collar",
    price: 19.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=800&q=80",
    description: "Stylish leather collar with gold hardware"
  },
  {
    id: 4,
    name: "Organic Catnip",
    price: 12.99,
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1594881497142-08fdfdfc4074?auto=format&fit=crop&w=800&q=80",
    description: "Premium organic catnip grown in the USA"
  },
  {
    id: 5,
    name: "Cat Tree Palace",
    price: 199.99,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1597843786271-1027c545fbe1?auto=format&fit=crop&w=800&q=80",
    description: "Luxury cat tree with multiple platforms and scratching posts"
  },
  {
    id: 6,
    name: "Ceramic Water Fountain",
    price: 49.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1562176566-e9afd27531d4?auto=format&fit=crop&w=800&q=80",
    description: "Quiet ceramic fountain for fresh flowing water"
  }
];

const ALL_CATEGORIES = "all";

export default function StorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(ALL_CATEGORIES);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === ALL_CATEGORIES || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL_CATEGORIES}>All Categories</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <Card key={product.id} className="overflow-hidden group">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                  {product.category}
                </span>
              </div>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-lg font-bold">${product.price}</span>
                <Button>Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}