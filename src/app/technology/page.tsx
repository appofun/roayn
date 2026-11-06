import type { Metadata } from "next";
import { Gauge, Hand, Layers3, MonitorSmartphone, Palette, RefreshCw } from "lucide-react";
import { ContactCta, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = { title: "Technology", description: "ROAYN's mobile-first, user-centered approach to product design and improvement.", alternates: { canonical: "/technology/" } };
const capabilities = [
  [MonitorSmartphone, "Mobile-first development", "Interfaces are planned for the constraints and opportunities of mobile screens, touch, and real-world use."],
  [Hand, "User-centered design", "Navigation, content, and interaction are organized around clear user goals and accessible patterns."],
  [Gauge, "Performance optimization", "Static delivery, efficient assets, and restrained client-side code support faster, more dependable experiences."],
  [Palette, "Digital personalization", "Visual systems are designed to feel coherent across wallpapers, icons, themes, and wearable surfaces."],
  [Layers3, "Creative technologies", "Modern design tools and AI-enhanced workflows can support original ideation while human direction remains central."],
  [RefreshCw, "Quality and improvement", "Structured releases and feedback-informed iteration make products easier to maintain over time."],
] as const;
export default function TechnologyPage() { return <main><PageHero eyebrow="Technology & capabilities" title="A thoughtful process for digital products." copy="ROAYN combines practical engineering choices with a strong creative point of view. The approach is tailored to each product rather than built on unverified claims." /><section className="section"><div className="shell"><SectionHeading eyebrow="Our approach" title="Six principles guide the work." /><div className="capability-grid">{capabilities.map(([Icon,title,text], index)=><article key={title}><span className="card-index">0{index+1}</span><Icon aria-hidden="true"/><h2>{title}</h2><p>{text}</p></article>)}</div></div></section><section className="section section-muted"><div className="shell process-panel"><div><span className="kicker">From idea to release</span><h2>A clear product loop.</h2></div><ol><li><span>Discover</span><p>Define the audience, purpose, and verified constraints.</p></li><li><span>Design</span><p>Create the interaction and visual system.</p></li><li><span>Build</span><p>Implement with maintainable, appropriate technology.</p></li><li><span>Validate</span><p>Test function, accessibility, and performance.</p></li><li><span>Improve</span><p>Use real product evidence to guide updates.</p></li></ol></div></section><ContactCta /></main>; }
