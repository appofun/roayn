import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";

const columns = [
  {
    title: "Company",
    links: [["About", "/about/"], ["Technology", "/technology/"], ["Contact", "/contact/"]],
  },
  {
    title: "Products",
    links: [["All products", "/products/"], ["Android apps", "/categories/apps/"], ["Galaxy Themes", "/categories/themes/"], ["Watch faces", "/categories/watch-faces/"], ["Digital assets", "/categories/digital-assets/"]],
  },
  {
    title: "Resources",
    links: [["Support center", "/support/"], ["Privacy", "/privacy/"], ["Terms", "/terms/"], ["Sitemap", "/sitemap.xml"]],
  },
] as const;

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-intro">
          <Logo />
          <p>Original software and digital experiences designed with clarity, care, and imagination.</p>
          <span className="footer-status"><span /> Company formation pending final state approval</span>
        </div>
        {columns.map((column) => (
          <div className="footer-column" key={column.title}>
            <h2>{column.title}</h2>
            {column.links.map(([label, href]) => (
              <Link key={href} href={href}>{label}{href.endsWith(".xml") && <ArrowUpRight size={13} aria-hidden="true" />}</Link>
            ))}
          </div>
        ))}
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} ROAYN. All rights reserved.</p>
        <p>Creating Digital Experiences That Inspire.</p>
      </div>
    </footer>
  );
}
