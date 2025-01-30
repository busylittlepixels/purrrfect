"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Tag as TagIcon, LayoutGrid, List } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { articles } from "./[slug]/data";

export default function BlogPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Magazine</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover the latest trends, tips, and stories about cat fashion, lifestyle, and more
          </p>
          <div className="flex justify-center gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <LayoutGrid className="h-4 w-4 mr-2" />
              Grid
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4 mr-2" />
              List
            </Button>
          </div>
        </header>

        <div className={viewMode === 'grid' 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          : "space-y-8"
        }>
          {articles.map(article => (
            <Link href={`/blog/${article.slug}`} key={article.slug}>
              <Card className={`group cursor-pointer hover:shadow-lg transition-shadow ${
                viewMode === 'list' ? 'flex flex-row items-start gap-6' : ''
              }`}>
                <div className={`aspect-[3/2] relative overflow-hidden ${
                  viewMode === 'list' ? 'w-48 shrink-0' : ''
                }`}>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 right-2">
                    {article.category}
                  </Badge>
                </div>
                <div className="flex-1">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {article.content.replace(/<[^>]*>/g, '').slice(0, 120)}...
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {format(article.publishedAt, "MMMM d, yyyy")}
                      </div>
                      <div className="flex gap-2">
                        {article.tags?.map(tag => (
                          <Badge key={tag} variant="secondary">
                            <TagIcon className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}