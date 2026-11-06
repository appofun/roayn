"use client";

import Link from "next/link";
import { ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import type { Product } from "@/types/product";

const categories = ["All", "Android Apps", "Galaxy Themes", "Watch Faces", "Wallpapers", "Digital Assets", "Software Utilities"];

export function ProductCatalog({ products }: { products: Product[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [category, setCategory] = useState(searchParams.get("category") ?? "All");
  const [platform, setPlatform] = useState(searchParams.get("platform") ?? "All");
  const [sort, setSort] = useState(searchParams.get("sort") ?? "featured");

  const platforms = ["All", ...Array.from(new Set(products.flatMap((product) => product.platform)))];
  const filtered = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    return products
      .filter((product) => category === "All" || product.category === category)
      .filter((product) => platform === "All" || product.platform.includes(platform))
      .filter((product) => !normalized || [product.name, product.shortDescription, ...product.tags].join(" ").toLowerCase().includes(normalized))
      .sort((a, b) => {
        if (sort === "name") return a.name.localeCompare(b.name);
        if (sort === "newest") return b.updatedAt.localeCompare(a.updatedAt);
        return Number(b.featured) - Number(a.featured);
      });
  }, [category, platform, products, query, sort]);

  function syncUrl(values: { q?: string; category?: string; platform?: string; sort?: string }) {
    const params = new URLSearchParams(searchParams.toString());
    for (const [key, value] of Object.entries(values)) {
      if (!value || value === "All" || (key === "sort" && value === "featured")) params.delete(key);
      else params.set(key, value);
    }
    router.replace(`${pathname}${params.size ? `?${params}` : ""}`, { scroll: false });
  }

  return (
    <div className="catalog-shell">
      <div className="catalog-controls" aria-label="Product filters">
        <label className="search-field">
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">Search products</span>
          <input value={query} onChange={(event) => { setQuery(event.target.value); syncUrl({ q: event.target.value }); }} placeholder="Search products" type="search" />
        </label>
        <label>
          <span>Category</span>
          <select value={category} onChange={(event) => { setCategory(event.target.value); syncUrl({ category: event.target.value }); }}>
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          <span>Platform</span>
          <select value={platform} onChange={(event) => { setPlatform(event.target.value); syncUrl({ platform: event.target.value }); }}>
            {platforms.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          <span>Sort</span>
          <select value={sort} onChange={(event) => { setSort(event.target.value); syncUrl({ sort: event.target.value }); }}>
            <option value="featured">Featured</option>
            <option value="newest">Recently updated</option>
            <option value="name">Name</option>
          </select>
        </label>
      </div>

      {filtered.length ? (
        <div className="product-grid">
          {filtered.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-card-art" aria-hidden="true"><span>{product.name.slice(0, 1)}</span></div>
              <span className="kicker">{product.category}</span>
              <h2>{product.name}</h2>
              <p>{product.shortDescription}</p>
              <div className="platform-row">{product.platform.map((item) => <span key={item}>{item}</span>)}</div>
              <Link className="text-link" href={`/products/${product.slug}/`}>View product <ArrowRight size={16} /></Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon"><SlidersHorizontal aria-hidden="true" /></div>
          <span className="status-pill">Portfolio foundation ready</span>
          <h2>No verified products are published yet.</h2>
          <p>The catalog is ready for real ROAYN products. Draft and archived records stay hidden automatically, and no placeholder product is presented as released.</p>
          <div className="button-row">
            <Link className="button button-primary" href="/contact/">Contact ROAYN</Link>
            <Link className="button button-secondary" href="/support/">Visit support</Link>
          </div>
        </div>
      )}
    </div>
  );
}
