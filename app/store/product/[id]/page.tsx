import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { products } from "../../data";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find(p => p.id.toString() === id);
  
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} - Purrrfect Store`,
    description: product.description,
    openGraph: {
      title: `${product.name} - Purrrfect Store`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find(p => p.id.toString() === id);

  if (!product) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold">Product Not Found</h1>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4">
                {product.category}
              </Badge>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="bg-white/90 text-black">
                  <Star className="h-3 w-3 fill-yellow-400 stroke-yellow-400 mr-1" />
                  {product.rating}
                </Badge>
              </div>
              <p className="text-2xl font-bold">${product.price}</p>
            </div>

            <p className="text-muted-foreground text-lg">{product.description}</p>

            <div className="flex gap-4">
              <Button size="lg" className="flex-1">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Additional Details */}
            <div className="border-t pt-6 mt-8">
              <h2 className="text-xl font-semibold mb-4">Product Details</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>Premium quality materials</li>
                <li>Perfect for all cat sizes</li>
                <li>Easy to clean and maintain</li>
                <li>Satisfaction guaranteed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}