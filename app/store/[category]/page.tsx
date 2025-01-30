import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products, categories } from "../data";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams(): Promise<{ category: string }[]> {
  return categories.map((category) => ({
    category: category.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
  
  return {
    title: `${formattedCategory} - Purrrfect Store`,
    description: `Shop our collection of ${category.toLowerCase()} products for cats`,
    openGraph: {
      title: `${formattedCategory} - Purrrfect Store`,
      description: `Shop our collection of ${category.toLowerCase()} products for cats`,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
  const categoryProducts = products.filter(
    product => product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{categoryName}</h1>
          <p className="text-xl text-muted-foreground">
            Explore our collection of {categoryName.toLowerCase()} products
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryProducts.map(product => (
            <Card key={product.id} className="group overflow-hidden">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
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