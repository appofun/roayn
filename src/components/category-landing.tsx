import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/ui";

export function CategoryLanding({
  name,
  intro,
  highlights,
  compatibility,
}: {
  name: string;
  intro: string;
  highlights: string[];
  compatibility: string;
}) {
  return (
    <main>
      <PageHero eyebrow="Product category" title={name} copy={intro}>
        <div className="button-row hero-actions">
          <Link className="button button-primary" href="/products/">Browse catalog <ArrowRight size={17} /></Link>
          <Link className="button button-secondary" href="/support/">Get support</Link>
        </div>
      </PageHero>
      <section className="section">
        <div className="shell split-layout">
          <div>
            <SectionHeading eyebrow="Designed with purpose" title={`A considered approach to ${name.toLowerCase()}.`} copy="Every public product listing is based on verified content and authentic owner-supplied assets." />
          </div>
          <div className="check-list">
            {highlights.map((highlight) => <div key={highlight}><CheckCircle2 aria-hidden="true" /><span>{highlight}</span></div>)}
          </div>
        </div>
      </section>
      <section className="section section-muted">
        <div className="shell info-panel">
          <div>
            <span className="kicker">Compatibility</span>
            <h2>Check before you download.</h2>
          </div>
          <p>{compatibility}</p>
        </div>
      </section>
      <section className="section">
        <div className="shell empty-state compact-empty">
          <span className="status-pill">Catalog prepared</span>
          <h2>Verified products will appear here.</h2>
          <p>No {name.toLowerCase()} have been published to this website yet. Drafts remain private until their information and assets are confirmed.</p>
          <Link className="text-link" href="/products/">View the complete portfolio <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
