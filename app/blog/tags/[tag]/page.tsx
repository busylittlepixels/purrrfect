import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Tag as TagIcon } from "lucide-react";
import { format } from "date-fns";
import { articles } from "../../[slug]/data";

export async function generateStaticParams() {
  const tags = Array.from(new Set(articles.flatMap(article => article.tags.map(tag => tag.toLowerCase()))));
  return tags.map((tag) => ({
    tag,
  }));
}

export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  const tag = params.tag.charAt(0).toUpperCase() + params.tag.slice(1);
  
  return {
    title: `${tag} Articles - Purrrfect Magazine`,
    description: `Read our latest articles tagged with ${tag.toLowerCase()}`,
  };
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const tagArticles = articles.filter(
    article => article.tags.some(tag => tag.toLowerCase() === params.tag.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <TagIcon className="h-6 w-6" />
            <h1 className="text-4xl font-bold">{params.tag}</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Articles tagged with "{params.tag}"
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tagArticles.map(article => (
            <Card key={article.slug} className="group cursor-pointer">
              <div className="aspect-[3/2] relative overflow-hidden">
                <img
                  src={article.image}
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
                    {format(article.publishedAt, "MMMM d, yyyy")}
                  </div>
                  <div className="flex gap-2">
                    {article.tags.map(tag => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
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