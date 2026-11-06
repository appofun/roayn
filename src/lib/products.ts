import draftProduct from "@/content/products/example-draft.json";
import { productSchema, type Product } from "@/types/product";

const sourceProducts = [draftProduct];

export const allProducts: Product[] = sourceProducts.map((product) =>
  productSchema.parse(product),
);

export const publishedProducts = allProducts.filter(
  (product) => product.status === "published",
);

export function getPublishedProduct(slug: string) {
  return publishedProducts.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: Product) {
  return publishedProducts
    .filter(
      (candidate) =>
        candidate.slug !== product.slug && candidate.category === product.category,
    )
    .slice(0, 3);
}
