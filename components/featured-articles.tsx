"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { articles } from "@/app/blog/[slug]/data";

export function FeaturedArticles() {
  const featuredArticles = articles.slice(0, 3);

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredArticles.map((article) => (
          <Link href={`/blog/${article.slug}`} key={article.slug}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                  {article.category}
                </span>
              </div>
              <CardHeader>
                <CardTitle>{article.title}</CardTitle>
                <CardDescription>
                  {article.content.replace(/<[^>]*>/g, '').slice(0, 120)}...
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}