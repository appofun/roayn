import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/ui";
import { getPublishedProduct, getRelatedProducts, publishedProducts } from "@/lib/products";

export const dynamicParams = false;

export function generateStaticParams() {
  const routes = publishedProducts.map((product) => ({ slug: product.slug }));
  return routes.length ? routes : [{ slug: "catalog-status" }];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getPublishedProduct(slug);
  if (!product) return {};
  return {
    title: product.seoTitle || product.name,
    description: product.seoDescription || product.shortDescription,
    alternates: { canonical: `/products/${product.slug}/` },
    openGraph: { images: product.coverImage ? [product.coverImage] : undefined },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getPublishedProduct(slug);
  if (!product) notFound();
  const related = getRelatedProducts(product);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.shortDescription,
    operatingSystem: product.platform.join(", "),
    applicationCategory: product.category,
    url: `https://roayn.com/products/${product.slug}/`,
  };
  return <main>
    <section className="product-hero"><div className="shell"><Breadcrumbs items={[{label:"Home",href:"/"},{label:"Products",href:"/products/"},{label:product.name}]} /><div className="product-hero-grid"><div className="product-icon-large"><span>{product.name.slice(0,1)}</span></div><div><span className="status-pill">{product.category}</span><h1>{product.name}</h1><p>{product.shortDescription}</p><div className="platform-row">{product.platform.map((item)=><span key={item}>{item}</span>)}</div><div className="button-row">{product.storeLinks.map((link)=><a key={link.url} className="button button-primary" href={link.url} target="_blank" rel="noopener noreferrer">{link.label}<ExternalLink size={16}/></a>)}<Link className="button button-secondary" href={`/support/?product=${product.slug}`}>Product support</Link></div></div></div></div></section>
    <section className="section"><div className="shell product-detail-grid"><article><h2>About this product</h2><p>{product.fullDescription}</p><h2>Features</h2><ul className="feature-list">{product.features.map((feature)=><li key={feature}><CheckCircle2/>{feature}</li>)}</ul></article><aside className="product-facts"><h2>Product information</h2><dl><div><dt>Version</dt><dd>{product.version}</dd></div><div><dt>Updated</dt><dd>{product.lastUpdated}</dd></div><div><dt>Developer</dt><dd>{product.developer}</dd></div><div><dt>Publisher</dt><dd>{product.publisher}</dd></div><div><dt>Supported devices</dt><dd>{product.supportedDevices.join(", ")}</dd></div></dl><Link className="text-link" href={product.privacyPolicyUrl}><ShieldCheck size={16}/>Privacy information</Link></aside></div></section>
    {product.screenshots.length > 0 && <section className="section section-muted"><div className="shell"><h2 className="standalone-heading">Screenshots</h2><div className="screenshot-grid">{product.screenshots.map((screenshot)=><Image key={screenshot} src={screenshot} alt={`${product.name} screenshot`} width={280} height={560} />)}</div></div></section>}
    {related.length > 0 && <section className="section"><div className="shell"><h2 className="standalone-heading">Related products</h2><div className="product-grid">{related.map((item)=><article className="product-card" key={item.id}><span className="kicker">{item.category}</span><h3>{item.name}</h3><p>{item.shortDescription}</p><Link className="text-link" href={`/products/${item.slug}/`}>View product<ArrowRight size={16}/></Link></article>)}</div></div></section>}
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} />
  </main>;
}
