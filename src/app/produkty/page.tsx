import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getPublishedProductConfigs } from "@/lib/products";
import { toProductCatalog } from "@/lib/products";

export default async function ProductsPage() {
  const productCatalog = toProductCatalog(getPublishedProductConfigs());

  return (
    <div className="min-h-screen bg-white text-foreground">
      <main className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            Pełna oferta drukarska
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {productCatalog.map((item) => (
            <Card
              key={item.value}
              className="h-full border-border/80 bg-card transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">{item.label}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
