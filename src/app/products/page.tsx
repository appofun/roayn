import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductCatalog } from "@/components/product-catalog";
import { PageHero } from "@/components/ui";
import { publishedProducts } from "@/lib/products";

export const metadata: Metadata = { title: "Products", description: "Explore verified ROAYN applications, themes, watch faces, software, and digital products.", alternates: { canonical: "/products/" } };
export default function ProductsPage() { return <main><PageHero eyebrow="Product portfolio" title="Original products, organized for discovery." copy="Search and filter the complete public ROAYN portfolio. Only verified records with published status are shown." /><section className="section catalog-section"><div className="shell"><Suspense fallback={<div className="catalog-loading">Loading portfolio…</div>}><ProductCatalog products={publishedProducts} /></Suspense></div></section></main>; }
