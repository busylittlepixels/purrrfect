import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, Tag, Folder } from 'lucide-react';
import { format } from "date-fns";
import { articles } from "./data";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Generates static paths for blog posts.
 */
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

/**
 * Generates metadata dynamically based on the blog post slug.
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.content.substring(0, 160),
    openGraph: {
      title: article.title,
      description: article.content.substring(0, 160),
      images: [{ url: article.image }],
    },
  };
}

/**
 * BlogPost component - Displays a blog post based on the slug.
 */
export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold">Article Not Found</h1>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative aspect-[2/1] mb-8 rounded-lg overflow-hidden">
          <img
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold">{article.title}</h1>

          <div className="flex flex-wrap gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {format(new Date(article.publishedAt), "MMMM d, yyyy")}
            </div>
            <div className="flex items-center gap-2">
              <Folder className="h-4 w-4" />
              {article.category}
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>

          <div
            className="prose prose-lg max-w-none mt-8"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </article>
      <Footer />
    </main>
  );
}