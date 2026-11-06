import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Eye, Gem, Lightbulb, Workflow } from "lucide-react";
import { ContactCta, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = { title: "About", description: "Learn about ROAYN's mission, vision, product philosophy, and business focus.", alternates: { canonical: "/about/" } };

export default function AboutPage() {
  return <main>
    <PageHero eyebrow="About ROAYN" title="A product company shaped by technology and creativity." copy="ROAYN is building a focused portfolio of original software, mobile experiences, and digital personalization products. Company formation is pending final state approval." />
    <section className="section"><div className="shell statement-grid"><article><Compass /><span>Mission</span><h2>To create useful, beautiful, and accessible digital products that enhance everyday experiences.</h2></article><article><Eye /><span>Vision</span><h2>To build a recognizable global ecosystem of innovative software and creative digital products.</h2></article></div></section>
    <section className="section section-muted"><div className="shell"><SectionHeading eyebrow="Product philosophy" title="Clarity before complexity." copy="The most memorable digital products combine a useful purpose with a distinctive point of view." /><div className="value-grid"><article><Lightbulb /><h3>Purpose-led ideas</h3><p>Every concept begins with a real use case or meaningful creative experience.</p></article><article><Gem /><h3>Considered craft</h3><p>Details, hierarchy, motion, and visual character work together as one system.</p></article><article><Workflow /><h3>Long-term thinking</h3><p>Maintainable foundations make products easier to improve and portfolios easier to grow.</p></article></div></div></section>
    <section className="section"><div className="shell split-layout"><div><SectionHeading eyebrow="Business focus" title="Building, publishing, and improving original products." copy="ROAYN focuses on Android applications, software utilities, Galaxy Themes, smartwatch faces, wallpapers, and other creative digital assets." /><Link className="button button-secondary" href="/products/">Explore the portfolio <ArrowRight size={17} /></Link></div><div className="focus-stack"><div><span>01</span><p>Product development</p></div><div><span>02</span><p>Creative design</p></div><div><span>03</span><p>Software publishing</p></div><div><span>04</span><p>User experience</p></div><div><span>05</span><p>Continuous improvement</p></div></div></div></section>
    <ContactCta />
  </main>;
}
