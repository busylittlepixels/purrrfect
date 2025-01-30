import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ChevronRight } from 'lucide-react';
import { format } from "date-fns";
import { articles } from "../../[slug]/data";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams(): Promise<{ category: string }[]> {
  const categories = Array.from(new Set(articles.map(article => article.category.toLowerCase())));
  return categories.map((category) => ({
    category,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
  
  return {
    title: `${formattedCategory} Articles - Purrrfect Magazine`,
    description: `Read our latest articles about ${category.toLowerCase()}`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const categoryArticles = articles.filter(
    article => article.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{category}</h1>
          <p className="text-xl text-muted-foreground">
            Articles about {category.toLowerCase()}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryArticles.map(article => (
            <Card key={article.slug} className="group cursor-pointer">
              <div className="aspect-[3/2] relative overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-2 right-2">
                  {article.category}
                </Badge>
              </div>
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
                    {format(new Date(article.publishedAt), "MMMM d, yyyy")}
                  </div>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}