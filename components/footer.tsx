"use client";

import { Cat, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Cat className="h-6 w-6" />
              <span className="text-xl font-bold">Purrrfect</span>
            </Link>
            <p className="text-muted-foreground">
              Your destination for cat fashion and lifestyle.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="/store" className="text-muted-foreground hover:text-primary">All Products</Link></li>
              <li><Link href="/store?category=Accessories" className="text-muted-foreground hover:text-primary">Accessories</Link></li>
              <li><Link href="/store?category=Furniture" className="text-muted-foreground hover:text-primary">Furniture</Link></li>
              <li><Link href="/store?category=Wellness" className="text-muted-foreground hover:text-primary">Wellness</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Magazine</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Latest Articles</Link></li>
              <li><Link href="/blog/categories/fashion" className="text-muted-foreground hover:text-primary">Fashion</Link></li>
              <li><Link href="/blog/categories/lifestyle" className="text-muted-foreground hover:text-primary">Lifestyle</Link></li>
              <li><Link href="/blog/categories/wellness" className="text-muted-foreground hover:text-primary">Wellness</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Contact us at:<br />
              support@purrrfect.com
            </p>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Purrrfect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}