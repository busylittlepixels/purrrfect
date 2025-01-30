"use client";

import { useState } from "react";
import { Cat } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4">
        <Link href="/" className="mr-4 flex items-center space-x-2">
          <Cat className="h-6 w-6" />
          <span className="text-xl font-bold">Purrrfect</span>
        </Link>
        
        <div className="hidden md:flex flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Magazine</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 w-[400px]">
                    <li>
                      <Link href="/blog" className="block p-2 hover:bg-accent rounded-md">
                        Latest Articles
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/categories/fashion" className="block p-2 hover:bg-accent rounded-md">
                        Fashion
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/tags/style" className="block p-2 hover:bg-accent rounded-md">
                        Style
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 w-[400px]">
                    <li>
                      <Link href="/store" className="block p-2 hover:bg-accent rounded-md">
                        All Products
                      </Link>
                    </li>
                    <li>
                      <Link href="/store?category=Accessories" className="block p-2 hover:bg-accent rounded-md">
                        Accessories
                      </Link>
                    </li>
                    <li>
                      <Link href="/store?category=Furniture" className="block p-2 hover:bg-accent rounded-md">
                        Furniture
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2">About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2">Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex md:hidden ml-auto">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-8">
                <Link href="/blog" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full">Magazine</Button>
                </Link>
                <Link href="/store" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full">Shop</Button>
                </Link>
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full">About</Button>
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full">Contact</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:flex items-center ml-auto space-x-4">
          <Button variant="ghost">Sign In</Button>
          <Link href="/store">
            <Button>Shop Now</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}