import type { Metadata } from "next";
import Link from "next/link";
import { AppWindow, ArrowRight, Boxes, Brush, Check, CircleGauge, Cpu, Layers3, Palette, ShieldCheck, Sparkles, Watch } from "lucide-react";
import { ContactCta, Eyebrow, SectionHeading } from "@/components/ui";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const categories = [
  { title: "Mobile Applications", text: "Purposeful Android experiences designed around clarity, utility, and thoughtful interaction.", href: "/categories/apps/", icon: AppWindow },
  { title: "Software & Utilities", text: "Focused tools that make everyday digital tasks simpler and more dependable.", href: "/products/?category=Software+Utilities", icon: Boxes },
  { title: "Themes & Personalization", text: "Original visual systems for devices, built with a consistent creative language.", href: "/categories/themes/", icon: Palette },
  { title: "Wearable Experiences", text: "Watch-face concepts that balance glanceable information with expressive design.", href: "/categories/watch-faces/", icon: Watch },
] as const;

const principles = [
  ["01", "Useful by design", "We begin with the experience a product should improve, then remove everything that does not serve it."],
  ["02", "Crafted for context", "Mobile, wearable, and personalization products each demand a distinct interaction and visual system."],
  ["03", "Built to evolve", "Structured content and maintainable technology keep the portfolio ready for long-term expansion."],
] as const;

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="orb hero-orb-a" aria-hidden="true" />
        <div className="orb hero-orb-b" aria-hidden="true" />
        <div className="shell home-hero-layout">
          <div className="hero-copy">
            <Eyebrow>Product-focused technology</Eyebrow>
            <h1>Building digital experiences <span>for tomorrow.</span></h1>
            <p>ROAYN creates innovative mobile applications, digital products, and personalized technology experiences designed to inspire users around the world.</p>
            <div className="button-row hero-actions">
              <Link className="button button-primary" href="/products/">Explore our products <ArrowRight size={17} /></Link>
              <Link className="button button-secondary" href="/about/">Discover ROAYN</Link>
            </div>
            <div className="hero-proof" aria-label="ROAYN focus areas">
              <span><Check aria-hidden="true" /> Original products</span>
              <span><Check aria-hidden="true" /> Human-centered design</span>
              <span><Check aria-hidden="true" /> Global outlook</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract composition representing the ROAYN product ecosystem">
            <div className="art-shell">
              <div className="art-topline"><span>ROAYN / DIGITAL ECOSYSTEM</span><span>01 — 04</span></div>
              <div className="art-core"><div className="core-ring ring-one" /><div className="core-ring ring-two" /><div className="core-mark">R</div></div>
              <div className="art-metric metric-a"><AppWindow /><span>Mobile</span></div>
              <div className="art-metric metric-b"><Brush /><span>Creative</span></div>
              <div className="art-metric metric-c"><Watch /><span>Wearable</span></div>
              <div className="art-footer"><span>Technology</span><span>Creativity</span><span>Experience</span></div>
            </div>
          </div>
        </div>
        <div className="shell hero-footnote"><span>Creating Digital Experiences That Inspire.</span><span>Scroll to explore <span aria-hidden="true">↓</span></span></div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading eyebrow="What we create" title="One vision. Multiple digital expressions." copy="A growing ecosystem of useful software and original digital products, united by a clear standard of craft." />
          <div className="category-grid">
            {categories.map(({ title, text, href, icon: Icon }, index) => (
              <Link className="category-card" href={href} key={title}>
                <span className="card-index">0{index + 1}</span>
                <span className="category-icon"><Icon aria-hidden="true" /></span>
                <h3>{title}</h3><p>{text}</p><span className="card-link">Explore category <ArrowRight size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted featured-section">
        <div className="shell">
          <div className="featured-heading"><SectionHeading eyebrow="Featured products" title="The portfolio starts with proof, not placeholders." copy="Only verified, published products appear publicly. The portfolio is ready; releases will be added with authentic assets and official marketplace links." /><Link className="text-link" href="/products/">Open portfolio <ArrowRight size={16} /></Link></div>
          <div className="featured-empty">
            <div className="featured-visual" aria-hidden="true"><div /><div /><div /><Sparkles /></div>
            <div><span className="status-pill">Publishing system ready</span><h3>Ready for the first verified release.</h3><p>Product records support apps, Galaxy Themes, watch faces, wallpapers, digital assets, and utilities—with drafts hidden until publication.</p><Link className="button button-secondary" href="/products/">Explore the catalog</Link></div>
          </div>
        </div>
      </section>

      <section className="section about-band">
        <div className="shell split-layout wide-gap">
          <div className="sticky-copy"><Eyebrow>About ROAYN</Eyebrow><h2>Innovation is at our core.</h2><p>ROAYN is a product-focused technology company in formation, bringing software development and creative design into one coherent portfolio.</p><Link className="text-link" href="/about/">Our mission and vision <ArrowRight size={16} /></Link></div>
          <div className="principle-list">
            {principles.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="section technology-band">
        <div className="shell technology-layout">
          <div className="technology-art" aria-hidden="true">
            <div className="tech-axis axis-a" /><div className="tech-axis axis-b" /><div className="tech-node node-a"><Cpu /></div><div className="tech-node node-b"><Layers3 /></div><div className="tech-node node-c"><CircleGauge /></div><div className="tech-node node-d"><ShieldCheck /></div><div className="tech-center"><Sparkles /><span>ROAYN</span></div>
          </div>
          <div><Eyebrow>Technology & creativity</Eyebrow><h2>Technology meets imagination.</h2><p>We combine mobile-first thinking, performance awareness, and expressive visual design to create experiences that feel both useful and distinctive.</p><div className="capability-pills"><span>Mobile-first</span><span>User-centered</span><span>Performance-aware</span><span>Accessible</span></div><Link className="button button-secondary" href="/technology/">Explore our approach <ArrowRight size={17} /></Link></div>
        </div>
      </section>

      <section className="section ecosystem-section">
        <div className="shell">
          <SectionHeading eyebrow="Product ecosystem" title="Designed for the screens people use every day." align="center" />
          <div className="ecosystem-track">
            <Link href="/categories/apps/"><AppWindow /><span>Apps</span></Link><span className="track-line" />
            <Link href="/categories/themes/"><Palette /><span>Themes</span></Link><span className="track-line" />
            <Link href="/categories/watch-faces/"><Watch /><span>Watch faces</span></Link><span className="track-line" />
            <Link href="/categories/digital-assets/"><Brush /><span>Digital assets</span></Link>
          </div>
        </div>
      </section>
      <ContactCta />
    </main>
  );
}
